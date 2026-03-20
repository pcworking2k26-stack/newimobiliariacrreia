// ROTA: src/sections/contact.tsx
"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511947070056?text=[ L.P ] Olá! Gostaria de agendar uma visita.";

export function ContactSection() {
  return (
    <section id="contato" className="py-24 md:py-36 container px-6 lg:px-8">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="w-8 h-[1px] bg-primary" />
          <p className="text-primary text-[10px] uppercase tracking-[0.3em] font-sans font-bold">
            Fale conosco
          </p>
          <div className="w-8 h-[1px] bg-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground">
          Entre em Contato
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="space-y-7"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 flex items-center justify-center bg-accent flex-shrink-0">
              <MapPin size={15} className="text-primary" />
            </div>
            <div>
              <h4 className="text-foreground font-display text-base mb-1">Endereço</h4>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                Av. Paulo Faccini, 500 — Sala 12<br />
                Guarulhos, SP — CEP 07111-000
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 flex items-center justify-center bg-accent flex-shrink-0">
              <Phone size={15} className="text-primary" />
            </div>
            <div>
              <h4 className="text-foreground font-display text-base mb-1">Telefone</h4>
              <p className="text-muted-foreground font-sans text-sm">(11) 94707-0056</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 flex items-center justify-center bg-accent flex-shrink-0">
              <Mail size={15} className="text-primary" />
            </div>
            <div>
              <h4 className="text-foreground font-display text-base mb-1">E-mail</h4>
              <p className="text-muted-foreground font-sans text-sm">contato@imobiliariacorreia.com.br</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 flex items-center justify-center bg-accent flex-shrink-0">
              <Clock size={15} className="text-primary" />
            </div>
            <div>
              <h4 className="text-foreground font-display text-base mb-1">Horário</h4>
              <p className="text-muted-foreground font-sans text-sm">Seg a Sex: 9h–18h · Sáb: 9h–13h</p>
            </div>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-sans font-bold uppercase tracking-[0.15em] text-[11px] hover:bg-primary/90 transition-all duration-500 mt-2"
          >
            <MessageCircle size={13} />
            Agendar Visita pelo WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
          className="overflow-hidden border border-foreground/5 h-[420px]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.5!2d-46.533!3d-23.455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDI3JzE4LjAiUyA0NsKwMzEnNTkuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) brightness(0.7) contrast(1.2)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Imobiliária Correia em Guarulhos"
          />
        </motion.div>
      </div>
    </section>
  );
}
