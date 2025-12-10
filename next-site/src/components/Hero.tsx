export function Hero() {
  return (
    <section className="container grid grid-cols-[140px_1fr] items-center gap-6 py-10">
      <div className="relative">
        <div className="w-[140px] h-[140px] rounded-xl bg-slate-700/40 border border-white/10" />
        <div className="absolute -bottom-2 -right-2 px-2 py-0.5 text-xs rounded-full bg-accent/10 text-accent border border-accent/30">
          CBCP
        </div>
      </div>
      <div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Joshua Adams</h1>
        <p className="muted font-semibold mt-1">
          Certified Business Continuity Professional (CBCP) • IT & Cybersecurity
          • Researcher • Educator
        </p>
        <p className="muted mt-2 max-w-prose">
          Seasoned IT and resilience professional with 20+ years leading
          technical programs, teaching, and consulting. I design resilient
          systems, lead cross-functional teams, and translate complex technical
          needs into strategic outcomes.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <a className="btn" href="#contact">Contact</a>
          <a className="btn" href="/projects">Projects</a>
          <a className="btn btn-primary" href="/resume.pdf">Download PDF</a>
          <a className="btn" href="https://orcid.org/0000-0002-7185-9125" target="_blank" rel="noreferrer">ORCID</a>
          <a className="btn" href="mailto:contact@joshuaadams.dev">Email</a>
        </div>
        <ul className="muted flex flex-wrap gap-3 mt-4">
          <li>📍 Hudson, FL</li>
          <li>
            📧{' '}
            <a className="text-accent2" href="mailto:contact@joshuaadams.dev">
              contact@joshuaadams.dev
            </a>
          </li>
          <li>📱 727-505-0626</li>
          <li>
            <a
              className="text-accent2"
              href="https://www.linkedin.com/in/adamdsit/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="text-accent2"
              href="https://orcid.org/0000-0002-7185-9125"
              target="_blank"
              rel="noreferrer"
            >
              ORCID
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
