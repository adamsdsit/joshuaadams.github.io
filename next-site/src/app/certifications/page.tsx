import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';
import { certifications } from '@/content/resume';

export default function CertificationsPage() {
  return (
    <>
      <NavBar />
      <main>
        <Section title="Certifications" description="Verified credentials and training." >
          <ul className="muted grid gap-2 list-none md:grid-cols-2">
            {certifications.map((c) => (
              <li key={c.name} className="card">
                <strong>{c.name}</strong>
                {c.issuer ? <span className="block muted">{c.issuer}</span> : null}
              </li>
            ))}
          </ul>
        </Section>
      </main>
      <Footer />
    </>
  );
}
