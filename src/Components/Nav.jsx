// import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header className="navbar">
      <h1 className="navbar__logo">Clothe Shop</h1>

      <nav className="navbar__links">
        <a  className="navbar__link">
          Products
        </a>

        <a className="navbar__link">
          Cart
        </a>

        <a  className="navbar__link">
          Profile
        </a>
      </nav>
    </header>
  );
};

export default Nav;