"use client";

import { motion } from "framer-motion";
import { Bell, ChartLine, Github, RefreshCw, Twitter } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: RefreshCw,
      title: "Real-time Sync",
      description:
        "Stay perfectly aligned across devices with instant updates and zero manual refreshes.",
    },
    {
      icon: ChartLine,
      title: "Team Analytics",
      description:
        "Track momentum with clear performance insights designed for high-output collaboration.",
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description:
        "Receive precise, context-aware nudges that keep priorities moving without distraction.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <header className="border-b border-slate-800/80">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-2 text-base font-semibold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-indigo-500">
              <span className="text-sm font-semibold">T</span>
            </span>
            TaskFlow
          </a>
          <nav className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
            <a href="#features" className="transition-colors hover:text-white">Features</a>
            <a href="#pricing" className="transition-colors hover:text-white">Pricing</a>
            <a href="#about" className="transition-colors hover:text-white">About</a>
          </nav>
          <a
            href="#"
            className="inline-flex h-11 items-center rounded-xl border border-slate-700 bg-slate-800 px-5 text-sm font-semibold transition-colors hover:border-slate-500"
          >
            Sign In
          </a>
        </div>
      </header>

      <main>
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto w-full max-w-6xl px-4 pb-24 pt-16 sm:px-6 lg:px-8 lg:pt-20"
        >
          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
            Orchestrate your
            <span className="block bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
              productivity.
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-slate-400">
            TaskFlow is the high-performance workspace designed for power users.
            Zero friction, keyboard-first, and crafted for flow state.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex h-11 min-w-44 items-center justify-center rounded-xl bg-indigo-500 px-6 text-base font-semibold text-white transition-all hover:bg-indigo-400"
            >
              Get Started
            </a>
            <a
              href="#"
              className="inline-flex h-11 min-w-44 items-center justify-center rounded-xl border border-slate-700 bg-slate-800/80 px-6 text-base font-semibold text-slate-100 transition-colors hover:border-slate-500"
            >
              View Documentation
            </a>
          </div>
        </motion.section>

        <section id="features" className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold tracking-tight text-white">Engineered for speed</h2>
          <p className="mt-4 max-w-3xl text-2xl text-slate-400">
            Every interaction is optimized for milliseconds. Experience software that feels like an extension of your thought process.
          </p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
            className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.article
                  key={feature.title}
                  variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                  className="rounded-2xl border border-slate-800 bg-slate-800/50 p-7"
                >
                  <div className="inline-flex rounded-xl bg-slate-900 p-3">
                    <Icon className="h-5 w-5 text-indigo-500" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-3xl font-semibold tracking-tight text-white">{feature.title}</h3>
                  <p className="mt-4 text-xl leading-relaxed text-slate-400">{feature.description}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </section>
      </main>

      <footer id="about" className="border-t border-slate-800/80">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} TaskFlow. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-white">Privacy</a>
            <a href="#" className="transition-colors hover:text-white">Terms</a>
            <a href="https://github.com" aria-label="GitHub" className="transition-colors hover:text-white">
              <Github className="h-4 w-4" />
            </a>
            <a href="https://x.com" aria-label="Twitter" className="transition-colors hover:text-white">
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
