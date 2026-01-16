import "../styles/process.css";

const STEPS = [
  {
    n: "01",
    title: "Diagnóstico",
    desc: "Entendemos tu negocio, tu oferta, tu ticket y el objetivo (mensajes, reservas, leads o ventas).",
    points: ["Contexto + objetivo", "Ticket y margen", "Qué ya probaste"],
  },
  {
    n: "02",
    title: "Plan de campaña",
    desc: "Definimos público ideal, mensaje, creatividades y presupuesto recomendado para que la inversión tenga dirección.",
    points: ["Públicos + estructura", "Mensaje y propuesta", "Creatividades a testear"],
  },
  {
    n: "03",
    title: "Lanzamos & optimizamos",
    desc: "Configuramos campañas, conectamos WhatsApp/página y medimos para escalar lo que funciona.",
    points: ["Setup y tracking", "Optimización semanal", "Escalado controlado"],
  },
  {
    n: "04",
    title: "Reporte claro",
    desc: "Te mostramos métricas entendibles, aprendizajes y próximos pasos para seguir bajando costos y subir conversiones.",
    points: ["Lo que rindió", "Qué se ajusta", "Siguiente plan"],
  },
];

export default function Process() {
  return (
    <section className="process" id="proceso">
      <div className="process__inner">
        <header className="process__head">
          <h2 className="process__title">Nuestro proceso</h2>
          <p className="process__sub">
            Nada se hace al azar. Definimos, ejecutamos y optimizamos con dirección.
          </p>
        </header>

        <div className="process__grid">
          {STEPS.map((s) => (
            <article key={s.n} className="step">
              <div className="step__rail" aria-hidden="true">
                <div className="step__dot" />
              </div>

              <div className="step__card">
                <div className="step__top">
                  <span className="step__num">{s.n}</span>
                  <h3 className="step__name">{s.title}</h3>
                </div>

                <p className="step__desc">{s.desc}</p>

                <ul className="step__list">
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
