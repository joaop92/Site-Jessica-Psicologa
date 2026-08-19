import "./Areas.css";

const areas = [
  {
    numero: "01",
    titulo: "Crianças e adolescentes",
    modalidade: "Atendimento presencial",
    itens: [
      "Desenvolvimento emocional e comportamental",
      "Neurodesenvolvimento",
      "TEA e TDAH",
      "Regulação emocional",
      "Flexibilidade cognitiva",
      "Habilidades sociais e comportamentais",
      "Orientação familiar",
    ],
  },
  {
    numero: "02",
    titulo: "Adultos",
    modalidade: "Psicoterapia on-line",
    itens: [
      "Ansiedade",
      "TDAH na vida adulta",
      "Regulação emocional",
      "Autoconhecimento",
      "Pensamentos e padrões de comportamento",
      "Organização e desenvolvimento de habilidades",
      "Flexibilidade cognitiva",
    ],
  },
];

export default function Areas() {
  return (
    <section id="atuacao" className="areas">
      <div className="container">
        <p className="areas__eyebrow">04 — Áreas de atuação</p>
        <h2 className="areas__title">
          Um acompanhamento pensado para cada fase da vida.
        </h2>

        <div className="areas__grid">
          {areas.map((a) => (
            <div className="area-card" key={a.numero}>
              <div className="area-card__head">
                <span className="area-card__numero">{a.numero}</span>
                <div>
                  <h3 className="area-card__titulo">{a.titulo}</h3>
                  <span className="area-card__modalidade">{a.modalidade}</span>
                </div>
              </div>
              <ul className="area-card__lista">
                {a.itens.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
