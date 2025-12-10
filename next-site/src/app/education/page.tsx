import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';
import { education } from '@/content/resume';

export default function EducationPage() {
  return (
    <>
      <NavBar />
      <main>
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
