import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* La ruta del Dashboard debe ir ANTES o estar bien definida */}
        <Route path="/admin-bunker-secret" element={<Dashboard />} />
        
        {/* La ruta principal */}
        <Route path="/" element={<Landing />} />

        {/* Opcional: Si escriben cualquier otra cosa, mandalos a la Landing */}
        <Route path="*" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;