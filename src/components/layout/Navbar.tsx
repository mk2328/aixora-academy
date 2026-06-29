'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronRight } from 'lucide-react';

const navLinks = [
  { label: 'Courses',   href: '/courses'   },
  { label: 'Career Tracks',    href: '/courses'    },
  { label: 'Events',    href: '/events'    },
  { label: 'Blog',      href: '/blog'      },
  { label: 'Community', href: '/community' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    // Observe sections to detect background color
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If the section is light (contains 'bg-white' or similar), set light theme
          const isLight = entry.target.classList.contains('bg-white');
          setTheme(isLight ? 'light' : 'dark');
        }
      });
    }, { threshold: 0.6 });

    // Select all main sections of your page
    document.querySelectorAll('section').forEach((section) => observer.observe(section));
    
    return () => observer.disconnect();
  }, []);

  const isLight = theme === 'light';

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-[1000] h-[70px] px-8
      flex items-center justify-between transition-all duration-500
      ${isLight 
        ? 'bg-white/90 backdrop-blur-md border-b border-gray-200 text-surface' 
        : 'bg-surface/80 backdrop-blur-md border-b border-white/5 text-white'
      }
    `}>

      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 no-underline">
        <div className="bg-white rounded-xl">
          <img
            src="/assets/AIXORA_Logo_Purple.png"
            alt="AIXORA Academy"
            className="h-[45px] w-auto object-contain"
          />
        </div>
      </Link>

      {/* Desktop Links */}
      <div className="desktop-nav items-center gap-8">
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={`${isLight ? 'text-surface hover:text-brand' : 'text-text-muted hover:text-accent'} text-[0.95rem] font-medium transition-colors duration-200 no-underline`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Desktop Buttons */}
      <div className="desktop-nav items-center gap-3">
        <Link
          href="/login"
          className={`${isLight ? 'text-surface hover:text-brand' : 'text-text-muted hover:text-text'} text-[0.9rem] font-medium transition-colors duration-200 no-underline px-3 py-2`}
        >
          Login
        </Link>
        <Link
          href="/register"
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-[0.9rem] font-semibold text-white no-underline
                     bg-brand hover:bg-brand-light transition-all duration-200 shadow-brand"
        >
          Get Started <ChevronRight size={14} />
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mobile-nav bg-transparent border-none cursor-pointer p-2"
      >
        {isOpen ? <X size={24} className={isLight ? 'text-surface' : 'text-white'} /> : <Menu size={24} className={isLight ? 'text-surface' : 'text-white'} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`absolute top-[70px] left-0 right-0 ${isLight ? 'bg-white' : 'bg-surface'} border-b px-8 py-6 flex flex-col gap-5`}>
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className={`${isLight ? 'text-surface' : 'text-text-muted'}`}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}