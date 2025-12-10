import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';

export default function ProjectsPage(){
  return (
    <>
      <NavBar />
      <main>
        <Section title="Projects">
          <div className="grid gap-3 md:grid-cols-3">
            <article className="card">
              <h3 className="font-bold">NSF Pitch — Resilient Edge Analytics</h3>
              <p className="muted">Role: Co-PI • Year: 2024 • Status: Submitted</p>
              <p className="muted mt-2">Exploring edge-first analytics for distributed sensors and small satellites. Proposed a mixed-fidelity pipeline to reduce bandwidth and accelerate decisioning.</p>
            </article>
            <article className="card">
              <h3 className="font-bold">NSF Pitch — Secure EHR Integration</h3>
              <p className="muted">Role: PI • Year: 2023 • Status: Funded</p>
              <p className="muted mt-2">Architected secure integration patterns for EHR systems using zero-trust principles and event-driven microservices.</p>
            </article>
            <article className="card">
              <h3 className="font-bold">Enterprise Resilience Office Design</h3>
              <p className="muted">Role: Lead Architect • Year: 2023 • Status: Delivered</p>
              <p className="muted mt-2">Designed a resilience operating model aligning IT, InfoSec, BC/CM functions and critical supplier management.</p>
            </article>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
