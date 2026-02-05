import { Facebook, Instagram, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Brand */}
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-2xl font-bold text-white mb-4 block">
              ROLYO<span className="text-cyan-500">.</span>
            </a>
            <p className="text-slate-400 max-w-sm mb-6">
              Your trusted laundry partner in Cabanatuan City. Kami ang bahala sa labada mo, para may time ka sa mas importanteng bagay.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#hero" className="hover:text-cyan-400 transition">Home</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition">Services</a></li>
              <li><a href="#location" className="hover:text-cyan-400 transition">Location</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-500 shrink-0 mt-1" />
                <span className="text-sm">Lorenzo Bldg., Avida Town Center, Cabanatuan City</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-500 shrink-0" />
                <span className="text-sm">0920 927 4185</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Copyright & Credits */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Rolyo Laundry Services. All rights reserved.</p>
          
          <p className="flex items-center gap-1">
            Designed & Built by 
            <a 
              href="https://github.com/Crl0sDEV" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-500 hover:text-cyan-400 font-medium transition"
            >
              Carlos Miguel Sandrino
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}