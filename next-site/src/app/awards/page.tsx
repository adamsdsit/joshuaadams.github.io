import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';
import { awards } from '@/content/resume';
import Link from 'next/link';

export default function AwardsPage() {
  return (
    <>
      <NavBar />
      <main>
        <div className="container py-6">
          <nav aria-label="Breadcrumb" className="text-sm flex items-center gap-2">
            <Link className="text-accent2" href="/">Home</Link>
            <span className="text-muted">/</span>
            <span className="text-muted">Awards</span>
          </nav>
        </div>
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
