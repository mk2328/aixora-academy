'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles, Users, BookOpen } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// FIX: zero vertical padding so highlight never bleeds into adjacent lines
const hl = (text: string) => (
  <span style={{
    background: 'rgba(90, 43, 78)',
    color: '#e8d8f0',
    padding: '0 0.28em',        // horizontal only — no vertical
    borderRadius: '6px',
    display: 'inline',
    WebkitBoxDecorationBreak: 'clone',           // consistent rendering across browsers
    boxDecorationBreak: 'clone' as any,

  }}>{text}</span>
);

// FIX: fadeUp animation defined once, referenced by delay
const fadeUpStyle = (delayMs: number): React.CSSProperties => ({
  animation: `heroFadeUp 0.7s ease ${delayMs}ms both`,
});

export default function Hero() {
  return (
    <section className="hero-section" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: '#0f0a0e',
      paddingTop: '80px',
      paddingBottom: '48px',
      paddingLeft: '24px',
      paddingRight: '24px',
      boxSizing: 'border-box',
    }}>

      {/* Animated glow — top center */}
      <div style={{
        position: 'absolute',
        top: '-15%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '500px',
        background: 'radial-gradient(ellipse, rgba(90,43,78,0.55) 0%, transparent 70%)',
        pointerEvents: 'none',
        animation: 'pulseGlow 4s ease-in-out infinite',
      }} />

      {/* Glow — bottom left */}
      <div style={{
        position: 'absolute',
        bottom: '5%',
        left: '-5%',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(ellipse, rgba(192,132,252,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Glow — right */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(ellipse, rgba(90,43,78,0.16) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* X cross-hatch pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          repeating-linear-gradient(45deg,  transparent, transparent 40px, rgba(90,43,78,0.04) 40px, rgba(90,43,78,0.04) 41px),
          repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(90,43,78,0.04) 40px, rgba(90,43,78,0.04) 41px)
        `,
        pointerEvents: 'none',
      }} />

      {/* Floating particles */}
      {[
        { top: '20%', left: '8%', size: 3, delay: '0s', dur: '6s' },
        { top: '60%', left: '5%', size: 2, delay: '1s', dur: '8s' },
        { top: '35%', right: '7%', size: 4, delay: '0.5s', dur: '7s' },
        { top: '75%', right: '10%', size: 2, delay: '2s', dur: '9s' },
        { top: '15%', right: '20%', size: 2, delay: '1.5s', dur: '5s' },
        { top: '80%', left: '20%', size: 3, delay: '3s', dur: '7s' },
      ].map((p, i) => (
        <div key={i} style={{
          position: 'absolute',
          top: p.top,
          left: (p as any).left,
          right: (p as any).right,
          width: `${p.size}px`,
          height: `${p.size}px`,
          borderRadius: '50%',
          background: '#c084fc',
          opacity: 0.4,
          pointerEvents: 'none',
          // FIX: floatUp animation now uses correct semicolon syntax in keyframes below
          animation: `floatUp ${p.dur} ease-in-out ${p.delay} infinite`,
        }} />
      ))}

      {/* Main content */}
      <div className="hero-content" style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        maxWidth: '860px',
        width: '100%',
        margin: '0 auto',
      }}>

        {/* Badge */}
        <div className="hero-badge" style={{
          ...fadeUpStyle(100),
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '6px 16px',
          borderRadius: '999px',
          background: 'rgba(192,132,252,0.08)',
          border: '1px solid rgba(192,132,252,0.25)',
          marginBottom: 'clamp(1.2rem, 3vw, 1.75rem)',
          fontSize: '0.82rem',
          color: '#c084fc',
          fontWeight: 500,
          letterSpacing: '0.03em',
        }}>
          <Sparkles size={13} />
          Pakistan's First AI-Focused Learning Ecosystem
        </div>

        {/* Headline */}
        <h1 className="hero-h1" style={{
          ...fadeUpStyle(250),
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(1.7rem, 5.2vw, 4.4rem)',
          fontWeight: 900,
          lineHeight: 1.4,
          color: '#f5f0f7',
          marginBottom: '1.25rem',
          letterSpacing: '-0.02em',

        }}>
          Learn {hl('AI.')}  Build the {hl('Future.')}
          <br />
          Lead with {hl('Confidence.')}
        </h1>

        {/* Subheading — FIX: brighter color for better contrast */}
        <p style={{
          ...fadeUpStyle(400),
          fontSize: 'clamp(0.93rem, 1.8vw, 1.08rem)',
          color: '#c4a8bf',
          lineHeight: 1.78,
          maxWidth: '580px',
          margin: '0 auto 2rem',
        }}>
          AIXORA Academy is an AI-first learning ecosystem empowering students,
          graduates, and professionals with practical skills, mentorship, and
          real-world career opportunities.
        </p>

        {/* CTA Buttons */}
        <div className="hero-btns" style={{
          ...fadeUpStyle(550),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          flexWrap: 'wrap',
          marginBottom: '3rem',
        }}>
          <Link href="/courses" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '7px',
            padding: '13px 28px',
            background: 'linear-gradient(135deg, #5a2b4e, #7a3d6e)',
            color: '#f5f0f7',
            textDecoration: 'none',
            borderRadius: '10px',
            fontSize: '0.95rem',
            fontWeight: 600,
            border: '1px solid rgba(192,132,252,0.3)',
            boxShadow: '0 0 28px rgba(90,43,78,0.5)',
            transition: 'transform 0.22s ease, box-shadow 0.22s ease',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 0 42px rgba(90,43,78,0.72)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 0 28px rgba(90,43,78,0.5)';
            }}>
            Explore Courses <ArrowRight size={16} />
          </Link>

          <Link href="/community" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '7px',
            padding: '13px 28px',
            background: 'transparent',
            color: '#c084fc',
            textDecoration: 'none',
            borderRadius: '10px',
            fontSize: '0.95rem',
            fontWeight: 600,
            border: '1px solid rgba(192,132,252,0.3)',
            transition: 'background 0.22s ease, transform 0.22s ease',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(192,132,252,0.09)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
            Join Community
          </Link>
        </div>

        {/* Stats — CountUp */}
        <div className="hero-stats" style={{
          ...fadeUpStyle(700),
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: 'rgba(90,43,78,0.3)',
          border: '1px solid rgba(90,43,78,0.3)',
          borderRadius: '16px',
          overflow: 'hidden',
          maxWidth: '500px',
          margin: '0 auto',
        }}>
          {[
            { icon: <Users size={20} />, target: 500, suffix: '+', label: 'Students' },
            { icon: <BookOpen size={20} />, target: 20, suffix: '+', label: 'Courses' },
            { icon: <Sparkles size={20} />, target: 10, suffix: '+', label: 'Workshops' },
          ].map((stat, i) => (
            <div key={i} style={{
              padding: '22px 12px',
              background: 'rgba(15,10,14,0.85)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '5px',
              transition: 'background 0.25s ease',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(90,43,78,0.22)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(15,10,14,0.85)')}>
              <span style={{ color: '#c084fc' }}>{stat.icon}</span>
              <span style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.65rem',
                fontWeight: 700,
                color: '#f5f0f7',
              }}>
                <CountUp target={stat.target} suffix={stat.suffix} />
              </span>
              <span style={{
                fontSize: '0.72rem',
                color: '#7a5a74',
                fontWeight: 500,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}>{stat.label}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Keyframe animations — FIX: corrected floatUp syntax + added heroFadeUp */}
      <style>{`
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.8; transform: translateX(-50%) scale(1);    }
          50%       { opacity: 1;   transform: translateX(-50%) scale(1.05); }
        }
        @keyframes floatUp {
          0%, 100% { transform: translateY(0px);   opacity: 0.4; }
          50%       { transform: translateY(-18px); opacity: 0.75; }
        }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0);    }
        }

       
      `}</style>
    </section>
  );
}