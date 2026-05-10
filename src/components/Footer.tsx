const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black border-t border-white/5 text-gray-600">
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-display text-white font-bold">S<span className="text-emerald-400">.</span>R</span>
        <p className="text-xs">© {year} Sergio Rubio. Todos los derechos reservados.</p>
        <div className="flex gap-6 text-xs">
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">Behance</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
