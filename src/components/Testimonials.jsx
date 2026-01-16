import "../styles/testimonials.css";

const ITEMS = [
  {
    text:
      "“Pasamos de esperar consultas a tener mensajes todos los días. El reporte nos ayudó a entender qué oferta funcionaba mejor.”",
    who: "Ropería de fiesta",
    where: "Asunción",
  },
  {
    text:
      "“Nunca antes habíamos pautado. WinUp armó todo, nos explicó las métricas y hoy destinamos parte fija del presupuesto a anuncios.”",
    who: "Salón de belleza",
    where: "Lambaré",
  },
  {
    text:
      "“Lo que más valoramos es que no hablan raro: números claros, qué funcionó y qué se prueba el siguiente mes.”",
    who: "Clínica de servicios",
    where: "San Lorenzo",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonios">
      <div className="testimonials__inner">
        <header className="testimonials__head">
          <h2 className="testimonials__title">Lo que dicen nuestros clientes</h2>
          <p className="testimonials__sub">
            Historias reales de negocios locales que dejaron de depender solo del boca a boca.
          </p>
        </header>

        <div className="testimonials__grid">
          {ITEMS.map((t) => (
            <article className="tcard" key={t.who}>
              <p className="tcard__text">{t.text}</p>
              <div className="tcard__meta">
                <span className="tcard__who">{t.who}</span>
                <span className="tcard__dot">•</span>
                <span className="tcard__where">{t.where}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
