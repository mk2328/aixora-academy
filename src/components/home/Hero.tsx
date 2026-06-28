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

const fadeUpStyle = (delayMs: number): React.CSSProperties => ({
  animation: `heroFadeUp 0.7s ease ${delayMs}ms both`,
});

export default function Hero() {
  return (
    <section
      className="hero-section relative flex items-center justify-center overflow-hidden bg-surface box-border"
      style={{ minHeight: '100vh', paddingTop: '80px', paddingBottom: '48px' }}
    >

      {/* Glow top center */}
      <div className="absolute pointer-events-none animate-pulse-glow"
        style={{
          top: '-15%', left: '50%', transform: 'translateX(-50%)',
          width: '800px', height: '500px',
          background: 'radial-gradient(ellipse, rgba(102,18,85,0.55) 0%, transparent 70%)',
          animation: 'pulseGlow 4s ease-in-out infinite',
        }}
      />

      {/* Glow bottom left */}
      <div className="absolute pointer-events-none"
        style={{
          bottom: '5%', left: '-5%', width: '350px', height: '350px',
          background: 'radial-gradient(ellipse, rgba(192,132,252,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Glow right */}
      <div className="absolute pointer-events-none"
        style={{
          top: '20%', right: '-5%', width: '300px', height: '300px',
          background: 'radial-gradient(ellipse, rgba(102,18,85,0.16) 0%, transparent 70%)',
        }}
      />

      {/* X pattern */}
      <div className="absolute inset-0 pointer-events-none bg-x-pattern" />

      {/* Floating particles */}
      {[
        { top: '20%', left: '8%',   size: 3, delay: '0s',   dur: '6s' },
        { top: '60%', left: '5%',   size: 2, delay: '1s',   dur: '8s' },
        { top: '35%', right: '7%',  size: 4, delay: '0.5s', dur: '7s' },
        { top: '75%', right: '10%', size: 2, delay: '2s',   dur: '9s' },
        { top: '15%', right: '20%', size: 2, delay: '1.5s', dur: '5s' },
        { top: '80%', left: '20%',  size: 3, delay: '3s',   dur: '7s' },
      ].map((p, i) => (
        <div key={i} className="absolute rounded-full pointer-events-none"
          style={{
            top:        p.top,
            left:       (p as any).left,
            right:      (p as any).right,
            width:      `${p.size}px`,
            height:     `${p.size}px`,
            background: '#c084fc',
            opacity:    0.4,
            animation:  `floatUp ${p.dur} ease-in-out ${p.delay} infinite`,
          }}
        />
      ))}

      {/* Main content */}
      <div
        className="hero-content relative z-10 text-center w-full mx-auto px-6"
        style={{ maxWidth: '860px' }}
      >

        {/* Badge */}
        <div
          className="hero-badge inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full
                     bg-accent/8 border border-accent/25 text-accent
                     text-[0.82rem] font-medium tracking-wide mb-7"
          style={fadeUpStyle(100)}
        >
          <Sparkles size={13} />
          Pakistan's First AI-Focused Learning Ecosystem
        </div>

        {/* Headline */}
        <h1
          className="hero-h1 font-display font-black text-text tracking-tight mb-5"
          style={{
            ...fadeUpStyle(250),
            fontSize:   'clamp(1.7rem, 5.2vw, 4.4rem)',
            lineHeight: 1.4,
          }}
        >
          Learn{' '}
          <span className="bg-brand/80 text-accent px-1 rounded">AI.</span>
          {' '}Build the{' '}
          <span className="bg-brand/80 text-accent px-1 rounded">Future.</span>
          <br />
          Lead with{' '}
          <span className="bg-brand/80 text-accent px-1 rounded">Confidence.</span>
        </h1>

        {/* Subheading */}
        <p
          className="text-text-muted leading-relaxed mx-auto mb-8"
          style={{
            ...fadeUpStyle(400),
            fontSize:  'clamp(0.93rem, 1.8vw, 1.08rem)',
            maxWidth:  '580px',
            color:     '#c4a8bf',
            lineHeight: 1.78,
          }}
        >
          AIXORA Academy is an AI-first learning ecosystem empowering students,
          graduates, and professionals with practical skills, mentorship, and
          real-world career opportunities.
        </p>

        {/* CTA Buttons */}
        <div
          className="hero-btns flex items-center justify-center gap-3 flex-wrap mb-12"
          style={fadeUpStyle(550)}
        >
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                       text-[0.95rem] font-semibold text-text no-underline
                       bg-gradient-to-br from-brand to-brand-light
                       border border-accent/30 shadow-brand
                       hover:-translate-y-0.5 hover:shadow-glow
                       transition-all duration-200"
          >
            Explore Courses <ArrowRight size={16} />
          </Link>

          <Link
            href="/community"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                       text-[0.95rem] font-semibold text-accent no-underline
                       bg-transparent border border-accent/30
                       hover:bg-accent/8 hover:-translate-y-0.5
                       transition-all duration-200"
          >
            Join Community
          </Link>
        </div>

        {/* Stats */}
        <div
          className="hero-stats grid grid-cols-3 mx-auto overflow-hidden rounded-2xl border border-brand/30"
          style={{
            ...fadeUpStyle(700),
            maxWidth:   '500px',
            gap:        '1px',
            background: 'rgba(102,18,85,0.3)',
          }}
        >
          {[
            { icon: <Users size={20} />,    target: 500, suffix: '+', label: 'Students'  },
            { icon: <BookOpen size={20} />, target: 20,  suffix: '+', label: 'Courses'   },
            { icon: <Sparkles size={20} />, target: 10,  suffix: '+', label: 'Workshops' },
          ].map((stat, i) => (
            <div
              key={i}
              className="stat-box group"
            >
              <span className="text-accent">{stat.icon}</span>
              <span className="font-display font-bold text-text text-[1.65rem]">
                <CountUp target={stat.target} suffix={stat.suffix} />
              </span>
              <span className="text-text-faint text-[0.72rem] font-medium tracking-widest uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}