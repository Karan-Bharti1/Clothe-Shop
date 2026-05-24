import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaShopify } from "react-icons/fa";
const Nav = () => {
  return (
    <header className="navbar">
      <NavLink to="/" className="navbar__logo">Clothe Shop</NavLink>

      <nav className="navbar__links">
        <NavLink to="/products"  className="navbar__link">
       <FaShopify/>
        </NavLink>

        <NavLink to="/cart" className="navbar__link">
        <FaShoppingCart/>
        </NavLink>

        <NavLink to="/profile"  className="navbar__link">
        <CgProfile/>
        </NavLink>
      </nav>
    </header>
  );
};

export default Nav;