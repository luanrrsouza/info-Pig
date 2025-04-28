import { FaTools, FaBroom, FaHeartbeat, FaMoneyBillWave } from "react-icons/fa";
import Image from "next/image";
import ResultPicture from "../assets/images/result_picture.jpg";

type ObservationCardProps = {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

function ObservationCard({ Icon, title, description }: ObservationCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
      <Icon className="text-5xl text-[#AC7771] mb-4" />
      <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
        {title}
      </h4>
      <p className="text-gray-600 text-sm sm:text-base">{description}</p>
    </div>
  );
}

function Results() {
  return (
    <main className="mt-10 sm:mt-12 md:mt-20 w-full mx-auto flex flex-col gap-16 min-h-screen">
      <section className="w-full h-full bg-opacity-50 relative">
        <Image
          src={ResultPicture}
          alt="Resultado Pesquisa"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        <div className="px-4 sm:px-8 md:px-16 lg:px-40 flex justify-center items-center h-full relative z-10">
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full my-16 max-w-6xl">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-6 text-[#AC7771] text-center">
              RESULTADOS DA PESQUISA
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-gray-800 text-center mb-12">
              Abaixo estão os principais achados das visitas técnicas realizadas
              às granjas de Ingá e Serra Redonda, na Paraíba, focando nas
              condições sanitárias, infraestrutura e bem-estar animal.
            </p>

            <section className="w-full px-2 sm:px-8 py-12 bg-opacity-75 bg-white">
              <h3 className="text-2xl sm:text-3xl md:text-4xl text-center font-heading mb-10 text-[#AC7771]">
                Principais Observações
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
                <ObservationCard
                  Icon={FaTools}
                  title="Condições de Infraestrutura"
                  description="Necessidade de melhorias em ventilação, espaço dos animais e controle térmico para otimizar o conforto e a produtividade."
                />
                <ObservationCard
                  Icon={FaBroom}
                  title="Higiene e Biossegurança"
                  description="Práticas de limpeza precisam ser reforçadas para reduzir riscos de contaminações e melhorar o bem-estar animal."
                />
                <ObservationCard
                  Icon={FaHeartbeat}
                  title="Saúde Animal"
                  description="É necessário fortalecer o cumprimento dos protocolos de vacinação e vermifugação para garantir sanidade plena dos rebanhos."
                />
                <ObservationCard
                  Icon={FaMoneyBillWave}
                  title="Limitações Financeiras"
                  description="Barreiras econômicas impactam investimentos em tecnologia e infraestrutura, exigindo apoio estratégico e políticas públicas adequadas."
                />
              </div>
            </section>

            <section className="mt-12 w-full px-2 sm:px-8 py-12 bg-opacity-75 bg-white">
              <h3 className="text-2xl sm:text-3xl md:text-4xl text-center font-heading mb-10 text-[#AC7771]">
                Conclusão
              </h3>
              <p className="text-base sm:text-lg leading-relaxed text-gray-800 text-center">
                A suinocultura paraibana possui um papel essencial no
                desenvolvimento regional, mas enfrenta desafios estruturais e
                sanitários que precisam ser endereçados para garantir a
                qualidade e a competitividade do setor. Investimentos em
                infraestrutura, capacitação de produtores e políticas públicas
                de incentivo serão determinantes para o futuro da atividade.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}

export { Results };
