import React from "react";
import { Link } from "react-router-dom";
import { FacebookIcon } from "../icons";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className="grid grid-cols-3 px-4 bg-white shadow-lg sticky top-0 z-10">
      <div className="py-2 justify-self-start">
        <Link to="/">
          <FacebookIcon />
        </Link>
      </div>
      <Menu />
    </header>
  );
}
