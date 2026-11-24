import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowRight,
  Phone,
  MessageCircle,
  CheckCircle2,
  ChevronRight,
  Home,
  ShieldCheck,
  Compass,
  Building2,
  LayoutGrid,
  Box,
  Trees,
  Hammer,
  FileCheck,
  HardHat,
  Calculator,
  Key,
  Sparkles
} from 'lucide-react';
import { getServiceById, DETAILED_SERVICES } from '../data/servicesData';
import { COMPANY_INFO } from '../data/companyData';
import { SEOHead } from '../components/common/SEOHead';

export const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? getServiceById(serviceId) : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

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

  const relatedServices = DETAILED_SERVICES.filter(s =>
    service.relatedServiceIds.includes(s.id)
  );

  const canonicalUrl = `https://smarthomesbuilders.in/services/${service.id}`;

  const jsonLdSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": service.title,
      "serviceType": service.primaryKeywords[0],
      "description": service.metaDescription,
      "provider": {
        "@type": "HomeAndConstructionBusiness",
        "name": "Smart Homes Builders And Designers",
        "url": "https://smarthomesbuilders.in/",
        "telephone": "+919539221066",
        "email": "smarthomes.bdofficial@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Ansar Complex, Kodikkunnu",
          "addressLocality": "Palakkad",
          "addressRegion": "Kerala",
          "postalCode": "679305",
          "addressCountry": "IN"
        }
      },
      "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Palakkad, Kerala"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Kerala, India"
        }
      ],
      "url": canonicalUrl
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://smarthomesbuilders.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://smarthomesbuilders.in/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": service.title,
          "item": canonicalUrl
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden pt-20">
      <SEOHead
        title={service.seoTitle}
        description={service.metaDescription}
        canonicalUrl={canonicalUrl}
        keywords={[...service.primaryKeywords, ...service.supportingKeywords]}
        ogImage={`https://smarthomesbuilders.in${service.image}`}
        schema={jsonLdSchema}
      />

      {/* ============================================================ */}
      {/* 1. BREADCRUMBS BAR */}
      {/* ============================================================ */}
      <div className="bg-[#080A0C] border-b border-white/5 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#A6A29A]">
            <Link to="/" className="hover:text-[#C5A059] transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-600" />
            <Link to="/services" className="hover:text-[#C5A059] transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-600" />
            <span className="text-[#C5A059] font-medium truncate max-w-[200px] sm:max-w-none">
              {service.title}
            </span>
          </nav>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. HERO BANNER - CINEMATIC LEFT-TO-RIGHT GRADIENT, NO TEXT BOX */}
      {/* ============================================================ */}
      <section className="relative min-h-[50vh] sm:min-h-[55vh] flex items-center justify-start py-16 bg-[#0B0D10] border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={service.image}
            alt={`${service.title} - Smart Homes Builders And Designers Palakkad`}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 hero-gradient-subpage pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0B0D10] to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl flex flex-col items-start text-left">
            <div className="animate-hero-heading inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
                Smart Homes • Palakkad, Kerala
              </span>
            </div>

            {/* Exactly One H1 per Page */}
            <h1 className="animate-hero-heading font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
              {service.h1}
            </h1>

            <p className="animate-hero-desc text-xs sm:text-sm text-[#D0CDC5] font-light leading-relaxed mb-6 max-w-xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)]">
              {service.metaDescription}
            </p>

            <div className="animate-hero-buttons flex flex-wrap items-center gap-3">
              <Link
                to={`/contact?service=${encodeURIComponent(service.title)}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#C5A059] hover:bg-[#D4AF37] text-[#0B0D10] font-bold text-xs uppercase tracking-widest shadow-lg shadow-black/40 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Enquire About {service.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href={`tel:${COMPANY_INFO.phones[0].raw}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded bg-white/10 hover:bg-white/20 text-[#FAF9F5] hover:text-[#C5A059] border border-white/20 text-xs uppercase tracking-widest font-semibold transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Call {COMPANY_INFO.phones[0].display}</span>
              </a>

              <a
                href={COMPANY_INFO.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/40 text-xs uppercase tracking-widest font-semibold transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. ARCHITECTURAL OVERVIEW & CONTENT */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-24 bg-[#0B0D10] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-8 flex flex-col items-start">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C5A059] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
                <span>Overview & Architectural Approach</span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FAF9F5] mb-6 leading-tight">
                Specialized {service.title} for Homes & Buildings in Palakkad
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#D0CDC5] font-light leading-relaxed mb-10">
                {service.longDescription.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Key Features / Deliverables */}
              <div className="w-full pt-8 border-t border-white/10">
                <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
                  <span>Key Capabilities & Client Benefits</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#12161C] border border-white/5 hover:border-[#C5A059]/30 transition-colors flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#D0CDC5] leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sticky Sidebar */}
            <div className="lg:col-span-4 sticky top-28 space-y-6">
              {/* Quick Summary Card */}
              <div className="p-6 rounded-2xl bg-[#12161C] border border-[#C5A059]/30 shadow-xl">
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/10">
                  <div className="w-11 h-11 rounded-lg bg-[#0B0D10] border border-[#C5A059]/40 flex items-center justify-center shadow">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold block">
                      Architectural Service
                    </span>
                    <h3 className="text-base font-bold text-white font-display">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <ul className="space-y-3 text-xs text-[#A6A29A] mb-6">
                  <li className="flex items-center justify-between py-1.5 border-b border-white/5">
                    <span>Location Coverage:</span>
                    <span className="text-white font-medium">Palakkad & Kerala</span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-white/5">
                    <span>Regulatory Framework:</span>
                    <span className="text-white font-medium">KMBR / KPBR Compliant</span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-white/5">
                    <span>Design Philosophy:</span>
                    <span className="text-white font-medium">Vastu & Cost-Effective</span>
                  </li>
                  <li className="flex items-center justify-between py-1.5 border-b border-white/5">
                    <span>Project Types:</span>
                    <span className="text-white font-medium">Residential & Commercial</span>
                  </li>
                </ul>

                <Link
                  to={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-[#C5A059] hover:bg-[#D4AF37] text-[#0B0D10] font-bold text-xs uppercase tracking-widest transition-all shadow-lg"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="mt-4 pt-4 border-t border-white/5 text-center">
                  <span className="text-[11px] text-[#8E8A82] block mb-1">
                    Direct Phone Enquiry:
                  </span>
                  <a
                    href={`tel:${COMPANY_INFO.phones[0].raw}`}
                    className="text-sm font-semibold text-white hover:text-[#C5A059] transition-colors"
                  >
                    +91 {COMPANY_INFO.phones[0].display}
                  </a>
                </div>
              </div>

              {/* Office Location Box */}
              <div className="p-5 rounded-xl bg-[#0D1014] border border-white/10 text-xs text-[#A6A29A] leading-relaxed">
                <span className="text-white font-semibold block mb-1">Design Studio & Office:</span>
                Smart Homes Builders And Designers<br />
                Ansar Complex, Kodikkunnu,<br />
                Palakkad District, Kerala – 679305, India.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. WORKFLOW / PROCESS STEPS */}
      {/* ============================================================ */}
      <section className="py-20 bg-[#080A0C] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-bold mb-2 block">
              Our Structured Approach
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              How We Deliver {service.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#12161C] border border-white/5 hover:border-[#C5A059]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-serif font-bold text-[#C5A059] text-base mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="font-display text-base font-bold text-white mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#A6A29A] font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. RELATED SERVICES (DESCRIPTIVE INTERNAL LINKING) */}
      {/* ============================================================ */}
      <section className="py-20 bg-[#0B0D10] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between pb-6 mb-10 border-b border-white/10 gap-3">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-bold block mb-1">
                Integrated Architectural Solutions
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Related Architectural Services
              </h2>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs text-[#C5A059] hover:text-white font-medium transition-colors"
            >
              <span>View All 12 Services</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <Link
                key={rel.id}
                to={`/services/${rel.id}`}
                className="group p-6 rounded-xl bg-[#12161C] border border-white/5 hover:border-[#C5A059]/50 transition-all duration-300 hover:-translate-y-1 block"
              >
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-4 bg-black">
                  <img
                    src={rel.image}
                    alt={`${rel.title} in Palakkad, Kerala`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded bg-[#0B0D10] border border-[#C5A059]/30 flex items-center justify-center">
                    {getServiceIcon(rel.iconName)}
                  </div>
                  <h3 className="font-display text-base font-bold text-white group-hover:text-[#C5A059] transition-colors line-clamp-1">
                    {rel.title}
                  </h3>
                </div>
                <p className="text-xs text-[#A6A29A] font-light leading-relaxed line-clamp-2 mb-3">
                  {rel.description}
                </p>
                <span className="inline-flex items-center gap-1 text-xs text-[#C5A059] font-medium group-hover:text-white transition-colors">
                  <span>Explore Service Details</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. CALL TO ACTION */}
      {/* ============================================================ */}
      <section className="py-20 bg-gradient-to-r from-[#0E1217] via-[#161B22] to-[#0E1217] border-t border-[#C5A059]/30 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FAF9F5] mb-4">
            Ready to Begin Your {service.title} Project?
          </h2>
          <p className="text-sm sm:text-base text-[#D0CDC5] font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Consult with our architectural and building designers in Palakkad for personalized space planning, 3D visualization, and cost-effective execution across Kerala.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={`/contact?service=${encodeURIComponent(service.title)}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded bg-[#C5A059] hover:bg-[#D4AF37] text-[#0B0D10] font-bold text-xs uppercase tracking-widest transition-all shadow-lg hover:shadow-[#C5A059]/20"
            >
              <span>Get in Touch Today</span>
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
