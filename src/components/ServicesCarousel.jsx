import { useEffect, useMemo, useRef, useState } from "react";
import "../styles/services-carousel.css";

const SERVICES = [
  {
    tag: "PM",
    name: "Paid Media",
    desc:
      "Gestionamos campañas orientadas a acciones reales (mensajes, reservas, leads o ventas), con estructura clara y optimización continua.",
    bullets: [
      "Objetivos y oferta definidos antes de pautar",
      "Segmentación por zona, intereses y comportamiento",
      "Creatividades pensadas para conversión",
      "Optimización para bajar costo por resultado",
      "Reportes claros y decisiones para el próximo mes",
    ],
  },
  {
    tag: "WEB",
    name: "Web & Landing Pages",
    desc:
      "Creamos sitios y landing pages como parte de la estrategia: ordenan tu propuesta, sostienen tu posicionamiento y funcionan como punto de conversión.",
    bullets: [
      "Landing pages para campañas (WhatsApp / formularios)",
      "Estructura pensada para explicar y guiar",
      "Copy y secciones que sostienen tu oferta",
      "Mobile-first y performance",
      "Integración con medición (si aplica)",
    ],
  },
  {
    tag: "CR",
    name: "Creatividad & Contenido",
    desc:
      "Diseñamos piezas y mensajes alineados a tu identidad para que tu marca se vea coherente y la comunicación sea entendible.",
    bullets: [
      "Diseño de creativos para anuncios",
      "Dirección visual y consistencia de marca",
      "Mensajes claros (qué, para quién y por qué)",
      "Variantes para testeo (no una sola idea)",
      "Biblioteca de assets reutilizables",
    ],
  },
  {
    tag: "SM",
    name: "Social Media",
    desc:
      "Usamos las redes como canal de presencia y respaldo: ordenamos el feed, el tono y el mensaje para que la gente confíe antes de escribir.",
    bullets: [
      "Lineamiento de estilo y comunicación",
      "Piezas clave para presencia (no relleno)",
      "Calendario y consistencia por objetivo",
      "Optimización del perfil (bio, highlights, CTA)",
      "Coherencia con campañas y web",
    ],
  },
  {
    tag: "PMO",
    name: "Project Management",
    desc:
      "Organizamos la ejecución para que el marketing no dependa de la improvisación: prioridades claras, entregables y ritmo.",
    bullets: [
      "Planificación por semanas o sprints",
      "Control de entregables y tiempos",
      "Coordinación de creatividades y campañas",
      "Checklist de publicación y QA",
      "Orden para escalar sin caos",
    ],
  },
  {
    tag: "TR",
    name: "Capacitación (Mkt & Ventas)",
    desc:
      "Entrenamos a tu equipo para convertir mejor lo que llega: respuestas, seguimiento y lectura simple de métricas para mejorar cada mes.",
    bullets: [
      "Cómo responder para cerrar más",
      "Seguimiento y guiones prácticos",
      "Errores comunes que enfrían leads",
      "Mejora de tiempos de respuesta",
      "Orden del proceso comercial",
    ],
    highlight: true,
  },
];

export default function ServicesCarousel() {
  const cards = useMemo(() => SERVICES, []);
  const [active, setActive] = useState(0);
  const rootRef = useRef(null);

  const prev = () => setActive((i) => (i - 1 + cards.length) % cards.length);
  const next = () => setActive((i) => (i + 1) % cards.length);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    const onWheel = (e) => {
      // scroll vertical -> navegación horizontal suave
      if (Math.abs(e.deltaY) < 5) return;
      if (e.deltaY > 0) next();
      else prev();
    };

    window.addEventListener("keydown", onKey);
    el.addEventListener("wheel", onWheel, { passive: true });

    return () => {
      window.removeEventListener("keydown", onKey);
      el.removeEventListener("wheel", onWheel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards.length]);

  return (
    <section id="servicios" className="section servicesC" ref={rootRef}>
      <div className="container">
        <div className="servicesC__head" data-reveal>
          <h2 className="servicesC__title">Servicios</h2>
          <p className="servicesC__sub">
            No ofrecemos “cosas sueltas”. Diseñamos un sistema para posicionar tu
            marca, guiar a la gente correcta y convertir mejor.
          </p>
        </div>

        <div className="servicesC__stage" aria-label="Carrusel de servicios">
          <button className="servicesC__arrow servicesC__arrow--left" onClick={prev} aria-label="Anterior">
            ‹
          </button>

          <div className="servicesC__track">
            {cards.map((s, i) => {
              const raw = i - active;

              // wrap para que siempre agarre el camino más corto
              const half = Math.floor(cards.length / 2);
              let d = raw;
              if (d > half) d -= cards.length;
              if (d < -half) d += cards.length;

              // coverflow transform
              const abs = Math.abs(d);
              const clamped = Math.min(abs, 3);

              const scale = 1 - clamped * 0.08;
              const rotateY = d * -18;
              const translateX = d * 240;
              const translateZ = 220 - clamped * 120;
              const opacity = 1 - clamped * 0.18;
              const zIndex = 100 - clamped;

              const style = {
                transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                opacity,
                zIndex,
              };

              return (
                <article
                  key={s.name}
                  className={`serviceCard ${s.highlight ? "serviceCard--highlight" : ""} ${
                    i === active ? "is-active" : ""
                  }`}
                  style={style}
                  onClick={() => setActive(i)}
                >
                  <div className="serviceCard__top">
                    <div className="serviceCard__icon" aria-hidden="true">
                      {s.tag}
                    </div>
                    <h3 className="serviceCard__name">{s.name}</h3>
                  </div>

                  <p className="serviceCard__desc">{s.desc}</p>

                  <ul className="serviceCard__list">
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>

          <button className="servicesC__arrow servicesC__arrow--right" onClick={next} aria-label="Siguiente">
            ›
          </button>
        </div>

        <div className="servicesC__dots" aria-label="Indicadores">
          {cards.map((_, i) => (
            <button
              key={i}
              className={`servicesC__dot ${i === active ? "is-active" : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Ir al servicio ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
