import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, CheckCircle2, User, Video, ArrowUpRight, Moon, Sun } from 'lucide-react';
import './Experiencia.css';

const Experiencia = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(document.body.classList.contains('dark'));
    
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

      {/* Main Experiencia Content */}
      <main className="experiencia-grid">
        {/* Left Column: Intro */}
        <div className="card exp-main-card">
          <h1 className="exp-title">Mi Experiencia y Enfoque</h1>
          <p className="exp-text">
            Soy Reyna Quintana, Licenciada en Psicología por la Universidad Veracruzana, y me encantaría caminar junto a ti en tu proceso de sanación y autodescubrimiento a través de un espacio diseñado para mujeres de todas las edades, niños y adolescentes. Mi enfoque se distingue por una calidad humana y empatía profunda, ofreciendo un acompañamiento especializado que integra herramientas y métodos actualizados para obtener resultados tangibles, abordando desde los aspectos históricos que originan tus dificultades hasta los desafíos actuales que enfrentas en cada etapa de tu vida.
          </p>
          <p className="exp-text mt-4">
            Cuento con una sólida preparación en casos reales y una formación integral que abarca la psicología laboral y educativa, aunque mi verdadera pasión y especialidad residen en la psicología clínica dedicada al bienestar femenino. Mi compromiso es brindarte un tratamiento profesional donde te sientas segura y comprendida, utilizando mi experiencia académica y clínica para guiarte hacia una vida más plena y consciente, siempre bajo una perspectiva joven y renovada que se adapta a las necesidades únicas de las mujeres hoy en día.
          </p>
        </div>

        {/* Right Column: Key Details */}
        <div className="exp-sidebar">
          {/* Terapeutic Approach */}
          <div className="card exp-small-card">
            <h3>Enfoque terapéutico</h3>
            <ul className="exp-list">
              <li><CheckCircle2 color="var(--color-bg)" fill="var(--color-secondary)" size={24} /> Terapia de aceptación y compromiso</li>
              {/*<li><CheckCircle2 color="var(--color-bg)" fill="var(--color-secondary)" size={24} /> Terapia breve centrada en soluciones</li>*/}
            </ul>
          </div>

          {/* Diseases and Focus */}
          <div className="card exp-small-card">
            <h3>Principales problemas tratadas</h3>
            <div className="tags-container">
              <span className="pill-tag">Ansiedad</span>
              <span className="pill-tag">Depresión</span>
              <span className="pill-tag">Dependencia emocional</span>
            </div>
            
            <h3 className="mt-6">Enfocado en:</h3>
            <ul className="exp-bullet-list">
              <li>Trastornos de ansiedad</li>
            </ul>
          </div>

          {/* Consultation Types */}
          <div className="card exp-small-card highlight-card">
            <div className="exp-info-row">
              <User size={24} />
              <div>
                <h4>Pacientes que atiendo</h4>
                <p>Mujeres de todas las edades</p>
                <p>Niños</p>
                <p>Adolescentes</p>
              </div>
            </div>
            <div className="divider-subtle" />
            <div className="exp-info-row w-link">
              <Video size={24} />
              <div>
                <h4>Tipos de consulta</h4>
                <a href="https://api.whatsapp.com/message/7WDSYHZ3HKOZB1?autoload=1&app_absent=0" target="_blank" rel="noreferrer" className="exp-link">
                  Videoconsulta <span className="underline">Crea tu cita</span> <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Experiencia;