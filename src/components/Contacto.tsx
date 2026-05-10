import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const Contacto = () => {
  const [enviado, setEnviado] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setEnviado(true); };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <p className="text-emerald-400 text-xs font-semibold tracking-[0.2em] uppercase mb-6">Contacto</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6 md:mb-8">
              ¿Tienes un<br />proyecto?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8 md:mb-10">
              Cuéntame la idea. Si hay encaje, trabajamos juntos. Respondo en menos de 24 horas.
            </p>
            <a
              href="mailto:sergiorubiov2@gmail.com"
              className="group inline-flex items-center gap-3 text-white font-semibold border-b border-white/20 pb-1 hover:border-emerald-400 transition-colors duration-300"
            >
              sergiorubiov2@gmail.com
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          <div>
            {enviado ? (
              <div className="h-full flex items-center border border-white/8 p-10">
                <div>
                  <p className="font-display text-2xl font-bold text-white mb-2">Mensaje recibido.</p>
                  <p className="text-gray-500 text-sm">Te escribo en breve.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                {[
                  { label: "Nombre", type: "text", ph: "Tu nombre" },
                  { label: "Email", type: "email", ph: "tu@email.com" },
                ].map(({ label, type, ph }) => (
                  <div key={label}>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-3">{label}</label>
                    <input type={type} required placeholder={ph} className="w-full bg-transparent border-b border-white/10 pb-3 text-white placeholder-gray-700 focus:outline-none focus:border-emerald-400 transition-colors" />
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-3">Proyecto</label>
                  <textarea required rows={4} placeholder="Cuéntame tu idea..." className="w-full bg-transparent border-b border-white/10 pb-3 text-white placeholder-gray-700 focus:outline-none focus:border-emerald-400 transition-colors resize-none" />
                </div>
                <button type="submit" className="w-full bg-emerald-400 text-black py-4 text-sm font-bold tracking-wide hover:bg-emerald-300 transition-colors duration-300">
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
