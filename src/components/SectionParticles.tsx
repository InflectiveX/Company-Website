"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
  vx: number;
  vy: number;
}

export default function SectionParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: Particle[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const W = () => canvas.getBoundingClientRect().width;
    const H = () => canvas.getBoundingClientRect().height;

    const spawn = () => {
      if (particles.length >= 80) return;
      const maxLife = 100 + Math.random() * 140;
      const angle = Math.random() * Math.PI * 2;
      particles.push({
        x: Math.random() * W(),
        y: Math.random() * H(),
        size: 0.6 + Math.random() * 1.6,
        opacity: 0,
        life: 0,
        maxLife,
        vx: Math.cos(angle) * 0.08,
        vy: Math.sin(angle) * 0.06 - 0.05,
      });
    };

    for (let i = 0; i < 65; i++) {
      spawn();
      const p = particles[particles.length - 1];
      if (p) p.life = Math.floor(Math.random() * p.maxLife);
    }

    const animate = () => {
      ctx.clearRect(0, 0, W(), H());

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;

        const prog = p.life / p.maxLife;
        if (prog < 0.2) p.opacity = prog / 0.2;
        else if (prog > 0.7) p.opacity = 1 - (prog - 0.7) / 0.3;
        else p.opacity = 1;

        const alpha = Math.max(0, p.opacity);

        // glow
        const gR = p.size * 6;
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, gR);
        g.addColorStop(0, `rgba(100, 140, 255, ${alpha * 0.55})`);
        g.addColorStop(0.5, `rgba(60, 100, 255, ${alpha * 0.18})`);
        g.addColorStop(1, "rgba(40, 80, 255, 0)");
        ctx.beginPath();
        ctx.arc(p.x, p.y, gR, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();

        // core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 215, 255, ${alpha})`;
        ctx.fill();

        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
          spawn();
        }
      }

      animId = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        borderRadius: "inherit",
      }}
    />
  );
}
