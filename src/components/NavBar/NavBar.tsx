import { FaWhatsapp, FaInstagram, FaHome } from "react-icons/fa";
import NavButton from "../buttons/NavButton";

export default function NavBar() {
  return (
    <header className="navbar d-flex row justify-content-between align-items-end bg-brown p-3">
      {/* Botão NavButton visível apenas em telas pequenas */}
      <NavButton className="d-flex d-lg-none justify-content-center align-items-center">
        <section>
          <ul className="d-flex list-unstyled m-0 justify-content-center">
            <li className="mx- mb-1 mb-md-0">
              <a className="" href="#">
                Sobre nós
              </a>
            </li>
            <li className="mx-5 mb-1 mb-md-0">
              <a href="#">Cardápio</a>
            </li>
            <li className="mx-5 mb-1 mb-2 ms-0 mb-md-0">
              <a href="#">Delivery</a>
            </li>
            <li className="mx-1 mb-2 ms-5 mb-md-0">
              <a href="#">
                <FaWhatsapp size={20} className="text-white" />
              </a>
            </li>
            <li className="mx-1 mb-2 mb-md-0">
              <a href="#">
                <FaInstagram size={20} className="text-white" />
              </a>
            </li>
          </ul>
        </section>
      </NavButton>
    </header>
  );
}