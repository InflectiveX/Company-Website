"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
}

export default function HeroParticles() {
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

    const spawnParticle = () => {
      if (particles.length >= 70) return;
      const maxLife = 90 + Math.random() * 150;
      particles.push({
        x: Math.random() * W(),
        y: Math.random() * H(),
        size: 0.5 + Math.random() * 1.8,
        opacity: 0,
        life: 0,
        maxLife,
      });
    };

    // Pre-populate with particles at random lifecycle stages
    for (let i = 0; i < 55; i++) {
      spawnParticle();
      const p = particles[particles.length - 1];
      if (p) p.life = Math.floor(Math.random() * p.maxLife);
    }

    const animate = () => {
      ctx.clearRect(0, 0, W(), H());

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;

        const progress = p.life / p.maxLife;
        if (progress < 0.25) {
          p.opacity = progress / 0.25;
        } else if (progress > 0.65) {
          p.opacity = 1 - (progress - 0.65) / 0.35;
        } else {
          p.opacity = 1;
        }

        const alpha = Math.max(0, p.opacity * 0.85);

        // Glow halo
        const gR = p.size * 5;
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, gR);
        g.addColorStop(0, `rgba(76, 117, 255, ${alpha * 0.6})`);
        g.addColorStop(0.5, `rgba(51, 98, 255, ${alpha * 0.2})`);
        g.addColorStop(1, "rgba(51, 98, 255, 0)");
        ctx.beginPath();
        ctx.arc(p.x, p.y, gR, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(210, 225, 255, ${alpha})`;
        ctx.fill();

        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
          spawnParticle();
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
        opacity: 0.75,
      }}
    />
  );
}
