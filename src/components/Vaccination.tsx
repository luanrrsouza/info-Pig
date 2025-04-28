"use client";

import { FaSyringe } from "react-icons/fa";
import Image from "next/image";
import Girls from "../assets/images/girls.png";

function Vaccination() {
  return (
    <section id="vaccination" className="py-[5rem] px-[1rem] bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="relative w-full flex items-center justify-center my-[3rem]">
          <div className="w-[10rem] h-[0.25rem] bg-[#AC7771]"></div>
          <div className="absolute bg-white px-[0.5rem]">
            <FaSyringe size="2rem" color="#AC7771" />
          </div>
        </div>

        <h2 className="text-[3rem] font-heading text-[#AC7771] text-center mb-[3rem]">
          Vacinação e Vermifugação
        </h2>

        <h3 className="text-[2rem] font-heading text-[#AC7771] mb-[2rem]">
          Quadro com Principais Vacinas na Suinocultura
        </h3>

        <div className="overflow-x-auto mb-[4rem]">
          <table className="w-full border border-gray-300 text-[1.125rem]">
            <thead className="bg-[#F7E7E5]">
              <tr>
                <th className="p-[1rem] border">Doença</th>
                <th className="p-[1rem] border">Sigla</th>
                <th className="p-[1rem] border">Quando Vacinar</th>
                <th className="p-[1rem] border">Objetivo da Vacina</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-[#F7E7E5]">
                <td className="p-[1rem] border">Peste Suína Clássica</td>
                <td className="p-[1rem] border">PSC</td>
                <td className="p-[1rem] border">
                  Matrizes: antes da cobertura e após 21 dias
                </td>
                <td className="p-[1rem] border">
                  Prevenir surtos de alta letalidade e perdas econômicas.
                </td>
              </tr>
              <tr className="hover:bg-[#F7E7E5]">
                <td className="p-[1rem] border">Leptospirose</td>
                <td className="p-[1rem] border">—</td>
                <td className="p-[1rem] border">
                  Matrizes e reprodutores: 1x ao ano ou a cada 6 meses
                </td>
                <td className="p-[1rem] border">
                  Evitar abortos, natimortos e contaminação do ambiente.
                </td>
              </tr>
              <tr className="hover:bg-[#F7E7E5]">
                <td className="p-[1rem] border">
                  Gastroenterite Transmissível
                </td>
                <td className="p-[1rem] border">TGE</td>
                <td className="p-[1rem] border">
                  Fêmeas gestantes: 2 doses antes do parto
                </td>
                <td className="p-[1rem] border">
                  Proteger leitões contra diarreia viral severa.
                </td>
              </tr>
              <tr className="hover:bg-[#F7E7E5]">
                <td className="p-[1rem] border">Parvovirose Suína</td>
                <td className="p-[1rem] border">PPV</td>
                <td className="p-[1rem] border">
                  Matrizes: antes da cobertura
                </td>
                <td className="p-[1rem] border">
                  Evitar reabsorção embrionária e mumificação fetal.
                </td>
              </tr>
              <tr className="hover:bg-[#F7E7E5]">
                <td className="p-[1rem] border">Circovirose Suína tipo 2</td>
                <td className="p-[1rem] border">PCV2</td>
                <td className="p-[1rem] border">
                  Leitões: 3 a 5 semanas de idade
                </td>
                <td className="p-[1rem] border">
                  Prevenir doenças associadas ao circovírus (desempenho,
                  mortalidade).
                </td>
              </tr>
              <tr className="hover:bg-[#F7E7E5]">
                <td className="p-[1rem] border">Mycoplasma hyopneumoniae</td>
                <td className="p-[1rem] border">Mhyo</td>
                <td className="p-[1rem] border">Leitões: entre 21–28 dias</td>
                <td className="p-[1rem] border">
                  Prevenir pneumonia enzoótica suína.
                </td>
              </tr>
              <tr className="hover:bg-[#F7E7E5]">
                <td className="p-[1rem] border">Erisipela Suína</td>
                <td className="p-[1rem] border">—</td>
                <td className="p-[1rem] border">
                  Matrizes e reprodutores: 1x/ano
                </td>
                <td className="p-[1rem] border">
                  Evitar surtos de febre, infertilidade e lesões cutâneas.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-col md:flex-row bg-[#F7E7E5] p-6 rounded-xl shadow-md items-center md:items-center gap-8">
          <div className="md:w-1/2 flex justify-center">
            <Image
              src={Girls}
              alt="Veterinários cuidando dos porquinhos"
              className="w-full h-auto max-w-[90%] md:max-w-full rounded-xl object-cover"
              width={500}
              height={350}
            />
          </div>
          <div className="md:w-1/2 text-[#AC7771] flex flex-col justify-center">
            <h3 className="text-3xl font-heading mb-4">
              Papel do Veterinário na Suinocultura
            </h3>
            <ul className="list-disc list-inside text-lg space-y-3">
              <li>
                Elaboração e monitoramento de protocolos sanitários: inclui
                vacinação, vermifugação e medidas de biossegurança.
              </li>
              <li>
                Diagnóstico e controle de doenças: monitorando e prevenindo
                enfermidades, aplicando vacinas e realizando exames
                laboratoriais.
              </li>
              <li>
                Acompanhamento do bem-estar animal: garantindo boas condições de
                manejo e ambiente para a saúde dos suínos.
              </li>
              <li>
                Monitoramento zootécnico: acompanhando o desempenho dos animais
                e ajustando práticas para melhorar a produção.
              </li>
              <li>
                Compliance com regulamentações sanitárias: assegurando que a
                granja atenda às normas legais e de saúde pública.
              </li>
            </ul>
            <p className="mt-6 text-lg">
              O veterinário também atua como consultor técnico, ajudando a
              otimizar as práticas de manejo, nutrição e estrutura das
              instalações.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Vaccination };
