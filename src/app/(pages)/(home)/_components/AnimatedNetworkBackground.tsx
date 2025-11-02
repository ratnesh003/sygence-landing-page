"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const AnimatedNetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(null);
  const nodes: Node[] = [];

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    const nodeCount = Math.min(120, Math.floor(width / 4)); // scale nodes by screen width
    const maxDist = 120; // shorter connection distance
    const mouse = { x: width / 2, y: height / 2, radius: 150 };

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw lines
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // update position
        node.x += node.vx;
        node.y += node.vy;

        // bounce edges
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2.3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,200,255,0.9)";
        ctx.fill();

        // connect only nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = node.x - nodes[j].x;
          const dy = node.y - nodes[j].y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDist * maxDist) {
            const alpha = 1 - distSq / (maxDist * maxDist);
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(0,150,255,${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // gentle mouse interaction
        const dxm = node.x - mouse.x;
        const dym = node.y - mouse.y;
        const distMouse = Math.sqrt(dxm * dxm + dym * dym);
        if (distMouse < mouse.radius) {
          node.vx += (dxm / distMouse) * 0.01;
          node.vy += (dym / distMouse) * 0.01;
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    animationRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationRef.current!);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-screen -z-10"
      style={{
        background:
          "radial-gradient(ellipse at bottom, #020024 0%, #090979 50%, #000000 100%)",
      }}
    />
  );
};

export default AnimatedNetworkBackground;
