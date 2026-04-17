export default function Nosotros() {
  return (
    <div className="bg-white">
      {/* Bloque de Impacto */}
      <section className="bg-slate-900 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-xs">Nuestra Misión</span>
          <h1 className="text-5xl md:text-7xl font-black mt-4 mb-8 leading-none italic">
            CONECTANDO <br/> PROYECTOS <br/> CON IDEAS.
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl leading-relaxed">
            Somos una plataforma dedicada a la difusión de tecnología, infraestructura y telecomunicaciones, enfocada en el mercado del sur del país.
          </p>
        </div>
      </section>

      {/* Valores con Iconos */}
      <section className="max-w-6xl mx-auto py-24 px-6 grid md:grid-cols-3 gap-12">
        <div className="border-t-2 border-blue-600 pt-8">
          <h3 className="font-black text-xl mb-4">TECNOLOGÍA</h3>
          <p className="text-slate-500">Implementamos las mejores herramientas digitales para la gestión de contenidos.</p>
        </div>
        <div className="border-t-2 border-slate-200 pt-8">
          <h3 className="font-black text-xl mb-4">ALCANCE</h3>
          <p className="text-slate-500">Llegamos a los principales parques industriales y centros tecnológicos de la región.</p>
        </div>
        <div className="border-t-2 border-slate-200 pt-8">
          <h3 className="font-black text-xl mb-4">INNOVACIÓN</h3>
          <p className="text-slate-500">Transformamos la revista tradicional en una experiencia digital interactiva.</p>
        </div>
      </section>
    </div>
  );
}