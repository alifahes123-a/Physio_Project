import { useEffect, useRef, useState } from "react";
import logo from "../assets/LogoREV.png";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef(null);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    const handleOutsideClick = (event) => {
      if (
        menuOpen &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <nav
      ref={navbarRef}
      className={`navbar ${
        scrolled ? "navbar-scrolled" : ""
      } ${menuOpen ? "navbar-open" : ""}`}
    >
      <div className="navbar-top">
        <a
          href="#home"
          className="navbar-logo"
          aria-label="Rev Physio home"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="The Rev Physio by Ali Farhat"
          />
        </a>

        <button
          className={`menu-button ${
            menuOpen ? "active" : ""
          }`}
          onClick={() =>
            setMenuOpen((current) => !current)
          }
          aria-label={
            menuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={menuOpen}
          aria-controls="main-menu"
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id="main-menu"
        className={`menu-panel ${
          menuOpen ? "open" : ""
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="menu-divider" />

        <p className="menu-label">
          NAVIGATION
        </p>

        <div className="menu-links">
          <a href="#home" onClick={closeMenu}>
            <span>Home</span>
            
          </a>

          <a href="#about" onClick={closeMenu}>
            <span>About</span>
            
          </a>

          <a
            href="#experience"
            onClick={closeMenu}
          >
            <span>Experience</span>
            
          </a>

          <a href="#goals" onClick={closeMenu}>
            <span>Goals</span>
           
          </a>

          <a
            href="#services"
            onClick={closeMenu}
          >
            <span>Services</span>
            
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
          >
            <span>Contact</span>
            
          </a>
        </div>

        <div className="menu-bottom">
          <div>
            <span>RECOVER.</span>
            <span>REBUILD.</span>
            <strong>REVOLUTIONIZE.</strong>
          </div>

          <span className="menu-mark">R</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;