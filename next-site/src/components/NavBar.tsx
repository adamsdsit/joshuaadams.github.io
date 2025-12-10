import Link from 'next/link';

export function NavBar() {
  return (
    <header className="sticky top-0 z-40 bg-surface/70 backdrop-blur">
      <div className="container flex items-center gap-3 py-3">
        <Link href="/" className="font-bold text-lg">Joshua Adams</Link>
        <nav className="ml-auto flex items-center gap-2">
          <Link className="btn" href="/projects">Projects</Link>
          <Link className="btn" href="/teaching">Teaching</Link>
          <Link className="btn" href="#contact">Contact</Link>
          <Link className="btn btn-primary" href="/resume.pdf">Download CV</Link>
        </nav>
      </div>
    </header>
  );
}
