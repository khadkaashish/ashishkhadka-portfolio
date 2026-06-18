'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center section-padding max-w-5xl mx-auto pt-14">
      <div className="space-y-8 animate-fade-up">
        <p className="font-mono text-sm text-emerald-600 dark:text-emerald-400">
          <span className="text-zinc-300 dark:text-zinc-600 mr-2">&gt;</span>
          joining aws rds · aug 2026
          <span className="inline-block w-2 h-4 bg-emerald-500 ml-1 align-middle animate-cursor-blink" />
        </p>

        <div>
          <h1 className="font-mono text-5xl md:text-7xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50 leading-none">
            Ashish Khadka
          </h1>
          <p className="font-mono text-base md:text-lg text-zinc-400 dark:text-zinc-500 mt-3">
            <span className="text-zinc-300 dark:text-zinc-700">// </span>
            distributed systems · databases · infrastructure
          </p>
        </div>

        <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed max-w-xl">
          Software engineer specializing in distributed systems, databases, and infrastructure.
          Currently finishing my MS at University of New Haven — joining AWS RDS in August 2026.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#projects"
            className="font-mono text-sm text-zinc-900 bg-emerald-500 hover:bg-emerald-400 px-5 py-2.5 transition-colors"
          >
            ./projects
          </a>
          <a
            href="#contact"
            className="font-mono text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 border border-zinc-300 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 px-5 py-2.5 transition-colors"
          >
            ./contact
          </a>
        </div>

        <div className="flex items-center gap-5 pt-1">
          <a
            href="https://github.com/khadkaashish"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 dark:text-zinc-600 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/khadkaa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 dark:text-zinc-600 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:ashish-khadka@outlook.com"
            className="text-zinc-400 dark:text-zinc-600 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
