import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';

export default function CloudSecurityCompliancePage() {
  return (
    <>
      <NavBar />
      <main>
        <header className="container">
          <div className="card">
            <h1 className="text-2xl font-bold">
              COM 4XX — Cloud Security & Compliance in Practice
            </h1>
            <p className="muted">
              Advanced Undergraduate • Hybrid (In-person & Labs)
            </p>
          </div>
        </header>

        <Section title="Course Description">
          <p className="muted">
            This course applies cloud security frameworks (HIPAA, FedRAMP, NIST,
            APPI) to real-world architectures and delivery pipelines. Students
            implement controls in code, harden DevSecOps workflows, and perform
            incident response simulations with business continuity/disaster
            recovery scenarios.
          </p>
        </Section>

        <Section title="Learning Objectives">
          <ul className="muted grid gap-2 list-none md:grid-cols-2">
            <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
              Map regulatory controls to cloud-native services and architectures
            </li>
            <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
              Design and implement DevSecOps guardrails and policy-as-code
            </li>
            <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
              Perform risk assessments and threat modeling for cloud workloads
            </li>
            <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
              Execute incident response, tabletop exercises, and BCDR runbooks
            </li>
          </ul>
        </Section>

        <Section title="Weekly Topics (Sample)">
          <div className="grid gap-3 md:grid-cols-2">
            <article className="card">
              <h3 className="font-bold">
                Week 1–2: Cloud Security Foundations
              </h3>
              <p className="muted mt-1">
                Shared responsibility, identity, network segmentation, baseline
                hardening.
              </p>
            </article>
            <article className="card">
              <h3 className="font-bold">Week 3–4: Compliance Frameworks</h3>
              <p className="muted mt-1">
                HIPAA/NIST overlays, FedRAMP baselines, APPI requirements in
                practice.
              </p>
            </article>
            <article className="card">
              <h3 className="font-bold">Week 5–6: DevSecOps & IaC</h3>
              <p className="muted mt-1">
                Policy-as-code, CI/CD hardening, supply chain security, artifact
                signing.
              </p>
            </article>
            <article className="card">
              <h3 className="font-bold">Week 7–8: Observability & Detection</h3>
              <p className="muted mt-1">
                SIEM/SOAR, log pipelines, detections, runbooks, playbooks.
              </p>
            </article>
            <article className="card">
              <h3 className="font-bold">Week 9–10: IR & BCDR in the Cloud</h3>
              <p className="muted mt-1">
                Tabletop exercises, communications, recovery objectives,
                failover patterns.
              </p>
            </article>
            <article className="card">
              <h3 className="font-bold">Week 11–12: Capstone</h3>
              <p className="muted mt-1">
                End-to-end secure architecture and compliance report.
              </p>
            </article>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
