import "../styles/Header.css";

import Navigation from "../../nav/Navigation";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <header className={`header`}>
      <Navigation showMenu={showMenu} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
