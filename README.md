# FuturX – Weiterbildungen & Impulse

Interne Website mit kuratierten Weiterbildungen, Modul-Ideen und Fachimpulsen für FuturX.
Statische Astro-Site, veröffentlicht über GitHub Pages. Der Link wird intern
per Mail verteilt; die Seite ist auf `noindex` gestellt (nicht in Suchmaschinen).

## Aufbau

- Inhalte liegen als Markdown in `src/content/` (Ausgaben, Weiterbildungen, Module).
- Das Datenmodell steht in `src/content/config.ts` und wird beim Build geprüft.
- Layout und Gestaltung in `src/layouts`, `src/components`, `src/styles`.
- Neue Ausgaben ergänzen nur Inhalte – Layout bleibt unverändert.

## Lokal starten

```bash
npm install
npm run dev        # Vorschau unter http://localhost:4321/FuturX-Fachentwicklung
npm run build      # Produktions-Build nach dist/ (prüft auch das Datenmodell)
```

Node 18+ nötig. Der erste `npm run build` sollte fehlerfrei durchlaufen, bevor
die Sechs-Wochen-Routine eingerichtet wird.

## Veröffentlichen

Ein Push auf `main` löst den Workflow in `.github/workflows/deploy.yml` aus, der
die Seite baut und auf GitHub Pages veröffentlicht. Einmalig in den
Repository-Einstellungen unter **Settings → Pages** die Quelle auf
**GitHub Actions** stellen.

URL nach dem ersten Deploy:
`https://subsudo.github.io/FuturX-Fachentwicklung/`

Bei eigener Subdomain (z. B. radar.futurx.ch) `base` in `astro.config.mjs`
entfernen und `site` anpassen.

## Redaktioneller Ablauf

Neue Ausgaben erstellt die Claude-Routine (siehe `CLAUDE.md`) über einen eigenen
Branch und einen Pull Request. Direkt auf `main` wird nicht gepusht; die
Freigabe (Merge) erfolgt durch einen Menschen.

## Wichtig

- Keine Personen-, Teilnehmenden- oder Evaluationsdaten in dieses Repository.
  Interne Grundlagen liegen ausschliesslich in Google Drive.
- Keine Tokens oder Zugangsdaten committen.
