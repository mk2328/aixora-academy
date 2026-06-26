import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: {
    default: 'AIXORA Academy — Learn • Build • Lead',
    template: '%s | AIXORA Academy',
  },
  description: 'AI-first learning ecosystem empowering students with future-ready skills.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#0f0a0e', color: '#f5f0f7' }}>
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}