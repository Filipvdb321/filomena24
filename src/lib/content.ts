import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { cache } from 'react';

export interface PropertyData {
  title: string;
  address: string;
  agent_name: string;
  agent_phone: string;
  agent_email: string;
  epc: string;
  living_area: string;
  bedrooms: number;
  images: string[];
  quotes?: {
    index: number;
    text: string;
    author: string;
  }[];
  seo_title?: string;
  seo_description?: string;
  seo_image?: string;
  seo_keywords?: string;
}

export const getPropertyContent = cache(() => {
  const contentPath = path.join(process.cwd(), 'content', 'property.md');
  const fileContents = fs.readFileSync(contentPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  const frontmatter = data as PropertyData;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SingleFamilyResidence',
    name: frontmatter.seo_title || frontmatter.title,
    description: frontmatter.seo_description || 'Prachtig herenhuis te koop',
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
      unitCode: 'MTK'
    }
  };
  
  return {
    frontmatter,
    content,
    jsonLd
  };
});
