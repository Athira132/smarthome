import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Target
} from 'lucide-react';
import { OUR_APPROACH, WHY_CHOOSE_US } from '../data/companyData';
import { SEOHead } from '../components/common/SEOHead';

export const AboutPage: React.FC = () => {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Smart Homes Builders And Designers",
    "description": "Learn about Smart Homes Builders And Designers, providing thoughtful architectural planning, house design, building design and construction-related solutions in Palakkad, Kerala.",
    "url": "https://smarthomesbuilders.in/about",
    "mainEntity": {
      "@type": "HomeAndConstructionBusiness",
      "name": "Smart Homes Builders And Designers",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ansar Complex, Kodikkunnu",
        "addressLocality": "Palakkad",
        "addressRegion": "Kerala",
        "postalCode": "679305",
        "addressCountry": "IN"
      },
      "telephone": "+919539221066",
      "email": "smarthomes.bdofficial@gmail.com"
    }
  };

  return (
    <div className="flex flex-col w-full overflow-hidden pt-20">
      <SEOHead
        title="About Smart Homes Builders And Designers | Architectural Design Company in Palakkad"
        description="Learn about Smart Homes Builders And Designers, providing thoughtful architectural planning, house design, building design and construction-related solutions in Palakkad, Kerala."
        canonicalUrl="https://smarthomesbuilders.in/about"
        keywords={[
          'Architectural Design Company in Palakkad',
          'Building Designers in Palakkad',
          'Architectural Planning Services',
          'House Design in Kerala',
          'Residential Architecture',
          'Architects in Palakkad',
          'House Plan Design in Palakkad'
        ]}
        schema={aboutSchema}
      />

      {/* ============================================================ */}
      {/* 1. HERO BANNER - CINEMATIC LEFT-TO-RIGHT GRADIENT, NO TEXT BOX */}
      {/* ============================================================ */}
      <section className="relative min-h-[50vh] sm:min-h-[56vh] flex items-center justify-start py-16 bg-[#0B0D10] border-b border-white/10 overflow-hidden">
        {/* Architectural Background Photography - Bright & Clear */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/hero-about.jpg"
            alt="About Smart Homes Builders And Designers - Architectural Design Company in Palakkad"
            className="w-full h-full object-cover object-center"
          />
          {/* Cinematic Left-to-Right Dark Gradient */}
          <div className="absolute inset-0 hero-gradient-subpage pointer-events-none" />
          {/* Subtle bottom transition line into the dark theme */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0B0D10] to-transparent pointer-events-none" />
        </div>

        {/* Hero Text Naturally on Left - NO BOX, NO CARD, NO BORDER */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl flex flex-col items-start text-left">
            <div className="animate-hero-heading inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
                About Smart Homes • Palakkad, Kerala
              </span>
            </div>
            {/* Single H1 on page */}
            <h1 className="animate-hero-heading font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
              Architectural Design Company in Palakkad
            </h1>
            {/* One short sentence description */}
            <p className="animate-hero-desc text-xs sm:text-sm text-[#D0CDC5] font-light leading-relaxed max-w-lg drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)]">
              Learn about Smart Homes Builders And Designers, providing thoughtful architectural planning, house design, building design and construction-related solutions in Palakkad, Kerala.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. WHO WE ARE */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#0B0D10] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-bold mb-3">
                Who We Are
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FAF9F5] mb-6 leading-tight">
                A Dedicated Architecture & Design Practice
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#D0CDC5] font-light leading-relaxed mb-8">
                <p>
                  At Smart Homes Builders and Designers, we approach every structure as a unique dialogue between human life, available land, and natural surroundings. Based in Palakkad, Kerala, our practice offers integrated architectural planning, 3D visualization, interior craftsmanship, and turnkey construction supervision.
                </p>
                <p>
                  We recognize that constructing or renovating a home is one of life’s most meaningful investments. That is why our team is committed to disciplined budgeting, transparent communication, and meticulous technical precision throughout the entire project lifecycle.
                </p>
                <p>
                  From compact modern residential houses to sprawling contemporary villas and practical commercial spaces, our portfolio reflects our dedication to enduring beauty and practical comfort.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 w-full pt-4 border-t border-white/10">
                <div className="p-4 rounded-lg bg-[#12161C] border border-white/5">
                  <span className="text-xs uppercase tracking-widest text-[#C5A059] block font-bold mb-1">Planning</span>
                  <p className="text-xs text-[#A6A29A]">Precision architectural blueprints and customized space planning.</p>
                </div>
                <div className="p-4 rounded-lg bg-[#12161C] border border-white/5">
                  <span className="text-xs uppercase tracking-widest text-[#C5A059] block font-bold mb-1">Execution</span>
                  <p className="text-xs text-[#A6A29A]">Comprehensive on-site supervision and turnkey completion.</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden border border-[#C5A059]/30 shadow-2xl">
                <img
                  src="/images/about/who-we-are.jpg"
                  alt="Smart Homes Architectural Studio & Planning"
                  className="w-full h-[480px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#0D1014] border border-[#C5A059]/40 p-5 rounded-xl shadow-xl hidden sm:block max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-white">Full-Service Architecture</span>
                </div>
                <p className="text-[11px] text-[#A6A29A]">From preliminary sketches to building permits and turnkey delivery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. OUR MISSION */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#0D1014] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                <img
                  src="/images/about/our-mission.jpg"
                  alt="Family Home Architectural Design"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start lg:pl-6">
              <div className="w-12 h-12 rounded-full bg-[#C5A059]/15 flex items-center justify-center text-[#C5A059] mb-4">
                <Target className="w-6 h-6" />
              </div>

              <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-bold mb-2">
                Our Mission
              </span>

              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FAF9F5] mb-6 leading-tight">
                Making Better Spaces Accessible to Everyone
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#D0CDC5] font-light leading-relaxed mb-6">
                <p>
                  Our mission is to provide high-quality, cost-effective home extension, renovation and construction solutions.
                </p>
                <p>
                  Whether you are planning additional floors, expanding your kitchen or bathroom, renovating an existing space or building a new home, we bring the experience and expertise needed to make your project successful.
                </p>
                <p className="text-white font-medium">
                  We are passionate about creating beautiful, functional and comfortable spaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. OUR APPROACH (THE 7 GUIDING PRINCIPLES) */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#0B0D10] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-bold mb-3 block">
              Methodology & Process
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF9F5] mb-4">
              Our Architectural Approach
            </h2>
            <p className="text-sm sm:text-base text-[#A6A29A] font-light leading-relaxed">
              We guide every project through seven structured, client-centered steps to ensure flawless execution and budget discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OUR_APPROACH.map((step) => (
              <div
                key={step.step}
                className="group p-7 rounded-xl bg-[#12161C] border border-white/5 hover:border-[#C5A059]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-3xl font-bold text-[#C5A059]">
                      0{step.step}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#0B0D10] transition-colors">
                      <CheckCircle2 className="w-4 h-4" />
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#FAF9F5] mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A6A29A] font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}

            {/* 8th Card as a Contact Invitation */}
            <div className="p-7 rounded-xl bg-gradient-to-br from-[#181E26] to-[#12161C] border border-[#C5A059]/40 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold block mb-2">Ready to Begin?</span>
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  Let's Discuss Your Architectural Project
                </h3>
                <p className="text-xs text-[#D0CDC5] leading-relaxed mb-6 font-light">
                  Get in touch with our team in Palakkad for personalized consultations and preliminary site assessments.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded bg-[#C5A059] hover:bg-[#D4AF37] text-[#0B0D10] font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <span>Contact Our Studio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. WHY CHOOSE US SUMMARY */}
      {/* ============================================================ */}
      <section className="py-20 bg-[#080A0C] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-bold mb-2 block">
              Core Principles
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Clients Trust Smart Homes
            </h2>
            <p className="text-sm text-[#A6A29A] leading-relaxed">
              We combine creative thinking, practical planning and professional expertise to deliver architectural solutions that balance beauty, functionality and affordability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.slice(0, 4).map((item) => (
              <div key={item.id} className="p-6 rounded-lg bg-[#10141A] border border-white/5">
                <span className="font-serif text-[#C5A059] text-xl font-bold block mb-2">0{item.id}</span>
                <h4 className="font-display text-base font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-[#A6A29A] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
