import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "Über mich — Portfolio" },
      {
        name: "description",
        content:
          "Wer ich bin, woran ich arbeite und was mich an Design, Web und Video begeistert.",
      },
    ],
  }),
});

function AboutPage() {
  return (
    <div className="px-4 pb-20 pt-16 md:px-10 md:pt-24">
      <div className="mx-auto max-w-4xl">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary/80">
          About
        </span>
        <h1 className="mt-3 font-display text-5xl md:text-7xl font-semibold tracking-tight">
          Hi, ich bin{" "}
          <span className="bg-gradient-to-r from-primary-glow to-primary bg-clip-text text-transparent">
            kreativ
          </span>{" "}
          unterwegs.
        </h1>

        <div className="mt-12 grid gap-12 md:grid-cols-[1fr_2fr]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-border/50">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-background" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-7xl font-bold text-foreground/20">G</span>
            </div>
          </div>

          <div className="space-y-6 text-base md:text-lg leading-relaxed text-foreground/90">
            <p>
              Ich bewege mich gern an der Schnittstelle zwischen Design, Web und Video.
              Mich begeistern Projekte, die nicht einfach nur funktionieren, sondern eine
              Atmosphäre haben.
            </p>
            <p>
              Aktuell baue ich an eigenen Web-Projekten, schneide Videos und experimentiere
              mit Branding. Dabei interessiert mich besonders, wie kleine visuelle Details
              das Gesamtgefühl eines Projekts verändern können.
            </p>
            <p>
              Meine Arbeitsweise ist eher strukturiert als chaotisch — ich plane gern,
              dokumentiere viel und feile lange an den Details, bis sich etwas richtig anfühlt.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {[
            { k: "Fokus", v: "Web · Video · Branding" },
            { k: "Stil", v: "Cinematic, dunkel, präzise" },
            { k: "Tools", v: "Figma · React · Premiere" },
          ].map((h) => (
            <div
              key={h.k}
              className="rounded-2xl border border-border/40 bg-card/40 p-6 backdrop-blur-sm"
            >
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary/80">
                {h.k}
              </span>
              <p className="mt-3 font-display text-lg font-semibold">{h.v}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-4">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:scale-[1.02] transition-transform"
          >
            Projekte ansehen
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-border/60 px-6 py-3 text-sm font-medium hover:border-primary/60 hover:bg-primary/10"
          >
            Sag Hi
          </Link>
        </div>
      </div>
    </div>
  );
}
