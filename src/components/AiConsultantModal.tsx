import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Send, ShieldCheck, Clock, FileCheck, ArrowRight, CheckCircle2, AlertTriangle } from 'lucide-react';
import { AiCaseAnalysis } from '../types';

interface AiConsultantModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedArea?: string;
}

export const AiConsultantModal: React.FC<AiConsultantModalProps> = ({
  isOpen,
  onClose,
  preselectedArea = 'Corporate Law',
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [practiceArea, setPracticeArea] = useState(preselectedArea);
  const [urgency, setUrgency] = useState<'low' | 'medium' | 'urgent'>('medium');
  const [caseSummary, setCaseSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState<AiCaseAnalysis | null>(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Suggested case prompt templates for one-click testing
  const sampleScenarios = [
    {
      label: 'Corporate Contract Breach',
      area: 'Corporate Law',
      urgency: 'urgent' as const,
      text: 'A major enterprise vendor breached our master distribution contract, attempting to withhold $450,000 in escrow and claiming force majeure without documentation.',
    },
    {
      label: 'Federal Grand Jury Inquiry',
      area: 'Criminal Law',
      urgency: 'urgent' as const,
      text: 'Our financial advisory firm received a federal subpoena requesting client transaction records and accounting emails from 2023 without prior notice.',
    },
    {
      label: 'Commercial Lease Dispute',
      area: 'Real Estate Law',
      urgency: 'medium' as const,
      text: 'Our commercial landlord is unilaterally imposing 35% maintenance escalations and threatening eviction despite a 10-year locked lease in Midtown Manhattan.',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!caseSummary.trim()) {
      setErrorMsg('Please describe your case or scenario.');
      return;
    }

    setErrorMsg('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai-consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: fullName.trim() || 'Confidential Inquirer',
          email: email.trim(),
          practiceArea,
          urgency,
          caseSummary,
        }),
      });

      if (!response.ok) {
        throw new Error('Case evaluation failed. Please try again.');
      }

      const data = await response.json();
      if (data.analysis) {
        setAnalysis(data.analysis);
      } else {
        throw new Error('Invalid analysis response format.');
      }
    } catch (err: any) {
      console.error('Case analysis error:', err);
      setErrorMsg(err.message || 'Error processing request.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setAnalysis(null);
    setBookingConfirmed(false);
    setErrorMsg('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 15 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-2xl bg-[#0f171e] text-white border border-[#b48548]/40 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
      >
        {/* Header Strip */}
        <div className="bg-[#14202c] border-b border-[#223547] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#b48548]/20 border border-[#dfb375] flex items-center justify-center text-[#dfb375]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-white tracking-wide">
                Lexovia AI Legal Case Assessment
              </h3>
              <p className="text-[11px] text-[#9fb1c1] tracking-wider">
                Confidential Preliminary Analysis & Strategy Protocol
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-full bg-[#1b2b3a] hover:bg-[#253a4e] text-[#9fb1c1] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {!analysis ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Preset Scenario Quick-Pills */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#dfb375] font-semibold mb-2">
                  Quick Scenario Examples
                </label>
                <div className="flex flex-wrap gap-2">
                  {sampleScenarios.map((sc, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => {
                        setPracticeArea(sc.area);
                        setUrgency(sc.urgency);
                        setCaseSummary(sc.text);
                      }}
                      className="text-xs px-3 py-1.5 rounded-full bg-[#172431] hover:bg-[#22374b] border border-[#2d4359] text-[#c1d1e0] transition-colors cursor-pointer"
                    >
                      {sc.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Client Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#9fb1c1] mb-1">
                    Your Full Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Alexandra Smith"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#14202b] border border-[#263a4e] text-sm text-white placeholder-[#5d7388] focus:border-[#b48548] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#9fb1c1] mb-1">
                    Confidential Email (Optional)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. client@enterprise.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#14202b] border border-[#263a4e] text-sm text-white placeholder-[#5d7388] focus:border-[#b48548] focus:outline-none"
                  />
                </div>
              </div>

              {/* Practice Area & Urgency */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#9fb1c1] mb-1">
                    Primary Legal Category
                  </label>
                  <select
                    value={practiceArea}
                    onChange={(e) => setPracticeArea(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#14202b] border border-[#263a4e] text-sm text-white focus:border-[#b48548] focus:outline-none"
                  >
                    <option value="Corporate Law">Corporate Law & Governance</option>
                    <option value="Criminal Law">Criminal Defense & Investigations</option>
                    <option value="Family Law">Family Law & Marital Estates</option>
                    <option value="Real Estate Law">Real Estate & Land Use</option>
                    <option value="Civil Litigation">Civil & Commercial Litigation</option>
                    <option value="Appellate Law">Appellate & Federal Review</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-[#9fb1c1] mb-1">
                    Urgency Level
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['low', 'medium', 'urgent'] as const).map((lvl) => (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => setUrgency(lvl)}
                        className={`py-2 text-xs rounded-lg capitalize border font-medium transition-all ${
                          urgency === lvl
                            ? 'bg-[#b48548] text-white border-[#dfb375]'
                            : 'bg-[#14202b] text-[#8ea4b8] border-[#223547] hover:border-[#38526d]'
                        }`}
                      >
                        {lvl}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Case Summary */}
              <div>
                <label className="block text-xs text-[#9fb1c1] mb-1">
                  Describe the Key Facts & Current Circumstances *
                </label>
                <textarea
                  required
                  rows={4}
                  value={caseSummary}
                  onChange={(e) => setCaseSummary(e.target.value)}
                  placeholder="Detail the key parties involved, contracts signed, dates, or governmental actions taken..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#14202b] border border-[#263a4e] text-sm text-white placeholder-[#5d7388] focus:border-[#b48548] focus:outline-none leading-relaxed"
                />
              </div>

              {errorMsg && (
                <div className="p-3 bg-red-950/60 border border-red-800 text-red-200 text-xs rounded-lg flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="btn-gold w-full py-3.5 rounded-full text-xs font-semibold tracking-wider flex items-center justify-center gap-2 shadow-lg disabled:opacity-60 cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Analyzing Legal Merits & Precedents...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Run AI Case Assessment</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-[11px] text-[#60778c] text-center italic">
                * Strict attorney-client privilege is preserved. Preliminary intake for assessment only.
              </p>
            </form>
          ) : (
            /* Results Screen */
            <div className="space-y-6 animate-in fade-in duration-300">
              {/* Severity Banner */}
              <div className="p-4 rounded-xl bg-[#14222e] border border-[#b48548]/40 flex items-center justify-between flex-wrap gap-3">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#dfb375] font-mono">
                    Category Identified
                  </span>
                  <h4 className="font-serif text-lg font-bold text-white">
                    {analysis.practiceAreaIdentified}
                  </h4>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#9fb1c1]">Severity Rating:</span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${
                      analysis.severityLevel === 'Critical'
                        ? 'bg-red-900/80 text-red-200 border border-red-700'
                        : analysis.severityLevel === 'Elevated'
                        ? 'bg-amber-900/80 text-amber-200 border border-amber-700'
                        : 'bg-emerald-900/80 text-emerald-200 border border-emerald-700'
                    }`}
                  >
                    {analysis.severityLevel}
                  </span>
                </div>
              </div>

              {/* Assessment Narrative */}
              <div className="p-4 rounded-xl bg-[#121c25] border border-[#223547]">
                <h5 className="text-xs uppercase tracking-wider text-[#dfb375] font-semibold mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#dfb375]" />
                  Preliminary Legal Assessment
                </h5>
                <p className="text-sm text-[#cbdbe8] leading-relaxed font-light">
                  {analysis.preliminaryAssessment}
                </p>
              </div>

              {/* Two Column Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Immediate Action Checklist */}
                <div className="p-4 rounded-xl bg-[#121c25] border border-[#223547]">
                  <h5 className="text-xs uppercase tracking-wider text-[#dfb375] font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#dfb375]" />
                    Recommended Next Steps
                  </h5>
                  <ul className="space-y-2 text-xs text-[#cbdbe8]">
                    {analysis.recommendedActions.map((act, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#b48548] font-bold mt-0.5">•</span>
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Required Documents */}
                <div className="p-4 rounded-xl bg-[#121c25] border border-[#223547]">
                  <h5 className="text-xs uppercase tracking-wider text-[#dfb375] font-semibold mb-3 flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-[#dfb375]" />
                    Required Evidence & Records
                  </h5>
                  <ul className="space-y-2 text-xs text-[#cbdbe8]">
                    {analysis.requiredDocuments.map((doc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#dfb375] font-bold mt-0.5">✓</span>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Timeline & Lead Counsel */}
              <div className="p-4 rounded-xl bg-[#14202b] border border-[#b48548]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] text-[#8da2b5] block">Assigned Senior Counsel</span>
                  <span className="font-serif text-base font-semibold text-[#fdfcf9]">
                    {analysis.attorneyRecommendation}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#dfb375]">
                  <Clock className="w-4 h-4" />
                  <span>Est. Timeline: {analysis.estimatedTimeline}</span>
                </div>
              </div>

              {/* Consultation Confirmation or CTA */}
              {bookingConfirmed ? (
                <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-700 text-emerald-200 text-center space-y-1 animate-in zoom-in-95 duration-200">
                  <CheckCircle2 className="w-8 h-8 mx-auto text-emerald-400 mb-1" />
                  <h4 className="font-serif text-lg font-semibold text-white">Priority Consultation Reserved</h4>
                  <p className="text-xs text-emerald-300">
                    A Lexovia legal intake attorney will review your submitted analysis and contact you within 2 hours.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={() => setBookingConfirmed(true)}
                    className="btn-gold flex-1 py-3 rounded-full text-xs font-semibold tracking-wider flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                  >
                    <span>Confirm Priority Partner Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleReset}
                    className="px-6 py-3 rounded-full text-xs text-[#8ea4b8] hover:text-white border border-[#2b3e52] hover:border-[#486380] transition-colors cursor-pointer"
                  >
                    Evaluate Another Case
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
