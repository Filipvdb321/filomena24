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
        initial={{ opacity: 0, y: 10 }}
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
        <motion.a 
          href="#ontdek"
          whileHover={{ scale: 1.02, backgroundColor: "rgba(195, 153, 107, 1)", letterSpacing: "0.2em" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="inline-block mt-12 px-10 py-4 bg-[#C3996B] shadow-[0_4px_20px_rgba(195,153,107,0.4)] hover:shadow-[0_8px_30px_rgba(195,153,107,0.6)] rounded-none text-[#FCFAF8] transition-all uppercase tracking-widest text-xs font-semibold backdrop-blur-sm"
        >
          Vraagprijs & Dossier Ontdekken
        </motion.a>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 bg-[#1A1614]/80 backdrop-blur-md border-t border-[#FCFAF8]/10 py-6 px-4 z-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-[#EBE4DD] text-sm uppercase tracking-[0.2em] font-light gap-4">
          <div className="flex items-center gap-3">
            <span className="w-4 h-px bg-[#C3996B]"></span>
            {data.bedrooms} Slaapkamers
          </div>
          <div className="flex items-center gap-3">
            <span className="w-4 h-px bg-[#C3996B]"></span>
            {data.living_area}
          </div>
          <div className="flex items-center gap-3">
            <span className="w-4 h-px bg-[#C3996B]"></span>
            EPC: {data.epc}
          </div>
        </div>
      </div>
    </section>
  );
}
