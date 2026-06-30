'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const testimonials = [
  {
    name: 'Ayesha Khan',
    role: 'Front-End Developer @ Freelance',
    program: 'Full Stack Development',
    initials: 'AK',
    rating: 5,
    text: "AIXORA didn't just teach me to code — it taught me how to think like a developer. The hands-on projects gave me the confidence to start freelancing within months of finishing the program.",
  },
  {
    name: 'Bilal Ahmed',
    role: 'AI Engineer Trainee',
    program: 'Machine Learning',
    initials: 'BA',
    rating: 5,
    text: "The mentorship here is real, not just a buzzword. My mentor reviewed my portfolio line by line and helped me land my first internship. Best decision I made after graduation.",
  },
  {
    name: 'Hira Fatima',
    role: 'UI/UX Designer',
    program: 'UI/UX Design',
    initials: 'HF',
    rating: 5,
    text: "I came in with zero design background. The instructors broke everything down practically — by the end I had a full portfolio ready to show clients. Genuinely life-changing.",
  },
  {
    name: 'Usman Tariq',
    role: 'Backend Developer',
    program: 'Back-End Development',
    initials: 'UT',
    rating: 5,
    text: "What stood out was how career-focused everything was. It wasn't just lectures — resume sessions, mock interviews, LinkedIn optimization, all of it actually helped me get hired.",
  },
  {
    name: 'Sana Malik',
    role: 'Data Analyst',
    program: 'Data Analysis',
    initials: 'SM',
    rating: 5,
    text: "As someone returning to my career after a break, AIXORA gave me a structured path and a supportive community. I never felt behind — the trainers made sure of that.",
  },
  {
    name: 'Hamza Sheikh',
    role: 'Founder, Freelance Web Studio',
    program: 'AI-Driven Web Development',
    initials: 'HS',
    rating: 5,
    text: "I started my own small web agency right after completing the program. The practical, real-project approach here is unlike any other academy I researched before joining.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef(0);
  const total = testimonials.length;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const next = useCallback(() => setActive((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setActive((i) => (i - 1 + total) % total), [total]);

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    else if (diff < -50) prev();
  };

  // Compute relative offset (-2,-1,0,1,2...) for each card vs active
  const getOffset = (i: number) => {
    let offset = i - active;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;
    return offset;
  };

  const maxVisible = isMobile ? 1 : 2; // how many cards visible each side

  return (
    <section className="bg-surface relative overflow-hidden py-[clamp(4rem,8vw,7rem)] px-[clamp(1rem,4vw,2rem)]">

      {/* Top glow line */}
      <div className="glow-line-top" />

      {/* Glow blobs */}
      <div className="absolute top-[10%] right-[-8%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(102,18,85,0.2) 0%, transparent 70%)' }} />
      <div className="absolute bottom-[5%] left-[-8%] w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(192,132,252,0.06) 0%, transparent 70%)' }} />

      <div className="absolute inset-0 pointer-events-none bg-x-pattern" />

      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-[clamp(1.5rem,3vw,2rem)]">
          <div className="section-label">
            <Sparkles size={12} />
            Testimonials
          </div>

          <h2 className="heading-lg mx-auto mb-3 max-w-[650px]">
            What Our{' '}
            <span className="hl">Students Say</span>
          </h2>

          <p className="text-text-muted text-[clamp(0.9rem,1.6vw,1.05rem)] max-w-[560px] mx-auto leading-[1.75]">
            Real stories from students who turned their learning into careers,
            freelance journeys, and confidence in the real world.
          </p>
        </div>

        {/* Coverflow Stage */}
        <div
          className="relative flex items-center justify-center select-none"
          style={{
            height: 'clamp(380px, 48vw, 460px)',
            perspective: '1400px',
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {testimonials.map((t, i) => {
            const offset = getOffset(i);
            const abs = Math.abs(offset);

            if (abs > maxVisible) return null;

            const isCenter = offset === 0;
            const dir = offset === 0 ? 0 : offset > 0 ? 1 : -1;

            // Layout math
            const spacing = isMobile ? 0 : 230; // px between card centers
            const translateX = offset * spacing;
            const scale = isCenter ? 1 : abs === 1 ? 0.78 : 0.6;
            const rotateY = isCenter ? 0 : dir * -28;
            const opacity = isCenter ? 1 : abs === 1 ? 0.55 : 0.25;
            const zIndex = 10 - abs;
            const blur = isCenter ? 0 : abs === 1 ? 0.5 : 1.5;

            return (
              <div
                key={i}
                onClick={() => !isCenter && setActive(i)}
                className="absolute transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                  opacity,
                  zIndex,
                  filter: `blur(${blur}px)`,
                  cursor: isCenter ? 'default' : 'pointer',
                  pointerEvents: abs > maxVisible ? 'none' : 'auto',
                  width: 'min(86vw, 380px)',
                }}
              >
                <TestimonialCard t={t} isCenter={isCenter} />
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-5 mt-8">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full border border-surface-border flex items-center justify-center text-text-muted hover:border-accent hover:text-accent hover:-translate-x-0.5 transition-all duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === active ? '22px' : '6px',
                  height: '6px',
                  background: i === active ? '#c084fc' : 'rgba(192,132,252,0.25)',
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-11 h-11 rounded-full border border-surface-border flex items-center justify-center text-text-muted hover:border-accent hover:text-accent hover:translate-x-0.5 transition-all duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}

function TestimonialCard({ t, isCenter }: { t: typeof testimonials[number]; isCenter: boolean }) {
  return (
    <div
      className={`
        rounded-2xl p-[clamp(1.4rem,2.5vw,1.85rem)]
        flex flex-col relative overflow-hidden
        border transition-colors duration-500
        ${isCenter
          ? 'bg-gradient-brand border-accent/30 shadow-[0_25px_60px_rgba(102,18,85,0.4)]'
          : 'bg-gradient-card border-surface-border'}
      `}
      style={{ minHeight: isCenter ? '340px' : '300px' }}
    >
      {isCenter && (
        <div className="absolute inset-0 bg-x-pattern pointer-events-none opacity-40" />
      )}
      <div className="absolute -top-6 -right-6 w-[90px] h-[90px] rounded-full pointer-events-none"
        style={{ background: isCenter ? 'radial-gradient(ellipse, rgba(192,132,252,0.2) 0%, transparent 70%)' : 'radial-gradient(ellipse, rgba(192,132,252,0.08) 0%, transparent 70%)' }} />

      <Quote
        size={30}
        className={`mb-4 relative z-10 flex-shrink-0 ${isCenter ? 'text-white/25' : 'text-accent/20'}`}
        fill="currentColor"
      />

      <div className="flex items-center gap-1 mb-4 relative z-10">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star
            key={i}
            size={13}
            className={isCenter ? 'text-accent-glow fill-accent-glow' : 'text-accent fill-accent'}
          />
        ))}
      </div>

      <p className={`text-[0.88rem] leading-[1.75] mb-6 relative z-10 flex-1 ${isCenter ? 'text-white/85' : 'text-text-muted'}`}>
        "{t.text}"
      </p>

      <div className={`flex items-center gap-3 relative z-10 pt-5 border-t ${isCenter ? 'border-white/15' : 'border-surface-border'}`}>
        <div
          className={`w-11 h-11 rounded-full flex items-center justify-center font-display font-bold text-[0.85rem] flex-shrink-0 border ${
            isCenter ? 'text-white border-white/25' : 'text-accent border-accent/20'
          }`}
          style={{ background: isCenter ? 'rgba(255,255,255,0.12)' : 'rgba(192,132,252,0.1)' }}
        >
          {t.initials}
        </div>
        <div className="min-w-0">
          <h4 className={`font-display text-[0.88rem] font-bold leading-snug truncate ${isCenter ? 'text-white' : 'text-text'}`}>
            {t.name}
          </h4>
          <p className={`text-[0.74rem] leading-snug truncate ${isCenter ? 'text-white/60' : 'text-text-faint'}`}>
            {t.role}
          </p>
        </div>
        <span className={`ml-auto whitespace-nowrap flex-shrink-0 ${isCenter ? 'tag-light' : 'tag-dark'}`}>
          {t.program}
        </span>
      </div>
    </div>
  );
}