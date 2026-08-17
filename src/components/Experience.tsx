"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { experiences } from "@/lib/data";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 60%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading index="03" subtitle="Journey" title="Where I've made an impact." />

      <div ref={ref} className="relative pl-8 sm:pl-10">
        {/* track */}
        <div className="absolute left-[7px] top-2 h-full w-px bg-border sm:left-[11px]" />
        {/* animated progress */}
        <motion.div
          style={{ scaleY }}
          className="absolute left-[7px] top-2 h-full w-px origin-top bg-gradient-to-b from-accent via-accent-2 to-accent-3 sm:left-[11px]"
        />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <Reveal key={`${exp.company}-${exp.period}`} delay={0.04} className="relative">
              {/* dot */}
              <span
                className={`absolute -left-8 top-1.5 grid h-4 w-4 place-items-center rounded-full border sm:-left-10 ${
                  exp.current
                    ? "border-accent bg-accent/20"
                    : "border-border bg-bg-soft"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    exp.current ? "bg-accent" : "bg-faint"
                  }`}
                />
              </span>

              <div className="border-gradient glass rounded-2xl border border-border p-6 transition-colors hover:bg-white/[0.03]">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold">
                    {exp.role}{" "}
                    <span className="text-accent">· {exp.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-faint">{exp.period}</span>
                </div>

                <p className="mt-3 text-muted">{exp.description}</p>

                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm text-muted">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent-2" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-xs text-faint"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
