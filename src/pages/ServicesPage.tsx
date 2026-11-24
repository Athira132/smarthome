import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Compass,
  Home,
  Building2,
  LayoutGrid,
  Box,
  Trees,
  Hammer,
  FileCheck,
  HardHat,
  Calculator,
  Key,
  Sparkles,
  ChevronRight,
  Phone
} from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../data/companyData';
import { SEOHead } from '../components/common/SEOHead';

export const ServicesPage: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-5 h-5 text-[#C5A059]" />;
      case 'Home': return <Home className="w-5 h-5 text-[#C5A059]" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-[#C5A059]" />;
      case 'LayoutGrid': return <LayoutGrid className="w-5 h-5 text-[#C5A059]" />;
      case 'Box': return <Box className="w-5 h-5 text-[#C5A059]" />;
      case 'Trees': return <Trees className="w-5 h-5 text-[#C5A059]" />;
      case 'Hammer': return <Hammer className="w-5 h-5 text-[#C5A059]" />;
      case 'FileCheck': return <FileCheck className="w-5 h-5 text-[#C5A059]" />;
      case 'HardHat': return <HardHat className="w-5 h-5 text-[#C5A059]" />;
      case 'Calculator': return <Calculator className="w-5 h-5 text-[#C5A059]" />;
      case 'Key': return <Key className="w-5 h-5 text-[#C5A059]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#C5A059]" />;
      default: return <Sparkles className="w-5 h-5 text-[#C5A059]" />;
    }
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Architectural Design and Construction Services in Palakkad",
    "description": "Comprehensive architectural design, residential and commercial building design, 3D elevation, and turnkey construction services by Smart Homes in Palakkad, Kerala.",
    "itemListElement": SERVICES.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": service.title,
      "url": `https://smarthomesbuilders.in/services/${service.id}`
    }))
  };

  return (
    <div className="flex flex-col w-full overflow-hidden pt-20">
      <SEOHead
        title="Architectural Design & Construction Services in Palakkad | Smart Homes"
        description="Explore architectural design, residential and commercial building design, interior design, 3D elevation, renovation, building approvals and construction services in Palakkad."
        canonicalUrl="https://smarthomesbuilders.in/services"
        keywords={[
          'Architectural and Building Design Services',
          'Building Design Services in Palakkad',
          'Construction Services in Palakkad',
          'Architectural Planning in Palakkad',
          'House Plan Design in Palakkad',
          'Architects in Palakkad'
        ]}
        schema={servicesSchema}
      />

      {/* ============================================================ */}
      {/* 1. HERO BANNER - CINEMATIC LEFT-TO-RIGHT GRADIENT, NO TEXT BOX */}
      {/* ============================================================ */}
      <section className="relative min-h-[48vh] sm:min-h-[52vh] flex items-center justify-start py-16 bg-[#0B0D10] border-b border-white/10 overflow-hidden">
        {/* Professional Architectural Photography - Bright & Clear */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/hero-services.jpg"
            alt="Professional Architectural Design and Construction Services in Palakkad"
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
                Smart Homes • Palakkad, Kerala
              </span>
            </div>
            {/* Single H1 per page */}
            <h1 className="animate-hero-heading font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
              Architectural Design & Construction Services in Palakkad
            </h1>
            {/* One short sentence description */}
            <p className="animate-hero-desc text-xs sm:text-sm text-[#D0CDC5] font-light leading-relaxed max-w-lg drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)]">
              Explore our 12 specialized architectural and building design solutions, from custom house plans and 3D elevations to turnkey construction across Kerala.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. SERVICES GRID (EXACTLY 12 SERVICES, 4 PER ROW ON XL DESKTOP) */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-24 bg-[#0B0D10] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between pb-8 mb-10 border-b border-white/10 gap-4">
            <span className="text-xs font-mono text-[#A6A29A]">
              Showing all 12 specialized architectural & construction solutions
            </span>
            <div className="text-xs text-[#C5A059] font-medium tracking-wide">
              Palakkad • Kodikkunnu • Across Kerala
            </div>
          </div>

          {/* Responsive 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="group rounded-2xl overflow-hidden bg-[#12161C] border border-white/10 hover:border-[#C5A059]/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/60 flex flex-col justify-between"
              >
                <div>
                  {/* Image container with consistent 16:10 aspect ratio */}
                  <Link to={`/services/${service.id}`} className="block relative aspect-[16/10] overflow-hidden bg-black">
                    <img
                      src={service.image}
                      alt={`${service.title} in Palakkad, Kerala`}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12161C] via-[#12161C]/30 to-transparent" />

                    {/* Service Number Tag */}
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-[#080A0C]/85 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#C5A059] font-semibold">
                      #{String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Icon Badge */}
                    <div className="absolute bottom-3 left-4 w-9 h-9 rounded-lg bg-[#0B0D10]/90 border border-[#C5A059]/30 backdrop-blur-sm flex items-center justify-center shadow">
                      {getServiceIcon(service.iconName)}
                    </div>
                  </Link>

                  {/* Card Body */}
                  <div className="p-6 pt-4">
                    <h3 className="font-display text-lg font-bold text-[#FAF9F5] group-hover:text-[#C5A059] transition-colors mb-2.5 leading-snug">
                      <Link to={`/services/${service.id}`} className="hover:text-[#C5A059]">
                        {service.title}
                      </Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A6A29A] font-light leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Card Action */}
                <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between">
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C5A059] hover:text-white transition-colors"
                  >
                    <span>View Details</span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    to={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="text-[11px] text-[#A6A29A] hover:text-white transition-colors"
                  >
                    Enquire
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. CTA AT END */}
      {/* ============================================================ */}
      <section className="py-20 bg-gradient-to-r from-[#0E1217] via-[#161B22] to-[#0E1217] border-t border-[#C5A059]/30 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FAF9F5] mb-4">
            Have a project in mind? Contact us today.
          </h2>
          <p className="text-sm sm:text-base text-[#D0CDC5] font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            From initial site consultation and 3D elevation renderings to complete turnkey construction, we are ready to bring your architectural vision to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded bg-[#C5A059] hover:bg-[#D4AF37] text-[#0B0D10] font-bold text-xs uppercase tracking-widest transition-all shadow-lg hover:shadow-[#C5A059]/20"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`tel:${COMPANY_INFO.phones[0].raw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-white/5 hover:bg-white/10 text-white border border-white/20 text-xs uppercase tracking-widest font-semibold transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Call: {COMPANY_INFO.phones[0].display}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
