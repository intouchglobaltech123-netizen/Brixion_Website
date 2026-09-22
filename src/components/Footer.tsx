import { Link } from 'react-router-dom';
import {
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  ChevronRight,
  MapPin,
  Phone,
} from 'lucide-react';
import { companyData } from '../data/company';

export default function Footer() {
  return (
    <footer className="bg-[#040A17] text-slate-300 relative overflow-hidden select-none border-t border-slate-800/80" data-purpose="site-footer">
      {/* Subtle blueprint grid & dark gradient background */}
      <div className="absolute inset-0 bg-blueprint-grid-dark opacity-10 pointer-events-none" />
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Banner Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* 1. BRAND COLUMN */}
          <div className="md:col-span-5 lg:col-span-4 space-y-4 md:pr-6 md:border-r border-slate-800/70">
            <Link to="/" className="inline-block group" aria-label="Brixion Home">
              <img
                src={companyData.transparentLogoPath}
                alt={companyData.name}
                className="h-16 sm:h-20 w-auto object-contain drop-shadow-[0_8px_24px_rgba(0,140,255,0.35)] transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <div className="space-y-2 pt-1">
              <div className="!text-white font-extrabold tracking-[0.15em] text-xs uppercase sm:text-sm font-heading">
                BUILD STRONG. BUILD SMART. CHOOSE BRIXION BRICKS.
              </div>
              <div className="w-12 h-[2.5px] bg-[#0070f3] rounded-full shadow-[0_0_10px_rgba(0,112,243,0.8)]" />
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm pt-1 font-normal opacity-90">
              Brixion Bricks and Blocks LLP manufactures Fly Ash Bricks for general construction requirements.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              {[
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Youtube, href: '#', label: 'YouTube' },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    className="w-8 h-8 rounded-full border border-slate-700/80 bg-slate-900/60 hover:bg-[#0070f3] hover:border-[#0070f3] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* 2. QUICK LINKS */}
          <div className="md:col-span-3 lg:col-span-2 space-y-3.5 md:px-4 md:border-r border-slate-800/70">
            <div className="text-xs font-bold !text-white uppercase tracking-wider font-heading">
              Quick Links
            </div>
            <ul className="space-y-2 text-xs font-medium pt-1">
              {[
                { name: 'HOME', path: '/' },
                { name: 'ABOUT US', path: '/about' },
                { name: 'SERVICES', path: '/products' },
                { name: 'CONTACT', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-white text-slate-400 hover:text-[#38BDF8] transition-colors flex items-center gap-1.5 uppercase font-mono tracking-wider text-[11px]"
                  >
                    <ChevronRight className="w-3 h-3 text-[#0070f3]" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. OUR PRODUCT */}
          <div className="md:col-span-4 lg:col-span-2 space-y-3.5 md:px-4 md:border-r border-slate-800/70">
            <div className="text-xs font-bold !text-white uppercase tracking-wider font-heading">
              Our Product
            </div>
            <ul className="space-y-2 text-xs text-slate-400 pt-1">
              <li>
                <Link to="/products" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 uppercase font-mono tracking-wider text-[11px]">
                  <ChevronRight className="w-3 h-3 text-[#0070f3]" />
                  <span>FLY ASH BRICKS</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. CONTACT */}
          <div className="md:col-span-6 lg:col-span-4 space-y-3.5 md:px-4">
            <div className="text-xs font-bold !text-white uppercase tracking-wider font-heading">
              Contact
            </div>
            <ul className="space-y-3 text-xs text-slate-300 pt-1">
              <li className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-full bg-[#0070f3]/20 text-[#38BDF8] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="text-slate-300 leading-tight font-medium">
                  Muthalipalayam, Arasur,<br />Coimbatore, Tamil Nadu – 641 407
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-[#0070f3]/20 text-[#38BDF8] flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col space-y-0.5">
                  <a href="tel:9363012813" className="hover:text-white transition-colors font-mono font-medium">
                    9363012813
                  </a>
                  <a href="tel:9361923622" className="hover:text-white transition-colors font-mono font-medium">
                    9361923622
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Far Right Angled Stacked Blocks Graphic Accent */}
      <div className="absolute top-0 bottom-0 right-0 w-[22%] md:w-[26%] lg:w-[28%] pointer-events-none hidden lg:block z-0 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-full [clip-path:polygon(32%_0,100%_0,100%_100%,0_100%)] overflow-hidden">
          <img
            alt="Stacked Concrete Blocks"
            className="w-full h-full object-cover object-right filter brightness-90 contrast-105"
            src="/assets/nav/nav-construction-bg.jpg"
          />
          {/* Diagonal Neon Blue Edge Accent */}
          <div className="absolute inset-y-0 left-0 w-1.5 bg-[#0070f3] shadow-[0_0_15px_rgba(0,112,243,1)]" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#040A17]/30 to-[#040A17]" />
        </div>
      </div>

      {/* Bottom Horizontal Line & Copyright Bar */}
      <div className="border-t border-slate-800/80 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 font-medium">
          <p>© Brixion Bricks and Blocks LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
