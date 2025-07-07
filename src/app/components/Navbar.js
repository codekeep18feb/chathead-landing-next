"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Platform from "./Platform";
import Solutions from "./Solutions";
import Developers from "./Developers";
import Resources from "./Resources";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import styles from "./NavbarSty.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredContentKey, setHoveredContentKey] = useState(null);
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

  const handleItemClick = (key) => {
    if (isMobile && key !== "pricing") {
      setHoveredContentKey(key);
      setMenuOpen(false);
    }

    if (isMobile && key === "pricing") {
      setMenuOpen(false);
      document.body.style.overflow = "auto";
    }
  };

  const handleCloseModal = () => {
    console.log("Closing modal...");
    setHoveredContentKey(null);
    document.body.style.overflow = "auto";
  };

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const renderHoveredContent = () => {
    switch (hoveredContentKey) {
      case "platform":
        return <Platform />;
      case "solutions":
        return <Solutions onCloseModal={handleCloseModal} />;
      case "developers":
        return <Developers />;
      case "resources":
        return <Resources />;
      default:
        return null;
    }
  };

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
        className={`${styles["nav-links"]} ${menuOpen ? styles.active : ""}`}
        id="nav-links"
      >
        <div className={styles.navList}>
          <li
            onMouseEnter={() => setHoveredContentKey("platform")}
            onClick={() => handleItemClick("platform")}
            className={styles.links}
          >
            <a href="#platform" className={styles.link}>
              Platform
            </a>
            <div className={styles.nextArrow}> &gt;</div>
          </li>
          <li
            onMouseEnter={() => setHoveredContentKey("solutions")}
            onClick={() => handleItemClick("solutions")}
            className={styles.links}
          >
            <a href="#solutions" className={styles.link}>
              Solutions
            </a>
            <div className={styles.nextArrow}> &gt;</div>
          </li>
          <li
            onMouseEnter={() => setHoveredContentKey("developers")}
            onClick={() => handleItemClick("developers")}
            onMouseLeave={handleCloseModal}
            className={styles.links}
          >
            <a href="#developer" className={styles.link}>
              Developers
            </a>
            <div className={styles.nextArrow}> &gt;</div>
          </li>
          <li
            onMouseEnter={() => setHoveredContentKey("resources")}
            onClick={() => handleItemClick("resources")}
            onMouseLeave={handleCloseModal}
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
                onClick={() => handleItemClick("pricing")}
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

      {(hoveredContentKey || isMobile) && (
        <>
          <div
            className={`${styles.nav_overlay} ${
              hoveredContentKey ? styles.active : ""
            }`}
            onClick={handleCloseModal}
          ></div>
          <div
            className={`${styles.modalDropdown} ${
              hoveredContentKey ? styles.active : ""
            }`}
            onClick={handleCloseModal}
            // onMouseLeave={handleCloseModal} 
          >
            {renderHoveredContent()}
            {/* <button className={styles.closeBtn} onClick={handleCloseModal}>
              <i className="fa-solid fa-arrow-left"></i>
              <span>Back</span>
            </button> */}
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
