import { ExternalLink } from 'lucide-react';

const research = [
  {
    title: 'Are Language Models Good at Lateral Thinking?',
    institution: 'University of New Haven',
    venue: '2025 3rd International Conference on Foundation and Large Language Models (FLLM) · IEEE',
    period: 'Nov 2025',
    description: 'Assessed LLMs on lateral thinking puzzles using NYT Connections and LinkedIns Pinpoint. Benchmarked four distilled models — LLaMA-3.1-8B-Instruct performed best with 31.50% on Pinpoint and 19.33% on Connections. Proposed first cybersecurity applications of lateral thinking AI.',
    tags: ['LLMs', 'Benchmarking', 'NLP', 'IEEE', 'Python', 'LLaMA'],
    collaborators: 'Ashish Khadka, Mohamad Nassar, Shivanjali Khare',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Ia5aU4gAAAAJ&citation_for_view=Ia5aU4gAAAAJ:u5HHmVD_uO8C',
    badge: 'IEEE Paper',
    badgeColor: 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800/40',
  },
  {
    title: 'Lateral Thinking in LLMs: Benchmarking and Fine-Tuning for Puzzle Solving and Generation',
    institution: 'University of New Haven',
    venue: "Master's Thesis",
    period: '2026',
    description: 'Extended the lateral thinking benchmark to include fine-tuning experiments. Studied how LLMs can be adapted to not just solve but generate lateral thinking puzzles. Explored the gap between reasoning ability and creative divergent thinking in modern language models.',
    tags: ['LLMs', 'Fine-Tuning', 'Benchmarking', 'NLP', 'Puzzle Generation'],
    collaborators: 'University of New Haven',
    link: null,
    badge: "Master's Thesis",
    badgeColor: 'bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-400 border-violet-200 dark:border-violet-800/40',
  },
  {
    title: 'Deep Semi-Supervised Anomaly Detection (DSAD)',
    institution: 'Deakin University',
    venue: 'Research Study',
    period: '2019 - 2021',
    description: 'Explored deep semi-supervised ML algorithms for anomaly detection. Trained and evaluated models using TensorFlow and PyTorch on MNIST and CIFAR-10 datasets, optimizing detection accuracy in low-label settings.',
    tags: ['TensorFlow', 'PyTorch', 'Anomaly Detection', 'Semi-Supervised ML'],
    collaborators: 'Professors and PhD researchers, Deakin University',
    link: null,
    badge: 'Research',
    badgeColor: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700',
  },
];

export default function Research() {
  return (
    <section id="research" className="py-24 max-w-6xl mx-auto section-padding">
      <div className="grid md:grid-cols-[200px_1fr] gap-12 items-start">
        <div>
          <span className="font-mono text-xs text-indigo-500 dark:text-indigo-400 uppercase tracking-widest">
            Research
          </span>
        </div>
        <div className="space-y-5">
          {research.map((r, i) => (
            <div key={i} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/30 p-6 space-y-4 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={['px-2 py-0.5 rounded-md text-xs font-mono border', r.badgeColor].join(' ')}>
                      {r.badge}
                    </span>
                    <span className="font-mono text-xs text-slate-400 dark:text-slate-500">{r.period}</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 leading-snug">{r.title}</h3>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">{r.venue}</p>
                </div>
                {r.link && (
                  <a href={r.link} target="_blank" rel="noopener noreferrer" className="shrink-0 text-slate-400 hover:text-indigo-500 transition-colors mt-1" aria-label="View paper">
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{r.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {r.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-mono">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-400 dark:text-slate-500 italic">{r.collaborators}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
