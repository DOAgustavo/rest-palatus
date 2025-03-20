"use client";

import Hamburger from "hamburger-react";
import { useState } from "react";
export default function NavButton() {
    const [Open, setOpen] = useState(false);
    return (<div>
        <Hamburger toggled={Open} toggle={setOpen} size={20} />
    </div>);
}