import { useEffect, useRef } from "react";
import "./hero.css";

/**
 * BrixionHero — 1:1 port of the approved hero.
 * Scroll-scrubbed 96-frame film on a <canvas>, sticky stage, five stage captions,
 * lerp inertia, cursor parallax, grain, preloader and progress line.
 * No GSAP / Three.js — everything below is the original vanilla logic.
 */

const N = 96;                                                   // frames F001…F096
const FRAME = (k: number) => `/hero/v/F${String(k + 1).padStart(3, "0")}.jpg`;
const STG: [number, number][] = [[1, 17], [18, 41], [42, 65], [66, 80], [81, 90], [91, 96]]; // stage → frame span (1-based)
const TAIL = 0.14;                                              // last 14% of the hero holds on the end frame

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
const ease = (t: number) => t * t * (3 - 2 * t);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export default function BrixionHero() {
  const heroRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const grainRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLElement>(null);
  const preRef = useRef<HTMLDivElement>(null);
  const preBarRef = useRef<HTMLElement>(null);
  const preLabRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current!, stage = stageRef.current!, cv = canvasRef.current!, copy = copyRef.current!;
    const hint = hintRef.current!, stageBar = barRef.current!, pre = preRef.current!, preBar = preBarRef.current!, preLab = preLabRef.current!;
    const ctx = cv.getContext("2d")!;
    const stgs = Array.from(copy.querySelectorAll<HTMLElement>(".stg"));
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* grain texture */
    const g = document.createElement("canvas"); g.width = g.height = 180;
    const gx = g.getContext("2d")!, d = gx.createImageData(180, 180);
    for (let i = 0; i < d.data.length; i += 4) { const v = Math.random() * 255; d.data[i] = d.data[i + 1] = d.data[i + 2] = v; d.data[i + 3] = 255; }
    gx.putImageData(d, 0, 0); grainRef.current!.style.backgroundImage = `url(${g.toDataURL()})`;

    /* frame sequence */
    const frames: HTMLImageElement[] = new Array(N);
    let loaded = 0, W = 0, H = 0, DPR = 1, cur = 0, target = 0, sc = 0, mx = 0, my = 0, smx = 0, smy = 0;
    let alive = true;

    function size() {
      DPR = Math.min(devicePixelRatio || 1, 1.5); W = stage.clientWidth; H = stage.clientHeight;
      cv.width = Math.round(W * DPR); cv.height = Math.round(H * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0); ctx.imageSmoothingQuality = "high"; draw();
    }
    function cover(img: HTMLImageElement | undefined, z: number, ox: number, oy: number, al: number) {
      if (!img || !img.naturalWidth) return;
      const iw = img.naturalWidth, ih = img.naturalHeight, s = Math.max(W / iw, H / ih) * z, w = iw * s, h = ih * s;
      ctx.globalAlpha = al; ctx.drawImage(img, (W - w) / 2 + ox, (H - h) / 2 + oy, w, h); ctx.globalAlpha = 1;
    }
    function draw() {
      if (!W) return;
      const f = cur * (N - 1), i = Math.floor(f), t = f - i, i2 = Math.min(N - 1, i + 1);
      // Clean fixed alignment — stable frame rendering with zero tilt or drift offset
      const z = 1.0, ox = 0, oy = 0;
      ctx.fillStyle = "#081222"; ctx.fillRect(0, 0, W, H);
      cover(frames[i], z, ox, oy, 1); if (t > 0 && i2 !== i) cover(frames[i2], z, ox, oy, ease(t));
    }
    for (let k = 0; k < N; k++) {
      const im = new Image(); im.src = FRAME(k);
      im.onload = im.onerror = () => {
        loaded++; const p = Math.round(loaded / N * 100);
        preBar.style.setProperty("--w", p + "%"); preLab.textContent = `Loading the build · ${p}%`;
        if (k === 0) size();
        if (loaded === N) setTimeout(() => { pre.classList.add("off"); size(); }, 250);
      };
      frames[k] = im;
    }
    const preTimeout = setTimeout(() => pre.classList.add("off"), 6000);

    function heroFrame() {
      const r = hero.getBoundingClientRect(), total = hero.offsetHeight - innerHeight; sc = clamp(-r.top / total, 0, 1);
      const p = clamp(sc / (1 - TAIL), 0, 1); target = p;
      if (hint) hint.style.opacity = String(clamp(1 - sc * 18, 0, 1));
      if (stageBar) stageBar.style.setProperty("--w", (sc * 100).toFixed(2) + "%");
      stgs.forEach((el, i) => {
        const [a] = STG[i]; const s = (a - 1) / (N - 1), e = i < STG.length - 1 ? (STG[i + 1][0] - 1) / (N - 1) : 2;
        let k: number;
        if (i === 0) k = ease(clamp((e - p) / 0.03, 0, 1));
        else if (i === STG.length - 1) k = ease(clamp((sc - (1 - TAIL) - 0.01) / 0.05, 0, 1));
        else k = ease(clamp(Math.min((p - s + 0.01) / 0.03, (e - p) / 0.03), 0, 1));
        el.style.opacity = k.toFixed(3); el.style.transform = `translateY(${((1 - k) * 24).toFixed(1)}px)`; el.style.pointerEvents = k > 0.5 ? "auto" : "none";
      });
      copy.style.transform = "none";
    }
    const onMove = (e: PointerEvent) => { mx = e.clientX / W - 0.5; my = e.clientY / H - 0.5; };
    stage.addEventListener("pointermove", onMove);

    (function loop() {
      if (!alive) return;
      cur = lerp(cur, target, reduce ? 1 : 0.14); smx = lerp(smx, mx, 0.06); smy = lerp(smy, my, 0.06);
      if (Math.abs(cur - target) > 1e-4) draw();
      requestAnimationFrame(loop);
    })();

    let tick = false;
    const frame = () => { heroFrame(); tick = false; };
    const onScroll = () => { if (!tick) { requestAnimationFrame(frame); tick = true; } };
    const onResize = () => { size(); frame(); };
    addEventListener("scroll", onScroll, { passive: true }); addEventListener("resize", onResize); frame();

    const cleanups: (() => void)[] = [];
    if (matchMedia("(hover:hover) and (pointer:fine)").matches && !reduce) {
      hero.querySelectorAll<HTMLElement>(".magnet").forEach(b => {
        const mv = (e: PointerEvent) => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${((e.clientX - r.left - r.width / 2) * 0.18).toFixed(1)}px,${((e.clientY - r.top - r.height / 2) * 0.28).toFixed(1)}px)`; };
        const lv = () => { b.style.transform = ""; };
        b.addEventListener("pointermove", mv); b.addEventListener("pointerleave", lv);
        cleanups.push(() => { b.removeEventListener("pointermove", mv); b.removeEventListener("pointerleave", lv); });
      });
    }

    return () => {
      alive = false; clearTimeout(preTimeout);
      stage.removeEventListener("pointermove", onMove);
      removeEventListener("scroll", onScroll); removeEventListener("resize", onResize);
      cleanups.forEach(fn => fn());
    };
  }, []);

  return (
    <>
      <div className="pre" ref={preRef}>
        <div className="in">
          <img src="/hero/logo.png" alt="Brixion" />
          <div className="bar"><i ref={preBarRef} /></div>
          <div className="lab" ref={preLabRef}>Loading the build · 0%</div>
        </div>
      </div>

      <section className="hero" id="home" aria-label="From material to building" ref={heroRef}>
        <div className="stage" ref={stageRef}>
          <canvas ref={canvasRef} aria-hidden="true" />
          <div className="shade" /><div className="grain" ref={grainRef} />
          <div className="copy" ref={copyRef}>
            <div className="stg">
              <h1>One brick.<br /><em>Every wall.</em></h1>
              <div className="desc">Quality, strength, consistency and reliability, pressed into every Brixion brick. Never fired.</div>
              <div className="actions"><a className="btn solid magnet" href="/contact">Get a quote <span className="arr">→</span></a></div>
            </div>
            <div className="stg">
              <div className="eyebrow">Stage 01 <i /> Quality</div>
              <h1>One <em>brick.</em></h1>
              <div className="desc">Fly ash, cement, sand and water. Pressed under hydraulic load. 9 × 4.25 × 3 inches, about 3.25 kg, the same every time.</div>
            </div>
            <div className="stg">
              <div className="eyebrow">Stage 02 <i /> Consistency</div>
              <h1>Course by <em>course.</em></h1>
              <div className="desc">Uniform size and sharp 90° edges make every wall predictable to build, from the foundation to the roof slab.</div>
            </div>
            <div className="stg">
              <div className="eyebrow">Stage 03 <i /> Strength</div>
              <h1>Mortar. Plaster. <em>Paint.</em></h1>
              <div className="desc">7.5–12 N/mm² under the finish. Low water absorption and a smooth face mean less mortar and thinner plaster.</div>
            </div>
            <div className="stg">
              <div className="eyebrow">Stage 04 <i /> Reliability</div>
              <h1>Glass, wood <em>and stone.</em></h1>
              <div className="desc">Delivered on time, in one piece. The brick disappears into the architecture it made possible.</div>
            </div>
            <div className="stg end">
              <div className="eyebrow">Stage 05 <i /> Completion</div>
              <h1>Build strong.<br /><em>Build smart.</em></h1>
              <div className="desc">Premium fly ash &amp; hydraulic pressed bricks engineered for ultimate structural strength and architectural perfection.</div>
              <div className="actions">
                <a className="btn solid magnet" href="/contact">Build With Brixion Bricks <span className="arr">→</span></a>
              </div>
            </div>
          </div>
          <div
            className="hint"
            ref={hintRef}
            onClick={() => {
              const heroEl = heroRef.current;
              if (heroEl) {
                const total = heroEl.offsetHeight - window.innerHeight;
                const currentSc = clamp((window.scrollY - heroEl.offsetTop) / total, 0, 1);
                const stageRatios = [0, 0.08, 0.28, 0.52, 0.72, 0.88];
                const nextRatio = stageRatios.find(r => r > currentSc + 0.03);
                if (nextRatio !== undefined) {
                  const targetY = heroEl.offsetTop + total * nextRatio;
                  window.scrollTo({ top: targetY, behavior: 'smooth' });
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }
            }}
          >
            Scroll to begin <i />
          </div>
        </div>
      </section>
    </>
  );
}
