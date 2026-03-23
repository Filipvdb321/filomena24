"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { PropertyData } from '@/lib/content';

export default function Hero({ data }: { data: PropertyData }) {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
           src={data.images[0]} 
           alt="Prachtig herenhuis" 
           fill 
           priority
           className="object-cover object-center" 
           sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D2724]/90 via-black/40 to-black/30 mix-blend-multiply" />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center px-6 max-w-5xl text-[#FCFAF8] mt-16"
      >
        <p className="tracking-[0.25em] text-xs md:text-sm uppercase mb-6 text-[#EBE4DD] drop-shadow-md">
          {data.address}
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] drop-shadow-2xl mb-8">
          {data.title}
        </h1>
        <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-sm md:text-base font-light opacity-90">
          <span>{data.bedrooms} Slaapkamers</span>
          <span className="hidden sm:inline">&middot;</span>
          <span>{data.living_area}</span>
          <span className="hidden sm:inline">&middot;</span>
          <span>EPC: {data.epc}</span>
        </div>
        
        <motion.a 
          href="#ontdek"
          whileHover={{ scale: 1.05, backgroundColor: "rgba(195, 153, 107, 0.9)" }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-12 px-10 py-4 bg-[#C3996B] shadow-[0_4px_20px_rgba(195,153,107,0.4)] hover:shadow-[0_8px_30px_rgba(195,153,107,0.6)] rounded-full text-[#FCFAF8] transition-all duration-300 uppercase tracking-widest text-xs font-semibold"
        >
          Ontdek dit Herenhuis
        </motion.a>
      </motion.div>
    </section>
  );
}
