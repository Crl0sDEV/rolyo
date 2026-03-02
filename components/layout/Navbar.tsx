"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Location", href: "#location" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-2" // Naging py-2 (mas manipis)
          : "bg-transparent py-4" // Naging py-4 (imbes na py-6)
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* LOGO */}
          <a href="#" className="relative flex items-center">
            <Image 
                src="/rolyo-logo.png" 
                alt="Rolyo Laundry Services" 
                width={250} 
                height={100} 
                className="h-14 md:h-16 w-auto object-contain transition-all duration-300"
                priority    
            />
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <button className="bg-primary hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-lg hover:shadow-blue-500/30 flex items-center gap-2">
              <Phone size={16} />
              Book Pickup
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium text-slate-600 hover:text-blue-600 py-2"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-slate-100 my-2" />
              <button className="w-full bg-primary text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2">
                <Phone size={18} />
                Book Pickup Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}