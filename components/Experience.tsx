const experiences = [
  {
    company: 'Amazon Web Services',
    role: 'Software Engineer — RDS',
    period: 'Aug 2026 →',
    location: 'United States',
    description: 'Joining the Amazon RDS team to work on database infrastructure at scale.',
    tags: ['Distributed Systems', 'Databases', 'Infrastructure'],
    upcoming: true,
  },
  {
    company: 'Amazon Web Services',
    role: 'Software Engineer Intern',
    period: 'Jun 2025 – Aug 2025',
    location: 'California, US',
    description: 'Software engineering internship at AWS.',
    tags: ['AWS', 'Cloud'],
    upcoming: false,
  },
  {
    company: 'University of New Haven',
    role: 'Research Assistant (Provost)',
    period: 'Oct 2024 – Present',
    location: 'Connecticut, US',
    description:
      'Provost-funded research assistantship in computer science.',
    tags: ['Research', 'Computer Science'],
    upcoming: false,
  },
  {
    company: 'Startup',
    role: 'Software Development Engineer',
    period: 'Jan 2022 – Jan 2024',
    location: 'Kathmandu, Nepal',
    description:
      'Led end-to-end development of a high-performance server-side application. Architected PostgreSQL and MongoDB data storage, implemented Docker/Kubernetes CI/CD pipelines, and established backend best practices around API security and load balancing.',
    tags: ['PostgreSQL', 'MongoDB', 'Docker', 'Kubernetes', 'OAuth', 'JWT'],
    upcoming: false,
  },
  {
    company: 'Deakin University',
    role: 'Research Assistant & Digital Learning Support',
    period: 'Aug 2019 – Sep 2021',
    location: 'Melbourne, Australia',
    description:
      'Conducted research on Deep Semi-Supervised ML for anomaly detection using TensorFlow and PyTorch. Simultaneously designed the Faculty Learning Innovations website and built Tableau dashboards for the University LMS.',
    tags: ['TensorFlow', 'PyTorch', 'Python', 'Tableau', 'ML Research'],
    upcoming: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 max-w-6xl mx-auto section-padding">
      <div className="grid md:grid-cols-[200px_1fr] gap-12 items-start">
        <div>
          <span className="font-mono text-xs text-indigo-500 dark:text-indigo-400 uppercase tracking-widest">
            Experience
          </span>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-slate-200 dark:bg-slate-800 hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="md:pl-8 relative">
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-1.5 w-2 h-2 rounded-full -translate-x-[3.5px] hidden md:block ${
                    exp.upcoming
                      ? 'bg-indigo-500 ring-4 ring-indigo-100 dark:ring-indigo-950/60'
                      : 'bg-slate-300 dark:bg-slate-700'
                  }`}
                />

                <div className={`space-y-2 ${exp.upcoming ? 'opacity-80' : ''}`}>
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-mono text-xs text-slate-400 dark:text-slate-500">
                        {exp.period}
                      </p>
                      <p className="font-mono text-xs text-slate-400 dark:text-slate-600">
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  {exp.description && (
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {exp.description}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 text-xs font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
