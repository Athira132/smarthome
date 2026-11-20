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

export const ServicesPage: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-5 h-5 text-[#B38E46]" />;
      case 'Home': return <Home className="w-5 h-5 text-[#B38E46]" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-[#B38E46]" />;
      case 'LayoutGrid': return <LayoutGrid className="w-5 h-5 text-[#B38E46]" />;
      case 'Box': return <Box className="w-5 h-5 text-[#B38E46]" />;
      case 'Trees': return <Trees className="w-5 h-5 text-[#B38E46]" />;
      case 'Hammer': return <Hammer className="w-5 h-5 text-[#B38E46]" />;
      case 'FileCheck': return <FileCheck className="w-5 h-5 text-[#B38E46]" />;
      case 'HardHat': return <HardHat className="w-5 h-5 text-[#B38E46]" />;
      case 'Calculator': return <Calculator className="w-5 h-5 text-[#B38E46]" />;
      case 'Key': return <Key className="w-5 h-5 text-[#B38E46]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#B38E46]" />;
      default: return <Sparkles className="w-5 h-5 text-[#B38E46]" />;
    }
  };

  return (
    <div className="flex flex-col w-full overflow-hidden pt-20">
      {/* ============================================================ */}
      {/* 1. PHOTOGRAPHIC HERO BANNER */}
      {/* ============================================================ */}
      <section className="relative min-h-[48vh] sm:min-h-[52vh] flex items-center justify-center py-20 bg-[#FAF8F5] border-b border-[#E2DDD3] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/hero-services.jpg"
            alt="Professional Architectural Building Design"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#FAF8F5]/85 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-transparent opacity-80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B38E46] font-bold mb-3 block">
            End-To-End Architectural Solutions
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#14171A] mb-4">
            Our Services
          </h1>
          <p className="text-base sm:text-lg text-[#3E464E] font-normal max-w-3xl mx-auto leading-relaxed">
            Complete architectural, design and construction solutions, thoughtfully planned around your requirements.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. SERVICES GRID (EXACTLY 12 SERVICES, 4 PER ROW ON XL DESKTOP) */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-24 bg-[#FAF8F5] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between pb-8 mb-10 border-b border-[#E2DDD3] gap-4">
            <span className="text-xs font-mono text-[#57606A]">
              Showing all 12 specialized architectural & construction solutions
            </span>
            <div className="text-xs text-[#B38E46] font-bold tracking-wide">
              Palakkad • Kodikkunnu • Across Kerala
            </div>
          </div>

          {/* Responsive 4-Column Light Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="group rounded-2xl overflow-hidden bg-white border border-[#E2DDD3] hover:border-[#B38E46] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Image container with 16:10 aspect ratio */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {/* Number Tag */}
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-white/90 backdrop-blur-md border border-[#E2DDD3] text-[10px] font-mono text-[#B38E46] font-bold shadow-xs">
                      #{String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Icon Badge */}
                    <div className="absolute bottom-3 left-4 w-9 h-9 rounded-lg bg-white/95 border border-[#B38E46]/30 backdrop-blur-sm flex items-center justify-center shadow-xs">
                      {getServiceIcon(service.iconName)}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 pt-4">
                    <h3 className="font-display text-lg font-bold text-[#14171A] group-hover:text-[#B38E46] transition-colors mb-2.5 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#57606A] font-normal leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Card Action */}
                <div className="px-6 pb-6 pt-2 border-t border-[#F2EFE9] flex items-center justify-between">
                  <Link
                    to={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B38E46] hover:text-[#14171A] transition-colors"
                  >
                    <span>Enquire Now</span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <span className="text-[10px] uppercase tracking-wider text-[#A8A295] font-semibold">Smart Homes</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. CTA AT END */}
      {/* ============================================================ */}
      <section className="py-20 bg-[#F5F2EB] border-t border-[#E2DDD3] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#14171A] mb-4">
            Have a project in mind? Contact us today.
          </h2>
          <p className="text-sm sm:text-base text-[#57606A] font-normal max-w-2xl mx-auto mb-8 leading-relaxed">
            From initial site consultation and 3D elevation renderings to complete turnkey construction, we are ready to bring your architectural vision to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded bg-[#B38E46] hover:bg-[#96722E] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-md"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`tel:${COMPANY_INFO.phones[0].raw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-white hover:bg-stone-50 text-[#14171A] border border-[#D8D2C5] text-xs uppercase tracking-widest font-semibold transition-all shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#B38E46]" />
              <span>Call: {COMPANY_INFO.phones[0].display}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
