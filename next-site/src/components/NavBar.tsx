"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

export function NavBar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur border-b border-dark-border/60">
      <div className="container h-14 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-text">
          Joshua Adams
        </Link>
        <nav className="hidden md:flex gap-5 text-sm" aria-label="Primary">
          <NavLink href="/" pathname={pathname} label="Home" />
          <NavLink href="/projects" pathname={pathname} label="Projects" />
          <NavLink href="/teaching" pathname={pathname} label="Teaching" />
          <NavLink href="/cloud-security-compliance" pathname={pathname} label="Syllabus" />
        </nav>
        <div className="flex items-center gap-2">
          <MobileMenu pathname={pathname} />
          <Link className="btn btn-primary" href="/resume.pdf">Download CV</Link>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, pathname, label }: { href: string; pathname: string | null; label: string }) {
  const isActive = pathname === href || (href !== "/" && pathname?.startsWith(href));
  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={
        "relative px-1 transition-colors " +
        (isActive
          ? "text-accent after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-accent"
          : "muted hover:text-text")
      }
    >
      {label}
    </Link>
  );
}

function MobileMenu({ pathname }: { pathname: string | null }) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!open) return;
    const focusable = panelRef.current?.querySelector<HTMLElement>("a, button");
    focusable?.focus();
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="btn"
      >
        ☰
      </button>

      {open && (
        <div role="dialog" aria-modal="true" aria-label="Mobile navigation" className="fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-black/30" onClick={() => setOpen(false)} aria-hidden="true" />
          <div ref={panelRef} className="absolute right-2 top-16 w-64 rounded-lg border border-dark-border/60 bg-surface shadow-xl p-2">
            <nav className="flex flex-col" aria-label="Mobile">
              <MobileLink href="/" pathname={pathname} onNavigate={() => setOpen(false)}>Home</MobileLink>
              <MobileLink href="/projects" pathname={pathname} onNavigate={() => setOpen(false)}>Projects</MobileLink>
              <MobileLink href="/teaching" pathname={pathname} onNavigate={() => setOpen(false)}>Teaching</MobileLink>
              <MobileLink href="/cloud-security-compliance" pathname={pathname} onNavigate={() => setOpen(false)}>Syllabus</MobileLink>
              <Link className="mt-2 btn" href="/resume.pdf" onClick={() => setOpen(false)}>Download CV</Link>
              <button
                type="button"
                className="mt-2 btn"
                onClick={() => {
                  setOpen(false);
                  buttonRef.current?.focus();
                }}
              >
                Close
              </button>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

function MobileLink({ href, pathname, onNavigate, children }: { href: string; pathname: string | null; onNavigate: () => void; children: React.ReactNode }) {
  const isActive = pathname === href || (href !== "/" && pathname?.startsWith(href));
  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={isActive ? "page" : undefined}
      className={"px-3 py-2 rounded hover:bg-muted " + (isActive ? "bg-muted" : "")}
    >
      {children}
    </Link>
  );
}
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
