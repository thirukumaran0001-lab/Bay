import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ADC12 } from './pages/ADC12';
import { LM24 } from './pages/LM24';
import { A380 } from './pages/A380';
import { CustomAlloys } from './pages/CustomAlloys';
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
          <Route path="/lm24" element={<LM24 />} />
          <Route path="/a380" element={<A380 />} />
          <Route path="/custom-alloys" element={<CustomAlloys />} />
          <Route path="/process" element={<ProcessDetailsWrapper />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
