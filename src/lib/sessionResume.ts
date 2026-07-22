// ── Mid-session resume ───────────────────────────────────────────────────────
// Per-word progress (star / learned / study count) already persists instantly
// to localStorage via useVocabulary, so that survives a reload no matter
// what. What did NOT survive was the in-progress SESSION itself — which
// words are queued, which card/question you're on, your running score.
// That's plain React state, so a reload (a real refresh, the PWA's own
// auto-update reload, or the boot-recovery script in index.html clearing a
// stale cache) silently threw the learner back to the setup screen with no
// memory of being 8/20 through a deck a moment ago.
//
// This is a tiny sessionStorage-backed helper (not localStorage — an
// in-progress session is inherently tied to "still using the app right
// now"; it should resume across a reload but not resurface weeks later as
// a stale half-finished quiz). Each study page stores its own small JSON
// blob describing just enough to rebuild its queue from live word IDs, and
// clears it the moment a session finishes or the learner explicitly starts
// a new one.
export function saveSession<T>(key: string, data: T): void {
  try {
    sessionStorage.setItem(key, JSON.stringify(data));
  } catch {
    // Storage full/unavailable — the session just won't resume after a
    // reload; nothing else in the app depends on this succeeding.
  }
}

export function loadSession<T>(key: string): T | null {
  try {
    const raw = sessionStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

export function clearSession(key: string): void {
  try {
    sessionStorage.removeItem(key);
  } catch {
    // ignore
  }
}
