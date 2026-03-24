import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  metadataBase: new URL('https://filomena24.be'),
  title: 'Filomenastraat 24 - Prachtig Herenhuis Te Koop',
  description: 'Een elegante Zurenborgklassieker in Antwerpen.',
  openGraph: {
    title: 'Filomenastraat 24 - Prachtig Herenhuis Te Koop',
    description: 'Een elegante Zurenborgklassieker in Antwerpen.',
    url: '/',
    siteName: 'Filomena 24',
    images: [
      {
        url: '/content/images/image-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Filomenastraat 24 - Prachtig Herenhuis',
      }
    ],
    locale: 'nl_BE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Filomenastraat 24 - Prachtig Herenhuis Te Koop',
    description: 'Een elegante Zurenborgklassieker in Antwerpen.',
    images: ['/content/images/image-1.jpg'],
  },
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
