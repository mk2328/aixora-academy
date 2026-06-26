'use client';
import Link from 'next/link';
import { Brain, Code, Smartphone, Palette, Briefcase, ArrowRight, Sparkles, Plus, Bell } from 'lucide-react';

export default function Programs() {
  return (
    <section style={{
      background: '#ffffff',
      padding: 'clamp(4rem, 8vw, 7rem) clamp(1rem, 4vw, 2rem)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Light Background Texture */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(95,45,79,0.025) 40px, rgba(95,45,79,0.025) 41px),
          repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(95,45,79,0.025) 40px, rgba(95,45,79,0.025) 41px)
        `,
        pointerEvents: 'none',
      }} />

      {/* Soft Glow Orbs */}
      <div style={{
        position: 'absolute',
        top: '-15%',
        right: '-10%',
        width: '520px',
        height: '520px',
        background: 'radial-gradient(ellipse, rgba(37,150,190,0.08) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-20%',
        left: '-8%',
        width: '420px',
        height: '420px',
        background: 'radial-gradient(ellipse, rgba(95,45,79,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: '#f3e8ef',
            border: '1px solid #ddb8cc',
            color: '#5f2d4f',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.09em',
            textTransform: 'uppercase',
            padding: '6px 16px',
            borderRadius: '9999px',
            marginBottom: '1rem',
          }}>
            <Sparkles size={14} />
            What we offer
          </div>

          <h2 style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: 'clamp(1.85rem, 4vw, 2.6rem)',
            fontWeight: 700,           // Made bolder
            lineHeight: 1.1,
            marginBottom: '0.75rem',
            color: '#1f1f1f',
          }}>
            Programs built for the{' '}
            <span style={{
              background: '#5f2d4f',
              color: '#ffffff',
              padding: '0.1rem 0.55rem',
              borderRadius: '6px',
              display: 'inline-block',
              boxDecorationBreak: 'clone',
            }}>
              future
            </span>
          </h2>

          <p style={{
            color: '#555',
            fontSize: '0.95rem',
            maxWidth: '420px',
            margin: '0 auto',
            lineHeight: 1.65,
          }}>
            Industry-aligned programs with practical skills, real projects, and career-ready confidence.
          </p>
        </div>

        {/* Row 1: Featured + Side Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.15fr 1fr',
          gap: '1.25rem',
          marginBottom: '1.25rem',
        }}>
          {/* Featured AI Card - Dark Accent */}
          <Link href="/courses?category=ai-ml" style={{ textDecoration: 'none' }}>
            <div style={{
              background: '#521346',
              borderRadius: '20px',
              padding: '2.25rem 1.85rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              minHeight: '360px',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.25s ease, boxShadow 0.25s ease',
              cursor: 'pointer',
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 25px 60px rgba(58,24,48,0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
              {/* Orbs */}
              <div style={{
                position: 'absolute',
                top: '-55px',
                right: '-45px',
                width: '190px',
                height: '190px',
                borderRadius: '50%',
                background: 'rgba(184,113,153,0.22)',
              }} />
              <div style={{
                position: 'absolute',
                bottom: '-65px',
                left: '-35px',
                width: '155px',
                height: '155px',
                borderRadius: '50%',
                background: 'rgba(95,45,79,0.38)',
              }} />

              <div style={{
                alignSelf: 'flex-start',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.25)',
                color: 'rgba(255,255,255,0.95)',
                fontSize: '0.7rem',
                fontWeight: 600,
                padding: '4px 12px',
                borderRadius: '9999px',
              }}>
                ⚡ Most popular
              </div>

              <div style={{
                width: '62px',
                height: '62px',
                borderRadius: '16px',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#e8c6d8',
              }}>
                <Brain size={34} />
              </div>

              <div style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontSize: '1.55rem',
                fontWeight: 500,
                lineHeight: 1.2,
                color: '#ffffff',
              }}>
                AI &amp; Machine Learning
              </div>

              <p style={{
                color: 'rgba(255,255,255,0.75)',
                fontSize: '0.875rem',
                lineHeight: 1.7,
                flex: 1,
              }}>
                Generative AI, Deep Learning, Prompt Engineering, Computer Vision aur NLP — future ki technologies aaj seekho aur AI Engineer bano.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {['Generative AI', 'Deep Learning', 'Prompt Eng.', 'NLP', 'Computer Vision'].map((tag, i) => (
                  <span key={i} style={{
                    padding: '3px 10px',
                    borderRadius: '9999px',
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: 'rgba(255,255,255,0.85)',
                    fontSize: '0.7rem',
                    fontWeight: 500,
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 'auto',
              }}>
                <div style={{
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '0.82rem',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                }}>
                  View courses <ArrowRight size={14} />
                </div>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </Link>

          {/* Side Cards - Light Theme */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <Link href="/courses?category=web-development" style={{ textDecoration: 'none' }}>
              <div style={{
                background: '#ffffff',
                border: '1px solid #e5d4e0',
                borderRadius: '16px',
                padding: '1.45rem 1.35rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.1rem',
                transition: 'all 0.25s ease',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(0,0,0,0.04)',
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#2596be';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(37,150,190,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e5d4e0';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.04)';
                }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: '#f3e8ef',
                  border: '1px solid #ddb8cc',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#5f2d4f',
                }}>
                  <Code size={24} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: 'Playfair Display, Georgia, serif',
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    color: '#1f1f1f',
                    marginBottom: '0.4rem',
                  }}>
                    Web Development
                  </div>
                  <p style={{ color: '#555', fontSize: '0.84rem', lineHeight: 1.55, marginBottom: '0.8rem' }}>
                    Full Stack, MERN, React, Node.js — industry-ready skills jo jobs dilwayein.
                  </p>
                  <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                    {['React', 'Node.js', 'Full Stack'].map((t, i) => (
                      <span key={i} style={{
                        fontSize: '0.7rem',
                        padding: '2px 9px',
                        borderRadius: '9999px',
                        background: '#f3e8ef',
                        border: '1px solid #ddb8cc',
                        color: '#5f2d4f',
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div style={{
                    marginTop: '14px',
                    color: '#521346',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}>
                    View courses <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </Link>

            {/* Mobile Development Card - Same Style */}
            <Link href="/courses?category=mobile" style={{ textDecoration: 'none' }}>
              <div style={{
                background: '#ffffff',
                border: '1px solid #e5d4e0',
                borderRadius: '16px',
                padding: '1.45rem 1.35rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.1rem',
                transition: 'all 0.25s ease',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(0,0,0,0.04)',
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#2596be';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(37,150,190,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e5d4e0';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.04)';
                }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: '#f3e8ef',
                  border: '1px solid #ddb8cc',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#5f2d4f',
                }}>
                  <Smartphone size={24} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: 'Playfair Display, Georgia, serif',
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    color: '#1f1f1f',
                    marginBottom: '0.4rem',
                  }}>
                    Mobile Development
                  </div>
                  <p style={{ color: '#555', fontSize: '0.84rem', lineHeight: 1.55, marginBottom: '0.8rem' }}>
                    Flutter se cross-platform apps banao — ek codebase, Android aur iOS dono.
                  </p>
                  <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                    {['Flutter', 'Firebase', 'Cross-Platform'].map((t, i) => (
                      <span key={i} style={{
                        fontSize: '0.7rem',
                        padding: '2px 9px',
                        borderRadius: '9999px',
                        background: '#f3e8ef',
                        border: '1px solid #ddb8cc',
                        color: '#5f2d4f',
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div style={{
                    marginTop: '14px',
                    color: '#521346',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}>
                    View courses <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Row 2: Bottom Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.25rem',
        }}>
          {/* Design Card */}
          <Link href="/courses?category=design" style={{ textDecoration: 'none' }}>
            <div style={{
              background: '#ffffff',
              border: '1px solid #e5d4e0',
              borderRadius: '16px',
              padding: '1.6rem 1.4rem',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.25s ease',
              boxShadow: '0 4px 15px rgba(0,0,0,0.04)',
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#2596be';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(37,150,190,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e5d4e0';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.04)';
              }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: '#f3e8ef',
                border: '1px solid #ddb8cc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#5f2d4f',
                marginBottom: '1rem',
              }}>
                <Palette size={26} />
              </div>
              <div style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontSize: '1.1rem',
                fontWeight: 800,
                color: '#1f1f1f',
                marginBottom: '0.6rem',
              }}>
                Design &amp; Creativity
              </div>
              <p style={{ color: '#555', fontSize: '0.86rem', lineHeight: 1.6, flex: 1 }}>
                UI/UX Design, Figma, Graphic Design, Canva — visual communication ki power seekho.
              </p>
              <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', marginTop: '1rem' }}>
                {['UI/UX', 'Figma', 'Branding'].map((t, i) => (
                  <span key={i} style={{
                    fontSize: '0.7rem',
                    padding: '2px 9px',
                    borderRadius: '9999px',
                    background: '#f3e8ef',
                    border: '1px solid #ddb8cc',
                    color: '#5f2d4f',
                  }}>
                    {t}
                  </span>
                ))}
              </div>
              <div style={{
                marginTop: 'auto',
                paddingTop: '1rem',
                color: '#521346',
                fontSize: '0.82rem',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
              }}>
                View courses <ArrowRight size={15} />
              </div>
            </div>
          </Link>

          {/* Career Development */}
          <Link href="/courses?category=career" style={{ textDecoration: 'none' }}>
            <div style={{
              background: '#ffffff',
              border: '1px solid #e5d4e0',
              borderRadius: '16px',
              padding: '1.6rem 1.4rem',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.25s ease',
              boxShadow: '0 4px 15px rgba(0,0,0,0.04)',
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#2596be';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(37,150,190,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e5d4e0';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.04)';
              }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: '#f3e8ef',
                border: '1px solid #ddb8cc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#5f2d4f',
                marginBottom: '1rem',
              }}>
                <Briefcase size={26} />
              </div>
              <div style={{
                fontFamily: 'Playfair Display, Georgia, serif',
                fontSize: '1.1rem',
                fontWeight: 800,
                color: '#1f1f1f',
                marginBottom: '0.6rem',
              }}>
                Career Development
              </div>
              <p style={{ color: '#555', fontSize: '0.86rem', lineHeight: 1.6, flex: 1 }}>
                Resume, LinkedIn, interview prep aur freelancing — apna career khud banao.
              </p>
              <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', marginTop: '1rem' }}>
                {['Resume', 'LinkedIn', 'Freelancing'].map((t, i) => (
                  <span key={i} style={{
                    fontSize: '0.7rem',
                    padding: '2px 9px',
                    borderRadius: '9999px',
                    background: '#f3e8ef',
                    border: '1px solid #ddb8cc',
                    color: '#5f2d4f',
                  }}>
                    {t}
                  </span>
                ))}
              </div>
              <div style={{
                marginTop: 'auto',
                paddingTop: '1rem',
                color: '#521346',
                fontSize: '0.82rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
              }}>
                View courses <ArrowRight size={15} />
              </div>
            </div>
          </Link>

          {/* Coming Soon */}
          <div style={{
            background: '#ffffff',
            border: '1.5px dashed #ddb8cc',
            borderRadius: '16px',
            padding: '1.6rem 1.4rem',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 4px 15px rgba(0,0,0,0.04)',
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: '#f8f1f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#888',
              marginBottom: '1rem',
            }}>
              <Plus size={26} />
            </div>
            <div style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontSize: '1.1rem',
              fontWeight: 800,
              color: '#666',
              marginBottom: '0.6rem',
            }}>
              More coming soon
            </div>
            <p style={{ color: '#666', fontSize: '0.86rem', lineHeight: 1.6, flex: 1 }}>
              New tracks in Data Science, Cybersecurity, aur Cloud Computing — stay tuned.
            </p>
            <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', marginTop: '1rem' }}>
              {['Data Science', 'Cloud', 'Security'].map((t, i) => (
                <span key={i} style={{
                  fontSize: '0.7rem',
                  padding: '2px 9px',
                  borderRadius: '9999px',
                  background: '#f3e8ef',
                  border: '1px solid #ddb8cc',
                  color: '#5f2d4f',
                }}>
                  {t}
                </span>
              ))}
            </div>
            <div style={{
              marginTop: 'auto',
              paddingTop: '1rem',
              color: '#5f2d4f',
              fontSize: '0.8rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}>
              Notify me <Bell size={15} />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <Link href="/courses" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '14px 32px',
            borderRadius: '12px',
            background: '#5f2d4f',
            color: '#fff',
            fontWeight: 600,
            fontSize: '0.95rem',
            textDecoration: 'none',
            transition: 'all 0.2s ease',
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#521346';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#5f2d4f';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
            View all programs <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}