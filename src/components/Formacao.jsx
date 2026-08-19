import "./Formacao.css";

const formacao = [
  {
    titulo: "Graduação em Psicologia",
    instituicao: "Faculdade Pernambucana de Saúde (FPS)",
  },
  {
    titulo: "Pós-graduação em Terapia Cognitivo-Comportamental (TCC)",
    instituicao: "Faculdade de Ciências Humanas ESUDA",
  },
  {
    titulo: "Certificação em Análise do Comportamento Aplicada (ABA)",
    instituicao: "",
  },
  {
    titulo: "Certificação no Protocolo de Avaliação VB-MAPP",
    instituicao: "",
  },
  {
    titulo: "Formação continuada em Terapias Cognitivas",
    instituicao: "",
  },
];

export default function Formacao() {
  return (
    <section id="formacao" className="formacao">
      <div className="container formacao__inner">
        <div className="formacao__intro">
          <p className="formacao__eyebrow">06 — Formação e qualificações</p>
          <h2 className="formacao__title">Base científica, em constante atualização</h2>
          <p className="formacao__nota">
            Atualmente, sigo aprofundando meus estudos em Neuropsicologia,
            TEACCH e Terapia de Aceitação e Compromisso (ACT).
          </p>
        </div>

        <ul className="formacao__lista">
          {formacao.map((f) => (
            <li key={f.titulo} className="formacao__item">
              <span className="formacao__marca" aria-hidden="true" />
              <div>
                <p className="formacao__item-titulo">{f.titulo}</p>
                {f.instituicao && (
                  <p className="formacao__item-inst">{f.instituicao}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
