import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/logo.png";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 86;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const goSection = (id) => {
    setOpen(false);
    if (isHome) scrollToId(id);
    else navigate(`/#${id}`);
  };

  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner">
        <Link className="nav__logo" to="/" onClick={() => setOpen(false)}>
  <img
    src={logo}
    alt="WinUp"
    className="nav__logo-img"
  />
</Link>

        <div className="nav__links">
          <Link to="/sobre">Sobre</Link>

          <button onClick={() => goSection("servicios")}>Servicios</button>
          <button onClick={() => goSection("proceso")}>Proceso</button>
          <button onClick={() => goSection("planes")}>Planes</button>
          <button onClick={() => goSection("contacto")}>Contacto</button>

          <button className="nav__cta" onClick={() => goSection("contacto")}>
            Hablemos
          </button>
        </div>

        <button
          className="nav__burger"
          aria-label="Abrir menú"
          aria-expanded={open ? "true" : "false"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`nav__mobile ${open ? "is-open" : ""}`}>
        <Link to="/sobre" onClick={() => setOpen(false)}>
          Sobre
        </Link>

        <button onClick={() => goSection("servicios")}>Servicios</button>
        <button onClick={() => goSection("proceso")}>Proceso</button>
        <button onClick={() => goSection("planes")}>Planes</button>
        <button onClick={() => goSection("contacto")}>Contacto</button>

        <a
          className="nav__wa"
          href="https://wa.me/595973469177"
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          WhatsApp: +595 973 469177
        </a>
      </div>
    </nav>
  );
}
