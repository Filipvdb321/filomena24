import { getPropertyContent } from '@/lib/content';
import Hero from '@/components/Hero';
import Details from '@/components/Details';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';

export default function Home() {
  // Force HMR
  const { frontmatter, content, jsonLd } = getPropertyContent();

  return (
    <main className="min-h-screen bg-[var(--color-warm-bg)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero data={frontmatter} />
      <Details content={content} data={frontmatter} />
      <Gallery images={frontmatter.images} quotes={frontmatter.quotes} />
      <Contact data={frontmatter} />
    </main>
  );
}
