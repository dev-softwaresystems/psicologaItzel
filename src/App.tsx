import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PsicologaLanding from './pages/PsicologaLanding';
import Experiencia from './pages/Experiencia';
import './index.css';

function App() {
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
