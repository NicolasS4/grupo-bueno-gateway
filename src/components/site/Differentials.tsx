import { TrendingDown, Globe2, Zap, ShieldCheck, Users, Layers } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const items = [
  {
    icon: TrendingDown,
    title: "Redução de impostos",
    text: "Método próprio com foco em reduzir até 50% da carga tributária dentro da legalidade.",
  },
  {
    icon: Globe2,
    title: "Atendimento nacional",
    text: "Atuação em todo o Brasil, com estrutura para empresas digitais e tradicionais.",
  },
  {
    icon: Zap,
    title: "Especialistas em digital",
    text: "Contabilidade credenciada e parceira de plataformas do mercado digital.",
  },
  {
    icon: Layers,
    title: "Tudo em um só lugar",
    text: "Contabilidade, tributos, finanças, certificado e marcas integrados em um único grupo.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e conformidade",
    text: "Presença nos principais órgãos fiscais e processos com total segurança jurídica.",
  },
  {
    icon: Users,
    title: "Relacionamento próximo",
    text: "Acompanhamento consultivo e personalizado em cada etapa do seu negócio.",
  },
];

export function Differentials() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="diferenciais" ref={ref} className="py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="reveal text-sm font-semibold uppercase tracking-widest text-primary">
            Por que o Grupo Bueno
          </p>
          <h2 className="reveal mt-3 text-3xl font-bold text-ink sm:text-4xl">
            Diferenciais que impulsionam o seu crescimento
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-soft transition-shadow hover:shadow-card"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span
                aria-hidden
                className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-accent transition-transform duration-300 group-hover:scale-150"
              />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
