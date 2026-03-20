// ROTA: src/sections/search-bar.tsx
"use client";

import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <section className="container px-6 lg:px-8 -mt-12 relative z-30">
      <div className="bg-card/95 backdrop-blur-xl border border-foreground/5 p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold font-sans">
              Bairro
            </label>
            <select className="w-full bg-transparent border-b border-foreground/10 py-3 text-foreground/70 font-sans text-sm focus:outline-none focus:border-primary transition-all duration-500 appearance-none cursor-pointer">
              <option value="">Todos os bairros</option>
              <option>Maia</option>
              <option>Vila Augusta</option>
              <option>Gopouva</option>
              <option>Bosque Maia</option>
              <option>Jardim Zaira</option>
              <option>Vila Galvão</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold font-sans">
              Faixa de Preço
            </label>
            <select className="w-full bg-transparent border-b border-foreground/10 py-3 text-foreground/70 font-sans text-sm focus:outline-none focus:border-primary transition-all duration-500 appearance-none cursor-pointer">
              <option value="">Qualquer valor</option>
              <option>Até R$ 500.000</option>
              <option>R$ 500.000 - R$ 1.000.000</option>
              <option>R$ 1.000.000 - R$ 2.000.000</option>
              <option>Acima de R$ 2.000.000</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold font-sans">
              Quartos
            </label>
            <select className="w-full bg-transparent border-b border-foreground/10 py-3 text-foreground/70 font-sans text-sm focus:outline-none focus:border-primary transition-all duration-500 appearance-none cursor-pointer">
              <option value="">Qualquer</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
            </select>
          </div>

          <button className="flex items-center justify-center gap-2 h-12 bg-primary text-primary-foreground font-sans font-bold uppercase tracking-[0.15em] text-[11px] hover:bg-primary/90 transition-all duration-500">
            <Search size={14} />
            Buscar Imóveis
          </button>
        </div>
      </div>
    </section>
  );
}
