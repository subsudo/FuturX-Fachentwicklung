import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Drei Fachbereiche von FuturX
const bereich = z.enum(['berufsintegration', 'bildung', 'beratung']);

// ── Ausgaben ────────────────────────────────────────────────────────────
// Eine Datei pro Ausgabe, z. B. 2026-07.md. Die id (Dateiname ohne Endung) ist
// der Slug, auf den sich Weiterbildungen und Module über "ausgabe" beziehen.
const ausgaben = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ausgaben' }),
  schema: z.object({
    titel: z.string(),
    monatLabel: z.string(),            // Anzeige, z. B. "Juli 2026"
    datum: z.coerce.date(),            // ISO, für Sortierung
    einleitung: z.string(),
  }),
});

// ── Weiterbildungen ─────────────────────────────────────────────────────
const weiterbildungen = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/weiterbildungen' }),
  schema: z.object({
    titel: z.string(),
    anbieter: z.string(),
    bereich: bereich,
    ausgabe: z.string(),               // Slug der Ausgabe, z. B. "2026-07"
    url: z.string().url(),             // Direktlink zur KURSSEITE (kein Flyer)
    datumLabel: z.string(),            // Anzeige, z. B. "19. November 2026"
    enddatum: z.coerce.date().optional(), // steuert das Ausgrauen abgelaufener Kurse
    ort: z.string(),
    format: z.enum(['praesenz', 'online', 'hybrid']).default('praesenz'),
    preisChf: z.number().max(400),     // harte Budgetgrenze
    featured: z.boolean().default(false),
  }),
});

// ── Modulimpulse ────────────────────────────────────────────────────────
const modul = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/module' }),
  schema: z.object({
    titel: z.string(),
    ausgabe: z.string(),
    kategorie: z.enum([
      'gesellschaft-schweiz',
      'psychologie-gesundheit',
      'beruf-alltag',
      'technik-jugendkultur',
    ]),
    teaser: z.string(),
    warum: z.array(z.string()).min(1),
    zugaenge: z.array(z.string()).min(3).max(5),
    verbindungen: z.array(z.string()),
    quellen: z.array(z.object({ label: z.string(), url: z.string().url() })).min(2).max(4),
  }),
});

// ── Fachimpulse & Ressourcen ────────────────────────────────────────────
// Kostenlose, hilfreiche Quellen fürs Team: Studien, Berichte, Fachstellen,
// Podcasts, Videos usw. Kein Kurs – ein Direktlink mit kurzer Einordnung.
const ressourcen = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ressourcen' }),
  schema: z.object({
    titel: z.string(),
    typ: z.enum([
      'studie', 'bericht', 'artikel', 'podcast', 'video', 'webinar', 'toolkit', 'fachstelle',
    ]),
    quelle: z.string(),                // Herausgeberin / Kanal
    bereich: z.enum([
      'berufsintegration', 'bildung', 'beratung', 'uebergreifend',
    ]),
    ausgabe: z.string(),               // Slug der Ausgabe, z. B. "2026-07"
    url: z.string().url(),             // Direktlink zur Quelle
    datumLabel: z.string().optional(), // z. B. "2024" oder "Folge 42, 2026"
    kostenlos: z.boolean().default(true),
    warum: z.string(),                 // 1 Satz: was es im Job konkret bringt
  }),
});

export const collections = { ausgaben, weiterbildungen, modul, ressourcen };
