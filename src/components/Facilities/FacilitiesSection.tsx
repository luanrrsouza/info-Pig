"use client";

import { EnvironmentalConditionsTable } from "./EnvironmentalConditionsTable";
import { SpacingTable } from "./SpacingTable";
import { FarmLayout3D } from "./FarmLayout3D";

function FacilitiesSection() {
  return (
    <section id="structure" className="px-6 py-16 max-w-7xl mx-auto">
      <h2 className="text-[3rem] font-heading text-[#AC7771] mb-12 text-center">
        Instalações e Ambiente
      </h2>

      <div className="flex flex-col lg:flex-row justify-between gap-12">
        <div className="flex-1">
          <EnvironmentalConditionsTable />
        </div>

        <div className="flex-1">
          <SpacingTable />
        </div>
      </div>

      <div className="mt-20 w-full">
        <h3 className="font-heading text-[2.25rem] text-[#AC7771] mb-8 text-center uppercase">
          Estrutura Ideal para a Fazenda
        </h3>
        <div className="flex justify-center">
          <FarmLayout3D />
        </div>
      </div>
    </section>
  );
}

export { FacilitiesSection };
