"use client";

import { MapPin, Phone, Clock, Facebook, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function LocationMap() {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Visit Our Shop
            </h2>
            <p className="text-slate-600 text-lg mb-10">
              Ready na ba ang labada? Drop by our store in Cabanatuan City. 
              We are conveniently located near Avida Town Center.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">Our Location</h3>
                  <p className="text-slate-600 mt-1">
                    Lorenzo Bldg., Avida Town Center<br/>
                    Brgy. Sta. Arcadia, Along E. Emilio Vergara Hwy<br/>
                    Cabanatuan City, Nueva Ecija
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">Operating Hours</h3>
                  <p className="text-slate-600 mt-1">Monday to Sunday</p>
                  <p className="text-primary font-semibold">9:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">Contact Us</h3>
                  <p className="text-slate-600 mt-1">Tawag o text para sa pickup:</p>
                  <a href="tel:09209274185" className="text-2xl font-bold text-primary hover:text-blue-700 transition-colors block mt-1">
                    0920 927 4185
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
               <button className="flex items-center gap-2 bg-[#1877F2] text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-blue-500/25">
                 <Facebook size={20} />
                 Message Us
               </button>
               <button className="flex items-center gap-2 bg-slate-100 text-slate-700 border border-slate-200 px-6 py-3 rounded-xl font-semibold hover:bg-slate-200 transition">
                 <Mail size={20} />
                 Email
               </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-125 w-full bg-slate-100 rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative"
          >
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.606798132845!2d120.9897!3d15.5055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDMwJzE5LjgiTiAxMjDCsDU5JzIyLjkiRQ!5e0!3m2!1sen!2sph!4v1629876543210!5m2!1sen!2sph" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="grayscale hover:grayscale-0 transition-all duration-500"
             ></iframe>
             
             {/* Overlay Badge */}
             <div className="absolute bottom-6 right-6 bg-white px-4 py-2 rounded-lg shadow-lg text-xs font-bold text-slate-600">
                📍 Avida Town Center
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}