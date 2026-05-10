const skills = ["TypeScript", "Java", "Spring Boot", "NestJS", "Solidity", "React", "Node.js", "PostgreSQL", "AWS", "Docker"];

const SobreMi = () => {
  return (
    <section id="sobre-mi" className="py-16 md:py-24 bg-black">
      <div className="max-w-5xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16 items-start">
        <div className="md:col-span-3">
          <p className="text-emerald-400 text-xs font-semibold tracking-[0.2em] uppercase mb-6">Sobre mí</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6 md:mb-8">
            Desarrollador<br />con visión de negocio.
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-5">
            Desarrollador junior con ganas de crecer y aportar en proyectos donde la tecnología es un motor clave para el éxito del negocio. Me apasiona crear soluciones que no solo funcionen bien, sino que también tengan un impacto real en los usuarios y clientes.
          </p>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 md:mb-10">
            Trabajo donde cada decisión importa, buscando siempre el equilibrio entre estética, usabilidad, escalabilidad y rendimiento técnico.
          </p>
          <a
            href="src/assets/CV_Sergio_Rubio_Galletero.pdf"
            download
            className="inline-block border border-white/20 text-gray-300 px-7 py-3 text-sm font-medium hover:bg-white hover:text-black transition-all duration-300"
          >
            Descargar CV
          </a>
        </div>

        <div className="md:col-span-2">
          <div className="relative mb-6 md:mb-8">
            <img
              src="src/assets/fotoCV.jpeg"
              alt="Sergio Rubio"
              className="w-full max-w-xs mx-auto md:max-w-none aspect-[3/4] object-cover rounded-lg border border-white/20"
            />
          </div>
          <p className="text-gray-600 text-xs uppercase tracking-widest mb-4">Stack principal</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="border border-white/10 text-gray-400 text-xs px-3 py-1.5 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors duration-200">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
