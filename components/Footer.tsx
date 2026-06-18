export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-6 max-w-5xl mx-auto section-padding">
      <p className="font-mono text-xs text-zinc-700">
        ashish khadka · {new Date().getFullYear()} · build · deploy · scale
      </p>
    </footer>
  );
}
