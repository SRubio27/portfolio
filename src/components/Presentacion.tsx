import { useEffect, useRef } from "react";
import { ArrowDownRight } from "lucide-react";

const Presentacion = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const els = Array.from(ref.current.children) as HTMLElement[];
    els.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 100 + i * 140);
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-black pt-20 overflow-hidden">
      <div
        className="absolute right-0 top-0 w-full md:w-1/2 h-full bg-cover bg-center opacity-10 md:opacity-20"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&auto=format&fit=crop')" }}
      />
      <div className="absolute right-0 top-0 w-full md:w-1/2 h-full bg-gradient-to-l from-transparent to-black" />

      <div ref={ref} className="relative max-w-5xl mx-auto px-6 md:px-8 w-full">
        <p className="font-display text-emerald-400 text-xs tracking-[0.3em] uppercase mb-6 md:mb-8">
          Desarrollador Fullstack · Junior
        </p>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-6 md:mb-8 max-w-2xl">
          Sergio<br />Rubio<span className="text-emerald-400">.</span>
        </h1>
        <p className="text-gray-400 text-base md:text-xl font-light leading-relaxed max-w-md mb-10 md:mb-12">
          Desarrollo tanto aplicaciones webs como sistemas internos de gestión de empresas
        </p>
        <div className="flex items-center gap-6 md:gap-8">
          <a href="#proyectos" className="group flex items-center gap-3 text-white font-semibold text-sm tracking-wide border-b border-white/20 pb-1 hover:border-emerald-400 transition-colors duration-300">
            Ver proyectos
            <ArrowDownRight size={16} className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a href="#contacto" className="text-gray-500 text-sm font-medium hover:text-white transition-colors duration-300">
            Contactar
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-6 right-6 md:left-8 md:right-8 flex justify-between items-end">
        <p className="text-gray-700 text-xs tracking-widest uppercase">Disponible para proyectos</p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-gray-600 text-xs">2026</span>
        </div>
      </div>
    </section>
  );
};

export default Presentacion;
