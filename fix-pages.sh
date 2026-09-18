#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# Проверяет и чинит GitHub Pages для превью-репозиториев.
#
# Проблема: если у репозитория Pages стоит в режиме GitHub Actions
# (build_type=workflow), ветка gh-pages ИГНОРИРУЕТСЯ — сайт продолжает
# раздавать прежний деплой и честно отдаёт 200. По коду ответа это не ловится,
# сверять нужно содержимое.
#
# Лечение: PUT с build_type=legacy и источником gh-pages, затем сборка.
#
#   ./fix-pages.sh --check          показать build_type по каждому
#   ./fix-pages.sh --fix            починить те, что в режиме workflow
#   ./fix-pages.sh --fix CabHUB     починить один
#   ./fix-pages.sh --verify         сверить содержимое живых страниц с ветками
# ---------------------------------------------------------------------------
set -uo pipefail

OWNER="Lordpluha"
LOWER="$(echo "$OWNER" | tr 'A-Z' 'a-z')"
REPOS=(CabHUB Cube Fesco LIAN ZERNO Sublime FND CarStore GameBlog amazon-tables
       hellome-money-landing Boostfolia messenger-layout telegram-copy-layout
       gulp-template webpack-template chronos uevent usof card-game)

c_ok=$'\033[32m'; c_err=$'\033[31m'; c_warn=$'\033[33m'; c_dim=$'\033[2m'; c_off=$'\033[0m'

command -v gh >/dev/null || { echo "не найден gh"; exit 1; }
gh auth status >/dev/null 2>&1 || { echo "gh не авторизован"; exit 1; }

build_type() { gh api "repos/$OWNER/$1/pages" --jq '.build_type // "-"' 2>/dev/null; }

branch_title() {
  gh api "repos/$OWNER/$1/contents/index.html?ref=gh-pages" --jq '.content' 2>/dev/null \
    | tr -d '\n' | base64 -d 2>/dev/null \
    | grep -o '<title>[^<]*</title>' | head -1 | sed 's|</\?title>||g'
}

live_title() {
  curl -sL --max-time 25 "https://$LOWER.github.io/$1/" 2>/dev/null \
    | grep -o '<title>[^<]*</title>' | head -1 | sed 's|</\?title>||g'
}

compare_one() {
  local r="$1" bt lt code
  code="$(curl -s -o /dev/null -w '%{http_code}' -L --max-time 25 "https://$LOWER.github.io/$r/")"
  bt="$(branch_title "$r")"
  lt="$(live_title "$r")"
  if [ "$code" != "200" ]; then
    printf '  %-24s %sHTTP %s%s\n' "$r" "$c_err" "$code" "$c_off"
  elif [ -z "$bt" ]; then
    printf '  %-24s %sв ветке нет <title> — сверь вручную%s\n' "$r" "$c_warn" "$c_off"
  elif [ "$bt" = "$lt" ]; then
    printf '  %-24s %sсовпадает%s %s(%s)%s\n' "$r" "$c_ok" "$c_off" "$c_dim" "$lt" "$c_off"
  else
    printf '  %-24s %sСТАРЫЙ ДЕПЛОЙ%s\n' "$r" "$c_err" "$c_off"
    printf '    %sв ветке:  %s%s\n' "$c_dim" "$bt" "$c_off"
    printf '    %sна сайте: %s%s\n' "$c_dim" "$lt" "$c_off"
  fi
}

fix_one() {
  local r="$1" bt out rc
  bt="$(build_type "$r")"
  printf '\n── %s (build_type=%s)\n' "$r" "$bt"

  out="$(gh api -X PUT "repos/$OWNER/$r/pages" -f build_type=legacy \
          -f 'source[branch]=gh-pages' -f 'source[path]=/' 2>&1)"; rc=$?
  if [ $rc -eq 0 ]; then
    printf '  %s✓%s переключён на legacy / gh-pages\n' "$c_ok" "$c_off"
  else
    printf '  %s✗ не удалось:%s %s\n' "$c_err" "$c_off" "$(echo "$out" | head -2 | tr '\n' ' ')"
    return 1
  fi

  out="$(gh api -X POST "repos/$OWNER/$r/pages/builds" 2>&1)"; rc=$?
  if [ $rc -eq 0 ]; then printf '    сборка запрошена\n'
  else printf '    %sсборку запросить не вышло: %s%s\n' "$c_dim" "$(echo "$out"|head -1)" "$c_off"; fi

  local i st
  for i in $(seq 1 25); do
    sleep 6
    st="$(gh api "repos/$OWNER/$r/pages/builds/latest" --jq '.status' 2>/dev/null)"
    case "$st" in
      built)
        printf '  %s✓ собрано%s — сверяю содержимое\n' "$c_ok" "$c_off"
        sleep 10; compare_one "$r"; return 0 ;;
      errored|error)
        printf '  %s✗ сборка упала: %s%s\n' "$c_err" \
          "$(gh api "repos/$OWNER/$r/pages/builds/latest" --jq '.error.message' 2>/dev/null)" "$c_off"
        return 1 ;;
    esac
  done
  printf '  %sсборка всё ещё идёт (%s) — прогони --verify позже%s\n' "$c_warn" "${st:-?}" "$c_off"
}

case "${1:---check}" in
  --check)
    echo "Режим Pages по репозиториям:"; echo
    for r in "${REPOS[@]}"; do
      bt="$(build_type "$r")"
      case "$bt" in
        workflow) printf '  %-24s %sworkflow — ветка игнорируется, нужна починка%s\n' "$r" "$c_err" "$c_off" ;;
        legacy)   printf '  %-24s %slegacy%s\n' "$r" "$c_ok" "$c_off" ;;
        *)        printf '  %-24s %s%s%s\n' "$r" "$c_warn" "$bt" "$c_off" ;;
      esac
    done
    echo; echo "Чинить: ./fix-pages.sh --fix     Сверить содержимое: ./fix-pages.sh --verify"
    ;;
  --verify)
    echo "Сверка живых страниц с содержимым веток gh-pages:"; echo
    for r in "${REPOS[@]}"; do compare_one "$r"; done
    ;;
  --fix)
    if [ -n "${2:-}" ]; then
      fix_one "$2"
    else
      for r in "${REPOS[@]}"; do
        [ "$(build_type "$r")" = "workflow" ] && fix_one "$r"
      done
      echo; echo "── сверка содержимого"
      for r in "${REPOS[@]}"; do compare_one "$r"; done
    fi
    ;;
  *) echo "режимы: --check | --fix [repo] | --verify"; exit 1 ;;
esac
