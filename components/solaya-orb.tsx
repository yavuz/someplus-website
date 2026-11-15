"use client";

// Solaya'nın ışık küresi, web için: nefes alır, parmakla (fareyle) çekilince
// hamur gibi esner, bırakınca yaylanır; dokununca rengi ve anlamı değişir.
// Uygulamadaki çizimin sadeleştirilmiş eşi (app/lib/widgets/orb.dart, dough.dart).
import { useEffect, useRef, useState } from "react";

export type OrbState = { color: string; meaning: string };

const N = 48;

export function SolayaOrb({ states, hint }: { states: OrbState[]; hint: string }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [index, setIndex] = useState(0);
  const indexRef = useRef(0);
  const poke = useRef<(() => void) | null>(null);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  useEffect(() => {
    const el = canvas.current;
    if (!el) return;
    const ctx = el.getContext("2d");
    if (!ctx) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Kenar noktaları (yarıçap cinsinden uzama) ve hızları; gövde kayması.
    const d = new Float32Array(N);
    const v = new Float32Array(N);
    let sx = 0, sy = 0, svx = 0, svy = 0;
    let held = false;
    let grabA = 0;
    let px = 0, py = 0; // çekme (yarıçap cinsinden)
    let downX = 0, downY = 0, moved = false;
    let color = hexToRgb(states[0].color);
    let ripple = 0;
    let raf = 0;
    let last = performance.now();
    const start = last;

    const size = () => {
      const r = el.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      el.width = Math.round(r.width * dpr);
      el.height = Math.round(r.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      return r;
    };
    let rect = size();
    const onResize = () => (rect = size());
    window.addEventListener("resize", onResize);

    const radius = () => Math.min(rect.width, rect.height) * 0.3;
    const weight = (th: number, c: number, s: number) => {
      let x = (th - c) % (2 * Math.PI);
      if (x > Math.PI) x -= 2 * Math.PI;
      if (x < -Math.PI) x += 2 * Math.PI;
      return Math.exp((-x * x) / (2 * s * s));
    };
    const rubber = (x: number) => 0.7 * Math.tanh(x / 0.7);

    const step = (h: number) => {
      const m = Math.hypot(px, py);
      const pe = m < 1e-6 ? [0, 0] : [(px / m) * rubber(m), (py / m) * rubber(m)];
      const tx = held ? pe[0] * 0.25 : 0, ty = held ? pe[1] * 0.25 : 0;
      const target = new Float32Array(N);
      let mean = 0;
      for (let i = 0; i < N; i++) {
        const th = (2 * Math.PI * i) / N;
        if (held) {
          const along = (pe[0] - tx) * Math.cos(th) + (pe[1] - ty) * Math.sin(th);
          target[i] = along * weight(th, grabA, along >= 0 ? 0.5 : 0.3) * 1.1;
        }
        mean += target[i];
      }
      mean /= N;
      for (let i = 0; i < N; i++) {
        const t = target[i] - 0.85 * mean;
        target[i] = t >= 0 ? 0.75 * Math.tanh(t / 0.75) : -0.42 * Math.tanh(-t / 0.42);
      }
      const k = held ? 320 : 150;
      const c = still ? 2 * Math.sqrt(k) : held ? 16 : 6.5;
      for (let i = 0; i < N; i++) {
        const lap = d[(i + 1) % N] + d[(i - 1 + N) % N] - 2 * d[i];
        v[i] += (k * (target[i] - d[i]) + 380 * lap - c * v[i]) * h;
      }
      for (let i = 0; i < N; i++) d[i] = Math.max(-0.45, Math.min(0.85, d[i] + v[i] * h));
      const ks = held ? 220 : 130, cs = still ? 2 * Math.sqrt(ks) : held ? 20 : 7;
      svx += ((tx - sx) * ks - svx * cs) * h;
      svy += ((ty - sy) * ks - svy * cs) * h;
      sx += svx * h;
      sy += svy * h;
    };

    const radial = (th: number) => {
      const x = ((((th / (2 * Math.PI)) % 1) + 1) % 1) * N;
      const i = Math.floor(x), f = x - i;
      const at = (k: number) => d[((k % N) + N) % N];
      const p0 = at(i - 1), p1 = at(i), p2 = at(i + 1), p3 = at(i + 2);
      return 0.5 * (2 * p1 + (-p0 + p2) * f + (2 * p0 - 5 * p1 + 4 * p2 - p3) * f * f + (-p0 + 3 * p1 - 3 * p2 + p3) * f * f * f);
    };

    const draw = (now: number) => {
      let dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      while (dt > 1e-6) {
        const h = Math.min(dt, 1 / 240);
        step(h);
        dt -= h;
      }
      // Renk yumuşakça yeni hâline geçer.
      const want = hexToRgb(states[indexRef.current].color);
      color = color.map((c, i) => c + (want[i] - c) * 0.06) as [number, number, number];
      ripple = Math.max(0, ripple - 0.012);

      const t = (now - start) / 1000;
      const w = rect.width, hgt = rect.height;
      const r = radius();
      const breath = still ? 0 : Math.sin((2 * Math.PI * t) / 5.5);
      const scale = 1 + 0.05 * breath;
      const cx = w / 2 + sx * r, cy = hgt / 2 + sy * r;
      const [cr, cg, cb] = color.map(Math.round);
      const rgba = (a: number) => `rgba(${cr},${cg},${cb},${a})`;
      ctx.clearRect(0, 0, w, hgt);

      // Hale.
      const halo = ctx.createRadialGradient(cx, cy, r * 0.4, cx, cy, r * 2.1);
      halo.addColorStop(0, rgba(0.55 + 0.12 * breath));
      halo.addColorStop(1, rgba(0));
      ctx.fillStyle = halo;
      ctx.fillRect(0, 0, w, hgt);

      // İnce yörünge halkası ve dokunma dalgası.
      ctx.strokeStyle = "rgba(255,255,255,0.14)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(w / 2, hgt / 2, Math.min(w, hgt) * 0.48, 0, Math.PI * 2);
      ctx.stroke();
      if (ripple > 0) {
        const k = 1 - ripple;
        ctx.strokeStyle = `rgba(255,255,255,${0.5 * ripple})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(w / 2, hgt / 2, r * (1 + 0.7 * (1 - Math.pow(1 - k, 3))), 0, Math.PI * 2);
        ctx.stroke();
      }

      // Kenarı dalgalanan gövde.
      ctx.beginPath();
      for (let k = 0; k <= 120; k++) {
        const th = (2 * Math.PI * k) / 120;
        const wob = still ? 0 : 0.6 * Math.sin(3 * th + t * 0.7) + 0.4 * Math.sin(5 * th - t * 0.9);
        const rr = r * scale * (1 + 0.03 * wob + radial(th));
        const x = cx + Math.cos(th) * rr, y = cy + Math.sin(th) * rr;
        k === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.closePath();
      const body = ctx.createRadialGradient(cx - r * 0.35, cy - r * 0.45, 0, cx, cy, r * 1.25);
      body.addColorStop(0, "rgba(255,255,255,0.92)");
      body.addColorStop(0.45, rgba(1));
      body.addColorStop(1, `rgba(${Math.round(cr * 0.82)},${Math.round(cg * 0.82)},${Math.round(cb * 0.85)},1)`);
      ctx.shadowColor = rgba(0.6);
      ctx.shadowBlur = 30;
      ctx.fillStyle = body;
      ctx.fill();
      ctx.shadowBlur = 0;

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    const local = (e: PointerEvent) => {
      const b = el.getBoundingClientRect();
      return [e.clientX - b.left - b.width / 2, e.clientY - b.top - b.height / 2];
    };
    const onDown = (e: PointerEvent) => {
      const [x, y] = local(e);
      const r = radius();
      if (Math.hypot(x, y) > r * 1.3) return;
      el.setPointerCapture(e.pointerId);
      held = true;
      moved = false;
      grabA = Math.atan2(y, x);
      downX = x;
      downY = y;
      px = py = 0;
    };
    const onMove = (e: PointerEvent) => {
      if (!held) return;
      const [x, y] = local(e);
      const r = radius();
      if (Math.hypot(x - downX, y - downY) > 8) moved = true;
      px = (x - downX) / r;
      py = (y - downY) / r;
    };
    const onUp = () => {
      if (!held) return;
      held = false;
      px = py = 0;
      if (!moved) poke.current?.();
    };
    poke.current = () => {
      for (let i = 0; i < N; i++) v[i] -= 1.6;
      ripple = 1;
      setIndex((i) => (i + 1) % states.length);
    };
    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
    };
  }, [states]);

  return (
    <div className="solaya-orb">
      <canvas
        ref={canvas}
        className="solaya-orb-canvas"
        role="button"
        tabIndex={0}
        aria-label={`${hint}. ${states[index].meaning}`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            poke.current?.();
          }
        }}
      />
      <p className="solaya-orb-meaning" style={{ ["--c" as string]: states[index].color }} aria-live="polite">
        {states[index].meaning}
      </p>
      <p className="solaya-orb-hint">{hint}</p>
    </div>
  );
}

function hexToRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.replace("#", ""), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
