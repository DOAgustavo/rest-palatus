import { FaWhatsapp, FaInstagram, FaHome } from "react-icons/fa";
import NavButton from "../buttons/NavButton";

export default function NavBar() {
  return (
    <header className="navbar d-flex justify-content-between align-items-center bg-brown p-1 position-fixed w-100" style={{ top: 0, zIndex: 1000 }}>{/* Logo da empresa */}
    <div className="d-flex align-items-center ms-5">
      <a href="#">
        <FaHome size={30} className="me-2 text-white" /> {/* Ícone da logo */}
      </a>
    
    </div>
       
      
      {/* Botão NavButton visível apenas em telas pequenas */}
      <NavButton className="d-flex justify-content-end align-items-center">
      <section className="ms-auto">
      <ul className="nav justify-content-end">
  <li className="nav-item">
    <a className="nav-link active " href="#">Sobre Nós</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Cardápio</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Delivery</a>
  </li>
<li className="nav-item">
<a className="nav-link" href="#">
        <FaWhatsapp size={20}  />
      </a>
    </li>
    <li className="nav-item ">
    <a className="nav-link" href="#">
        <FaInstagram size={20}  />
      </a>
    </li>
</ul>
</section>
      </NavButton>
      
    </header>
  );
}