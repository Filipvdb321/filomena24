import { getPropertyContent } from '@/lib/content';
import Hero from '@/components/Hero';
import Details from '@/components/Details';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';

export default function Home() {
  const { frontmatter, content } = getPropertyContent();

  return (
    <main className="min-h-screen bg-[var(--color-warm-bg)]">
      <Hero data={frontmatter} />
      <Details content={content} />
      <Gallery images={frontmatter.images} />
      <Contact data={frontmatter} />
    </main>
  );
}
