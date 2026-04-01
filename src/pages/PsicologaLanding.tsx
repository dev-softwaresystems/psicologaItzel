import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PsicologaLanding.css';
import perfilImg from '../assets/imgs/perfil.jpeg';
import hablemosImg from '../assets/imgs/hablemos.jpg';
import { ArrowUpRight, Menu, X, ArrowLeft, Moon, Sun } from 'lucide-react';

const PsicologaLanding: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(document.body.classList.contains('dark'));
    
    // Listener for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        const isDark = e.matches;
        if (isDark) {
          document.body.classList.add('dark');
        } else {
          document.body.classList.remove('dark');
        }
        setIsDarkMode(isDark);
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    const isDark = document.body.classList.toggle('dark');
    setIsDarkMode(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  const services = [
    { name: 'Consulta en línea'},
    { name: 'Terapia para adultos'},
    { name: 'Consulta de primera vez'},
    { name: 'Manejo de duelo'},
    { name: 'Orientación vocacional'},
    { name: 'Evaluación psicológica'},
    { name: 'Terapia de pareja '},
    { name: 'Talleres y charlas'},
    { name: 'NOM - 035'},
  ];

  return (
    <div className="psicologa-container">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-card">
            <div className="mobile-menu-header">
              <div className="brand mobile-brand">
                <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                  <span className="light">REYNA QUINTANA</span> <strong>PSICÓLOGA</strong>
                </Link>
              </div>
              <button className="close-menu-btn" onClick={() => setIsMobileMenuOpen(false)}>
                <X size={32} strokeWidth={3} color="#000000" />
              </button>
            </div>
            <nav className="mobile-menu-nav">
              <Link to="/experiencia" onClick={() => setIsMobileMenuOpen(false)}>EXPERIENCIA</Link>
              <a href="#" onClick={() => setIsMobileMenuOpen(false)}>CONTACTAME</a>
              <button onClick={toggleTheme} className="theme-toggle" aria-label="Cambiar Tema" style={{ marginTop: '24px' }}>
                {isDarkMode ? <Sun size={32} /> : <Moon size={32} />}
              </button>
            </nav>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="header-card">
        <div className="brand">
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            <span className="light">REYNA QUINTANA</span> <strong>PSICÓLOGA</strong>
          </Link>
        </div>
        <nav className="header-nav">
          <Link to="/experiencia">EXPERIENCIA</Link>
          <a href="#">CONTACTO</a>
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Cambiar Tema">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>
        <button className="hamburger-btn" onClick={() => setIsMobileMenuOpen(true)}>
          <Menu size={28} color="#000000" />
        </button>
      </header>

      {/* Bento Grid */}
      <main className="bento-grid">
        {/* Column 1 */}
        <div className="bento-col col-1">
          <div className="card card-recupera">
            <div className="flower-icon">
                <svg viewBox="0 0 100 100" fill="none" stroke="#F8AFA6" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
                    {[0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165].map((angle, i) => (
                        <ellipse key={i} cx="50" cy="50" rx="40" ry="12" transform={`rotate(${angle} 50 50)`} />
                    ))}
                </svg>
            </div>
            <h1>Recupera tu paz,<br/>mejora tu<br/>autoestima y vive<br/>con propósito.</h1>
          </div>
          
          <div className="card card-hola">
            <div className="dot-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="#F8AFA6" xmlns="http://www.w3.org/2000/svg">
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                        <rect key={i} x="14" y="4" width="4" height="4" transform={`rotate(${angle} 16 16)`} />
                    ))}
                    <rect x="14" y="14" width="4" height="4" />
                </svg>
            </div>
            <p className="intro-text">
              ¡Hola! Mi nombre es Reyna<br/>Quintana, soy Licenciada en<br/>Psicología por la Universidad<br/>Veracruzana, me encantaría<br/>caminar junto a ti en tu proceso<br/>de sanación y auto descubrimiento.
            </p>
            <span className="cedula">No. de cédula: 14007125</span>
          </div>
        </div>

        {/* Column 2 */}
        <div className="bento-col col-2">
          <div className="card card-perfil">
            <img src={perfilImg} alt="Reyna Quintana" />
          </div>
          
          <a href="https://wa.me/527823825196" target="_blank" rel="noreferrer" className="card card-hablemos-action">
            <div className="hablemos-top">
              <span>Quisiera agendar<br/>una cita :)</span>
              <ArrowUpRight size={28} />
            </div>
            <h2>HABLEMOS</h2>
          </a>
        </div>

        {/* Column 3 */}
        <div className="bento-col col-3">
          <div className="flip-scene">
            <div className={`flipper ${showServices ? 'is-flipped' : ''}`}>
              
              {/* FRONT */}
              <div className="card card-info card-front">
                <h3 className='conoceme-info-header'>Conoceme</h3>
                <div className="conoceme-img-container">
                    <img src={hablemosImg} alt="Hablemos" />
                </div>
                <div className="divider" />
                <Link to="/experiencia" className="info-item info-link">
                    <h4>Experiencia</h4>
                </Link>
                <div className="divider" />
                <a href="#" className="info-item info-link" onClick={(e) => { e.preventDefault(); setShowServices(true); }}>
                    <h4>Servicios y Precios</h4>
                </a>
                <div className="divider" />
                <a href="#" className="info-item info-link">
                    <h4>Opiniones</h4>
                </a>
              </div>

              {/* BACK */}
              <div className="card card-info card-back" style={{ overflowY: 'auto' }}>
                <div className="back-header">
                  <button onClick={() => setShowServices(false)} className="back-btn">
                    <ArrowLeft size={24} color="#000000" />
                  </button>
                  <h3 className="conoceme-info-header" style={{ marginBottom: 0 }}>Servicios y precios</h3>
                </div>
                
                <div className="services-list">
                  {services.map((svc, idx) => (
                    <div className="service-item" key={idx}>
                      <div className="service-details">
                        <p className="service-title">{svc.name}</p>
                      </div>
                      <a href="https://wa.me/527823825196" target="_blank" rel="noreferrer" className="agendar-btn">
                        Agendar cita
                      </a>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
          
          <div className="card-socials">
            <a href="https://www.instagram.com/_psireynaquintana/" target="_blank" rel="noreferrer">INSTAGRAM</a>
            <a href="https://wa.me/527823825196" target="_blank" rel="noreferrer">WHATSAPP</a>
            <a href="#">LINKEDIN</a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PsicologaLanding;
