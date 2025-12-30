import { useState } from 'react';
import { Hero } from './components/Hero';
import { Process } from './components/Process';
import { Features } from './components/Features';
import { BookingForm } from './components/BookingForm';
import { Footer } from './components/Footer';

function App() {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <Hero onBookCall={() => setIsBookingFormOpen(true)} />
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

export default App;
