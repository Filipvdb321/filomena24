"use client";

import { motion } from 'framer-motion';
import { PropertyData } from '@/lib/content';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact({ data }: { data: PropertyData }) {
  return (
    <section className="py-24 max-w-4xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[#2D2724] text-[#EBE4DD] rounded-2xl p-8 md:p-16 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-[#C3996B]" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Interesse?</h2>
            <p className="text-lg font-light text-[#EBE4DD]/80 max-w-md">
              Neem contact met ons op voor een bezichtiging of meer informatie over deze Zurenborgklassieker.
            </p>
          </div>
          
          <div className="flex flex-col gap-6 w-full md:w-auto">
            <a href={"tel:" + data.agent_phone.replace(/\\s/g, '')} className="flex items-center gap-4 hover:text-[#C3996B] transition group">
              <div className="w-12 h-12 rounded-full border border-[#C3996B]/30 flex items-center justify-center group-hover:bg-[#C3996B]/10">
                <Phone className="w-5 h-5 text-[#C3996B]" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-[#EBE4DD]/50 uppercase tracking-widest">Bel {data.agent_name.split(' ')[0]}</span>
                <span className="text-xl font-light">{data.agent_phone}</span>
              </div>
            </a>
            
            <a href={"mailto:" + data.agent_email} className="flex items-center gap-4 hover:text-[#C3996B] transition group">
              <div className="w-12 h-12 rounded-full border border-[#C3996B]/30 flex items-center justify-center group-hover:bg-[#C3996B]/10">
                <Mail className="w-5 h-5 text-[#C3996B]" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-[#EBE4DD]/50 uppercase tracking-widest">Mail ons</span>
                <span className="text-xl font-light">{data.agent_email}</span>
              </div>
            </a>
            
            <div className="flex items-center gap-4 group mt-2 pt-6 border-t border-[#EBE4DD]/10">
              <div className="w-12 h-12 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#EBE4DD]/50" />
              </div>
              <span className="text-md font-light text-[#EBE4DD]/70">{data.address}</span>
            </div>
          </div>
        </div>
      </motion.div>
      
      <footer className="mt-24 text-center text-sm text-[#2D2724]/40">
        &copy; {new Date().getFullYear()} UGLY Real Estate &mdash; {data.address}
      </footer>
    </section>
  );
}
