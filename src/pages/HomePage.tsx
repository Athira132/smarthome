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

export const HomePage: React.FC = () => {
  const getWhyIcon = (iconName: string) => {
    switch (iconName) {
      case 'Coins': return <Coins className="w-5 h-5 text-[#B38E46]" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-[#B38E46]" />;
      case 'Maximize2': return <Maximize2 className="w-5 h-5 text-[#B38E46]" />;
      case 'Compass': return <Compass className="w-5 h-5 text-[#B38E46]" />;
      case 'Grid': return <Grid className="w-5 h-5 text-[#B38E46]" />;
      case 'Award': return <Award className="w-5 h-5 text-[#B38E46]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#B38E46]" />;
      case 'FileText': return <FileText className="w-5 h-5 text-[#B38E46]" />;
      case 'Leaf': return <Leaf className="w-5 h-5 text-[#B38E46]" />;
      case 'Sun': return <Sun className="w-5 h-5 text-[#B38E46]" />;
      default: return <CheckCircle2 className="w-5 h-5 text-[#B38E46]" />;
    }
  };

  const previewServices = SERVICES.slice(0, 6);
  const previewProjects = GALLERY_PROJECTS.slice(0, 3);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* ============================================================ */}
      {/* 1. HERO BANNER - USING THE ACTUAL OFFICE PHOTOGRAPH */}
      {/* ============================================================ */}
      <section className="relative min-h-[90vh] lg:min-h-[94vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
        {/* Full-width Office Photograph */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/hero-office.jpg"
            alt="Smart Homes Builders and Designers Office Headquarters"
            className="w-full h-full object-cover object-center sm:object-[center_35%]"
          />
          {/* Subtle light overlay to guarantee crystal clear text readability without obscuring office photo */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/95 via-[#FAF8F5]/80 to-[#FAF8F5]/30 md:from-[#FAF8F5]/95 md:via-[#FAF8F5]/75 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-transparent opacity-60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
          <div className="max-w-2xl bg-white/60 md:bg-transparent backdrop-blur-xs md:backdrop-blur-none p-6 md:p-0 rounded-2xl border border-white/60 md:border-none shadow-sm md:shadow-none">
            {/* Architectural Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/85 border border-[#B38E46]/30 backdrop-blur-md mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#B38E46] animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#3E464E] font-semibold">
                Headquarters • Kodikkunnu, Palakkad
              </span>
            </div>

            {/* Main Hero Heading */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#14171A] leading-[1.12] mb-6">
              Designing Spaces.<br />
              <span className="text-[#B38E46]">
                Building Dreams.
              </span>
            </h1>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-[#3E464E] font-normal leading-relaxed mb-8 max-w-xl">
              Thoughtfully designed spaces and quality construction solutions that turn your vision into reality.
            </p>

            {/* Hero CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded bg-[#B38E46] hover:bg-[#96722E] text-white font-bold text-xs uppercase tracking-widest shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded bg-white hover:bg-stone-50 text-[#1E2227] hover:text-[#B38E46] border border-[#D8D2C5] hover:border-[#B38E46] font-semibold text-xs uppercase tracking-widest shadow-xs transition-all"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Feature Ribbon */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-[#E5E0D6] bg-white/80 backdrop-blur-md hidden md:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
            <div className="grid grid-cols-4 gap-6 text-center text-xs text-[#57606A] font-medium">
              <div className="flex items-center justify-center gap-2">
                <span className="text-[#B38E46] font-serif font-bold text-base">01</span>
                <span>Cost-Effective Planning</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-[#B38E46] font-serif font-bold text-base">02</span>
                <span>Vastu & Rule Compliant</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-[#B38E46] font-serif font-bold text-base">03</span>
                <span>3D Elevation & Interiors</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-[#B38E46] font-serif font-bold text-base">04</span>
                <span>Turnkey Supervision</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. ABOUT INTRODUCTION (ASYMMETRIC EDITORIAL LAYOUT) */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#FAF8F5] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Asymmetric Image Composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden border border-[#E2DDD3] shadow-lg group">
                <img
                  src="/images/about/about-home.jpg"
                  alt="Modern Minimalist Kerala Architectural Facade"
                  className="w-full h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Offset Accent Card */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 z-20 bg-white border border-[#B38E46]/30 p-5 sm:p-6 rounded-xl shadow-xl max-w-[260px] sm:max-w-[280px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#B38E46]/10 flex items-center justify-center text-[#B38E46]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-[#B38E46] font-bold">Architectural</span>
                    <span className="block text-sm font-bold text-[#14171A]">Full-Service Firm</span>
                  </div>
                </div>
                <p className="text-[11px] text-[#57606A] leading-relaxed">
                  Accessible, cost-effective design tailored around your family's budget and lifestyle.
                </p>
              </div>

              <div className="absolute -top-4 -left-4 w-full h-full border border-[#E2DDD3] rounded-2xl pointer-events-none -z-0" />
            </div>

            {/* Asymmetric Content */}
            <div className="lg:col-span-6 flex flex-col items-start lg:pl-6">
              <span className="text-xs uppercase tracking-[0.3em] text-[#B38E46] font-bold mb-3">
                About Smart Homes
              </span>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14171A] leading-tight mb-6">
                Exceptional Architecture, Thoughtfully Budgeted.
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#3E464E] font-normal leading-relaxed mb-8">
                <p>
                  <strong className="text-[#14171A] font-semibold">Smart Homes Builders and Designers</strong> is a full-service architecture and design firm specializing in cost-effective building design.
                </p>
                <p>
                  We believe that exceptional architecture should be accessible to everyone. Our goal is to create beautiful, functional and thoughtfully planned spaces while respecting our clients' budgets.
                </p>
                <p>
                  From architectural planning and 3D design to interior design, construction supervision and project execution, we bring together experience and creativity to make your dream spaces a reality.
                </p>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-3 px-6 py-3 rounded bg-[#B38E46] hover:bg-[#96722E] text-white text-xs uppercase tracking-widest font-semibold transition-all shadow-sm"
              >
                <span>About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. WHY CHOOSE US (10 POINTS IN A VISUAL GRID) */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#F5F2EB] relative border-y border-[#E2DDD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#B38E46] font-bold mb-3 block">
              Our Core Strengths
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14171A] mb-5">
              Why Choose Smart Homes?
            </h2>
            <p className="text-sm sm:text-base text-[#57606A] font-normal leading-relaxed">
              We combine creative thinking, practical planning and professional expertise to deliver architectural solutions that balance beauty, functionality and affordability.
            </p>
          </div>

          {/* 10 Points Attractive Light Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.id}
                className="group p-6 rounded-xl bg-white border border-[#E2DDD3] hover:border-[#B38E46] transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] group-hover:bg-[#B38E46]/10 border border-[#E5E0D6] group-hover:border-[#B38E46]/40 flex items-center justify-center mb-4 transition-colors">
                    {getWhyIcon(item.iconName)}
                  </div>
                  <h3 className="font-display text-base font-bold text-[#14171A] group-hover:text-[#B38E46] transition-colors mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#57606A] leading-relaxed font-normal">
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
      <section className="py-24 bg-[#FAF8F5] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#B38E46] font-bold mb-3 block">
                Comprehensive Solutions
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14171A]">
                Our Architectural Services
              </h2>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B38E46] hover:text-[#14171A] font-bold transition-colors pb-1 border-b border-[#B38E46] hover:border-[#14171A]"
            >
              <span>View All 12 Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Service Cards Grid (Preview 6 of 12) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {previewServices.map((service) => (
              <div
                key={service.id}
                className="group rounded-xl overflow-hidden bg-white border border-[#E2DDD3] hover:border-[#B38E46] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-display text-lg font-bold text-[#14171A] group-hover:text-[#B38E46] transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#57606A] leading-relaxed mb-6 font-normal">
                      {service.description}
                    </p>
                  </div>

                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#B38E46] hover:text-[#14171A] transition-colors"
                  >
                    <span>Explore Service</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded bg-[#B38E46] hover:bg-[#96722E] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-md"
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
      <section className="py-24 bg-[#F5F2EB] border-y border-[#E2DDD3] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#B38E46] font-bold mb-3 block">
                Portfolio Preview
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14171A]">
                Featured Architecture & Projects
              </h2>
            </div>

            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-white hover:bg-[#B38E46] text-[#14171A] hover:text-white border border-[#D8D2C5] text-xs uppercase tracking-widest font-semibold transition-all shadow-xs"
            >
              <span>Explore All Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 3 Project Preview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {previewProjects.map((project) => (
              <Link
                key={project.id}
                to="/gallery"
                className="group relative rounded-xl overflow-hidden border border-[#E2DDD3] hover:border-[#B38E46] transition-all duration-300 block bg-white shadow-xs hover:shadow-md"
              >
                <div className="aspect-[3/2] overflow-hidden bg-stone-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#B38E46] font-bold block mb-1">
                      {project.category}
                    </span>
                    <h3 className="font-display text-base font-semibold text-[#14171A] group-hover:text-[#B38E46] transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-xs text-[#756F62] mt-2 inline-flex items-center gap-1 group-hover:text-[#14171A] transition-colors font-medium">
                    <span>View in Lightbox</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#B38E46]" />
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
      <section className="py-24 bg-[#FAF8F5] relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-14 h-14 rounded-full bg-[#B38E46]/10 border border-[#B38E46]/30 flex items-center justify-center mx-auto mb-6 text-[#B38E46]">
            <Compass className="w-7 h-7" />
          </div>

          <span className="text-xs uppercase tracking-[0.3em] text-[#B38E46] font-bold mb-4 block">
            Our Purpose & Vision
          </span>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14171A] leading-tight mb-8">
            Making Better Spaces Accessible to Everyone
          </h2>

          <div className="max-w-3xl mx-auto space-y-5 text-sm sm:text-base text-[#3E464E] font-normal leading-relaxed">
            <p>
              Our mission is to provide high-quality, cost-effective home extension, renovation and construction solutions.
            </p>
            <p>
              Whether you are planning additional floors, expanding your kitchen or bathroom, renovating an existing space or building a new home, we bring the experience and expertise needed to make your project successful.
            </p>
            <p className="text-[#14171A] font-semibold">
              We are passionate about creating beautiful, functional and comfortable spaces.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. CALL TO ACTION */}
      {/* ============================================================ */}
      <section className="py-20 bg-[#F5F2EB] border-t border-[#E2DDD3] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#14171A] mb-4">
            Let's Build Something Beautiful Together.
          </h2>

          <p className="text-sm sm:text-lg text-[#57606A] font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
            Have a project in mind? Let's discuss your ideas and bring your dream space to life.
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded bg-white hover:bg-stone-100 text-[#14171A] border border-[#D8D2C5] text-xs uppercase tracking-widest font-semibold transition-all shadow-xs"
            >
              <span>Call Us: {COMPANY_INFO.phones[0].display}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
