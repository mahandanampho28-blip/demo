import React, { useState } from 'react';
import { Scale, ArrowUp, Phone, Mail, MapPin, Check } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#090e13] text-[#8ea4b8] pt-16 pb-12 border-t border-[#182633] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-[#182633]">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#b48548] flex items-center justify-center bg-[#131d26] text-[#dfb375] shadow-sm">
                <Scale className="w-5 h-5 stroke-[1.75]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-[0.18em] text-[#fdfcf9] leading-none">
                  LEXOVIA
                </span>
                <span className="text-[9px] tracking-[0.28em] text-[#dfb375] uppercase font-semibold mt-1">
                  Lawyer & Attorneys
                </span>
              </div>
            </div>

            <p className="text-xs text-[#8299ac] leading-relaxed max-w-sm font-light">
              Premier legal counsel offering strategic corporate advisory, formidable trial defense, and discrete matrimonial advocacy from Manhattan to international chambers.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="btn-gold px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider shadow cursor-pointer"
              >
                Schedule Private Consultation
              </button>
            </div>
          </div>

          {/* Practice Areas */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-semibold text-white tracking-wider uppercase border-b border-[#1b2b38] pb-2">
              Practice Groups
            </h4>
            <ul className="space-y-2 text-xs text-[#95abc0]">
              <li>
                <a href="#services" className="hover:text-[#dfb375] transition-colors">
                  Corporate Law & Governance
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#dfb375] transition-colors">
                  Criminal Defense & Investigations
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#dfb375] transition-colors">
                  Family Law & High-Net-Worth Estates
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#dfb375] transition-colors">
                  Commercial Real Estate & Title
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#dfb375] transition-colors">
                  Appellate & Supreme Court Advocacy
                </a>
              </li>
            </ul>
          </div>

          {/* Chambers Contact */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-semibold text-white tracking-wider uppercase border-b border-[#1b2b38] pb-2">
              Chambers
            </h4>
            <div className="space-y-2.5 text-xs text-[#95abc0]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#b48548] flex-shrink-0 mt-0.5" />
                <span>450 Lexington Ave, Suite 3400, New York, NY 10017</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#b48548] flex-shrink-0" />
                <span>+123 456 7890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#b48548] flex-shrink-0" />
                <span>info@lexovia.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter / Intelligence Dispatch */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-semibold text-white tracking-wider uppercase border-b border-[#1b2b38] pb-2">
              Chambers Dispatch
            </h4>
            <p className="text-xs text-[#8299ac] font-light leading-relaxed">
              Receive confidential quarterly briefings on landmark appellate rulings, regulatory shifts, and corporate statutes.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-950/60 border border-emerald-700 text-emerald-300 text-xs rounded-lg flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Subscribed to Chambers Dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter executive email..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#121c25] border border-[#213344] text-xs text-white placeholder-[#546b80] focus:border-[#b48548] focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 rounded-lg bg-[#182633] hover:bg-[#b48548] hover:text-white text-xs font-semibold text-[#dfb375] border border-[#273c50] transition-colors cursor-pointer"
                >
                  Join Legal Dispatch
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Legal Disclaimer & Bottom Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#60778c]">
          <p className="text-center md:text-left leading-relaxed">
            © {new Date().getFullYear()} Lexovia Law Firm LLP. All rights reserved. Attorney Advertising: Prior results do not guarantee a similar outcome.
          </p>

          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-[#b48548] transition-colors">Privacy Notice</a>
            <a href="#about" className="hover:text-[#b48548] transition-colors">Terms of Representation</a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-8 h-8 rounded-full bg-[#131e29] hover:bg-[#b48548] hover:text-white text-[#9eb2c5] flex items-center justify-center transition-colors cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
