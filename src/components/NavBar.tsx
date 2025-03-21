import { FaWhatsapp, FaInstagram, FaHome } from 'react-icons/fa';

export default function navBar() {
    return (
      <div className="navbar bg-brown px-3 text-white">
        <div className="container d-flex justify-content-between ">
          <div className='navbar-brand '>
            <a href="#">
                <FaHome size={30} className="me-2" />
            </a>   
          </div> 
          

        <section>
            <ul className='d-flex list-unstyled m-0 list-spacing'>
                <li ><a href="#">Sobre nós</a></li>
                <li ><a href="#">Cardápio</a></li>
                <li ><a href="#">Fale conosco</a></li>
               
                <li className="me-0">
                    <a href="#">
                        <FaWhatsapp size={20} className="text-white" /> {/* Ícone do WhatsApp */}
                     </a>
                </li>
                <li className="ms-2">
                    <a href="#">
                        <FaInstagram size={20} className="text-white" /> {/* Ícone do Instagram */}
                    </a>
                </li>
            </ul>
        </section>
          
            
        </div>
      </div>
  
      
    );
  }