import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';
import { education } from '@/content/resume';
import Link from 'next/link';

export default function EducationPage() {
  return (
    <>
      <NavBar />
      <main>
        <div className="container py-6">
          <nav aria-label="Breadcrumb" className="text-sm flex items-center gap-2">
            <Link className="text-accent2" href="/">Home</Link>
            <span className="text-muted">/</span>
            <span className="text-muted">Education</span>
          </nav>
        </div>
        <Section title="All Education" description="Complete academic history.">
          <div className="grid gap-3">
            {education.map((e) => (
              <article key={`${e.degree}-${e.school}`} className="card">
                <h3 className="font-bold">{e.degree}</h3>
                <p className="muted">{e.school}</p>
                <p className="muted">{e.period}</p>
              </article>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
