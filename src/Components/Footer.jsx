import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__brand">
        © {new Date().getFullYear()} Clothe Shop
      </div>

      <div className="footer__links">
        <a href="#" className="footer__link">
          Privacy Policy
        </a>

        <a href="#" className="footer__link">
          Terms
        </a>

        <a href="#" className="footer__link">
          Contact
        </a>
      </div>

      <div className="footer__social">
        <a href="#" className="footer__social-link">
          <FaFacebookF />
        </a>

        <a href="#" className="footer__social-link">
          <FaInstagram />
        </a>

        <a href="#" className="footer__social-link">
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;