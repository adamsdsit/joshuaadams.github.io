import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';
import { skills } from '@/content/resume';

export default function SkillsPage() {
  return (
    <>
      <NavBar />
      <main>
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
