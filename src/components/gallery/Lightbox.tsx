import { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryProject } from '../../types';

interface LightboxProps {
  images: GalleryProject[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const currentProject = images[currentIndex];

  const handleNext = useCallback(() => {
    onNavigate((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  const handlePrev = useCallback(() => {
    onNavigate((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling while open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || !currentProject) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image preview lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#07090B]/95 backdrop-blur-xl animate-fade-in select-none"
    >
      {/* Top Bar with Close button only - NO titles, NO labels, NO captions */}
      <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-end z-20 pointer-events-none">
        <button
          onClick={onClose}
          className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-[#C5A059] text-white hover:text-[#0B0D10] transition-colors focus:outline-none pointer-events-auto shadow-lg"
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Prev Button */}
      <button
        onClick={handlePrev}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-[#C5A059] text-white hover:text-[#0B0D10] border border-white/15 transition-all z-20 focus:outline-none active:scale-95"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-[#C5A059] text-white hover:text-[#0B0D10] border border-white/15 transition-all z-20 focus:outline-none active:scale-95"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      {/* Main Image Container - Pure photograph with watermark, no text overlays */}
      <div className="relative max-w-5xl max-h-[90vh] w-full mx-4 sm:mx-12 flex flex-col items-center justify-center">
        <div className="relative overflow-hidden rounded-xl border border-[#C5A059]/30 shadow-2xl bg-[#07090B] p-2 flex items-center justify-center">
          <img
            src={currentProject.image}
            alt="Smart Homes Architectural Project"
            className="max-h-[82vh] w-auto max-w-full object-contain mx-auto"
          />
        </div>
      </div>
    </div>
  );
};
