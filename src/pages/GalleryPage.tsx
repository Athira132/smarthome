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
      {/* 1. PHOTOGRAPHIC HERO BANNER */}
      {/* ============================================================ */}
      <section className="relative min-h-[48vh] sm:min-h-[52vh] flex items-center justify-center py-20 bg-[#FAF8F5] border-b border-[#E2DDD3] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/hero-gallery.jpg"
            alt="Visually Impressive Architectural Project"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#FAF8F5]/85 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-transparent opacity-80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B38E46] font-bold mb-3 block">
            Architectural Portfolio
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#14171A] mb-4">
            Project Gallery
          </h1>
          <p className="text-base sm:text-lg text-[#3E464E] font-normal max-w-2xl mx-auto leading-relaxed">
            A curated showcase of our residential, contemporary villa, interior, and commercial architectural projects.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. GALLERY GRID (EXACTLY 6 IMAGES, 3 PER ROW ON DESKTOP, 2 ROWS) */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-24 bg-[#FAF8F5] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between pb-6 mb-10 border-b border-[#E2DDD3] gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#57606A]">
              <span className="w-2 h-2 rounded-full bg-[#B38E46]" />
              <span>Displaying 6 architectural projects (3 per row)</span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-[#B38E46] font-semibold tracking-wide">
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
                className="group relative cursor-pointer rounded-2xl overflow-hidden bg-white border border-[#E2DDD3] hover:border-[#B38E46] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col"
              >
                {/* 3:2 Aspect Ratio Container */}
                <div className="relative aspect-[3/2] overflow-hidden bg-stone-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                  />

                  {/* Subtle dark vignette on hover */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover Quick Expand Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/95 border border-[#B38E46] flex items-center justify-center text-[#B38E46] shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-white/90 backdrop-blur-md border border-[#E2DDD3] text-[10px] font-sans uppercase tracking-widest text-[#3E464E] font-semibold shadow-xs">
                    {project.category}
                  </div>
                </div>

                {/* Card Title Label */}
                <div className="p-4 bg-white border-t border-[#F2EFE9] flex items-center justify-between">
                  <h3 className="font-display text-sm font-semibold text-[#14171A] group-hover:text-[#B38E46] transition-colors truncate">
                    {project.title}
                  </h3>
                  <span className="text-[10px] font-mono text-[#756F62] shrink-0 ml-2 font-medium">
                    0{index + 1}/06
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Info Note */}
          <div className="mt-14 p-6 rounded-xl bg-[#F5F2EB] border border-[#E2DDD3] text-center max-w-2xl mx-auto shadow-xs">
            <p className="text-xs text-[#57606A] leading-relaxed">
              Every project preview is authenticated with the official <span className="text-[#B38E46] font-semibold">Smart Homes Builders and Designers</span> insignia. Additional completed project documentation and blueprints are available during personalized studio consultations.
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
