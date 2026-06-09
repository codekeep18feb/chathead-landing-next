// components/ElegantBgAnimation.jsx
'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './ShapeBgAnimation.module.css';

const ShapeBgAnimation = () => {
  const canvasRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let mouseX = 0;
    let mouseY = 0;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Elegant particle class
    class ElegantParticle {
      constructor(x, y, isSpecial = false) {
        this.x = x;
        this.y = y;
        this.size = isSpecial ? Math.random() * 2 + 1.5 : Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.alpha = isSpecial ? 0.6 : 0.3;
        this.isSpecial = isSpecial;
        this.waveX = Math.random() * Math.PI * 2;
        this.waveY = Math.random() * Math.PI * 2;
        this.waveSpeed = 0.02 + Math.random() * 0.02;
      }

      update() {
        this.waveX += this.waveSpeed;
        this.waveY += this.waveSpeed;
        
        this.x += this.speedX + Math.sin(this.waveX) * 0.2;
        this.y += this.speedY + Math.cos(this.waveY) * 0.2;
        
        // Wrap around with gentle boundary
        if (this.x < -50) this.x = canvas.width + 50;
        if (this.x > canvas.width + 50) this.x = -50;
        if (this.y < -50) this.y = canvas.height + 50;
        if (this.y > canvas.height + 50) this.y = -50;
        
        return this;
      }

      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        if (this.isSpecial) {
          ctx.fillStyle = `rgba(77, 107, 223, ${this.alpha})`;
          ctx.shadowBlur = 8;
          ctx.shadowColor = `rgba(77, 107, 223, 0.5)`;
        } else {
          ctx.fillStyle = `rgba(163, 112, 206, ${this.alpha})`;
          ctx.shadowBlur = 3;
          ctx.shadowColor = `rgba(163, 112, 206, 0.3)`;
        }
        
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Create initial particles
    const particleCount = 150;
    for (let i = 0; i < particleCount; i++) {
      const isSpecial = Math.random() < 0.2;
      particles.push(new ElegantParticle(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        isSpecial
      ));
    }

    // Mouse interaction
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Create special particles on mouse move
      for (let i = 0; i < 2; i++) {
        particles.push(new ElegantParticle(mouseX, mouseY, true));
      }
      
      // Limit particle count
      if (particles.length > 300) {
        particles = particles.slice(-250);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw subtle background gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(248, 250, 252, 0.98)');
      gradient.addColorStop(1, 'rgba(241, 245, 249, 0.98)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw(ctx);
      });
      
      // Draw elegant connections between nearby special particles
      const specialParticles = particles.filter(p => p.isSpecial);
      for (let i = 0; i < specialParticles.length; i++) {
        for (let j = i + 1; j < specialParticles.length; j++) {
          const dx = specialParticles[i].x - specialParticles[j].x;
          const dy = specialParticles[i].y - specialParticles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100 && distance > 0) {
            ctx.beginPath();
            ctx.moveTo(specialParticles[i].x, specialParticles[i].y);
            ctx.lineTo(specialParticles[j].x, specialParticles[j].y);
            
            const opacity = (1 - distance / 100) * 0.15;
            ctx.strokeStyle = `rgba(77, 107, 223, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <div className={styles.elegantBgContainer}>
      <canvas ref={canvasRef} className={styles.elegantCanvas} />
      
      {/* Subtle gradient orbs */}
      <div className={styles.softOrb1} />
      <div className={styles.softOrb2} />
      
      {/* Minimalist grid */}
      <div className={styles.minimalGrid} />
      
      {/* Gentle highlight lines */}
      <div className={styles.highlightLine1} />
      <div className={styles.highlightLine2} />
    </div>
  );
};

export default ShapeBgAnimation;