import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function QualityPromiseSection() {
  return (
    <section className="relative py-20 bg-[#071326] text-white border-t border-slate-800 overflow-hidden select-none">
      {/* Dark Background Overlay with subtle plant facility depth */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/about-facility.jpg"
          alt="Brixion Plant Depth Background"
          className="w-full h-full object-cover filter brightness-[0.25] contrast-120 opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040B18] via-[#040B18]/90 to-[#040B18]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between">
          
          {/* Left Headline & Text */}
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#0088ff] animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-widest text-[#38BDF8] uppercase">
                QUALITY PROMISE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase font-heading">
              <span className="!text-white font-black drop-shadow-md">BUILT AROUND </span>
              <span className="text-[#0070f3] drop-shadow-[0_0_20px_rgba(0,112,243,0.6)]">CONSISTENCY.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-normal opacity-95">
              From product dimensions to surface finish, Brixion focuses on delivering Fly Ash Bricks suited to modern construction requirements.
            </p>
          </div>

          {/* Right Button */}
          <div className="lg:col-span-4 flex lg:justify-end pt-2 lg:pt-0">
            <Link
              to="/products"
              className="px-8 py-4 bg-gradient-to-r from-[#0070f3] via-[#0085FF] to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-[0_8px_25px_rgba(0,112,243,0.5)] inline-flex items-center gap-3 transition-all duration-200 group active:scale-95 border border-blue-400/30"
            >
              <span>EXPLORE FLY ASH BRICKS</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
