import { useState } from 'react';
import { Maximize2, ShieldCheck } from 'lucide-react';
import { GALLERY_PROJECTS } from '../data/companyData';
import { Lightbox } from '../components/gallery/Lightbox';

export const GalleryPage: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="flex flex-col w-full overflow-hidden pt-20">
      {/* ============================================================ */}
      {/* 1. HERO BANNER - CINEMATIC LEFT-TO-RIGHT GRADIENT, NO TEXT BOX */}
      {/* ============================================================ */}
      <section className="relative min-h-[48vh] sm:min-h-[52vh] flex items-center justify-start py-16 bg-[#0B0D10] border-b border-white/10 overflow-hidden">
        {/* Architectural Project Photography - Bright & Clear */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/hero-gallery.jpg"
            alt="Visually Impressive Completed Architectural Project"
            className="w-full h-full object-cover object-center"
          />
          {/* Cinematic Left-to-Right Dark Gradient */}
          <div className="absolute inset-0 hero-gradient-subpage pointer-events-none" />
          {/* Subtle bottom transition line */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0B0D10] to-transparent pointer-events-none" />
        </div>

        {/* Hero Text Naturally on Left - NO BOX, NO CARD, NO BORDER */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl flex flex-col items-start text-left">
            <div className="animate-hero-heading inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
                Architectural Portfolio
              </span>
            </div>
            {/* Short Heading */}
            <h1 className="animate-hero-heading font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
              Spaces That Inspire.
            </h1>
            {/* One short sentence description */}
            <p className="animate-hero-desc text-xs sm:text-sm text-[#D0CDC5] font-light leading-relaxed max-w-lg drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)]">
              A curated showcase of our residential, contemporary villa, and commercial architecture.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. GALLERY GRID (EXACTLY 6 IMAGES, 3 PER ROW ON DESKTOP, 2 ROWS) */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-24 bg-[#0B0D10] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between pb-6 mb-10 border-b border-white/10 gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#A6A29A]">
              <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
              <span>Displaying 6 architectural projects (3 per row)</span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-[#C5A059] font-medium tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Smart Homes Watermarked Edition</span>
            </div>
          </div>

          {/* EXACTLY 3 IMAGES PER ROW ON DESKTOP - 2 ROWS TOTAL */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GALLERY_PROJECTS.map((project, index) => (
              <div
                key={project.id}
                onClick={() => openLightbox(index)}
                className="group relative cursor-pointer rounded-2xl overflow-hidden bg-[#12161C] border border-white/10 hover:border-[#C5A059] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/70 flex flex-col"
              >
                {/* 3:2 Aspect Ratio Container */}
                <div className="relative aspect-[3/2] overflow-hidden bg-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                  />

                  {/* Dark subtle vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-300" />

                  {/* Hover Quick Expand Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-[#0D1014]/90 border border-[#C5A059] flex items-center justify-center text-[#C5A059] shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#080A0C]/80 backdrop-blur-md border border-white/15 text-[10px] font-sans uppercase tracking-widest text-stone-300 font-medium">
                    {project.category}
                  </div>
                </div>

                {/* Card Title Label */}
                <div className="p-4 bg-[#101318] border-t border-white/5 flex items-center justify-between">
                  <h3 className="font-display text-sm font-semibold text-[#FAF9F5] group-hover:text-[#C5A059] transition-colors truncate">
                    {project.title}
                  </h3>
                  <span className="text-[10px] font-mono text-[#A6A29A] shrink-0 ml-2">
                    0{index + 1}/06
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Note about replacing images */}
          <div className="mt-14 p-6 rounded-xl bg-[#0D1014] border border-white/10 text-center max-w-2xl mx-auto">
            <p className="text-xs text-[#8E8A82] leading-relaxed">
              Every project preview is authenticated with the official <span className="text-[#C5A059]">Smart Homes Builders and Designers</span> insignia. Additional completed project documentation and blueprints are available during personalized studio consultations.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. LIGHTBOX COMPONENT */}
      {/* ============================================================ */}
      <Lightbox
        images={GALLERY_PROJECTS}
        currentIndex={activeImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIndex) => setActiveImageIndex(newIndex)}
      />
    </div>
  );
};
