
import certfyLogo from "@/assets/logos/certfy.png";
import setechavesLogo from "@/assets/logos/setechaves.png";
import leicontabilLogo from "@/assets/logos/leicontabil.png";
import valorfiscalLogo from "@/assets/logos/valorfiscal.png";
import numeraLogo from "@/assets/logos/numera.png";

export interface Company {
  id: string;
  name: string;
  segment: string;
  description: string;
  logo: string;
  highlights: string[];
}

export const WHATSAPP_NUMBER = "5564996647619";
export const WHATSAPP_DISPLAY = "+55 64 99664-7619";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const companies: Company[] = [
  {
    id: "lei-contabil",
    name: "Lei Contábil",
    segment: "Contabilidade e Consultoria",
    description:
      "Contabilidade com atendimento nacional e referência em redução de custos e tributos para o seu negócio digital e tradicional.",
    logo: leicontabilLogo, // ⬅️ usa o import direto (sem .url)
    highlights: ["Atendimento nacional", "Negócios digitais", "Redução de custos"],
  },
  {
    id: "valor-fiscal",
    name: "Valor Fiscal",
    segment: "Inteligência Tributária",
    description:
      "Especializada na área tributária, unindo conhecimentos administrativos, contábeis e jurídicos. Presente nos principais órgãos fiscais para uma assessoria de soluções no complexo contexto tributário do Brasil.",
    logo: valorfiscalLogo,
    highlights: ["Planejamento tributário", "Assessoria jurídica", "Órgãos fiscais"],
  },
  {
    id: "numera-bpo",
    name: "Numera BPO",
    segment: "Gestão Financeira",
    description:
      "Solução de gestão financeira para pequenas e médias empresas que querem crescer. Terceirize a operação financeira do dia a dia e tenha mais tempo para o seu negócio e família.",
    logo: numeraLogo,
    highlights: ["BPO financeiro", "PMEs em crescimento", "Operação do dia a dia"],
  },
  {
    id: "certfy",
    name: "Certfy",
    segment: "Certificado Digital",
    description:
      "Certificadora digital com atendimento presencial ou online por videoconferência, com segurança e praticidade na emissão do seu certificado.",
    logo: certfyLogo,
    highlights: ["Presencial ou online", "Videoconferência", "Emissão ágil"],
  },
  {
    id: "sete-chaves",
    name: "Sete Chaves",
    segment: "Marcas e Patentes",
    description:
      "Registro de marcas e patentes com segurança e agilidade, com atendimento em todo o Brasil para proteger o ativo mais valioso da sua empresa.",
    logo: setechavesLogo,
    highlights: ["Registro de marcas", "Patentes", "Cobertura nacional"],
  },
];