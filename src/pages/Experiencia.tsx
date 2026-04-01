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
        <div className="exp-main-col">
          {/* Card 1: Mi Enfoque */}
          <div className="card exp-main-card" style={{ animationDelay: '0.1s' }}>
            <h1 className="exp-title">Mi Enfoque</h1>
            <h2 className="exp-subtitle" style={{ fontSize: '22px', fontWeight: '600', marginBottom: '12px' }}>Terapia de aceptación y compromiso</h2>
            <p className="exp-text" style={{ marginBottom: 0 }}>
              Su propósito es trabajar a través del autoconocimiento y actuar conforme a nuestros valores para así lograr una vida significativa y placentera.
            </p>
          </div>

          {/* Card 2: Mi Experiencia */}
          <div className="card exp-main-card" style={{ animationDelay: '0.2s' }}>
            <h1 className="exp-title" style={{ marginBottom: '16px' }}>Mi Experiencia</h1>
            <p className="exp-text">
              Tengo 3 años acompañando a mujeres de distintas edades en la consulta privada, ademas de contar con experiencia atendiendo a niños y adolescentes a traves de talleres grupales y sesiones individuales.
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                "2022 | Curso Recursos Humanos.",
                "2023 | Curso NOM - 035",
                "2023 | Curso - taller terapia de juego",
                "2025 | Diplomado neuropsicología",
                "2025 | Diplomado Terapia cognitivo - conductual",
                "2025 | Diplomado psicologia clinica"
              ].map((curso, index) => (
                <li key={index}>
                  <p className="exp-text" style={{ marginBottom: 0 }}>{curso}</p>
                </li>
              ))}
            </ul>
          </div>
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
              <span className="pill-tag">Autoestima</span>
              <span className="pill-tag">Duelo</span>
              <span className="pill-tag">Identidad</span>
              <span className="pill-tag">Maternidad</span>
              <span className="pill-tag">Bienestar emocional</span>
              <span className="pill-tag">Amor propio</span>
             </div>
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
                <a href="https://wa.me/527823825196" target="_blank" rel="noreferrer" className="exp-link">
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