import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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
}

export function getPropertyContent() {
  const contentPath = path.join(process.cwd(), 'content', 'property.md');
  const fileContents = fs.readFileSync(contentPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    frontmatter: data as PropertyData,
    content
  };
}
