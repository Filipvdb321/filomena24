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
          {galleryImages.flatMap((src, idx) => {
            const isFullWidth = idx % 3 === 0;
            
            // Voorbeeld quotes (Optie 3 verkennen) - later in te vullen door Filip
            const quotes = [
              {
                index: 4,
                text: "De hoge plafonds en authentieke elementen voelden direct als 'thuis'. Hier hebben we stiekem heel wat uren rond de open haard doorgebracht.",
                author: "Filip"
              },
              {
                index: 9,
                text: "Onze dochter leerde fietsen op het koertje, met de avondzon op haar gezicht. Een veilige, rustige oase midden in de stad.",
                author: "Filip & Vrouw"
              },
              {
                index: 18,
                text: "Zurenborg is voor ons jarenlang een dorp in de stad geweest. We gaan de ochtendkoffies op de hoek en ons huis on-ge-looflijk missen. Maar het is tijd voor iets groters.",
                author: "Filip, Vrouw & Dochter"
              }
            ];
            
            const quote = quotes.find(q => q.index === idx);
            const items = [];

            if (quote) {
              items.push(
                <motion.div
                  key={`quote-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1 }}
                  className="w-full py-12 md:py-16 flex flex-col items-center justify-center text-center px-4 md:px-12 my-4 md:my-8"
                >
                  <div className="w-12 h-[2px] bg-[#C3996B] mb-8 opacity-60" />
                  <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#2D2724] max-w-4xl leading-relaxed italic">
                    &ldquo;{quote.text}&rdquo;
                  </blockquote>
                  <p className="mt-8 text-[#8C827A] uppercase tracking-[0.2em] text-xs font-semibold">
                    &mdash; {quote.author}
                  </p>
                </motion.div>
              );
            }

            items.push(
              <motion.div 
                key={`img-${idx}`}
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

            return items;
          })}
        </div>
      </div>
    </section>
  );
}
