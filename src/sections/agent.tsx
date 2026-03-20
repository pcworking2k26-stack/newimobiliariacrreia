// ROTA: src/sections/agent.tsx
"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import Image from "next/image";

const WHATSAPP_URL = "https://wa.me/5511947070056?text=[ L.P ] Olá Rodrigo! Gostaria de agendar uma consultoria.";

export function AgentSection() {
  return (
    <section className="py-24 md:py-36 container px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="relative"
        >
          <div className="aspect-[3/4] overflow-hidden relative">
            <Image
              src="/images/agent-photo.jpeg"
              alt="Silvio Correia — Consultor Imobiliário em Guarulhos"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-3 -right-3 w-24 h-24 border border-primary/20 -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[1px] bg-primary" />
            <p className="text-primary text-[10px] uppercase tracking-[0.3em] font-sans font-bold">
              Seu consultor
            </p>
          </div>
          <h2 className="text-3xl lg:text-4xl font-display text-foreground mb-2">
            Silvio Correia
          </h2>
          <p className="text-muted-foreground font-sans text-[11px] uppercase tracking-[0.2em] mb-8">
            CRECI 39711-J · Consultor Especialista
          </p>

          <p className="text-foreground/55 font-sans leading-[1.8] mb-5 text-[15px]">
            Com anos de experiência no mercado de Guarulhos, meu compromisso é 
            oferecer um atendimento humanizado, transparente e com total segurança jurídica.
          </p>
          <p className="text-foreground/55 font-sans leading-[1.8] mb-10 text-[15px]">
            Comprar um imóvel é mais do que uma transação — é realizar um sonho. 
            E estou aqui para tornar essa jornada simples e segura.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-7 py-4 bg-primary text-primary-foreground font-sans font-bold uppercase tracking-[0.15em] text-[11px] hover:bg-primary/90 transition-all duration-500"
            >
              <MessageCircle size={13} />
              Agendar Consultoria
            </a>
            <a
              href="tel:+555511947070056"
              className="flex items-center justify-center gap-2 px-7 py-4 border border-foreground/10 text-foreground/70 font-sans font-bold uppercase tracking-[0.15em] text-[11px] hover:border-primary/30 hover:text-primary transition-all duration-500"
            >
              <Phone size={13} />
              Ligar Agora
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
