import React from 'react';
import { motion } from 'motion/react';
import { X, CheckCircle, Scale, ShieldAlert, Award, ArrowRight, UserCheck } from 'lucide-react';
import { PracticeArea } from '../types';

interface ServiceDetailModalProps {
  service: PracticeArea | null;
  isOpen: boolean;
  onClose: () => void;
  onConsultationClick: (practiceArea: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  isOpen,
  onClose,
  onConsultationClick,
}) => {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-2xl bg-[#0f171e] text-white border border-[#b48548]/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header Strip */}
        <div className="bg-[#14202c] border-b border-[#203140] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#b48548]/20 border border-[#dfb375] flex items-center justify-center text-[#dfb375]">
              <Scale className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-white">
                {service.title}
              </h3>
              <p className="text-[11px] text-[#dfb375] tracking-wider uppercase">
                Lexovia Practice Group Overview
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close practice group overview"
            className="w-8 h-8 rounded-full bg-[#1b2b3a] hover:bg-[#253a4e] text-[#9fb1c1] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Key Metric Highlights */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#14222f] border border-[#213547]">
              <span className="text-[11px] text-[#8ca0b3] uppercase tracking-wider block">Cases Handled</span>
              <span className="font-serif text-2xl font-bold text-white">{service.casesHandled}+</span>
              <span className="text-[11px] text-[#dfb375] block mt-0.5">Across Federal & State Courts</span>
            </div>

            <div className="p-4 rounded-xl bg-[#14222f] border border-[#213547]">
              <span className="text-[11px] text-[#8ca0b3] uppercase tracking-wider block">Performance Benchmark</span>
              <span className="font-serif text-2xl font-bold text-[#dfb375]">{service.statLabel}</span>
              <span className="text-[11px] text-[#8ca0b3] block mt-0.5">Verified Case Record</span>
            </div>
          </div>

          {/* Detailed Narrative */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#dfb375] font-semibold mb-2">
              Practice Group Charter
            </h4>
            <p className="text-sm text-[#cbdbe8] leading-relaxed font-light">
              {service.fullOverview}
            </p>
          </div>

          {/* Focus Areas & Capabilities */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#dfb375] font-semibold mb-3">
              Core Capabilities & Litigation Arenas
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#131d27] border border-[#203140]">
                  <CheckCircle className="w-4 h-4 text-[#dfb375] flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-[#dbe6f0]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lead Attorney */}
          <div className="p-4 rounded-xl bg-[#131d26] border border-[#b48548]/30 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1e2f3e] border border-[#b48548] flex items-center justify-center text-[#dfb375]">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-[#8ca0b3] uppercase tracking-wider block">Practice Chair</span>
                <span className="font-serif text-sm font-semibold text-white">{service.leadAttorney}</span>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onConsultationClick(service.title);
              }}
              className="btn-gold px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider flex items-center gap-2 shadow cursor-pointer"
            >
              <span>Consult On {service.title}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
