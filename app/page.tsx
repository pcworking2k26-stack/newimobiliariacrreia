// ROTA: app/page.tsx
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { Hero } from "@/sections/hero";
import { SearchBar } from "@/sections/search-bar";
import { PropertyGrid } from "@/sections/property-grid";
import { AboutSection } from "@/sections/about";
import { AgentSection } from "@/sections/agent";
import { LeadForm } from "@/sections/lead-form";
import { ContactSection } from "@/sections/contact";

export default function Home() {
  return (
    <main className="bg-background min-h-screen text-foreground">
      <Header />
      <Hero />
      <SearchBar />
      <PropertyGrid />
      <AboutSection />
      <AgentSection />
      <LeadForm />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
