import { useState } from 'react';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Process } from './components/Process';
import { Features } from './components/Features';
import { BookingForm } from './components/BookingForm';
import { Footer } from './components/Footer';
import { ProcessDetails } from './components/ProcessDetails';

function App() {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const [showProcessDetails, setShowProcessDetails] = useState(false);

  if (showProcessDetails) {
    return <ProcessDetails onBack={() => setShowProcessDetails(false)} />;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Hero
        onBookCall={() => setIsBookingFormOpen(true)}
        onLearnMore={() => setShowProcessDetails(true)}
      />
      <AboutUs />
      <Process />
      <Features />
      <Footer onProcessClick={() => setShowProcessDetails(true)} />
      <BookingForm
        isOpen={isBookingFormOpen}
        onClose={() => setIsBookingFormOpen(false)}
      />
    </div>
  );
}

export default App;
