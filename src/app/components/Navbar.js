"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

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

  const handleItemClick = (key, path) => {
    setHoveredContentKey(null);
    setMenuOpen(false);
    document.body.style.overflow = "auto";
    router.push(path);
  };

  const handleCloseModal = () => {
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
        <img src={`${basePath}/Asset/linkedin_logo.jpeg`} alt="Magicchat" />
        <h2>Magicchat</h2>
      </div>

      <div
        className={`${styles["burger-icon"]} ${!menuOpen ? styles["animate-fade"] : ""
          }`}
        onClick={toggleMenu}
      >
        {menuOpen ? <HiOutlineX size={28} /> : <HiOutlineMenuAlt3 size={28} />}
      </div>

      <div
        className={`${styles.nav_overlay} ${menuOpen ? styles.active : ""}`}
        onClick={toggleMenu}
      ></div>

      <ul className={`${styles["nav-links"]} ${menuOpen ? styles.active : ""}`} id="nav-links">
        <div className={styles.navList}>

          {/* Platform */}
          <div
            className={styles.hoverWrapper}
            onMouseEnter={() => { if (!isMobile) setHoveredContentKey("platform"); }}
          >
            <li className={styles.links}>
              {/* <a onClick={() => handleItemClick("platform", "/platform")} className={styles.link}>
                Platform
              </a> */}
                <Link href="/platform" legacyBehavior>
                Platform
              </Link>
              <div className={styles.nextArrow}>&gt;</div>
            </li>
            {hoveredContentKey === "platform" && (
              <div className={`${styles.modalDropdown} ${styles.active}`}>
                <Platform />
              </div>
            )}
          </div>

          {/* Solutions */}
          <div
            className={styles.hoverWrapper}
            onMouseEnter={() => { if (!isMobile) setHoveredContentKey("solutions"); }}
          >
            <li className={styles.links}>
              {/* <a onClick={() => handleItemClick("solutions", "/solutions")} className={styles.link}>
                Solutions
              </a> */}
               <Link href="/solutions" legacyBehavior>
                Solutions
              </Link>
              <div className={styles.nextArrow}>&gt;</div>
            </li>
            {hoveredContentKey === "solutions" && (
              <div className={`${styles.modalDropdown} ${styles.active}`}>
                <Solutions onCloseModal={handleCloseModal} />
              </div>
            )}
          </div>

          {/* Developers */}
          <div
            className={styles.hoverWrapper}
            onMouseEnter={() => { if (!isMobile) setHoveredContentKey("developers"); }}
          >
            <li className={styles.links}>
              {/* <a onClick={() => handleItemClick("developers", "/developers")} className={styles.link}>
                Developers
              </a> */}
               <Link href="/developers" legacyBehavior>
                Developers
              </Link>
              <div className={styles.nextArrow}>&gt;</div>
            </li>
            {hoveredContentKey === "developers" && (
              <div className={`${styles.modalDropdown} ${styles.active}`}>
                <Developers />
              </div>
            )}
          </div>

          {/* Resources */}
          <div
            className={styles.hoverWrapper}
            onMouseEnter={() => { if (!isMobile) setHoveredContentKey("resources"); }}
          >
            <li className={styles.links}>
              <Link href="/resources" legacyBehavior>
                Resources
              </Link>
              {/* <a onClick={() => handleItemClick("resources", "/resources")} className={styles.link}>
                Resources
              </a> */}
              <div className={styles.nextArrow}>&gt;</div>
            </li>
            {hoveredContentKey === "resources" && (
              <div className={`${styles.modalDropdown} ${styles.active}`}>
                <Resources />
              </div>
            )}
          </div>




          <li onMouseEnter={handleCloseModal}>
            <Link href="/pricing" legacyBehavior>
              Pricing
            </Link>
          </li>

        </div>

        <div className={styles["auth-buttons"]}>
          <li>
            <a href="https://admin.magicchat.io/login">
              <button className={styles.login}>Log-in</button>
            </a>
          </li>
          <li>
            <a href="https://admin.magicchat.io/signup">
              <button className={styles.signup}>Sign-up</button>
            </a>
          </li>
        </div>
      </ul>

      {(hoveredContentKey || isMobile) && (
        <>
          <div
            className={`${styles.nav_overlay} ${hoveredContentKey ? styles.active : ""
              }`}
            onClick={handleCloseModal}
          ></div>
          <div
            className={`${styles.modalDropdown} ${hoveredContentKey ? styles.active : ""
              }`}
            onClick={handleCloseModal}
            onMouseLeave={handleCloseModal}
          >
            {renderHoveredContent()}
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
