'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center section-padding max-w-5xl mx-auto pt-14">
      <div className="space-y-8 animate-fade-up">
        {/* Status line */}
        <p className="font-mono text-sm text-emerald-400">
          <span className="text-zinc-600 mr-2">&gt;</span>
          joining aws rds · aug 2026
          <span className="inline-block w-2 h-4 bg-emerald-400 ml-1 align-middle animate-cursor-blink" />
        </p>

        {/* Name */}
        <div>
          <h1 className="font-mono text-5xl md:text-7xl font-medium tracking-tight text-zinc-50 leading-none">
            Ashish Khadka
          </h1>
          <p className="font-mono text-base md:text-lg text-zinc-500 mt-3">
            <span className="text-zinc-700">// </span>
            distributed systems · databases · infrastructure
          </p>
        </div>

        {/* Description */}
        <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
          I work at the layer where reliability is earned — quorum writes, WAL recovery, replica
          catch-up. Not the layer where you hope the database stays up.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#projects"
            className="font-mono text-sm text-zinc-900 bg-emerald-400 hover:bg-emerald-300 px-5 py-2.5 transition-colors"
          >
            ./projects
          </a>
          <a
            href="#contact"
            className="font-mono text-sm text-zinc-400 hover:text-zinc-100 border border-zinc-800 hover:border-zinc-600 px-5 py-2.5 transition-colors"
          >
            ./contact
          </a>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-5 pt-1">
          <a
            href="https://github.com/khadkaashish"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-zinc-300 transition-colors"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/khadkaa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-zinc-300 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:ashish-khadka@outlook.com"
            className="text-zinc-600 hover:text-zinc-300 transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
