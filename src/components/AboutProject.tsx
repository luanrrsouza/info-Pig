import Image from "next/image";
import PigFarm from "../assets/images/fazenda-suinocultura.jpg";
import ModelPigFarm from "../assets/images/fazenda2.jpg";

function AboutProject() {
  return (
    <main
      id="objective"
      className="px-4 sm:px-8 lg:px-0 my-24 max-w-7xl mx-auto flex flex-col gap-32"
    >
      <section className="flex flex-col md:flex-row items-stretch gap-12">
        <div className="w-full md:w-1/2">
          <Image
            src={PigFarm}
            alt="Fazenda com criação de suínos"
            className="rounded-2xl shadow-lg w-full object-cover h-72 md:h-full max-h-[21.875rem]"
            width={600}
            height={400}
            priority
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl sm:text-5xl font-heading mb-4 text-[#AC7771] leading-tight">
            Sobre o Projeto
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            Analisamos a infraestrutura física e sanitária de pequenas
            propriedades suinícolas nos municípios de Ingá e Serra Redonda (PB),
            identificando a relação entre essas condições e os indicadores de
            desempenho produtivo, bem-estar animal e sustentabilidade na
            agricultura familiar.
          </p>
        </div>
      </section>

      <section className="flex flex-col md:flex-row-reverse items-stretch gap-12">
        <div className="w-full md:w-1/2">
          <Image
            src={ModelPigFarm}
            alt="Miniatura de modelo de fazenda com suínos"
            className="rounded-2xl shadow-lg w-full object-cover h-80 md:h-full max-h-[25rem]"
            width={600}
            height={450}
            priority
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl sm:text-5xl font-heading mb-4 text-[#AC7771] leading-tight">
            Contextualização
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            Os municípios de Ingá e Serra Redonda, localizados no Agreste
            Paraibano, têm na agropecuária a base de sua economia, com destaque
            para a agricultura familiar. Nessas regiões, a suinocultura é
            praticada principalmente em pequenas propriedades rurais, sendo uma
            importante fonte de renda e sustento.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mt-4">
            Apesar do potencial da atividade, os produtores locais enfrentam
            desafios como infraestrutura precária, baixo investimento
            tecnológico e limitações em práticas de manejo e saneamento. Esses
            fatores impactam diretamente a produtividade e o bem-estar animal,
            reforçando a necessidade de estudos que avaliem e proponham
            melhorias para a suinocultura regional.
          </p>
        </div>
      </section>
    </main>
  );
}

export { AboutProject };
