import { BiosecurityCard } from "../BioSecurity/BioSecurityCard";
import {
  FaDoorOpen,
  FaTshirt,
  FaWalking,
  FaProcedures,
  FaPumpSoap,
  FaChevronUp,
} from "react-icons/fa";

const practices = [
  {
    title: "Controle de Acesso",
    description:
      "Permitir apenas a entrada de pessoas autorizadas para proteger a saúde do rebanho.",
    icon: <FaDoorOpen size="2.5rem" className="text-white" />,
    details:
      "O controle de acesso impede a introdução de agentes infecciosos externos nas granjas. A entrada deve ser limitada a funcionários treinados e visitantes autorizados, com registros detalhados e protocolos de biossegurança. Essa medida reduz drasticamente o risco de surtos sanitários e mantém a estabilidade da produção.",
    consequences:
      "Sem controle rigoroso, há maior risco de entrada de doenças contagiosas, comprometendo a saúde dos animais, elevando custos com tratamentos e provocando perdas na produtividade.",
  },
  {
    title: "Roupas e EPIs",
    description:
      "Utilização de roupas específicas e equipamentos de proteção para evitar contaminações.",
    icon: <FaTshirt size="2.5rem" className="text-white" />,
    details:
      "O uso de botas, macacões, luvas e outros equipamentos de proteção minimiza a contaminação cruzada entre ambientes internos e externos da granja. EPIs devem ser exclusivos para cada área e trocados regularmente para garantir a eficácia na proteção sanitária.",
    consequences:
      "A ausência de EPIs adequados favorece a disseminação de patógenos, aumentando as taxas de infecção, reduzindo a eficiência produtiva e elevando os riscos à saúde dos trabalhadores.",
  },
  {
    title: "Pedilúvio",
    description:
      "Uso de pedilúvios para higienizar calçados e impedir a entrada de patógenos.",
    icon: <FaWalking size="2.5rem" className="text-white" />,
    details:
      "Pedilúvios são barreiras sanitárias que utilizam desinfetantes para eliminar micro-organismos presentes nos calçados. Devem ser posicionados na entrada das instalações e manter soluções eficazes contra vírus, bactérias e fungos, com trocas periódicas do líquido.",
    consequences:
      "Pedilúvios sem manutenção ou utilização incorreta permitem a entrada de patógenos, aumentando significativamente o risco de surtos de doenças no rebanho.",
  },
  {
    title: "Quarentena",
    description:
      "Isolamento de novos animais para assegurar a saúde do rebanho existente.",
    icon: <FaProcedures size="2.5rem" className="text-white" />,
    details:
      "A quarentena de novos animais permite identificar precocemente infecções antes da integração ao rebanho. Deve ser realizada em espaço isolado, com duração mínima de 14 dias, incluindo monitoramento veterinário e exames clínicos.",
    consequences:
      "Sem a quarentena, doenças ocultas podem ser introduzidas no plantel, gerando surtos, alta mortalidade e impactando severamente a rentabilidade da produção.",
  },
  {
    title: "Desinfecção",
    description:
      "Parte essencial da biossegurança no manejo sanitário, garantindo ambientes e equipamentos livres de patógenos.",
    icon: <FaPumpSoap size="2.5rem" className="text-white" />,
    details:
      "A desinfecção rigorosa de instalações, equipamentos e animais é realizada com o uso de jatos de água fortes, produtos de limpeza como cloro e desinfetantes, além de cal virgem, devido às suas propriedades bactericidas e fungicidas. Também são utilizadas técnicas como a vassoura de fogo e o vazio sanitário, que deve ser mantido por no mínimo 5 dias para garantir a eficácia.",
    consequences:
      "A falha na implementação desses sistemas de desinfecção aumenta o risco de contaminação, elevando a incidência de doenças, comprometendo a saúde dos animais e gerando custos mais altos com tratamentos e controle de infecções.",
  },
];

function BiosecuritySection() {
  return (
    <section
      id="biosecurity"
      className="bg-gradient-to-b from-[#AC7771] to-[#9C6B67] py-16"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-heading text-center text-white mb-6 leading-tight">
          Práticas Essenciais de Biossegurança
        </h2>
        <p className="text-center text-white text-[1.125rem] mb-12 max-w-2xl mx-auto leading-relaxed">
          A proteção da saúde animal e a excelência produtiva começam com ações
          simples, mas rigorosas. Conheça as principais práticas de
          biossegurança.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
          {practices.map((practice, index) => (
            <BiosecurityCard key={index} practice={practice} />
          ))}
        </div>
        <div className="flex justify-center items-center text-white opacity-70 mt-4">
          <p className="mr-2">Clique nos cards para mais informações</p>
          <FaChevronUp size={24} />
        </div>
      </div>
    </section>
  );
}

export { BiosecuritySection };
