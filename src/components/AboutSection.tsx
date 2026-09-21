import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check, Scale } from 'lucide-react';

interface AboutSectionProps {
  onMoreAboutClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onMoreAboutClick }) => {
  const checklist = [
    'Committed to excellence in legal practice',
    'Act with honesty and uphold ethical principles',
    'Proven track record with 98% courtroom success',
    "Meeting clients' needs is our uncompromising priority",
  ];

  return (
    <section id="about" className="relative bg-[#faf8f4] text-[#1c2430] py-20 sm:py-28 overflow-hidden">
      {/* Subtle organic guilloche / wave texture background */}
      <div className="absolute inset-0 bg-guilloche opacity-40 pointer-events-none" />

      {/* Line art gavel watermark in lower right corner matching screenshot */}
      <div className="absolute right-4 sm:right-16 bottom-8 w-48 sm:w-72 h-48 sm:h-72 opacity-[0.07] pointer-events-none select-none">
        <svg viewBox="0 0 200 200" className="w-full h-full stroke-[#9e7138] fill-none stroke-[1.2]">
          {/* Gavel Head */}
          <rect x="70" y="45" width="60" height="28" rx="5" transform="rotate(-35 100 59)" />
          <rect x="65" y="48" width="8" height="22" rx="2" transform="rotate(-35 100 59)" />
          <rect x="127" y="48" width="8" height="22" rx="2" transform="rotate(-35 100 59)" />
          {/* Gavel Handle */}
          <path d="M96 66 L155 150" strokeWidth="6" strokeLinecap="round" />
          {/* Sound Block */}
          <ellipse cx="60" cy="140" rx="35" ry="12" />
          <ellipse cx="60" cy="147" rx="35" ry="12" />
          <path d="M25 140 L25 147 M95 140 L95 147" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Dual Arched Frames & Rotating Vintage Stamp */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <div className="relative flex items-end gap-3 sm:gap-4 max-w-[420px] w-full">
              
              {/* Arch 1 (Left): Scales of Justice & Gavel */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="w-1/2 relative"
              >
                <div className="relative rounded-t-[140px] sm:rounded-t-[170px] rounded-b-xl overflow-hidden border-2 border-[#b48548] shadow-xl aspect-[9/15] bg-[#1a2530]">
                  <img
                    src="/src/assets/images/about_gavel_scales_1790019936082.jpg"
                    alt="Scales of Justice and Judge's Gavel"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>

              {/* Arch 2 (Right): Attorney at Executive Desk with Books */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="w-1/2 relative"
              >
                <div className="relative rounded-t-[140px] sm:rounded-t-[170px] rounded-b-xl overflow-hidden border-2 border-[#b48548] shadow-xl aspect-[9/14] bg-[#1a2530]">
                  <img
                    src="/src/assets/images/about_attorney_desk_1790019948907.jpg"
                    alt="Lexovia Attorney at Desk with Law Books"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>

              {/* Vintage Rotating Circular Badge Stamp matching screenshot */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20"
              >
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#fdfcf9] border-2 border-[#b48548] p-1 shadow-2xl flex items-center justify-center cursor-pointer group hover:border-[#9e7138] transition-colors">
                  {/* Rotating Circular Text SVG */}
                  <svg
                    className="w-full h-full animate-spin-stamp"
                    viewBox="0 0 100 100"
                  >
                    <defs>
                      <path
                        id="circlePath"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      />
                    </defs>
                    <text className="text-[9.5px] font-bold tracking-[0.24em] uppercase fill-[#6c512d]">
                      <textPath href="#circlePath" startOffset="0%">
                        • MORE ABOUT US • LEXOVIA •
                      </textPath>
                    </text>
                  </svg>

                  {/* Center Emblem */}
                  <div className="absolute inset-0 m-auto w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#faf5ec] border border-[#b48548]/60 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    <Scale className="w-5 h-5 sm:w-6 sm:h-6 text-[#b48548]" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Narrative & Checklist matching screenshot */}
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            {/* Tagline Badge matching screenshot: •— Your Legal Shield —• */}
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#b48548] font-medium mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b48548]" />
              <span className="w-6 h-[1px] bg-[#b48548]" />
              <span className="font-serif italic capitalize tracking-widest text-sm text-[#9e7138]">
                Your Legal Shield
              </span>
              <span className="w-6 h-[1px] bg-[#b48548]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#b48548]" />
            </div>

            {/* Headline matching screenshot: A Legacy Of Legal Excellence */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.18] tracking-tight text-[#111822]">
              A Legacy Of Legal Excellence
            </h2>

            <p className="mt-5 text-[#516171] text-sm sm:text-base leading-relaxed font-normal">
              Our team of experienced attorneys has a diverse range of expertise,
              covering a wide spectrum of legal areas. We specialize in corporate law,
              family law, white-collar defense, and high-value real estate litigation.
            </p>

            {/* Checklist with bronze checkmarks matching screenshot */}
            <div className="mt-7 space-y-3.5 w-full">
              {checklist.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#c99852] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-[#2b3947]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* More About Button matching screenshot */}
            <div className="mt-8">
              <button
                onClick={onMoreAboutClick}
                className="btn-gold px-7 py-3 rounded-full text-xs font-semibold tracking-wider flex items-center gap-2.5 shadow-md cursor-pointer hover:shadow-lg group"
              >
                <span>More About</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
