import React from "react";
import headerLogo from "../images/Logo/Vector.svg";

function Header() {
  return (
    <header className="header">
      <img alt="Логотип проекта:Место" className="logo" src={headerLogo} />
    </header>
  );
}

export default Header;
