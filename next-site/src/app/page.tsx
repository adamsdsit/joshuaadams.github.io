import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';

export default function Page() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Section title="Summary">
          <p className="muted">
            Dynamic and results-driven professional with over 20 years of
            experience in IT, cybersecurity, and enterprise architecture.
            Certified Business Continuity Professional (CBCP) with proven
            expertise in technical project management, stakeholder management,
            and leading cross-functional teams. Adept at leveraging emerging
            technologies, data analysis, and developing innovative solutions.
            Experienced in coding, technical troubleshooting, and AI/machine
            learning. Passionate about driving strategic growth and improving
            customer experience.
          </p>
          <p className="muted mt-2">
            Senior technology leader with 20+ years of experience across
            software engineering, DevSecOps, and enterprise/cloud architecture,
            including large-scale healthcare and regulated environments. Proven
            track record coaching engineering teams, optimizing value streams,
            and driving modern engineering practices (cloud-native
            architectures, CI/CD, automation, observability,
            security-by-design). Experienced in AI/ML research and applying
            emerging technologies to improve reliability, speed, and customer
            outcomes. Comfortable operating as a hands-on technical coach,
            architect, and educator—translating strategy into practices,
            patterns, and working software.
          </p>
        </Section>
        <Section title="Professional Experience">
          <div className="grid gap-3 md:grid-cols-2">
            {/* Mangata */}
            <article className="card">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold">Sr Manager</h3>
                  <p className="muted">
                    Veterans Business Continuity Professionals, LLC
                  </p>
                </div>
                <p className="muted">Aug 2023 – Present</p>
              </div>
              <ul className="muted mt-2 grid gap-2 md:grid-cols-2 list-none">
                <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
                  Led veterans-corporate CBCP thinktank advising Fortune-level
                  companies and nonprofits on resilience.
                </li>
                <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
                  Designed Enterprise Resilience Office architectures bridging
                  BC, CM, IT Ops and InfoSec.
                </li>
                <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
                  Delivered scalable crisis communications and supplier
                  resilience programs.
                </li>
              </ul>
            </article>
            <article className="card">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold">
                    Principal Resilience & IT Consultant
                  </h3>
                  <p className="muted">FlexAMS</p>
                </div>
                <p className="muted">Jan 2017 – Present</p>
              </div>
              <ul className="muted mt-2 grid gap-2 md:grid-cols-2 list-none">
                <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
                  Advised on EHR optimization, cloud integrations, and security
                  architecture.
                </li>
                <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
                  Led architectural design and microservices integration
                  projects.
                </li>
              </ul>
            </article>
            <article className="card">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold">
                    Assistant Professor, Computer Information Systems
                  </h3>
                  <p className="muted">Saint Leo University</p>
                </div>
                <p className="muted">2014 – Present</p>
              </div>
              <ul className="muted mt-2 grid gap-2 md:grid-cols-2 list-none">
                <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
                  Developed and taught courses in cybersecurity, software
                  engineering, and cloud computing.
                </li>
                <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
                  Led grant collaborations and curriculum modernization efforts.
                </li>
              </ul>
            </article>
            <article className="card">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold">
                    Enterprise Architect Engineer & Researcher
                  </h3>
                  <p className="muted">Mangata</p>
                </div>
                <p className="muted">Jul 2022 – Jun 2023</p>
              </div>
              <ul className="muted mt-2 grid gap-2 md:grid-cols-2 list-none">
                <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
                  Designed edge computing solutions and integrated satellite
                  data flows for enterprise pipelines.
                </li>
                <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
                  Introduced ML techniques and data engineering patterns to
                  improve throughput and analytics.
                </li>
              </ul>
            </article>
            <article className="card">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold">
                    Health Services Technician & Leadership
                  </h3>
                  <p className="muted">U.S. Coast Guard</p>
                </div>
                <p className="muted">1995 – 2015</p>
              </div>
              <ul className="muted mt-2 grid gap-2 md:grid-cols-2 list-none">
                <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
                  Led clinic operations, training programs and lab operations,
                  ensuring mission readiness and compliance.
                </li>
              </ul>
            </article>
          </div>
        </Section>
        <Section title="Technical Proficiency">
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
            <div className="card">
              <strong>Architecture & Systems</strong>
              <div className="h-3 bg-slate-700/40 rounded mt-2">
                <div className="h-full w-[86%] bg-gradient-to-r from-accent2 to-accent rounded"></div>
              </div>
            </div>
            <div className="card">
              <strong>Teaching & Research</strong>
              <div className="h-3 bg-slate-700/40 rounded mt-2">
                <div className="h-full w-[92%] bg-gradient-to-r from-accent2 to-accent rounded"></div>
              </div>
            </div>
          </div>
        </Section>
        <Section title="Leadership Expertise">
          <div className="grid gap-2 md:grid-cols-2">
            <div className="card">👥 Team Building &amp; Management</div>
            <div className="card">🤝 Cross-Functional Collaboration</div>
            <div className="card">⚖️ Conflict Resolution</div>
            <div className="card">📈 Business Development</div>
            <div className="card">🧭 Organizational Strategy</div>
            <div className="card">🔄 Digital Transformation</div>
            <div className="card">📊 Portfolio Management</div>
            <div className="card">📜 Regulatory Compliance</div>
          </div>
        </Section>
        <Section title="Education">
          <div className="grid gap-3">
            <article className="card">
              <h3 className="font-bold">
                Graduate Certificate in Artificial Intelligence (In Progress)
              </h3>
              <p className="muted">Stanford University</p>
              <p className="muted">2021 – Present</p>
            </article>
            <article className="card">
              <h3 className="font-bold">
                Doctorate in Information Technology (DIT)
              </h3>
              <p className="muted">Walden University</p>
              <p className="muted">2020</p>
            </article>
            <article className="card">
              <h3 className="font-bold">M.Sc. in Information Technology</h3>
              <p className="muted">Walden University</p>
              <p className="muted">2014 – 2016</p>
            </article>
            <article className="card">
              <h3 className="font-bold">
                MBA in Information Security Management
              </h3>
              <p className="muted">Saint Leo University</p>
              <p className="muted">2012 – 2014</p>
            </article>
            <article className="card">
              <h3 className="font-bold">
                B.S. in Business Administration & B.A. in Mass Communication
              </h3>
              <p className="muted">University of South Florida</p>
              <p className="muted">2012 – 2014</p>
            </article>
            <article className="card">
              <h3 className="font-bold">
                A.A.S. in Medical Laboratory Science
              </h3>
              <p className="muted">George Washington University</p>
              <p className="muted">2001 – 2005</p>
            </article>
          </div>
        </Section>
        <Section title="Certifications">
          <ul className="muted grid gap-2 list-none md:grid-cols-2">
            <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
              <strong>Certified Business Continuity Professional (CBCP)</strong>
              <span className="block muted">DRI International</span>
            </li>
            <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
              <strong>EMT Certification</strong>
            </li>
            <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
              <strong>
                Field Management of Chemical and Biological Incidents
              </strong>
              <span className="block muted">U.S. Army</span>
            </li>
            <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
              <strong>Independent Health Services Technician</strong>
              <span className="block muted">U.S. Navy Health Science</span>
            </li>
          </ul>
        </Section>
        <Section title="Awards & Recognition">
          <ul className="muted grid gap-2 list-none md:grid-cols-2">
            <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
              Coast Guard Achievement Medal (Gold Star)
            </li>
            <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
              Coast Guard Unit Commendation Ribbon (x2)
            </li>
            <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
              Coast Guard Meritorious Team Commendation Ribbon (Silver Star)
            </li>
            <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
              Commandant Letter of Commendation (x2 Gold Stars)
            </li>
            <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
              Coast Guard Presidential Unit Citation Ribbon
            </li>
            <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
              Coast Guard Sea Service Ribbon
            </li>
            <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
              Saint Leo University 5-Year Service Award, 2019
            </li>
          </ul>
        </Section>
        <Section title="Professional Memberships">
          <ul className="muted grid gap-2 list-none md:grid-cols-2">
            <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
              Association for Computing Machinery (ACM)
            </li>
            <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
              National CyberWatch Center
            </li>
          </ul>
        </Section>
        <Section title="Core Skills & Capabilities">
          <ul className="muted grid gap-2 list-none md:grid-cols-2">
            <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
              Technical Coaching & Mentorship
            </li>
            <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
              Enterprise-Scale Application Architecture
            </li>
            <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
              Cloud Migration & Modernization
            </li>
            <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
              Structured Design & Documentation
            </li>
            <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
              Application Assessment & Strategy (6R)
            </li>
            <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
              Post-Migration Optimization & Support
            </li>
            <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
              Crisis Management & Operational Coordination
            </li>
            <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
              Risk Management & Cybersecurity
            </li>
            <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
              Cloud Computing (Azure, GCP)
            </li>
            <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
              Incident Response & Problem Management
            </li>
            <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
              Strategic Team Management
            </li>
            <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
              Cross-Functional Team Leadership
            </li>
          </ul>
        </Section>
        <Section title="Contact">
          <form
            className="grid gap-3"
            method="POST"
            action="https://formsubmit.co/contact@joshuaadams.dev"
            noValidate
          >
            <div className="grid gap-1">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                className="rounded-lg bg-slate-800/40 border border-white/10 p-2"
                type="text"
                name="name"
                placeholder="John Doe"
                required
                aria-required="true"
              />
            </div>
            <div className="grid gap-1">
              <label htmlFor="email">Business Email</label>
              <input
                id="email"
                className="rounded-lg bg-slate-800/40 border border-white/10 p-2"
                type="email"
                name="email"
                placeholder="you@company.com"
                inputMode="email"
                required
                aria-required="true"
              />
            </div>
            <div className="grid gap-1">
              <label htmlFor="message">Project Summary</label>
              <textarea
                id="message"
                className="rounded-lg bg-slate-800/40 border border-white/10 p-2"
                name="message"
                rows={6}
                placeholder="Briefly describe your goals and timeline"
                required
                aria-required="true"
              />
            </div>
            {/* Professional options */}
            <div className="grid gap-1 md:grid-cols-2">
              <div className="grid gap-1">
                <label htmlFor="budget">Budget Range (optional)</label>
                <input
                  id="budget"
                  className="rounded-lg bg-slate-800/40 border border-white/10 p-2"
                  type="text"
                  name="budget"
                  placeholder="$25k–$50k"
                />
              </div>
              <div className="grid gap-1">
                <label htmlFor="timeline">Target Timeline (optional)</label>
                <input
                  id="timeline"
                  className="rounded-lg bg-slate-800/40 border border-white/10 p-2"
                  type="text"
                  name="timeline"
                  placeholder="Q1 2026"
                />
              </div>
            </div>
            {/* Formsubmit enhancements */}
            <input type="hidden" name="_subject" value="Resume Site Contact" />
            <input
              type="hidden"
              name="_next"
              value="https://joshuaadams.dev/?contact=success"
            />
            <input
              type="text"
              name="_honey"
              style={{ display: 'none' }}
              aria-hidden="true"
              tabIndex={-1}
            />
            <div className="muted text-sm">
              By sending this form, you consent to be contacted at the provided
              email. For direct inquiries, email{' '}
              <a className="text-accent2" href="mailto:contact@joshuaadams.dev">
                contact@joshuaadams.dev
              </a>
              .
            </div>
            <div className="flex gap-2 mt-2">
              <button className="btn btn-primary" type="submit">
                Send Message
              </button>
              <button className="btn" type="reset">
                Reset
              </button>
            </div>
          </form>
        </Section>
      </main>
      <Footer />
    </>
  );
}
