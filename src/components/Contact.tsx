"use client";

import { Reveal } from "./Reveal";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <Reveal className="border-gradient glass relative overflow-hidden rounded-3xl border border-border p-10 text-center sm:p-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

        <div className="relative">
          <span className="font-mono text-sm text-accent">05 — Contact</span>
          <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Let&apos;s build something{" "}
            <span className="text-gradient">exceptional</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg text-muted">
            Have a project in mind or a role to fill? I&apos;m always open to a
            good conversation.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-7 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
            >
              {profile.email}
            </a>
            {profile.socials
              .filter((s) => s.label !== "Email")
              .map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-border bg-white/5 px-6 py-3.5 text-sm font-medium transition-colors hover:border-accent/50 hover:text-accent"
                >
                  {s.label}
                </a>
              ))}
          </div>
        </div>
      </Reveal>

      <footer className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-faint sm:flex-row">
        <span>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js,
          Tailwind &amp; Framer Motion.
        </span>
        <a href="#top" className="transition-colors hover:text-fg">
          Back to top ↑
        </a>
      </footer>
    </section>
  );
}
