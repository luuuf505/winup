import BlurText from "./BlurText.jsx";
import "../styles/hero.css";



export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true" />
{/* 
<div className="hero__aurora">
  <Aurora
    colorStops={["#43007d", "#9605b0", "#f2e991"]}
    amplitude={0.7}
    blend={0.35}
    speed={0.4}
  />
</div> 
*/}


      <div className="hero__inner">
        <div className="hero__content">
          <BlurText
            text="WinUp"
            animateBy="chars"
            delay={35}
            className="hero__title"
          />

          <BlurText
            text="Usamos anuncios, datos y creatividad para convertir atención en clientes reales."
            animateBy="words"
            delay={70}
            className="hero__subtitle"
          />

          <div className="hero__actions">
            <a className="btn btn--primary" href="#contacto">Impulsar mi marca</a>
            <a className="btn btn--ghost" href="#proceso">Ver cómo trabajamos</a>
          </div>

          <div className="hero__chips" aria-label="Beneficios">
            <span className="chip">Leads directos a WhatsApp</span>
            <span className="chip">Estrategia + Creatividad + Datos</span>
            <span className="chip">Optimización semanal</span>
          </div>
        </div>
      </div>
    </section>
  );
}


