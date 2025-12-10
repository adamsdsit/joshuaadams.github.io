import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';

export default function Page(){
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Section title="Summary">
          <p className="muted">Dynamic and results-driven professional with over 20 years of experience in IT, cybersecurity, and enterprise architecture. Certified Business Continuity Professional (CBCP) with proven expertise in technical project management, stakeholder management, and leading cross-functional teams.</p>
        </Section>
        <Section title="Professional Experience">
          <div className="grid gap-3 md:grid-cols-2">
            <article className="card">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold">Sr Manager</h3>
                  <p className="muted">Veterans Business Continuity Professionals, LLC</p>
                </div>
                <p className="muted">Aug 2023 – Present</p>
              </div>
              <ul className="muted mt-2 grid gap-2 md:grid-cols-2 list-none">
                <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">Led veterans-corporate CBCP thinktank advising Fortune-level companies and nonprofits on resilience.</li>
                <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">Designed Enterprise Resilience Office architectures bridging BC, CM, IT Ops and InfoSec.</li>
                <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">Delivered scalable crisis communications and supplier resilience programs.</li>
              </ul>
            </article>
            <article className="card">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold">Principal Resilience & IT Consultant</h3>
                  <p className="muted">FlexAMS</p>
                </div>
                <p className="muted">Jan 2017 – Present</p>
              </div>
              <ul className="muted mt-2 grid gap-2 md:grid-cols-2 list-none">
                <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">Advised on EHR optimization, cloud integrations, and security architecture.</li>
                <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">Led architectural design and microservices integration projects.</li>
              </ul>
            </article>
            <article className="card">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold">Assistant Professor, Computer Information Systems</h3>
                  <p className="muted">Saint Leo University</p>
                </div>
                <p className="muted">2014 – Present</p>
              </div>
              <ul className="muted mt-2 grid gap-2 md:grid-cols-2 list-none">
                <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">Developed and taught courses in cybersecurity, software engineering, and cloud computing.</li>
                <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">Led grant collaborations and curriculum modernization efforts.</li>
              </ul>
            </article>
            <article className="card">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold">Enterprise Architect Engineer & Researcher</h3>
                  <p className="muted">Mangata</p>
                </div>
                <p className="muted">Jul 2022 – Jun 2023</p>
              </div>
              <ul className="muted mt-2 grid gap-2 md:grid-cols-2 list-none">
                <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">Designed edge computing solutions and integrated satellite data flows for enterprise pipelines.</li>
                <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">Introduced ML techniques and data engineering patterns to improve throughput and analytics.</li>
              </ul>
            </article>
            <article className="card">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold">Health Services Technician & Leadership</h3>
                  <p className="muted">U.S. Coast Guard</p>
                </div>
                <p className="muted">1995 – 2015</p>
              </div>
              <ul className="muted mt-2 grid gap-2 md:grid-cols-2 list-none">
                <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">Led clinic operations, training programs and lab operations, ensuring mission readiness and compliance.</li>
              </ul>
            </article>
          </div>
        </Section>
        <Section title="Skills">
          <div className="grid gap-3 md:grid-cols-2">
            <div className="card">
              <strong>Cloud & Infrastructure</strong>
              <div className="h-3 bg-slate-700/40 rounded mt-2">
                <div className="h-full w-[90%] bg-gradient-to-r from-accent2 to-accent rounded"></div>
              </div>
            </div>
            <div className="card">
              <strong>Security & Risk</strong>
              <div className="h-3 bg-slate-700/40 rounded mt-2">
                <div className="h-full w-[88%] bg-gradient-to-r from-accent2 to-accent rounded"></div>
              </div>
            </div>
          </div>
        </Section>
        <Section title="Education">
          <article className="card">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-bold">Doctorate in Information Technology</h3>
                <p className="muted">Walden University</p>
              </div>
              <p className="muted">2020</p>
            </div>
          </article>
        </Section>
        <Section title="Certifications">
          <ul className="muted grid gap-2 list-none md:grid-cols-2">
            <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
              <strong>Certified Business Continuity Professional (CBCP)</strong>
              <span className="block muted">DRI International, 2023</span>
            </li>
          </ul>
        </Section>
        <Section title="Contact" >
          <form className="grid gap-3" method="POST" action="https://formsubmit.co/contact@joshuaadams.dev">
            <label className="grid gap-1">
              <span>Name</span>
              <input className="rounded-lg bg-slate-800/40 border border-white/10 p-2" type="text" name="name" required />
            </label>
            <label className="grid gap-1">
              <span>Email</span>
              <input className="rounded-lg bg-slate-800/40 border border-white/10 p-2" type="email" name="email" required />
            </label>
            <label className="grid gap-1">
              <span>Message</span>
              <textarea className="rounded-lg bg-slate-800/40 border border-white/10 p-2" name="message" rows={6} required />
            </label>
            <input type="hidden" name="_subject" value="Website Contact: Resume Site" />
            <div className="flex gap-2 mt-2">
              <button className="btn btn-primary" type="submit">Send Message</button>
              <button className="btn" type="reset">Reset</button>
            </div>
          </form>
        </Section>
      </main>
      <Footer />
    </>
  );
}
