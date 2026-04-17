'use client';
import './globals.css';
import Link from 'next/link';
import { useState } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <html lang="es">
      <body className="antialiased text-slate-900 bg-white">
        
        {/* Nav con fondo sólido para evitar transparencia con el contenido de fondo */}
        <nav className="fixed top-0 z-[100] w-full bg-white border-b border-slate-100 shadow-sm">
          <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
            
            {/* Logo */}
            <Link href="/" className="font-black text-xl md:text-2xl tracking-tighter text-slate-900 z-[110]">
              REVISTA.<span className="text-blue-600">DIGITAL</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 text-xs font-bold uppercase tracking-widest text-slate-600">
              <Link href="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
              <Link href="/archivo" className="hover:text-blue-600 transition-colors">Archivo</Link>
              <Link href="/contacto" className="hover:text-blue-600 transition-colors">Contacto</Link>
            </div>

            {/* Botón Hamburguesa */}
            <button 
              onClick={toggleMenu}
              className="md:hidden z-[110] p-1 flex flex-col gap-1.5 focus:outline-none"
              aria-label="Menú"
            >
              <div className={`w-6 h-0.5 bg-slate-900 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-5 h-0.5 bg-slate-900 self-end transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-slate-900 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </button>
          </div>

          {/* Menú Móvil: Ahora con fondo azul oscuro sólido para máximo contraste */}
          <div className={`fixed inset-0 bg-slate-950 text-white transition-all duration-500 ease-in-out z-[105] flex flex-col justify-center px-10 ${isMenuOpen ? 'translate-x-0 opacity-100 visible' : 'translate-x-full opacity-0 invisible'}`}>
            <nav className="flex flex-col space-y-8">
              <Link onClick={toggleMenu} href="/" className="text-5xl font-black italic tracking-tighter hover:text-blue-500 transition-colors">
                INICIO
              </Link>
              <Link onClick={toggleMenu} href="/archivo" className="text-5xl font-black italic tracking-tighter hover:text-blue-500 transition-colors">
                ARCHIVO
              </Link>
              <Link onClick={toggleMenu} href="/contacto" className="text-5xl font-black italic tracking-tighter hover:text-blue-500 transition-colors">
                CONTACTO
              </Link>
            </nav>
            
            <div className="mt-20 border-t border-slate-800 pt-8">
                <p className="text-blue-500 text-[10px] font-black tracking-[0.3em] uppercase mb-2">Infraestructura & Telecom</p>
                <span className="text-slate-500 text-[10px] font-bold">© 2026 REVISTA DIGITAL</span>
            </div>
          </div>
        </nav>

        {/* Ajuste de margen superior para que el contenido no se meta debajo del Nav */}
        <main className="pt-24 md:pt-32 min-h-screen">
          {children}
        </main>

        <footer className="border-t border-slate-100 py-12 px-6 bg-slate-50">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
                <div className="font-black text-lg md:text-xl tracking-tighter text-slate-900">REVISTA.<span className="text-blue-600">DIGITAL</span></div>
                <div className="text-[10px] text-slate-400 font-medium mt-1 uppercase tracking-widest italic">Sector Infraestructura</div>
            </div>
            <div className="flex gap-6 text-[10px] font-bold uppercase tracking-[0.2em]">
              <a href="mailto:contacto@tuweb.com" className="hover:text-blue-600 transition">Email</a>
              <a href="https://wa.me/tunúmero" className="text-green-600 hover:text-green-500 transition">WhatsApp</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}