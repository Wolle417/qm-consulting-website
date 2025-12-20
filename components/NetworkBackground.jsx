import { useEffect, useRef } from 'react';

export default function NetworkBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let W = 0, H = 0, DPR = 1;
    let animationId = null;
    let nodes = [];
    let edges = [];
    let paused = false;

    const mouse = { x: window.innerWidth * 0.5, y: window.innerHeight * 0.5, active: false, down: false };

    function clamp(x, a, b) { return Math.max(a, Math.min(b, x)); }

    function resize() {
      DPR = Math.min(window.devicePixelRatio || 1, prefersReduced ? 1.0 : 1.25);
      W = Math.max(1, Math.floor(window.innerWidth * DPR));
      H = Math.max(1, Math.floor(window.innerHeight * DPR));
      canvas.width = W;
      canvas.height = H;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(DPR, DPR);
    }

    // Mouse tracking
    const handlePointerMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; mouse.active = true; };
    const handlePointerDown = () => { mouse.down = true; };
    const handlePointerUp = () => { mouse.down = false; };
    const handlePointerLeave = () => { mouse.active = false; mouse.down = false; };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointerleave', handlePointerLeave);

    // Fake DOF - Stärkerer Blur für mehr Tiefe
    const DOF = { focusZ: 3.05, blurStrength: 14, maxBlur: 16 };

    // Overall motion speed
    const SPEED = prefersReduced ? 0.28 : 0.38;

    // Stable framing
    const FRAME = {
      projScale: 0.60,
      zoff: 3.0,
      cx: () => window.innerWidth * 0.54,
      cy: () => window.innerHeight * 0.58,
    };

    function buildGraph() {
      const base = (window.innerWidth * window.innerHeight) / 240000;
      const N = clamp(Math.floor(55 + base * 20 * (prefersReduced ? 0.7 : 1.0)), 45, 90);

      const cxS = window.innerWidth * 0.56;
      const cyS = window.innerHeight * 0.62;
      const spreadX = window.innerWidth * 0.24;
      const spreadY = window.innerHeight * 0.20;

      function randn() {
        let u = 0, v = 0;
        while (u === 0) u = Math.random();
        while (v === 0) v = Math.random();
        return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
      }

      function sampleScreenPoint() {
        const leftTail = (Math.random() < 0.12);
        let sx = cxS + randn() * spreadX * (leftTail ? 1.35 : 1.0);
        let sy = cyS + randn() * spreadY;
        const dx = (sx - cxS) / (spreadX + 1e-6);
        sy += dx * (-window.innerHeight * 0.05);
        const margin = 18;
        sx = clamp(sx, margin, window.innerWidth - margin);
        sy = clamp(sy, margin, window.innerHeight - margin);
        return { sx, sy };
      }

      function screenToWorld(sx, sy) {
        const x = (sx - FRAME.cx()) / (FRAME.projScale * window.innerWidth);
        const y = (sy - FRAME.cy()) / (FRAME.projScale * window.innerHeight);
        return { x, y };
      }

      nodes = new Array(N).fill(0).map(() => {
        const { sx, sy } = sampleScreenPoint();
        const w = screenToWorld(sx, sy);
        const nx = (sx / window.innerWidth);
        const ny = (sy / window.innerHeight);
        const zBias = clamp((nx * 0.55 + ny * 0.45) - 0.55, -0.25, 0.45);
        const z = (randn() * 0.22) + zBias * 0.35;

        return {
          x: w.x, y: w.y, z,
          vx: 0, vy: 0, vz: 0,
          x0: w.x, y0: w.y, z0: z,
        };
      });

      const k = (N > 50) ? 2 : 3;
      const longEdgeChance = 0.28;
      const edgeSet = new Set();
      edges = [];

      function addEdge(i, j, w = 1.0) {
        if (i === j) return;
        const a = Math.min(i, j), b = Math.max(i, j);
        const key = a + ':' + b;
        if (edgeSet.has(key)) return;
        edgeSet.add(key);
        const A = nodes[a], B = nodes[b];
        const dx = A.x - B.x, dy = A.y - B.y, dz = A.z - B.z;
        const rest = Math.sqrt(dx * dx + dy * dy + dz * dz) + 1e-6;
        edges.push({ i: a, j: b, rest, w });
      }

      for (let i = 0; i < N; i++) {
        const dists = [];
        const a = nodes[i];
        for (let j = 0; j < N; j++) {
          if (j === i) continue;
          const b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y, dz = a.z - b.z;
          dists.push([dx * dx + dy * dy + dz * dz, j]);
        }
        dists.sort((p, q) => p[0] - q[0]);

        for (let n = 0; n < k; n++) addEdge(i, dists[n][1], 1.0);

        if (Math.random() < longEdgeChance) {
          const pickFrom = Math.min(dists.length - 1, k + 10);
          const pickIdx = clamp(k + Math.floor(Math.random() * 10), k, pickFrom);
          addEdge(i, dists[pickIdx][1], 0.80);
        }
      }

      const deg = new Array(N).fill(0);
      for (const e of edges) { deg[e.i]++; deg[e.j]++; }
      for (let i = 0; i < N; i++) {
        if (deg[i] > 0) continue;
        let bestJ = -1, best = Infinity;
        for (let j = 0; j < N; j++) {
          if (i === j) continue;
          const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y, dz = nodes[i].z - nodes[j].z;
          const d2 = dx * dx + dy * dy + dz * dz;
          if (d2 < best) { best = d2; bestJ = j; }
        }
        if (bestJ >= 0) addEdge(i, bestJ, 1.0);
      }
    }

    function worldToScreen(p) {
      const z = p.z + FRAME.zoff;
      const x2 = (p.x * FRAME.projScale) * window.innerWidth + FRAME.cx();
      const y2 = (p.y * FRAME.projScale) * window.innerHeight + FRAME.cy();
      return { x: x2, y: y2, z };
    }

    function screenDeltaToWorld(dx, dy) {
      return {
        x: dx / (FRAME.projScale * window.innerWidth),
        y: dy / (FRAME.projScale * window.innerHeight),
      };
    }

    function physics(dt) {
      const kSpring = prefersReduced ? 0.45 : 0.55;
      const kAnchor = prefersReduced ? 0.40 : 0.52;
      const damp = prefersReduced ? 0.985 : 0.992;

      const radius = prefersReduced ? 240 : 340;
      const r2 = radius * radius;
      const repelStrength = prefersReduced ? 0.55 : (mouse.down ? 0.85 : 0.55);
      const repelWorldScale = 0.85;
      const maxV = prefersReduced ? 0.32 : 0.45;

      const fx = new Float32Array(nodes.length);
      const fy = new Float32Array(nodes.length);
      const fz = new Float32Array(nodes.length);

      for (let e = 0; e < edges.length; e++) {
        const ed = edges[e];
        const a = nodes[ed.i];
        const b = nodes[ed.j];
        const dx = b.x - a.x, dy = b.y - a.y, dz = b.z - a.z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz) + 1e-6;
        const diff = dist - ed.rest;
        const f = diff * kSpring * (ed.w || 1.0);
        const ux = dx / dist, uy = dy / dist, uz = dz / dist;
        fx[ed.i] += f * ux; fy[ed.i] += f * uy; fz[ed.i] += f * uz;
        fx[ed.j] -= f * ux; fy[ed.j] -= f * uy; fz[ed.j] -= f * uz;
      }

      for (let i = 0; i < nodes.length; i++) {
        const p = nodes[i];
        fx[i] += (p.x0 - p.x) * kAnchor;
        fy[i] += (p.y0 - p.y) * kAnchor;
        fz[i] += (p.z0 - p.z) * (kAnchor * 0.70);
      }

      if (mouse.active) {
        for (let i = 0; i < nodes.length; i++) {
          const p = nodes[i];
          const sp = worldToScreen(p);
          const dx = sp.x - mouse.x;
          const dy = sp.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 > r2) continue;

          const d = Math.sqrt(d2) + 1e-6;
          const fall = (1.0 - d / radius);
          const push = repelStrength * fall * fall * fall;

          const sx = dx / d;
          const sy = dy / d;

          let wd = screenDeltaToWorld(sx, sy);
          const wl = Math.hypot(wd.x, wd.y) + 1e-9;
          wd.x /= wl; wd.y /= wl;

          fx[i] += wd.x * push * repelWorldScale;
          fy[i] += wd.y * push * repelWorldScale;
          fz[i] += (0.15 * push) * (p.z >= 0 ? 1 : -1);
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        const p = nodes[i];
        p.vx = (p.vx + fx[i] * dt) * damp;
        p.vy = (p.vy + fy[i] * dt) * damp;
        p.vz = (p.vz + fz[i] * dt) * damp;

        p.vx = clamp(p.vx, -maxV, maxV);
        p.vy = clamp(p.vy, -maxV, maxV);
        p.vz = clamp(p.vz, -maxV, maxV);

        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.z += p.vz * dt;
      }
    }

    function render() {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.scale(DPR, DPR);

      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = 'rgba(175,195,202,0.04)';
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      const proj = new Array(nodes.length);
      for (let i = 0; i < nodes.length; i++) proj[i] = worldToScreen(nodes[i]);

      ctx.lineWidth = 2.0;
      for (let e = 0; e < edges.length; e++) {
        const ed = edges[e];
        const a = proj[ed.i];
        const b = proj[ed.j];

        const zAvg = (a.z + b.z) * 0.5;
        const depth = clamp(1.0 / zAvg, 0.22, 0.75);
        const blur = clamp(Math.abs(zAvg - DOF.focusZ) * DOF.blurStrength * 0.55, 0, DOF.maxBlur);

        const baseA = (ed.w && ed.w < 1.0) ? 0.28 : 0.24;
        const alpha = clamp(baseA * depth, 0.08, 0.26);

        ctx.shadowBlur = blur;
        ctx.shadowColor = 'rgba(0,0,0,0.22)';
        ctx.strokeStyle = `rgba(10,14,16,${alpha})`;

        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      for (let i = 0; i < proj.length; i++) {
        const p = proj[i];
        const depth = clamp(1.0 / p.z, 0.22, 0.88);
        const blur = clamp(Math.abs(p.z - DOF.focusZ) * DOF.blurStrength * 0.55, 0, DOF.maxBlur);

        const r = clamp(5.0 * depth, 3.0, 8.0);
        const a = clamp(0.58 + depth * 0.80, 0.48, 0.98);

        ctx.shadowBlur = blur;
        ctx.shadowColor = 'rgba(0,0,0,0.24)';
        ctx.fillStyle = `rgba(45,75,85,${a})`;

        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();

        const hr = r * 0.45;
        ctx.shadowBlur = 0;
        ctx.fillStyle = `rgba(255,255,255,${0.35 * depth})`;
        ctx.beginPath();
        ctx.arc(p.x - r * 0.26, p.y - r * 0.26, hr, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.shadowBlur = 0;
    }

    let last = performance.now();
    function loop(now) {
      animationId = requestAnimationFrame(loop);
      if (paused) return;

      const dt = Math.min(0.033, (now - last) / 1000);
      last = now;

      if (!prefersReduced) {
        physics(dt * SPEED);
      } else {
        physics(dt * 0.35 * SPEED);
      }
      render();
    }

    const handleResize = () => { resize(); buildGraph(); };
    window.addEventListener('resize', handleResize);

    resize();
    buildGraph();
    animationId = requestAnimationFrame(loop);

    // Cleanup
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .network-background {
          position: fixed;
          inset: 0;
          width: 100vw;
          height: 100vh;
          z-index: -10;
          background:
            radial-gradient(1200px 900px at 18% 12%, rgba(255,255,255,.55), transparent 62%),
            radial-gradient(900px 700px at 78% 65%, rgba(255,255,255,.25), transparent 58%),
            radial-gradient(1400px 1100px at 82% 20%, rgba(130,170,185,.28), transparent 60%),
            linear-gradient(180deg, #c5d3d8, #7a9299);
        }
        .network-canvas {
          position: fixed;
          inset: 0;
          width: 100vw;
          height: 100vh;
          display: block;
          pointer-events: none;
          z-index: -9;
        }
      `}</style>
      <div className="network-background" />
      <canvas ref={canvasRef} className="network-canvas" />
    </>
  );
}
