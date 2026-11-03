// src/app/components/Navbar.js
"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Platform from "./Platform";
import Solutions from "./Solutions";
import Developers from "./Developers";
import Resources from "./Resources";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import styles from "./NavbarSty.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredContentKey, setHoveredContentKey] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef(null);
  const hoverTimeoutRef = useRef(null);
  const isHoveringDropdownRef = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth <= 990;
      setIsMobile(isMobileView);
      if (!isMobileView && menuOpen) {
        setMenuOpen(false);
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.width = "";
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    if (!menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
  };

  const closeMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    if (hoveredContentKey) {
      setHoveredContentKey(null);
    }
  };

  const handleCloseModal = () => {
    setHoveredContentKey(null);
    document.body.style.overflow = "auto";
    document.body.style.position = "static";
    document.body.style.width = "auto";
  };

  const handleMouseEnter = (key) => {
    if (!isMobile) {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
        hoverTimeoutRef.current = null;
      }
      setHoveredContentKey(key);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile && !isHoveringDropdownRef.current) {
      hoverTimeoutRef.current = setTimeout(() => {
        setHoveredContentKey(null);
        document.body.style.overflow = "auto";
        document.body.style.position = "static";
        document.body.style.width = "auto";
        hoverTimeoutRef.current = null;
      }, 200);
    }
  };

  const handleMouseEnterDropdown = () => {
    isHoveringDropdownRef.current = true;
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  const handleMouseLeaveDropdown = () => {
    isHoveringDropdownRef.current = false;
    if (!isMobile) {
      hoverTimeoutRef.current = setTimeout(() => {
        setHoveredContentKey(null);
        document.body.style.overflow = "auto";
        document.body.style.position = "static";
        document.body.style.width = "auto";
        hoverTimeoutRef.current = null;
      }, 200);
    }
  };

  const handleLogoClick = () => {
    if (menuOpen) {
      setMenuOpen(false);
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    if (hoveredContentKey) {
      setHoveredContentKey(null);
    }
    router.push("/");
  };

  const handleNavItemClick = (key, e) => {
    e.stopPropagation();
    if (isMobile) {
      e.preventDefault();
      if (hoveredContentKey === key) {
        setHoveredContentKey(null);
      } else {
        setHoveredContentKey(key);
      }
    }
  };

  const handlePricingClick = (e) => {
    if (menuOpen) {
      setMenuOpen(false);
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    if (hoveredContentKey) {
      setHoveredContentKey(null);
    }
    router.push("/pricing");
  };

  const handleWhySageion = (e) => {
    if (menuOpen) {
      setMenuOpen(false);
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    if (hoveredContentKey) {
      setHoveredContentKey(null);
    }
    router.push("/WhyWeAreSpecial");
  };

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const renderContent = () => {
    switch (hoveredContentKey) {
      case "platform":
        return <Platform onCloseMenu={closeMenu} />;
      case "solutions":
        return (
          <Solutions onCloseModal={handleCloseModal} onCloseMenu={closeMenu} />
        );
      case "developers":
        return <Developers onCloseMenu={closeMenu} />;
      case "resources":
        return <Resources onCloseMenu={closeMenu} />;
      default:
        return null;
    }
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo} onClick={handleLogoClick}>
        <div className={styles.logoImg}>
          <img src={`${basePath}/logo/sageion-logo.svg`} alt="Sageion" />
        </div>
        <h2>
          <span className={styles.sageText}>Sage</span>
          <span className={styles.ionText}>ion</span>
        </h2>
      </div>

      {/* Desktop Trust Strip */}
      {!isMobile && (
        <div style={{ 
          fontSize: '11px', 
          color: '#64748b', 
          display: 'flex', 
          gap: '12px', 
          marginLeft: '24px',
          borderLeft: '1px solid #e2e8f0',
          paddingLeft: '24px'
        }}>
          <span>⚙️ Runtime, not framework</span>
          <span>🔒 Zero-data default</span>
          <span>💰 No LLM token costs</span>
        </div>
      )}

      {/* Burger Icon */}
      <div
        className={`${styles["burger-icon"]} ${isMobile ? styles.visible : ""}`}
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
          
          {/* Features / Platform */}
          <div
            className={styles.hoverWrapper}
            onMouseEnter={() => handleMouseEnter("platform")}
            onMouseLeave={handleMouseLeave}
          >
            <li
              className={`${styles.links} ${isMobile && hoveredContentKey === "platform" ? styles.activeLink : ""}`}
              onClick={(e) => handleNavItemClick("platform", e)}
            >
              <div className={styles.linkContent}>
                <Link href="/platform">Platform</Link>
                {isMobile && (
                  <span className={styles.arrowIcon}>
                    {hoveredContentKey === "platform" ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                )}
              </div>
              {isMobile && hoveredContentKey === "platform" && (
                <div className={styles.mobileDropdownContent}>
                  <Platform onCloseMenu={closeMenu} />
                </div>
              )}
            </li>
          </div>

          {/* Solutions */}
          <div
            className={styles.hoverWrapper}
            onMouseEnter={() => handleMouseEnter("solutions")}
            onMouseLeave={handleMouseLeave}
          >
            <li
              className={`${styles.links} ${isMobile && hoveredContentKey === "solutions" ? styles.activeLink : ""}`}
              onClick={(e) => handleNavItemClick("solutions", e)}
            >
              <div className={styles.linkContent}>
                <Link href="/solutions">Solutions</Link>
                {isMobile && (
                  <span className={styles.arrowIcon}>
                    {hoveredContentKey === "solutions" ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                )}
              </div>
              {isMobile && hoveredContentKey === "solutions" && (
                <div className={styles.mobileDropdownContent}>
                  <Solutions onCloseModal={handleCloseModal} onCloseMenu={closeMenu} />
                </div>
              )}
            </li>
          </div>

          {/* Developers */}
          <div
            className={styles.hoverWrapper}
            onMouseEnter={() => handleMouseEnter("developers")}
            onMouseLeave={handleMouseLeave}
          >
            <li
              className={`${styles.links} ${isMobile && hoveredContentKey === "developers" ? styles.activeLink : ""}`}
              onClick={(e) => handleNavItemClick("developers", e)}
            >
              <div className={styles.linkContent}>
                <Link href="/developers">Developers</Link>
                {isMobile && (
                  <span className={styles.arrowIcon}>
                    {hoveredContentKey === "developers" ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                )}
              </div>
              {isMobile && hoveredContentKey === "developers" && (
                <div className={styles.mobileDropdownContent}>
                  <Developers onCloseModal={handleCloseModal} onCloseMenu={closeMenu} />
                </div>
              )}
            </li>
          </div>

          {/* Pricing */}
          <li
            className={styles.links}
            onClick={handlePricingClick}
            style={{ display: "flex" }}
          >
            <Link href="/pricing">Pricing</Link>
          </li>

          {/* Why Runtime (New direct link) */}
          <li
            className={styles.links}
            style={{ display: "flex" }}
          >
            <Link href="/why-runtime">Why Runtime</Link>
          </li>

          {/* Why Sageion */}
          <li
            className={styles.links}
            onClick={handleWhySageion}
            style={{ display: "flex" }}
          >
            <Link href="/WhyWeAreSpecial">Why Sageion</Link>
          </li>
        </div>

        {/* Mobile Auth Buttons */}
        <div className={`${styles["mobile-auth-buttons"]}`}>
          <a href="https://admin.sageion.com/login">
            <button className={styles.login}>Log-in</button>
          </a>
          <a href="https://admin.sageion.com/signup">
            <button className={styles.signup}>Sign-up</button>
          </a>
        </div>
      </ul>

      {/* Desktop Auth Buttons */}
      <div
        className={`${styles["auth-buttons"]} ${isMobile ? styles.hidden : ""}`}
      >
        <a href="https://admin.sageion.com/login">
          <button className={styles.login}>Log-in</button>
        </a>
        <a href="https://admin.sageion.com/signup">
          <button className={styles.signup}>Sign-up</button>
        </a>
      </div>

      {/* Modal Dropdown - Desktop only */}
      {!isMobile && hoveredContentKey && (
        <>
          <div
            className={`${styles.nav_overlay} ${styles.active}`}
            onClick={handleCloseModal}
          ></div>
          <div
            ref={dropdownRef}
            className={styles.modalDropdown}
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