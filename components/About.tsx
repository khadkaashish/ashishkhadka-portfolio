export default function About() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto section-padding">
      <div className="grid md:grid-cols-[200px_1fr] gap-12 items-start">
        <div>
          <span className="font-mono text-xs text-indigo-500 dark:text-indigo-400 uppercase tracking-widest">
            About
          </span>
        </div>

        <div className="space-y-5 max-w-2xl">
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
            I'm a software engineer who cares deeply about what happens at the system level —
            how data stays durable when nodes fail, how logs stay consistent under network partitions,
            how databases serve millions of queries without missing a beat.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            I grew up in Nepal, studied at Deakin University in Melbourne, and am currently
            finishing my MS in Computer Science at the University of New Haven. Along the way I've
            done research in ML anomaly detection, built production backend systems, and interned at
            Amazon. In August 2026 I'm joining AWS RDS — working on the infrastructure that powers
            databases at planetary scale.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Outside of engineering: I run, I compete in speech contests (Toastmasters
            International finalist), and I believe that clarity in writing and clarity in code come
            from the same place.
          </p>

          {/* Quick facts */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-200 dark:border-slate-800">
            {[
              { label: 'Based in', value: 'Connecticut, US' },
              { label: 'Starting', value: 'AWS RDS · Aug 2026' },
              { label: 'Education', value: 'MS CS · UNH' },
            ].map((f) => (
              <div key={f.label}>
                <p className="text-xs text-slate-400 dark:text-slate-500 font-mono uppercase tracking-wider mb-1">
                  {f.label}
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">{f.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
