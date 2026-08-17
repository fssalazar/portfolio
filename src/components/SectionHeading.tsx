"use client";

import { Reveal } from "./Reveal";

type Props = {
  index: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ index, title, subtitle }: Props) {
  return (
    <div className="mb-14 max-w-2xl">
      <Reveal>
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-sm text-accent">{index}</span>
          <span className="h-px w-10 bg-gradient-to-r from-accent to-transparent" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-faint">
            {subtitle}
          </span>
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
