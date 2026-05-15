import React, { useEffect, useRef } from "react";
import "../styles/AnimatedBackground.css";

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    // Particle system
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.color =
          Math.random() > 0.5
            ? "rgba(14, 165, 162,"
            : "rgba(34, 197, 94,";
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity += (Math.random() - 0.5) * 0.02;
        this.opacity = Math.max(0.1, Math.min(0.6, this.opacity));

        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        ctx.fillStyle = this.color + this.opacity + ")";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Crystal shard system
    class CrystalShard {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 40 + 20;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.005;
        this.floatSpeed = Math.random() * 0.3 + 0.1;
        this.opacity = Math.random() * 0.15 + 0.05;
        this.color = Math.random() > 0.5 ? "#0ea5a2" : "#22c55e";
      }

      update() {
        this.y -= this.floatSpeed;
        this.rotation += this.rotationSpeed;
        this.opacity += (Math.random() - 0.5) * 0.003;
        this.opacity = Math.max(0.05, Math.min(0.25, this.opacity));

        if (this.y < -this.size) {
          this.y = canvas.height + this.size;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        // Draw geometric shard (diamond/crystal shape)
        ctx.strokeStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.lineWidth = 2;

        // Outer glow
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 15;

        ctx.beginPath();
        ctx.moveTo(0, -this.size / 2);
        ctx.lineTo(this.size / 2, 0);
        ctx.lineTo(0, this.size / 2);
        ctx.lineTo(-this.size / 2, 0);
        ctx.closePath();
        ctx.stroke();

        // Inner lines for glass effect
        ctx.lineWidth = 1;
        ctx.globalAlpha = this.opacity * 0.5;
        ctx.beginPath();
        ctx.moveTo(0, -this.size / 2);
        ctx.lineTo(0, this.size / 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(-this.size / 2, 0);
        ctx.lineTo(this.size / 2, 0);
        ctx.stroke();

        ctx.restore();
      }
    }

    // Create particles and shards
    const particles = Array.from({ length: 80 }, () => new Particle());
    const shards = Array.from({ length: 15 }, () => new CrystalShard());

    // Animation loop
    const animate = () => {
      // Clear with semi-transparent overlay for motion blur effect
      ctx.fillStyle = "rgba(15, 23, 18, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Update and draw shards
      shards.forEach((shard) => {
        shard.update();
        shard.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      setCanvasSize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="animated-background-container">
      <div className="background-gradient"></div>
      <canvas ref={canvasRef} className="animated-canvas"></canvas>
      <div className="glow-orb glow-orb-1"></div>
      <div className="glow-orb glow-orb-2"></div>
      <div className="bloom-effect"></div>
    </div>
  );
};

export default AnimatedBackground;
