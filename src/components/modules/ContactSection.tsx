import React, { useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { Button } from '../ui/Button';
import { Mail, CheckCircle2, Shield, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'compliance',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please provide your name, corporate email address, and technical requirements.');
      return;
    }
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setError('Please provide a valid corporate email format (e.g. name@organization.com).');
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-b border-[#263449] bg-[#07111F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Institutional Contact */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-mono text-[#FF8A24] uppercase tracking-wider">
              {t('contact.kicker', 'Corporate Inquiries')}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F4F7FA]">
              {t('contact.title', 'Direct technical communication.')}
            </h2>
            <p className="text-sm sm:text-base text-[#AAB7C7] leading-relaxed">
              {t(
                'contact.subtitle',
                'We collaborate with enterprise engineering teams, compliance counsel, and research institutions.'
              )}
            </p>

            <div className="p-5 bg-[#111C2B] border border-[#263449] rounded-xl space-y-4 text-xs font-mono">
              <div className="text-[#F4F7FA] font-semibold flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#38BDF8]" />
                <span>Institutional Communication Endpoints</span>
              </div>
              <div className="space-y-2 text-[#AAB7C7]">
                <div>
                  <span className="text-[#8190A3] block">General & Enterprise Inquiries:</span>
                  <a
                    href="mailto:contact@trimindslabs.com"
                    className="text-[#FF6A00] hover:text-[#FF8A24] transition-colors"
                  >
                    contact@trimindslabs.com
                  </a>
                </div>
                <div>
                  <span className="text-[#8190A3] block">Systems & Platform Engineering:</span>
                  <a
                    href="mailto:engineering@trimindslabs.com"
                    className="text-[#F4F7FA] hover:text-[#FF6A00] transition-colors"
                  >
                    engineering@trimindslabs.com
                  </a>
                </div>
                <div>
                  <span className="text-[#8190A3] block">Security & Vulnerability Disclosure:</span>
                  <a
                    href="mailto:security@trimindslabs.com"
                    className="text-[#F4F7FA] hover:text-[#FF6A00] transition-colors"
                  >
                    security@trimindslabs.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 bg-[#111C2B] border border-[#263449] rounded-2xl shadow-xl">
              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E] mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#F4F7FA]">
                    Corporate Inquiry Transmitted
                  </h3>
                  <p className="text-sm text-[#AAB7C7] max-w-md mx-auto leading-relaxed">
                    {t(
                      'contact.successMessage',
                      'Inquiry registered. A member of our systems engineering team will respond from contact@trimindslabs.com within 24 business hours.'
                    )}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: 'compliance', message: '' });
                    }}
                    className="mt-4"
                  >
                    Send Another Transmission
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="p-3 bg-[#EF4444]/10 border border-[#EF4444]/30 rounded-lg text-xs text-[#EF4444]">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#AAB7C7] mb-1.5 uppercase">
                        {t('contact.nameLabel', 'Full Name / Organization')} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. Helena Vance / Enterprise Corp"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#07111F] border border-[#263449] rounded-lg text-[#F4F7FA] placeholder-[#8190A3]/60 focus:border-[#FF6A00] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#AAB7C7] mb-1.5 uppercase">
                        {t('contact.emailLabel', 'Corporate Email')} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="vance@corporation.eu"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#07111F] border border-[#263449] rounded-lg text-[#F4F7FA] placeholder-[#8190A3]/60 focus:border-[#FF6A00] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#AAB7C7] mb-1.5 uppercase">
                      {t('contact.subjectLabel', 'Inquiry Category')}
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#07111F] border border-[#263449] rounded-lg text-[#F4F7FA] focus:border-[#FF6A00] focus:outline-none cursor-pointer"
                    >
                      <option value="compliance">Compliance Evidence Engine Evaluation</option>
                      <option value="geospatial">Geo-AI Remote Sensing Partnership</option>
                      <option value="cloudOps">FastMCP Multi-Cloud Orchestration</option>
                      <option value="logistics">TLP Next-Gen & Object Scanner Integration</option>
                      <option value="security">Security & Audit Disclosure</option>
                      <option value="general">General Systems Engineering Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#AAB7C7] mb-1.5 uppercase">
                      {t('contact.messageLabel', 'Technical Scope / Requirements')} *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify your technical environment, jurisdictional directives, or system integration requirements..."
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#07111F] border border-[#263449] rounded-lg text-[#F4F7FA] placeholder-[#8190A3]/60 focus:border-[#FF6A00] focus:outline-none resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={<Send className="w-4 h-4" />}
                    className="w-full justify-center"
                  >
                    {t('contact.submitButton', 'Transmit Corporate Inquiry')}
                  </Button>

                  <div className="text-[11px] font-mono text-[#8190A3] text-center pt-2">
                    {t('contact.corporateAliasesNotice', 'Official aliases: contact@trimindslabs.com · engineering@trimindslabs.com')}
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
