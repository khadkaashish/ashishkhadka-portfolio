export default function About() {
  return (
    <section id="about" className="py-24 max-w-5xl mx-auto section-padding">
      <div className="border-t border-zinc-200 dark:border-zinc-800 pt-16">
        <p className="font-mono text-xs text-emerald-600 dark:text-emerald-500 uppercase tracking-widest mb-10">
          <span className="text-zinc-300 dark:text-zinc-700 mr-1">01</span> about
        </p>

        <div className="max-w-2xl space-y-5">
          <p className="text-zinc-800 dark:text-zinc-200 text-lg leading-relaxed">
            Software engineer specializing in distributed systems, databases, and infrastructure.
          </p>
          <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Grew up in Nepal, studied at Deakin University in Melbourne, and currently finishing
            my MS in Computer Science at the University of New Haven. Along the way: ML anomaly
            detection research, production backend systems in Kathmandu, and a summer at Amazon.
            In August 2026 I'm joining AWS RDS — working on the infrastructure that powers
            databases at planetary scale.
          </p>
          <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Outside of systems work: I run, I compete in speech contests (Toastmasters
            International finalist), and I'm building DWAL — a distributed write-ahead log service
            with quorum-based durability, total ordering via monotonically increasing LSNs, and
            crash recovery.
          </p>

          <div className="pt-6 grid grid-cols-3 gap-6 border-t border-zinc-200 dark:border-zinc-800 font-mono text-sm">
            {[
              { k: 'location', v: 'Connecticut, US' },
              { k: 'starting', v: 'AWS RDS · aug 2026' },
              { k: 'education', v: 'MS CS · UNH' },
            ].map((f) => (
              <div key={f.k}>
                <p className="text-zinc-400 dark:text-zinc-600 text-xs uppercase tracking-wider mb-1">{f.k}</p>
                <p className="text-zinc-700 dark:text-zinc-300">{f.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
