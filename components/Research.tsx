import { ExternalLink } from 'lucide-react';

const research = [
  {
    title: 'Are Language Models Good at Lateral Thinking?',
    venue: '2025 3rd International Conference on Foundation and Large Language Models (FLLM) · IEEE',
    period: 'nov 2025',
    description:
      'Assessed LLMs on lateral thinking puzzles using NYT Connections and LinkedIn Pinpoint. Benchmarked four distilled models — LLaMA-3.1-8B-Instruct performed best with 31.50% on Pinpoint and 19.33% on Connections. Proposed first cybersecurity applications of lateral thinking AI.',
    tags: ['LLMs', 'Benchmarking', 'NLP', 'IEEE', 'Python', 'LLaMA'],
    collaborators: 'Ashish Khadka, Mohamad Nassar, Shivanjali Khare',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Ia5aU4gAAAAJ&citation_for_view=Ia5aU4gAAAAJ:u5HHmVD_uO8C',
    badge: 'IEEE Paper',
  },
  {
    title: 'Lateral Thinking in LLMs: Benchmarking and Fine-Tuning for Puzzle Solving and Generation',
    venue: "Master's Thesis · University of New Haven",
    period: '2026',
    description:
      'Extended the lateral thinking benchmark to include fine-tuning experiments. Studied how LLMs can be adapted to not just solve but generate lateral thinking puzzles. Explored the gap between reasoning ability and creative divergent thinking in modern language models.',
    tags: ['LLMs', 'Fine-Tuning', 'Benchmarking', 'NLP', 'Puzzle Generation'],
    collaborators: 'University of New Haven',
    link: null,
    badge: "Master's Thesis",
  },
  {
    title: 'Deep Semi-Supervised Anomaly Detection (DSAD)',
    venue: 'Research Study · Deakin University',
    period: '2019–2021',
    description:
      'Explored deep semi-supervised ML algorithms for anomaly detection. Trained and evaluated models using TensorFlow and PyTorch on MNIST and CIFAR-10 datasets, optimizing detection accuracy in low-label settings.',
    tags: ['TensorFlow', 'PyTorch', 'Anomaly Detection', 'Semi-Supervised ML'],
    collaborators: 'Professors and PhD researchers, Deakin University',
    link: null,
    badge: 'Research',
  },
];

export default function Research() {
  return (
    <section id="research" className="py-24 max-w-5xl mx-auto section-padding">
      <div className="border-t border-zinc-200 dark:border-zinc-800 pt-16">
        <p className="font-mono text-xs text-emerald-600 dark:text-emerald-500 uppercase tracking-widest mb-10">
          <span className="text-zinc-300 dark:text-zinc-700 mr-1">04</span> research
        </p>

        <div className="space-y-0">
          {research.map((r, i) => (
            <div
              key={i}
              className={`py-7 border-b border-zinc-200/80 dark:border-zinc-800/60 ${i === 0 ? 'border-t border-zinc-200/80 dark:border-zinc-800/60' : ''}`}
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-mono text-xs text-zinc-500 dark:text-zinc-600 border border-zinc-200 dark:border-zinc-800 px-1.5 py-0.5">
                      {r.badge}
                    </span>
                    <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600">{r.period}</span>
                  </div>
                  <h3 className="text-zinc-800 dark:text-zinc-100 font-medium leading-snug">{r.title}</h3>
                  <p className="font-mono text-xs text-zinc-400 dark:text-zinc-600">{r.venue}</p>
                </div>
                {r.link && (
                  <a
                    href={r.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-zinc-400 dark:text-zinc-600 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors mt-1"
                    aria-label="View paper"
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed mb-3 max-w-2xl">
                {r.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-2">
                {r.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-emerald-700 dark:text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="font-mono text-xs text-zinc-400 dark:text-zinc-700 italic">{r.collaborators}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
