'use client';

import { Calendar, Clock, MapPin, ArrowRight, Sparkles, Users2 } from 'lucide-react';
import Link from 'next/link';

const events = [
  {
    title: 'AI Bootcamp: From Zero to Deployment',
    type: 'Bootcamp',
    date: { day: '14', month: 'JUL' },
    time: '10:00 AM – 4:00 PM',
    location: 'AIXORA Campus, Karachi',
    seats: '32 seats left',
    featured: true,
  },
  {
    title: 'Resume & LinkedIn Optimization Workshop',
    type: 'Workshop',
    date: { day: '21', month: 'JUL' },
    time: '5:00 PM – 7:00 PM',
    location: 'Online (Zoom)',
    seats: '18 seats left',
  },
  {
    title: 'Hackathon: Build with AI',
    type: 'Hackathon',
    date: { day: '02', month: 'AUG' },
    time: '9:00 AM – 9:00 PM',
    location: 'AIXORA Campus, Karachi',
    seats: '12 teams left',
  },
  {
    title: 'Career Counseling & Portfolio Review',
    type: 'Counseling',
    date: { day: '09', month: 'AUG' },
    time: '3:00 PM – 6:00 PM',
    location: 'AIXORA Campus, Karachi',
    seats: '24 seats left',
  },
];

export default function UpcomingEvents() {
  const featured = events.find((e) => e.featured);
  const rest = events.filter((e) => !e.featured);

  return (
    <section className="relative overflow-hidden">

      {/* Fixed parallax background image */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url('/assets/events-bg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Light overlay so text + cards stay legible over the photo */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.8) 40%, rgba(255,255,255,0.8) 100%)',
        }}
      />

      <div className="relative py-[clamp(4rem,8vw,7rem)] px-[clamp(1rem,4vw,2rem)]">
        <div className="max-w-[1200px] mx-auto">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-[clamp(2.5rem,5vw,3.5rem)]">
            <div>
              <div
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 border"
                style={{ background: '#f3e8ef', borderColor: '#ddb8cc', color: '#661255' }}
              >
                <Calendar size={12} />
                Don't Miss Out
              </div>

              <h2
                className="font-display font-bold text-[#1a0d18] leading-tight mb-3"
                style={{ fontSize: 'clamp(1.85rem, 4vw, 2.8rem)' }}
              >
                Upcoming{' '}
                <span
                  className="text-white px-2 py-0.5 rounded-md inline-block"
                  style={{ background: '#661255' }}
                >
                  Events
                </span>
              </h2>

              <p className="text-[#666] text-[0.95rem] max-w-[480px] leading-[1.75]">
                Bootcamps, workshops, hackathons, and mentorship sessions
                designed to sharpen your skills and connect you with the
                AIXORA community.
              </p>
            </div>

            <Link
              href="/events"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold no-underline border transition-all duration-200 hover:-translate-y-0.5 flex-shrink-0 self-start md:self-auto"
              style={{ borderColor: '#661255', color: '#661255', background: '#fff' }}
            >
              View All Events <ArrowRight size={16} />
            </Link>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-5">

            {/* Featured Event */}
            {featured && (
              <div
                className="rounded-[20px] p-[clamp(1.75rem,3vw,2.5rem)] relative overflow-hidden flex flex-col justify-between text-white shadow-[0_20px_50px_rgba(102,18,85,0.25)]"
                style={{ background: 'linear-gradient(135deg, #661255 0%, #4a0d3d 100%)' }}
              >
                <div
                  className="absolute inset-0 pointer-events-none opacity-40"
                  style={{
                    backgroundImage: `
                      repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.04) 40px, rgba(255,255,255,0.04) 41px),
                      repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(255,255,255,0.04) 40px, rgba(255,255,255,0.04) 41px)
                    `,
                  }}
                />
                <div
                  className="absolute -bottom-10 -right-10 w-[180px] h-[180px] rounded-full pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse, rgba(192,132,252,0.2) 0%, transparent 70%)' }}
                />

                <div className="relative z-10">
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border border-white/20 text-white tracking-wide uppercase mb-5"
                    style={{ background: 'rgba(255,255,255,0.12)' }}
                  >
                    <Sparkles size={11} />
                    Featured Event
                  </div>

                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex flex-col items-center justify-center w-[64px] h-[64px] rounded-[14px] bg-white/12 border border-white/20 text-white flex-shrink-0">
                      <span className="font-display text-[1.4rem] font-black leading-none">
                        {featured.date.day}
                      </span>
                      <span className="text-[0.65rem] font-semibold tracking-widest uppercase opacity-80">
                        {featured.date.month}
                      </span>
                    </div>

                    <h3 className="font-display text-[clamp(1.3rem,2.5vw,1.7rem)] font-bold text-white leading-snug">
                      {featured.title}
                    </h3>
                  </div>

                  <div className="flex flex-col gap-3 mb-8">
                    <div className="flex items-center gap-2.5 text-white/75 text-[0.88rem]">
                      <Clock size={15} className="text-white/55 flex-shrink-0" />
                      {featured.time}
                    </div>
                    <div className="flex items-center gap-2.5 text-white/75 text-[0.88rem]">
                      <MapPin size={15} className="text-white/55 flex-shrink-0" />
                      {featured.location}
                    </div>
                    <div className="flex items-center gap-2.5 text-white/75 text-[0.88rem]">
                      <Users2 size={15} className="text-white/55 flex-shrink-0" />
                      {featured.seats}
                    </div>
                  </div>
                </div>

                <Link
                  href="/events"
                  className="relative z-10 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/12 border border-white/22 text-white text-[0.9rem] font-semibold no-underline hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-fit"
                >
                  Reserve Your Spot <ArrowRight size={15} />
                </Link>
              </div>
            )}

            {/* Other Events List */}
            <div className="flex flex-col gap-4">
              {rest.map((event, i) => (
                <Link
                  key={i}
                  href="/events"
                  className="group flex items-center gap-4 p-[clamp(1.1rem,2vw,1.4rem)] no-underline rounded-2xl bg-white/90 backdrop-blur-sm border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(102,18,85,0.12)]"
                  style={{ borderColor: '#ede5ea' }}
                >
                  {/* Date block */}
                  <div
                    className="flex flex-col items-center justify-center w-[56px] h-[56px] rounded-xl flex-shrink-0 border"
                    style={{ background: '#f9f4f8', borderColor: '#ddb8cc', color: '#661255' }}
                  >
                    <span className="font-display text-[1.1rem] font-bold leading-none">
                      {event.date.day}
                    </span>
                    <span className="text-[0.6rem] font-semibold tracking-widest uppercase opacity-70">
                      {event.date.month}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="min-w-0 flex-1">
                    <span
                      className="inline-block mb-2 px-2.5 py-0.5 rounded-full text-xs font-medium border"
                      style={{ background: '#f3e8ef', borderColor: '#ddb8cc', color: '#661255' }}
                    >
                      {event.type}
                    </span>
                    <h4 className="font-display text-[0.98rem] font-bold text-[#1a0d18] leading-snug mb-2 truncate">
                      {event.title}
                    </h4>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[#888] text-[0.78rem]">
                      <span className="flex items-center gap-1.5">
                        <Clock size={12} /> {event.time}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={12} /> {event.location}
                      </span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <ArrowRight
                    size={18}
                    style={{ color: '#661255' }}
                    className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0"
                  />
                </Link>
              ))}

              <p className="text-[#999] text-[0.78rem] text-center mt-1">
                Spots are limited — register early to secure your seat.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}