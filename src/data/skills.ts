export type SkillGroup = {
  title: string;
  tagline: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Webdesign",
    tagline: "Interfaces, die Atmosphäre haben.",
    items: ["HTML", "CSS", "Tailwind", "React", "TypeScript", "Figma"],
  },
  {
    title: "Video Editing",
    tagline: "Erzählen mit Schnitt, Sound und Bild.",
    items: ["Premiere Pro", "DaVinci Resolve", "After Effects", "CapCut"],
  },
  {
    title: "Design & Branding",
    tagline: "Marken mit Charakter.",
    items: ["Logo", "Farbsystem", "Typografie", "Moodboards"],
  },
  {
    title: "Schule & Technik",
    tagline: "Solides Fundament.",
    items: ["IT-Grundlagen", "Netzwerke", "Hardware", "Linux"],
  },
  {
    title: "Java / Coding",
    tagline: "Logik, Strukturen, Probleme lösen.",
    items: ["Java", "OOP", "Git", "VS Code", "WebStorm"],
  },
  {
    title: "Doku & Projektplanung",
    tagline: "Strukturiert von Idee bis Launch.",
    items: ["Notion", "Markdown", "Konzepte", "Timelines"],
  },
];
