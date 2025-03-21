"use client";

import Hamburger from "hamburger-react";
import { useState } from "react";
export default function NavButton() {
    const [open, setOpen] = useState(false);
    return <header>
        
       
       
        {open &&  <div className=" navbutton absolute top-0 left-0 w-full h-full bg-white text-black z-50 flex items-center justify-center">
                    
            
            <ul className="d-flex flex-wrap list-unstyled m-0 justify-content-center ">
                        <li className="mx- mb-1 mb-md-0 ">
                          <a className='' href="#">Sobre nós</a>
                        </li>
                        <li className="mx-5 mb-1 mb-md-0">
                          <a href="#">Cardápio</a>
                        </li>
                        <li className="mx-5 mb-1 mb-2 ms-0 mb-md-0">
                          <a href="#">Delivery</a>
                        </li>
                       
                      </ul>
        </div>}
        <Hamburger toggled={open} toggle={setOpen} />
        </header>
    
}