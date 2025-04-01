"use client";

import React, { useEffect, useState } from "react";
import "../../app/styles/globals.css";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from 'next/head';

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
      <Head>
        <title>Restaurante Palatus</title>
      </Head>
      <header>
        <nav>
          <h2>
            <a href="#" id="logo">
              Palatus
            </a>
          </h2>
          <button
            className="nav-button fa fa-bars"
            onClick={handleNavButtonClick}
          >
            ☰
          </button>
          <div className={menuOpen ? "show" : ""}>
            <ul>
              <button
                className="exit-menu fa fa-times"
                onClick={handleExitMenuClick}
              ></button>

              <li>
                <a href="#" className="active">
                  Bem Vindo
                </a>
              </li>
              <li>
              <a
  href="#about-section"
  onClick={(e) => {
    e.preventDefault(); // Evita o comportamento padrão do link
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
    setMenuOpen(false); // Fecha o menu após o clique
  }}
>
  Sobre Nós
</a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => {
                    const menuSection =
                      document.getElementById("menu-section");
                    if (menuSection) {
                      menuSection.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                    }
                    setMenuOpen(false); // Fecha o menu após o clique
                  }}
                >
                  Menu
                </a>
              </li>

              <li>
              <a
  href="https://wa.me/554797090916"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaWhatsapp size={25} />
</a>
              </li>
              <li>
              <a
  href="https://www.instagram.com/romaniepalatuspizzaria/"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaInstagram size={25} />
</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="center">
          <h1 className="alex-brush">Bem Vindo</h1>
          <h2 >Restaurante Palatus</h2>
          <span id="asterisk">*</span>
          <p>Prontos para lhe atender</p>
        </div>
      </header>

      <section id="about-section" className="add-padding add-flex ">
        <div className="center-text">
          <h1 className="alex-brush">
            <span className="custom-font">Sobre Nós</span>
            <br />
            NOSSA HISTÓRIA
          </h1>
          <h4>*</h4>
          <p>
            O Restaurante Palatus nasceu do sonho de uma família apaixonada
            pela culinária e pela arte de bem receber. Fundado em 1995, o
            restaurante começou como um pequeno negócio familiar, onde receitas
            tradicionais eram preparadas com amor e dedicação, seguindo os
            segredos passados de geração em geração.
          </p>
        </div>
        <div
          className="stuffed-cherries"
          data-aos="fade-left"
          data-aos-delay="300"
        ></div>
      </section>

      <section className="bread-background center-h1">
        <div id="menu-section" className="center-text">
          <h1>
            <br />
            MENU
          </h1>
          

          <ul>
            <li>
              <strong>Buffet Livre:</strong> Desfrute de uma variedade de pratos
              deliciosos em um ambiente acolhedor.
            </li>
            <li>
              <strong>Marmitas Delivery:</strong> Entregamos refeições frescas e
              saborosas diretamente na sua casa.
            </li>
            <li>
              <strong>Atendimento a Eventos:</strong> Organizamos serviços
              personalizados para festas, casamentos e eventos corporativos.
            </li>
            <li>
              <strong>Marmitas para Empresas:</strong> Soluções práticas e
              econômicas para refeições no ambiente de trabalho.
            </li>
          </ul>
          <div className="menu-actions">
            <a
              href="https://wa.me/4797090916"
              target="_blank"
              rel="noopener noreferrer"
              className="menu-button"
            >
              Entrar em Contato
            </a>
          </div>
        </div>
      </section>

      <section className="cake-background center-h1">
        <h1 className="custom-h1">
          <span className="custom-font alex-brush">Restaurante</span>
          <br />
          PALATUS
        </h1>
      </section>

      {/*footer*/}
      <footer>
        <button className="to-top" onClick={handleScrollToTop}>
          <i className="fa fa-chevron-up"></i>TOP
        </button>

        <div className="restaurant-info">
          <div className="locations">
            <h4>Local</h4>
            <div className="location-1">
              <h5>
              R. Alagoas, 11 - Santa Terezinha, 
                <br />
                Gaspar - SC, 89114-274 
              </h5>
            </div>
            
          </div>

          <div className="hours">
            <h4>Horário de funcionamento</h4>
            <div className="weekdays">
              <h5>
                Segunda - Sabádo
                <br />
                11:00pm - 13:30pm
              </h5>
            </div>

            

            <div className="private-events">
              <h5>
              Disponível para eventos privados
              
              

              </h5>
            </div>
          </div>
        </div>

        <div className="copyright">
        <small>
  Copyright 2025 &#169; Restaurante Palatus. Todos os direitos reservados.
</small>
<small>
  Entre em contato conosco para mais informações:{" "}
  <a href="email@gmail.com">Entre em contato conosco para mais informações:{" "}</a>
</small>
        </div>
      </footer>
    </>
  );
}