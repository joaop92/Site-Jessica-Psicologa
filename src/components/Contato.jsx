import siteConfig, { whatsappLink } from "../siteConfig";
import "./Contato.css";

export default function Contato() {
  return (
    <section id="contato" className="contato">
      <div className="container contato__inner">
        <p className="contato__scribble">vamos conversar?</p>
        <h2 className="contato__title">
          Se você quer conhecer melhor o meu trabalho ou iniciar seu
          processo terapêutico, entre em contato.
        </h2>
        <p className="contato__lede">
          {siteConfig.nomeCompleto} · Psicóloga Clínica · {siteConfig.crp}
          <br />
          Atendimento presencial (crianças e adolescentes) · Psicoterapia
          on-line (adultos)
        </p>
        <div className="contato__actions">
          <a
            className="contato__cta"
            href={whatsappLink("Olá, Jéssica! Gostaria de agendar um atendimento.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar atendimento
          </a>
          <a
            className="contato__cta contato__cta--outline"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar pelo WhatsApp
          </a>
        </div>
        <p className="contato__meta">
          {siteConfig.whatsappDisplay} · {siteConfig.cidade}
        </p>
      </div>
    </section>
  );
}
