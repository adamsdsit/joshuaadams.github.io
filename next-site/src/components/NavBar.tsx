import Link from 'next/link';

export function NavBar() {
  return (
    <header className="sticky top-0 z-40 bg-surface/80 backdrop-blur border-b border-dark-border/60">
      <div className="container flex items-center justify-between">
        <a href="/" className="font-bold text-xl">Joshua Adams</a>
        <nav className="hidden md:flex gap-4">
          {[
            { href: '/', label: 'Home' },
            { href: '/projects', label: 'Projects' },
            { href: '/teaching', label: 'Teaching' },
            { href: '/cloud-security-compliance', label: 'Syllabus' },
          ].map((link) => (
            <a key={link.href} className="relative px-1 muted hover:text-text" href={link.href}>
              {link.label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-accent transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button className="md:hidden btn" aria-label="Toggle navigation">☰</button>
          <a className="btn btn-primary" href="/resume.pdf">Download CV</a>
        </div>
      </div>
    </header>
  )
      </div>
    </header>
  );
}
