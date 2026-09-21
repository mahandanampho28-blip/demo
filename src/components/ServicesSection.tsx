import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Scale, Briefcase, Users, Building } from 'lucide-react';
import { PRACTICE_AREAS } from '../data';
import { PracticeArea } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: PracticeArea) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activePageIndex, setActivePageIndex] = useState(1); // 1 = Corporate Law active by default matching picture!

  const getServiceIcon = (iconName: string, isFeatured: boolean) => {
    const iconClass = isFeatured ? 'text-[#dfb375]' : 'text-[#b48548]';
    switch (iconName) {
      case 'gavel':
        return <Scale className={`w-6 h-6 ${iconClass}`} />;
      case 'briefcase':
        return <Briefcase className={`w-6 h-6 ${iconClass}`} />;
      case 'users':
        return <Users className={`w-6 h-6 ${iconClass}`} />;
      case 'building':
        return <Building className={`w-6 h-6 ${iconClass}`} />;
      default:
        return <Scale className={`w-6 h-6 ${iconClass}`} />;
    }
  };

  return (
    <section id="services" className="relative bg-[#fcfbf8] text-[#1c2430] py-20 sm:py-28 overflow-hidden">
      {/* Background subtle guilloche lines */}
      <div className="absolute inset-0 bg-guilloche opacity-35 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header matching screenshot */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          {/* Tagline Badge matching screenshot: •— What We Do —• */}
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#b48548] font-medium mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b48548]" />
            <span className="w-6 h-[1px] bg-[#b48548]" />
            <span className="font-serif italic capitalize tracking-widest text-sm text-[#9e7138]">
              What We Do
            </span>
            <span className="w-6 h-[1px] bg-[#b48548]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#b48548]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.18] tracking-tight text-[#111822]">
            Legal Services We Offer
          </h2>
        </div>

        {/* 4 Cards Grid matching screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRACTICE_AREAS.map((service, index) => {
            const isFeatured = service.featured || index === 1; // Corporate law featured in dark teal matching screenshot

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                onClick={() => {
                  setActivePageIndex(index);
                  onSelectService(service);
                }}
                className={`relative rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer group ${
                  isFeatured
                    ? 'bg-[#182c35] text-white shadow-xl hover:shadow-2xl border-2 border-[#b48548]/40 hover:-translate-y-1.5'
                    : 'bg-white text-[#1f2937] shadow-sm hover:shadow-lg border border-[#e8dfcf] hover:-translate-y-1.5'
                }`}
              >
                <div>
                  {/* Icon Circle */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
                      isFeatured
                        ? 'bg-[#223945] border border-[#dfb375]/40 shadow-inner'
                        : 'bg-[#faf4e8] border border-[#b48548]/20'
                    }`}
                  >
                    {getServiceIcon(service.iconName, isFeatured)}
                  </div>

                  {/* Service Title */}
                  <h3
                    className={`font-serif text-xl font-bold tracking-tight mb-3 ${
                      isFeatured ? 'text-[#fdfcf9]' : 'text-[#111820]'
                    }`}
                  >
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p
                    className={`text-xs sm:text-[13px] leading-relaxed font-light ${
                      isFeatured ? 'text-[#a5b8c7]' : 'text-[#64748b]'
                    }`}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Read More Link matching screenshot */}
                <div className="mt-8 pt-4 border-t border-dashed border-opacity-20 border-current flex items-center justify-between">
                  <span
                    className={`text-xs font-semibold tracking-wider flex items-center gap-1.5 group-hover:gap-2.5 transition-all ${
                      isFeatured ? 'text-[#dfb375]' : 'text-[#b48548]'
                    }`}
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>

                  <span
                    className={`text-[10px] uppercase tracking-widest font-mono ${
                      isFeatured ? 'text-[#879fab]' : 'text-[#94a3b8]'
                    }`}
                  >
                    0{index + 1}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pagination Dots matching screenshot: o • o o */}
        <div className="mt-12 flex items-center justify-center gap-2.5">
          {PRACTICE_AREAS.map((_, index) => (
            <button
              key={index}
              onClick={() => setActivePageIndex(index)}
              aria-label={`View service card ${index + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                activePageIndex === index
                  ? 'w-7 h-2 bg-[#b48548]'
                  : 'w-2 h-2 bg-[#d6ccb9] hover:bg-[#b48548]/60'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
