"use client";

import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-28 pb-16"
    >
      <motion.div
        variants={container}
        initial={reduce ? undefined : "hidden"}
        animate="show"
        className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]"
      >
        <div>
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-1.5 text-xs text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {profile.availability}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="block">Felipe</span>
            <span className="block text-gradient">Salazar</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            {profile.role}. {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
            >
              <span className="relative z-10">View my work</span>
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border bg-white/5 px-6 py-3 text-sm font-medium transition-colors hover:border-accent/50 hover:text-accent"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 flex flex-wrap gap-x-10 gap-y-4"
          >
            {profile.stats.slice(0, 3).map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-semibold text-gradient">{s.value}</div>
                <div className="text-xs uppercase tracking-wider text-faint">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div variants={item} className="relative">
          <TerminalCard />
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-faint md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="h-6 w-px bg-gradient-to-b from-fg to-transparent"
        />
      </motion.a>
    </section>
  );
}

function TerminalCard() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      animate={reduce ? undefined : { y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="border-gradient glass relative rounded-2xl border border-border p-1 shadow-2xl shadow-black/50"
    >
      <div className="rounded-xl bg-[#0a0a0e]/80 p-5 font-mono text-[13px] leading-relaxed">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
          <span className="h-3 w-3 rounded-full bg-green-400/70" />
          <span className="ml-2 text-xs text-faint">felipe.ts</span>
        </div>
        <pre className="whitespace-pre-wrap text-muted">
<span className="text-fuchsia-300">const</span> <span className="text-cyan-300">engineer</span> = {"{"}
{"\n  "}name: <span className="text-emerald-300">&apos;Felipe Salazar&apos;</span>,
{"\n  "}stack: [<span className="text-emerald-300">&apos;React&apos;</span>, <span className="text-emerald-300">&apos;Next.js&apos;</span>, <span className="text-emerald-300">&apos;TS&apos;</span>],
{"\n  "}experience: <span className="text-amber-300">7</span>,
{"\n  "}focus: <span className="text-emerald-300">&apos;performant UIs&apos;</span>,
{"\n  "}location: <span className="text-emerald-300">&apos;Brazil 🇧🇷&apos;</span>,
{"\n  "}available: <span className="text-amber-300">true</span>,
{"\n}"};
        </pre>
      </div>
    </motion.div>
  );
}
