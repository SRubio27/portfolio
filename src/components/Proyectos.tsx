import { ArrowUpRight } from "lucide-react";

interface Proyecto {
  titulo: string;
  categoria: string;
  descripcion: string;
  tags: string[];
  imagen: string;
  año: string;
}

const proyectos: Proyecto[] = [
  {
    titulo: "Finance Tracker",
    categoria: "Página web",
    descripcion: "Aplicación de seguimiento financiero personal con autenticación y gráficos interactivos",
    tags: ["React", "TypeScript", "NestJS", "PostgreSQL"],
    imagen: "src/assets/finance-tracker-screenshoot.png",
    año: "2025",
  },
  {
    titulo: "Tu Carta Fácil",
    categoria: "Producto SaaS",
    descripcion: "Proyecto SaaS para restaurantes que permite crear cartas digitales personalizadas con QR y gestión de menú",
    tags: ["React", "TypeScript", "NestJS", "PostgreSQL"],
    imagen: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    año: "2025",
  },
];

const Proyectos = () => {
  return (
    <section id="proyectos" className="py-16 md:py-24 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="flex items-end justify-between mb-10 md:mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">Proyectos</h2>
          <span className="text-gray-600 text-sm">{proyectos.length} trabajos seleccionados</span>
        </div>

        <div className="space-y-2">
          {proyectos.map((p) => (
            <div
              key={p.titulo}
              className="group relative flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-5 px-4 sm:py-6 sm:px-6 -mx-4 sm:-mx-6 cursor-pointer border border-transparent hover:border-white/8 hover:bg-white/3 transition-all duration-300"
            >
              <div className="w-full h-40 sm:w-20 sm:h-14 overflow-hidden rounded-sm shrink-0 grayscale group-hover:grayscale-0 transition-all duration-500">
                <img src={p.imagen} alt={p.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">{p.categoria} · {p.año}</p>
                    <h3 className="text-white font-semibold text-lg leading-tight">{p.titulo}</h3>
                  </div>
                  <ArrowUpRight size={18} className="text-gray-700 group-hover:text-emerald-400 shrink-0 mt-1 transition-colors duration-300" />
                </div>
                {/* Tags visible en móvil bajo el título */}
                <div className="flex flex-wrap gap-2 mt-3 sm:hidden">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-xs text-gray-600 border border-white/8 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
              {/* Tags en desktop a la derecha */}
              <div className="hidden sm:flex flex-wrap gap-2 shrink-0">
                {p.tags.map((tag) => (
                  <span key={tag} className="text-xs text-gray-600 border border-white/8 px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
