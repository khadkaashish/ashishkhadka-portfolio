import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 max-w-6xl mx-auto section-padding">
      <div className="grid md:grid-cols-[200px_1fr] gap-12 items-start">
        <div>
          <span className="font-mono text-xs text-indigo-500 dark:text-indigo-400 uppercase tracking-widest">
            Contact
          </span>
        </div>

        <div className="space-y-6 max-w-lg">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              Let's talk.
            </h2>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              Whether it's about distributed systems, research, opportunities, or just engineering
              in general — my inbox is open.
            </p>
          </div>

          <div className="space-y-3">
            <a
              href="mailto:ashish-khadka@outlook.com"
              className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/30 hover:border-indigo-300 dark:hover:border-indigo-800 group transition-colors"
            >
              <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-950/60 transition-colors">
                <Mail size={15} className="text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
              </div>
              <div>
                <p className="text-xs text-slate-400 dark:text-slate-500 font-mono">email</p>
                <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                  ashish-khadka@outlook.com
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/khadkaa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/30 hover:border-indigo-300 dark:hover:border-indigo-800 group transition-colors"
            >
              <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-950/60 transition-colors">
                <Linkedin size={15} className="text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
              </div>
              <div>
                <p className="text-xs text-slate-400 dark:text-slate-500 font-mono">linkedin</p>
                <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                  linkedin.com/in/khadkaa
                </p>
              </div>
            </a>

            <a
              href="https://github.com/khadkaashish"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/30 hover:border-indigo-300 dark:hover:border-indigo-800 group transition-colors"
            >
              <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-950/60 transition-colors">
                <Github size={15} className="text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
              </div>
              <div>
                <p className="text-xs text-slate-400 dark:text-slate-500 font-mono">github</p>
                <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                  github.com/khadkaashish
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
