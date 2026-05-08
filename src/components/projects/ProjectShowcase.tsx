import { useState } from "react";
import { Play, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { projects, type Project } from "@/data/projects";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

// Bento layout classes — one per index (6 projects)
const bentoLayout = [
  "md:col-span-7 md:row-span-2 aspect-[16/10] md:aspect-auto",
  "md:col-span-5 md:row-span-1 aspect-[4/3] md:aspect-[5/3]",
  "md:col-span-5 md:row-span-1 aspect-[4/3] md:aspect-[5/3]",
  "md:col-span-4 md:row-span-2 aspect-[4/5] md:aspect-auto",
  "md:col-span-8 md:row-span-1 aspect-[16/9] md:aspect-[16/7]",
  "md:col-span-12 md:row-span-1 aspect-[16/9] md:aspect-[21/8]",
];

function ProjectTile({
  project,
  className,
  onOpen,
}: {
  project: Project;
  className: string;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group relative overflow-hidden rounded-2xl bg-card text-left transition-all duration-500 hover:ring-1 hover:ring-primary/40 hover:shadow-[0_0_60px_-15px_var(--primary)] ${className}`}
      aria-label={`Projekt öffnen: ${project.name}`}
    >
      <img
        src={project.preview}
        alt={project.name}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* base darkening + bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent transition-opacity duration-500 group-hover:from-background/80" />

      {/* subtle violet edge glow on hover */}
      <div className="absolute inset-0 opacity-0 ring-1 ring-inset ring-primary/30 transition-opacity duration-500 group-hover:opacity-100 rounded-2xl" />

      {/* video play icon */}
      {project.type === "video" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background/40 backdrop-blur-md ring-1 ring-primary/40 transition-all duration-500 group-hover:scale-110 group-hover:ring-primary/80 group-hover:shadow-[0_0_40px_var(--primary)]">
            <Play className="h-6 w-6 fill-foreground text-foreground translate-x-0.5" />
          </div>
        </div>
      )}

      {/* Project name */}
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
        <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground/90 tracking-tight transition-all duration-500 group-hover:text-foreground group-hover:translate-y-0 translate-y-1">
          {project.name}
        </h3>
        <div className="mt-2 h-px w-10 bg-primary/60 transition-all duration-500 group-hover:w-20 group-hover:bg-primary" />
      </div>
    </button>
  );
}

export function ProjectShowcase({
  limit,
  showHeader = true,
}: {
  limit?: number;
  showHeader?: boolean;
} = {}) {
  const [active, setActive] = useState<Project | null>(null);
  const items = limit ? projects.slice(0, limit) : projects;

  return (
    <section
      id="projekte"
      className="relative w-full px-4 py-16 md:px-10 md:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {showHeader && (
          <header className="mb-12 md:mb-16 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary/80">
              Showcase
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-6xl font-semibold tracking-tight text-foreground">
              Projekte
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              Eine kuratierte Auswahl meiner Arbeiten — visuell, cinematisch, im Vordergrund.
            </p>
          </header>
        )}

        <div className="grid grid-cols-1 md:grid-cols-12 md:auto-rows-[260px] gap-4 md:gap-5">
          {items.map((project, i) => (
            <ProjectTile
              key={project.name}
              project={project}
              className={bentoLayout[i % bentoLayout.length]}
              onOpen={() => setActive(project)}
            />
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent
          className="!max-w-[95vw] md:!max-w-6xl gap-0 border-primary/20 bg-background/80 backdrop-blur-2xl p-0 overflow-hidden shadow-[0_0_120px_-20px_var(--primary)] ring-1 ring-primary/20 [&>button]:z-20 [&>button]:right-4 [&>button]:top-4 [&>button]:rounded-full [&>button]:bg-background/60 [&>button]:backdrop-blur-md [&>button]:p-2 [&>button]:opacity-100 [&>button]:ring-1 [&>button]:ring-border/60 hover:[&>button]:ring-primary/60"
        >
          {active && (
            <div className="relative">

              <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
                {active.type === "image" ? (
                  <img
                    src={active.fullMedia ?? active.preview}
                    alt={active.name}
                    className="max-h-[80vh] w-full object-contain"
                  />
                ) : active.videoUrl ? (
                  <video
                    src={active.videoUrl}
                    controls
                    autoPlay
                    className="h-full w-full"
                  />
                ) : (
                  <div className="relative h-full w-full">
                    <img
                      src={active.preview}
                      alt={active.name}
                      className="absolute inset-0 h-full w-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-background/40 backdrop-blur-sm flex flex-col items-center justify-center gap-4">
                      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/20 ring-1 ring-primary/60 shadow-[0_0_60px_var(--primary)]">
                        <Play className="h-10 w-10 fill-foreground text-foreground translate-x-1" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Video folgt in Kürze
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-3 px-6 py-5 md:flex-row md:items-center md:justify-between md:px-8 md:py-6 border-t border-border/40">
                <DialogTitle className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
                  {active.name}
                </DialogTitle>
                <Link
                  to="/projects/$slug"
                  params={{ slug: active.slug }}
                  onClick={() => setActive(null)}
                  className="inline-flex items-center gap-2 self-start rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-primary/20"
                >
                  Details ansehen
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
