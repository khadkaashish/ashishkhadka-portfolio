const skillGroups = [
  { category: 'languages', skills: ['Go', 'Python', 'TypeScript', 'C++', 'JavaScript', 'SQL', 'PHP'] },
  { category: 'systems', skills: ['Distributed Systems', 'PostgreSQL', 'MongoDB', 'Docker', 'Kubernetes', 'gRPC', 'Linux', 'CI/CD'] },
  { category: 'backend', skills: ['Node.js', 'REST APIs', 'OAuth', 'JWT', 'Load Balancing', 'Microservices'] },
  { category: 'ml & data', skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Tableau', 'LLMs', 'Anomaly Detection'] },
  { category: 'tooling', skills: ['Git', 'AWS', 'Next.js', 'System Design', 'Code Review'] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 max-w-5xl mx-auto section-padding">
      <div className="border-t border-zinc-200 dark:border-zinc-800 pt-16">
        <p className="font-mono text-xs text-emerald-600 dark:text-emerald-500 uppercase tracking-widest mb-10">
          <span className="text-zinc-300 dark:text-zinc-700 mr-1">05</span> skills
        </p>

        <div className="font-mono text-sm space-y-3">
          {skillGroups.map((group) => (
            <div key={group.category} className="flex gap-0">
              <span className="text-zinc-400 dark:text-zinc-700 w-28 shrink-0 pt-px">{group.category}</span>
              <span className="text-zinc-300 dark:text-zinc-700 mr-4 pt-px">·</span>
              <span className="text-zinc-600 dark:text-zinc-400">{group.skills.join(', ')}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
