import { useState } from "react";
import "./Faq.css";

const perguntas = [
  {
    q: "Você atende crianças, adolescentes e adultos ao mesmo tempo?",
    a: "Sim. Com crianças e adolescentes, o atendimento é presencial. Com adultos, faço psicoterapia on-line. São processos diferentes, mas todos baseados na Terapia Cognitivo-Comportamental (TCC).",
  },
  {
    q: "Preciso estar em crise ou ter um diagnóstico para procurar terapia?",
    a: "Não. A psicoterapia também é um espaço de autoconhecimento e desenvolvimento emocional, mesmo sem uma crise ou diagnóstico fechado. Muita gente chega só querendo entender melhor o que sente.",
  },
  {
    q: "Os pais participam do acompanhamento dos filhos?",
    a: "Sim, a orientação à família faz parte do trabalho com crianças e adolescentes — sempre com devolutivas e alinhamento sobre o processo, respeitando o vínculo de confiança com a criança ou o adolescente.",
  },
  {
    q: "Como funciona a psicoterapia on-line para adultos?",
    a: "É feita por videochamada, com a mesma consistência e sigilo do atendimento presencial. Funciona bem para demandas como ansiedade, TDAH na vida adulta e questões emocionais do dia a dia.",
  },
  {
    q: "Você trabalha com TEA e TDAH?",
    a: "Sim, com crianças e adolescentes atuo com demandas de neurodesenvolvimento, incluindo TEA e TDAH, e sigo em formação continuada em Neuropsicologia e TEACCH para aprofundar esse trabalho.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="duvidas" className="faq">
      <div className="container faq__inner">
        <div className="faq__intro">
          <p className="faq__eyebrow">07 — Dúvidas frequentes</p>
          <h2 className="faq__title">Perguntas mais comuns</h2>
        </div>

        <div className="faq__list">
          {perguntas.map((item, i) => (
            <div className={`faq-item ${openIndex === i ? "faq-item--open" : ""}`} key={item.q}>
              <button
                className="faq-item__question"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                aria-expanded={openIndex === i}
              >
                {item.q}
                <span className="faq-item__icon">{openIndex === i ? "−" : "+"}</span>
              </button>
              {openIndex === i && <p className="faq-item__answer">{item.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
