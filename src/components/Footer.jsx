import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">WinUp</div>
          <p className="footer__tagline">
            Estrategia, creatividad y datos para que tu negocio deje de depender de la suerte.
          </p>

          <div className="footer__chips" aria-label="Áreas">
            <span className="footer__chip">Paid Media</span>
            <span className="footer__chip">Web & Landing</span>
            <span className="footer__chip">Creatividad</span>
            <span className="footer__chip">Equipos</span>
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__title">Secciones</h4>
          <a className="footer__link" href="#sobre">Sobre</a>
          <a className="footer__link" href="#servicios">Servicios</a>
          <a className="footer__link" href="#proceso">Proceso</a>
          <a className="footer__link" href="#testimonios">Testimonios</a>
          <a className="footer__link" href="#contacto">Contacto</a>
        </div>

        <div className="footer__col">
          <h4 className="footer__title">Contacto</h4>

         

          <a
            className="footer__link"
            href="https://instagram.com/winupmkt"
            target="_blank"
            rel="noreferrer"
          >
            Instagram: @winupmkt
          </a>

          <span className="footer__muted">
            Ciudad del este, Paraguay
          </span>
        </div>

        <div className="footer__cta">
          <div className="footer__ctaCard">
            <p className="footer__ctaText">
              Que tu próximo cliente no llegue por casualidad.
            </p>
            <a
              className="btn btn--primary"
              href="https://wa.me/595973469177"
              target="_blank"
              rel="noreferrer"
            >
              Hablemos por WhatsApp
            </a>
            <a className="btn btn--ghost" href="#contacto">
              Ver contacto
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottomInner">
          <span>© {new Date().getFullYear()} WinUp — Marketing con dirección.</span>
          <a className="footer__top" href="#top" aria-label="Volver arriba">
            ↑ Arriba
          </a>
        </div>
      </div>
    </footer>
  );
}
