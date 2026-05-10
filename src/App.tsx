import Header from "./components/Header";
import Presentacion from "./components/Presentacion";
import Proyectos from "./components/Proyectos";
import SobreMi from "./components/SobreMi";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <div className="font-sans antialiased bg-black">
      <Header />
      <Presentacion />
      <Proyectos />
      <SobreMi />
      <Contacto />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
