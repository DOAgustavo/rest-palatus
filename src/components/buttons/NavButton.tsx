"use client";

import Hamburger from "hamburger-react";
import { useState, ReactNode } from "react";

interface NavButtonProps {
  children: ReactNode;
  className?: string;
}

export default function NavButton({ children, className }: NavButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Botão Hamburger visível apenas em telas pequenas */}
      <div className={`d-sm-none ${className}`}>
        <Hamburger toggled={open} toggle={setOpen} size={20} />
      </div>

      {/* Caixa flutuante exibida ao abrir o menu */}
      {open && (
        <div
          className="position-fixed   bg-branco text-black  flex flex-col items-end justify-end"
          style={{
            top: "0px", // Posiciona a caixa 60px abaixo do topo
            right: "70px", // Ajusta a posição horizontal (opcional)
            width: "323px",
           
            zIndex: 1000, // Posicion
          }} 
        >
          <ul className="nav nav-tabs bg-brown">
  
          <li className="nav-item ">
    <a className="nav-link" href="#">Sobre</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Cardápio</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Delivery</a>
  </li>
  
</ul>
          {/* Botão para fechar o menu */}
         
        </div>
      )}

      {/* Conteúdo visível em telas maiores */}
      {!open && <div className="d-none d-sm-flex">{children}</div>}
    </>
  );
}