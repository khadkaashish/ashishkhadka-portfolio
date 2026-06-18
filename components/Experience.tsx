const experiences = [
  {
    company: 'Amazon Web Services',
    role: 'Software Engineer — RDS',
    period: 'aug 2026 →',
    location: 'United States',
    description: 'Joining the Amazon RDS team to work on database infrastructure at scale.',
    tags: ['Distributed Systems', 'Databases', 'Infrastructure'],
    upcoming: true,
  },
  {
    company: 'Amazon Web Services',
    role: 'Software Engineer Intern',
    period: 'jun 2025 – aug 2025',
    location: 'California, US',
    description:
      'Built internal tooling and services on the AWS platform. Details under NDA — happy to discuss in interviews.',
    tags: ['AWS', 'Cloud', 'Go'],
    upcoming: false,
  },
  {
    company: 'University of New Haven',
    role: 'Research Assistant (Provost)',
    period: 'oct 2024 – present',
    location: 'Connecticut, US',
    description:
      'Provost-funded research on LLM lateral thinking benchmarking. Published at IEEE FLLM 2025.',
    tags: ['LLMs', 'NLP', 'Python', 'Research'],
    upcoming: false,
  },
  {
    company: 'Startup',
    role: 'Software Development Engineer',
    period: 'jan 2022 – jan 2024',
    location: 'Kathmandu, Nepal',
    description:
      'Led backend development of a high-performance server-side application. Architected PostgreSQL and MongoDB storage, implemented Docker/Kubernetes CI/CD pipelines, and established API security practices around OAuth and JWT.',
    tags: ['PostgreSQL', 'MongoDB', 'Docker', 'Kubernetes', 'OAuth', 'JWT'],
    upcoming: false,
  },
  {
    company: 'Deakin University',
    role: 'Research Assistant & Digital Learning Support',
    period: 'aug 2019 – sep 2021',
    location: 'Melbourne, Australia',
    description:
      'Researched deep semi-supervised ML for anomaly detection using TensorFlow and PyTorch on MNIST and CIFAR-10. Concurrently designed the Faculty Learning Innovations website and built Tableau dashboards for the university LMS.',
    tags: ['TensorFlow', 'PyTorch', 'Python', 'Tableau', 'ML Research'],
    upcoming: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 max-w-5xl mx-auto section-padding">
      <div className="border-t border-zinc-800 pt-16">
        <p className="font-mono text-xs text-emerald-500 uppercase tracking-widest mb-10">
          <span className="text-zinc-700 mr-1">02</span> experience
        </p>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`py-7 border-b border-zinc-800/60 ${i === 0 ? 'border-t border-zinc-800/60' : ''}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <span className="text-zinc-100 font-medium">{exp.role}</span>
                  <span className="text-zinc-600 mx-2">·</span>
                  <span
                    className={`text-sm font-mono ${exp.upcoming ? 'text-emerald-400' : 'text-zinc-400'}`}
                  >
                    {exp.company}
                  </span>
                </div>
                <div className="font-mono text-xs text-zinc-600 shrink-0 sm:text-right">
                  <span>{exp.period}</span>
                  <span className="text-zinc-700 mx-1.5">·</span>
                  <span>{exp.location}</span>
                </div>
              </div>

              {exp.description && (
                <p className="text-sm text-zinc-500 leading-relaxed mb-3 max-w-2xl">
                  {exp.description}
                </p>
              )}

              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-emerald-600 bg-emerald-950/40 px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
