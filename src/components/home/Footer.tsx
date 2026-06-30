'use client';

import Link from 'next/link';
import { Linkedin, Twitter, Globe, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-surface-border pt-[clamp(3rem,6vw,5rem)] pb-8 px-[clamp(1rem,4vw,2rem)]">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-accent font-display font-bold text-xl">
              <Sparkles size={20} /> AIXORA Academy
            </div>
            <p className="text-text-muted text-sm leading-relaxed">
              Pakistan's first AI-focused learning ecosystem. Learn, build, and lead with confidence.
            </p>
          </div>

          {/* Links Columns */}
          <FooterLinks title="Programs" links={[
            { label: 'Full Stack Dev', href: '/courses' },
            { label: 'Machine Learning', href: '/courses' },
            { label: 'UI/UX Design', href: '/courses' },
            { label: 'Bootcamps', href: '/courses' },
          ]} />

          <FooterLinks title="Company" links={[
            { label: 'About Founder', href: '/founder' },
            { label: 'Our Vision', href: '/vision' },
            { label: 'Community', href: '/community' },
            { label: 'Events', href: '/events' },
          ]} />

          {/* Social / Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-bold text-text">Connect</h4>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Globe].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl flex items-center justify-center border border-surface-border text-text-muted hover:border-accent hover:text-accent transition-all duration-200 bg-[rgba(255,255,255,0.04)]">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-surface-border flex flex-col sm:flex-row justify-between items-center gap-4 text-text-faint text-xs">
          <p>© {new Date().getFullYear()} AIXORA Academy. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({ title, links }: { title: string, links: { label: string, href: string }[] }) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-display font-bold text-text">{title}</h4>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-text-muted hover:text-accent text-sm transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}