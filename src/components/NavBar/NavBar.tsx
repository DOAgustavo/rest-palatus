import { FaWhatsapp, FaInstagram, FaHome } from 'react-icons/fa';
import NavButton from '../buttons/NavButton';

export default function NavBar() {
  return (
    <div className="navbar bg-brown px-3 text-white">

      
      <div className="container d-flex flex-wrap justify-content-between align-items-center">
        {/* Logo */}
        <div className="navbar-brand d-flex align-items-center mb-2 mb-md-0">
          <a href="#">
            <FaHome size={30} className="me-2" />
          </a>
        </div>
      <NavButton />
        {/* Links */}
        <section>
          <ul className="d-flex flex-wrap list-unstyled m-0 justify-content-center">
            <li className="mx- mb-1 mb-md-0">
              <a href="#">Sobre nós</a>
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
      </div>
    </div>
  );
}