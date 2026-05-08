## Ziel

Der Projekte-Bereich wird als cinematische Showcase-Galerie umgesetzt — kein klassisches Card-Grid, sondern ein asymmetrisches Bento-/Masonry-Layout mit großen Medienflächen, dezentem Lila-Glow und einer hochwertigen Lightbox.

## Voraussetzung

Die Seite ist aktuell nur ein Platzhalter. Ich richte parallel ein minimales Dark-Theme mit lila Akzenten ein (gemäß Konzept-Dokument), damit der Projekte-Bereich im richtigen Look erscheint. Andere Sektionen (Home-Hero, Über mich, Kontakt) bleiben für spätere Schritte — hier liegt der Fokus klar auf Projekte.

## Aufbau

### 1. Design-Tokens (`src/styles.css`)
- Dunkles Theme als Default (Hintergrund Schwarz/Anthrazit)
- Primärfarbe: kräftiges Lila in `oklch`
- Zusätzliche Tokens: `--accent-glow` (Neon-Lila), `--gradient-purple`, `--shadow-glow`
- Display-Font (futuristisch, z. B. Space Grotesk) + Body (Inter), via Google Fonts in `__root.tsx` eingebunden

### 2. Projektdaten (`src/data/projects.ts`)
Leicht editierbares Array mit 6 Beispielprojekten — nur `name`, `type`, `preview`, optional `videoUrl`. Keine Kategorien, Tags oder Beschreibungen.

```ts
export const projects = [
  { name: "Webportfolio Konzept", type: "image", preview: "..." },
  { name: "ERP Erklärvideo", type: "video", preview: "...", videoUrl: "" },
  // ...
];
```

Preview-Bilder werden als generierte abstrakte Placeholder (dunkel + violetter Akzent) erzeugt und in `src/assets/projects/` abgelegt.

### 3. Showcase-Galerie (`src/components/projects/ProjectShowcase.tsx`)
- Desktop: CSS-Grid Bento-Layout, 12 Spalten, jedes Projekt mit individueller `col-span` / `row-span`-Variante (z. B. groß/breit/schmal/hoch — gemischt) für asymmetrischen Gallery-Wand-Effekt
- Mobile: einspaltig, volle Breite, großzügige Höhen
- Jede Kachel:
  - Großes Preview-Bild (`object-cover`, `aspect-ratio`-varianten)
  - Dunkles Gradient-Overlay unten
  - Projektname typografisch stark (Display-Font), elegant am unteren Rand
  - Hover: `scale-[1.03]` Bildzoom, Overlay dunkler, Name heller, dezenter lila Glow-Border
  - Bei `type: "video"` zentriertes Play-Icon mit Glow beim Hover
  - Cursor pointer, Klick öffnet Lightbox

### 4. Lightbox (`src/components/projects/ProjectLightbox.tsx`)
Basiert auf `@/components/ui/dialog` (Radix), aber stark customized — kein Standard-Popup-Look:
- Backdrop: schwarz/80 + `backdrop-blur-md`
- Großes Medium zentriert, max. 90vw / 85vh
- Sehr dezenter lila Glow-Border (`ring-1 ring-primary/30`, `shadow-[0_0_80px_-10px_var(--primary)]`)
- Projektname in Display-Font oberhalb des Mediums
- Bild: groß, `object-contain`
- Video: HTML5 `<video controls>` falls `videoUrl` gesetzt, sonst eleganter Placeholder mit großem Play-Icon und Hinweistext
- Close-Button oben rechts, Klick außerhalb + Escape schließen (Radix-Standard)
- Sanfte Fade-/Scale-Animation beim Öffnen

### 5. Einbindung (`src/routes/index.tsx`)
Platzhalter wird ersetzt. Seite erhält dunklen Hintergrund und rendert vorerst:
- minimaler Hero-Strip (sehr knapp, nur Header-Stimmung — kein vollständiger Hero, das kommt in einer späteren Iteration)
- `<ProjectShowcase />` als zentrales Highlight, mit Section-Heading „Projekte“ in Display-Font und kurzer einzeiliger Subline

## Technische Details

- Lightbox-State lokal in `ProjectShowcase` via `useState<Project | null>`
- Keine externen Animationsbibliotheken nötig — Tailwind-Transitions + vorhandene `tw-animate-css` reichen
- Asset-Generation: 6 Preview-Bilder via `imagegen` (fast tier), abstrakte dunkle Visuals mit violettem Akzent passend zum jeweiligen Projektnamen
- A11y: Lightbox per Radix-Dialog (Focus-Trap, Escape, ARIA bereits korrekt)
- Responsive: Bento via Tailwind `md:col-span-*` / `md:row-span-*`, mobile fällt automatisch auf einspaltig zurück

## Was NICHT enthalten ist

- Keine Kategorien, Tags, Beschreibungen, „Mehr erfahren“-Buttons im Galerie-Bereich
- Kein vollständiger Seitenausbau (Hero/Über mich/Kontakt) — separat
- Keine echten Projektmedien — nur hochwertige Placeholder, Daten-Array bleibt leicht editierbar
