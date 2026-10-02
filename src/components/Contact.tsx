import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Clock, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/site';

interface ContactProps {
  initialSubject?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialSubject = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    subject: initialSubject || 'General Strategic Inquiry',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Update subject if prop changes
  React.useEffect(() => {
    if (initialSubject) {
      setFormData((prev) => ({ ...prev, subject: initialSubject }));
    }
  }, [initialSubject]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) newErrors.message = 'Please enter your message or proposal.';
    if (formData.message.trim().length < 15) {
      newErrors.message = 'Please provide at least 15 characters of detail.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate professional processing delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        subject: 'General Strategic Inquiry',
        message: '',
      });
      setErrors({});
    }, 800);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#061522] relative overflow-hidden border-t border-[#D6A84F]/10">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D6A84F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact & Group Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E243B] border border-[#D6A84F]/30">
                <Mail className="w-3.5 h-3.5 text-[#D6A84F]" />
                <span className="text-xs font-semibold tracking-widest uppercase text-[#F3D78B]">
                  Connect With Us
                </span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Let's Build <br />
                <span className="text-gold-gradient">Something Valuable.</span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Have an investment opportunity, business proposal or partnership idea? We'd love to hear from you.
              </p>
            </div>

            {/* Contact Information Cards */}
            <div className="space-y-4">
              {/* Location */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0E243B]/80 border border-white/5">
                <div className="w-11 h-11 rounded-lg bg-[#061522] border border-[#D6A84F]/30 flex items-center justify-center text-[#D6A84F] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">
                    Corporate Office
                  </h4>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    {siteConfig.contact.location}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0E243B]/80 border border-white/5">
                <div className="w-11 h-11 rounded-lg bg-[#061522] border border-[#D6A84F]/30 flex items-center justify-center text-[#D6A84F] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">
                    Direct Inquiries
                  </h4>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-sm font-semibold text-[#F3D78B] hover:underline mt-0.5 block"
                  >
                    {siteConfig.contact.email}
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Responses typically within 24-48 business hours
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0E243B]/80 border border-white/5">
                <div className="w-11 h-11 rounded-lg bg-[#061522] border border-[#D6A84F]/30 flex items-center justify-center text-[#D6A84F] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">
                    Telephone
                  </h4>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    {siteConfig.contact.phone}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {siteConfig.contact.businessHours}
                  </p>
                </div>
              </div>
            </div>

            {/* Trust badge */}
            <div className="p-4 rounded-xl bg-[#061522] border border-[#D6A84F]/20 flex items-center gap-3 text-xs text-slate-300">
              <ShieldCheck className="w-5 h-5 text-[#D6A84F] shrink-0" />
              <span>
                All inquiries and business proposals are evaluated under strict confidentiality agreements.
              </span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#0E243B]/80 border border-[#D6A84F]/30 p-6 sm:p-10 shadow-navy-elevated backdrop-blur-md">
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-[#D6A84F]/20 border border-[#D6A84F] flex items-center justify-center mx-auto text-[#D6A84F]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white">
                    Inquiry Received
                  </h3>
                  <p className="text-slate-300 max-w-md mx-auto text-sm leading-relaxed">
                    Thank you for reaching out to ARAV NEXUS. Our executive investment &amp; operations
                    team will review your proposal and get in touch shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl text-sm font-semibold text-[#061522] bg-gradient-to-r from-[#F5D88A] to-[#D6A84F] hover:from-[#FAE4A8] hover:to-[#D6A84F] transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Full Name <span className="text-[#D6A84F]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-xl bg-[#061522] border ${
                          errors.fullName ? 'border-red-500' : 'border-white/10 focus:border-[#D6A84F]'
                        } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-[#D6A84F] transition-colors`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Email Address <span className="text-[#D6A84F]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#061522] border ${
                          errors.email ? 'border-red-500' : 'border-white/10 focus:border-[#D6A84F]'
                        } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-[#D6A84F] transition-colors`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-[#061522] border border-white/10 focus:border-[#D6A84F] text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-[#D6A84F] transition-colors"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Nexus Capital / Enterprise Inc."
                        className="w-full px-4 py-3 rounded-xl bg-[#061522] border border-white/10 focus:border-[#D6A84F] text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-[#D6A84F] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Subject / Sector Interest
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#061522] border border-white/10 focus:border-[#D6A84F] text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#D6A84F] transition-colors"
                    >
                      <option value="General Strategic Inquiry">General Strategic Inquiry</option>
                      <option value="Real Estate Investment & Co-Development">Real Estate Investment &amp; Co-Development</option>
                      <option value="IT & Technology Venture Partnership">IT &amp; Technology Venture Partnership</option>
                      <option value="Billing Solutions & Fintech Collaboration">Billing Solutions &amp; Fintech Collaboration</option>
                      <option value="Renewable Energy Projects">Renewable Energy Projects</option>
                      <option value="Emerging Ventures Proposal">Emerging Ventures Proposal</option>
                      <option value="Career & Talent Inquiries">Career &amp; Talent Inquiries</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Message / Proposal Summary <span className="text-[#D6A84F]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please outline your opportunity, market size, requirements or discussion topics..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#061522] border ${
                        errors.message ? 'border-red-500' : 'border-white/10 focus:border-[#D6A84F]'
                      } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-[#D6A84F] transition-colors resize-none`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base text-[#061522] bg-gradient-to-r from-[#F5D88A] via-[#D6A84F] to-[#C49539] hover:from-[#FAE4A8] hover:to-[#D6A84F] shadow-gold-sm hover:shadow-gold-md transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Clock className="w-5 h-5 animate-spin text-[#061522]" />
                          <span>Processing Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Inquiry</span>
                          <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
