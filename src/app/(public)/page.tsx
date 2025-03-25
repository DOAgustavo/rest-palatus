"use client";

import React, { useEffect, useState } from "react";
import "../../app/styles/globals.css";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavButtonClick = () => {
    console.log("Menu button clicked");
    setMenuOpen(!menuOpen); // Abre o menu
  };

  const handleExitMenuClick = () => {
    setMenuOpen(false); // Fecha o menu
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Rola suavemente para o topo
  };

  useEffect(() => {
    AOS.init({
      duration: 1800, // Duração das animações
      easing: "ease", // Tipo de animação
    });
  }, []);

  return (
    <>
      <header>
        <nav>
          <h2>
            <a href="#" id="logo">
              Palatus
            </a>
          </h2>
          <button className="nav-button fa fa-bars" onClick={handleNavButtonClick}>  ☰</button>
<div className={menuOpen ? "show" : ""}>
<ul>
  <button className="exit-menu fa fa-times" onClick={handleExitMenuClick}></button>
            
              <li>
                <a href="#" className="active">
                  Bem Vindo
                </a>
              </li>
              <li>
                <a href="#">Sobre Nós</a>
              </li>
              <li>
                <a href="#">Menu</a>
              </li>
              <li>
                <a href="#">Delivery</a>
              </li>
<li>
                <a href="">
                  <FaWhatsapp size={20} />
                </a>
              </li>
              <li>
                <a href="">
                  <FaInstagram size={20} />
                </a>
              
              </li>
            </ul>
          </div>
        </nav>
        <div className="center">
          <h1 className="alex-brush">Bem Vindo</h1>
          <h2>Restaurante Palatus</h2>
          <span id="asterisk">*</span>
          <p>Prontos para lhe atender</p>
        </div>
      </header>

      <section className="add-padding add-flex ">
        <div className="center-text">
          <h1 className="alex-brush">
            <span className="custom-font">Sobre Nós</span>
            <br />
            NOSSA HISTÓRIA
          </h1>
          <h2>*</h2>
          <p>todas a historia do rest vai aqui</p>
        </div>
        <div
          className="stuffed-cherries"
          data-aos="fade-left"
          data-aos-delay="300"
        ></div>
      </section>

      <section className="bread-background center-h1">
        <h1 className="custom-h1 alex-brush">
          <span className="custom-font">Receitas</span>
          <br />
          De Bom Gosto
        </h1>
      </section>

      <section className="menu add-flex add-padding">
        <div className="menu-images">
         
          <img
            src="https://www.gourmetsociety.co.uk/uploads/images/restaurants/093ce538894c95892f62dc93bb023636-image.png"
            data-aos="fade-right"
            data-aos-delay="300"
            alt="Menu item 3"
          />
          
        </div>
        <div className="center-text">
          <h1>
            <br />
            MENU
          </h1>
          <h2>*</h2>
          <p>
            Aqui no Palatus, oferecemos os seguintes serviços:
            <ul>
              <li>Buffet livre</li>
              <li>Marmitex Delivery</li>
              <li>Atendimento a eventos</li>
            </ul>
          </p>
          <a href="#">Serviços</a>
          <a href="#">Entrar em contato</a>
        </div>
      </section>

      <section className="cake-background center-h1">
        <h1 className="custom-h1">
          <span className="custom-font alex-brush">Restaurante</span>
          <br />
          PALATUS
        </h1>
      </section>

      <footer>
        <button className="to-top" onClick={handleScrollToTop}>
          <i className="fa fa-chevron-up"></i>TOP
        </button>

        <div className="restaurant-info">
          <div className="locations">
            <h4>LOCATIONS</h4>
            <div className="location-1">
              <h5>
                376 Van Brun St
                <br />
                Brooklyn, NY &#8212; 11231
              </h5>
            </div>
            <div className="location-2">
              <h5>
                25 Union Square West
                <br />
                New York, NY &#8212; 10003
              </h5>
            </div>
          </div>

          <div className="hours">
            <h4>HOURS</h4>
            <div className="weekdays">
              <h5>
                Monday - Thursday
                <br />
                5:30pm - 10:00pm
              </h5>
            </div>

            <div className="weekends">
              <h5>
                Friday & Saturday
                <br />
                5:30pm - 11:00pm
              </h5>
            </div>

            <div className="private-events">
              <h5>
                Available for private
                <br />
                events on Sunday
              </h5>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>
            <small>
              Copyright 2014 &#169; Handcrafted with love by <span>PixelGrade</span>{" "}
              Team
            </small>
          </p>
          <p>
            <small>Permissions and Copyright &#8226; Contact The Team</small>
          </p>
        </div>
      </footer>
    </>
  );
}