# Entscheidungslog & Präferenzen

Kanonisches Log der Kuratierungs-Entscheide (der Mensch wählt, Claude schlägt vor).
Claude pflegt diese Datei bei jeder Ausgabe. Nur Redaktions-Entscheide – keine
Personen-, Teilnehmenden- oder Evaluationsdaten.

**Wichtig – Entscheide sind ein Trend, kein harter Filter:** Eine nicht gewählte
oder entfernte Weiterbildung heisst *nicht*, dass das Thema unerwünscht ist – oft
passt nur der konkrete Kurs nicht. Nur ein ausdrücklicher **Themen-Ausschluss**
ist bindend. Das Log dient dazu, künftige **Top-Empfehlungen** besser zu treffen.

Statuswerte je Angebot:
- `Gewählt` / `Veröffentlicht` – in einer Ausgabe erschienen → nicht erneut vorschlagen
  (Wiederholungsregel: frühestens nach 12 Monaten, siehe CLAUDE.md).
- `Kurs abgelehnt` – dieser konkrete Kurs überzeugte nicht; **Thema bleibt offen** und
  darf mit einem anderen Angebot wieder vorkommen.
- `Thema ausgeschlossen` – der Mensch will dieses Thema ausdrücklich nicht (bindend).


## Präferenzen (laufend, von Claude gepflegt)

Stand 2026-07-13:
- **Ressourcen (Fachimpulse):** weniger ist mehr – nur 3–4, kompakt und aufklappbar
  (nicht als grosse Karte). Auch aus Gmail-Newslettern speisen, nicht nur Web. Dasselbe
  Thema nicht direkt in der Folgeausgabe wiederholen.
- **Design:** Modulblock in Beere (Bereichsfarbe), kein separates Violett.
- **BI ↔ BE:** klar trennen – Berufsintegration = Berufsfindung/Didaktik/Arbeitsmarkt,
  Beratung = Coaching/persönliche Begleitung (auch Privates).
- **Gratis-Input erwünscht:** Forschungsberichte, Fachstellen, gute Podcasts/Videos
  (bei Podcast/Video nachweisbare Reputation/Reichweite).
- **Region:** Zentralschweiz/Luzern bevorzugt; bewusst über viele Anbieter streuen
  (nicht auf einen grossen klumpen).
- **Bildung:** thematische Breite (Didaktik/DaZ/Mathe/Allgemeinbildung), nicht doppeln.
- **Zeithorizont (neu):** Kurse bevorzugt in den nächsten ~6 Monaten. Weiter entfernte
  (fast ein Jahr) nur, wenn der Kurs erfahrungsgemäss beliebt ist und frühe Anmeldung
  nötig ist – sonst weglassen.
- **Keine Wiederholung:** bereits gewählte/veröffentlichte Kurse nicht erneut vorschlagen.
- **Module:** müssen für Jugendliche **lebensrelevant** sein (im Sinn der Evaluation).
  Abgleich mit der internen Themenliste (siehe unten), keine gebuchten Themen doppeln.


## Weiterbildungen

### Ausgabe 2026-07
| Kurs | Anbieter | Status | Bemerkung |
|---|---|---|---|
| Berufswahlvorbereitung – mit Freude und Erfolg! | HfH | Veröffentlicht | — |
| Recovery | ifa | Veröffentlicht | — |
| Kreatives Denken anregen und fördern | HfH | Veröffentlicht | — |
| Micro-Kurs: Methodenkoffer für das neue Schuljahr | PH Luzern | Veröffentlicht | kostenlos |
| Interkulturelle Kommunikation | ifa | Veröffentlicht | Datum 30.06.2027 – Grenzfall Zeithorizont, siehe Präferenzen |
| Micro-Kurs: Gemeinsam echt und authentisch | PH Luzern | Veröffentlicht | kostenlos |
| Beratungsgespräche üben mit KI | HfH | Veröffentlicht | — |
| Layout-Workshop für Bewerbungsunterlagen | CreaLengo | Kurs abgelehnt | Konkreter Kurs überzeugte nicht; **Thema Bewerbung/Bewerbungsdossier bleibt willkommen** |
| Classroom Management bei ADHS | HfH | Kurs abgelehnt | im Tausch raus; Thema ADHS/heterogene Klassen bleibt offen |
| Angst im Schulalltag | HfH | Kurs abgelehnt | im Tausch raus; Thema bleibt offen |


## Ressourcen (Fachimpulse)

### Ausgabe 2026-07
| Ressource | Quelle | Status |
|---|---|---|
| Nahtstellenbarometer 2026 | SBFI / gfs.bern | Veröffentlicht |
| Bildungsbericht Schweiz 2026 | SKBF \| CSRE | Veröffentlicht |
| Nationaler Gesundheitsbericht 2025 | Obsan | Veröffentlicht |
| berufsberatung.ch | SDBB | Entfernt – Menge auf 3–4 reduziert (weniger ist mehr); Thema/Quelle bleibt für später möglich |
| Kompetent?! Ein Bildungspodcast | Prof. Yves Karlen | Entfernt – Menge reduziert; zudem keine nachweisbare Bewertung, für später möglich falls Reichweite belegt |


## Module – Themenabgleich

Die Modulthemen werden **nicht hier**, sondern in der internen Excel-Liste geführt:
`OneDrive - Genossenschaft FuturX/Schule/Desktop/2025_Liste Modul-Themen.xlsx`.

Regeln (siehe CLAUDE.md, Auswahlregeln Modulimpulse):
- Spalte **„Gebucht von"** gefüllt → Thema **verbindlich ausgeschlossen** …
- … **ausser** die Person hat FuturX verlassen (aktuell **AF**, **NB**) → Thema wieder frei.
- Spalte **„LP"** (wer es angedacht hat) schliesst **nicht** aus.
- Die Spalte „Jahr" ist nicht zuverlässig aktuell – keine harte Grenze. **Neue Themen
  bevorzugen**; sehr alte Module aufzugreifen ist erlaubt, aber nicht die erste Wahl.
- Bei neuen Modulvorschlägen die Excel-Liste aktualisieren (Wiederholung vermeiden).

Bekannte Weiterbildungs-Quellen: siehe `docs/quellen.md`.
