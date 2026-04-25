import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PsicologaLanding from './pages/PsicologaLanding';
import Experiencia from './pages/Experiencia';
import Opiniones from './pages/Opiniones';
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
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<PsicologaLanding />} />
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/opiniones" element={<Opiniones />} />
        </Routes>
        <footer style={{ textAlign: 'center', padding: '10px 24px', opacity: 0.7, fontSize: '14px', fontWeight: '500', marginTop: 'auto' }}>
          creado por <a href="https://www.instagram.com/dev.softwaresystem/" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', color: 'inherit' }}>SoftwareSystems.dev</a>
        </footer>
      </div>
    </Router>
  );
}

export default App;
