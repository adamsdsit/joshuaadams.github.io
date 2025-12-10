import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';
import { experiences } from '@/content/resume';
import Link from 'next/link';

export default function ExperiencePage() {
  return (
    <>
      <NavBar />
      <main>
        <div className="container py-6">
          <nav aria-label="Breadcrumb" className="text-sm flex items-center gap-2">
            <Link className="text-accent2" href="/">Home</Link>
            <span className="text-muted">/</span>
            <span className="text-muted">Experience</span>
          </nav>
        </div>
        <Section title="All Experience" description="Complete roles and selected impact highlights.">
          <div className="grid gap-3 md:grid-cols-2">
            {experiences.map((exp) => (
              <article key={`${exp.title}-${exp.org}`} className="card">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-bold">{exp.title}</h3>
                    <p className="muted">{exp.org}</p>
                  </div>
                  <p className="muted">{exp.period}</p>
                </div>
                <ul className="muted mt-2 grid gap-2 list-none">
                  {exp.bullets.map((b) => (
                    <li key={b} className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
