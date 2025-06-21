"use client"; // This line must be at the top

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { collectSegments } from "next/dist/build/segment-config/app/app-segments";
import Platform from "./Platform";
import Solutions from "./Solutions";
import Developers from "./Developers";
import Resources from "./Resources";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Navbar = ({ onLinkHover, onNavLeave }) => {
  const [menuOpen, setMenuOpen] = useState(false); // Manage menu state
  const [hoveredContent, setHoveredContent] = useState(null); // For tracking hovered content
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust based on your mobile breakpoint
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial window size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    console.log("i am clicked");

    if (!menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const handleItemClick = (content, link) => {
    if (isMobile && link !== "/pricing") {
      onLinkHover(content);
      setHoveredContent(content);
      setMenuOpen(false);
      console.log("you clicked");
    }

    if (isMobile && link === "/pricing") {
      setMenuOpen(false);
      document.body.style.overflow = "auto";
    }
  };

  const handleCloseModal = () => {
    setHoveredContent(null);
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
      {/* <div className="burger-icon" onClick={toggleMenu}>
        &#9776;
      </div> */}

      <div
        className={`burger-icon ${!menuOpen ? "animate-fade" : ""}`}
        onClick={toggleMenu}
      >
        {menuOpen ? <HiOutlineX size={28} /> : <HiOutlineMenuAlt3 size={28} />}
      </div>

      <div
        className={`nav_overlay ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      ></div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`} id="nav-links">
        <div className="navList">
          <li
            onMouseEnter={() => onLinkHover(<Platform />)}
            onMouseLeave={onNavLeave}
            onClick={() => handleItemClick(<Platform />)}
            className="links"
          >
            <a href="#platform" className="link">
              Platform
            </a>
            <div className=" nextArrow"> &gt;</div>
          </li>
          <li
            onMouseEnter={() => onLinkHover(<Solutions />)}
            // onMouseLeave={onNavLeave}
            onClick={() => handleItemClick(<Solutions />)}
            className="links"
          >
            <a href="#solutions" className="link">
              Solutions
            </a>
            <div className=" nextArrow"> &gt;</div>
          </li>
          <li
            onMouseEnter={() => onLinkHover(<Developers />)}
            onMouseLeave={onNavLeave}
            onClick={() => handleItemClick(<Developers />)}
            className="links"
          >
            <a href="#developer" className="link">
              Developers
            </a>
            <div className=" nextArrow"> &gt;</div>
          </li>
          <li
            onMouseEnter={() => onLinkHover(<Resources />)}
            onMouseLeave={onNavLeave}
            onClick={() => handleItemClick(<Resources />)}
            className="links"
          >
            <a href="#resource" className="link">
              Resources
            </a>
            <div className=" nextArrow"> &gt;</div>
          </li>

          <li>
            <Link href="/pricing" legacyBehavior>
              <a
                onClick={() => handleItemClick(null, "/pricing")}
                className="link"
              >
                Pricing
              </a>
            </Link>
          </li>
        </div>
        <div className="auth-buttons">
          <li>
            <a href="http://admin.magicchat.io/login">
              <button className="login">Log-in</button>
            </a>
          </li>
          <li>
            <a href="http://admin.magicchat.io/signup">
              <button className="signup">Sign-up</button>
            </a>
          </li>
        </div>
      </ul>
      {(hoveredContent || isMobile) && (
        <>
          <div
            className={`nav_overlay ${hoveredContent ? "active" : ""}`}
            onClick={handleCloseModal}
          ></div>
          <div
            className={`modalDropdown ${hoveredContent ? "active" : ""}`}
            onClick={handleCloseModal}
          >
            {hoveredContent}
            <button className="closeBtn" onClick={handleCloseModal}>
              <i className="fa-solid fa-arrow-left"></i>
              <span>Back</span>
            </button>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
