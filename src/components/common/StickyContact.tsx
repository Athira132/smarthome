import { useState } from 'react';
import { Phone, MessageSquare, X } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export const StickyContact: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <aside aria-label="Quick Contact Options" className="fixed bottom-6 right-5 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Subtle WhatsApp Popover Tooltip for Desktop */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#0D1014] text-white text-xs py-2 px-3.5 rounded-lg border border-[#C5A059]/40 shadow-xl mb-1 animate-fade-in">
          <span>Chat with our principal designers on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-white p-0.5 ml-1"
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      <div className="flex sm:flex-col items-center gap-2.5">
        {/* Sticky Call Option */}
        <a
          href={`tel:${COMPANY_INFO.phones[0].raw}`}
          aria-label="Call Smart Homes Builders"
          className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#161B22] text-[#C5A059] hover:bg-[#C5A059] hover:text-[#0B0D10] border border-[#C5A059]/40 shadow-lg shadow-black/60 transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <Phone className="w-5 h-5 transition-transform group-hover:rotate-12" />
          {/* Desktop Hover Label */}
          <span className="hidden sm:group-hover:block absolute right-14 whitespace-nowrap bg-[#0D1014] text-white text-xs px-2.5 py-1.5 rounded border border-[#C5A059]/30 shadow-md">
            Call: {COMPANY_INFO.phones[0].display}
          </span>
        </a>

        {/* Sticky WhatsApp Option */}
        <a
          href={COMPANY_INFO.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          onMouseEnter={() => setShowTooltip(false)}
          className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/25 transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-[#20ba59]"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          {/* Desktop Hover Label */}
          <span className="hidden sm:group-hover:block absolute right-14 whitespace-nowrap bg-[#0D1014] text-white text-xs px-2.5 py-1.5 rounded border border-[#25D366]/40 shadow-md">
            WhatsApp Us (Instant Reply)
          </span>
          {/* Subtle live indicator dot */}
          <span className="absolute top-0 right-0 w-3 h-3 bg-white rounded-full border-2 border-[#25D366]" />
        </a>
      </div>
    </aside>
  );
};
