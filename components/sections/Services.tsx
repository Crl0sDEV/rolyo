"use client";

import { motion, Variants } from "framer-motion";
import { Shirt, Truck, Layers, Sparkles, Clock, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: <Shirt className="w-6 h-6" />,
    title: "Wash-Dry-Fold",
    description: "Complete care for your everyday clothes. Hihiwalayin namin ang puti sa de-color, lalabhan, tutupiin, at ready-to-wear na pagbalik sa'yo.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Comforter & Bulky",
    description: "May special heavy-duty machines kami para sa comforter, bedsheets, curtains, at seat covers. Siguradong malalim ang linis.",
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Pickup & Delivery",
    description: "Busy sa work o business? Kami na ang kukuha ng labada mo at ihahatid namin pabalik sa doorstep mo. Hassle-free!",
    color: "bg-indigo-100 text-indigo-600",
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring", 
      stiffness: 50 
    } 
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Premium Services
          </h2>
          <p className="text-slate-600 text-lg">
            Hindi lang basta laba. We give your clothes the professional care they deserve using modern equipment and premium detergents.
          </p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20 pt-10 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
                { label: "Premium Detergents", icon: Sparkles },
                { label: "Express Service", icon: Clock },
                { label: "Hygiene Guaranteed", icon: ShieldCheck },
                { label: "Lost & Found Safe", icon: Layers },
            ].map((feat, i) => (
                <div key={i} className="flex flex-col items-center gap-2 text-slate-600">
                    <feat.icon className="w-6 h-6 text-blue-400" />
                    <span className="font-medium text-sm">{feat.label}</span>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
}