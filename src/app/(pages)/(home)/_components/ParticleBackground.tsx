"use client";
import { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const parentRef = useRef<HTMLElement | null>(null);
  const animationId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Get parent element (the Hero section)
    const parent = canvas.parentElement as HTMLElement;
    parentRef.current = parent;

    const ctx = canvas.getContext("2d")!;

    const NUM_PARTICLES = 100;
    const CONNECTION_DISTANCE = 120;
    const MOUSE_DISTANCE = 150;
    const NODE_COLOR = "rgb(76, 182, 251, 1)";
    const LINE_COLOR = "76,182,251";

    let particles: any[] = [];
    const mouse = { x: null as number | null, y: null as number | null };

    const randomRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;

      constructor(
        x: number,
        y: number,
        vx: number,
        vy: number,
        radius: number,
        color: string
      ) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.radius = radius;
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x + this.radius > canvas!.width || this.x - this.radius < 0) {
          this.vx *= -1;
        }
        if (this.y + this.radius > canvas!.height || this.y - this.radius < 0) {
          this.vy *= -1;
        }
      }
    }

    function init() {
      // Resize canvas to the parent container
      canvas!.width = parent.offsetWidth;
      canvas!.height = parent.offsetHeight;

      particles = [];

      for (let i = 0; i < NUM_PARTICLES; i++) {
        const x = randomRange(0, canvas!.width);
        const y = randomRange(0, canvas!.height);
        const vx = randomRange(-0.3, 0.3);
        const vy = randomRange(-0.3, 0.3);
        const radius = randomRange(1.5, 3.5);

        particles.push(new Particle(x, y, vx, vy, radius, NODE_COLOR));
      }

      if (animationId.current) cancelAnimationFrame(animationId.current);
      animate();
    }

    const getDistance = (x1: number, y1: number, x2: number, y2: number) =>
      Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    function drawParticleConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const distance = getDistance(p1.x, p1.y, p2.x, p2.y);

          if (distance < CONNECTION_DISTANCE) {
            const opacity = 1 - distance / CONNECTION_DISTANCE;
            ctx.strokeStyle = `rgba(${LINE_COLOR}, ${opacity * 0.6})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    }

    function drawMouseConnections() {
      if (mouse.x === null || mouse.y === null) return;

      for (const p of particles) {
        const distance = getDistance(p.x, p.y, mouse.x, mouse.y);

        if (distance < MOUSE_DISTANCE) {
          const opacity = 1 - distance / MOUSE_DISTANCE;
          ctx.strokeStyle = `rgba(${LINE_COLOR}, ${opacity * 0.8})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);

      drawParticleConnections();
      drawMouseConnections();

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationId.current = requestAnimationFrame(animate);
    }

    init();

    // Resize observer for hero height changes
    const resizeObserver = new ResizeObserver(init);
    resizeObserver.observe(parent);

    parent.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    parent.addEventListener("mouseleave", () => {
      mouse.x = null;
      mouse.y = null;
    });

    return () => {
      resizeObserver.disconnect();
      if (animationId.current) cancelAnimationFrame(animationId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-10"
      style={{
        background:
          "radial-gradient(ellipse at bottom, #1f93d6 0%, #090979 50%, #000000 100%)",
      }}
    />
  );
};

export default ParticleBackground;
