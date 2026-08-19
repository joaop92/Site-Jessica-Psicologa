import { useEffect, useState } from "react";
import siteConfig, { whatsappLink } from "../siteConfig";
import "./Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#sobre", label: "Sobre mim" },
    { href: "#atuacao", label: "Atuação" },
    { href: "#formacao", label: "Formação" },
    { href: "#duvidas", label: "Dúvidas" },
  ];

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="container header__inner">
        <a href="#topo" className="header__brand">
          <span className="header__name">{siteConfig.nomeCompleto}</span>
          <span className="header__role">psicóloga clínica</span>
        </a>

        <nav className="header__nav" aria-label="Navegação principal">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <a
          className="header__cta"
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
        >
          Falar no WhatsApp
        </a>

        <button
          className="header__burger"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="header__mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="header__mobile-cta"
          >
            Falar no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
