// src/app/ClientLayout.js

"use client";

import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

export default function ClientLayout({ children }) {
  const [modalContent, setModalContent] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const onLinkHover = (content) => {
    setModalContent(content);
    setModalVisible(true);
  };

  const onNavLeave = () => {
    // setModalVisible(false);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <Header
        onLinkHover={onLinkHover}
        onNavLeave={onNavLeave}
      />

      {children}

      <Modal
        content={
          <div>
            <p>{modalContent}</p>
          </div>
        }
        visible={modalVisible}
        onClose={closeModal}
      />

      <Footer />
    </>
  );
}