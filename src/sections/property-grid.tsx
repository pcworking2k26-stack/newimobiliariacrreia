// ROTA: src/sections/property-grid.tsx
import { PropertyCard } from "@/components/property-card";
import { properties } from "@/data/properties";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511947070056?text=[ L.P ] Olá! Quero conhecer todos os imóveis disponíveis.";

export function PropertyGrid() {
  return (
    <section id="imoveis" className="py-24 md:py-36 container px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-primary" />
            <p className="text-primary text-[10px] uppercase tracking-[0.3em] font-sans font-bold">
              Curadoria exclusiva
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground">
            Imóveis em Destaque
          </h2>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-primary text-[11px] uppercase tracking-[0.15em] font-sans font-semibold hover:text-foreground transition-all duration-500"
        >
          <MessageCircle size={13} />
          Ver catálogo completo
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {properties.map((property, index) => (
          <PropertyCard key={property.id} property={property} index={index} />
        ))}
      </div>
    </section>
  );
}
