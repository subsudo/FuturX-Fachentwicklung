# CLAUDE.md – Arbeitsregeln für den FuturX-Fachentwicklungsradar

Diese Datei ist verbindlich. Sie beschreibt, was FuturX ist, wie Inhalte
ausgewählt werden und wie eine neue Ausgabe technisch entsteht. Bei jedem Lauf
zuerst vollständig lesen.

## Was ist FuturX

FuturX ist eine Non-Profit-Genossenschaft in Luzern (futurx.ch), die Jugendliche
und junge Erwachsene individuell in die Arbeitswelt begleitet. Drei Fachbereiche:

- **Berufsintegration** – Bewerbung, Lehrstellen- und Arbeitssuche, Job Coaching,
  Arbeitsmarkt, Zusammenarbeit mit RAV/IV/Sozialdiensten, Supported Employment.
- **Bildung & Lehrbegleitung** – Unterricht in Deutsch/DaZ, Mathematik,
  Allgemeinbildung; Didaktik und Pädagogik, Projektunterricht, selbstorganisiertes
  Lernen, Grundkompetenzen, Lerncoaching, heterogene Gruppen, Prüfungsvorbereitung
  (Stellwerk/Multicheck), Begleitung von EBA-/EFZ-Lernenden. Digitale Medien und KI
  sind EIN Thema unter vielen.
- **Beratung** – lösungsorientierte und systemische Beratung, Motivational
  Interviewing, Gesprächsführung, psychische Gesundheit, ADHS/Neurodiversität,
  Krisenintervention, interkulturelle Kommunikation. Keine Therapieausbildungen.

Zielgruppen: Jugendliche im Übergang Schule–Beruf, junge Erwachsene ohne Abschluss,
Menschen mit Migrations-/Fluchterfahrung, geringen Deutschkenntnissen, schulischen
Lücken oder psychischen/sozialen Belastungen, Lernende in EBA/EFZ.

## Was dieses Repository ist

Eine statische Astro-Website mit den veröffentlichten Ausgaben des Radars. Die
publizierten Inhalte hier sind zugleich das Gedächtnis gegen Wiederholungen: Was
im Repo steht, gilt als bereits veröffentlicht.

Trennung der Datenorte:
- **Google Drive** – interne Recherche-Grundlagen (Modulverlauf, Themenwünsche,
  ergänzende Quellenlisten). Reiner Input.
- **Dieses Repo** – veröffentlichte Inhalte, Ausgaben, Website, Archiv.

Niemals Personen-, Teilnehmenden- oder Evaluationsdaten in dieses Repo schreiben.

## Grenzen der Automation

- Nur Inhalte ergänzen. Layout, Komponenten, Styles und Konfiguration nicht
  verändern, ausser es ist zwingend nötig und wird im Pull Request begründet.
- Nie direkt auf `main` pushen. Immer Branch + Pull Request. Menschen mergen.
- Keine Secrets/Tokens committen.
- **Falls die Grundstruktur fehlt** (dieses CLAUDE.md, `src/content/config.ts`,
  die Collections oder das Website-Gerüst): den redaktionellen Lauf abbrechen,
  keine neue Architektur improvisieren, sondern klar dokumentieren, was fehlt.

## Datenmodell (siehe src/content/config.ts)

- **Ausgabe** (`src/content/ausgaben/JJJJ-MM.md`): titel, monatLabel, datum (ISO),
  einleitung. Der Dateiname ist der Slug (z. B. `2026-07`).
- **Weiterbildung** (`src/content/weiterbildungen/*.md`): titel, anbieter, bereich
  (`berufsintegration|bildung|beratung`), ausgabe (Slug), url (Kursseite),
  datumLabel, enddatum (ISO, optional), ort, format (`praesenz|online|hybrid`),
  preisChf (max 400), featured (bool). Body = Beschreibung.
- **Modulimpuls** (`src/content/module/*.md`): titel, ausgabe, kategorie
  (`gesellschaft-schweiz|psychologie-gesundheit|beruf-alltag|technik-jugendkultur`),
  teaser, warum[], zugaenge[3–5], verbindungen[], quellen[2–4 {label,url}].

IDs/Dateinamen eindeutig, Schema z. B. `wb-JJJJ-MM-NN.md`, `mod-JJJJ-MM-NN.md`.
Daten immer ISO (`YYYY-MM-DD`). `featured: true` sparsam (1–3 pro Bereich).

Abgelaufene Kurse müssen nicht manuell gepflegt werden: Ist `enddatum`
überschritten, graut die Website den Kurs automatisch aus und blendet den Link aus.

## Auswahlregeln Weiterbildungen

- **Budget – harte Grenze:** Kurskosten höchstens **CHF 400 pro Person**. Alles
  darüber wird ausgeschlossen. Gelten unterschiedliche Preise (Mitglied/Nichtmitglied),
  zählt der höhere. Keine mehrtägigen Kurse, CAS oder Lehrgänge.
- **Format:** eintägige Kurse, Halbtageskurse, kurze Webinare oder Reihen aus zwei
  bis drei Terminen.
