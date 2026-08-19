import siteConfig from "../siteConfig";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__brand">{siteConfig.nomeCompleto}</span>
        <nav className="footer__links">
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <a href={`https://instagram.com/${siteConfig.instagram.replace("@", "")}`} target="_blank" rel="noopener noreferrer">
            {siteConfig.instagram}
          </a>
        </nav>
        <span className="footer__copy">
          © {new Date().getFullYear()} {siteConfig.nomeCompleto} — Psicóloga Clínica · {siteConfig.crp}
        </span>
      </div>
    </footer>
  );
}
