import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Play } from "lucide-react";
import { getProjectBySlug } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  component: ProjectDetailPage,
  notFoundComponent: () => {
    const { slug } = Route.useParams();
    return (
      <div className="mx-auto max-w-3xl px-4 py-32 text-center">
        <h1 className="font-display text-4xl font-semibold">Projekt nicht gefunden</h1>
        <p className="mt-3 text-muted-foreground">"{slug}" existiert nicht.</p>
        <Link
          to="/projects"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-border/60 px-5 py-2.5 text-sm hover:border-primary/60"
        >
          <ArrowLeft className="h-4 w-4" /> Zurück zu Projekte
        </Link>
      </div>
    );
  },
  errorComponent: ({ error, reset }) => (
    <div className="mx-auto max-w-3xl px-4 py-32 text-center">
      <h1 className="font-display text-3xl font-semibold">Etwas ist schiefgelaufen</h1>
      <p className="mt-3 text-muted-foreground">{error.message}</p>
      <button
        onClick={reset}
        className="mt-8 rounded-full border border-border/60 px-5 py-2.5 text-sm hover:border-primary/60"
      >
        Erneut versuchen
      </button>
    </div>
  ),
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.project.name ?? "Projekt"} — Portfolio` },
      {
        name: "description",
        content: loaderData?.project.description ?? "Projektdetails",
      },
    ],
  }),
});

function ProjectDetailPage() {
  const { project } = Route.useLoaderData();

  return (
    <article className="px-4 pb-24 pt-10 md:px-10 md:pt-16">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Zurück zu Projekte
        </Link>

        <header className="mt-8 md:mt-12">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary/80">
            {project.type === "video" ? "Video Project" : "Visual Project"}
          </span>
          <h1 className="mt-3 font-display text-4xl md:text-7xl font-semibold tracking-tight">
            {project.name}
          </h1>
        </header>

        {/* Hero media */}
        <div className="mt-10 overflow-hidden rounded-2xl ring-1 ring-border/50 shadow-[0_0_80px_-20px_var(--primary)]">
          {project.type === "video" && project.videoUrl ? (
            <video src={project.videoUrl} controls className="w-full" />
          ) : project.type === "video" ? (
            <div className="relative aspect-video w-full">
              <img
                src={project.preview}
                alt={project.name}
                className="absolute inset-0 h-full w-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-background/40 backdrop-blur-sm">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/20 ring-1 ring-primary/60 shadow-[0_0_60px_var(--primary)]">
                  <Play className="h-8 w-8 fill-foreground text-foreground translate-x-1" />
                </div>
                <p className="text-sm text-muted-foreground">Video folgt in Kürze</p>
              </div>
            </div>
          ) : (
            <img
              src={project.fullMedia ?? project.preview}
              alt={project.name}
              className="w-full object-cover"
            />
          )}
        </div>

        {/* Description */}
        <p className="mt-10 max-w-3xl text-lg md:text-xl text-foreground/90 leading-relaxed">
          {project.description}
        </p>

        {/* Sections */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[
            { title: "Kurz erklärt", body: project.shortExplained },
            { title: "Meine Rolle", body: project.role },
            { title: "Was ich gelernt habe", body: project.learned },
          ].map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-border/40 bg-card/40 p-6 backdrop-blur-sm"
            >
              <h2 className="font-display text-lg font-semibold">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        {/* Gallery */}
        {project.gallery.length > 0 && (
          <section className="mt-20">
            <h2 className="font-display text-2xl md:text-3xl font-semibold">Galerie</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {project.gallery.map((src: string, i: number) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-xl ring-1 ring-border/40"
                >
                  <img
                    src={src}
                    alt={`${project.name} — ${i + 1}`}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="mt-20">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-border/60 px-5 py-2.5 text-sm hover:border-primary/60"
          >
            <ArrowLeft className="h-4 w-4" /> Zurück zu Projekte
          </Link>
        </div>
      </div>
    </article>
  );
}
