import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Moon, Sun, Quote } from 'lucide-react';
import './Opiniones.css';

const Opiniones = () => {
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

  const opiniones = [
    {
      paciente: "Paciente 1",
      valioso: "Que puedo expresarme sin sentirme juzgada.",
      experiencia: "Me ha ayudado mucho. Anteriormente había intentado con otros psicólogos y no había avanzado ni aprendido tanto como ahora."
    },
    {
      paciente: "Paciente 2",
      valioso: "Darme cuenta todo lo que he sanado.",
      experiencia: "Estoy muy satisfecha con lo que avance y me gustaría continuar"
    },
    {
      paciente: "Paciente 3",
      valioso: "El poder expresar mis emociones sin sentirme juzgada y obtener una perspectiva diferente de mis problemas o complejos.",
      experiencia: "Me sentí muy cómoda y contenida, y sentí progreso real con mis problemas, creo que marcó un antes y un después en como vivo mi vida."
    },
    {
      paciente: "Paciente 4",
      valioso: "El acompañamiento y la mejora emocional que he tenido.",
      experiencia: "Me ha gustado tener sesiones con usted, me he sentido con mucha confianza al momento de conversar las situaciones personales que he tenido durante mi vida. Gracias por siempre estar ❤️‍🩹."
    },
    {
      paciente: "Paciente 5",
      valioso: "El entender porque las cosas.",
      experiencia: "Excelente acompañamiento."
    },
    {
      paciente: "Paciente 6",
      valioso: "La organización de la psicóloga.",
      experiencia: "Ha sido una manera en la cual he podido expresarme sin necesidad de pensar que alguien estará juzgando. Sin embargo, ahora trato de  ponerle nombre cada uno de las situaciones/pensamientos por las cual atravieso y encontrar una mejor manera de intervenir con ellas. He tenido la oportunidad de aprender a leerme a mi misma y a conocerme más. Qué sin duda alguna, Reyna ha sido una guia en este proceso."
    },
    {
      paciente: "Paciente 7",
      valioso: "Poder sentirme validada y acompañada.",
      experiencia: "Me ha gustado bastante, desde el inicio me he sentido en un espacio cómodo donde se me escucha y me ha ayudado a gestionar mejor diferentes aspectos de mi vida ✨."
    },
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
                <X size={32} strokeWidth={3} color="var(--color-text)" />
              </button>
            </div>
            <nav className="mobile-menu-nav">
              <Link to="/experiencia" onClick={() => setIsMobileMenuOpen(false)}>EXPERIENCIA</Link>
              <a href="https://wa.me/527823825196" onClick={() => setIsMobileMenuOpen(false)}>CONTACTAME</a>
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
          <a href="https://wa.me/527823825196">CONTACTO</a>
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Cambiar Tema">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>
        <button className="hamburger-btn" onClick={() => setIsMobileMenuOpen(true)}>
          <Menu size={28} color="var(--color-text)" />
        </button>
      </header>

      {/* Main Content */}
      <main className="opiniones-main">
        <div className="card title-card" style={{ animationDelay: '0s' }}>
          <h1 className="exp-title" style={{ margin: 0 }}>Opiniones</h1>
          <p className="exp-text mt-4">Conoce la experiencia de quienes han confiado en este proceso terapéutico.</p>
        </div>

        <div className="opiniones-grid">
          {opiniones.map((op, idx) => (
            <div className="card opinion-card" key={idx} style={{ animationDelay: `${(idx + 1) * 0.1}s` }}>
              <div className="opinion-header">
                <div className="quote-icon-wrapper">
                   <Quote size={24} fill="var(--color-bg)" color="var(--color-bg)" />
                </div>
                <h3>{op.paciente}</h3>
              </div>

              <div className="opinion-section">
                <h4>¿Qué ha sido lo más valioso para ti de este proceso terapéutico?</h4>
                <p>"{op.valioso}"</p>
              </div>

              <div className="divider-subtle" />

              <div className="opinion-section">
                <h4>Escribe tu opinión acerca de tu experiencia en nuestro proceso terapéutico</h4>
                <p>"{op.experiencia}"</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Opiniones;
