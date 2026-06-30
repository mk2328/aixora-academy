'use client'; // This is required for interactivity

import { Sparkles, Linkedin, Twitter, Globe, Quote } from 'lucide-react';

export default function Founder() {
  return (
    <section className="bg-surface relative overflow-hidden py-[clamp(4rem,8vw,7rem)] px-[clamp(1rem,4vw,2rem)]">
      {/* Top glow line */}
      <div className="glow-line-top" />

      {/* Glow blobs */}
      <div
        className="absolute top-[10%] right-[-8%] w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(102,18,85,0.22) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-[5%] left-[-8%] w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(192,132,252,0.06) 0%, transparent 70%)' }}
      />

      {/* X pattern */}
      <div className="absolute inset-0 pointer-events-none bg-x-pattern opacity-60" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-[clamp(2.5rem,5vw,4rem)]">
          <div className="section-label">
            <Sparkles size={12} />
            Behind AIXORA
          </div>
          <h2 className="heading-lg mx-auto mb-4 max-w-[600px]">
            Meet the <span className="hl">Founder</span>
          </h2>
          <p className="text-text-muted text-[clamp(0.9rem,1.6vw,1.05rem)] max-w-[520px] mx-auto leading-[1.75]">
            AIXORA was born from a real experience — someone who lived the gap
            between education and industry, and decided to close it.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-10 xl:gap-16 items-start max-w-[1100px] mx-auto">
          {/* LEFT: Photo Card */}
          <div className="flex flex-col items-center lg:items-start gap-6">
            <div className="relative w-full max-w-[420px] mx-auto lg:mx-0">
              <div
                className="w-full rounded-[28px] overflow-hidden border-2 relative"
                style={{
                  borderColor: 'rgba(102,18,85,0.5)',
                  aspectRatio: '4 / 5',
                  background: 'linear-gradient(135deg, #661255 0%, #4a0d3d 100%)',
                }}
              >
                <img
                  src="/assets/founder.jpeg"
                  alt="Muskan Kamran — Founder of AIXORA Academy"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-[45%] pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(15,10,14,0.92) 0%, rgba(15,10,14,0.4) 60%, transparent 100%)',
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <div
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border mb-2 text-white"
                    style={{ background: '#661255', borderColor: 'rgba(255,255,255,0.2)' }}
                  >
                    Founder & Lead Trainer
                  </div>
                  <h3 className="font-display text-[1.5rem] font-bold text-white leading-snug mb-0.5">
                    Muskan Kamran
                  </h3>
                  <p className="text-white/60 text-[0.82rem]">AI Educator & Technology Mentor</p>
                </div>
              </div>
              <div
                className="absolute -inset-4 rounded-[40px] -z-10 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse, rgba(102,18,85,0.3) 0%, transparent 70%)',
                }}
              />
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                { icon: <Linkedin size={16} />, href: '#', label: 'LinkedIn' },
                { icon: <Twitter size={16} />, href: '#', label: 'Twitter' },
                { icon: <Globe size={16} />, href: '#', label: 'Website' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center border border-surface-border text-text-muted hover:border-accent hover:text-accent transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: Story */}
          <div className="flex flex-col gap-6 pt-0 lg:pt-2">
            <div
              className="rounded-2xl p-[clamp(1.4rem,2.5vw,2rem)] relative overflow-hidden border"
              style={{
                background: 'rgba(102,18,85,0.12)',
                borderColor: 'rgba(192,132,252,0.15)',
              }}
            >
              <div
                className="absolute -top-8 -right-8 w-[140px] h-[140px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(192,132,252,0.12) 0%, transparent 70%)' }}
              />
              <Quote
                size={36}
                className="mb-4 relative z-10 flex-shrink-0"
                style={{ color: 'rgba(192,132,252,0.25)' }}
                fill="currentColor"
              />
              <p
                className="text-text relative z-10 font-display font-semibold leading-[1.7] italic"
                style={{ fontSize: 'clamp(1rem,1.8vw,1.18rem)' }}
              >
                "I realized the problem wasn't a lack of talent. The problem was
                a lack of practical, career-focused learning. So I built the
                platform I wished I had."
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-text-muted text-[0.92rem] leading-[1.85]">
                As both a student and later a trainer, I witnessed firsthand how
                talented graduates were entering the job market without the
                practical skills employers actually needed. Degrees were there —
                but real-world confidence wasn't.
              </p>
              <p className="text-text-muted text-[0.92rem] leading-[1.85]">
                At the same time, AI was transforming every industry. Many
                institutes began offering AI courses, yet students were investing
                time and money without gaining the hands-on experience needed to
                thrive. I decided not to wait for someone else to solve this.
                AIXORA Academy became that solution.
              </p>
            </div>

            {/* Stats row */}
            <div
              className="grid grid-cols-3 gap-3 mt-2 rounded-2xl overflow-hidden border"
              style={{ borderColor: 'rgba(102,18,85,0.3)', background: 'rgba(102,18,85,0.08)' }}
            >
              {[
                { value: '500+', label: 'Students Mentored' },
                { value: '5+', label: 'Years Experience' },
                { value: '20+', label: 'Programs Designed' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center gap-1 py-5 px-3 text-center"
                  style={{
                    borderRight: i < 2 ? '1px solid rgba(102,18,85,0.3)' : 'none',
                  }}
                >
                  <span className="font-display font-black text-accent" style={{ fontSize: 'clamp(1.3rem,2.5vw,1.7rem)' }}>
                    {stat.value}
                  </span>
                  <span className="text-text-faint text-[0.7rem] font-medium tracking-widest uppercase leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}