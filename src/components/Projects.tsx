"use client";

import { useRef } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { projects, type Project } from "@/lib/data";

export function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading index="04" subtitle="Selected work" title="Products I've worked on." />

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 0.08}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(360px circle at ${mx}px ${my}px, rgba(129,140,248,0.12), transparent 70%)`;

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="group relative block h-full overflow-hidden rounded-2xl border border-border bg-panel/50 p-6"
    >
      {project.href && (
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${project.name}`}
          className="absolute inset-0 z-20"
        />
      )}
      {/* spotlight */}
      <motion.div
        aria-hidden
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      {/* accent wash */}
      <div
        className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${project.accent} blur-2xl`}
      />

      <div className="relative">
        <div className="mb-4 flex items-start justify-between">
          <span className="font-mono text-xs uppercase tracking-wider text-faint">
            {project.tag}
          </span>
          {project.href && (
            <span className="text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent">
              ↗
            </span>
          )}
        </div>

        <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-gradient">
          {project.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-md border border-border bg-white/5 px-2.5 py-1 font-mono text-xs text-faint"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
