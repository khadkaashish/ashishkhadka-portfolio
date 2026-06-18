'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#about', label: 'about', num: '01' },
  { href: '#experience', label: 'experience', num: '02' },
  { href: '#projects', label: 'projects', num: '03' },
  { href: '#research', label: 'research', num: '04' },
  { href: '#skills', label: 'skills', num: '05' },
  { href: '#writing', label: 'writing', num: '06' },
  { href: '#contact', label: 'contact', num: '07' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09090b]/95 backdrop-blur-md border-b border-zinc-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#"
          className="font-mono text-sm text-zinc-400 hover:text-emerald-400 transition-colors tracking-tight"
        >
          ashish khadka
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs text-zinc-500 hover:text-zinc-100 transition-colors group"
            >
              <span className="text-emerald-500 mr-1">{l.num}</span>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline font-mono text-xs text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            resume →
          </a>
          <button
            className="md:hidden text-zinc-500 hover:text-zinc-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#09090b] border-t border-zinc-800 px-6 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              <span className="text-emerald-500 mr-2">{l.num}</span>
              {l.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            className="font-mono text-sm text-emerald-500 mt-2"
          >
            resume →
          </a>
        </div>
      )}
    </header>
  );
}
