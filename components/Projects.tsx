import { ExternalLink, Github, Construction } from 'lucide-react';

const projects = [
  {
    name: 'DWAL',
    subtitle: 'Distributed Write-Ahead Log Service',
    description:
      'A fault-tolerant, distributed logging service built for crash recovery and replication. Features quorum-based durability, total ordering via monotonically increasing LSNs, idempotent retries, and replica catch-up. Designed to stay consistent under node failures, network partitions, and partial writes.',
    tags: ['Distributed Systems', 'Go', 'gRPC', 'WAL', 'Quorum Replication'],
    github: 'https://github.com/khadkaashish',
    status: 'In Progress',
    highlight: true,
    details: [
      'Quorum-based durability — writes committed only after majority acks',
      'Leader assigns strictly increasing LSNs for total ordering',
      'Follower catch-up stream for replica recovery on restart',
      'Crash recovery with tail truncation for partial writes',
    ],
  },
  {
    name: 'More coming',
    subtitle: 'Building in public',
    description:
      'I\'m actively working on new projects in distributed systems and infrastructure. Check back soon or follow my GitHub.',
    tags: [],
    github: 'https://github.com/khadkaashish',
    status: 'Soon',
    highlight: false,
    placeholder: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto section-padding">
      <div className="grid md:grid-cols-[200px_1fr] gap-12 items-start">
        <div>
          <span className="font-mono text-xs text-indigo-500 dark:text-indigo-400 uppercase tracking-widest">
            Projects
          </span>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`relative rounded-xl border p-6 transition-all group ${
                p.placeholder
                  ? 'border-dashed border-slate-200 dark:border-slate-800 bg-transparent'
                  : p.highlight
                  ? 'border-indigo-200/80 dark:border-indigo-900/60 bg-indigo-50/40 dark:bg-indigo-950/20 hover:border-indigo-300 dark:hover:border-indigo-800'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/30 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {p.placeholder ? (
                <div className="flex flex-col items-center justify-center h-full min-h-32 text-center gap-3">
                  <Construction size={20} className="text-slate-300 dark:text-slate-700" />
                  <div>
                    <p className="text-sm font-medium text-slate-400 dark:text-slate-600">{p.name}</p>
                    <p className="text-xs text-slate-300 dark:text-slate-700 mt-1">{p.description}</p>
                  </div>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-400 dark:text-slate-600 hover:text-indigo-500 transition-colors font-mono"
                  >
                    github →
                  </a>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-slate-900 dark:text-slate-100 font-mono">
                          {p.name}
                        </h3>
                        <span className="px-1.5 py-0.5 rounded text-xs font-mono bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800/40">
                          {p.status}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{p.subtitle}</p>
                    </div>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={16} />
                    </a>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {p.description}
                  </p>

                  {/* Key details */}
                  {p.details && (
                    <ul className="space-y-1.5">
                      {p.details.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-500"
                        >
                          <span className="text-indigo-400 mt-0.5 shrink-0">—</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tags */}
                  {p.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
