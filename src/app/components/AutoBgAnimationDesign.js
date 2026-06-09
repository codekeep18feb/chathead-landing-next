// Create a new component file: components/BgAnimation.jsx
'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './BgAnimation.module.css';

const AutoBgAnimationDesign = () => {
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
    let flowField = [];
    let time = 0;
    let autoDrawX = 0;
    let autoDrawY = 0;
    let directionX = 1;
    let directionY = 1;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      autoDrawX = canvas.width / 2;
      autoDrawY = canvas.height / 2;
      
      // Initialize flow field
      flowField = [];
      for (let i = 0; i < 50; i++) {
        flowField.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
        });
      }
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Particle class
    class Particle {
      constructor(x, y, type = 'normal') {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        this.type = type;
        
        // Different movement patterns based on type
        switch(type) {
          case 'spiral':
            this.angle = Math.random() * Math.PI * 2;
            this.radius = Math.random() * 100;
            this.speed = 0.02;
            break;
          case 'wave':
            this.speedX = (Math.random() - 0.5) * 1;
            this.speedY = Math.random() * 1;
            this.waveOffset = Math.random() * Math.PI * 2;
            break;
          default:
            this.speedX = (Math.random() - 0.5) * 0.8;
            this.speedY = (Math.random() - 0.5) * 0.8;
        }
        
        this.alpha = type === 'special' ? 0.8 : Math.random() * 0.4;
        this.life = 1;
        this.decay = 0.005;
        this.color = this.getColor();
      }

      getColor() {
        const colors = {
          normal: `rgba(77, 107, 223, ${this.alpha})`,
          spiral: `rgba(163, 112, 206, ${this.alpha})`,
          wave: `rgba(77, 107, 223, ${this.alpha})`,
          special: `rgba(255, 107, 157, ${this.alpha})`,
        };
        return colors[this.type] || colors.normal;
      }

      update(width, height, mouseX, mouseY) {
        switch(this.type) {
          case 'spiral':
            this.angle += this.speed;
            this.radius += 0.5;
            this.x = mouseX + Math.cos(this.angle) * this.radius;
            this.y = mouseY + Math.sin(this.angle) * this.radius;
            break;
          case 'wave':
            this.speedY += 0.05;
            this.x += this.speedX;
            this.y += Math.sin(time + this.waveOffset) * 2;
            break;
          default:
            this.x += this.speedX;
            this.y += this.speedY;
        }
        
        this.life -= this.decay;
        this.alpha = this.life * 0.5;
        this.color = this.getColor();
        
        // Bounce off edges
        if (this.x < 0 || this.x > width) this.speedX *= -1;
        if (this.y < 0 || this.y > height) this.speedY *= -1;
        
        return this.life > 0 && this.x > 0 && this.x < width && this.y > 0 && this.y < height;
      }

      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Auto-draw moving point
    const updateAutoDrawPoint = () => {
      time += 0.02;
      
      // Create patterns with sine/cosine movements
      autoDrawX += directionX * 3;
      autoDrawY += directionY * 2;
      
      // Bounce off walls
      if (autoDrawX > canvas.width - 50) {
        autoDrawX = canvas.width - 50;
        directionX *= -1;
        // Create burst when hitting wall
        createParticleBurst(autoDrawX, autoDrawY, 8, 'special');
      }
      if (autoDrawX < 50) {
        autoDrawX = 50;
        directionX *= -1;
        createParticleBurst(autoDrawX, autoDrawY, 8, 'special');
      }
      if (autoDrawY > canvas.height - 50) {
        autoDrawY = canvas.height - 50;
        directionY *= -1;
        createParticleBurst(autoDrawX, autoDrawY, 8, 'special');
      }
      if (autoDrawY < 50) {
        autoDrawY = 50;
        directionY *= -1;
        createParticleBurst(autoDrawX, autoDrawY, 8, 'special');
      }
      
      // Create particles along the path
      if (Math.random() < 0.3) {
        const particleType = Math.random() < 0.7 ? 'normal' : 'wave';
        particles.push(new Particle(autoDrawX, autoDrawY, particleType));
      }
      
      // Occasionally create spiral particles
      if (Math.random() < 0.05) {
        particles.push(new Particle(autoDrawX, autoDrawY, 'spiral'));
      }
    };
    
    // Create particle burst
    const createParticleBurst = (x, y, count, type = 'normal') => {
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(x, y, type));
      }
    };

    // Create initial particles
    for (let i = 0; i < 150; i++) {
      particles.push(new Particle(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        Math.random() < 0.2 ? 'wave' : 'normal'
      ));
    }

    // Draw flow field particles
    const drawFlowField = () => {
      for (let i = 0; i < flowField.length; i++) {
        const p = flowField[i];
        p.x += p.vx;
        p.y += p.vy;
        
        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(163, 112, 206, 0.15)`;
        ctx.fill();
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw flow field
      drawFlowField();
      
      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        if (particles[i].update(canvas.width, canvas.height, autoDrawX, autoDrawY)) {
          particles[i].draw(ctx);
        } else {
          particles.splice(i, 1);
        }
      }
      
      // Create new particles continuously
      if (particles.length < 200 && Math.random() < 0.1) {
        const randX = Math.random() * canvas.width;
        const randY = Math.random() * canvas.height;
        const particleType = Math.random() < 0.8 ? 'normal' : 'wave';
        particles.push(new Particle(randX, randY, particleType));
      }
      
      // Update auto-draw point
      updateAutoDrawPoint();
      
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
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            );
            gradient.addColorStop(0, `rgba(77, 107, 223, ${0.15 * (1 - distance / 100)})`);
            gradient.addColorStop(1, `rgba(163, 112, 206, ${0.15 * (1 - distance / 100)})`);
            ctx.strokeStyle = gradient;
            ctx.stroke();
          }
        }
      }
      
      // Draw glowing auto-draw point
      const gradient = ctx.createRadialGradient(autoDrawX, autoDrawY, 0, autoDrawX, autoDrawY, 50);
      gradient.addColorStop(0, 'rgba(77, 107, 223, 0.15)');
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw auto-draw point
      ctx.beginPath();
      ctx.arc(autoDrawX, autoDrawY, 3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(77, 107, 223, 0.8)`;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(autoDrawX, autoDrawY, 6, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(77, 107, 223, 0.3)`;
      ctx.fill();
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
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
    </div>
  );
};

export default AutoBgAnimationDesign;