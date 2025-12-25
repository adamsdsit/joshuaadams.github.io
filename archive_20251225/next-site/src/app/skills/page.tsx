import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';
import { skills } from '@/content/resume';
import Link from 'next/link';

export default function SkillsPage() {
  return (
    <>
      <NavBar />
      <main>
        <div className="container py-6">
          <nav aria-label="Breadcrumb" className="text-sm flex items-center gap-2">
            <Link className="text-accent2" href="/">Home</Link>
            <span className="text-muted">/</span>
            <span className="text-muted">Skills</span>
          </nav>
        </div>
        <Section title="Core Skills & Capabilities" description="Comprehensive skills overview.">
          <ul className="muted grid gap-2 list-none md:grid-cols-2">
            {skills.map((s) => (
              <li key={s} className="card">{s}</li>
            ))}
          </ul>
        </Section>
      </main>
      <Footer />
    </>
  );
}
