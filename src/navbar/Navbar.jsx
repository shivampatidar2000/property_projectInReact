

import { useState } from "react";
import styled from "./Navbar.module.css";

export default function AppNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handlePropertyFilter = (filter) => {
    // navigate(`/properties?filter=${filter}`);
    setMenuOpen(false);
  };
  return (
    <div className={styled.body}>
      <div className={styled.navbar}>
        {/* LEFT SIDE (Logo always visible) */}
        <div className={styled.leftSide}>
          <img src="src/assets/images/logoImage.png" alt="logo" />
          <a href="/">
            <span className={styled.logo}>DWELL</span>
            <span className={styled.logosub}>PROPERTIES</span>
          </a>
        </div>

        {/* RIGHT SIDE (Menu + Social for Desktop) */}
        <div className={styled.rightSide}>
          <ul className={styled.desktopMenu}>
            <li><a href="/">Home</a></li>
            {/* <li><a href="/properties">Properties</a></li> */}
            <li className={styled.dropdown}>
              <span>Properties ▾</span>
              <ul className={styled.dropdownMenu}>
                <li onClick={() => handlePropertyFilter("All")}>All</li>
                <li onClick={() => handlePropertyFilter("Buy")}>Buy</li>
                <li onClick={() => handlePropertyFilter("Rent")}>Rent</li>
              </ul>
            </li>
            <li><a href="/news">News</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="contectUs">Contact</a></li>
          </ul>

          <div className={styled.desktopSocialLinks}>
            <img src="src/assets/images/facebook.png" alt="facebook" />
            <img src="src/assets/images/twitter.png" alt="twitter" />
            <img src="src/assets/images/linkedin.png" alt="linkedin" />
            <img src="src/assets/images/youtube.png" alt="youtube" />
          </div>
        </div>

        {/* HAMBURGER ICON (Visible only on small screens) */}
        <button className={styled.hamburger} onClick={() => setMenuOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* FULL SCREEN MOBILE MENU */}
      <div className={`${styled.mobileMenu} ${menuOpen ? styled.open : ""}`}>
        <button className={styled.closeBtn} onClick={() => setMenuOpen(false)}>
          ✕
        </button>
        <ul className={styled.menuLinks}>
          <li><a href="/" onClick={() => setMenuOpen(false)}>Home</a></li>
          {/* <li><a href="/properties" onClick={() => setMenuOpen(false)}>Properties</a></li> */}
          <li>
            <details>
              <summary style={{color:"white", letterSpacing: "0.09rem"}}>Properties</summary>
              <ul className={styled.mobileDropdown}>
                <li onClick={() => handlePropertyFilter("All")}>All</li>
                <li onClick={() => handlePropertyFilter("Buy")}>Buy</li>
                <li onClick={() => handlePropertyFilter("Rent")}>Rent</li>
              </ul>
            </details>
          </li>

          <li><a href="/news" onClick={() => setMenuOpen(false)}>News</a></li>
          <li><a href="/team" onClick={() => setMenuOpen(false)}>Team</a></li>
          <li><a href="/contectUs" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>

        {/* Social Icons at Bottom for Mobile */}
        <div className={styled.socialLinks}>
          <img src="src/assets/images/facebook.png" alt="facebook" />
          <img src="src/assets/images/twitter.png" alt="twitter" />
          <img src="src/assets/images/linkedin.png" alt="linkedin" />
          <img src="src/assets/images/youtube.png" alt="youtube" />
        </div>
      </div>
    </div>
  );
}
