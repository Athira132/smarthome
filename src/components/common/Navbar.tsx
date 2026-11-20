import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#E2DDD3] shadow-sm py-2'
            : 'bg-white/90 backdrop-blur-md border-b border-[#EFECE5] shadow-xs py-2.5 sm:py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* ONLY THE COMPANY LOGO - SIGNIFICANTLY ENLARGED, NO TEXT BESIDE IT */}
            <Link
              to="/"
              className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B38E46] rounded-md p-1"
              aria-label="Smart Homes Builders and Designers Home"
            >
              <img
                src="/images/logo/logo-navbar.png"
                alt="Smart Homes Builders and Designers Logo"
                className="h-12 sm:h-16 lg:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors ${
                      active
                        ? 'text-[#B38E46] font-semibold'
                        : 'text-[#2C3238] hover:text-[#B38E46]'
                    }`}
                  >
                    {link.name}
                    {active && (
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#B38E46] rounded-full shadow-xs" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Quick Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${COMPANY_INFO.phones[0].raw}`}
                className="flex items-center gap-2 text-xs font-sans text-[#3E464E] hover:text-[#B38E46] transition-colors tracking-wide py-1 px-2 font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-[#B38E46]" />
                <span>{COMPANY_INFO.phones[0].display}</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-semibold text-white bg-[#B38E46] hover:bg-[#96722E] transition-all rounded shadow-sm hover:shadow-md active:scale-95"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 md:hidden">
              <a
                href={COMPANY_INFO.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="p-2 text-[#25D366] hover:text-[#1eb855] transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#1E2227] hover:text-[#B38E46] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B38E46] rounded-md transition-colors"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation (Light Theme) */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-xs transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 bottom-0 w-[84%] max-w-sm z-50 bg-[#FAF8F5] border-l border-[#E2DDD3] shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ease-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Drawer Header: ONLY THE LOGO */}
          <div className="flex items-center justify-between pb-6 border-b border-[#E5E0D6]">
            <div className="flex items-center">
              <img
                src="/images/logo/logo-navbar.png"
                alt="Smart Homes Logo"
                className="h-12 w-auto object-contain"
              />
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#57606A] hover:text-[#1E2227]"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col gap-2 mt-6">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg text-base font-medium tracking-wide transition-colors flex items-center justify-between ${
                    active
                      ? 'bg-[#B38E46]/10 text-[#B38E46] font-semibold border-l-3 border-[#B38E46]'
                      : 'text-[#2C3238] hover:bg-black/5 hover:text-[#1E2227]'
                  }`}
                >
                  <span>{link.name}</span>
                  {active && <span className="w-2 h-2 rounded-full bg-[#B38E46]" />}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Drawer Footer Details */}
        <div className="pt-6 border-t border-[#E5E0D6] flex flex-col gap-4">
          <div className="text-xs text-[#57606A] leading-relaxed">
            <span className="block text-[#1E2227] font-semibold mb-1">Palakkad, Kerala</span>
            Ansar Complex, Kodikkunnu – 679305
          </div>

          <div className="flex flex-col gap-2">
            <a
              href={`tel:${COMPANY_INFO.phones[0].raw}`}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded bg-white hover:bg-stone-100 text-[#1E2227] text-xs font-semibold tracking-wider transition-colors border border-[#E2DDD3] shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#B38E46]" />
              <span>Call: {COMPANY_INFO.phones[0].display}</span>
            </a>

            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded bg-[#B38E46] hover:bg-[#96722E] text-white text-xs font-bold uppercase tracking-widest transition-colors shadow-sm"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
