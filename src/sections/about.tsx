// ROTA: src/sections/about.tsx
"use client";

import { motion } from "framer-motion";
import { Shield, Award, MapPin, Handshake } from "lucide-react";

const highlights = [
  {
    icon: Shield,
    title: "Segurança Jurídica",
    description: "Respaldo legal completo em cada etapa da negociação. Zero surpresas.",
  },
  {
    icon: Award,
    title: "Experiência Real",
    description: "Centenas de famílias atendidas em Guarulhos. Resultados comprovados.",
  },
  {
    icon: MapPin,
    title: "Especialistas Locais",
    description: "Conhecemos cada bairro de Guarulhos. Sabemos onde estão as melhores oportunidades.",
  },
  {
    icon: Handshake,
    title: "Atendimento Sob Medida",
    description: "Entendemos suas necessidades e encontramos o imóvel certo para você.",
  },
];

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 md:py-36">
      <div className="container px-6 lg:px-8">
        <div className="gold-line w-full mb-24" />

        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-[1px] bg-primary" />
            <p className="text-primary text-[10px] uppercase tracking-[0.3em] font-sans font-bold">
              Por que a Correia
            </p>
            <div className="w-8 h-[1px] bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground max-w-3xl mx-auto leading-tight">
            Mais de{" "}
            <span className="text-gradient-gold italic">R$ 200 milhões</span>{" "}
            em imóveis negociados
          </h2>
          <p className="text-foreground/40 font-sans text-sm mt-6 max-w-lg mx-auto leading-relaxed">
            Uma trajetória construída com transparência, dedicação e resultados reais no mercado imobiliário de Guarulhos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="group p-8 bg-card border border-foreground/5 hover:border-primary/15 transition-all duration-500"
            >
              <div className="w-11 h-11 flex items-center justify-center bg-accent mb-6">
                <item.icon size={18} className="text-primary" />
              </div>
              <h3 className="text-base font-display text-foreground mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
