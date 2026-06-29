'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, BookOpen, Zap, CheckCircle2 } from 'lucide-react';

const longTermPrograms = [
  { title: 'AI-Driven Web Development',  badge: 'New' },
  { title: 'Front-End Development',       badge: null  },
  { title: 'Back-End Development',        badge: null  },
  { title: 'Full Stack Development',      badge: 'Popular' },
  { title: 'UI/UX Design',               badge: null  },
  { title: 'Graphic Designing',           badge: null  },
  { title: 'WordPress Development',       badge: null  },
  { title: 'Machine Learning',            badge: 'Hot' },
  { title: 'Data Analysis',               badge: null  },
];

const shortTermPrograms = [
  { title: 'AI Bootcamps',                badge: 'Hot'  },
  { title: 'Hands-on Workshops',          badge: null   },
  { title: 'Career Counseling Sessions',  badge: null   },
  { title: 'Hackathons',                  badge: 'New'  },
  { title: 'Portfolio Building Sessions', badge: null   },
  { title: 'Personal Branding Programs',  badge: null   },
  { title: 'Freelancing Guidance',        badge: null   },
  { title: 'Interview Preparation',       badge: 'Popular' },
  { title: 'Resume & LinkedIn Optimization', badge: null },
  { title: 'Industry Awareness Sessions', badge: null   },
];

const badgeColors: Record<string, string> = {
  'New':     'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Hot':     'bg-red-50 text-red-600 border-red-200',
  'Popular': 'bg-amber-50 text-amber-700 border-amber-200',
};

export default function Programs() {
  const [activeTab, setActiveTab] = useState<'long' | 'short'>('long');

  const programs = activeTab === 'long' ? longTermPrograms : shortTermPrograms;

  return (
    <section className="bg-white relative overflow-hidden py-[clamp(4rem,8vw,7rem)] px-[clamp(1rem,4vw,2rem)]">

      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `
          repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(102,18,85,0.02) 40px, rgba(102,18,85,0.02) 41px),
          repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(102,18,85,0.02) 40px, rgba(102,18,85,0.02) 41px)
        `,
      }} />

      {/* Glow orbs */}
      <div className="absolute -top-[15%] -right-[10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(102,18,85,0.05) 0%, transparent 65%)' }} />
      <div className="absolute -bottom-[15%] -left-[8%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(102,18,85,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-[clamp(2.5rem,5vw,3.5rem)]">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 border"
            style={{ background: '#f3e8ef', borderColor: '#ddb8cc', color: '#661255' }}>
            <Sparkles size={12} />
            What We Offer
          </div>

          <h2 className="font-display font-bold text-[#1a0d18] leading-tight mb-3"
            style={{ fontSize: 'clamp(1.85rem, 4vw, 2.8rem)' }}>
            Programs Built for{' '}
            <span className="text-white px-2 py-0.5 rounded-md inline-block"
              style={{ background: '#661255' }}>
              Real Careers
            </span>
          </h2>

          <p className="text-[#666] text-[0.95rem] max-w-[500px] mx-auto leading-[1.7]">
            From comprehensive professional programs to short-term bootcamps —
            we have something for every stage of your journey.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap p-1 rounded-xl border gap-1"
            style={{ background: '#f9f4f8', borderColor: '#e5d4e0' }}>

            <button
              onClick={() => setActiveTab('long')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === 'long'
                  ? 'text-white shadow-md'
                  : 'text-[#661255] hover:bg-white/60'
              }`}
              style={activeTab === 'long' ? { background: '#661255' } : {}}>
              <BookOpen size={15} />
              Long-Term Programs
            </button>

            <button
              onClick={() => setActiveTab('short')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === 'short'
                  ? 'text-white shadow-md'
                  : 'text-[#661255] hover:bg-white/60'
              }`}
              style={activeTab === 'short' ? { background: '#661255' } : {}}>
              <Zap size={15} />
              Short-Term Opportunities
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-[1fr_1.8fr] gap-8 items-start">

          {/* Left — Info Panel */}
          <div className="rounded-[20px] p-5 lg:p-[clamp(1.5rem,3vw,2.25rem)] relative overflow-hidden text-white"
            style={{ background: '#661255' }}>

            {/* Orb */}
            <div className="absolute -top-10 -right-10 w-[160px] h-[160px] rounded-full pointer-events-none"
              style={{ background: 'rgba(192,132,252,0.15)' }} />
            <div className="absolute -bottom-10 -left-8 w-[120px] h-[120px] rounded-full pointer-events-none"
              style={{ background: 'rgba(0,0,0,0.15)' }} />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/20 mb-5"
                style={{ background: 'rgba(255,255,255,0.12)' }}>
                {activeTab === 'long' ? <BookOpen size={22} /> : <Zap size={22} />}
              </div>

              <h3 className="font-display text-[clamp(1.2rem,2.5vw,1.5rem)] font-bold leading-snug mb-3">
                {activeTab === 'long'
                  ? 'Long-Term Professional Programs'
                  : 'Short-Term Learning Opportunities'}
              </h3>

              <p className="text-white/72 text-[0.88rem] leading-[1.7] mb-6">
                {activeTab === 'long'
                  ? 'Our comprehensive career-focused programs combine technical knowledge with practical implementation to prepare students for modern careers.'
                  : 'These initiatives help students continuously grow, stay updated with industry trends, and develop professional confidence.'}
              </p>

              <div className="flex flex-col gap-2 mb-8">
                {(activeTab === 'long'
                  ? ['Industry-recognized curriculum', 'Hands-on project work', 'Mentorship included', 'Certificate on completion']
                  : ['Short intensive format', 'Practical skill focus', 'Expert-led sessions', 'Community networking']
                ).map((point, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/80 text-[0.83rem]">
                    <CheckCircle2 size={14} className="text-white/60 flex-shrink-0" />
                    {point}
                  </div>
                ))}
              </div>

              <Link href="/courses"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[0.88rem] font-semibold no-underline transition-all duration-200 hover:-translate-y-0.5 border border-white/25 hover:border-white/40"
                style={{ background: 'rgba(255,255,255,0.12)', color: '#fff' }}>
                View All <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Right — Programs Grid */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {programs.map((program, i) => (
                <Link key={i} href="/courses" className="no-underline group">
                  <div className="bg-white border rounded-[14px] px-4 py-3.5 flex items-center justify-between gap-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(102,18,85,0.1)] hover:border-[#ddb8cc] cursor-pointer"
                    style={{ borderColor: '#ede5ea' }}>

                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ background: '#661255' }} />
                      <span className="text-[#1a0d18] text-[0.88rem] font-medium truncate">
                        {program.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      {program.badge && (
                        <span className={`text-[0.65rem] font-semibold px-2 py-0.5 rounded-full border ${badgeColors[program.badge]}`}>
                          {program.badge}
                        </span>
                      )}
                      <ArrowRight size={14} className="text-[#661255] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Count indicator */}
            <p className="text-center text-[#999] text-[0.8rem] mt-5">
              Showing {programs.length} {activeTab === 'long' ? 'professional programs' : 'short-term opportunities'}
            </p>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <Link href="/courses"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold text-[0.95rem] no-underline transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
            style={{ background: '#661255' }}>
            Explore All Programs <ArrowRight size={17} />
          </Link>
        </div>

      </div>
    </section>
  );
}