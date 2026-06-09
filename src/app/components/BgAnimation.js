// Create a new component file: components/BgAnimation.jsx
'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './BgAnimation.module.css';

const BgAnimation = () => {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
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

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setMousePos({ x: mouseX, y: mouseY });
      
      // Create particles on mouse move
      for (let i = 0; i < 3; i++) {
        particles.push(new Particle(mouseX, mouseY, true));
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Particle class
    class Particle {
      constructor(x, y, isMouseParticle = false) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * (isMouseParticle ? 1.5 : 0.5);
        this.speedY = (Math.random() - 0.5) * (isMouseParticle ? 1.5 : 0.5);
        this.alpha = isMouseParticle ? 0.8 : Math.random() * 0.3;
        this.life = 1;
        this.decay = 0.01;
        this.color = isMouseParticle 
          ? `rgba(77, 107, 223, ${this.alpha})`
          : `rgba(163, 112, 206, ${this.alpha})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= this.decay;
        this.alpha = this.life * (this.color.includes('77, 107, 223') ? 0.8 : 0.3);
        return this.life > 0;
      }

      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color.includes('77, 107, 223')
          ? `rgba(77, 107, 223, ${this.alpha})`
          : `rgba(163, 112, 206, ${this.alpha})`;
        ctx.fill();
      }
    }

    // Create initial particles
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      ));
    }

    // Create flowing particles
    let particleCounter = 0;
    const createFlowingParticle = () => {
      const x = Math.random() * canvas.width;
      const y = -10;
      particles.push(new Particle(x, y));
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        if (particles[i].update()) {
          particles[i].draw(ctx);
        } else {
          particles.splice(i, 1);
        }
      }

      // Create new particles occasionally
      particleCounter++;
      if (particleCounter > 20) {
        createFlowingParticle();
        particleCounter = 0;
      }

      // Draw connecting lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(77, 107, 223, ${0.1 * (1 - distance / 100)})`;
            ctx.stroke();
          }
        }
      }

      // Draw mouse follower effect
      if (mouseX && mouseY) {
        const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 150);
        gradient.addColorStop(0, 'rgba(77, 107, 223, 0.05)');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
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
    <div className={styles.bgAnimationContainer}>
      <canvas ref={canvasRef} className={styles.particleCanvas} />
      <div className={styles.gridLines} />
      <div className={styles.floatingOrb} />
      <div className={styles.floatingOrb} />
      <div className={styles.floatingOrb} />
      <div className={styles.gradientBorder} />
      <div className={styles.glitchOverlay} />
      <div className={styles.animatedLines}>
        <svg>
          <defs>
            <pattern id="linePattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="50" y2="0" stroke="rgba(77, 107, 223, 0.05)" strokeWidth="1" strokeDasharray="10 10">
                <animate attributeName="stroke-dashoffset" from="0" to="100" dur="3s" repeatCount="indefinite" />
              </line>
              <line x1="0" y1="25" x2="50" y2="25" stroke="rgba(163, 112, 206, 0.05)" strokeWidth="1" strokeDasharray="10 10">
                <animate attributeName="stroke-dashoffset" from="100" to="0" dur="4s" repeatCount="indefinite" />
              </line>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#linePattern)" />
        </svg>
      </div>
      <div 
        className={styles.mouseFollower}
        style={{ 
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
        }}
      />
    </div>
  );
};

export default BgAnimation;