import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Scale, Sparkles, ShieldCheck } from 'lucide-react';
import { HERO_SLIDES } from '../data';

interface HeroSectionProps {
  onContactClick: () => void;
  onConsultationClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onContactClick,
  onConsultationClick,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide rotation every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section id="home" className="relative bg-[#0d141b] text-white pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
      {/* Background ambient lighting and subtle scales watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#b48548]/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#2a4556]/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 w-[600px] h-48 bg-[#b48548]/10 blur-[100px]" />
      </div>

      {/* Subtle scales of justice watermark on dark background */}
      <div className="absolute left-8 bottom-6 opacity-[0.04] pointer-events-none select-none">
        <Scale className="w-[420px] h-[420px] stroke-[0.8] text-[#c99852]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Tagline Badge matching screenshot: •— Your Legal Shield —• */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#dfb375] font-medium mb-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#dfb375]" />
              <span className="w-6 h-[1px] bg-[#dfb375]" />
              <span className="font-serif italic capitalize tracking-widest text-sm text-[#e6c28f]">
                {slide.tagline}
              </span>
              <span className="w-6 h-[1px] bg-[#dfb375]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#dfb375]" />
            </motion.div>

            {/* Headline matching screenshot: Experienced Attorneys, Trusted Results */}
            <div className="min-h-[160px] sm:min-h-[180px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.12] tracking-tight text-[#fdfcf9] max-w-xl">
                    {slide.headline}
                  </h1>

                  <p className="mt-6 text-[#9fb1c1] text-sm sm:text-base leading-relaxed max-w-lg font-light">
                    {slide.subtext}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              {/* Contact Us button matching screenshot */}
              <button
                onClick={onContactClick}
                className="btn-gold px-7 py-3 rounded-full text-xs font-semibold tracking-wider flex items-center gap-2.5 shadow-lg group cursor-pointer"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* AI Case Evaluation Button */}
              <button
                onClick={onConsultationClick}
                className="px-6 py-3 rounded-full text-xs font-medium tracking-wide text-[#dfb375] border border-[#dfb375]/40 hover:border-[#dfb375] hover:bg-[#dfb375]/10 flex items-center gap-2 transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#dfb375]" />
                <span>AI Case Assessment</span>
              </button>
            </motion.div>

            {/* Pagination Dots matching screenshot: o • o */}
            <div className="mt-12 flex items-center gap-3">
              {HERO_SLIDES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    currentSlide === index
                      ? 'w-7 h-2 bg-[#b48548]'
                      : 'w-2 h-2 bg-[#334657] hover:bg-[#5b7388]'
                  }`}
                />
              ))}
              <span className="ml-3 text-[11px] uppercase tracking-widest text-[#697f94]">
                0{currentSlide + 1} / 0{HERO_SLIDES.length}
              </span>
            </div>
          </div>

          {/* Right Column: Arched Frame & Attorney Photo */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-full max-w-[340px] sm:max-w-[390px]"
            >
              {/* Decorative Outer Golden Arch Border matching screenshot */}
              <div className="absolute -inset-2.5 sm:-inset-3 border border-[#b48548]/40 rounded-t-[190px] sm:rounded-t-[230px] rounded-b-2xl pointer-events-none" />
              
              {/* Secondary delicate gold frame line */}
              <div className="absolute -inset-1 sm:-inset-1.5 border border-[#dfb375]/20 rounded-t-[185px] sm:rounded-t-[225px] rounded-b-xl pointer-events-none" />

              {/* Main Arched Container holding the Attorney Image */}
              <div className="relative rounded-t-[180px] sm:rounded-t-[220px] rounded-b-xl overflow-hidden bg-[#162330] shadow-2xl border border-[#b48548]/60 aspect-[3/4]">
                <img
                  src="/src/assets/images/hero_attorney_1790019923431.jpg"
                  alt="Senior Attorney at Lexovia Law Firm"
                  className="w-full h-full object-cover object-center filter brightness-[1.02] contrast-[1.03] transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle vignette gradient inside the arch */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d141b]/80 via-transparent to-transparent pointer-events-none" />

                {/* Bottom subtle attorney name badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0e1822]/85 backdrop-blur-md border border-[#b48548]/30 rounded-lg p-3 flex items-center justify-between text-left">
                  <div>
                    <h2 className="font-serif text-sm font-semibold text-white">Elena Rostova, Esq.</h2>
                    <p className="text-[11px] text-[#dfb375] tracking-wide">Managing Partner & Trial Counsel</p>
                  </div>
                  <ShieldCheck className="w-4 h-4 text-[#dfb375]" />
                </div>
              </div>

              {/* Floating Circular Scales of Justice Seal overlapping left edge */}
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-7 sm:-left-9 top-1/2 -translate-y-1/2 z-20"
              >
                <div className="relative w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-[#121c25]/90 border-2 border-[#b48548] p-1.5 shadow-[0_0_30px_rgba(180,133,72,0.4)] flex items-center justify-center backdrop-blur-sm group cursor-pointer hover:border-[#dfb375] transition-colors">
                  <div className="w-full h-full rounded-full border border-dashed border-[#dfb375]/60 flex items-center justify-center bg-gradient-to-br from-[#1a2734] to-[#0c141c]">
                    <Scale className="w-7 h-7 sm:w-8 sm:h-8 text-[#dfb375] group-hover:scale-110 transition-transform" />
                  </div>
                  {/* Subtle pulsing glow ring */}
                  <div className="absolute inset-0 rounded-full border border-[#b48548]/40 animate-ping opacity-25 pointer-events-none" />
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
