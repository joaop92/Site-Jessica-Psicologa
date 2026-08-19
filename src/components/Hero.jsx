import siteConfig, { whatsappLink } from "../siteConfig";
import heroImg from "../assets/img/jessica-sentada.jpeg";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="topo" className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="hero__eyebrow">Psicoterapia · TCC · Neurodesenvolvimento</p>
          <h1 className="hero__title">
            Desenvolvimento emocional e comportamental,
            <em> da infância à vida adulta.</em>
          </h1>
          <p className="hero__lede">
            Sou {siteConfig.nome}, psicóloga clínica. Promovo recursos para
            lidar com pensamentos, emoções e comportamentos — com crianças,
            adolescentes e adultos, sempre respeitando a história e o ritmo
            de cada processo.
          </p>
          <div className="hero__actions">
            <a
              className="hero__cta-primary"
              href={whatsappLink("Olá, Jéssica! Vi o site e gostaria de agendar um atendimento.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar atendimento
            </a>
            <a className="hero__cta-secondary" href="#sobre">
              Conhecer o trabalho ↓
            </a>
          </div>
          <div className="hero__badges">
            <span>Presencial (crianças e adolescentes) · Online (adultos)</span>
            <span className="hero__dot" />
            <span>{siteConfig.crp}</span>
          </div>
        </div>

        <div className="hero__figure">
          <img
            src={heroImg}
            alt={`${siteConfig.nomeCompleto}, psicóloga clínica, sorrindo sentada em um banco de madeira`}
            className="hero__img"
          />
          <span className="hero__scribble" aria-hidden="true">oi, seja bem-vinda(o)</span>
        </div>
      </div>
    </section>
  );
}
