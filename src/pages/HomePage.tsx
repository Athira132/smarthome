import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Compass,
  Coins,
  UserCheck,
  Maximize2,
  Grid,
  Award,
  ShieldCheck,
  FileText,
  Leaf,
  Sun,
  CheckCircle2,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO, SERVICES, WHY_CHOOSE_US, GALLERY_PROJECTS } from '../data/companyData';
import { SEOHead } from '../components/common/SEOHead';

export const HomePage: React.FC = () => {
  const getWhyIcon = (iconName: string) => {
    switch (iconName) {
      case 'Coins': return <Coins className="w-5 h-5 text-[#C5A059]" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-[#C5A059]" />;
      case 'Maximize2': return <Maximize2 className="w-5 h-5 text-[#C5A059]" />;
      case 'Compass': return <Compass className="w-5 h-5 text-[#C5A059]" />;
      case 'Grid': return <Grid className="w-5 h-5 text-[#C5A059]" />;
      case 'Award': return <Award className="w-5 h-5 text-[#C5A059]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#C5A059]" />;
      case 'FileText': return <FileText className="w-5 h-5 text-[#C5A059]" />;
      case 'Leaf': return <Leaf className="w-5 h-5 text-[#C5A059]" />;
      case 'Sun': return <Sun className="w-5 h-5 text-[#C5A059]" />;
      default: return <CheckCircle2 className="w-5 h-5 text-[#C5A059]" />;
    }
  };

  const previewServices = SERVICES.slice(0, 6);
  const previewProjects = GALLERY_PROJECTS.slice(0, 3);

  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://smarthomesbuilders.in/#website",
        "url": "https://smarthomesbuilders.in/",
        "name": "Smart Homes Builders And Designers",
        "description": "Architects, Architectural Designers, House Plan Design & Building Solutions in Palakkad, Kerala",
        "publisher": {
          "@id": "https://smarthomesbuilders.in/#organization"
        }
      },
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": "https://smarthomesbuilders.in/#organization",
        "name": "Smart Homes Builders And Designers",
        "url": "https://smarthomesbuilders.in/",
        "logo": "https://smarthomesbuilders.in/images/logo/logo-navbar.png",
        "image": "https://smarthomesbuilders.in/images/hero/hero-architectural.jpg",
        "telephone": "+919539221066",
        "email": "smarthomes.bdofficial@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Ansar Complex, Kodikkunnu",
          "addressLocality": "Palakkad",
          "addressRegion": "Kerala",
          "postalCode": "679305",
          "addressCountry": "IN"
        },
        "areaServed": [
          "Palakkad",
          "Kodikkunnu",
          "Ottapalam",
          "Pattambi",
          "Shoranur",
          "Cherpulassery",
          "Palakkad District",
          "Kerala"
        ],
        "sameAs": [
          "https://www.facebook.com/smarthomessajeev/",
          "https://www.instagram.com/smart_homes_builders",
          "https://www.youtube.com/@smarthomeskodikkunnu"
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      <SEOHead
        title="Smart Homes Builders And Designers | Architects & House Designers in Palakkad"
        description="Smart Homes Builders And Designers offers architectural design, residential and commercial building plans, 3D elevation, interior design, building permit assistance and construction services in Palakkad, Kerala."
        canonicalUrl="https://smarthomesbuilders.in/"
        keywords={[
          'Architects in Palakkad',
          'Architectural Designers in Palakkad',
          'House Plan Design in Palakkad',
          'Building Designers in Palakkad',
          'Architectural Design Services',
          'Modern House Design in Palakkad',
          'Residential Building Design in Palakkad',
          'Commercial Building Design in Palakkad',
          'House Design in Kerala',
          'Building Plan Designers in Palakkad',
          'Best House Designers in Palakkad'
        ]}
        schema={homeSchema}
      />

      {/* ============================================================ */}
      {/* 1. HERO BANNER - CINEMATIC LEFT-TO-RIGHT GRADIENT, NO TEXT BOX */}
      {/* ============================================================ */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-start pt-28 pb-16 overflow-hidden bg-[#0B0D10]">
        {/* Full-width Office Photograph - Clear & Sharp */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/hero-office.jpg"
            alt="Smart Homes Builders And Designers Office Headquarters in Palakkad, Kerala"
            className="w-full h-full object-cover object-[center_35%]"
          />
          {/* Cinematic Left-to-Right Dark Gradient: Starts dark on left, dissolves smoothly toward right */}
          <div className="absolute inset-0 hero-gradient-home pointer-events-none" />
          {/* Subtle bottom transition line into the dark theme */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0B0D10] to-transparent pointer-events-none" />
        </div>

        {/* Hero Text Positioned Naturally on the Left - NO BOX, NO CARD, NO BORDER */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
          <div className="max-w-xl flex flex-col items-start text-left">
            {/* Subtle Eyebrow */}
            <div className="animate-hero-heading inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
                Smart Homes • Palakkad, Kerala
              </span>
            </div>

            {/* Exact H1 for Homepage as Requested */}
            <h1 className="animate-hero-heading font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-3 sm:mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
              Architectural Design & Building Solutions in Palakkad
            </h1>

            {/* One Short Sentence Description */}
            <p className="animate-hero-desc text-xs sm:text-sm text-[#D0CDC5] font-light leading-relaxed mb-6 max-w-md drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)]">
              Smart Homes Builders And Designers offers architectural design, residential and commercial building plans, 3D elevation, interior design, building permit assistance and construction services in Palakkad, Kerala.
            </p>

            {/* Minimal Action Buttons */}
            <div className="animate-hero-buttons flex flex-wrap items-center gap-3">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#C5A059] hover:bg-[#D4AF37] text-[#0B0D10] font-bold text-xs uppercase tracking-widest shadow-lg shadow-black/40 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-white/10 hover:bg-white/20 text-[#FAF9F5] hover:text-[#C5A059] border border-white/20 text-xs uppercase tracking-widest font-semibold transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Ribbon (Positioned cleanly below hero to prevent obscuring photo) */}
      <div className="border-y border-white/10 bg-[#080A0C] hidden md:block z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="grid grid-cols-4 gap-6 text-center text-xs text-[#A6A29A]">
            <div className="flex items-center justify-center gap-2">
                <span className="text-[#C5A059] font-serif font-bold text-base">01</span>
                <span>Cost-Effective Planning</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-[#C5A059] font-serif font-bold text-base">02</span>
                <span>Vastu & Rule Compliant</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-[#C5A059] font-serif font-bold text-base">03</span>
                <span>3D Elevation & Interiors</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-[#C5A059] font-serif font-bold text-base">04</span>
                <span>Turnkey Supervision</span>
              </div>
            </div>
          </div>
        </div>

      {/* ============================================================ */}
      {/* 2. ABOUT INTRODUCTION (ASYMMETRIC EDITORIAL LAYOUT) */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#0B0D10] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Asymmetric Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden border border-[#C5A059]/30 shadow-2xl group">
                <img
                  src="/images/about/about-home.jpg"
                  alt="Modern Minimalist Kerala Architectural Facade"
                  className="w-full h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              </div>

              {/* Offset Accent Card */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 z-20 bg-[#12161C] border border-[#C5A059]/40 p-5 sm:p-6 rounded-xl shadow-2xl max-w-[260px] sm:max-w-[280px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#C5A059]/15 flex items-center justify-center text-[#C5A059]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-[#C5A059] font-bold">Architectural</span>
                    <span className="block text-sm font-bold text-white">Full-Service Firm</span>
                  </div>
                </div>
                <p className="text-[11px] text-[#A6A29A] leading-relaxed">
                  Accessible, cost-effective design tailored around your family's budget and lifestyle.
                </p>
              </div>

              <div className="absolute -top-4 -left-4 w-full h-full border border-white/10 rounded-2xl pointer-events-none -z-0" />
            </div>

            {/* Asymmetric Content */}
            <div className="lg:col-span-6 flex flex-col items-start lg:pl-6">
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-bold mb-3">
                About Smart Homes
              </span>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF9F5] leading-tight mb-6">
                Exceptional Architecture, Thoughtfully Budgeted.
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#D0CDC5] font-light leading-relaxed mb-8">
                <p>
                  <strong className="text-white font-medium">Smart Homes Builders And Designers</strong> is a dedicated team of architects, architectural designers, and building designers in Palakkad, Kerala specializing in cost-effective house plan design, modern residential architecture, and turnkey construction.
                </p>
                <p>
                  We believe that exceptional architecture should be accessible to everyone. Our goal is to create beautiful, functional and thoughtfully planned spaces while respecting our clients' budgets.
                </p>
                <p>
                  From house plan design and 3D elevations to interior design, building permit approvals, and construction supervision, our architectural designers in Palakkad bring together experience and creativity to make your dream spaces a reality.
                </p>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded bg-white/5 hover:bg-[#C5A059] text-white hover:text-[#0B0D10] border border-[#C5A059]/40 hover:border-[#C5A059] text-xs uppercase tracking-widest font-semibold transition-all duration-300"
              >
                <span>About Our Architecture Firm</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. WHY CHOOSE US (10 POINTS IN A VISUAL GRID) */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#0D1014] relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-bold mb-3 block">
              Our Core Strengths
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF9F5] mb-5">
              Why Choose Smart Homes?
            </h2>
            <p className="text-sm sm:text-base text-[#A6A29A] font-light leading-relaxed">
              We combine creative thinking, practical planning and professional expertise to deliver architectural solutions that balance beauty, functionality and affordability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.id}
                className="group p-6 rounded-xl bg-[#12161C] border border-white/5 hover:border-[#C5A059]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white/5 group-hover:bg-[#C5A059]/15 border border-white/10 group-hover:border-[#C5A059]/30 flex items-center justify-center mb-4 transition-colors">
                    {getWhyIcon(item.iconName)}
                  </div>
                  <h3 className="font-display text-base font-semibold text-[#FAF9F5] group-hover:text-[#C5A059] transition-colors mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#A6A29A] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. OUR SERVICES PREVIEW */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#0B0D10] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-bold mb-3 block">
                Comprehensive Solutions
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF9F5]">
                Our Architectural Services
              </h2>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5A059] hover:text-white font-semibold transition-colors pb-1 border-b border-[#C5A059]/40 hover:border-white"
            >
              <span>View All 12 Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {previewServices.map((service) => (
              <div
                key={service.id}
                className="group rounded-xl overflow-hidden bg-[#12161C] border border-white/10 hover:border-[#C5A059]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col"
              >
                <Link to={`/services/${service.id}`} className="block relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} in Palakkad, Kerala`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12161C] via-transparent to-transparent opacity-80" />
                </Link>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-display text-lg font-bold text-[#FAF9F5] group-hover:text-[#C5A059] transition-colors mb-2">
                      <Link to={`/services/${service.id}`} className="hover:text-[#C5A059]">
                        {service.title}
                      </Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A6A29A] leading-relaxed mb-6 font-light">
                      {service.description}
                    </p>
                  </div>

                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#C5A059] group-hover:text-white transition-colors"
                  >
                    <span>Explore Service Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-3 px-8 py-4 rounded bg-[#C5A059] hover:bg-[#D4AF37] text-[#0B0D10] font-bold text-xs uppercase tracking-widest transition-all shadow-lg hover:shadow-[#C5A059]/20"
            >
              <span>Explore All 12 Architectural Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. FEATURED PROJECTS / GALLERY PREVIEW */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#080A0C] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-bold mb-3 block">
                Portfolio Preview
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF9F5]">
                Featured Architecture & Projects
              </h2>
            </div>

            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-white/5 hover:bg-[#C5A059] text-white hover:text-[#0B0D10] border border-[#C5A059]/30 text-xs uppercase tracking-widest font-semibold transition-all"
            >
              <span>Explore All Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {previewProjects.map((project) => (
              <Link
                key={project.id}
                to="/gallery"
                className="group relative rounded-xl overflow-hidden border border-white/10 hover:border-[#C5A059]/50 transition-all duration-300 block"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#07090B] flex items-center justify-center p-2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 bg-[#0D1014] flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-medium block mb-1">
                      {project.category}
                    </span>
                    <h3 className="font-display text-base font-semibold text-white group-hover:text-[#C5A059] transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-xs text-[#A6A29A] mt-2 inline-flex items-center gap-1 group-hover:text-white transition-colors">
                    <span>View in Lightbox</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. OUR MISSION */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#0B0D10] relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-14 h-14 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center mx-auto mb-6 text-[#C5A059]">
            <Compass className="w-7 h-7" />
          </div>

          <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-bold mb-4 block">
            Our Purpose & Vision
          </span>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF9F5] leading-tight mb-8">
            Making Better Spaces Accessible to Everyone
          </h2>

          <div className="max-w-3xl mx-auto space-y-5 text-sm sm:text-base text-[#D0CDC5] font-light leading-relaxed">
            <p>
              Our mission is to provide high-quality, cost-effective home extension, renovation and construction solutions.
            </p>
            <p>
              Whether you are planning additional floors, expanding your kitchen or bathroom, renovating an existing space or building a new home, we bring the experience and expertise needed to make your project successful.
            </p>
            <p className="text-[#FAF9F5] font-medium">
              We are passionate about creating beautiful, functional and comfortable spaces.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. CALL TO ACTION */}
      {/* ============================================================ */}
      <section className="py-20 bg-gradient-to-r from-[#12161C] via-[#181E26] to-[#12161C] border-t border-[#C5A059]/30 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#FAF9F5] mb-4">
            Let's Build Something Beautiful Together.
          </h2>

          <p className="text-sm sm:text-lg text-[#D0CDC5] font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Have a project in mind? Let's discuss your ideas and bring your dream space to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded bg-[#C5A059] hover:bg-[#D4AF37] text-[#0B0D10] font-bold text-xs uppercase tracking-widest transition-all shadow-xl shadow-[#C5A059]/20"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`tel:${COMPANY_INFO.phones[0].raw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded bg-white/5 hover:bg-white/10 text-white border border-white/20 text-xs uppercase tracking-widest font-semibold transition-all"
            >
              <span>Call Us: {COMPANY_INFO.phones[0].display}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
