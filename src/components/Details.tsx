"use client";

import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

export default function Details({ content }: { content: string }) {
  return (
    <section id="ontdek" className="py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="prose prose-lg md:prose-xl max-w-none 
                   prose-headings:font-serif prose-headings:text-[#2D2724] prose-headings:font-normal prose-h3:text-3xl prose-h3:mt-16 prose-h3:mb-6
                   prose-p:text-[#4A423D] prose-p:leading-relaxed prose-p:font-light"
      >
        <div className="w-12 h-1 bg-[#C3996B] mb-12" />
        <ReactMarkdown>{content}</ReactMarkdown>
      </motion.div>
    </section>
  );
}
