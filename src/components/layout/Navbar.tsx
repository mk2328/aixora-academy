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

  const navStyle: React.CSSProperties = {
    position:       'fixed',
    top:            0,
    left:           0,
    right:          0,
    zIndex:         1000,
    height:         '70px',
    padding:        '0 2rem',
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'space-between',
    background:     scrolled ? 'rgba(15,10,14,0.88)' : 'transparent',
    backdropFilter: scrolled ? 'blur(16px)' : 'none',
    borderBottom:   scrolled ? '1px solid rgba(90,43,78,0.35)' : 'none',
    transition:     'all 0.3s ease',
  };

  const logoBoxStyle: React.CSSProperties = {
    width:          '36px',
    height:         '36px',
    background:     'linear-gradient(135deg,#5a2b4e,#c084fc)',
    borderRadius:   '8px',
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'center',
    fontFamily:     'Playfair Display, serif',
    fontWeight:     900,
    fontSize:       '1.1rem',
    color:          '#fff',
    flexShrink:     0,
  };

  const logoWrapStyle: React.CSSProperties = {
    display:        'flex',
    alignItems:     'center',
    gap:            '0.5rem',
    textDecoration: 'none',
  };

  const logoTextStyle: React.CSSProperties = {
    fontFamily:    'Playfair Display, serif',
    fontWeight:    700,
    fontSize:      '1.2rem',
    color:         '#f5f0f7',
    letterSpacing: '0.02em',
  };

  const linkStyle: React.CSSProperties = {
    color:          '#b89ab2',
    textDecoration: 'none',
    fontSize:       '0.95rem',
    fontWeight:     500,
  };

  const ctaStyle: React.CSSProperties = {
    display:        'inline-flex',
    alignItems:     'center',
    gap:            '0.3rem',
    padding:        '0.5rem 1.2rem',
    background:     'linear-gradient(135deg,#5a2b4e,#7a3d6e)',
    color:          '#f5f0f7',
    textDecoration: 'none',
    borderRadius:   '8px',
    fontSize:       '0.9rem',
    fontWeight:     600,
    border:         '1px solid rgba(192,132,252,0.3)',
  };

  const mobileMenuStyle: React.CSSProperties = {
    position:       'absolute',
    top:            '70px',
    left:           0,
    right:          0,
    background:     'rgba(15,10,14,0.97)',
    backdropFilter: 'blur(20px)',
    borderBottom:   '1px solid rgba(90,43,78,0.4)',
    padding:        '1.5rem 2rem',
    display:        'flex',
    flexDirection:  'column',
    gap:            '1.25rem',
  };

  return (
    <nav style={navStyle}>

      {/* Logo */}
      <Link href="/" style={logoWrapStyle}>
        <img
          src="/assets/AIXORA_logo.png"
          alt="AIXORA Academy"
          style={{
            height:  '38px',
            width:   'auto',
            objectFit: 'contain',
            // filter:  'brightness(0) invert(1)',
          }}
        />
      </Link>

      {/* Desktop Links — hidden on mobile via inline media workaround */}
      <div id="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        {navLinks.map(link => (
          <Link key={link.href} href={link.href} style={linkStyle}>
            {link.label}
          </Link>
        ))}
      </div>

      {/* Desktop Buttons */}
      <div id="nav-btns" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <Link href="/login" style={linkStyle}>Login</Link>
        <Link href="/register" style={ctaStyle}>
          Get Started <ChevronRight size={14} />
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <button
        id="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display:    'none',
          background: 'none',
          border:     'none',
          color:      '#f5f0f7',
          cursor:     'pointer',
          padding:    '0.5rem',
        }}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={mobileMenuStyle}>
          {navLinks.map(link => (
            <Link key={link.href} href={link.href}
              onClick={() => setIsOpen(false)}
              style={linkStyle}>
              {link.label}
            </Link>
          ))}
          <hr style={{ border: 'none', borderTop: '1px solid rgba(90,43,78,0.3)' }} />
          <Link href="/login" onClick={() => setIsOpen(false)} style={linkStyle}>
            Login
          </Link>
          <Link href="/register" onClick={() => setIsOpen(false)} style={ctaStyle}>
            Get Started <ChevronRight size={14} />
          </Link>
        </div>
      )}

      {/* Responsive — plain style tag, no jsx pragma */}
      <style>{`
        @media (max-width: 768px) {
          #nav-links  { display: none !important; }
          #nav-btns   { display: none !important; }
          #hamburger  { display: block !important; }
        }
      `}</style>

    </nav>
  );
}