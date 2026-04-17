'use client'; // Esto obliga al navegador a hacer la petición
import { useEffect, useState } from 'react';
import { client } from '/lib/sanity.client.js';

export default function Archivo() {
  const [revistas, setRevistas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRevistas = async () => {
      try {
        const query = `*[_type == "revista"] | order(fechaPublicacion desc) {
          titulo,
          numero,
          "portadaUrl": portada.asset->url,
          "pdfUrl": archivoPdf.asset->url
        }`;
        const data = await client.fetch(query);
        setRevistas(data);
      } catch (err) {
        console.error("Error al traer revistas:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchRevistas();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Encabezado Industrial */}
      <header className="mb-12 border-l-4 border-blue-600 pl-6">
        <h1 className="text-4xl font-black uppercase tracking-tighter text-slate-900">
          Archivo de Ediciones
        </h1>
        <p className="text-slate-500 mt-2 font-medium">
          Historial de publicaciones y recursos tecnológicos.
        </p>
      </header>
      
      {loading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {revistas.map((rev, index) => (
            <div key={index} className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[3/4] overflow-hidden bg-slate-100 relative">
                <img 
                  src={rev.portadaUrl} 
                  alt={rev.titulo} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                  PDF Digital
                </div>
              </div>

              <div className="p-8">
                <span className="text-blue-600 text-xs font-black uppercase tracking-widest">
                  Edición #{rev.numero}
                </span>
                <h3 className="text-2xl font-bold mt-2 mb-6 text-slate-900 leading-tight">
                  {rev.titulo}
                </h3>
                
                <a 
                  href={rev.pdfUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full py-3 bg-slate-900 text-white text-sm font-bold rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  LEER REVISTA
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {!loading && revistas.length === 0 && (
        <div className="text-center py-20 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
          <p className="text-slate-400 italic">No se encontraron ediciones publicadas.</p>
        </div>
      )}
    </div>
  );
}