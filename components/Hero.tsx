'use client';

import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center section-padding pt-24 pb-16 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="space-y-6 animate-fade-up">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 text-emerald-700 dark:text-emerald-400 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Joining AWS RDS · August 2026
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-slate-900 dark:text-slate-50 text-balance">
            I build systems
            <br />
            <span className="text-indigo-600 dark:text-indigo-400">
              that don't go down.
            </span>
          </h1>

          <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-md">
            Software engineer focused on distributed systems, databases, and infrastructure.
            Currently finishing my MS at University of New Haven — previously at AWS and Deakin University.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium transition-colors"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-600 text-sm font-medium transition-colors"
            >
              Get in touch
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://github.com/khadkaashish"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/khadkaa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:ashish-khadka@outlook.com"
              className="text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            {/* Subtle background accent */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-indigo-100 to-slate-100 dark:from-indigo-950/40 dark:to-slate-800/40 blur-sm" />
            <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-700/50">
              <Image
                src="/ashish.jpg"
                alt="Ashish Khadka"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="mt-16 flex justify-center">
        <a
          href="#about"
          className="text-slate-300 dark:text-slate-700 hover:text-indigo-400 transition-colors animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
}
