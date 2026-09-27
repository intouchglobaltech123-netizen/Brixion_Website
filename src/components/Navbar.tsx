import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { companyData } from '../data/company';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/products' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showSolidBg = !isHomePage || isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 select-none ${
        showSolidBg
          ? 'bg-[#040A17]/95 backdrop-blur-md border-b border-slate-800/80 shadow-xl py-0.5'
          : 'bg-gradient-to-b from-[#040A17]/90 via-[#040A17]/40 to-transparent border-none shadow-none'
      }`}
      data-purpose="site-header"
    >
      {/* Subtle blueprint grid matching footer */}
      <div className="absolute inset-0 bg-blueprint-grid-dark opacity-10 pointer-events-none" />
      <div className="absolute -top-12 left-1/3 w-72 h-72 bg-[#0070f3]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 h-16 sm:h-20 flex items-center justify-between relative z-10">
        
        {/* ========================================================= */}
        {/* 1. LEFT 3D EMBLEM LOGO (Standard Refined Navbar Sizing)    */}
        {/* ========================================================= */}
        <div className="flex items-center shrink-0 z-40 relative">
          <Link to="/" className="inline-block group py-1" aria-label="Brixion Home">
            <img
              src="/assets/brixion-logo-transparent.png"
              alt={companyData.name}
              className="h-10 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </Link>
        </div>

        {/* ========================================================= */}
        {/* 2. CENTER NAVIGATION LINKS                                 */}
        {/* ========================================================= */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10 text-slate-200 text-sm lg:text-base mx-auto font-heading tracking-wide" aria-label="Main Navigation" data-purpose="main-navigation">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <div key={link.name} className="relative py-2 flex flex-col items-center">
                <Link
                  to={link.path}
                  aria-current={isActive ? 'page' : undefined}
                  className={`transition-colors duration-200 font-semibold tracking-wide ${
                    isActive
                      ? 'text-[#38BDF8] font-bold'
                      : 'text-slate-200 hover:text-[#38BDF8]'
                  }`}
                >
                  {link.name}
                </Link>
                {/* Active Line Indicator matching footer electric blue */}
                {isActive && (
                  <span className="absolute -bottom-1 w-full h-[2.5px] bg-[#0070f3] rounded-full shadow-[0_0_10px_rgba(0,112,243,0.8)]" />
                )}
              </div>
            );
          })}
        </nav>

        {/* ========================================================= */}
        {/* 3. RIGHT CTA BUTTON: "Get a Quote ->"                      */}
        {/* ========================================================= */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#0070f3] via-[#0085FF] to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-heading font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-[0_4px_20px_rgba(0,112,243,0.5)] transition-all duration-200 group active:scale-95 border border-blue-400/30"
            data-purpose="cta-button"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-800/80 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0070f3]"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={isOpen ? "Close main menu" : "Open main menu"}
          >
            {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div id="mobile-navigation-drawer" className="md:hidden bg-[#040A17] border-t border-slate-800 px-6 py-5 flex flex-col gap-3 text-sm font-medium text-slate-200">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                aria-current={isActive ? 'page' : undefined}
                className={`py-2 transition-colors ${
                  isActive ? 'text-[#38BDF8] font-bold border-l-2 border-[#0070f3] pl-3' : 'hover:text-[#38BDF8]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-slate-800">
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#0070f3] text-white font-bold text-xs uppercase tracking-wider shadow-[0_4px_15px_rgba(0,112,243,0.5)]"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
