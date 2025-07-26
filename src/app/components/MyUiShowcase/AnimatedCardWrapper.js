'use client';
import { useRef } from 'react';
import styles from './AnimatedCardWrapper.module.css';

const AnimatedCardWrapper = ({ children }) => {
  const wrapperRef = useRef(null);

  const handleMouseMove = (e) => {
    const wrapper = wrapperRef.current;
    const rect = wrapper.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 85;
    const rotateY = (x - rect.width / 2) / 85;

    wrapper.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const wrapper = wrapperRef.current;
    wrapper.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <div
      className={styles.outerWrapper}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={wrapperRef} className={styles.innerWrapper}>
        {children}
      </div>
    </div>
  );
};

export default AnimatedCardWrapper;
