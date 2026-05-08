import { createFileRoute } from "@tanstack/react-router";
import { skillGroups } from "@/data/skills";

export const Route = createFileRoute("/skills")({
  component: SkillsPage,
  head: () => ({
    meta: [
      { title: "Skills — Portfolio" },
      {
        name: "description",
        content:
          "Tools, Bereiche und Skills — von Webdesign über Video bis Java und Projektplanung.",
      },
    ],
  }),
});

function SkillsPage() {
  return (
    <div className="px-4 pb-20 pt-16 md:px-10 md:pt-24">
      <div className="mx-auto max-w-7xl">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary/80">
          Toolbox
        </span>
        <h1 className="mt-3 font-display text-5xl md:text-7xl font-semibold tracking-tight">
          Skills & Tools
        </h1>
        <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground">
          Eine ehrliche Übersicht der Bereiche und Werkzeuge, in denen ich mich wohlfühle —
          gewachsen aus Schul-, Praxis- und Eigenprojekten.
        </p>

        {/* Skill cloud */}
        <div className="mt-12 flex flex-wrap gap-2">
          {skillGroups.flatMap((g) => g.items).map((s, i) => {
            const sizes = ["text-sm", "text-base", "text-lg"];
            const size = sizes[i % sizes.length];
            return (
              <span
                key={s + i}
                className={`rounded-full border border-border/50 bg-card/40 px-4 py-1.5 text-muted-foreground hover:border-primary/60 hover:text-foreground transition-colors ${size}`}
              >
                {s}
              </span>
            );
          })}
        </div>

        {/* Tool matrix */}
        <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card/40 p-6 backdrop-blur-sm transition-all hover:border-primary/40 hover:shadow-[0_0_40px_-15px_var(--primary)]"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="font-mono text-xs text-primary/80">
                0{i + 1}
              </span>
              <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight">
                {group.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{group.tagline}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-primary/10 px-2.5 py-1 text-xs text-foreground/80 ring-1 ring-primary/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
