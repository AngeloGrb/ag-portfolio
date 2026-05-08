import { createFileRoute, Link } from "@tanstack/react-router";
import { ProjectShowcase } from "@/components/projects/ProjectShowcase";
import { ArrowRight, Mail } from "lucide-react";
import { skillGroups } from "@/data/skills";
import { motion } from "framer-motion";
import portrait from "@/assets/projects/portraet.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Portfolio — Home" },
      {
        name: "description",
        content:
          "Cinematic Portfolio — Web, Video und Branding. Kreative Arbeiten in einem dunklen, lila Look.",
      },
    ],
  }),
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative px-4 pt-24 pb-16 md:px-10 md:pt-36 md:pb-24 overflow-hidden">
        {/* Hintergrund-Bild und Overlays */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          {/* Existierende atmosphärische Glow-Effekte */}
          <div className="absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[140px]" />
          <div className="absolute top-1/2 -left-40 h-[400px] w-[400px] rounded-full bg-accent/20 blur-[120px]" />

          {/* Portrait im Hintergrund (halb sichtbar, rechts ausgerichtet) */}
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={portrait}
            alt=""
            className="absolute right-[-10%] md:right-0 bottom-0 h-full w-auto object-contain object-right mix-blend-luminosity"
          />

          {/* Lila Overlay über dem Bild */}
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />

          {/* Fade-out am unteren Rand für einen weichen Übergang zur nächsten Sektion */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>

        {/* Text-Bereich */}
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-xs uppercase tracking-[0.3em] text-primary/80"
            >
              Portfolio · 2026
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight"
            >
              Kreative Arbeiten,
              <br />
              <span className="bg-gradient-to-r from-primary-glow via-primary to-accent bg-clip-text text-transparent">
                cinematisch erzählt.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground"
            >
              Ich gestalte digitale Erlebnisse zwischen Web, Video und Branding — mit Fokus auf
              Atmosphäre, Klarheit und Liebe zum Detail.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                Projekte ansehen
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border/60 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/60 hover:bg-primary/10"
              >
                <Mail className="h-4 w-4" />
                Kontakt aufnehmen
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brief intro */}
      <section className="px-4 py-12 md:px-10 md:py-16 relative z-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {[
            { k: "Web", v: "Moderne, dunkle Interfaces mit Fokus auf Atmosphäre." },
            { k: "Video", v: "Schnitt, Storytelling und cinematic Look für Bewegtbild." },
            { k: "Brand", v: "Logos, Farbsysteme und visuelle Identitäten mit Charakter." },
          ].map((b, index) => (
            <motion.div
              key={b.k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-border/40 bg-card/40 p-6 backdrop-blur-sm"
            >
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary/80">
                {b.k}
              </span>
              <p className="mt-3 text-sm text-muted-foreground">{b.v}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <ProjectShowcase limit={3} />

      <div className="px-4 md:px-10 -mt-8 mb-8 relative z-10">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-glow"
          >
            Alle Projekte ansehen
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <section className="px-4 py-16 md:px-10 md:py-24 relative z-10">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary/80">
                Toolbox
              </span>
              <h2 className="mt-2 font-display text-3xl md:text-5xl font-semibold tracking-tight">
                Skills im Überblick
              </h2>
            </div>
            <Link to="/skills" className="text-sm font-medium text-primary hover:text-primary-glow">
              Alle Skills →
            </Link>
          </header>
          <div className="flex flex-wrap gap-2">
            {skillGroups
              .flatMap((g) => g.items)
              .slice(0, 18)
              .map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border/50 bg-card/40 px-4 py-1.5 text-sm text-muted-foreground"
                >
                  {s}
                </span>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
