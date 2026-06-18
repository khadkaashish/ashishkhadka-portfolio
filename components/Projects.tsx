import { Github } from 'lucide-react';

const projects = [
  {
    name: 'DWAL',
    subtitle: 'Distributed Write-Ahead Log Service',
    description:
      'A fault-tolerant, distributed logging service built for crash recovery and replication. Designed to stay consistent under node failures, network partitions, and partial writes.',
    tags: ['Go', 'gRPC', 'Distributed Systems', 'WAL', 'Quorum Replication'],
    github: 'https://github.com/khadkaashish',
    status: 'in progress',
    details: [
      'Quorum-based durability — writes committed only after majority acknowledgment',
      'Leader assigns strictly increasing LSNs for total ordering',
      'Follower catch-up stream for replica recovery on restart',
      'Crash recovery with tail truncation for partial writes',
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 max-w-5xl mx-auto section-padding">
      <div className="border-t border-zinc-200 dark:border-zinc-800 pt-16">
        <p className="font-mono text-xs text-emerald-600 dark:text-emerald-500 uppercase tracking-widest mb-10">
          <span className="text-zinc-300 dark:text-zinc-700 mr-1">03</span> projects
        </p>

        <div className="space-y-12">
          {projects.map((p, i) => (
            <div key={i}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-mono text-lg font-medium text-zinc-900 dark:text-zinc-100">{p.name}</h3>
                    <span className="font-mono text-xs text-amber-600 dark:text-amber-500 border border-amber-200 dark:border-amber-900/60 px-1.5 py-0.5">
                      {p.status}
                    </span>
                  </div>
                  <p className="font-mono text-sm text-zinc-400 dark:text-zinc-500">
                    <span className="text-zinc-300 dark:text-zinc-700">// </span>
                    {p.subtitle}
                  </p>
                </div>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 dark:text-zinc-600 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors mt-1"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                </a>
              </div>

              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-5 max-w-2xl">
                {p.description}
              </p>

              <div className="font-mono text-sm bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 p-5 space-y-2">
                {p.details.map((d, j) => (
                  <div key={j} className="flex gap-3">
                    <span className="text-zinc-300 dark:text-zinc-700 shrink-0">—</span>
                    <span className="text-zinc-600 dark:text-zinc-400">{d}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-emerald-700 dark:text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <div className="border-t border-dashed border-zinc-200 dark:border-zinc-800 pt-8">
            <p className="font-mono text-sm text-zinc-300 dark:text-zinc-700">
              <span className="text-zinc-200 dark:text-zinc-800">$ </span>
              more projects building...
            </p>
            <a
              href="https://github.com/khadkaashish"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-zinc-400 dark:text-zinc-600 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors mt-2 inline-block"
            >
              github.com/khadkaashish →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
