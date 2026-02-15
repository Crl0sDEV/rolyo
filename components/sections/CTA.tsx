"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-blue-600 relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-400 opacity-20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Pagod sa labada? <br/>
            Relax ka na lang, kami na ang bahala.
          </h2>
          
          <p className="text-blue-100 text-lg md:text-xl mb-10">
            Experience the most convenient laundry service in Cabanatuan. 
            Free pickup around Avida Town Center area!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition shadow-lg flex items-center justify-center gap-2">
              <Phone size={20} />
              Book a Pickup
            </button>
            
            <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition flex items-center justify-center gap-2">
              Visit Shop
              <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}