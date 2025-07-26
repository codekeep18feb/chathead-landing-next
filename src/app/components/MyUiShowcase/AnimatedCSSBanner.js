'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './AnimatedCSSBanner.module.css';
import Image from 'next/image';

const AnimatedCSSBanner = () => {
  const bannerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const scrollY = window.scrollY;
        const scrollingUp = scrollY < lastScrollY.current;
        lastScrollY.current = scrollY;

        if (entry.isIntersecting && (scrollY === 0 || scrollingUp)) {
          setVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={bannerRef}
      className={`${styles.banner} ${visible ? styles.visible : ''}`}
    >
      <Image
        src="Asset/banner_img.png" 
        alt="Banner"
        width={800}
        height={300}
        className={styles.image}
      />
      <div className={styles.content}>
        <h1>Welcome to Our Animated Banner</h1>
        <p>Experience smooth entrance animations on load and scroll up!</p>
        <button>Explore More</button>
      </div>
    </div>
  );
};

export default AnimatedCSSBanner;
