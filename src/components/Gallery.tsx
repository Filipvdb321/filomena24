"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Gallery({ images }: { images: string[] }) {
  // Skip the hero image (0) and the agent photo (1)
  const galleryImages = images.slice(2);

  return (
    <section className="py-32 bg-[#EBE4DD]/30 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-[#2D2724]">
          Binnenkijken
        </h2>
        
        <div className="flex flex-wrap gap-4 md:gap-10">
          {galleryImages.map((src, idx) => {
            const isFullWidth = idx % 3 === 0;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: (idx % 3) * 0.15 }}
                className={`relative overflow-hidden rounded-[2px] shadow-sm w-full ${
                  isFullWidth ? 'aspect-[16/9] md:aspect-[21/9]' : 'aspect-square sm:aspect-[4/5] md:w-[calc(50%-1.25rem)]'
                }`}
              >
                <Image 
                  src={src} 
                  alt={"Property interior " + (idx + 1)} 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out" 
                  sizes={isFullWidth ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
