import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

export function Navbar() {

    const navRef = useRef();

    const muestraNavbar = () => {
        navRef.current.classList.toggle("nav_responsive");
    }
  return (
    <header>
      <>
        <h3>logo</h3>
        <nav ref={navRef}>
          <a href="#">Inicio</a>
          <a href="#">Productos</a>
          <a href="#">Nosotros</a>
          <a href="#">Contacto</a>
          <button className="nav_btn" onClick={muestraNavbar}>
            <FaTimes />
          </button>
        </nav>
      </>
      <button className="nav_btn" onClick={muestraNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

