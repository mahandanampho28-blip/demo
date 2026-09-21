import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { WorkProcessSection } from './components/WorkProcessSection';
import { ServicesSection } from './components/ServicesSection';
import { Footer } from './components/Footer';
import { AiConsultantModal } from './components/AiConsultantModal';
import { VideoModal } from './components/VideoModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { MoreAboutModal } from './components/MoreAboutModal';
import { ContactModal } from './components/ContactModal';
import { PracticeArea } from './types';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [moreAboutModalOpen, setMoreAboutModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<PracticeArea | null>(null);
  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  const [consultationPracticeArea, setConsultationPracticeArea] = useState('Corporate Law');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'process', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenConsultation = (area?: string) => {
    if (area) setConsultationPracticeArea(area);
    setConsultationModalOpen(true);
  };

  const handleSelectService = (service: PracticeArea) => {
    setSelectedService(service);
    setServiceModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0f171e] flex flex-col font-sans">
      {/* 1. Top Bar with Contact & Social Icons */}
      <TopBar />

      {/* 2. Main Navigation Header */}
      <Navbar
        activeSection={activeSection}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* 3. Hero Section (Experienced Attorneys, Trusted Results) */}
      <HeroSection
        onContactClick={() => setContactModalOpen(true)}
        onConsultationClick={() => handleOpenConsultation()}
      />

      {/* 4. About Section (A Legacy Of Legal Excellence) */}
      <AboutSection
        onMoreAboutClick={() => setMoreAboutModalOpen(true)}
      />

      {/* 5. Work Process Section (Navigating the Law : Your Assurance of Peace) */}
      <WorkProcessSection
        onPlayVideo={() => setVideoModalOpen(true)}
      />

      {/* 6. Services Section (Legal Services We Offer) */}
      <ServicesSection
        onSelectService={handleSelectService}
      />

      {/* 7. Footer */}
      <Footer
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Floating AI Legal Assistant Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => handleOpenConsultation()}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#101b25] border-2 border-[#b48548] text-[#fdfcf9] shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-[#dfb375] hover:bg-[#182836] transition-all cursor-pointer"
          aria-label="Open AI Legal Assistant"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#dfb375] opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#b48548]" />
          </span>

          <Sparkles className="w-4 h-4 text-[#dfb375] group-hover:rotate-12 transition-transform" />
          <span className="text-xs font-semibold tracking-wider font-serif hidden sm:inline text-[#e6c28f]">
            AI Case Assessment
          </span>
        </button>
      </div>

      {/* Modals */}
      <AiConsultantModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        preselectedArea={consultationPracticeArea}
      />

      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        onBookConsultation={() => {
          setVideoModalOpen(false);
          setConsultationModalOpen(true);
        }}
      />

      <ServiceDetailModal
        service={selectedService}
        isOpen={serviceModalOpen}
        onClose={() => setServiceModalOpen(false)}
        onConsultationClick={(area) => {
          setServiceModalOpen(false);
          handleOpenConsultation(area);
        }}
      />

      <MoreAboutModal
        isOpen={moreAboutModalOpen}
        onClose={() => setMoreAboutModalOpen(false)}
        onConsultationClick={() => {
          setMoreAboutModalOpen(false);
          handleOpenConsultation();
        }}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
