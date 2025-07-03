"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Platform from "./Platform";
import Solutions from "./Solutions";
import Developers from "./Developers";
import Resources from "./Resources";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import styles from "./NavbarSty.module.css";

const Navbar = ({ onLinkHover, onNavLeave }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredContent, setHoveredContent] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1280);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    document.body.style.overflow = !menuOpen ? "hidden" : "auto";
  };

  const handleItemClick = (content, link) => {
    if (isMobile && link !== "/pricing") {
      onLinkHover(content);
      setHoveredContent(content);
      setMenuOpen(false);
    }

    if (isMobile && link === "/pricing") {
      setMenuOpen(false);
      document.body.style.overflow = "auto";
    }
  };

  const handleCloseModal = () => {
    setHoveredContent(null);
  };

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={`${basePath}/Asset/logo.jpg`} alt="addChat" />
        <h2>addChat</h2>
      </div>

      <div
        className={`${styles["burger-icon"]} ${
          !menuOpen ? styles["animate-fade"] : ""
        }`}
        onClick={toggleMenu}
      >
        {menuOpen ? <HiOutlineX size={28} /> : <HiOutlineMenuAlt3 size={28} />}
      </div>

      <div
        className={`${styles.nav_overlay} ${menuOpen ? styles.active : ""}`}
        onClick={toggleMenu}
      ></div>

      <ul
        className={`${styles["nav-links"]} ${
          menuOpen ? styles.active : ""
        }`}
        id="nav-links"
      >
        <div className={styles.navList}>
          <li
            onMouseEnter={() => onLinkHover(<Platform />)}
            onMouseLeave={onNavLeave}
            onClick={() => handleItemClick(<Platform />)}
            className={styles.links}
          >
            <a href="#platform" className={styles.link}>
              Platform
            </a>
            <div className={styles.nextArrow}> &gt;</div>
          </li>
          <li
            onMouseEnter={() => onLinkHover(<Solutions />)}
            onClick={() => handleItemClick(<Solutions />)}
            className={styles.links}
          >
            <a href="#solutions" className={styles.link}>
              Solutions
            </a>
            <div className={styles.nextArrow}> &gt;</div>
          </li>
          <li
            onMouseEnter={() => onLinkHover(<Developers />)}
            onMouseLeave={onNavLeave}
            onClick={() => handleItemClick(<Developers />)}
            className={styles.links}
          >
            <a href="#developer" className={styles.link}>
              Developers
            </a>
            <div className={styles.nextArrow}> &gt;</div>
          </li>
          <li
            onMouseEnter={() => onLinkHover(<Resources />)}
            onMouseLeave={onNavLeave}
            onClick={() => handleItemClick(<Resources />)}
            className={styles.links}
          >
            <a href="#resource" className={styles.link}>
              Resources
            </a>
            <div className={styles.nextArrow}> &gt;</div>
          </li>

          <li>
            <Link href="/pricing" legacyBehavior>
              <a
                onClick={() => handleItemClick(null, "/pricing")}
                className={styles.link}
              >
                Pricing
              </a>
            </Link>
          </li>
        </div>

        <div className={styles["auth-buttons"]}>
          <li>
            <a href="http://dev.addchat.tech/login">
              <button className={styles.login}>Log-in</button>
            </a>
          </li>
          <li>
            <a href="http://dev.addchat.tech/signup">
              <button className={styles.signup}>Sign-up</button>
            </a>
          </li>
        </div>
      </ul>

      {(hoveredContent || isMobile) && (
        <>
          <div
            className={`${styles.nav_overlay} ${
              hoveredContent ? styles.active : ""
            }`}
            onClick={handleCloseModal}
          ></div>
          <div
            className={`${styles.modalDropdown} ${
              hoveredContent ? styles.active : ""
            }`}
            onClick={handleCloseModal}
          >
            {hoveredContent}
            <button className={styles.closeBtn} onClick={handleCloseModal}>
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
