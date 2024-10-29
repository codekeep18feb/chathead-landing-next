// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <section className="footer">
      <h3>Footer</h3>
      <p>&copy; {new Date().getFullYear()} QuickChat. All rights reserved.</p>
    </section>
  );
};

export default Footer;
