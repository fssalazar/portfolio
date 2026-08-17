"use client";

import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { skillGroups, marqueeSkills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="02" subtitle="Toolbox" title="Technologies I build with." />
      </div>

      {/* marquee */}
      <div className="relative mb-16 overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-3">
          {[...marqueeSkills, ...marqueeSkills].map((s, i) => (
            <span
              key={i}
              className="whitespace-nowrap rounded-full border border-border bg-white/5 px-5 py-2 font-mono text-sm text-muted"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.title}
            delay={i * 0.06}
            className="border-gradient glass group rounded-2xl border border-border p-6 transition-colors hover:bg-white/[0.04]"
          >
            <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-faint">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-border bg-bg-soft px-3 py-1.5 text-sm text-muted transition-colors group-hover:border-accent/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
