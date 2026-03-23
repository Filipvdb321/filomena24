import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Filomenastraat 24 - Prachtig Herenhuis Te Koop',
  description: 'Een elegante Zurenborgklassieker in Antwerpen.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans bg-[var(--color-warm-bg)] text-[var(--color-warm-text)]">
        {children}
      </body>
    </html>
  );
}
