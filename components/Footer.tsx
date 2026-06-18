export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-8 max-w-6xl mx-auto section-padding">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-slate-400 dark:text-slate-600">
          © {year} Ashish Khadka
        </p>
        <p className="font-mono text-xs text-slate-300 dark:text-slate-700">
          Built with Next.js · Deployed on Vercel
        </p>
      </div>
    </footer>
  );
}
