import { Building2, Target, Handshake } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const stats = [
  { value: "5", label: "Empresas especializadas" },
  { value: "Confiança", label: "Economizados para clientes" },
  { value: "Brasil", label: "Atendimento nacional" },
  { value: "Digital", label: "Especialistas no mercado" },
];

const pillars = [
  {
    icon: Building2,
    title: "Estrutura completa",
    text: "Cinco empresas conectadas sob uma mesma gestão, cobrindo toda a jornada empresarial em um só lugar.",
  },
  {
    icon: Target,
    title: "Foco em resultado",
    text: "Método próprio com referência em redução de impostos e custos para negócios digitais e tradicionais.",
  },
  {
    icon: Handshake,
    title: "Parceria de verdade",
    text: "Acompanhamento próximo e consultivo, do CNPJ à inteligência tributária, para você crescer com segurança.",
  },
];

export function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="sobre" ref={ref} className="py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="reveal text-sm font-semibold uppercase tracking-widest text-primary">
            O Grupo Bueno
          </p>
          <h2 className="reveal mt-3 text-3xl font-bold text-ink sm:text-4xl">
            Um grupo, várias soluções para a sua empresa
          </h2>
          <p className="reveal mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
            O GB Grupo Bueno é um grupo empresarial que integra companhias
            especializadas para entregar soluções completas em gestão, tributação e
            conformidade. Reunimos conhecimento contábil, jurídico, financeiro e
            tecnológico para que sua empresa tenha tudo em um único parceiro.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="reveal rounded-2xl border border-border bg-card p-6 text-center shadow-soft"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <p className="text-2xl font-extrabold text-gradient sm:text-3xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-ink-soft">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="reveal group rounded-2xl border border-border bg-card p-7 shadow-soft transition-shadow hover:shadow-card"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
