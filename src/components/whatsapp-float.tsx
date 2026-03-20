// ROTA: src/components/whatsapp-float.tsx
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511947070056?text=[ L.P ] Olá! Gostaria de mais informações sobre imóveis.";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 bg-[#25D366] text-white font-sans font-bold text-[11px] uppercase tracking-[0.1em] shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40 hover:scale-105 transition-all duration-300 rounded-full group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
      <span className="hidden sm:inline">Fale Conosco</span>
    </a>
  );
}
