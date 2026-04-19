
export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">Lanzamiento Quincenal</span>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
            La edición de <br/><span className="text-slate-400 italic">Abril</span> ya está aquí.
          </h1>
          <p className="text-gray-500 text-lg max-w-md leading-relaxed">
            Explora las nuevas tendencias en diseño y tecnología en nuestra versión interactiva.
          </p>
          <button className="bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-blue-600 transition-all">
            Leer Revista Online
          </button>
        </div>
        <div className="aspect-[3/4] bg-slate-100 rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
          {/* Aquí irá la imagen de la portada */}
          <div className="w-full h-full flex items-center justify-center text-gray-300 italic">Portada de la Edición</div>
        </div>
      </div>
    </div>
  )
}
