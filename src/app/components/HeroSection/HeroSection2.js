"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./HeroSection2.module.css";
import ChatComponent from "../ChatComponent";

export default function Hero() {
  const canvasRef = useRef(null);
  const heroRef = useRef(null);
  const glowSpotRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = ["/video/video1.mp4", "/video/video4.mp4"];

  const titleWords =
    "Move beyond deflection.  Deliver real resolutions Resolutions".split(" ");

  // Mouse-following glow effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Move glow spot
      if (glowSpotRef.current) {
        glowSpotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Particle animation with color change on hover
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let particles = [];
    let animationId;
    let hueRotation = 0;
    let isHovering = false;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particleCount = 150;
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.2,
          color: `hsl(${Math.random() * 60 + 260}, 70%, 60%)`,
        });
      }
    };

    const animateParticles = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update hue rotation when hovering
      if (isHovering) {
        hueRotation = (hueRotation + 1) % 360;
      }

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Change color on hover
        let color = particle.color;
        if (isHovering) {
          color = `hsl(${hueRotation + 260}, 70%, 60%)`;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      });

      // Draw connecting lines
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            let lineColor = `rgba(102, 126, 234, ${0.1 * (1 - distance / 100)})`;
            if (isHovering) {
              lineColor = `hsla(${hueRotation + 260}, 70%, 60%, ${0.1 * (1 - distance / 100)})`;
            }
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animateParticles);
    };

    resizeCanvas();
    createParticles();
    animateParticles();

    // Add hover listener to hero section
    const heroElement = heroRef.current;
    const handleMouseEnter = () => {
      isHovering = true;
    };
    const handleMouseLeave = () => {
      isHovering = false;
    };

    if (heroElement) {
      heroElement.addEventListener("mouseenter", handleMouseEnter);
      heroElement.addEventListener("mouseleave", handleMouseLeave);
    }

    window.addEventListener("resize", () => {
      resizeCanvas();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationId);
      if (heroElement) {
        heroElement.removeEventListener("mouseenter", handleMouseEnter);
        heroElement.removeEventListener("mouseleave", handleMouseLeave);
      }
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section ref={heroRef} className={styles.heroSection}>
      {/* Glow spot that follows mouse */}
      <div
        ref={glowSpotRef}
        className={styles.glowSpot}
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />

      <canvas ref={canvasRef} className={styles.particlesCanvas} />

      <div className={styles.heroContainer}>
        {/* Left Content */}
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Move beyond deflection. Deliver real resolutions Resolutions
          </h1>

          <p className={styles.heroSubtitle}>
            Modern publishing tricks and practical code tips for components and
            Markdown. Write interactive docs, build component libraries, and
            create amazing developer experiences.
          </p>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot}></span>
            Schedule Demo
          </div>
        </div>

        {/* Right Content*/}
        <div className={styles.heroVisual}>
          <div className={styles.videoWrapper}>
            <video
              key={currentVideo}
              className={styles["hero-video"]}
              autoPlay
              muted
              playsInline
              onEnded={() =>
                setCurrentVideo((prev) => (prev + 1) % videos.length)
              }
            >
              <source src={videos[currentVideo]} type="video/mp4" />
            </video>
            {/* Gradient Overlay */}
            <div className={styles.videoOverlay}></div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          right: "7rem",
          bottom: "0px",
        }}
      >
        <ChatComponent />
      </div>
    </section>
  );
}
