import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/40 bg-background/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <div className="font-display text-base font-semibold">
            <span className="bg-gradient-to-r from-primary-glow to-primary bg-clip-text text-transparent">
              grbic
            </span>
            <span className="text-foreground">.studio</span>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            Cinematic creative work — Web, Video, Branding.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <Link to="/projects" className="hover:text-foreground">Projekte</Link>
          <Link to="/about" className="hover:text-foreground">Über mich</Link>
          <Link to="/skills" className="hover:text-foreground">Skills</Link>
          <Link to="/contact" className="hover:text-foreground">Kontakt</Link>
        </nav>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} — Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}
