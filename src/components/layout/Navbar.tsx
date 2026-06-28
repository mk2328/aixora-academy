'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronRight } from 'lucide-react';

const navLinks = [
  { label: 'Courses',   href: '/courses'   },
  { label: 'Events',    href: '/events'    },
  { label: 'Blog',      href: '/blog'      },
  { label: 'Community', href: '/community' },
];

export default function Navbar() {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-[1000] h-[70px] px-8
      flex items-center justify-between
      transition-all duration-300
      ${scrolled
        ? 'bg-surface/88 backdrop-blur-xl border-b border-brand/30'
        : 'bg-transparent border-b border-transparent'}
    `}>

      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 no-underline">
        <img
          src="/assets/AIXORA_Logo_White.png"
          alt="AIXORA Academy"
          className="h-[44px] w-auto object-contain"
          style={{ mixBlendMode: 'screen' }}
        />
      </Link>

      {/* Desktop Links */}
      <div className="desktop-nav items-center gap-8">
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className="text-text-muted hover:text-accent text-[0.95rem] font-medium transition-colors duration-200 no-underline"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Desktop Buttons */}
      <div className="desktop-nav items-center gap-3">
        <Link
          href="/login"
          className="text-text-muted hover:text-text text-[0.9rem] font-medium transition-colors duration-200 no-underline px-3 py-2"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-[0.9rem] font-semibold text-text no-underline
                     bg-gradient-to-br from-brand to-brand-light
                     border border-accent/30
                     hover:border-accent/60 hover:-translate-y-0.5
                     transition-all duration-200 shadow-brand"
        >
          Get Started <ChevronRight size={14} />
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <button
        id="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        className="mobile-nav bg-transparent border-none text-text cursor-pointer p-2"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="
          absolute top-[70px] left-0 right-0
          bg-surface/97 backdrop-blur-2xl
          border-b border-brand/40
          px-8 py-6
          flex flex-col gap-5
        ">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-text-muted hover:text-accent text-base font-medium no-underline transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}

          <hr className="border-none border-t border-brand/30" />

          <Link
            href="/login"
            onClick={() => setIsOpen(false)}
            className="text-text-muted hover:text-text no-underline font-medium transition-colors duration-200"
          >
            Login
          </Link>

          <Link
            href="/register"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center gap-1.5 px-5 py-3 rounded-lg text-[0.9rem] font-semibold text-text no-underline w-fit
                       bg-gradient-to-br from-brand to-brand-light
                       border border-accent/30
                       transition-all duration-200"
          >
            Get Started <ChevronRight size={14} />
          </Link>
        </div>
      )}

    </nav>
  );
}