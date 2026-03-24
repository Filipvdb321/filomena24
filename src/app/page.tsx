import { getPropertyContent } from '@/lib/content';
import Hero from '@/components/Hero';
import Details from '@/components/Details';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';

export default function Home() {
  // Force HMR
  const { frontmatter, content } = getPropertyContent();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SingleFamilyResidence',
    name: frontmatter.title,
    description: 'Een elegante Zurenborgklassieker in Antwerpen.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: frontmatter.address,
      addressLocality: 'Antwerpen',
      addressCountry: 'BE'
    },
    numberOfBedrooms: frontmatter.bedrooms,
    floorSize: {
      '@type': 'QuantitativeValue',
      value: frontmatter.living_area.replace(/[^0-9.,]/g, ''),
      unitCode: 'MTK' // Square meters
    }
  };

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
