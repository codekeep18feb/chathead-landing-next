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
      setIsMobile(window.innerWidth <= 990);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Cleanup timeout on unmount
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
      document.body.style.overflow = "auto";
      document.body.style.position = "static";
      document.body.style.width = "auto";
    }
  };

  const handleCloseModal = () => {
    setHoveredContentKey(null);
    document.body.style.overflow = "auto";
    document.body.style.position = "static";
    document.body.style.width = "auto";
  };

  // Handle mouse enter on nav items
  const handleMouseEnter = (key) => {
    if (!isMobile) {
      // Clear any pending close timeout
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
        hoverTimeoutRef.current = null;
      }
      setHoveredContentKey(key);
    }
  };

  // Handle mouse leave from nav items
  const handleMouseLeave = () => {
    if (!isMobile && !isHoveringDropdownRef.current) {
      // Start timeout to close dropdown
      hoverTimeoutRef.current = setTimeout(() => {
        setHoveredContentKey(null);
        document.body.style.overflow = "auto";
        document.body.style.position = "static";
        document.body.style.width = "auto";
        hoverTimeoutRef.current = null;
      }, 200);
    }
  };

  // Handle mouse enter on dropdown
  const handleMouseEnterDropdown = () => {
    isHoveringDropdownRef.current = true;
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  // Handle mouse leave from dropdown
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
      document.body.style.overflow = "auto";
      document.body.style.position = "static";
      document.body.style.width = "auto";
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
      document.body.style.overflow = "auto";
      document.body.style.position = "static";
      document.body.style.width = "auto";
    }
    if (hoveredContentKey) {
      setHoveredContentKey(null);
    }
    router.push("/pricing");
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

      {/* Burger Icon - Visible below 990px */}
      <div
        className={`${styles["burger-icon"]} ${isMobile ? styles["visible"] : ""}`}
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
            onMouseLeave={handleMouseLeave}
          >
            <li 
              className={`${styles.links} ${isMobile && hoveredContentKey === "platform" ? styles.activeLink : ""}`} 
              onClick={(e) => handleNavItemClick("platform", e)}
            >
              <div className={styles.linkContent}>
                <Link href="/platform">Features</Link>
                {isMobile && (
                  <span className={styles.arrowIcon}>
                    {hoveredContentKey === "platform" ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                )}
              </div>
              {isMobile && hoveredContentKey === "platform" && (
                <div className={styles.mobileDropdownContent}>
                  <Platform />
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
                  <Solutions onCloseModal={handleCloseModal} />
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
                  <Developers />
                </div>
              )}
            </li>
          </div>

          {/* Resources */}
          {/* <div
            className={styles.hoverWrapper}
            onMouseEnter={() => handleMouseEnter("resources")}
            onMouseLeave={handleMouseLeave}
          >
            <li 
              className={`${styles.links} ${isMobile && hoveredContentKey === "resources" ? styles.activeLink : ""}`} 
              onClick={(e) => handleNavItemClick("resources", e)}
            >
              <div className={styles.linkContent}>
                <Link href="/resources">Resources</Link>
                {isMobile && (
                  <span className={styles.arrowIcon}>
                    {hoveredContentKey === "resources" ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                )}
              </div>
              {isMobile && hoveredContentKey === "resources" && (
                <div className={styles.mobileDropdownContent}>
                  <Resources />
                </div>
              )}
            </li>
          </div> */}

          {/* Pricing - No arrow icon, separate click handler */}
          <li className={styles.links} onClick={handlePricingClick} style={{display:"flex"}}>
            <Link href="/pricing">Pricing</Link>
          </li>
        </div>

        {/* Mobile Auth Buttons */}
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
      <div className={`${styles["auth-buttons"]} ${isMobile ? styles["hidden"] : ""}`}>
        <a href="https://admin.magicchat.io/login">
          <button className={styles.login}>Log-in</button>
        </a>
        <a href="https://admin.magicchat.io/signup">
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