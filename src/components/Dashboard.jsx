import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  // ⚠️ IMPORTANTE: URL de la API en producción
  const API_URL = "https://bunker-back-v2.onrender.com";

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'BunkerAdmin2026') { // La clave que definimos
      setIsAuthenticated(true);
    } else {
      alert("Clave incorrecta");
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      const fetchLeads = async () => {
        setLoading(true);
        try {
          const response = await fetch(`${API_URL}/api/contactos`, {
            headers: {
              'x-admin-key': 'BunkerAdmin2026'
            }
          });
          const data = await response.json();
          setLeads(data.leads || []);
        } catch (error) {
          console.error("Error:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchLeads();
    }
  }, [isAuthenticated]);

  // Pantalla de Login
  if (!isAuthenticated) {
    return (
      <div className="h-screen bg-slate-900 flex items-center justify-center p-6">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-sm">
          <h2 className="text-2xl font-black mb-6 text-center">ADMIN BUNKER</h2>
          <input 
            type="password" 
            placeholder="Introduce la clave maestra"
            className="w-full p-3 border-2 border-slate-100 rounded-lg mb-4 outline-none focus:border-orange-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition">
            ENTRAR AL PANEL
          </button>
        </form>
      </div>
    );
  }

  // Pantalla de Datos (Una vez logueado)
  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-black tracking-tighter text-slate-900">
            REGISTROS <span className="text-orange-600">BUNKER</span>
          </h1>
          <button 
            onClick={() => setIsAuthenticated(false)}
            className="text-sm font-bold text-slate-400 hover:text-red-500"
          >
            CERRAR SESIÓN
          </button>
        </div>

        {loading ? (
          <p className="text-center text-slate-500">Cargando base de datos...</p>
        ) : (
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-100">
                  <tr>
                    <th className="p-5 text-xs font-black uppercase text-slate-400">Cliente</th>
                    <th className="p-5 text-xs font-black uppercase text-slate-400">Contacto</th>
                    <th className="p-5 text-xs font-black uppercase text-slate-400">WhatsApp</th>
                    <th className="p-5 text-xs font-black uppercase text-slate-400">Fecha</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-orange-50/30 transition">
                      <td className="p-5 font-bold text-slate-800">{lead.name} {lead.lastname}</td>
                      <td className="p-5 text-blue-600 font-medium">{lead.email}</td>
                      <td className="p-5 font-mono text-slate-600">{lead.tel}</td>
                      <td className="p-5 text-slate-400 text-sm">
                        {new Date(lead.create_date).toLocaleDateString('es-AR')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;