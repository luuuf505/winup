import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/about.css";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="section section--light">
        <div className="container about">

          <h1 className="about__title">Sobre WinUp</h1>

          <p className="about__intro">
            WinUp nace de una idea simple (pero poderosa):  
            <strong> el marketing no debería ser suerte, debería ser sistema.</strong>
          </p>

          <p>
            No creemos en fórmulas mágicas ni en promesas infladas.  
            Creemos en entender el negocio, leer los datos y usar la creatividad
            con intención. Cada anuncio, cada palabra y cada decisión tiene un
            porqué.
          </p>

          <h2>Cómo pensamos</h2>

          <p>
            En WinUp trabajamos con marcas que quieren crecer de verdad.
            Analizamos, probamos, optimizamos y volvemos a probar.  
            Lo bonito importa, pero <strong>lo que convierte importa más</strong>.
          </p>

          <ul className="about__list">
            <li>📊 Decisiones basadas en datos reales</li>
            <li>🎯 Estrategias pensadas para vender, no solo mostrar</li>
            <li>🧠 Creatividad con dirección (no creatividad al azar)</li>
            <li>📈 Optimización constante, semana a semana</li>
          </ul>

          <h2>Qué hacemos (y qué no)</h2>

          <p>
            Diseñamos y gestionamos campañas de anuncios enfocadas en resultados
            concretos: leads, ventas y crecimiento medible.
          </p>

          <p>
            No hacemos marketing “porque sí”.  
            No inflamos métricas que no sirven.  
            No dejamos campañas corriendo sin control.
          </p>

          <h2>Por qué WinUp</h2>

          <p>
            Porque entendemos que detrás de cada negocio hay tiempo, dinero y
            expectativas reales. Nuestro trabajo es cuidar eso y hacerlo rendir.
          </p>

          <p className="about__closing">
            Si buscás una agencia que piense, ejecute y optimice como si el
            negocio fuera propio, estás en el lugar correcto.
          </p>

        </div>
      </main>
      <Footer />
    </>
  );
}
