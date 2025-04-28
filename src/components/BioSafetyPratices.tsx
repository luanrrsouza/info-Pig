import Image from "next/image";
import PigBackGround from "../assets/images/pigg-card-background.jpg";
import { FaSoap, FaPiggyBank, FaStethoscope } from "react-icons/fa";

function DisplaySanitaryGuidelines() {
  return (
    <main
      id="better-practices"
      className="mt-20 sm:mt-24 md:mt-40 w-full mx-auto flex flex-col gap-16 min-h-screen relative"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={PigBackGround}
          alt="Imagem de fundo de suinocultura"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <section className="w-full h-full bg-opacity-50 relative z-10">
        <div className="px-4 sm:px-8 md:px-16 lg:px-40 flex justify-center items-center h-full">
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full my-16 max-w-6xl">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-6 text-[#AC7771] text-center">
              MANEJO SANITÁRIO
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-800 text-center">
              O manejo sanitário é fundamental para garantir a saúde dos suínos
              e a qualidade da carne. Práticas como limpeza, controle de doenças
              e boas condições nas instalações impactam diretamente o bem-estar
              dos animais e os resultados da produção.
            </p>

            <section className="w-full px-2 sm:px-8 py-12 bg-opacity-75 bg-white mt-8">
              <h3 className="text-2xl sm:text-3xl md:text-4xl text-center font-heading mb-10 text-[#AC7771]">
                Boas Práticas
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
                  <FaSoap className="text-5xl text-blue-500 mb-4" />
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                    Higiene e Limpeza
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    A limpeza adequada das instalações reduz a presença de
                    agentes patogênicos e melhora a sanidade do ambiente,
                    promovendo segurança tanto para os animais quanto para o
                    produto final.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
                  <FaPiggyBank className="text-5xl text-pink-500 mb-4" />
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                    Bem-Estar Animal
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Ambientes confortáveis, com espaço adequado, ventilação e
                    manejo correto, garantem menos estresse aos animais, o que
                    se reflete em melhor crescimento e qualidade da carne.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
                  <FaStethoscope className="text-5xl text-green-500 mb-4" />
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                    Controle de Doenças
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    A prevenção e o monitoramento sanitário são fundamentais
                    para evitar surtos, reduzir perdas e manter os suínos
                    saudáveis, aumentando o desempenho zootécnico da criação.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}

export { DisplaySanitaryGuidelines };
