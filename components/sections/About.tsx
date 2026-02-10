"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: Image Grid (Modern Style) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 aspect-4/5 z-10">
              {/* 👇 Updated Source: Main Image */}
              <Image 
                src="/rolyo-about-2.webp" 
                alt="Clean Laundry Stack"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-white z-20 hidden md:block">
               
               <Image 
                src="/rolyo-about-1.webp" 
                alt="Happy Customer"
                fill
                className="object-cover"
              />
            </div>

            {/* Decor Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/50 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-2">
              About Rolyo Laundry
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Hindi lang basta laba. <br/>
              <span className="text-cyan-600">Alagang kapamilya.</span>
            </h3>
            
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Nagsimula ang Rolyo Laundry Services sa simpleng layunin: ang bigyan ang mga taga-Cabanatuan ng labadang 
              <span className="font-semibold text-slate-800"> mabilis, malinis, at mabango</span>—yung parang ikaw mismo ang naglaba, pero wala nang pagod.
            </p>
            
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Gamit ang aming modernong equipment at premium detergents, sinisigurado namin na bawat damit na dumadaan sa amin ay inaalagaan nang husto. From casual wear to heavy comforters, sagot namin &apos;yan.
            </p>

            {/* Checklist */}
            <div className="space-y-4 mb-10">
              {[
                "Experienced & Trustworthy Staff",
                "High-Quality Detergents & Fabric Conditioners",
                "Clean & Sanitized Facility",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 shrink-0">
                    <CheckCircle2 size={14} strokeWidth={3} />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 border-t border-slate-100 pt-8">
              <div>
                <p className="text-3xl font-bold text-primary">5k+</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">3</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Years Service</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Satisfaction</p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}