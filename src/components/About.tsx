"use client";

import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { profile } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading index="01" subtitle="About" title="Turning hard problems into clean interfaces." />

      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
          <p>{profile.summary}</p>
          <p>
            He&apos;s driven by problem-solving and continuous learning, with a
            deep focus on clean architecture and building high-quality products —
            software that feels fast, stays maintainable, and holds up under
            real-world scale.
          </p>
          <p className="text-faint">
            Based in {profile.location}. Available for remote work worldwide.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-4">
          {profile.stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className="border-gradient glass rounded-2xl border border-border p-5"
            >
              <div className="text-3xl font-semibold text-gradient">{s.value}</div>
              <div className="mt-1 text-sm text-faint">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
