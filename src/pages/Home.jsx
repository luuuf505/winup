import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import ServicesCarousel from "../components/ServicesCarousel";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { useEffect } from "react";



export default function Home() {
  useEffect(() => {
  const id = window.location.hash.replace("#", "");
  if (!id) return;

  // espera 1 frame para que rendericen las secciones
  requestAnimationFrame(() => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 86;
    window.scrollTo({ top: y, behavior: "smooth" });
  });
}, []);

  return (
    <>
      <Navbar />
      <Hero />
      <ServicesCarousel />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
