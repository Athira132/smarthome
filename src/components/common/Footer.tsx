import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../../data/companyData';

// Custom SVG Icons for Facebook, Instagram, YouTube
const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080A0C] text-[#E5E2DC] pt-16 pb-12 border-t border-[#C5A059]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <Link to="/" className="inline-block group focus:outline-none">
              <img
                src="/images/logo/logo-navbar.png"
                alt="Smart Homes Logo"
                className="h-16 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-[#A6A29A] leading-relaxed max-w-sm">
              Smart Homes Builders and Designers is a full-service architecture and design firm specializing in cost-effective building design, turning your vision into durable, beautiful, and functional reality.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Smart Homes on Facebook"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#C5A059] text-[#C5A059] hover:text-[#0B0D10] border border-[#C5A059]/30 flex items-center justify-center transition-all duration-300"
              >
                <FacebookIcon />
              </a>
              <a
                href={COMPANY_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Smart Homes on Instagram"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#C5A059] text-[#C5A059] hover:text-[#0B0D10] border border-[#C5A059]/30 flex items-center justify-center transition-all duration-300"
              >
                <InstagramIcon />
              </a>
              <a
                href={COMPANY_INFO.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Smart Homes on YouTube"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#C5A059] text-[#C5A059] hover:text-[#0B0D10] border border-[#C5A059]/30 flex items-center justify-center transition-all duration-300"
              >
                <YouTubeIcon />
              </a>
            </div>
          </div>

          {/* Navigation Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-xs tracking-widest text-[#FAF9F5] uppercase mb-4 font-bold pb-2 border-b border-[#C5A059]/40 inline-block">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link to="/" className="text-[#A6A29A] hover:text-[#C5A059] transition-colors flex items-center gap-1.5 font-medium">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#A6A29A] hover:text-[#C5A059] transition-colors flex items-center gap-1.5 font-medium">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#A6A29A] hover:text-[#C5A059] transition-colors flex items-center gap-1.5 font-medium">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-[#A6A29A] hover:text-[#C5A059] transition-colors flex items-center gap-1.5 font-medium">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Project Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#A6A29A] hover:text-[#C5A059] transition-colors flex items-center gap-1.5 font-medium">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Architectural Services List (All 12) */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-xs tracking-widest text-[#FAF9F5] uppercase mb-4 font-bold pb-2 border-b border-[#C5A059]/40 inline-block">
              Our 12 Services
            </h3>
            <ul className="grid grid-cols-1 gap-2 text-xs text-[#A6A29A]">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    to="/services"
                    className="hover:text-[#C5A059] transition-colors line-clamp-1"
                  >
                    • {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours Column */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="font-display text-xs tracking-widest text-[#FAF9F5] uppercase mb-1 font-bold pb-2 border-b border-[#C5A059]/40 inline-block">
              Office & Hours
            </h3>

            <div className="flex items-start gap-3 text-xs text-[#A6A29A] leading-relaxed">
              <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white block">Smart Homes Office:</span>
                Ansar Complex, Kodikkunnu,<br />
                Palakkad District, Kerala – 679305, India.
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-[#A6A29A]">
              <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
              <div className="flex flex-col">
                <a href={`tel:${COMPANY_INFO.phones[0].raw}`} className="hover:text-[#C5A059] transition-colors font-medium">
                  {COMPANY_INFO.phones[0].display}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-[#A6A29A]">
              <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
              <div className="flex flex-col">
                <a href={`mailto:${COMPANY_INFO.emails[0]}`} className="hover:text-[#C5A059] transition-colors">
                  {COMPANY_INFO.emails[0]}
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex items-start gap-3 text-xs text-[#A6A29A] pt-1">
              <Clock className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <div>
                <span className="text-white font-semibold block">Working Hours:</span>
                Mon – Sat: 9:00 AM – 7:00 PM<br />
                <span className="text-[#C5A059] font-medium">Sunday: Holiday</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#827E77]">
          <div>
            © {new Date().getFullYear()} <span className="text-[#FAF9F5] font-semibold">Smart Homes Builders and Designers</span>. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Palakkad, Kerala</span>
            <span>•</span>
            <a
              href={COMPANY_INFO.map.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A6A29A] hover:text-[#C5A059] transition-colors inline-flex items-center gap-1 font-medium"
            >
              <span>Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
