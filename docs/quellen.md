# Bekannte Quellen (Weiterbildungen)

Ausgangspunkte für die Recherche. **Breit über viele – auch kleine – Anbieter streuen**,
nicht auf ein paar Grosskataloge fixieren. Jede Angabe (Titel, Datum, Preis, Link)
einzeln auf der Kursdetailseite verifizieren.

## Bewährt (Detailseiten mit Datum/Preis gut abrufbar)
- **HfH – Interkantonale Hochschule für Heilpädagogik** (`hfh.ch/weiterbildung`) –
  Bildung, Beratung, Berufsintegration. Detail-URLs u. a. `/further-education-conducting-event/…`.
- **Institut für Arbeitsagogik ifa** (`institut-arbeitsagogik.ch/kurs/…`) –
  Berufsintegration, Beratung (Fachpersonen-Kurse; nicht der Bereich „Kurse für Menschen mit Behinderungen").
- **PH Luzern – Veranstaltungen/Micro-Kurse** (`phlu.ch/veranstaltungen`) – Bildung, oft kostenlos.
- **CreaLengo GmbH** (`crealengo.ch`) – Bewerbung/Berufsintegration.
- **Akademie für Lerncoaching** (`weiterbildung-lerncoaching.ch/angebot/tagesfortbildungen`) –
  Bildung/Beratung, ein- bis zweitägige Tagesfortbildungen (ADHS, Lernstrategien, Mobbing,
  Klassenführung, Schreiben). Titel auf der Übersicht, Datum/Preis auf den Detailseiten/Jahresprogramm-PDF.

## Brauchbar mit Einschränkung
- **SDBB Weiterbildung BSLB** (`weiterbildung.sdbb.ch`) – datierte Kurse gut sichtbar,
  Detail-Deeplink (mit `securityHash`) ist haltbar; **Preise stehen nicht in der Liste**,
  müssen von der Detailseite geholt werden.

## Blockiert / ungeeignet für den einfachen Abruf
- **Careum** (`careum.ch`) – Anti-Bot-Sperre („blocked-by-admin").
- **PH Luzern Evento-Kurskatalog** (`evento-web.phlu.ch`) – JS-Filterformular, per Abruf
  nicht extrahierbar; nur über den interaktiven Browser.

Für kleinere Anbieter reicht meist ein einfacher Seitenabruf; für JS-lastige Kataloge
den interaktiven Browser nutzen.

## Ergänzt im November 2026

Gut für Lehrbegleitung und Berufsintegration (alle mit Detailseiten, die sich abrufen lassen):
- **WBZ Kanton Luzern – Impulsangebote für Berufsbildende**
  (`wbz.lu.ch/Weiterbildungsangebote/Berufsbildner_Weiterbildung_Impuls_Sursee_Willisau_Luzern`) –
  kostenlose Online-Impulse (2–3 Lektionen) für die Zentralschweiz, u. a. «Psychische und
  psychosoziale Probleme in der Lehre» und «KI im Ausbildungsalltag». Termine und Anmeldelink
  stehen auf der Seite. Direkt relevant für die Lehrbegleitung.
- **Hochschule Luzern – Soziale Arbeit, Agenda «Einblicke»** (`hslu.ch/de-ch/soziale-arbeit/agenda`) –
  kostenlose Online-Veranstaltungen. Die Fachseminare der HSLU sind dagegen zweitägig und
  kosten CHF 770, also ausserhalb des Budgets.
- **PH Luzern – Veranstaltungen** (`phlu.ch/weiterbildung/veranstaltungen-1.html`) – Liste mit
  Datum; Micro-Kurse und ZEMBIInputs sind meist kostenlos, die Detailseiten nennen Kosten aber
  nicht immer. Inhalte richten sich häufig an Primar- und Sekundarlehrpersonen.
- **HfH** – der Weiterbildungsplaner (`hfh.ch/weiterbildungsplaner`) zeigt Datum und Titel, Preise
  nur auf den Detailseiten. Mehrere Kurse nennen Berufsfachschul-Lehrpersonen ausdrücklich
  (z. B. Nachteilsausgleich).
- **Travail.Suisse – «Meine Lehre – Meine Rechte»** (`meinelehre-meinerechte.ch`) – Ressource für
  Lernende (seit August 2026).

Technische Hinweise aus der Recherche:
- **SDBB:** Die Detaillinks (mit `securityHash`) stecken als `data-url` in den Tabellenzeilen und
  lassen sich im Browser per JavaScript auslesen; Preise stehen nur auf den Detailseiten. Das
  Zielpublikum sind meist Berufsberatende («je nach Thema auch andere Personen willkommen»).
- **Arbeitsintegration Schweiz (AIS):** Anmeldefristen enden rund vier Wochen vor dem Termin,
  Nichtmitglieder zahlen deutlich mehr. Früh prüfen.
- **ifa:** Das Weiterbildungsprogramm 2027 (PDF) lässt sich mit `pdftotext -enc UTF-8` lesen.
  Die eintägigen Kurse für Fachpersonen sind selten; die FuturX-nahen Kurse (z. B. «Auffällige
  Jugendliche im Arbeitsprozess») sind zweitägig und kosten CHF 630 oder mehr.
- **CreaLengo:** Die Kurse liegen oft über CHF 400.
- **Weiterbildung Zentralschweiz** (`weiterbildungzentralschweiz.ch`): kantonales Seminarprogramm,
  selten passend; die Kurzimpulse nennen keine Preise.
