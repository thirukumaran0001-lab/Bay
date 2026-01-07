import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ADC12 } from './pages/ADC12';
import { LM25 } from './pages/LM25';
import { LM6 } from './pages/LM6';
import { ProcessDetailsWrapper } from './components/ProcessDetailsWrapper';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { CursorGlow } from './components/CursorGlow';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CursorGlow />
      <div className="min-h-screen bg-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adc12" element={<ADC12 />} />
          <Route path="/lm25" element={<LM25 />} />
          <Route path="/lm6" element={<LM6 />} />
          <Route path="/process" element={<ProcessDetailsWrapper />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
