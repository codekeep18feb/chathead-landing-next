// components/AutoBgAnimation.jsx
'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './AutoBgAnimation.module.css';

const AutoBgAnimation = () => {
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
    let time = 0;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Floating shape class
    class FloatingShape {
      constructor(x, y, size, type, color, speed) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.originalSize = size;
        this.type = type;
        this.color = color;
        this.speed = speed;
        this.angle = Math.random() * Math.PI * 2;
        this.rotation = 0;
        this.rotationSpeed = (Math.random() - 0.5) * 0.01;
        this.floatX = Math.random() * Math.PI * 2;
        this.floatY = Math.random() * Math.PI * 2;
        this.floatSpeed = 0.002 + Math.random() * 0.003;
        this.pulseSpeed = 0.01 + Math.random() * 0.02;
        this.opacity = 0.15 + Math.random() * 0.2;
      }

      update() {
        // Gentle floating movement
        this.floatX += this.floatSpeed;
        this.floatY += this.floatSpeed;
        
        this.x += Math.sin(this.floatX) * this.speed;
        this.y += Math.cos(this.floatY) * this.speed;
        
        // Pulsing size
        this.size = this.originalSize + Math.sin(Date.now() * this.pulseSpeed) * 3;
        
        // Rotation
        this.rotation += this.rotationSpeed;
        
        // Wrap around edges smoothly
        if (this.x < -this.size) this.x = canvas.width + this.size;
        if (this.x > canvas.width + this.size) this.x = -this.size;
        if (this.y < -this.size) this.y = canvas.height + this.size;
        if (this.y > canvas.height + this.size) this.y = -this.size;
        
        return this;
      }

      draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = this.opacity;
        
        ctx.beginPath();
        
        if (this.type === 'circle') {
          ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        } 
        else if (this.type === 'square') {
          ctx.rect(-this.size / 2, -this.size / 2, this.size, this.size);
        }
        else if (this.type === 'triangle') {
          const height = this.size * 0.866;
          ctx.moveTo(0, -height / 2);
          ctx.lineTo(-this.size / 2, height / 2);
          ctx.lineTo(this.size / 2, height / 2);
          ctx.closePath();
        }
        else if (this.type === 'diamond') {
          ctx.moveTo(0, -this.size / 2);
          ctx.lineTo(this.size / 2, 0);
          ctx.lineTo(0, this.size / 2);
          ctx.lineTo(-this.size / 2, 0);
          ctx.closePath();
        }
        
        ctx.fillStyle = this.color;
        ctx.fill();
        
        // Add subtle stroke
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity * 0.5})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        
        ctx.restore();
      }
    }

    // Particle class for background dots
    class BgParticle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.1;
        this.speedY = (Math.random() - 0.5) * 0.1;
        this.opacity = Math.random() * 0.3 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 100, 150, ${this.opacity})`;
        ctx.fill();
      }
    }

    // Create floating shapes
    const shapes = [];
    const colors = [
      'rgba(77, 107, 223, 0.6)',
      'rgba(163, 112, 206, 0.5)',
      'rgba(0, 255, 209, 0.4)',
      'rgba(100, 150, 255, 0.5)',
    ];
    const types = ['circle', 'square', 'triangle', 'diamond'];
    
    // Create 25 large floating shapes
    for (let i = 0; i < 25; i++) {
      shapes.push(new FloatingShape(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        30 + Math.random() * 50,
        types[Math.floor(Math.random() * types.length)],
        colors[Math.floor(Math.random() * colors.length)],
        0.2 + Math.random() * 0.3
      ));
    }
    
    // Create background particles
    const particles = [];
    for (let i = 0; i < 200; i++) {
      particles.push(new BgParticle(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      ));
    }

    // Animation loop
    const animate = () => {
      // Clear with fade effect for trail
      ctx.fillStyle = 'rgba(248, 250, 252, 0.95)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw gradient overlay
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(77, 107, 223, 0.02)');
      gradient.addColorStop(0.5, 'rgba(163, 112, 206, 0.02)');
      gradient.addColorStop(1, 'rgba(0, 255, 209, 0.01)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw background particles
      particles.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });
      
      // Draw connections between shapes
      ctx.globalAlpha = 0.1;
      for (let i = 0; i < shapes.length; i++) {
        for (let j = i + 1; j < shapes.length; j++) {
          const dx = shapes[i].x - shapes[j].x;
          const dy = shapes[i].y - shapes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 200) {
            ctx.beginPath();
            ctx.moveTo(shapes[i].x, shapes[i].y);
            ctx.lineTo(shapes[j].x, shapes[j].y);
            
            const opacity = (1 - distance / 200) * 0.08;
            ctx.strokeStyle = `rgba(77, 107, 223, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      
      // Draw floating shapes
      shapes.forEach(shape => {
        shape.update();
        shape.draw(ctx);
      });
      
      time += 0.01;
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
    <div className={styles.autoBgContainer}>
      <canvas ref={canvasRef} className={styles.autoCanvas} />
      
      {/* Animated gradient waves */}
      <div className={styles.waveGradient1} />
      <div className={styles.waveGradient2} />
      
      {/* Rotating rings */}
      <div className={styles.rotatingRing1}>
        <div className={styles.ringDot} />
      </div>
      <div className={styles.rotatingRing2}>
        <div className={styles.ringDot} />
      </div>
      
      {/* Pulsing glow orbs */}
      <div className={styles.pulseOrb1} />
      <div className={styles.pulseOrb2} />
      
      {/* Floating dots grid */}
      <div className={styles.floatingDots} />
      
      {/* Diagonal flow lines */}
      <div className={styles.flowLine1} />
      <div className={styles.flowLine2} />
      <div className={styles.flowLine3} />
    </div>
  );
};

export default AutoBgAnimation;