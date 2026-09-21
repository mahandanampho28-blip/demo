import React from 'react';
import { motion } from 'motion/react';
import { X, Award, Shield, BookOpen, Scale, ArrowRight } from 'lucide-react';

interface MoreAboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConsultationClick: () => void;
}

export const MoreAboutModal: React.FC<MoreAboutModalProps> = ({
  isOpen,
  onClose,
  onConsultationClick,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-2xl bg-[#0f171e] text-white border border-[#b48548]/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="bg-[#14202c] border-b border-[#203140] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#b48548]/20 border border-[#dfb375] flex items-center justify-center text-[#dfb375]">
              <Scale className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-white">
                The Lexovia Heritage
              </h3>
              <p className="text-[11px] text-[#dfb375] tracking-wider uppercase">
                Established 1998 • Lexington Avenue, New York
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close firm history"
            className="w-8 h-8 rounded-full bg-[#1b2b3a] hover:bg-[#253a4e] text-[#9fb1c1] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-[#cbd8e6]">
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-2">
              A Quarter Century of Unwavering Advocacy
            </h4>
            <p className="text-xs sm:text-sm leading-relaxed font-light">
              Founded on the belief that profound legal mastery must be accompanied by absolute tactical discipline, Lexovia has defended industry titans, entrepreneurs, and families in high-stakes controversies across New York, Washington D.C., and international jurisdictions.
            </p>
          </div>

          {/* 3 Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-[#14222f] border border-[#223547]">
              <Award className="w-5 h-5 text-[#dfb375] mb-2" />
              <h5 className="font-serif text-sm font-semibold text-white mb-1">Trial Readiness</h5>
              <p className="text-[11px] text-[#8ea4b8] leading-normal">
                Every case is prepared as if going to trial on day one, shifting settlement leverage immediately in your favor.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#14222f] border border-[#223547]">
              <Shield className="w-5 h-5 text-[#dfb375] mb-2" />
              <h5 className="font-serif text-sm font-semibold text-white mb-1">Ironclad Discretion</h5>
              <p className="text-[11px] text-[#8ea4b8] leading-normal">
                Discreet containment protocols protecting client public reputation, executive privacy, and brand equity.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#14222f] border border-[#223547]">
              <BookOpen className="w-5 h-5 text-[#dfb375] mb-2" />
              <h5 className="font-serif text-sm font-semibold text-white mb-1">Statutory Insight</h5>
              <p className="text-[11px] text-[#8ea4b8] leading-normal">
                Attorneys with former federal prosecutorial and judicial clerkship background providing unparalleled perspective.
              </p>
            </div>
          </div>

          {/* Verification Statistics */}
          <div className="p-4 rounded-xl bg-[#131d26] border border-[#b48548]/30 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-2xl font-serif font-bold text-[#dfb375]">98%</span>
              <span className="text-xs text-[#8ea4b8] block">Trial & Settlement Success Rate</span>
            </div>
            <div>
              <span className="text-2xl font-serif font-bold text-white">$2.8B+</span>
              <span className="text-xs text-[#8ea4b8] block">Corporate & Dispute Value Handled</span>
            </div>
            <div>
              <span className="text-2xl font-serif font-bold text-[#dfb375]">40+</span>
              <span className="text-xs text-[#8ea4b8] block">Specialized Litigators & Counsel</span>
            </div>
          </div>

          {/* Action */}
          <div className="pt-2 flex justify-end">
            <button
              onClick={() => {
                onClose();
                onConsultationClick();
              }}
              className="btn-gold px-6 py-3 rounded-full text-xs font-semibold tracking-wider flex items-center gap-2 shadow cursor-pointer"
            >
              <span>Schedule Strategic Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
