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
    <header className={`d-lg-none ${className}`}>
      {open && (
        <div
          className="navbutton position-start absolutetext-black z-50 
          flex items-center justify-center"
      
        >
          {children}
        </div>
      )}
      <Hamburger toggled={open} toggle={setOpen} />
    </header>
  );
}