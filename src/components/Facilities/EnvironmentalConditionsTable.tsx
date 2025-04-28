function EnvironmentalConditionsTable() {
  const temperatures = [
    { phase: "Leitões recém-nascidos", temperature: "30 – 32 °C" },
    { phase: "Leitões desmamados", temperature: "26 – 28 °C" },
    { phase: "Suínos em crescimento", temperature: "22 – 24 °C" },
    { phase: "Suínos em terminação", temperature: "20 – 22 °C" },
    { phase: "Matrizes gestantes", temperature: "18 – 22 °C" },
  ];

  return (
    <div className="w-full overflow-x-auto">
      <h3 className="text-[2.25rem] font-heading text-[#AC7771] mb-6">
        Condições Ambientais
      </h3>

      <ul className="list-disc list-inside space-y-3 mb-8 text-gray-700">
        <li>
          <span className="font-semibold">Orientação:</span> Preferencialmente{" "}
          <span className="font-bold">Leste-Oeste</span> para menor exposição
          solar.
        </li>
        <li>
          <span className="font-semibold">Ventilação:</span> Natural ou forçada,
          com <span className="font-bold">renovação constante do ar</span>.
        </li>
      </ul>

      <h4 className="text-2xl font-semibold mb-4 text-gray-800">
        Temperatura Ideal
      </h4>
      <table className="min-w-full border-collapse text-gray-700">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-4 text-left font-medium">Fase</th>
            <th className="p-4 text-left font-medium">Temperatura (°C)</th>
          </tr>
        </thead>
        <tbody>
          {temperatures.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="p-4">{item.phase}</td>
              <td className="p-4">{item.temperature}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { EnvironmentalConditionsTable };
