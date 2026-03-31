import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PsicologaLanding from './pages/PsicologaLanding';
import Experiencia from './pages/Experiencia';
import './index.css';

function App() {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PsicologaLanding />} />
        <Route path="/experiencia" element={<Experiencia />} />
      </Routes>
    </Router>
  );
}

export default App;
