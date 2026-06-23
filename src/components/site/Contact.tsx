import { MessageCircle, Phone, Mail, MapPin, ArrowUpRight, Building2, FileText, GraduationCap, Megaphone } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { WHATSAPP_LINK, WHATSAPP_DISPLAY } from "@/lib/companies";

const contactInfo = [
  { icon: Phone, label: "WhatsApp", value: WHATSAPP_DISPLAY, href: WHATSAPP_LINK },
  { icon: Mail, label: "E-mail", value: "contato@xxxxxxxx.com.br", href: "mailto:contato@xxxxxxxx.com.br" },
  { icon: MapPin, label: "Endereço", value: "Rua xxxxxxxx, nº xxx — Brasil", href: undefined },
];

const quickLinks = [
  { icon: Building2, label: "Abertura de Empresa", href: "#" },
  { icon: ArrowUpRight, label: "Mudar de Contador", href: "#" },
  { icon: FileText, label: "PDF - Modelos para Contadores", href: "#" },
  { icon: FileText, label: "PDF - Modelos para Infoprodutores", href: "#" },
  { icon: GraduationCap, label: "CURSO CONTADOR DE INFOPRODUTO", href: "#" },
  { icon: Megaphone, label: "Marketing para Contadores", href: "#" },
];

export function Contact() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="contato" ref={ref} className="py-20 sm:py-28">
      <div className="container-page">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
          <div className="grid lg:grid-cols-2">
            {/* info side */}
            <div className="relative bg-secondary p-8 text-secondary-foreground sm:p-12">
              <p className="reveal text-sm font-semibold uppercase tracking-widest text-primary">
                Fale com o Grupo
              </p>
              <h2 className="reveal mt-3 text-3xl font-bold sm:text-4xl">
                Vamos cuidar do seu negócio juntos
              </h2>
              <p className="reveal mt-4 text-base leading-relaxed text-secondary-foreground/70">
                Escolha um dos atalhos abaixo ou fale direto no WhatsApp. Nosso time vai entender
                o momento da sua empresa e indicar as melhores soluções.
              </p>

              <ul className="reveal mt-10 space-y-5">
                {contactInfo.map((c) => {
                  const content = (
                    <span className="flex items-start gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                        <c.icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs uppercase tracking-widest text-secondary-foreground/60">
                          {c.label}
                        </span>
                        <span className="block break-words font-medium">{c.value}</span>
                      </span>
                    </span>
                  );
                  return (
                    <li key={c.label}>
                      {c.href ? (
                        <a
                          href={c.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-opacity hover:opacity-80"
                        >
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </li>
                  );
                })}
              </ul>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                Conversar agora no WhatsApp
              </a>
            </div>

            {/* quick links side */}
            <div className="reveal flex flex-col gap-6 p-8 sm:p-12">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                  Acesso rápido
                </p>
                <h3 className="mt-2 text-2xl font-bold text-ink">
                  Serviços e materiais
                </h3>
                <p className="mt-2 text-sm text-ink-soft">
                  Links preparados para edição futura. Clique para ajustar depois.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {quickLinks.map((link, i) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group flex items-center gap-3 rounded-2xl border border-border bg-background p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-card"
                    style={{ transitionDelay: `${i * 40}ms` }}
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <link.icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold leading-snug text-ink">
                        {link.label}
                      </span>
                      <span className="mt-0.5 block text-xs text-muted-foreground">
                        Em breve
                      </span>
                    </span>
                  </a>
                ))}
              </div>

              <p className="text-center text-xs text-muted-foreground sm:text-left">
                Os conteúdos acima serão liberados em breve. Enquanto isso, fale com o Grupo Bueno pelo WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
