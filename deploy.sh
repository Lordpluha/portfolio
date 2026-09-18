#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# Деплой подготовленных превью на GitHub Pages.
#
# Что делает:
#   - для каждого проекта пушит СОБРАННОЕ превью в ветку gh-pages его репозитория
#   - ветка main / master НЕ трогается ни в одном репозитории
#   - включает GitHub Pages с источником gh-pages (если ещё не включён)
#   - для portfolio пушит исходники в main — дальше работают GitHub Actions
#
# Требования: git, gh (авторизованный: gh auth status), rsync
#
# Использование:
#   ./deploy.sh --list              показать план, ничего не делать
#   ./deploy.sh --only cube         задеплоить один проект (начни с этого)
#   ./deploy.sh --previews          все превью, без portfolio
#   ./deploy.sh --portfolio         портфолио в repo portfolio (URL .../portfolio/)
#   ./deploy.sh --root              портфолио в <owner>.github.io (URL в корне домена)
#   ./deploy.sh --all               всё
# ---------------------------------------------------------------------------
set -euo pipefail

OWNER="Lordpluha"
# базовый URL remote; переопределяется только для локального теста скрипта
REMOTE_BASE="${REMOTE_BASE:-https://github.com/$OWNER}"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PREVIEW_DIR="$ROOT/preview"
APP_DIR="$ROOT/portfolio-app"
WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

# slug -> имя репозитория на GitHub
declare -A REPO=(
  [cabhub]=CabHUB
  [cube]=Cube
  [fesco]=Fesco
  [lian]=LIAN
  [zerno]=ZERNO
  [sublime]=Sublime
  [fnd]=FND
  [carstore]=CarStore
  [gameblog]=GameBlog
  [amazon-tables]=amazon-tables
  [hellome-money-landing]=hellome-money-landing
  [boostfolia]=Boostfolia
  [messenger-layout]=messenger-layout
  [telegram-copy-layout]=telegram-copy-layout
  [gulp-template]=gulp-template
  [webpack-template]=webpack-template
  [chronos]=chronos
  [uevent]=uevent
  [usof]=usof
  [card-game]=card-game
  [webster]=webster
)

ORDER=(cabhub cube fesco lian zerno sublime fnd carstore gameblog amazon-tables
       hellome-money-landing boostfolia messenger-layout telegram-copy-layout
       gulp-template webpack-template chronos uevent usof card-game webster)

c_ok=$'\033[32m'; c_err=$'\033[31m'; c_dim=$'\033[2m'; c_off=$'\033[0m'
say()  { printf '%s\n' "$*"; }
ok()   { printf '%s✓%s %s\n' "$c_ok" "$c_off" "$*"; }
err()  { printf '%s✗%s %s\n' "$c_err" "$c_off" "$*" >&2; }
dim()  { printf '%s%s%s\n' "$c_dim" "$*" "$c_off"; }

preflight() {
  command -v gh  >/dev/null || { err "не найден gh — https://cli.github.com"; exit 1; }
  command -v git >/dev/null || { err "не найден git"; exit 1; }
  gh auth status >/dev/null 2>&1 || { err "gh не авторизован — выполни: gh auth login"; exit 1; }
  [ -d "$PREVIEW_DIR" ] || { err "нет папки $PREVIEW_DIR"; exit 1; }
}

# Включить Pages с источником gh-pages. Идемпотентно.
enable_pages() {
  local repo="$1"
  if gh api "repos/$OWNER/$repo/pages" >/dev/null 2>&1; then
    gh api -X PUT "repos/$OWNER/$repo/pages" \
      -f 'source[branch]=gh-pages' -f 'source[path]=/' >/dev/null 2>&1 \
      && dim "    Pages уже был включён, источник подтверждён" \
      || dim "    Pages уже включён (источник изменить не удалось — проверь вручную)"
  else
    gh api -X POST "repos/$OWNER/$repo/pages" \
      -f 'source[branch]=gh-pages' -f 'source[path]=/' >/dev/null 2>&1 \
      && dim "    Pages включён" \
      || dim "    не удалось включить Pages автоматически — Settings → Pages → gh-pages"
  fi
}

deploy_preview() {
  local slug="$1" repo="${REPO[$slug]}" src="$PREVIEW_DIR/$slug"

  [ -d "$src" ] || { err "$slug: нет папки $src"; return 1; }
  [ -f "$src/index.html" ] || { err "$slug: нет index.html"; return 1; }

  say ""
  say "── $slug → $OWNER/$repo (ветка gh-pages)"

  local d="$WORK/$slug"
  mkdir -p "$d"
  cp -a "$src"/. "$d"/
  rm -rf "$d/.git"

  # Без .nojekyll GitHub Pages прогоняет всё через Jekyll,
  # а он игнорирует файлы и папки, начинающиеся с подчёркивания.
  touch "$d/.nojekyll"

  (
    cd "$d"
    git init -q -b gh-pages
    git add -A
    git -c user.email="${GIT_AUTHOR_EMAIL:-tesluakevlad@gmail.com}" \
        -c user.name="${GIT_AUTHOR_NAME:-Vladyslav Tesliuk}" \
        commit -q -m "deploy: static preview build"
    git remote add origin "$REMOTE_BASE/$repo.git"
    # force — ветка gh-pages содержит только собранную статику и всегда
    # переписывается целиком; main/master этой командой не затрагивается
    git push -q --force origin gh-pages
  )

  ok "$slug запушен"
  enable_pages "$repo"
  say "    https://$(echo "$OWNER" | tr 'A-Z' 'a-z').github.io/$repo/"
}

