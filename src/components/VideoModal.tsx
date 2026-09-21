import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, Shield, Calendar } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookConsultation: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  onBookConsultation,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(18);

  useEffect(() => {
    let interval: any;
    if (isPlaying && isOpen) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isPlaying, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-4xl bg-[#0b1219] text-white border border-[#b48548]/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Top Bar */}
        <div className="bg-[#121c25] border-b border-[#213242] px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#dfb375]" />
            <span className="font-serif text-sm font-semibold tracking-wide text-[#fdfcf9]">
              Navigating the Law : The Lexovia Standard of Defense
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close video player"
            className="w-8 h-8 rounded-full bg-[#1a2734] hover:bg-[#273a4d] text-[#9fb1c1] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Canvas Simulation */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden group">
          <img
            src="/src/assets/images/process_meeting_1790019961475.jpg"
            alt="Lawyers inside conference room"
            className={`w-full h-full object-cover transition-transform duration-1000 ${
              isPlaying ? 'scale-105' : 'scale-100'
            }`}
            referrerPolicy="no-referrer"
          />

          {/* Cinematic dark overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

          {/* Live Subtitle Overlay */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 bg-[#090f14]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#b48548]/30 text-[11px] text-[#dfb375]">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>Chambers Briefing • 4K HDR</span>
            </div>
            <span className="text-xs text-[#a0b3c6] font-mono">01:42 / 04:18</span>
          </div>

          {/* Subtitle Caption */}
          <div className="absolute bottom-16 left-6 right-6 text-center">
            <div className="inline-block bg-[#0a1117]/85 backdrop-blur-md px-5 py-2 rounded-lg border border-[#b48548]/30 max-w-xl text-xs sm:text-sm text-[#e6eff7] font-serif italic">
              "We examine every clause not just for its immediate reading, but for the evidentiary leverage it affords in negotiation."
            </div>
          </div>

          {/* Play/Pause Large Central Click */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 transition-colors cursor-pointer"
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            {!isPlaying && (
              <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-md text-[#111820] flex items-center justify-center shadow-2xl">
                <Play className="w-8 h-8 fill-current translate-x-1" />
              </div>
            )}
          </button>

          {/* Bottom Player Controls */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 flex flex-col gap-2">
            {/* Progress bar */}
            <div
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const pos = (e.clientX - rect.left) / rect.width;
                setProgress(pos * 100);
              }}
              className="w-full h-1.5 bg-[#334657] hover:h-2.5 rounded-full overflow-hidden cursor-pointer transition-all relative"
            >
              <div
                style={{ width: `${progress}%` }}
                className="h-full bg-gradient-to-r from-[#c79653] to-[#dfb375] rounded-full relative"
              />
            </div>

            {/* Controls Row */}
            <div className="flex items-center justify-between text-xs text-[#a0b3c6]">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>

                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <span className="font-mono text-[11px]">Chapter 2: Tactical Discovery</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    onClose();
                    onBookConsultation();
                  }}
                  className="btn-gold px-3.5 py-1.5 rounded-full text-[11px] font-semibold flex items-center gap-1.5 shadow cursor-pointer"
                >
                  <Calendar className="w-3 h-3" />
                  <span>Book Case Intake</span>
                </button>

                <button
                  onClick={() => {
                    const elem = document.documentElement;
                    if (!document.fullscreenElement) {
                      elem.requestFullscreen?.().catch(() => {});
                    } else {
                      document.exitFullscreen?.().catch(() => {});
                    }
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Chapters Footer Strip */}
        <div className="p-4 bg-[#101821] border-t border-[#1e2e3d] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-[#dfb375] font-semibold">Featured Counsel:</span>
            <span className="text-[#cbd8e6]">Elena Rostova, Managing Partner</span>
          </div>

          <div className="flex items-center gap-4 text-[#8ea4b8]">
            <span className="hover:text-[#dfb375] cursor-pointer" onClick={() => setProgress(5)}>01. Initial Review</span>
            <span className="text-[#334657]">•</span>
            <span className="hover:text-[#dfb375] cursor-pointer" onClick={() => setProgress(45)}>02. Discovery Strategy</span>
            <span className="text-[#334657]">•</span>
            <span className="hover:text-[#dfb375] cursor-pointer" onClick={() => setProgress(80)}>03. Courtroom Advocacy</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
