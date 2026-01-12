import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { AboutUs } from '../components/AboutUs';
import { Process } from '../components/Process';
import { Features } from '../components/Features';
import { LMESection } from '../components/LMESection';
import { BookingForm } from '../components/BookingForm';

export function Home() {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Hero
        onBookCall={() => setIsBookingFormOpen(true)}
        onLearnMore={() => navigate('/process')}
      />
      <AboutUs />
      <Process />
      <Features />
      <LMESection />
      <BookingForm
        isOpen={isBookingFormOpen}
        onClose={() => setIsBookingFormOpen(false)}
      />
    </>
  );
}
