import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Research from '@/components/Research';
import Skills from '@/components/Skills';
import Writing from '@/components/Writing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0f172a] text-slate-800 dark:text-slate-200">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Research />
      <Skills />
      <Writing />
      <Contact />
      <Footer />
    </main>
  );
}
