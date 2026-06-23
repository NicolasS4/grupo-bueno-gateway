import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Companies } from "@/components/site/Companies";
import { Differentials } from "@/components/site/Differentials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GB Grupo Bueno — Soluções Empresariais Integradas" },
      {
        name: "description",
        content:
          "O Grupo Bueno reúne empresas de contabilidade, inteligência tributária, gestão financeira, certificado digital e marcas e patentes. Soluções completas para sua empresa em todo o Brasil.",
      },
      { property: "og:title", content: "GB Grupo Bueno — Soluções Empresariais" },
      {
        property: "og:description",
        content:
          "Um ecossistema completo de soluções empresariais: contabilidade, tributos, finanças, certificado digital e registro de marcas.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Companies />
        <Differentials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
