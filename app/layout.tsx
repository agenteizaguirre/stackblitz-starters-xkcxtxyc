import './globals.css'
import Link from 'next/link'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="antialiased text-slate-900">
        <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="font-black text-xl tracking-tighter uppercase">Revista.Studio</div>
            <div className="hidden md:flex gap-8 text-[12px] font-bold uppercase tracking-widest">
              <Link href="/" className="hover:text-blue-600 transition">Actual</Link>
              <Link href="/archivo" className="hover:text-blue-600 transition">Archivo</Link>
              <Link href="/contacto" className="hover:text-blue-600 transition">Contacto & FAQ</Link>
              <Link href="/nosotros" className="hover:text-blue-600 transition">Nosotros</Link>
            </div>
          </div>
        </nav>

        <main className="pt-32 pb-20">{children}</main>

        <footer className="border-t border-gray-100 py-12 px-6 bg-slate-50">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-gray-400">© 2026 Todos los derechos reservados.</div>
            <div className="flex gap-6 text-sm font-medium">
              <a href="mailto:contacto@tuweb.com" className="hover:underline">Email</a>
              <a href="https://wa.me/tunúmero" className="text-green-600 hover:underline">WhatsApp</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}