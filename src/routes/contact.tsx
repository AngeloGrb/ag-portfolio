import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Github, Instagram, Linkedin, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Kontakt — Portfolio" },
      {
        name: "description",
        content: "Lass uns reden — über Projekte, Ideen oder Zusammenarbeit.",
      },
    ],
  }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="px-4 pb-24 pt-16 md:px-10 md:pt-24">
      <div className="mx-auto max-w-5xl">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary/80">
          Contact
        </span>
        <h1 className="mt-3 font-display text-5xl md:text-8xl font-semibold tracking-tight">
          Lass uns
          <br />
          <span className="bg-gradient-to-r from-primary-glow to-primary bg-clip-text text-transparent">
            etwas bauen.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground">
          Ob Projektidee, Zusammenarbeit oder einfach nur ein Hi — schreib mir gern.
        </p>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Contact info */}
          <div className="space-y-8">
            <a
              href="mailto:hello@example.com"
              className="group flex items-center gap-4 rounded-2xl border border-border/40 bg-card/40 p-5 hover:border-primary/40 transition-colors"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/30">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">E-Mail</p>
                <p className="font-display text-lg group-hover:text-primary-glow transition-colors">
                  hello@example.com
                </p>
              </div>
            </a>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Social</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  { Icon: Github, label: "GitHub", href: "#" },
                  { Icon: Instagram, label: "Instagram", href: "#" },
                  { Icon: Linkedin, label: "LinkedIn", href: "#" },
                ].map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/40 px-4 py-2 text-sm hover:border-primary/60 hover:text-foreground"
                  >
                    <Icon className="h-4 w-4" /> {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="space-y-4 rounded-2xl border border-border/40 bg-card/40 p-6 md:p-8 backdrop-blur-sm"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground">
                  Name
                </label>
                <input
                  required
                  className="mt-2 w-full rounded-lg border border-border/50 bg-background/60 px-4 py-2.5 text-sm focus:border-primary/60 focus:outline-none"
                  placeholder="Dein Name"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground">
                  E-Mail
                </label>
                <input
                  type="email"
                  required
                  className="mt-2 w-full rounded-lg border border-border/50 bg-background/60 px-4 py-2.5 text-sm focus:border-primary/60 focus:outline-none"
                  placeholder="dein@mail.com"
                />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">
                Nachricht
              </label>
              <textarea
                required
                rows={5}
                className="mt-2 w-full resize-none rounded-lg border border-border/50 bg-background/60 px-4 py-2.5 text-sm focus:border-primary/60 focus:outline-none"
                placeholder="Worüber möchtest du sprechen?"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_40px_-10px_var(--primary)] hover:scale-[1.02] transition-transform"
            >
              {sent ? "Danke — Nachricht erhalten" : "Nachricht senden"}
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            {sent && (
              <p className="text-xs text-muted-foreground">
                (Demo-Formular — wird derzeit nicht wirklich versendet.)
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
