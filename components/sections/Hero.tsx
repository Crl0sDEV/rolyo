"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Star, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-25 pb-20 lg:pt-35 lg:pb-32 overflow-hidden bg-background">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-[50%] h-[50%] bg-blue-100/50 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE: Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
             {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary text-sm font-semibold mb-6 border border-blue-100 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Now Serving Cabanatuan City
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
              Labada? <br/>
              <span className="text-primary">Kami na ang bahala.</span>
            </h1>
            
            <p className="text-lg text-muted mb-8 max-w-lg leading-relaxed">
              Experience premium laundry care with Rolyo. Mabilis, mabango, at siguradong malinis. We treat your clothes like our own.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold transition-all shadow-lg hover:shadow-blue-500/25 cursor-pointer">
                <MapPin className="w-5 h-5" />
                Visit Shop
              </button>
              <button className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-3.5 rounded-xl font-semibold transition-all cursor-pointer">
                View Services
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <div className="flex -space-x-3">
                {[1,2,3,4].map((i) => (
                   <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 relative overflow-hidden">
                      <Image 
                        src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                        alt="User"
                        fill
                        className="object-cover"
                      />
                   </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="font-medium text-slate-700">Trusted by Locals</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Image Visual */}
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
             className="relative hidden lg:block"
          >
            {/* Main Image Container */}
            {/* Note: Gumamit ako ng aspect-[4/3] sa class, make sure supported ito ng tailwind config mo or use aspect-video/square if not */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-4/3 rotate-1 hover:rotate-0 transition-transform duration-500">
               
               {/* 👇 DITO YUNG PINALITAN NATIN */}
               <Image 
                 src="/rolyo-interior.webp" 
                 alt="Rolyo Laundry Shop Interior"
                 fill
                 className="object-cover"
                 priority // 👈 Added priority for faster loading
               />
               
               {/* Floating Card UI */}
               <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 flex items-center gap-4 animate-bounce-slow">
                   <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                     <Clock size={20} />
                   </div>
                   <div>
                     <p className="font-bold text-slate-900 text-sm">Open Daily</p>
                     <p className="text-xs text-slate-500">9:00 AM - 6:00 PM</p>
                   </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}