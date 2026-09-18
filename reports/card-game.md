
## 2026-09-07 — fix pass: battle screen rendered as an empty purple table

**Symptom.** `pages/battle-field.html` rendered as flat purple blocks: the
board background, two empty player panels showing a placeholder avatar and
`100` HP, a disabled "Turn completed!" button, and nothing else. No console
errors, no failed requests. (The entry page, main menu, lobby, collection,
profile, login and connect-room pages were all fine — the defect is on this one
page.)

**Cause.** `utils/battle.js`, in the socket `onopen` handler:

```js
gameID = params.get("code") || params.get("gameId") || params.get("game");
if (!gameID) return;                 // <- bailed out here
```

The battle screen is normally reached from the lobby, which navigates to
`./battle-field.html?gameId=${game.id}`. Opened directly — a bookmark, a link
from the portfolio index, a refresh after the query string is lost — there is
no id, the handler returned before sending `joinGame`, so the demo socket never
emitted `gameData`, `handleBattleStart()` never ran, and `#battle-field` kept
the `hidden` class it ships with in the markup. Hence: board chrome, no board.

**Fix.** In the offline demo build there is exactly one game, so fall back to
its code instead of bailing:

```js
import { DEMO } from "../demo/mode.js";
import { DEMO_GAME_CODE } from "../demo/fixtures.js";
…
if (!gameID && DEMO) gameID = DEMO_GAME_CODE;
if (!gameID) return;
```

The live-backend path (`window.CARD_GAME_LIVE_API === true`) is unchanged — it
still returns early when no game is addressed, which is correct there. The
change is commented in place.

Also added `.nojekyll` at the repo root (standard Pages hygiene).

**Verified.** `http://localhost:PORT/card-game/pages/battle-field.html` with no
query string now renders the full board: both named players with avatars and HP,
the six-card hand with artwork and attack/defence stats, the six face-down
opponent cards, the drop zone and the live turn timer. 0 console errors,
0 requests >= 400. Re-checked with `?gameId=412` (identical) and re-checked
index / login / main-menu / lobby / collection / profile / connect-room for
regressions — all clean.
