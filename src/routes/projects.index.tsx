import { createFileRoute } from "@tanstack/react-router";
import { ProjectShowcase } from "@/components/projects/ProjectShowcase";

export const Route = createFileRoute("/projects/")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projekte — Portfolio" },
      {
        name: "description",
        content:
          "Cinematische Showcase-Galerie meiner Projekte — Webdesign, Branding, Video und interaktive Experimente.",
      },
    ],
  }),
});

function ProjectsPage() {
  return (
    <div className="pt-12 md:pt-16">
      <ProjectShowcase />
    </div>
  );
}
