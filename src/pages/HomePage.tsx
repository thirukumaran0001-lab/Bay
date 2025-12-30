import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { AboutUs } from '../components/AboutUs';
import { Process } from '../components/Process';
import { Features } from '../components/Features';
import { BookingForm } from '../components/BookingForm';
import { Footer } from '../components/Footer';

export function HomePage() {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900">
      <Hero
        onBookCall={() => setIsBookingFormOpen(true)}
        onLearnMore={() => navigate('/process')}
      />
      <AboutUs />
      <Process />
      <Features />
      <Footer />
      <BookingForm
        isOpen={isBookingFormOpen}
        onClose={() => setIsBookingFormOpen(false)}
      />
    </div>
  );
}
