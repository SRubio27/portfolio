import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
];

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY < lastY || window.scrollY < 80);
      setLastY(window.scrollY);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } bg-black/90 backdrop-blur-xl border-b border-white/5`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-white text-lg font-bold tracking-tight">
          S<span className="text-emerald-400">.</span>R
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-gray-400 hover:text-white font-medium tracking-wide transition-colors duration-200">
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="text-sm font-semibold text-black bg-emerald-400 px-5 py-2 rounded-full hover:bg-emerald-300 transition-colors duration-200"
          >
            Trabajemos juntos
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-black/95 border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-base text-gray-300 hover:text-white font-medium tracking-wide transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-semibold text-black bg-emerald-400 px-5 py-3 rounded-full hover:bg-emerald-300 transition-colors duration-200 text-center"
          >
            Trabajemos juntos
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