- **Region:** Luzern und Zentralschweiz zuerst; darüber hinaus gut erreichbare
  Schweizer Orte (Zürich, Bern, Aarau, Olten, Zug, Basel) und Online schweizweit.
  Weitere Anreise nur für eine besonders starke Empfehlung.
- **Anbieter-Vielfalt:** von einem Anbieter höchstens **ein Angebot pro Fachbereich**
  und **höchstens drei in der ganzen Ausgabe**. Bewusst über viele Anbieter streuen.
- **Thematische Breite:** in jedem Bereich verschiedene Themen. Im Bereich Bildung
  ausdrücklich auch Didaktik, Deutsch/DaZ, Mathematik, Allgemeinbildung,
  Projektunterricht, Lerncoaching – nicht nur KI. **Höchstens ein bis zwei
  KI-Angebote pro Ausgabe.**
- **Verlinkung:** immer die **Kursdetailseite** (mit Datum, Preis, Anmeldung), nie
  ein Sammel-PDF oder Jahresflyer. Flyer nur als allerletzter Notnagel.
- **Zeithorizont:** Kurse dürfen in der Zukunft liegen; entscheidend ist, dass die
  Anmeldung noch offen ist. Abgelaufene oder ausgebuchte Angebote weglassen.
- **Nichts erfinden:** nur Angebote mit verifiziertem Titel, Anbieter, Datum, Preis
  und Link. Fehlt ein Detail, Angebot weglassen statt raten.
- **Menge:** etwa 6–10 Weiterbildungen pro Ausgabe, verteilt auf die Bereiche.

## Auswahlregeln Modulimpulse

- **Genau vier Impulse pro Ausgabe**, je einer aus den vier Kategorien:
  Gesellschaft & Schweiz · Psychologie & Gesundheit · Beruf & Alltag ·
  Technik & Jugendkultur.
- Lebensnah und relevant, dürfen fachlich anspruchsvoll sein. Persönliche Interessen
  (Gaming, Sport, Filme) immer zu einem allgemeinbildenden Zugang weiterentwickeln,
  nicht als isoliertes Thema.
- Jeder Impuls: kurzer Teaser, „warum" (1+), 3–5 Zugänge, mögliche Verbindungen,
  2–4 verlässliche Quellen. Kein ausgearbeitetes Unterrichtsmodul.
- **Wiederholung prüfen** gegen die interne Liste in Google Drive und gegen frühere
  Impulse im Repo (Titel, Kernthema, Schlagwörter, Zugang). Ein Thema darf erneut
  vorkommen, wenn der Zugang klar anders ist.

## Wiederholungsregel allgemein

Dieselbe Durchführung oder derselbe Inhalt darf nicht doppelt erscheinen. Ein
wiederkehrender Kurs mit neuem Termin darf erst wieder aufgenommen werden, wenn seit
der letzten Veröffentlichung mindestens zwölf Monate vergangen sind oder sich das
Angebot wesentlich verändert hat. Abgleich über: URL, Anbieter-Domain, normalisierter
Titel, Anbieter + ähnlicher Titel, ähnliche Beschreibung, gleiche Schlagwörter.

## Ton

Schweizer Hochdeutsch. Sachlich, konkret, ruhig – wie von einem Menschen kuratiert.
Satzbau bewusst variieren, keine immer gleichen Muster. Kursinhalte in eigenen
Worten paraphrasieren, keinen Werbetext übernehmen. Keine Superlative, keine Emojis.

## Ablauf einer Ausgabe

1. Repo-Stand von `main` lesen: dieses CLAUDE.md, die letzten Ausgaben, alle
   bestehenden Inhaltsdateien.
2. Google Drive lesen (interne Grundlagen, Modulverlauf, Themenwünsche).
3. Recherchieren: Gmail-Newsletter im verbundenen Konto (nur Newsletter, nichts
   verändern/senden) und die Quellen aus `docs/QUELLEN.md` bzw. bekannte Anbieter.
4. Auswählen und verifizieren nach den Regeln oben.
5. Neue Ausgabe unter `src/content/ausgaben/JJJJ-MM.md` anlegen, Inhalte als
   einzelne Dateien in den Collections.
6. `npm install` und `npm run build` müssen fehlerfrei durchlaufen (der Build prüft
   das Datenmodell und die Budgetgrenze). Fehler vor der Übergabe beheben.
7. Branch `radar/JJJJ-MM` erstellen, committen, pushen, Pull Request gegen `main`.
   Nicht selbst mergen.
8. Im Pull Request: kurze Inhaltsübersicht, die stärksten 3–5 Fundstücke, Zahl der
   wegen Wiederholung ausgeschlossenen Angebote, Punkte für die menschliche Prüfung.
9. In Google Drive die vier gewählten Modulimpulse mit Status „Vorgeschlagen"
   ergänzen (bestehende Zeilen nicht verändern).

## Repository-Fakten

- Repository: `subsudo/FuturX-Fachentwicklung`
- Standardbranch: `main`
- Ausgabe-Branches: `radar/JJJJ-MM`
- Veröffentlichung: GitHub Actions → GitHub Pages (Workflow in `.github/workflows/`)
