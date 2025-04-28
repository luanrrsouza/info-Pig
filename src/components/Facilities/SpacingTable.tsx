function SpacingTable() {
  const spacings = [
    { category: "Leitões desmamados", space: "0,3 – 0,5 m²" },
    { category: "Suínos em crescimento", space: "0,7 – 1,0 m²" },
    { category: "Suínos em terminação", space: "1,0 – 1,2 m²" },
    { category: "Matrizes gestantes", space: "1,5 – 2,5 m²" },
    { category: "Cachaços", space: "3,0 – 6,0 m²" },
  ];

  return (
    <div className="w-full overflow-x-auto mb-12">
      <h3 className="text-[2.25rem] font-heading text-[#AC7771] mb-6">
        Espaçamento Ideal
      </h3>
      <table className="min-w-full border-collapse text-gray-700">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-4 text-left font-medium">Categoria</th>
            <th className="p-4 text-left font-medium">Espaço (m²/animal)</th>
          </tr>
        </thead>
        <tbody>
          {spacings.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="p-4">{item.category}</td>
              <td className="p-4">{item.space}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-sm text-gray-500 mt-2 leading-relaxed">
        Valores podem variar conforme o sistema de produção e as condições
        ambientais.
      </p>
    </div>
  );
}

export { SpacingTable };
