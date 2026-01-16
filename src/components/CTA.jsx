import "../styles/cta.css";

export default function CTA() {
  return (
    <section className="cta" id="contacto">
      <div className="cta__inner">
        <div className="cta__card">
          <h2 className="cta__title">Que tu próximo cliente no llegue por casualidad</h2>
          <p className="cta__sub">
            En WinUp creemos que tu marca merece <b>dirección, no suerte</b>.
            Diseñamos un plan de Paid Media a tu medida para generar conversaciones reales.
          </p>

          <div className="cta__actions">
            <a className="btn btn--primary" href="https://wa.me/595973469177" target="_blank" rel="noreferrer">
              Hablar por WhatsApp
            </a>
            <a className="btn btn--ghost" href="https://instagram.com/winupmkt" target="_blank" rel="noreferrer">
              Ver Instagram
            </a>
          </div>

          
        </div>
      </div>
    </section>
  );
}
