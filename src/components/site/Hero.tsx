import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import { GBLogo } from "@/components/GBLogo";
import { WHATSAPP_LINK } from "@/lib/companies";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* decorative brand elements */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full opacity-[0.07] blur-3xl"
        style={{ background: "var(--primary)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 bottom-0 hidden h-64 w-64 animate-drift rounded-full border border-primary/15 sm:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-8 bottom-12 hidden h-40 w-40 rounded-2xl border border-primary/10 sm:block"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
          opacity: 0.5,
        }}
      />

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="animate-float-up inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink-soft shadow-soft">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" />
            Soluções Empresariais Integradas
          </span>

          <h1
            className="animate-float-up mt-7 text-balance text-4xl font-extrabold leading-[1.05] text-ink sm:text-6xl"
            style={{ animationDelay: "0.05s" }}
          >
            Um ecossistema completo para a{" "}
            <span className="text-gradient">saúde do seu negócio</span>
          </h1>

          <p
            className="animate-float-up mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-ink-soft sm:text-lg"
            style={{ animationDelay: "0.12s" }}
          >
            O Grupo Bueno reúne empresas especializadas em contabilidade, inteligência
            tributária, gestão financeira, certificado digital e registro de marcas —
            tudo o que sua empresa precisa para crescer com segurança.
          </p>

          <div
            className="animate-float-up mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animationDelay: "0.18s" }}
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              Falar com um especialista
            </a>
            <a
              href="#empresas"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-primary/40 hover:text-primary sm:w-auto"
            >
              Conhecer as empresas
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div
          className="animate-float-up mx-auto mt-16 max-w-4xl rounded-3xl border border-border bg-card p-8 shadow-card sm:p-14"
          style={{ animationDelay: "0.24s" }}
        >
          <GBLogo className="mx-auto h-16 w-auto sm:h-24" />
        </div>
      </div>
    </section>
  );
}
