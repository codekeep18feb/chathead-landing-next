"use client";
import React from "react";
import styles from "./Banner.module.css";
import Image from "next/image";

const Banner = () => {
  return (
    <div className={styles.banner}>
      {/* firstway */}

      {/* <div className={styles.content}>
        <h1 className={styles.heading}>Welcome to Our Platform</h1>
        <p className={styles.subText}>
          We help you build beautiful and modern web experiences.
        </p>
        <button className={styles.button}>Get Started</button>
      </div> */}

      {/* Secondway */}

      <div className={styles.textContent}>
        <h1 className={styles.heading}>Your Business, Elevated</h1>
        <p className={styles.subText}>
          We build modern websites and digital experiences that drive results.
        </p>
        <button className={styles.button}>Get Started</button>
      </div>

      <div className={styles.imageWrapper}>
        <Image
          src="Asset/banner_img.png"
          alt="Banner"
          fill
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default Banner;
