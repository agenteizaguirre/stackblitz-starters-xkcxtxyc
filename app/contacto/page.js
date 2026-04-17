export default function Contacto() {
  const faqs = [
    { q: "¿Cada cuánto publican?", a: "Nuestras ediciones son quincenales." },
    { q: "¿Cómo puedo anunciar?", a: "Escríbenos a través del formulario o WhatsApp." }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Sección Hero Azul - Inspirada en Itsanet */}
      <section className="bg-blue-600 py-20 px-6 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-black uppercase tracking-tighter mb-6">
              Hablemos de <br/>tu próximo paso.
            </h1>
            <p className="text-blue-100 text-lg">Estamos listos para conectar tu empresa con nuestra audiencia.</p>
          </div>
          
          {/* Formulario Estilo Aliança */}
          <div className="bg-white p-8 rounded-2xl shadow-2xl text-slate-900">
            <form className="space-y-4">
              <input type="text" placeholder="Nombre" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl" />
              <input type="email" placeholder="Email" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl" />
              <textarea placeholder="Tu mensaje" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl h-32"></textarea>
              <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition">
                ENVIAR CONSULTA
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Sección */}
      <section className="max-w-4xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center uppercase tracking-widest">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border border-slate-100 p-6 rounded-2xl hover:border-blue-600 transition group">
              <h3 className="font-bold text-lg mb-2 flex items-center">
                <span className="text-blue-600 mr-3">●</span> {f.q}
              </h3>
              <p className="text-slate-500 pl-7">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}