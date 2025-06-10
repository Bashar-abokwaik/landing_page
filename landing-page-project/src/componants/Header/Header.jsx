import logoImge from "../../assets/logo.png";
import "./Header.css";

function Header() {
  return (
    <header className="heder">
      <div className="logo">
        <img src={logoImge} alt="Logo" className="logo-img" />
        <h1 className="heder-titel">{"Astraeus Gym".toUpperCase()}</h1>
      </div>
      <nav className="nav">
        <ul className="lest">
          <li>
            <a href="#home">{"Home".toUpperCase()}</a>
          </li>
          <li>
            <a href="#about">{"About Us".toUpperCase()}</a>
          </li>
          <li>
            <a href="#services">{"Services".toUpperCase()}</a>
          </li>
          <li>
            <a href="#contact">{"Contact Us".toUpperCase()}</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
