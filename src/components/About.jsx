import "../styles/about.css";

export default function About() {
  return (
    <section className="about" id="sobre">
      <div className="about__inner">
        
        <div className="about__text">
          <span className="about__eyebrow">Sobre WinUp</span>

          <h2 className="about__title">
            No hacemos marketing al azar.
            <br />
            Diseñamos <span>dirección</span>.
          </h2>

          <p className="about__lead">
            WinUp es un estudio de <b>Paid Media, creatividad y estrategia</b>.
            Trabajamos con negocios que necesitan algo concreto:
            <b> más mensajes, más reservas y más ventas reales</b>.
          </p>

          <ul className="about__bullets">
            <li>Enfoque en conversiones, no en likes</li>
            <li>Estrategia clara antes de invertir</li>
            <li>Creatividad con intención comercial</li>
            <li>Datos simples para decisiones reales</li>
          </ul>
        </div>

        <div className="about__card">
          <h3>Lo que hacemos</h3>
          <p><b>Paid Media</b>: campañas que generan conversaciones</p>
          <p><b>Creatividad</b>: anuncios que llaman la atención correcta</p>
          <p><b>Estrategia</b>: mensajes alineados a tu negocio</p>

          <span className="about__note">
            Dirección primero. Presupuesto después.
          </span>
        </div>

      </div>
    </section>
  );
}
