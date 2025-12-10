import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';
import { awards } from '@/content/resume';

export default function AwardsPage() {
  return (
    <>
      <NavBar />
      <main>
        <Section title="Awards & Recognition" description="Full list of awards and honors.">
          <ul className="muted grid gap-2 list-none md:grid-cols-2">
            {awards.map((a) => (
              <li key={a} className="card">{a}</li>
            ))}
          </ul>
        </Section>
      </main>
      <Footer />
    </>
  );
}
