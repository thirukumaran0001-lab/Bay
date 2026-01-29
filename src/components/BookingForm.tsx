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
      console.log('Starting form submission...');

      try {
        await submitContactForm(formData);
        console.log('Database save successful');
      } catch (dbError) {
        console.error('Database save failed:', dbError);
      }

      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      console.log('Checking environment variables:', {
        hasUrl: !!supabaseUrl,
        hasKey: !!supabaseAnonKey,
        url: supabaseUrl
      });

      if (!supabaseUrl || !supabaseAnonKey) {
        console.error('Missing Supabase environment variables');
      } else {
        try {
          console.log('Calling edge function...');
          const emailResponse = await fetch(`${supabaseUrl}/functions/v1/send-contact-email`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${supabaseAnonKey}`,
            },
            body: JSON.stringify(formData),
          });

          const emailData = await emailResponse.json();
          console.log('Edge function response:', { status: emailResponse.status, data: emailData });

          if (!emailResponse.ok) {
            console.error('Email notification failed:', emailData);
          } else {
            console.log('Email sent successfully via edge function');
          }
        } catch (emailError) {
          console.error('Edge function error:', emailError);
        }
      }

      console.log('Calling Make.com webhook...');
      const webhookResponse = await fetch('https://hook.eu1.make.com/wpem3gcn8d52agmqaombpx0drbf14dm4', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Webhook response status:', webhookResponse.status);

      if (!webhookResponse.ok) {
        const webhookError = await webhookResponse.text();
        console.error('Webhook failed:', webhookError);
        throw new Error('Failed to send message. Please try again.');
      }

      console.log('Form submission completed successfully');
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
      <div className="relative w-full max-w-2xl bg-neutral-950 rounded-lg border border-neutral-800 shadow-premium-lg overflow-hidden animate-scaleIn" onClick={(e) => e.stopPropagation()}>
        <div className="p-8 sm:p-12">
          <div className="flex justify-between items-start mb-10">
            <div>
              <h2 className="text-3xl font-semibold text-white mb-2">Book a Call</h2>
              <p className="text-neutral-400 font-normal text-sm">Let's discuss your aluminum requirements</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-md hover:bg-white/10 transition-all duration-300 text-neutral-400 hover:text-white hover:rotate-90"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {isSuccess ? (
            <div className="py-12 text-center animate-scaleIn">
              <div className="w-16 h-16 mx-auto mb-6 bg-brand-600/10 rounded-full border border-brand-600/30 flex items-center justify-center animate-scaleIn">
                <CheckCircle className="w-8 h-8 text-brand-600 animate-scaleIn" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2 animate-slideUp">Success!</h3>
              <p className="text-neutral-400 font-normal text-sm animate-slideUp" style={{ animationDelay: '100ms' }}>We'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="company_name" className="block text-sm font-medium text-white mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company_name"
                    name="company_name"
                    required
                    value={formData.company_name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-md bg-white/5 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600 transition-all font-normal"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="contact_name" className="block text-sm font-medium text-white mb-2">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    id="contact_name"
                    name="contact_name"
                    required
                    value={formData.contact_name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-md bg-white/5 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600 transition-all font-normal"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-md bg-white/5 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600 transition-all font-normal"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-md bg-white/5 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600 transition-all font-normal"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-md bg-white/5 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600 transition-all resize-none font-normal"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              {error && (
                <div className="p-4 rounded-md bg-brand-600/10 border border-brand-600/30 text-brand-400 text-sm font-normal">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-md bg-brand-600 text-white font-medium hover:bg-brand-700 hover:shadow-brand transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group active:scale-[0.98]"
              >
                {isSubmitting ? (
                  'Submitting...'
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
