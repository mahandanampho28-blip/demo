import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Phone, Mail, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practiceArea: 'Corporate Law',
    preferredDate: '',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-xl bg-[#0f171e] text-white border border-[#b48548]/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
      >
        {/* Header */}
        <div className="bg-[#14202c] border-b border-[#203140] px-6 py-4 flex items-center justify-between">
          <div>
            <h3 className="font-serif text-xl font-bold text-white">
              Connect With Lexovia Chambers
            </h3>
            <p className="text-[11px] text-[#dfb375] tracking-wider uppercase">
              Confidential Consultation & Retainer Inquiries
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close contact dialog"
            className="w-8 h-8 rounded-full bg-[#1b2b3a] hover:bg-[#253a4e] text-[#9fb1c1] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-14 h-14 rounded-full bg-[#17271f] border-2 border-emerald-500 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-semibold text-white">
                Inquiry Logged Securely
              </h4>
              <p className="text-sm text-[#cbdbe8] max-w-md mx-auto leading-relaxed">
                Thank you, {formData.name || 'esteemed client'}. A Lexovia partner has been dispatched your contact file. You will receive an encrypted confirmation and callback within two business hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="btn-gold px-6 py-2.5 rounded-full text-xs font-semibold cursor-pointer"
              >
                Return to Chambers Overview
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#9fb1c1] mb-1">Full Name *</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#14202b] border border-[#263a4e] text-sm text-white focus:border-[#b48548] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#9fb1c1] mb-1">Email Address *</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. client@enterprise.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#14202b] border border-[#263a4e] text-sm text-white focus:border-[#b48548] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#9fb1c1] mb-1">Phone Number *</label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (212) 555-0199"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#14202b] border border-[#263a4e] text-sm text-white focus:border-[#b48548] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#9fb1c1] mb-1">Practice Area</label>
                  <select
                    value={formData.practiceArea}
                    onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#14202b] border border-[#263a4e] text-sm text-white focus:border-[#b48548] focus:outline-none"
                  >
                    <option value="Corporate Law">Corporate Law & M&A</option>
                    <option value="Criminal Law">Criminal & White-Collar Defense</option>
                    <option value="Family Law">Family Law & Matrimonial</option>
                    <option value="Real Estate Law">Real Estate & Commercial</option>
                    <option value="Other">General Inquiries</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs text-[#9fb1c1] mb-1">Preferred Consultation Date (Optional)</label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#14202b] border border-[#263a4e] text-sm text-white focus:border-[#b48548] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs text-[#9fb1c1] mb-1">Matter Overview (Confidential)</label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Summarize the core controversy, parties, or required timeline..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#14202b] border border-[#263a4e] text-sm text-white focus:border-[#b48548] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="btn-gold w-full py-3.5 rounded-full text-xs font-semibold tracking-wider flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Transmit Confidential Inquiry</span>
              </button>

              <div className="pt-2 border-t border-[#1e2f3f] flex flex-col sm:flex-row items-center justify-between text-xs text-[#7e94a8] gap-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#b48548]" />
                  <span>Chambers Line: +123 456 7890</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#b48548]" />
                  <span>24/7 Crisis Hotline Available</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
};
