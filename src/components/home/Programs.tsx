'use client';

import Link from 'next/link';
import { Brain, Code, Smartphone, Palette, Briefcase, ArrowRight, Sparkles, Plus, Bell } from 'lucide-react';

const sideCards = [
  {
    icon:  <Code size={24} />,
    title: 'Web Development',
    desc:  'Full Stack, MERN, React, Node.js — industry-ready skills jo jobs dilwayein.',
    tags:  ['React', 'Node.js', 'Full Stack'],
    href:  '/courses?category=web-development',
  },
  {
    icon:  <Smartphone size={24} />,
    title: 'Mobile Development',
    desc:  'Flutter se cross-platform apps banao — ek codebase, Android aur iOS dono.',
    tags:  ['Flutter', 'Firebase', 'Cross-Platform'],
    href:  '/courses?category=mobile',
  },
];

const bottomCards = [
  {
    icon:  <Palette size={24} />,
    title: 'Design & Creativity',
    desc:  'UI/UX Design, Figma, Graphic Design, Canva — visual communication ki power seekho.',
    tags:  ['UI/UX', 'Figma', 'Branding'],
    href:  '/courses?category=design',
  },
  {
    icon:  <Briefcase size={24} />,
    title: 'Career Development',
    desc:  'Resume, LinkedIn, interview prep aur freelancing — apna career khud banao.',
    tags:  ['Resume', 'LinkedIn', 'Freelancing'],
    href:  '/courses?category=career',
  },
];

