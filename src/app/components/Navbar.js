// src/app/components/Navbar.js
"use client"; // This line must be at the top

import React, { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false); // Manage menu state

    const toggleMenu = () => {
        setMenuOpen(prev => !prev); // Toggle the state
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <img src="/Asset/logo.png" alt="quickChat" />
                <h2>quickChat</h2>
            </div>
            <div className="burger-icon" onClick={toggleMenu}>&#9776;</div>
            <ul className={`nav-links ${menuOpen ? 'active' : ''}`} id="nav-links">
                <li><a href="#platform" className="link">Platform</a></li>
                <li><a href="#solutions" className="link">Solutions</a></li>
                <li><a href="#developer" className="link">Developers</a></li>
                <li><a href="#resource" className="link">Resources</a></li>
                <li><a href="#pricing" className="link">Pricing</a></li>
                <div className="auth-buttons">
                    <li>
                        <a href="http://122.160.157.99:3101/newlogin">
                            <button className="login">Log-in</button>
                        </a>
                    </li>
                    <li>
                        <a href="http://122.160.157.99:3101/newsignup">
                            <button className="signup">Sign-up</button>
                        </a>
                    </li>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;
