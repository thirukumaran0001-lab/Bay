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
      setError('Failed to submit form. Please try again.');
      console.error(err);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white shadow-2xl overflow-hidden border-4 border-red-600">
        <div className="absolute top-0 left-0 right-0 h-2 bg-red-600"></div>

        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2 border-b-4 border-red-600 pb-2 inline-block">Book a Call</h2>
              <p className="text-gray-700 mt-4 font-medium">Let's discuss your aluminum requirements</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 transition-colors text-gray-600 hover:text-gray-900"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {isSuccess ? (
            <div className="py-12 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-red-600 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Success!</h3>
              <p className="text-gray-700 font-medium">We'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company_name" className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company_name"
                    name="company_name"
                    required
                    value={formData.company_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-red-600 transition-all font-medium"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="contact_name" className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    id="contact_name"
                    name="contact_name"
                    required
                    value={formData.contact_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-red-600 transition-all font-medium"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-red-600 transition-all font-medium"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-red-600 transition-all font-medium"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-red-600 transition-all resize-none font-medium"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              {error && (
                <div className="p-4 bg-red-50 border-2 border-red-600 text-red-700 text-sm font-bold">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-red-600 text-white font-bold uppercase tracking-wider shadow-lg hover:bg-red-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
              >
                {isSubmitting ? (
                  'SUBMITTING...'
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
