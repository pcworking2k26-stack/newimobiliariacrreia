// ROTA: src/components/footer.tsx
import { Instagram, Facebook } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-foreground/5 pt-16 pb-12">
      <div className="container px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 items-start mb-14">
          <div>
            <Image 
              src="/images/logo-correia.png" 
              alt="Imobiliária Correia" 
              width={120}
              height={40}
              className="h-10 w-auto mb-5"
            />
            <p className="text-muted-foreground font-sans text-sm leading-relaxed max-w-xs">
              Vende · Aluga · Administra<br />
              CRECI 39711-J
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-foreground font-display text-base mb-5">Navegação</h4>
            {[
              { label: "Início", href: "#inicio" },
              { label: "Imóveis", href: "#imoveis" },
              { label: "Sobre", href: "#sobre" },
              { label: "Contato", href: "#contato" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-muted-foreground font-sans text-sm hover:text-primary transition-all duration-500"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div>
            <h4 className="text-foreground font-display text-base mb-5">Redes Sociais</h4>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/imobiliaria.correia/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-foreground/10 hover:border-primary/30 hover:text-primary text-muted-foreground transition-all duration-500"
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100085236905184"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-foreground/10 hover:border-primary/30 hover:text-primary text-muted-foreground transition-all duration-500"
                aria-label="Facebook"
              >
                <Facebook size={15} />
              </a>
            </div>
          </div>
        </div>

        <div className="gold-line w-full mb-8" />

        <p className="text-muted-foreground font-sans text-[11px] tracking-wider text-center">
          © {new Date().getFullYear()} Imobiliária Correia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
