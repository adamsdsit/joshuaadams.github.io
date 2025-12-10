import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import Link from 'next/link';
import { experiences, education, certifications, awards, memberships, skills } from '@/content/resume';

export default function Page() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Section title="Summary" description="Quick overview. Full details available on dedicated pages.">
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
        <Section title="Professional Experience" description="Highlights. See all roles and details.">
          <div className="grid gap-3 md:grid-cols-2">
            {experiences.slice(0, 3).map((exp) => (
              <article key={`${exp.title}-${exp.org}`} className="card">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-bold">{exp.title}</h3>
                    <p className="muted">{exp.org}</p>
                  </div>
                  <p className="muted">{exp.period}</p>
                </div>
                <ul className="muted mt-2 grid gap-2 md:grid-cols-2 list-none">
                  {exp.bullets.slice(0, 2).map((b) => (
                    <li key={b} className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-3 text-right">
            <Link className="text-accent2" href="/experience">View all experience →</Link>
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
        <Section title="Education" description="Selected degrees. See the full academic history.">
          <div className="grid gap-3">
            {education.slice(0, 3).map((e) => (
              <article key={`${e.degree}-${e.school}`} className="card">
                <h3 className="font-bold">{e.degree}</h3>
                <p className="muted">{e.school}</p>
                <p className="muted">{e.period}</p>
              </article>
            ))}
          </div>
          <div className="mt-3 text-right">
            <Link className="text-accent2" href="/education">View all education →</Link>
          </div>
        </Section>
        <Section title="Certifications" description="Key highlights. Full list available.">
          <ul className="muted grid gap-2 list-none md:grid-cols-2">
            {certifications.slice(0, 4).map((c) => (
              <li key={c.name} className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">
                <strong>{c.name}</strong>
                {c.issuer ? <span className="block muted">{c.issuer}</span> : null}
              </li>
            ))}
          </ul>
          <div className="mt-3 text-right">
            <Link className="text-accent2" href="/certifications">View all certifications →</Link>
          </div>
        </Section>
        <Section title="Awards & Recognition" description="Selected achievements.">
          <ul className="muted grid gap-2 list-none md:grid-cols-2">
            {awards.slice(0, 6).map((a) => (
              <li key={a} className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">{a}</li>
            ))}
          </ul>
          <div className="mt-3 text-right">
            <Link className="text-accent2" href="/awards">View all awards →</Link>
          </div>
        </Section>
        <Section title="Professional Memberships">
          <ul className="muted grid gap-2 list-none md:grid-cols-2">
            {memberships.slice(0, 2).map((m) => (
              <li key={m} className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">{m}</li>
            ))}
          </ul>
        </Section>
        <Section title="Core Skills & Capabilities">
          <ul className="muted grid gap-2 list-none md:grid-cols-2">
            {skills.slice(0, 8).map((s) => (
              <li key={s} className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full">{s}</li>
            ))}
          </ul>
          <div className="mt-3 text-right">
            <Link className="text-accent2" href="/skills">View all skills →</Link>
          </div>
        </Section>
        <Section
          title="Contact"
          description="If you'd like to get in touch, use the form below or email contact@joshuaadams.dev."
        >
          <div className="card">
            <form
              className="grid gap-4"
              method="POST"
              action="https://formsubmit.co/contact@joshuaadams.dev"
              noValidate
            >
              <div className="grid gap-2 md:grid-cols-2 md:gap-4">
                <div className="grid gap-1">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    className="rounded-lg bg-surface/80 dark:bg-dark-surface/80 border border-border/60 dark:border-dark-border/60 p-3"
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
                    className="rounded-lg bg-surface/80 dark:bg-dark-surface/80 border border-border/60 dark:border-dark-border/60 p-3"
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    inputMode="email"
                    required
                    aria-required="true"
                  />
                </div>
              </div>

              <div className="grid gap-1">
                <label htmlFor="message">Project Summary</label>
                <textarea
                  id="message"
                  className="rounded-lg bg-surface/80 dark:bg-dark-surface/80 border border-border/60 dark:border-dark-border/60 p-3"
                  name="message"
                  rows={5}
                  placeholder="Briefly describe your goals and timeline"
                  required
                  aria-required="true"
                />
              </div>

              <div className="grid gap-2 md:grid-cols-2 md:gap-4">
                <div className="grid gap-1">
                  <label htmlFor="budget">Budget Range (optional)</label>
                  <input
                    id="budget"
                    className="rounded-lg bg-surface/80 dark:bg-dark-surface/80 border border-border/60 dark:border-dark-border/60 p-3"
                    type="text"
                    name="budget"
                    placeholder="$25k–$50k"
                  />
                </div>
                <div className="grid gap-1">
                  <label htmlFor="timeline">Target Timeline (optional)</label>
                  <input
                    id="timeline"
                    className="rounded-lg bg-surface/80 dark:bg-dark-surface/80 border border-border/60 dark:border-dark-border/60 p-3"
                    type="text"
                    name="timeline"
                    placeholder="Q1 2026"
                  />
                </div>
              </div>

              <input type="hidden" name="_subject" value="Resume Site Contact" />
              <input type="hidden" name="_next" value="https://joshuaadams.dev/?contact=success" />
              <input
                type="text"
                name="_honey"
                style={{ display: 'none' }}
                aria-hidden="true"
                tabIndex={-1}
              />

              <div className="muted text-sm">
                By sending this form, you consent to be contacted at the provided email. For direct inquiries, email{' '}
                <a className="text-accent2" href="mailto:contact@joshuaadams.dev">
                  contact@joshuaadams.dev
                </a>
                .
              </div>

              <div className="flex gap-2 mt-1">
                <button className="btn btn-primary" type="submit">
                  Send Message
                </button>
                <button className="btn" type="reset">
                  Reset
                </button>
              </div>
            </form>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
