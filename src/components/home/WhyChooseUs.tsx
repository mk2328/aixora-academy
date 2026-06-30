'use client';

import { Target, Users, Award, TrendingUp, Sparkles, Layers } from 'lucide-react';

const features = [
  {
    icon:  <Target size={24} />,
    title: 'Industry-Relevant Learning',
    desc:  'Skills aligned with current industry requirements — not outdated theory.',
  },
  {
    icon:  <Layers size={24} />,
    title: 'Hands-On Projects',
    desc:  'Practical experience through real-world projects and assignments.',
  },
  {
    icon:  <Users size={24} />,
    title: 'Expert Mentorship',
    desc:  'Guidance from experienced professionals and trainers throughout your journey.',
  },
  {
    icon:  <TrendingUp size={24} />,
    title: 'Career-Oriented Approach',
    desc:  'Build portfolios, improve employability, and prepare for professional success.',
  },
  {
    icon:  <Sparkles size={24} />,
    title: 'Community-Driven Growth',
    desc:  'Become part of a network of learners, mentors, and innovators.',
  },
  {
    icon:  <Award size={24} />,
    title: 'Future-Focused Education',
    desc:  'Stay ahead with AI, emerging technologies, and modern digital skills.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-dark overflow-hidden py-[clamp(4rem,8vw,7rem)] px-[clamp(1rem,4vw,2rem)]">

      {/* Top glow line */}
      <div className="glow-line-top" />

      {/* Glow blobs */}
      <div className="absolute top-[15%] right-[-8%] w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(192,132,252,0.07) 0%, transparent 70%)' }} />
      <div className="absolute bottom-[10%] left-[-8%] w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(102,18,85,0.18) 0%, transparent 70%)' }} />

      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-[clamp(2.5rem,5vw,4rem)]">
          <div className="section-label">
            <Sparkles size={12} />
            Why AIXORA
          </div>

          <h2 className="heading-lg mx-auto mb-4 max-w-[650px]">
            Why Choose{' '}
            <span className="hl">AIXORA Academy</span>
          </h2>

          <p className="text-text-muted text-[clamp(0.9rem,1.6vw,1.05rem)] max-w-[560px] mx-auto leading-[1.75]">
            We don't just teach — we build careers, communities, and confident
            technology leaders ready for an AI-driven world.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <div
              key={i}
              className="
                bg-gradient-card border border-surface-border rounded-2xl
                p-[clamp(1.5rem,2.5vw,1.85rem)]
                relative overflow-hidden
                transition-all duration-300
                hover:border-accent/40 hover:-translate-y-1
                hover:shadow-[0_12px_36px_rgba(102,18,85,0.3)]
              "
            >
              {/* Glow on card corner */}
              <div className="absolute -top-6 -right-6 w-[90px] h-[90px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(192,132,252,0.08) 0%, transparent 70%)' }} />

              {/* Icon */}
              <div className="icon-box mb-5 relative z-10">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="font-display text-[1.05rem] font-bold text-text leading-snug mb-2 relative z-10">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-text-muted text-[0.875rem] leading-[1.65] relative z-10">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}