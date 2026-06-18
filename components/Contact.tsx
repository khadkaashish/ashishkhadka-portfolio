import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 max-w-5xl mx-auto section-padding">
      <div className="border-t border-zinc-800 pt-16">
        <p className="font-mono text-xs text-emerald-500 uppercase tracking-widest mb-10">
          <span className="text-zinc-700 mr-1">07</span> contact
        </p>

        <div className="max-w-lg space-y-6">
          <div>
            <h2 className="font-mono text-2xl text-zinc-100 mb-2">get in touch</h2>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Distributed systems, research, opportunities, or just engineering in general —
              my inbox is open.
            </p>
          </div>

          <a
            href="mailto:ashish-khadka@outlook.com"
            className="group flex items-center gap-3 text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            <Mail size={14} className="shrink-0" />
            <span className="font-mono text-sm">ashish-khadka@outlook.com</span>
          </a>

          <div className="flex items-center gap-6 pt-2">
            <a
              href="https://www.linkedin.com/in/khadkaa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs text-zinc-600 hover:text-zinc-300 transition-colors"
            >
              <Linkedin size={13} />
              linkedin
            </a>
            <a
              href="https://github.com/khadkaashish"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs text-zinc-600 hover:text-zinc-300 transition-colors"
            >
              <Github size={13} />
              github
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
