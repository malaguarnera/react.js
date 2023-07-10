import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import CartWidget from "../cart-widget";
import { Link } from 'react-router-dom';
import productos from "../productos";
export function Navbar() {
    const cart = 3;
    const navRef = useRef();

    const muestraNavbar = () => {
        navRef.current.classList.toggle("nav_responsive");
    }
  return (
    <header>
      <>
        <h3>logo</h3>
        <nav ref={navRef}>
        <nav>
        <a href="inicio">inicio</a>
        <a href="inicio">productos</a>
        <a href="inicio">nosotros</a>
        <a href="inicio">descripcion</a>
        </nav>
          <button className="nav_btn" onClick={muestraNavbar}>
            <FaTimes />
          </button>
        </nav>
        <CartWidget cartQuantity={cart}/>
      </>
      <button className="nav_btn" onClick={muestraNavbar}>
        <FaBars />
      </button>
    </header>
  );
}


