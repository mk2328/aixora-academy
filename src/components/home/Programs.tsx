'use client';
import Link from 'next/link';
import { Brain, Code, Smartphone, Palette, Briefcase, ArrowRight } from 'lucide-react';


const programs = [
  {
    icon:        <Brain size={28} />,
    title:       'AI & Machine Learning',
    description: 'Generative AI, Deep Learning, Prompt Engineering, Computer Vision aur NLP — future ki technologies aaj seekho.',
    tags:        ['Generative AI', 'ML', 'Deep Learning'],
    href:        '/courses?category=ai-ml',
    accent:      '#c084fc',
  },
  {
    icon:        <Code size={28} />,
    title:       'Web Development',
    description: 'Full Stack, MERN, React, Node.js — industry-ready development skills jo jobs dilwayein.',
    tags:        ['React', 'Node.js', 'Full Stack'],
    href:        '/courses?category=web-development',
    accent:      '#a855f7',
  },
  {
    icon:        <Smartphone size={28} />,
    title:       'Mobile Development',
    description: 'Flutter se cross-platform apps banao — ek codebase, dono platforms.',
    tags:        ['Flutter', 'Firebase', 'Cross-Platform'],
    href:        '/courses?category=mobile',
    accent:      '#9333ea',
  },
  {
    icon:        <Palette size={28} />,
    title:       'Design & Creativity',
    description: 'UI/UX Design, Figma, Graphic Design — visual communication ki power seekho.',
    tags:        ['UI/UX', 'Figma', 'Branding'],
    href:        '/courses?category=design',
    accent:      '#c084fc',
  },
  {
    icon:        <Briefcase size={28} />,
    title:       'Career Development',
    description: 'Resume building, LinkedIn optimization, interview prep aur freelancing — apna career khud banao.',
    tags:        ['Resume', 'LinkedIn', 'Freelancing'],
    href:        '/courses?category=career',
    accent:      '#a855f7',
  },
];

export default function Programs() {
  return (
    <section style={{
      background:  '#0f0a0e',
      padding:     '6rem 1.5rem',
      position:    'relative',
      overflow:    'hidden',
    }}>

      {/* Subtle top border glow */}
      <div style={{
        position:   'absolute',
        top:        0,
        left:       '50%',
        transform:  'translateX(-50%)',
        width:      '600px',
        height:     '1px',
        background: 'linear-gradient(90deg, transparent, rgba(192,132,252,0.4), transparent)',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{
            display:       'inline-block',
            padding:       '0.35rem 1rem',
            borderRadius:  '999px',
            background:    'rgba(192,132,252,0.08)',
            border:        '1px solid rgba(192,132,252,0.2)',
            color:         '#c084fc',
            fontSize:      '0.8rem',
            fontWeight:    600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom:  '1rem',
          }}>
            What We Offer
          </span>

          <h2 style={{
            fontFamily:   'Playfair Display, serif',
            fontSize:     'clamp(2rem, 4vw, 3rem)',
            fontWeight:   800,
            color:        '#f5f0f7',
            marginBottom: '1rem',
            lineHeight:   1.2,
          }}>
            Programs Built for the{' '}
            <span style={{
              background:    'rgba(90, 43, 78)',
              color:         'white',
              padding:       '0 0.4rem',
              borderRadius:  '4px',
              display:       'inline',
            }}>
              Future
            </span>
          </h2>

          <p style={{
            color:     '#b89ab2',
            fontSize:  '1rem',
            maxWidth:  '500px',
            margin:    '0 auto',
            lineHeight: 1.7,
          }}>
            Industry-aligned programs designed to give you practical skills,
            real projects, and career-ready confidence.
          </p>
        </div>

        {/* Cards Grid */}
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap:                 '1.25rem',
        }}>
          {programs.map((program, i) => (
            <Link key={i} href={program.href} style={{ textDecoration: 'none' }}>
              <div style={{
                background:    'linear-gradient(145deg, #1a1018, #2d1a28)',
                border:        '1px solid rgba(90,43,78,0.35)',
                borderRadius:  '16px',
                padding:       '1.75rem',
                height:        '100%',
                display:       'flex',
                flexDirection: 'column',
                gap:           '1rem',
                cursor:        'pointer',
                transition:    'all 0.3s ease',
                position:      'relative',
                overflow:      'hidden',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget;
                el.style.borderColor = 'rgba(192,132,252,0.4)';
                el.style.transform   = 'translateY(-4px)';
                el.style.boxShadow   = '0 12px 40px rgba(90,43,78,0.35)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget;
                el.style.borderColor = 'rgba(90,43,78,0.35)';
                el.style.transform   = 'translateY(0)';
                el.style.boxShadow   = 'none';
              }}>

                {/* Icon */}
                <div style={{
                  width:          '52px',
                  height:         '52px',
                  borderRadius:   '12px',
                  background:     `rgba(192,132,252,0.1)`,
                  border:         `1px solid rgba(192,132,252,0.2)`,
                  display:        'flex',
                  alignItems:     'center',
                  justifyContent: 'center',
                  color:          program.accent,
                }}>
                  {program.icon}
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize:   '1.2rem',
                  fontWeight: 700,
                  color:      '#f5f0f7',
                  margin:     0,
                }}>
                  {program.title}
                </h3>

                {/* Description */}
                <p style={{
                  color:      '#b89ab2',
                  fontSize:   '0.9rem',
                  lineHeight: 1.65,
                  margin:     0,
                  flex:       1,
                }}>
                  {program.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {program.tags.map((tag, j) => (
                    <span key={j} style={{
                      padding:      '0.25rem 0.75rem',
                      borderRadius: '999px',
                      background:   'rgba(192,132,252,0.06)',
                      border:       '1px solid rgba(192,132,252,0.15)',
                      color:        '#c084fc',
                      fontSize:     '0.75rem',
                      fontWeight:   500,
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div style={{
                  display:    'flex',
                  alignItems: 'center',
                  gap:        '0.35rem',
                  color:      '#7a5a74',
                  fontSize:   '0.85rem',
                  fontWeight: 600,
                }}>
                  View Courses <ArrowRight size={14} />
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}