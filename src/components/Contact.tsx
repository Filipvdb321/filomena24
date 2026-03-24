"use client";

import { motion } from 'framer-motion';
import { PropertyData } from '@/lib/content';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact({ data }: { data: PropertyData }) {
  return (
    <section className="py-32 bg-gradient-to-b from-[#EBE4DD]/40 to-[#1A1614] text-[#FCFAF8] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A1614] opacity-90" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row justify-between items-center gap-16 mt-16">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <div className="w-12 h-1 bg-[#C3996B] mb-8" />
          <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">Plan een exclusief bezoek</h2>
          <p className="text-lg md:text-xl font-light text-[#EBE4DD]/80 max-w-lg leading-relaxed">
            Laat je verrassen door de unieke sfeer van deze Zurenborgklassieker. Wij staan klaar om met jou door dit warme thuis te wandelen.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-8 w-full md:w-auto bg-[#FCFAF8] text-[#2D2724] p-10 md:p-14 rounded-2xl shadow-2xl"
        >
          {data.images && data.images[1] && (
            <div className="flex items-center gap-6 mb-2 pb-8 border-b border-[#EBE4DD]">
              <img src={data.images[1]} alt={data.agent_name} className="w-20 h-20 rounded-full object-cover border border-[#C3996B]/30 shadow-sm" />
              <div>
                <p className="text-[#8C827A] text-xs uppercase tracking-widest font-semibold mb-1">Uw Makelaar</p>
                <p className="text-2xl font-serif text-[#1A1614]">{data.agent_name}</p>
              </div>
            </div>
          )}

          <motion.a whileHover={{ x: 8 }} href={"tel:" + data.agent_phone.replace(/\s/g, '')} className="flex items-center gap-6 group">
            <div className="w-14 h-14 rounded-full border border-[#C3996B] flex items-center justify-center bg-[#FCFAF8] group-hover:bg-[#C3996B] transition-colors duration-300 shadow-sm shadow-[#C3996B]/20">
              <Phone className="w-6 h-6 text-[#C3996B] group-hover:text-[#FCFAF8] transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-[#8C827A] uppercase tracking-widest font-semibold mb-1">Bel {data.agent_name.split(' ')[0]}</span>
              <span className="text-2xl font-light text-[#1A1614] group-hover:text-[#C3996B] transition-colors">{data.agent_phone}</span>
            </div>
          </motion.a>
          
          <motion.a whileHover={{ x: 8 }} href={"mailto:" + data.agent_email} className="flex items-center gap-6 group">
            <div className="w-14 h-14 rounded-full border border-[#C3996B] flex items-center justify-center bg-[#FCFAF8] group-hover:bg-[#C3996B] transition-colors duration-300 shadow-sm shadow-[#C3996B]/20">
              <Mail className="w-6 h-6 text-[#C3996B] group-hover:text-[#FCFAF8] transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-[#8C827A] uppercase tracking-widest font-semibold mb-1">Mail ons</span>
              <span className="text-2xl font-light text-[#1A1614] group-hover:text-[#C3996B] transition-colors">{data.agent_email}</span>
            </div>
          </motion.a>
          
          <div className="flex items-center gap-6 mt-4 pt-8 border-t border-[#EBE4DD]">
            <div className="w-14 h-14 flex items-center justify-center">
              <MapPin className="w-7 h-7 text-[#C3996B]" />
            </div>
            <span className="text-lg font-light text-[#4A423D]">{data.address}</span>
          </div>
        </motion.div>
      </div>
      
      <footer suppressHydrationWarning className="mt-32 text-center text-sm font-light text-[#EBE4DD]/40 relative z-10">
        &copy; {new Date().getFullYear()} UGLY Real Estate &mdash; Premium Presentation
      </footer>
    </section>
  );
}
