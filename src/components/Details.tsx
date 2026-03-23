"use client";

import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

export default function Details({ content }: { content: string }) {
  return (
    <section id="ontdek" className="py-24 px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32 w-full overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/3"
        >
          <div className="w-12 h-1 bg-[#C3996B] mb-8" />
          <h2 className="text-3xl md:text-5xl font-serif text-[#2D2724] leading-tight">
            Authenticiteit en Ruimte in hartje Zurenborg
          </h2>
          <p className="mt-6 text-[#8C827A] font-light leading-relaxed">
            Ontdek de ongeëvenaarde grandeur van dit indrukwekkende herenhuis, waar klassieke charme moeiteloos combineert met hedendaags wooncomfort.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-2/3 prose prose-lg prose-headings:font-serif prose-headings:text-[#C3996B] prose-headings:font-normal prose-h3:text-3xl prose-h3:mt-16 prose-h3:mb-6 prose-p:text-[#4A423D] prose-p:leading-[1.8] prose-p:font-light max-w-2xl"
        >
          <ReactMarkdown>{content}</ReactMarkdown>
        </motion.div>
      </div>
    </section>
  );
}
