import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';
import Link from 'next/link';

export default function TeachingPage() {
  return (
    <>
      <NavBar />
      <main>
        <header className="container">
          <div className="card">
            <h1 className="text-2xl font-bold">Teaching</h1>
            <p className="muted">
              Courses and topics I teach, designed with practical labs and
              industry-aligned outcomes.
            </p>
          </div>
        </header>

        <section className="container grid gap-3 md:grid-cols-2">
          <article className="card">
            <h2 className="font-bold">
              CIS 310 — Introduction to Cybersecurity
            </h2>
            <p className="muted">Semesters: 2021–Present</p>
            <ul className="muted mt-2 grid gap-2 list-none">
              <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
                Threat modeling and risk fundamentals
              </li>
              <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
                Secure development practices (OWASP)
              </li>
              <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
                Incident response basics and tabletop
              </li>
              <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
                Hands-on lab: securing a small web app
              </li>
            </ul>
          </article>

          <article className="card">
            <h2 className="font-bold">
              CIS 420 — Cloud Computing & Architecture
            </h2>
            <p className="muted">Semesters: 2018–Present</p>
            <ul className="muted mt-2 grid gap-2 list-none">
              <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
                Cloud-native design patterns
              </li>
              <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
                Containerization and orchestration
              </li>
              <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
                Infrastructure as Code (Terraform)
              </li>
              <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
                Cloud security best practices
              </li>
            </ul>
          </article>

          <article className="card">
            <h2 className="font-bold">CIS 510 — Systems Analysis & Design</h2>
            <p className="muted">Semesters: 2016–Present</p>
            <ul className="muted mt-2 grid gap-2 list-none">
              <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
                Requirements, modeling, and architecture
              </li>
              <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
                Agile and iterative development cycles
              </li>
              <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
                Design patterns and maintainability
              </li>
              <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
                Capstone: end-to-end system proposal
              </li>
            </ul>
          </article>

          <article className="card outline outline-white/10">
            <h2 className="font-bold">
              COM 4XX — Cloud Security & Compliance in Practice
            </h2>
            <p className="muted">
              Advanced Undergraduate • Hybrid (In-person & Labs)
            </p>
            <ul className="muted mt-2 grid gap-2 list-none">
              <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
                HIPAA, FedRAMP, APPI, and NIST in practice
              </li>
              <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
                DevSecOps pipeline hardening
              </li>
              <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
                IR simulations and BCDR in the cloud
              </li>
              <li>
                <Link
                  className="text-accent2"
                  href="/cloud-security-compliance"
                >
                  View full syllabus →
                </Link>
              </li>
            </ul>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
