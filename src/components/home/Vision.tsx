'use client';

import { Eye, Target, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Vision() {
  return (
    <section className="bg-surface relative overflow-hidden py-[clamp(4rem,8vw,7rem)] px-[clamp(1rem,4vw,2rem)]">

      {/* Top glow line */}
      <div className="glow-line-top" />

      {/* Glow blobs */}
      <div className="absolute bottom-[-10%] right-[-5%] w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(102,18,85,0.2) 0%, transparent 70%)' }} />
      <div className="absolute top-[10%] left-[-5%] w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(192,132,252,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-[clamp(2.5rem,5vw,4rem)]">

          <div className="section-label">
            <Sparkles size={12} />
            Who We Are
          </div>

          <h2 className="heading-lg mx-auto mb-4 max-w-[700px]">
            We Are Not Just an{' '}
            <span className="hl">Academy</span>
          </h2>

          <p className="text-text-muted text-[clamp(0.9rem,1.6vw,1.05rem)] max-w-[580px] mx-auto leading-[1.75]">
            AIXORA Academy is a complete technology ecosystem where learning,
            innovation, community, mentorship, and career development come
            together under one platform.
          </p>
        </div>

        {/* Vision + Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">

          {/* Vision Card */}
          <div className="bg-gradient-card border border-accent/20 rounded-[20px] p-[clamp(1.5rem,3vw,2.25rem)] relative overflow-hidden">
            <div className="absolute -top-8 -right-8 w-[120px] h-[120px] rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(ellipse, rgba(192,132,252,0.1) 0%, transparent 70%)' }} />

            {/* Icon */}
            <div className="w-[52px] h-[52px] rounded-[14px] bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-5">
              <Eye size={26} />
            </div>

            {/* Label */}
            <div className="badge-accent mb-3">Our Promise</div>

            <h3 className="heading-md mb-3">
              Pakistan's First AI-Powered Learning Ecosystem
            </h3>

            <p className="text-text-muted text-[0.9rem] leading-[1.7] m-0">
              At AIXORA Academy, we don't simply teach technology. We inspire confidence, develop skills, and nurture innovation. We aim to build a strong technology community where learning never stops—a platform where students become professionals, professionals become mentors, and mentors inspire the next generation.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-gradient-card border border-accent/20 rounded-[20px] p-[clamp(1.5rem,3vw,2.25rem)] relative overflow-hidden">
            <div className="absolute -top-8 -right-8 w-[120px] h-[120px] rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(ellipse, rgba(102,18,85,0.15) 0%, transparent 70%)' }} />

            {/* Icon */}
            <div className="w-[52px] h-[52px] rounded-[14px] bg-brand/20 border border-brand/40 flex items-center justify-center text-accent mb-5">
              <Target size={26} />
            </div>

            {/* Label */}
            <div className="badge-accent mb-3">Our Mission</div>

            <h3 className="heading-md mb-3">
              Accessible, Practical & Career-Oriented Education
            </h3>

            <p className="text-text-muted text-[0.9rem] leading-[1.7] m-0">
              We were created with one clear vision: to bridge the gap between traditional education and the real demands of the technology industry. We equip students with practical, industry-ready skills that empower them to build successful careers, launch freelance journeys, secure internships and jobs, or even start their own businesses.
            </p>
          </div>
        </div>

        {/* Motto Banner */}
        <div className="
          bg-gradient-brand border border-accent/20 rounded-[20px]
          p-[clamp(1.75rem,3vw,2.5rem)]
          flex items-center justify-between gap-6 flex-wrap
          relative overflow-hidden
        ">
          {/* X pattern overlay */}
          <div className="absolute inset-0 bg-x-pattern pointer-events-none opacity-50" />

          <div className="relative z-10">
            <p className="text-white/60 text-xs font-semibold tracking-[0.1em] uppercase mb-2">
              Our Motto
            </p>
            <h3 className="font-display text-[clamp(1.4rem,3vw,2rem)] font-black text-white leading-tight mb-2">
              Learn{' '}
              <span className="text-accent-glow">•</span>
              {' '}Build{' '}
              <span className="text-accent-glow">•</span>
              {' '}Lead
            </h3>
            <p className="text-white/65 text-[0.88rem] leading-[1.6]">
              Learn AI. Build the Future. Lead with Confidence.
            </p>
          </div>

          <Link
            href="/community"
            className="
              relative z-10 inline-flex items-center gap-2
              px-7 py-3 rounded-xl
              bg-white/12 border border-white/22 text-white
              text-[0.9rem] font-semibold no-underline
              hover:bg-white/20 hover:-translate-y-0.5
              transition-all duration-200 flex-shrink-0
            "
          >
            Join AIXORA <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}