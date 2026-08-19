import siteConfig from "../siteConfig";
import sobreImg from "../assets/img/jessica-banqueta.jpeg";
import "./Sobre.css";

export default function Sobre() {
  return (
    <section id="sobre" className="sobre">
      <div className="container sobre__inner">
        <div className="sobre__figure">
          <img
            src={sobreImg}
            alt={`${siteConfig.nomeCompleto} sorrindo, apoiada em uma banqueta de madeira`}
          />
        </div>

        <div className="sobre__text">
          <p className="sobre__eyebrow">02 — Sobre mim</p>
          <h2 className="sobre__title">
            Olá, sou {siteConfig.nomeCompleto}.
          </h2>
          <p className="sobre__paragraph">
            Sou psicóloga clínica, graduada em Psicologia pela Faculdade
            Pernambucana de Saúde (FPS) e pós-graduada em Terapia
            Cognitivo-Comportamental (TCC) pela Faculdade de Ciências
            Humanas ESUDA.
          </p>
          <p className="sobre__paragraph">
            Atuo com crianças, adolescentes e adultos, auxiliando no
            desenvolvimento de recursos para lidar com pensamentos, emoções
            e comportamentos, sempre considerando a história, as
            necessidades e os objetivos de cada pessoa.
          </p>
          <p className="sobre__paragraph">
            Com crianças e adolescentes, meu trabalho também envolve
            demandas relacionadas ao neurodesenvolvimento, especialmente TEA
            e TDAH, desenvolvimento emocional e comportamental e orientação
            às famílias. Com adultos, realizo psicoterapia on-line, incluindo
            o acompanhamento de demandas relacionadas à ansiedade e ao TDAH,
            além de questões emocionais e comportamentais presentes nas
            diferentes fases da vida.
          </p>
          <ul className="sobre__list">
            <li>Ciência, acolhimento e individualidade em cada processo</li>
            <li>Atendimento presencial (crianças e adolescentes)</li>
            <li>Psicoterapia on-line (adultos)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
