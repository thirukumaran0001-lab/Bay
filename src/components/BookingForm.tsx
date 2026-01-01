import { useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';
import { submitContactForm, type ContactSubmission } from '../lib/supabase';

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingForm({ isOpen, onClose }: BookingFormProps) {
  const [formData, setFormData] = useState<ContactSubmission>({
    company_name: '',
    contact_name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await submitContactForm(formData);
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setFormData({
          company_name: '',
          contact_name: '',
          email: '',
          phone: '',
          message: ''
        });
      }, 2000);
    } catch (err) {
      console.error('Form submission error:', err);
      const errorMessage = err instanceof Error ? err.message : 'Failed to submit form. Please try again.';
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fadeIn" onClick={onClose}>
      <div className="relative w-full max-w-2xl bg-black border-2 border-red-500/30 shadow-2xl shadow-red-500/10 overflow-hidden animate-scaleIn" onClick={(e) => e.stopPropagation()}>
        <div className="p-8 sm:p-12">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-4xl font-light text-white mb-3">Book a Call</h2>
              <p className="text-gray-400 font-light">Let's discuss your aluminum requirements</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 transition-all duration-300 text-gray-400 hover:text-white hover:rotate-90"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {isSuccess ? (
            <div className="py-12 text-center animate-scaleIn">
              <div className="w-20 h-20 mx-auto mb-6 bg-red-600/20 backdrop-blur-sm border-2 border-red-500/50 flex items-center justify-center animate-scaleIn shadow-lg shadow-red-500/30">
                <CheckCircle className="w-10 h-10 text-red-400 animate-scaleIn" />
              </div>
              <h3 className="text-2xl font-light text-white mb-2 animate-slideUp">Success!</h3>
              <p className="text-gray-400 font-light animate-slideUp" style={{ animationDelay: '100ms' }}>We'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company_name" className="block text-sm font-light text-white mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company_name"
                    name="company_name"
                    required
                    value={formData.company_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all font-light"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="contact_name" className="block text-sm font-light text-white mb-2">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    id="contact_name"
                    name="contact_name"
                    required
                    value={formData.contact_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all font-light"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-light text-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all font-light"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-light text-white mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all font-light"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-light text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all resize-none font-light"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/50 text-red-400 text-sm font-light">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-red-600/20 backdrop-blur-sm border-2 border-red-500/40 text-white font-light hover:bg-red-600/30 hover:border-red-500/70 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
              >
                {isSubmitting ? (
                  'Submitting...'
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
