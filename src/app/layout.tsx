import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

import { getPropertyContent } from '@/lib/content';

export async function generateMetadata(): Promise<Metadata> {
  const { frontmatter } = getPropertyContent();
  
  return {
    metadataBase: new URL('https://filomena24.be'),
    title: frontmatter.seo_title || frontmatter.title,
    description: frontmatter.seo_description,
    keywords: frontmatter.seo_keywords,
    openGraph: {
      title: frontmatter.seo_title || frontmatter.title,
      description: frontmatter.seo_description,
      url: '/',
      siteName: 'Filomena 24',
      images: [
        {
          url: frontmatter.seo_image || frontmatter.images[0],
          width: 1200,
          height: 630,
          alt: frontmatter.seo_title || frontmatter.title,
        }
      ],
      locale: 'nl_BE',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.seo_title || frontmatter.title,
      description: frontmatter.seo_description,
      images: [frontmatter.seo_image || frontmatter.images[0]],
    },
  };
}

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
