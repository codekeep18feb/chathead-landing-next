import React from "react";
import styles from './NavbarSty.module.css'

function Modal({ content, visible, onClose }) {
  if (!visible) return null;

  const handleMouseLeave = () => {
    if (onClose) onClose();
  };

  return (
    <div className={styles["modal-overlay"]} onMouseLeave={handleMouseLeave}>
      <div className={styles["modal-content"]}>{content}</div>
    </div>

    
  );
}

export default Modal;
