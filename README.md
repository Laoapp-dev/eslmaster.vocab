# ESL Master Vocab

A simple, light, fast ESL vocabulary learning webapp — **9,142 words**
bundled directly into the app, no server, no external accounts, no data
sync of any kind.

## What's inside

- **9,142-word ESL curriculum** (`src/data/defaultVocabulary.json`) shipped
  straight in the app's code — CEFR levels A1–C2, definitions, example
  sentences, synonyms/antonyms, categories, and Lao/Thai translations.
  Loaded into memory on open; never fetched from a network, never synced.
- **Flashcards, Quiz, Matching, and Spelling** study modes.
- **Writing & Speaking Practice** with optional AI scoring/feedback
  (Google Gemini) and AI voice playback (ElevenLabs) — both configured
  once by an admin in Admin → AI Keys and then available to every learner.
- **AI Vocabulary Lessons** — short, level-appropriate mini-lessons and
  quizzes generated on demand from the built-in word list.
- **Admin Panel** — just two things: user accounts, and the two AI keys
  above. That's it.
- **Everything else is local.** Each learner's own added words, study
  progress, streaks, and settings live only in their own browser
  (`localStorage`). Nothing is exported, imported, or synced anywhere.

## Why "simple, light, fast"

- No backend, no database, no GitHub/Google Sheet sync, no CSV/JSON
  import-export tooling — one static site.
- Pages are code-split and lazy-loaded, so the initial screen renders
  before the 9,000+ word bundle even finishes loading.
- Works fully offline once loaded (PWA + service worker).

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
```

## Configuring AI (optional)

Log in as an admin → **Admin Panel → AI Keys** → paste a
[Google Gemini](https://aistudio.google.com/app/apikey) key (free tier
available) to enable AI-generated lessons, practice questions, and
writing/speaking feedback for every learner. Add an
[ElevenLabs](https://elevenlabs.io) key too for natural AI voice
playback. Both are optional — the app works without them, just with
simpler local scoring instead of AI feedback.

## Deploying

GitHub Actions workflows are included for GitHub Pages
(`.github/workflows/deploy.yml`) and Cloudflare Pages
(`.github/workflows/deploy-cloudflare.yml`) — push to `main` and it
deploys automatically. No secrets or environment variables are required
for either, since the app has no external data sync.

## Tech stack

React + TypeScript + Vite, Tailwind CSS, React Router, Framer Motion.
