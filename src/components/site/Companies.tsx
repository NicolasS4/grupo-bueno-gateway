import { ArrowUpRight, MessageCircle } from "lucide-react";
import { companies, WHATSAPP_LINK } from "@/lib/companies";
import { useReveal } from "@/hooks/use-reveal";

export function Companies() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="empresas" ref={ref} className="bg-secondary py-20 text-secondary-foreground sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="reveal text-sm font-semibold uppercase tracking-widest text-primary">
            As empresas do grupo
          </p>
          <h2 className="reveal mt-3 text-3xl font-bold sm:text-4xl">
            Especialistas em cada frente do seu negócio
          </h2>
          <p className="reveal mt-5 text-base leading-relaxed text-secondary-foreground/70 sm:text-lg">
            Cada empresa do Grupo Bueno atua com profundidade em sua área, e juntas
            formam uma solução empresarial completa.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {companies.map((c, i) => (
            <article
              key={c.id}
              className="reveal group flex flex-col rounded-2xl bg-card p-7 text-card-foreground shadow-card transition-transform duration-300 hover:-translate-y-1.5"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-border bg-background p-4">
                <img
                  src={c.logo}
                  alt={`Logo ${c.name}`}
                  className="max-h-full w-auto max-w-full object-contain"
                  loading="lazy"
                />
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-primary">
                {c.segment}
              </p>
              <h3 className="mt-1 text-xl font-bold text-ink">{c.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                {c.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {c.highlights.map((h) => (
                  <li
                    key={h}
                    className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground"
                  >
                    {h}
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-ink"
              >
                Saber mais
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}

          {/* CTA card */}
          <article className="reveal flex flex-col justify-center rounded-2xl border border-primary/30 bg-primary/10 p-7">
            <h3 className="text-xl font-bold">Não sabe por onde começar?</h3>
            <p className="mt-3 text-sm leading-relaxed text-secondary-foreground/75">
              Fale com nosso time e descubra qual combinação de soluções faz mais
              sentido para o momento da sua empresa.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              Falar com o Grupo
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
