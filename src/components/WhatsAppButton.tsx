const WHATSAPP_NUMBER = "3463516081"; // Cambia este número por el tuyo (sin + ni espacios)
const WHATSAPP_MESSAGE = "Hola Sergio, he visto tu portfolio y me gustaría contactar contigo.";

export default function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-18 h-18 rounded-full bg-[#25D366] shadow-lg hover:scale-110 hover:shadow-[0_0_20px_#25D36688] transition-transform duration-200"
    >
      <svg viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.492.645 4.835 1.77 6.877L2 30l7.34-1.742A13.93 13.93 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2Zm0 25.6a11.54 11.54 0 0 1-5.88-1.607l-.422-.25-4.356 1.034 1.072-4.24-.276-.435A11.56 11.56 0 0 1 4.4 16C4.4 9.593 9.593 4.4 16 4.4S27.6 9.593 27.6 16 22.407 27.6 16 27.6Zm6.34-8.64c-.348-.174-2.06-1.017-2.38-1.133-.32-.116-.553-.174-.786.174-.232.348-.9 1.133-1.104 1.366-.203.232-.406.261-.754.087-.348-.174-1.47-.542-2.8-1.727-1.034-.924-1.732-2.064-1.936-2.412-.203-.348-.022-.537.153-.71.157-.156.348-.406.522-.61.174-.203.232-.348.348-.58.116-.232.058-.435-.029-.61-.087-.174-.786-1.895-1.077-2.595-.283-.681-.571-.588-.786-.599l-.67-.011c-.232 0-.61.087-.928.435-.319.348-1.22 1.191-1.22 2.905s1.249 3.37 1.423 3.603c.174.232 2.457 3.75 5.953 5.258.832.358 1.482.573 1.988.733.835.265 1.595.228 2.196.138.67-.1 2.06-.842 2.351-1.656.29-.813.29-1.51.203-1.656-.087-.145-.319-.232-.667-.406Z" />
      </svg>
    </a>
  );
}
