// ROTA: src/sections/hero.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowDown, MessageCircle, ArrowRight } from "lucide-react";
import Image from "next/image";

const WHATSAPP_URL = "https://wa.me/5511947070056?text=[ L.P ] Olá! Gostaria de mais informações sobre imóveis.";

export function Hero() {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/70 z-10" />
        <Image
          src="/images/hero-bg.jpg"
          alt="Imóvel de alto padrão em Guarulhos"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
      </div>

      <div className="container relative z-20 px-6 lg:px-8">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-[1px] bg-primary" />
              <p className="text-primary text-[11px] uppercase tracking-[0.3em] font-sans font-semibold">
                Guarulhos · SP
              </p>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display leading-[1.05] mb-8">
              Seu próximo imóvel{" "}
              <span className="italic text-gradient-gold">começa aqui</span>
            </h1>

            <p className="text-base md:text-lg text-foreground/45 max-w-xl mb-14 font-sans font-light tracking-wide leading-[1.8]">
              Atendimento personalizado, segurança jurídica e os melhores imóveis 
              de Guarulhos em um só lugar.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#imoveis"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-sans font-bold uppercase tracking-[0.15em] text-[11px] hover:bg-primary/90 transition-all duration-500"
            >
              Ver Imóveis
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-foreground/15 text-foreground/80 font-sans font-bold uppercase tracking-[0.15em] text-[11px] hover:border-primary/40 hover:text-primary transition-all duration-500"
            >
              <MessageCircle size={13} />
              Falar no WhatsApp
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <ArrowDown size={18} className="text-foreground/20" />
      </motion.div>
    </section>
  );
}
