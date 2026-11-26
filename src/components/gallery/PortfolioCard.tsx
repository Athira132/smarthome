import React from 'react';
import { Maximize2, Play } from 'lucide-react';
import type { GalleryProject } from '../../types';

interface PortfolioCardProps {
  item: GalleryProject;
  onClick: () => void;
  className?: string;
}

/**
 * Uniform dark-themed portfolio card supporting both full-visibility images
 * (object-contain) and YouTube video thumbnails without captions or labels.
 */
export const PortfolioCard: React.FC<PortfolioCardProps> = ({
  item,
  onClick,
  className = '',
}) => {
  const isVideo = item.type === 'video' && Boolean(item.youtubeId);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={isVideo ? `Play ${item.title}` : item.alt || item.title}
      className={`group relative cursor-pointer rounded-xl sm:rounded-2xl overflow-hidden bg-[#12161C] border border-white/10 hover:border-[#C5A059] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/70 flex flex-col focus:outline-none focus:ring-2 focus:ring-[#C5A059] ${
        isVideo ? 'col-span-2 lg:col-span-1' : ''
      } ${className}`}
    >
      {/* Fixed Uniform Aspect Ratio Container on Desktop; 16:9 full-width on Mobile for Video */}
      <div
        className={`relative overflow-hidden bg-[#07090B] flex items-center justify-center p-1.5 sm:p-2.5 ${
          isVideo ? 'aspect-video lg:aspect-[4/3]' : 'aspect-[4/3]'
        }`}
      >
        <img
          src={item.image}
          alt={item.alt || `${item.title} - House Design in Kerala by Smart Homes`}
          onError={
            isVideo && item.youtubeId
              ? (e) => {
                  const fallback = `https://i.ytimg.com/vi/${item.youtubeId}/hqdefault.jpg`;
                  if (e.currentTarget.src !== fallback) {
                    e.currentTarget.src = fallback;
                  }
                }
              : undefined
          }
          className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          loading="lazy"
        />

        {isVideo ? (
          <div className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/40 transition-colors duration-300">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0D1014]/90 border-2 border-[#C5A059] flex items-center justify-center text-[#C5A059] shadow-xl transform group-hover:scale-110 transition-transform">
              <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" />
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
            <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-[#0D1014]/90 border border-[#C5A059] flex items-center justify-center text-[#C5A059] shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
              <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
