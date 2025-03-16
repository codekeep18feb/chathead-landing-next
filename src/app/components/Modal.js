import React from "react";

function Modal({ content, visible, onClose }) {
  if (!visible) return null;

  const handleMouseLeave = () => {
    if (onClose) onClose();
  };

  return (
    <div className="modal-overlay" onMouseLeave={handleMouseLeave}>
      <div className="modal-content">{content}</div>
    </div>

    
  );
}

export default Modal;
