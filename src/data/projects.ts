import webportfolio from "@/assets/projects/webportfolio.jpg";
import erpVideo from "@/assets/projects/erp-video.jpg";
import youtube from "@/assets/projects/youtube.jpg";
import branding from "@/assets/projects/branding.jpg";
import app from "@/assets/projects/app.jpg";
import webExperiment from "@/assets/projects/web-experiment.jpg";

export type Project = {
  name: string;
  slug: string;
  type: "image" | "video";
  preview: string;
  fullMedia?: string;
  videoUrl?: string;
  description: string;
  shortExplained: string;
  role: string;
  learned: string;
  gallery: string[];
};

export const projects: Project[] = [
  {
    name: "Webportfolio Konzept",
    slug: "webportfolio-konzept",
    type: "image",
    preview: webportfolio,
    fullMedia: webportfolio,
    description:
      "Ein cinematisches, dunkles Portfolio-Konzept mit klarem Fokus auf Visuelles statt Text.",
    shortExplained:
      "Konzeption und Design einer modernen Portfolio-Seite mit Bento-Galerie, Lightbox und reduzierter Typografie.",
    role: "Konzept, UI-Design, Frontend-Umsetzung",
    learned:
      "Wie wichtig visuelle Hierarchie ist und dass weniger Text oft mehr Wirkung erzeugt.",
    gallery: [webportfolio, branding, webExperiment],
  },
  {
    name: "ERP Erklärvideo",
    slug: "erp-erklaervideo",
    type: "video",
    preview: erpVideo,
    videoUrl: "",
    description:
      "Ein Erklärvideo, das ein komplexes ERP-System verständlich und visuell ansprechend zeigt.",
    shortExplained:
      "Storyboard, Scriptwriting und Videoschnitt für eine kompakte Software-Vorstellung.",
    role: "Konzept, Schnitt, Motion",
    learned:
      "Komplexes einfach erklären — Storytelling schlägt Feature-Listen.",
    gallery: [erpVideo, app],
  },
  {
    name: "YouTube Creative Project",
    slug: "youtube-creative-project",
    type: "video",
    preview: youtube,
    videoUrl: "",
    description:
      "Ein kreatives YouTube-Format mit eigenem visuellen Stil und cinematischem Schnitt.",
    shortExplained:
      "Eigenes Format konzipiert, gefilmt und geschnitten — mit Fokus auf Atmosphäre.",
    role: "Idee, Kamera, Schnitt, Thumbnail-Design",
    learned: "Konsistenz im visuellen Stil ist entscheidend für Wiedererkennung.",
    gallery: [youtube, branding],
  },
  {
    name: "Logo & Branding",
    slug: "logo-branding",
    type: "image",
    preview: branding,
    fullMedia: branding,
    description:
      "Markenidentität mit Logo, Farbsystem und Typografie für ein junges Tech-Projekt.",
    shortExplained:
      "Vom Mood zur fertigen Brand — Logo, Farbwelt und Anwendungsbeispiele.",
    role: "Brand-Konzept, Logo-Design",
    learned: "Wie eine durchdachte Wortmarke ein Projekt sofort ernster wirken lässt.",
    gallery: [branding, webportfolio, app],
  },
  {
    name: "Digitale Anwendung",
    slug: "digitale-anwendung",
    type: "image",
    preview: app,
    fullMedia: app,
    description:
      "Eine Web-App mit klarem Interface, dunklem Look und durchdachten Interaktionen.",
    shortExplained:
      "Interface-Design und Frontend-Prototyp einer Tool-Anwendung.",
    role: "UX, UI, Frontend-Prototyp",
    learned: "State-Management sauber zu strukturieren spart später viel Zeit.",
    gallery: [app, webExperiment],
  },
  {
    name: "Interactive Web Experiment",
    slug: "interactive-web-experiment",
    type: "image",
    preview: webExperiment,
    fullMedia: webExperiment,
    description:
      "Ein experimentelles Web-Projekt mit Animationen, Hover-Effekten und kreativem Layout.",
    shortExplained:
      "Spielwiese für CSS-Animationen, Layout-Experimente und Mikrointeraktionen.",
    role: "Idee, Code, Design",
    learned: "Wie weit man mit reinem CSS und kleinen JS-Tricks tatsächlich kommt.",
    gallery: [webExperiment, webportfolio, branding],
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
