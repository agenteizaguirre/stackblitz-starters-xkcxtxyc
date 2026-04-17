'use client';
import { useEffect, useState } from 'react';
import { client } from 'lib/sanity.client.js';

export default function Home() {
  const [revista, setRevista] = useState(null);

  useEffect(() => {
    const fetchUltima = async () => {
      const query = `*[_type == "revista"] | order(fechaPublicacion desc)[0] {
        titulo, numero, "portadaUrl": portada.asset->url, "pdfUrl": archivoPdf.asset->url
      }`;
      const data = await client.fetch(query);
      setRevista(data);
    };
    fetchUltima();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Lado Izquierdo: Texto de impacto */}
        <div className="space-y-8">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
            Edición Actual #{revista?.numero || '...'}
          </div>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter text-slate-900">
            {revista?.titulo || 'Cargando contenido...'}
          </h1>
          <p className="text-slate-500 text-xl max-w-sm leading-relaxed">
            La plataforma líder en tecnología e infraestructura para el sector industrial.
          </p>
          {revista?.pdfUrl && (
            <a 
              href={revista.pdfUrl} 
              target="_blank"
              className="inline-block bg-blue-600 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-slate-900 transition-all shadow-xl hover:shadow-blue-200"
            >
              Leer Ahora
            </a>
          )}
        </div>

        {/* Lado Derecho: La Portada con sombra industrial */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-blue-600/10 rounded-[2rem] blur-2xl group-hover:bg-blue-600/20 transition"></div>
          <div className="relative aspect-[3/4] bg-slate-200 rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100">
            {revista?.portadaUrl && (
              <img src={revista.portadaUrl} alt="Portada" className="w-full h-full object-cover" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}