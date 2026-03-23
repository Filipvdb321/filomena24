"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Gallery({ images }: { images: string[] }) {
  const galleryImages = images.slice(1);

  return (
    <section className="py-24 bg-[#EBE4DD]/30 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-[#2D2724]">
          Binnenkijken
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((src, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: (idx % 3) * 0.15 }}
              className={"relative overflow-hidden rounded-lg shadow-sm w-full aspect-[4/3] md:aspect-auto md:min-h-[400px] " + (idx === 0 || idx === 3 ? "md:col-span-2 md:aspect-[21/9]" : "")}
            >
              <Image 
                src={src} 
                alt={"Property interior " + (idx + 1)} 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out" 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
