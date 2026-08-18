import "../styles/Header.css";

import Navigation from "../../nav/Navigation";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <header className={`header`}>
      <Navigation
        showMenu={showMenu}
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
      />
    </header>
  );
};

export default Header;
