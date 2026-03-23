"use client";

import { motion } from 'framer-motion';
import { PropertyData } from '@/lib/content';

export default function Hero({ data }: { data: PropertyData }) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${data.images[0]})` }}
      >
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center px-4 max-w-4xl text-[#FCFAF8]"
      >
        <p className="tracking-[0.2em] text-sm md:text-base uppercase mb-4 text-[#EBE4DD] drop-shadow-md">
          {data.address}
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight drop-shadow-xl mb-6">
          {data.title}
        </h1>
        <div className="flex gap-4 justify-center text-lg md:text-xl font-light">
          <span>{data.bedrooms} Slaapkamers</span>
          <span>&middot;</span>
          <span>{data.living_area}</span>
          <span>&middot;</span>
          <span>EPC: {data.epc}</span>
        </div>
        
        <motion.a 
          href="#ontdek"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-12 px-8 py-3 border border-white/50 rounded-full hover:bg-white/10 transition backdrop-blur-sm"
        >
          Ontdek dit Herenhuis
        </motion.a>
      </motion.div>
    </section>
  );
}
