import { MessageCircle } from "lucide-react";
import { GBLogo } from "@/components/GBLogo";
import { companies, WHATSAPP_LINK, WHATSAPP_DISPLAY } from "@/lib/companies";

const navItems = [
  { label: "O Grupo", href: "#sobre" },
  { label: "Empresas", href: "#empresas" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <GBLogo
              className="h-12 w-auto"
              textColor="oklch(0.985 0.004 80)"
              taglineColor="var(--primary)"
            />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-secondary-foreground/65">
              Grupo empresarial que reúne soluções completas em contabilidade,
              inteligência tributária, gestão financeira, certificado digital e registro
              de marcas para empresas em todo o Brasil.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              <MessageCircle className="h-4 w-4" />
              {WHATSAPP_DISPLAY}
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-secondary-foreground/50">
              Navegação
            </h3>
            <ul className="mt-4 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-secondary-foreground/75 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-secondary-foreground/50">
              Empresas
            </h3>
            <ul className="mt-4 space-y-3">
              {companies.map((c) => (
                <li key={c.id} className="text-sm text-secondary-foreground/75">
                  {c.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-secondary-foreground/10 pt-6 text-center text-xs text-secondary-foreground/55 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} GB Grupo Bueno — Soluções Empresariais. CNPJ xxxxxxxx.</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
