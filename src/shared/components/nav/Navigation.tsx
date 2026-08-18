import { RiMenu4Fill } from "react-icons/ri";
import { navigation } from "../../data/navigation";
import Logo from "../logo/Logo";
import "./Navigation.css";

interface NavigationProps {
  showMenu?: boolean;
  closeMenu?: () => void;
  toggleMenu: () => void;
}

const Navigation = ({ showMenu, toggleMenu, closeMenu }: NavigationProps) => {
  return (
    <nav className={`nav`}>
      <Logo />
      <button
        className={`menu-btn ${showMenu ? "showing" : ""}`}
        onClick={toggleMenu}
      >
        <RiMenu4Fill className="menu-btn-icon" />
      </button>{" "}
      <ul className={`nav-ul ${showMenu ? "opened" : ""}`}>
        {navigation.map((item) => (
          <li className="nav-li inline-flex items-center" key={item.id}>
            <a
              href={`${item.section}`}
              className="nav-li-a inline-block"
              onClick={closeMenu}
            >
              {item.name}
            </a>
          </li>
        ))}
        <li className="nav-li">
          <a href={`#contact`} className="cta">
            Get a Quote
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
