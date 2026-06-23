"use client";

import React, { useState, useEffect, useRef } from "react";
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
  const [closeTimeout, setCloseTimeout] = useState(null);
  const router = useRouter();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1280);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeout) {
        clearTimeout(closeTimeout);
      }
    };
  }, [closeTimeout]);

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

  const handleMouseEnter = (key) => {
    if (!isMobile) {
      // Clear any pending close timeout
      if (closeTimeout) {
        clearTimeout(closeTimeout);
        setCloseTimeout(null);
      }
      setHoveredContentKey(key);
    }
  };

  const handleMouseLeaveDropdown = () => {
    if (!isMobile) {
      const timeout = setTimeout(() => {
        setHoveredContentKey(null);
      }, 200);
      setCloseTimeout(timeout);
    }
  };

  const handleMouseEnterDropdown = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
  };

  const handleLogoClick = () => {
    // Close mobile menu if open
    if (menuOpen) {
      setMenuOpen(false);
      document.body.style.overflow = "auto";
    }
    // Close dropdown modal if open
    if (hoveredContentKey) {
      setHoveredContentKey(null);
    }
    // Navigate to home
    router.push("/");
  };

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  // Render content based on hovered key
  const renderContent = () => {
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
      {/* Logo with click handler */}
      <div className={styles.logo} onClick={handleLogoClick}>
        <div className={styles.logoImg}>
          <img src={`${basePath}/logo/sageion-logo.svg`} alt="Sageion" />
        </div>
        <h2>Sageion</h2>
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
          {/* Platform */}
          <div
            className={styles.hoverWrapper}
            onMouseEnter={() => handleMouseEnter("platform")}
          >
            <li className={styles.links}>
              <Link href="/platform">Features</Link>
              <div className={styles.nextArrow}>&gt;</div>
            </li>
          </div>

          {/* Solutions */}
          <div
            className={styles.hoverWrapper}
            onMouseEnter={() => handleMouseEnter("solutions")}
          >
            <li className={styles.links}>
              <Link href="/solutions">Solutions</Link>
              <div className={styles.nextArrow}>&gt;</div>
            </li>
          </div>

          {/* Developers */}
          <div
            className={styles.hoverWrapper}
            onMouseEnter={() => handleMouseEnter("developers")}
          >
            <li className={styles.links}>
              <Link href="/developers">Developers</Link>
              <div className={styles.nextArrow}>&gt;</div>
            </li>
          </div>

          {/* Pricing */}
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
        </div>

        {/* Mobile Auth Buttons - Only visible on mobile when menu is open */}
        <div className={`${styles["mobile-auth-buttons"]}`}>
          <a href="https://admin.magicchat.io/login">
            <button className={styles.login}>Log-in</button>
          </a>
          <a href="https://admin.magicchat.io/signup">
            <button className={styles.signup}>Sign-up</button>
          </a>
        </div>
      </ul>

      {/* Desktop Auth Buttons - Hidden on mobile */}
      <div className={`${styles["auth-buttons"]} ${styles["desktop-only"]}`}>
        <a href="https://admin.magicchat.io/login">
          <button className={styles.login}>Log-in</button>
        </a>
        <a href="https://admin.magicchat.io/signup">
          <button className={styles.signup}>Sign-up</button>
        </a>
      </div>

      {/* Modal Dropdown */}
      {hoveredContentKey && (
        <>
          <div
            className={`${styles.nav_overlay} ${styles.active}`}
            onClick={handleCloseModal}
          ></div>
          <div
            ref={dropdownRef}
            className={`${styles.modalDropdown} ${styles.active}`}
            onMouseEnter={handleMouseEnterDropdown}
            onMouseLeave={handleMouseLeaveDropdown}
          >
            <div className={styles.modalContentWrapper}>{renderContent()}</div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;