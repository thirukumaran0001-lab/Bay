import { useState } from 'react';
import { Hero } from '../components/Hero';
import { AboutUs } from '../components/AboutUs';
import { Process } from '../components/Process';
import { Features } from '../components/Features';
import { BookingForm } from '../components/BookingForm';

export function Home() {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);

  return (
    <>
      <Hero
        onBookCall={() => setIsBookingFormOpen(true)}
        onLearnMore={() => window.location.href = '/process'}
      />
      <AboutUs />
      <Process />
      <Features />
      <BookingForm
        isOpen={isBookingFormOpen}
        onClose={() => setIsBookingFormOpen(false)}
      />
    </>
  );
}
