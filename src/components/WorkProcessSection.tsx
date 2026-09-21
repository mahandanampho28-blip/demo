import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play, FileText, Search, ShieldCheck } from 'lucide-react';
import { WORK_PROCESS_STEPS } from '../data';

interface WorkProcessSectionProps {
  onPlayVideo: () => void;
  onSelectStep?: (stepIndex: number) => void;
}

export const WorkProcessSection: React.FC<WorkProcessSectionProps> = ({ onPlayVideo }) => {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'file-text':
        return <FileText className="w-4 h-4 text-[#dfb375]" />;
      case 'search':
        return <Search className="w-4 h-4 text-[#dfb375]" />;
      case 'shield-check':
        return <ShieldCheck className="w-4 h-4 text-[#dfb375]" />;
      default:
        return <FileText className="w-4 h-4 text-[#dfb375]" />;
    }
  };

  return (
    <section id="process" className="relative bg-[#0b1219] text-white py-20 sm:py-28 overflow-hidden">
      {/* Dark background lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#b48548]/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#223647]/30 rounded-full blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Heading and 3 Step Cards matching screenshot */}
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            {/* Tagline Badge matching screenshot: •— Work Process —• */}
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#dfb375] font-medium mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#dfb375]" />
              <span className="w-6 h-[1px] bg-[#dfb375]" />
              <span className="font-serif italic capitalize tracking-widest text-sm text-[#e6c28f]">
                Work Process
              </span>
              <span className="w-6 h-[1px] bg-[#dfb375]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#dfb375]" />
            </div>

            {/* Headline matching screenshot: Navigating the Law : Your Assurance of Peace */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.18] tracking-tight text-[#fdfcf9]">
              Navigating the Law : Your Assurance of Peace
            </h2>

            {/* 3 Step Items with Golden Badges */}
            <div className="mt-10 space-y-6 w-full">
              {WORK_PROCESS_STEPS.map((step, index) => {
                const isActive = activeStep === index;

                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    onClick={() => setActiveStep(index)}
                    className={`flex items-start gap-4 sm:gap-5 p-3 sm:p-4 rounded-xl transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#14202b] border border-[#b48548]/50 shadow-lg'
                        : 'hover:bg-[#111a23] border border-transparent'
                    }`}
                  >
                    {/* Golden Circular Badge matching screenshot */}
                    <div className="relative flex-shrink-0 mt-0.5">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#c99852] to-[#8c622f] p-0.5 shadow-md flex items-center justify-center">
                        <div className="w-full h-full rounded-full bg-[#121c25] flex items-center justify-center">
                          {getStepIcon(step.iconName)}
                        </div>
                      </div>
                    </div>

                    {/* Step Title & Description */}
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-serif font-semibold text-white tracking-wide">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-xs sm:text-sm text-[#9fb1c1] leading-relaxed font-light">
                        {step.description}
                      </p>

                      {/* Expandable deliverables if active */}
                      {isActive && (
                        <div className="mt-3 pt-3 border-t border-[#1f2f3e] text-xs text-[#dfb375] space-y-1">
                          {step.deliverables.map((d, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <span className="w-1 h-1 rounded-full bg-[#dfb375]" />
                              <span>{d}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Arched Video Card with Pulsating Play Button */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[440px]"
            >
              {/* Outer Golden Border matching screenshot */}
              <div className="absolute -inset-2.5 border border-[#b48548]/50 rounded-t-[190px] sm:rounded-t-[230px] rounded-b-2xl pointer-events-none" />

              {/* Arched Frame Container */}
              <div className="relative rounded-t-[180px] sm:rounded-t-[220px] rounded-b-xl overflow-hidden shadow-2xl border-2 border-[#b48548] aspect-[4/5] bg-[#162330] group">
                <img
                  src="/src/assets/images/process_meeting_1790019961475.jpg"
                  alt="Attorneys in Consultation at Lexovia"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle dark vignette overlay */}
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors" />

                {/* Center Pulsating Gold Play Button matching screenshot */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={onPlayVideo}
                    aria-label="Play documentary video: Navigating the Law"
                    className="relative cursor-pointer group/btn focus:outline-none"
                  >
                    {/* Pulsating ripple rings */}
                    <span className="absolute -inset-4 rounded-full bg-[#b48548]/30 animate-ping opacity-60" />
                    <span className="absolute -inset-2 rounded-full border-2 border-[#dfb375]/60 animate-pulse" />

                    {/* Main Circular Button with Play Icon */}
                    <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-white/90 backdrop-blur-md text-[#111820] flex items-center justify-center shadow-[0_0_25px_rgba(180,133,72,0.6)] group-hover/btn:scale-110 group-hover/btn:bg-white transition-all">
                      <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-[#111820] text-[#111820] translate-x-0.5" />
                    </div>
                  </button>
                </div>

                {/* Bottom caption bar */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0a1118]/80 backdrop-blur-md border border-[#b48548]/30 rounded-lg py-2.5 px-4 text-center">
                  <span className="text-xs text-[#e6c28f] font-serif tracking-wider">
                    Inside Chambers : The Lexovia Case Evaluation Protocol
                  </span>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
