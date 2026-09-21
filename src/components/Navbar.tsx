import React, { useState } from 'react';
import { ArrowRight, ChevronDown, Menu, X, Scale } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'Blog', href: '#blog', id: 'blog' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-[#fdfcf9] border-b border-[#ece6da] shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo matching picture */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border border-[#b48548] flex items-center justify-center bg-[#faf6ee] text-[#b48548] shadow-sm group-hover:scale-105 transition-transform">
            <Scale className="w-5 h-5 stroke-[1.75]" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-[0.18em] text-[#111820] leading-none">
              LEXOVIA
            </span>
            <span className="text-[9px] tracking-[0.28em] text-[#8c6b3f] uppercase font-semibold mt-1">
              Lawyer & Attorneys
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 text-[14px] font-medium text-[#2d3748]">
          <a
            href="#home"
            className={`transition-colors hover:text-[#b48548] ${
              activeSection === 'home' ? 'text-[#b48548] font-semibold' : ''
            }`}
          >
            Home
          </a>
          <a
            href="#about"
            className={`transition-colors hover:text-[#b48548] ${
              activeSection === 'about' ? 'text-[#b48548] font-semibold' : ''
            }`}
          >
            About Us
          </a>
          <a
            href="#services"
            className={`transition-colors hover:text-[#b48548] ${
              activeSection === 'services' ? 'text-[#b48548] font-semibold' : ''
            }`}
          >
            Services
          </a>

          {/* Shop Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShopDropdownOpen(!shopDropdownOpen)}
              onMouseEnter={() => setShopDropdownOpen(true)}
              className="flex items-center gap-1 hover:text-[#b48548] transition-colors focus:outline-none"
            >
              <span>Shop</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${shopDropdownOpen ? 'rotate-180 text-[#b48548]' : ''}`} />
            </button>

            {shopDropdownOpen && (
              <div
                onMouseLeave={() => setShopDropdownOpen(false)}
                className="absolute left-0 mt-2 w-52 bg-white rounded-md shadow-xl border border-[#ede5d8] py-2 z-50 text-xs text-[#334155] animate-in fade-in slide-in-from-top-2 duration-150"
              >
                <a href="#services" className="block px-4 py-2 hover:bg-[#faf7f0] hover:text-[#b48548]">
                  Legal Document Templates
                </a>
                <a href="#services" className="block px-4 py-2 hover:bg-[#faf7f0] hover:text-[#b48548]">
                  Corporate Retainer Plans
                </a>
                <a href="#services" className="block px-4 py-2 hover:bg-[#faf7f0] hover:text-[#b48548]">
                  Compliance Handbooks
                </a>
              </div>
            )}
          </div>

          <a
            href="#process"
            className={`transition-colors hover:text-[#b48548] ${
              activeSection === 'process' ? 'text-[#b48548] font-semibold' : ''
            }`}
          >
            Process
          </a>

          <a
            href="#contact"
            className={`transition-colors hover:text-[#b48548] ${
              activeSection === 'contact' ? 'text-[#b48548] font-semibold' : ''
            }`}
          >
            Contact
          </a>
        </div>

        {/* Free Consultation Button matching the pill button in screenshot */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onOpenConsultation}
            className="btn-gold px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider flex items-center gap-2 shadow-md cursor-pointer hover:shadow-lg transition-all"
          >
            <span>Free Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          className="lg:hidden p-2 text-[#1a202c] hover:text-[#b48548] transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fdfcf9] border-t border-[#ece6da] px-6 py-5 flex flex-col gap-4 text-sm font-medium animate-in fade-in duration-200">
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-[#2d3748] hover:text-[#b48548] transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="btn-gold w-full py-3 rounded-full text-xs font-semibold tracking-wider flex items-center justify-center gap-2 shadow-md"
            >
              <span>Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