deploy_portfolio() {
  # $1 — имя репозитория. Для <owner>.github.io воркфлоу сам соберёт с base-href /,
  # для любого другого — с /<repo>/.
  local repo="${1:-portfolio}"
  say ""
  say "── портфолио → $OWNER/$repo (ветка main, дальше GitHub Actions)"
  [ -d "$APP_DIR" ] || { err "нет папки $APP_DIR"; return 1; }

  local d="$WORK/portfolio"
  mkdir -p "$d"
  cp -a "$APP_DIR"/. "$d"/
  rm -rf "$d/.git" "$d/node_modules" "$d/.angular" "$d/dist"

  (
    cd "$d"
    git init -q -b main
    git add -A
    git -c user.email="${GIT_AUTHOR_EMAIL:-tesluakevlad@gmail.com}" \
        -c user.name="${GIT_AUTHOR_NAME:-Vladyslav Tesliuk}" \
        commit -q -m "feat: Angular portfolio site with Pages and GHCR workflows"
    git remote add origin "$REMOTE_BASE/$repo.git"
    git push -q --force origin main
  )
  ok "исходники запушены"

  # Для Actions-деплоя источником Pages должен быть workflow, а не ветка
  gh api -X POST "repos/$OWNER/$repo/pages" -f 'build_type=workflow' >/dev/null 2>&1 \
    || gh api -X PUT "repos/$OWNER/$repo/pages" -f 'build_type=workflow' >/dev/null 2>&1 \
    || dim "    источник Pages выставь вручную: Settings → Pages → Source: GitHub Actions"

  dim "    сборка идёт в Actions — следить: gh run watch -R $OWNER/$repo"
  local low; low=$(echo "$OWNER" | tr 'A-Z' 'a-z')
  if [ "$(echo "$repo" | tr 'A-Z' 'a-z')" = "$low.github.io" ]; then
    say "    https://$low.github.io/"
  else
    say "    https://$low.github.io/$repo/"
  fi
}

verify() {
  say ""
  say "── проверка (Pages поднимается 1–3 минуты, 404 сразу после пуша — норма)"
  local base="https://$(echo "$OWNER" | tr 'A-Z' 'a-z').github.io"
  for slug in "${ORDER[@]}"; do
    local repo="${REPO[$slug]}"
    printf '  %-24s %s\n' "$slug" \
      "$(curl -s -o /dev/null -w '%{http_code}' -L "$base/$repo/" || echo ERR)"
  done
  if gh repo view "$OWNER/$OWNER.github.io" >/dev/null 2>&1; then
    printf '  %-24s %s\n' "портфолио (корень)" \
      "$(curl -s -o /dev/null -w '%{http_code}' -L "$base/" || echo ERR)"
  else
    printf '  %-24s %s\n' "portfolio" \
      "$(curl -s -o /dev/null -w '%{http_code}' -L "$base/portfolio/" || echo ERR)"
  fi
}

main() {
  local mode="${1:---list}"
  case "$mode" in
    --list)
      say "План деплоя:"
      for slug in "${ORDER[@]}"; do
        local s="$PREVIEW_DIR/$slug"
        printf '  %-24s → %-24s %s\n' "$slug" "${REPO[$slug]}:gh-pages" \
          "$([ -d "$s" ] && du -sh "$s" 2>/dev/null | cut -f1 || echo 'НЕТ ПАПКИ')"
      done
      printf '  %-24s → %-24s %s\n' "portfolio" "portfolio:main" \
        "$([ -d "$APP_DIR" ] && echo 'исходники + Actions' || echo 'НЕТ ПАПКИ')"
      say ""
      say "Ничего не отправлено. Запусти с --only <slug>, --previews, --portfolio или --all"
      ;;
    --only)
      preflight
      local slug="${2:-}"
      [ -n "$slug" ] || { err "укажи slug: ./deploy.sh --only cube"; exit 1; }
      [ -n "${REPO[$slug]:-}" ] || { err "неизвестный slug: $slug"; exit 1; }
      deploy_preview "$slug"
      ;;
    --previews)
      preflight
      for slug in "${ORDER[@]}"; do deploy_preview "$slug" || err "$slug: пропущен"; done
      verify
      ;;
    --portfolio)
      preflight
      deploy_portfolio "portfolio"
      ;;
    --root)
      preflight
      # корневой сайт: репозиторий обязан называться ровно <owner>.github.io
      local rr="$OWNER.github.io"
      if ! gh repo view "$OWNER/$rr" >/dev/null 2>&1; then
        err "нет репозитория $OWNER/$rr — создай его публичным:"
        err "  gh repo create $OWNER/$rr --public"
        exit 1
      fi
      deploy_portfolio "$rr"
      ;;
    --all)
      preflight
      for slug in "${ORDER[@]}"; do deploy_preview "$slug" || err "$slug: пропущен"; done
      # корневой сайт имеет приоритет: если <owner>.github.io существует, портфолио
      # едет туда, иначе — в старый репозиторий portfolio
      if gh repo view "$OWNER/$OWNER.github.io" >/dev/null 2>&1; then
        deploy_portfolio "$OWNER.github.io"
      else
        deploy_portfolio "portfolio"
      fi
      verify
      ;;
    --verify) verify ;;
    *) err "неизвестный режим: $mode"; exit 1 ;;
  esac
}

main "$@"
