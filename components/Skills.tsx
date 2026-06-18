const skillGroups = [
  {
    category: 'Languages',
    skills: ['Go', 'Python', 'TypeScript', 'C++', 'JavaScript', 'SQL', 'PHP'],
  },
  {
    category: 'Systems & Infrastructure',
    skills: ['Distributed Systems', 'PostgreSQL', 'MongoDB', 'Docker', 'Kubernetes', 'CI/CD', 'gRPC', 'Linux'],
  },
  {
    category: 'Backend & APIs',
    skills: ['Node.js', 'REST APIs', 'OAuth', 'JWT', 'Load Balancing', 'Microservices'],
  },
  {
    category: 'ML & Data',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Tableau', 'LLMs', 'Anomaly Detection'],
  },
  {
    category: 'Tools & Practices',
    skills: ['Git', 'AWS', 'Next.js', 'Data Structures', 'System Design', 'Code Review'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 max-w-6xl mx-auto section-padding">
      <div className="grid md:grid-cols-[200px_1fr] gap-12 items-start">
        <div>
          <span className="font-mono text-xs text-indigo-500 dark:text-indigo-400 uppercase tracking-widest">
            Skills
          </span>
        </div>

        <div className="space-y-6">
          {skillGroups.map((group) => (
            <div key={group.category} className="flex flex-col sm:flex-row gap-3 sm:gap-6">
              <p className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider shrink-0 sm:w-40 pt-1">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 text-sm hover:bg-indigo-50 dark:hover:bg-indigo-950/40 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors cursor-default"
                  >
                    {skill}
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
