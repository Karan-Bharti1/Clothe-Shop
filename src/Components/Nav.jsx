import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header className="navbar">
      <NavLink to="/" className="navbar__logo">Clothe Shop</NavLink>

      <nav className="navbar__links">
        <NavLink to="/products"  className="navbar__link">
          Products
        </NavLink>

        <NavLink to="/cart" className="navbar__link">
          Cart
        </NavLink>

        <NavLink to="/profile"  className="navbar__link">
          Profile
        </NavLink>
      </nav>
    </header>
  );
};

export default Nav;