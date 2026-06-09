// Create new component: components/SectionBgAnimation.jsx
'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './SectionBgAnimation.module.css';

const SectionBgAnimation = () => {
  const containerRef = useRef(null);
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
    let nodes = [];
    let connections = [];
    let mouseX = 0;
    let mouseY = 0;

    // Set canvas size
    const setCanvasSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
    };
    setCanvasSize();
    
    const resizeObserver = new ResizeObserver(() => {
      setCanvasSize();
    });
    
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Node class for tech nodes
    class TechNode {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        this.originalSize = this.size;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.alpha = Math.random() * 0.5 + 0.2;
        this.pulseSpeed = 0.02 + Math.random() * 0.03;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.type = Math.random() > 0.7 ? 'glowing' : 'normal';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        
        // Pulsing effect
        this.size = this.originalSize + Math.sin(Date.now() * this.pulseSpeed + this.pulsePhase) * 0.5;
        
        return this;
      }

      draw(ctx) {
        if (this.type === 'glowing') {
          ctx.shadowBlur = 10;
          ctx.shadowColor = `rgba(77, 107, 223, ${this.alpha})`;
        }
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        if (this.type === 'glowing') {
          ctx.fillStyle = `rgba(77, 107, 223, ${this.alpha})`;
        } else {
          ctx.fillStyle = `rgba(163, 112, 206, ${this.alpha})`;
        }
        
        ctx.fill();
        
        if (this.type === 'glowing') {
          ctx.shadowBlur = 0;
        }
      }
    }

    // Create tech nodes
    const nodeCount = 80;
    for (let i = 0; i < nodeCount; i++) {
      nodes.push(new TechNode(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      ));
    }

    // Mouse interaction
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      
      // Push nodes away from mouse
      nodes.forEach(node => {
        const dx = node.x - mouseX;
        const dy = node.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
          const angle = Math.atan2(dy, dx);
          const force = (100 - distance) / 100 * 2;
          node.vx += Math.cos(angle) * force;
          node.vy += Math.sin(angle) * force;
        }
      });
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw nodes
      nodes.forEach(node => {
        node.update();
        node.draw(ctx);
      });
      
      // Draw connections between nearby nodes
      ctx.beginPath();
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            const opacity = (1 - distance / 120) * 0.15;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            
            // Gradient stroke
            const gradient = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            gradient.addColorStop(0, `rgba(77, 107, 223, ${opacity})`);
            gradient.addColorStop(1, `rgba(163, 112, 206, ${opacity})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      resizeObserver.disconnect();
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <div ref={containerRef} className={styles.sectionBgContainer}>
      <canvas ref={canvasRef} className={styles.nodeCanvas} />
      
      {/* Animated circuit lines */}
      <svg className={styles.circuitLines}>
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(77, 107, 223, 0.3)">
              <animate attributeName="stop-color" values="rgba(77, 107, 223, 0.3);rgba(163, 112, 206, 0.3);rgba(77, 107, 223, 0.3)" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="rgba(163, 112, 206, 0.1)">
              <animate attributeName="stop-color" values="rgba(163, 112, 206, 0.1);rgba(77, 107, 223, 0.1);rgba(163, 112, 206, 0.1)" dur="4s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          
          <pattern id="circuitPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M0,50 L50,50 L50,0" fill="none" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="5 5">
              <animate attributeName="stroke-dashoffset" from="0" to="20" dur="2s" repeatCount="indefinite" />
            </path>
            <path d="M50,100 L50,50 L100,50" fill="none" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="5 5">
              <animate attributeName="stroke-dashoffset" from="20" to="0" dur="2s" repeatCount="indefinite" />
            </path>
            <circle cx="50" cy="50" r="2" fill="rgba(77, 107, 223, 0.4)">
              <animate attributeName="r" values="2;3;2" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
            </circle>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuitPattern)" />
      </svg>
      
      {/* Floating data particles */}
      <div className={styles.dataParticles}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={styles.dataParticle}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              opacity: 0.3 + Math.random() * 0.4,
            }}
          />
        ))}
      </div>
      
      {/* Glowing gradient overlays */}
      <div className={styles.gradientOverlay1} />
      <div className={styles.gradientOverlay2} />
      
      {/* Scanning line effect */}
      <div className={styles.scanLine} />
      
      {/* Binary rain effect */}
      <div className={styles.binaryRain}>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={styles.binaryColumn}
            style={{
              left: `${i * 7}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          >
            {Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0').join('')}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionBgAnimation;