# ESL Master Vocab — Update Notes (v2.2)

## Mid-session progress now survives a reload

Per-word progress (star, learned, study count, streaks) already saved
instantly to this browser's local storage — that was never at risk. What
could get lost was the *in-progress session itself*: if the app reloaded
partway through a flashcard deck, a quiz, a spelling round, or a matching
game — from a real refresh, an app update, or the existing stale-cache
auto-recovery in `index.html` — you'd land back on the setup screen with
no memory of being partway through.

**What changed:** Flashcards, Quiz, Spelling, and Matching each now save a
small snapshot of the active session (which words/questions are queued,
your position, your score/streak so far) to this browser's session storage
as you go. If the page reloads while a session is active, it picks back up
exactly where it left off instead of restarting. The snapshot is cleared
the moment a session finishes, or the moment you start a new one, so it
never resurfaces a stale half-finished session later — and it only lives
for as long as the browser tab stays open, the same way an "in-progress"
session should.

No new dependencies, no build/deploy changes — this is app-code only.
Deploy the same way as always (see `DEPLOY_ME_FIRST.md`).

## Also fixed
- A pre-existing TypeScript type error in `Matching.tsx` (`NodeJS.Timeout`
  used in a browser-only file) — didn't break the production build, but
  now `tsc --noEmit` passes clean for this file too.
