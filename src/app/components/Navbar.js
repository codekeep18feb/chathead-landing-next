"use client"; // This line must be at the top

import React, { useState } from "react";
import Link from "next/link";
import { collectSegments } from "next/dist/build/segment-config/app/app-segments";
import Platform from "./Platform";
import Solutions from "./Solutions";
import Developers from "./Developers";
import Resources from "./Resources";

const Navbar = ({ onLinkHover, onNavLeave }) => {
  const [menuOpen, setMenuOpen] = useState(false); // Manage menu state

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev); // Toggle the state
    console.log("i am clicked");
  };

  // Use the basePath for images
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  console.log("base pathDFD", basePath);
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={`${basePath}/Asset/logo.jpg`} alt="addChat" />
        <h2>addChat</h2>
      </div>
      <div className="burger-icon" onClick={toggleMenu}>
        &#9776;
      </div>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`} id="nav-links">
          <div className="navList">
            <li
              onMouseEnter={() => onLinkHover(<Platform/>)}
              onMouseLeave={onNavLeave}
              className="links"
            >
              <a href="#platform" className="link">
                Platform
              </a>
              <div className=" nextArrow"> &gt;</div>
            </li>
            <li
              onMouseEnter={() => onLinkHover(<Solutions/>)}
              onMouseLeave={onNavLeave}
              className="links"
            >
              <a href="#solutions" className="link">
                Solutions
              </a>
              <div className=" nextArrow"> &gt;</div>
            </li>
            <li
              onMouseEnter={() => onLinkHover(<Developers/>)}
              onMouseLeave={onNavLeave}
              className="links"
            >
              <a href="#developer" className="link">
                Developers
              </a>
              <div className=" nextArrow"> &gt;</div>
            </li>
            <li
              onMouseEnter={() => onLinkHover(<Resources/>)}
              onMouseLeave={onNavLeave}
              className="links"
            >
              <a href="#resource" className="link">
                Resources
              </a>
              <div className=" nextArrow"> &gt;</div>
            </li>
            <li>
              <Link href="/pricing" className="link">
                Pricing
              </Link>
              {/* <a href="#pricing" className="link">Pricing</a> */}
            </li>
          </div>
          <div className="auth-buttons">
            <li>
              <a href="http://122.160.157.99:3101/login">
                <button className="login">Log-in</button>
              </a>
            </li>
            <li>
              <a href="http://122.160.157.99:3101/signup">
                <button className="signup">Sign-up</button>
              </a>
            </li>
          </div>
        </ul>
    </nav>
  );
};

export default Navbar;