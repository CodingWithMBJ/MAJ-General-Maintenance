import logo from "../../../assets/IconOnly_Transparent_NoBuffer.png";

const Logo = () => {
  return (
    <a href="#hero" className="logo" onClick={() => window.scrollTo(0, 0)}>
      <img src={logo} alt="logo-icon" className="logo-icon" />
    </a>
  );
};

export default Logo;
