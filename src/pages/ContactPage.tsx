import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface FormData {
  fullName: string;
  email: string;
  subject: string;
  phone: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const prefilledService = searchParams.get('service');

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    subject: prefilledService ? `Inquiry regarding ${prefilledService}` : '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setFormData(prev => ({
        ...prev,
        subject: `Inquiry regarding ${prefilledService}`
      }));
    }
  }, [prefilledService]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide more details in your message (minimum 10 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      subject: '',
      phone: '',
      message: ''
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="flex flex-col w-full overflow-hidden pt-20">
      {/* ============================================================ */}
      {/* 1. HERO BANNER - CINEMATIC LEFT-TO-RIGHT GRADIENT, NO TEXT BOX */}
      {/* ============================================================ */}
      <section className="relative min-h-[48vh] sm:min-h-[52vh] flex items-center justify-start py-16 bg-[#0B0D10] border-b border-white/10 overflow-hidden">
        {/* Architectural Building Photography - Bright & Clear */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/hero-contact.jpg"
            alt="Modern Architectural Building & Studio Entrance"
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
                Start the Conversation
              </span>
            </div>
            {/* Short Heading */}
            <h1 className="animate-hero-heading font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
              Let's Build Together.
            </h1>
            {/* One short sentence description */}
            <p className="animate-hero-desc text-xs sm:text-sm text-[#D0CDC5] font-light leading-relaxed max-w-lg drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)]">
              Ready to start your project? Let's discuss your architectural ideas and requirements.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. CONTACT CONTENT: DETAILS & FORM (DARK THEME) */}
      {/* ============================================================ */}
      <section className="py-20 bg-[#0B0D10] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Contact Details & Hours */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-bold mb-2 block">
                  Office & Contact Info
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#FAF9F5] mb-4">
                  {COMPANY_INFO.name}
                </h2>
                <p className="text-xs sm:text-sm text-[#A6A29A] font-light leading-relaxed">
                  Our studio in Kodikkunnu, Palakkad welcomes homeowners, investors, and developers seeking creative, cost-effective architectural design and turnkey supervision.
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-4">
                {/* Address */}
                <div className="p-5 rounded-xl bg-[#12161C] border border-white/10 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-1">
                      Office Address
                    </h3>
                    <p className="text-xs sm:text-sm text-[#D0CDC5] leading-relaxed">
                      Ansar Complex, Kodikkunnu,<br />
                      Palakkad District, Kerala – 679305, India.
                    </p>
                  </div>
                </div>

                {/* Phones */}
                <div className="p-5 rounded-xl bg-[#12161C] border border-white/10 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-1">
                      Direct Phone Lines
                    </h3>
                    <div className="flex flex-col gap-1 text-xs sm:text-sm">
                      <a href={`tel:${COMPANY_INFO.phones[0].raw}`} className="text-[#D0CDC5] hover:text-[#C5A059] transition-colors font-medium">
                        +91 {COMPANY_INFO.phones[0].raw} (Primary)
                      </a>
                      <a href={`tel:${COMPANY_INFO.phones[1].raw}`} className="text-[#D0CDC5] hover:text-[#C5A059] transition-colors font-medium">
                        +91 {COMPANY_INFO.phones[1].raw}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Emails */}
                <div className="p-5 rounded-xl bg-[#12161C] border border-white/10 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-1">
                      Email Correspondence
                    </h3>
                    <div className="flex flex-col gap-1 text-xs sm:text-sm">
                      <a href={`mailto:${COMPANY_INFO.emails[0]}`} className="text-[#D0CDC5] hover:text-[#C5A059] transition-colors">
                        {COMPANY_INFO.emails[0]}
                      </a>
                      <a href={`mailto:${COMPANY_INFO.emails[1]}`} className="text-[#D0CDC5] hover:text-[#C5A059] transition-colors">
                        {COMPANY_INFO.emails[1]}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="p-5 rounded-xl bg-[#12161C] border border-white/10 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="w-full">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-2">
                      Studio Business Hours
                    </h3>
                    <div className="space-y-1 text-xs text-[#A6A29A]">
                      <div className="flex justify-between">
                        <span>Monday – Saturday:</span>
                        <span className="text-white font-medium">9:00 AM – 7:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span className="text-[#DFBA6D] font-medium">Holiday</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Quick Connect */}
              <div className="p-5 rounded-xl bg-[#0D1014] border border-[#25D366]/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#25D366] font-semibold block">Instant Messaging</span>
                  <div className="text-sm font-bold text-white">Connect via WhatsApp</div>
                </div>
                <a
                  href={COMPANY_INFO.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat Now</span>
                </a>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-2xl bg-[#12161C] border border-[#C5A059]/25 shadow-2xl relative">
                <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-bold mb-2 block">
                  Send an Inquiry
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#FAF9F5] mb-2">
                  Get in Touch with Us
                </h2>
                <p className="text-xs sm:text-sm text-[#A6A29A] font-light mb-8">
                  Still have questions? Contact us using the form below.
                </p>

                {submitted ? (
                  <div className="py-12 px-6 text-center flex flex-col items-center justify-center animate-fade-in">
                    <div className="w-16 h-16 rounded-full bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center text-[#C5A059] mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white mb-2">
                      Message Received!
                    </h3>
                    <p className="text-sm text-[#D0CDC5] max-w-md mx-auto mb-6 leading-relaxed">
                      Thank you for contacting <strong className="text-white">Smart Homes Builders and Designers</strong>. Our team will review your project requirements and respond to <span className="text-[#C5A059] font-medium">{formData.email}</span> shortly.
                    </p>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded bg-white/10 hover:bg-[#C5A059] text-white hover:text-[#0B0D10] text-xs uppercase tracking-wider font-semibold transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-xs uppercase tracking-wider text-[#D0CDC5] font-semibold mb-1.5">
                        Full Name <span className="text-[#C5A059]">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className={`w-full px-4 py-3 rounded-lg bg-[#0B0D10] border ${
                          errors.fullName ? 'border-red-500' : 'border-white/15 focus:border-[#C5A059]'
                        } text-white placeholder-stone-600 text-sm focus:outline-none transition-colors`}
                      />
                      {errors.fullName && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Email and Phone Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-xs uppercase tracking-wider text-[#D0CDC5] font-semibold mb-1.5">
                          Email Address <span className="text-[#C5A059]">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. ramesh@example.com"
                          className={`w-full px-4 py-3 rounded-lg bg-[#0B0D10] border ${
                            errors.email ? 'border-red-500' : 'border-white/15 focus:border-[#C5A059]'
                          } text-white placeholder-stone-600 text-sm focus:outline-none transition-colors`}
                        />
                        {errors.email && (
                          <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-[#D0CDC5] font-semibold mb-1.5">
                          Phone Number <span className="text-[#8E8A82] text-[10px] font-normal">(Optional)</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 9845012345"
                          className="w-full px-4 py-3 rounded-lg bg-[#0B0D10] border border-white/15 focus:border-[#C5A059] text-white placeholder-stone-600 text-sm focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-xs uppercase tracking-wider text-[#D0CDC5] font-semibold mb-1.5">
                        Subject <span className="text-[#C5A059]">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. New Residential Home Architectural Planning"
                        className={`w-full px-4 py-3 rounded-lg bg-[#0B0D10] border ${
                          errors.subject ? 'border-red-500' : 'border-white/15 focus:border-[#C5A059]'
                        } text-white placeholder-stone-600 text-sm focus:outline-none transition-colors`}
                      />
                      {errors.subject && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.subject}</span>
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-xs uppercase tracking-wider text-[#D0CDC5] font-semibold mb-1.5">
                        Message <span className="text-[#C5A059]">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your plot location, requirements, budget goals, or preferred architectural style..."
                        className={`w-full px-4 py-3 rounded-lg bg-[#0B0D10] border ${
                          errors.message ? 'border-red-500' : 'border-white/15 focus:border-[#C5A059]'
                        } text-white placeholder-stone-600 text-sm focus:outline-none transition-colors resize-none`}
                      />
                      {errors.message && (
                        <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-lg bg-[#C5A059] hover:bg-[#D4AF37] disabled:bg-stone-700 text-[#0B0D10] font-bold text-xs uppercase tracking-widest transition-all shadow-xl shadow-[#C5A059]/20 active:scale-[0.99] cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-[#0B0D10] border-t-transparent rounded-full animate-spin" />
                            <span>Sending Message...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-[11px] text-[#8E8A82] text-center pt-2">
                      Direct consultation inquiries are also received immediately via{' '}
                      <a href={`tel:${COMPANY_INFO.phones[0].raw}`} className="text-[#C5A059] underline">
                        phone
                      </a>{' '}
                      or{' '}
                      <a href={COMPANY_INFO.whatsapp.url} target="_blank" rel="noopener noreferrer" className="text-[#25D366] underline">
                        WhatsApp
                      </a>.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. GOOGLE MAP LOCATION EMBED */}
      {/* ============================================================ */}
      <section className="py-16 bg-[#080A0C] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between pb-6 mb-6 border-b border-white/10 gap-3">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C5A059] font-semibold">Location Map</span>
              <h3 className="font-display text-xl font-bold text-white">Find Us in Kodikkunnu, Palakkad</h3>
            </div>
            <a
              href={COMPANY_INFO.map.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#C5A059] hover:text-white transition-colors"
            >
              <span>Open in Google Maps App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#C5A059]/30 shadow-2xl h-[420px] bg-[#12161C] relative">
            <iframe
              src={COMPANY_INFO.map.embedUrl}
              title="Smart Homes Builders and Designers Location Map"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(95%)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