export default function Programs() {
  return (
    <section className="bg-white relative overflow-hidden py-[clamp(4rem,8vw,7rem)] px-[clamp(1rem,4vw,2rem)]">

      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(102,18,85,0.025) 40px, rgba(102,18,85,0.025) 41px),
            repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(102,18,85,0.025) 40px, rgba(102,18,85,0.025) 41px)
          `,
        }} />

      {/* Glow orbs */}
      <div className="absolute -top-[15%] -right-[10%] w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(102,18,85,0.06) 0%, transparent 65%)' }} />
      <div className="absolute -bottom-[20%] -left-[8%] w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(102,18,85,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-[1280px] mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-[clamp(2.5rem,5vw,3.5rem)]">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 border"
            style={{ background: '#f3e8ef', borderColor: '#ddb8cc', color: '#661255' }}>
            <Sparkles size={12} />
            What We Offer
          </div>

          <h2 className="font-display font-bold text-[#1f1f1f] leading-tight mb-3"
            style={{ fontSize: 'clamp(1.85rem, 4vw, 2.6rem)' }}>
            Programs Built for the{' '}
            <span className="text-white px-2 py-0.5 rounded-md inline-block"
              style={{ background: '#661255' }}>
              Future
            </span>
          </h2>

          <p className="text-[#555] text-[0.95rem] max-w-[420px] mx-auto leading-[1.65]">
            Industry-aligned programs with practical skills, real projects, and career-ready confidence.
          </p>
        </div>

        {/* Row 1: Featured + Side Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-5 mb-5">

          {/* Featured AI Card */}
          <Link href="/courses?category=ai-ml" className="no-underline">
            <div className="rounded-[20px] p-[clamp(1.5rem,3vw,2.25rem)] flex flex-col gap-5 min-h-[320px] relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_25px_60px_rgba(102,18,85,0.25)] cursor-pointer h-full"
              style={{ background: '#661255' }}>

              {/* Orbs */}
              <div className="absolute -top-[55px] -right-[45px] w-[190px] h-[190px] rounded-full"
                style={{ background: 'rgba(184,113,153,0.22)' }} />
              <div className="absolute -bottom-[65px] -left-[35px] w-[155px] h-[155px] rounded-full"
                style={{ background: 'rgba(95,45,79,0.38)' }} />

              {/* Popular badge */}
              <div className="self-start inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.7rem] font-semibold border border-white/25 text-white/95"
                style={{ background: 'rgba(255,255,255,0.12)' }}>
                ⚡ Most Popular
              </div>

              {/* Icon */}
              <div className="w-[62px] h-[62px] rounded-[16px] flex items-center justify-center border border-white/20 flex-shrink-0"
                style={{ background: 'rgba(255,255,255,0.1)', color: '#e8c6d8' }}>
                <Brain size={34} />
              </div>

              <h3 className="font-display text-[clamp(1.3rem,2.5vw,1.55rem)] font-bold text-white leading-snug">
                AI & Machine Learning
              </h3>

              <p className="text-white/75 text-[0.875rem] leading-[1.7] flex-1">
                Generative AI, Deep Learning, Prompt Engineering, Computer Vision aur NLP —
                future ki technologies aaj seekho aur AI Engineer bano.
              </p>

              <div className="flex flex-wrap gap-1.5">
                {['Generative AI', 'Deep Learning', 'Prompt Eng.', 'NLP', 'Computer Vision'].map((tag, i) => (
                  <span key={i} className="px-2.5 py-0.5 rounded-full text-[0.7rem] font-medium border border-white/20 text-white/85"
                    style={{ background: 'rgba(255,255,255,0.1)' }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-white/80 text-[0.82rem] font-medium flex items-center gap-1.5">
                  View Courses <ArrowRight size={14} />
                </span>
                <div className="w-9 h-9 rounded-full flex items-center justify-center border border-white/30 text-white"
                  style={{ background: 'rgba(255,255,255,0.15)' }}>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </Link>

          {/* Side Cards */}
          <div className="flex flex-col gap-5">
            {sideCards.map((card, i) => (
              <Link key={i} href={card.href} className="no-underline flex-1">
                <div className="bg-white border rounded-[16px] p-[clamp(1.1rem,2vw,1.45rem)] flex items-start gap-4 transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(102,18,85,0.12)] hover:border-brand cursor-pointer h-full shadow-[0_4px_15px_rgba(0,0,0,0.04)]"
                  style={{ borderColor: '#e5d4e0' }}>

                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border"
                    style={{ background: '#f3e8ef', borderColor: '#ddb8cc', color: '#661255' }}>
                    {card.icon}
                  </div>

                  <div className="flex flex-col gap-2 flex-1">
                    <h3 className="font-display text-[1.05rem] font-bold text-[#1f1f1f] leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-[#555] text-[0.84rem] leading-[1.55]">
                      {card.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {card.tags.map((tag, j) => (
                        <span key={j} className="text-[0.7rem] px-2.5 py-0.5 rounded-full border"
                          style={{ background: '#f3e8ef', borderColor: '#ddb8cc', color: '#661255' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-[0.82rem] font-semibold mt-1"
                      style={{ color: '#661255' }}>
                      View Courses <ArrowRight size={13} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Row 2: Bottom Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {bottomCards.map((card, i) => (
            <Link key={i} href={card.href} className="no-underline">
              <div className="bg-white border rounded-[16px] p-[clamp(1.25rem,2vw,1.6rem)] flex flex-col h-full transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(102,18,85,0.12)] hover:border-brand shadow-[0_4px_15px_rgba(0,0,0,0.04)]"
                style={{ borderColor: '#e5d4e0' }}>

                <div className="w-12 h-12 rounded-xl flex items-center justify-center border mb-4 flex-shrink-0"
                  style={{ background: '#f3e8ef', borderColor: '#ddb8cc', color: '#661255' }}>
                  {card.icon}
                </div>

                <h3 className="font-display text-[1.1rem] font-bold text-[#1f1f1f] leading-snug mb-2">
                  {card.title}
                </h3>

                <p className="text-[#555] text-[0.86rem] leading-[1.6] flex-1">
                  {card.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {card.tags.map((tag, j) => (
                    <span key={j} className="text-[0.7rem] px-2.5 py-0.5 rounded-full border"
                      style={{ background: '#f3e8ef', borderColor: '#ddb8cc', color: '#661255' }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-[0.82rem] font-semibold mt-4"
                  style={{ color: '#661255' }}>
                  View Courses <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}

          {/* Coming Soon */}
          <div className="border-dashed border-2 rounded-[16px] p-[clamp(1.25rem,2vw,1.6rem)] flex flex-col h-full shadow-[0_4px_15px_rgba(0,0,0,0.04)]"
            style={{ borderColor: '#ddb8cc' }}>

            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
              style={{ background: '#f8f1f6', color: '#999' }}>
              <Plus size={24} />
            </div>

            <h3 className="font-display text-[1.1rem] font-bold leading-snug mb-2"
              style={{ color: '#888' }}>
              More Coming Soon
            </h3>

            <p className="text-[0.86rem] leading-[1.6] flex-1"
              style={{ color: '#888' }}>
              New tracks in Data Science, Cybersecurity, aur Cloud Computing — stay tuned.
            </p>

            <div className="flex flex-wrap gap-1.5 mt-4">
              {['Data Science', 'Cloud', 'Security'].map((tag, i) => (
                <span key={i} className="text-[0.7rem] px-2.5 py-0.5 rounded-full border"
                  style={{ background: '#f3e8ef', borderColor: '#ddb8cc', color: '#661255' }}>
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-1.5 text-[0.8rem] font-medium mt-4"
              style={{ color: '#661255' }}>
              Notify Me <Bell size={14} />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <Link href="/courses"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold text-[0.95rem] no-underline transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: '#661255' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#4a0d3d')}
            onMouseLeave={e => (e.currentTarget.style.background = '#661255')}>
            View All Programs <ArrowRight size={17} />
          </Link>
        </div>

      </div>
    </section>
  );
}