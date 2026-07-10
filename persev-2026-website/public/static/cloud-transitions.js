/**
 * Cloud page-transition system for the Perseverantia site.
 * Based on transition.html - pure CSS/JS cloud panel transitions (no GSAP)
 */

(function () {
  'use strict';

  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  const isMobileWebKit =
    /iP(hone|od|ad)/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

  // iOS WebKit is unstable with the full-screen canvas transition system.
  // Expose a lightweight no-op API there so pages can still navigate normally.
  if (isMobileWebKit) {
    try {
      sessionStorage.removeItem('persev_transition_state');
    } catch (e) { /* ignore */ }

    window.PersevTransitions = {
      init() {},
      playExitTransition(href) {
        window.location.href = href;
      },
      playEntryTransition() {}
    };

    document.documentElement.classList.remove('cloud-transition-active');
    if (document.body) {
      document.body.classList.remove('cloud-transition-active');
      document.body.style.visibility = '';
    }

    return;
  }

  // IMMEDIATE check: if we have a pending transition, hide body RIGHT NOW
  // before any content renders (prevents flash frame).
  // Expire stale state after 30 s so an interrupted transition doesn't
  // permanently blank the page on the next visit.
  const TRANSITION_STATE_KEY = 'persev_transition_state';
  let hasPendingTransition = false;
  try {
    const raw = sessionStorage.getItem(TRANSITION_STATE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.timestamp && Date.now() - parsed.timestamp > 30000) {
        sessionStorage.removeItem(TRANSITION_STATE_KEY);
      } else {
        hasPendingTransition = true;
        // Hide body immediately to prevent flash (don't use !important so inline styles can override)
        const style = document.createElement('style');
        style.id = 'cloud-transition-immediate-hide';
        style.textContent = `
          body { visibility: hidden; background: #050914; }
        `;
        document.head.appendChild(style);
      }
    }
  } catch (e) { /* ignore */ }

  // Safety net: if body is still hidden 5 s after load, force it visible.
  // Catches cases where the entry transition never fires (e.g. React
  // hydration removes the transition overlay before the animation starts).
  setTimeout(function () {
    if (document.body) {
      document.body.style.visibility = '';
    }
    var s = document.getElementById('cloud-transition-immediate-hide');
    if (s) { s.remove(); }
  }, 5000);

  const CONFIG = {
    navFallbackMs: 3600,
    pageLoadDelayMs: 180,
    transitionDuration: 2000
  };

  const state = {
    isNavigating: false,
    isTransitioning: false,  // Lock to prevent double transitions
    entryTransitionPlayed: false
  };

  const utils = {
    prefersReducedMotion() {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    },
    normalizePath(pathname) {
      if (!pathname || pathname === '/') {
        return '/';
      }
      return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
    }
  };

  // Expose for immediate check above
  const saveTransitionState = function(href) {
    try {
      sessionStorage.setItem(TRANSITION_STATE_KEY, JSON.stringify({
        timestamp: Date.now(),
        targetHref: href,
        phase: 'holding'
      }));
    } catch (e) { /* ignore */ }
  };

  const getTransitionState = function() {
    try {
      const data = sessionStorage.getItem(TRANSITION_STATE_KEY);
      if (data) {
        const state = JSON.parse(data);
        // Clear it immediately so we don't repeat on refresh
        sessionStorage.removeItem(TRANSITION_STATE_KEY);
        return state;
      }
    } catch (e) { /* ignore */ }
    return null;
  };

  const clearTransitionState = function() {
    try {
      sessionStorage.removeItem(TRANSITION_STATE_KEY);
    } catch (e) { /* ignore */ }
  };


  /* ═══════════════════════════════════════════════════════════
     STYLE INJECTION
  ═══════════════════════════════════════════════════════════ */
  const styles = {
    inject() {
      if (document.getElementById('cloud-transition-styles')) {
        return;
      }

      const style = document.createElement('style');
      style.id = 'cloud-transition-styles';
      style.textContent = `
        .cloud-transition-overlay {
          position: fixed;
          inset: 0;
          z-index: 2147483640;
          pointer-events: none;
          overflow: hidden;
        }

        .cloud-transition-wrapper {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .cloud-transition-wrapper::before {
          content: '';
          position: absolute;
          inset: -10%;
          background:
            radial-gradient(circle at 50% 42%, rgba(255, 244, 228, 0.16), transparent 24%),
            radial-gradient(circle at 50% 64%, rgba(18, 24, 54, 0.28), transparent 34%);
          opacity: 0.92;
          filter: blur(12px);
        }

        .cloud-panel {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 62%;
          will-change: transform, opacity;
          overflow: hidden;
          transform: translate3d(0, 0, 0);
          filter: drop-shadow(0 22px 36px rgba(1, 5, 16, 0.18));
        }

        .cloud-panel--left {
          left: 0;
          transform: translateX(-108%) rotate(-1deg);
          transform-origin: left center;
        }

        .cloud-panel--right {
          right: 0;
          transform: translateX(108%) rotate(1deg);
          transform-origin: right center;
        }

        .cloud-panel::before,
        .cloud-panel::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .cloud-panel::before {
          background: linear-gradient(180deg, rgba(255,255,255,0.28), transparent 18%, transparent 76%, rgba(6, 8, 22, 0.12));
          mix-blend-mode: screen;
          opacity: 0.98;
        }

        .cloud-panel::after {
          background:
            radial-gradient(circle at 18% 18%, rgba(255,255,255,0.28), transparent 16%),
            radial-gradient(circle at 42% 28%, rgba(248,243,235,0.34), transparent 22%),
            radial-gradient(circle at 72% 26%, rgba(236,231,224,0.22), transparent 18%),
            radial-gradient(circle at 50% 56%, rgba(229,224,216,0.12), transparent 30%),
            linear-gradient(90deg, rgba(7, 9, 20, 0.08), transparent 14%, transparent 86%, rgba(7, 9, 20, 0.04));
          opacity: 0.58;
        }

        .cloud-panel__canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: block;
          filter: saturate(1.08) contrast(1.0) brightness(1.2);
        }

        .cloud-transition-seam {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 3;
          opacity: 0;
          background:
            linear-gradient(90deg, transparent 0%, rgba(255, 244, 223, 0.08) 48%, rgba(255, 244, 223, 0.12) 50%, rgba(255, 244, 223, 0.08) 52%, transparent 100%),
            radial-gradient(circle at 50% 50%, rgba(252, 239, 215, 0.1), transparent 28%);
          mix-blend-mode: screen;
          filter: blur(16px);
        }

        .cloud-transition-grain {
          position: absolute;
          inset: 0;
          z-index: 3;
          opacity: 0;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.12'/%3E%3C/svg%3E");
          background-size: 180px 180px;
          mix-blend-mode: soft-light;
        }

        @media (max-width: 700px) {
          .cloud-panel { width: 60%; }
          .cloud-panel--left { transform: translateX(-112%) rotate(-1deg); }
          .cloud-panel--right { transform: translateX(112%) rotate(1deg); }
        }

        html.cloud-transition-active,
        body.cloud-transition-active {
          background: #050914 !important;
        }

        /* Prevent flash of content during transition - hide everything immediately */
        body.cloud-transition-entry {
          visibility: hidden !important;
        }

        /* But keep overlay visible */
        .cloud-transition-overlay {
          visibility: visible !important;
        }
      `;
      document.head.appendChild(style);
    }
  };

  /* ═══════════════════════════════════════════════════════════
     CLOUD CANVAS RENDERER
  ═══════════════════════════════════════════════════════════ */
  class CloudPanel {
    constructor(canvas, side, img) {
      this.canvas = canvas;
      this.side = side;
      this.img = img;
      this.ctx = canvas.getContext('2d');
      this.dpr = Math.min(window.devicePixelRatio || 1, 2);
      this._resize();
      this._paint();
    }

    _resize() {
      const w = this.canvas.parentElement.offsetWidth;
      const h = window.innerHeight;
      this.canvas.width = w * this.dpr;
      this.canvas.height = h * this.dpr;
      this.canvas.style.width = w + 'px';
      this.canvas.style.height = h + 'px';
      this.w = w;
      this.h = h;
    }

    _paint() {
      const { ctx, img, w, h, dpr, side } = this;
      ctx.save();
      ctx.scale(dpr, dpr);

      const iw = img.naturalWidth || img.width;
      const ih = img.naturalHeight || img.height;
      const scale = Math.max(w / iw, h / ih);
      const sw = iw * scale;
      const sh = ih * scale;
      const sx = (w - sw) / 2;
      const sy = (h - sh) / 2;

      if (side === 'left') {
        ctx.translate(w, 0);
        ctx.scale(-1, 1);
      }
      ctx.drawImage(img, sx, sy, sw, sh);
      if (side === 'left') ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Atmosphere tint
      const skyTint = ctx.createLinearGradient(0, 0, 0, h);
      skyTint.addColorStop(0, 'rgba(107, 142, 173, 0.12)');
      skyTint.addColorStop(0.5, 'rgba(255, 236, 216, 0.12)');
      skyTint.addColorStop(1, 'rgba(8, 10, 24, 0.14)');
      ctx.fillStyle = skyTint;
      ctx.fillRect(0, 0, w, h);

      const edgeTint = ctx.createLinearGradient(
        side === 'left' ? w : 0, 0,
        side === 'left' ? 0 : w, 0
      );
      edgeTint.addColorStop(0, 'rgba(7, 9, 20, 0.18)');
      edgeTint.addColorStop(0.5, 'rgba(7, 9, 20, 0.12)');
      edgeTint.addColorStop(1, 'rgba(7, 9, 20, 0.08)');
      ctx.fillStyle = edgeTint;
      ctx.fillRect(0, 0, w, h);

      const warmWash = ctx.createLinearGradient(0, 0, 0, h);
      warmWash.addColorStop(0, 'rgba(246, 221, 188, 0.22)');
      warmWash.addColorStop(0.55, 'rgba(245, 211, 181, 0.14)');
      warmWash.addColorStop(1, 'rgba(245, 211, 181, 0.1)');
      ctx.fillStyle = warmWash;
      ctx.fillRect(0, 0, w, h);

      const isLowEnd = navigator.hardwareConcurrency <= 2 ||
        (navigator.deviceMemory && navigator.deviceMemory <= 2) ||
        /Android.*Chrome\/[0-5]/.test(navigator.userAgent);

      // Soft bloom
      if (!isLowEnd && !isMobileWebKit) {
        ctx.filter = 'blur(18px)';
        ctx.globalAlpha = 0.22;
        ctx.drawImage(img, sx, sy, sw, sh);
        ctx.globalAlpha = 1;
        ctx.filter = 'none';
      }

      const cloudShadows = [
        [w * 0.44, h * 0.24, w * 0.36, h * 0.16, 'rgba(249, 246, 240, 0.5)'],
        [w * 0.28, h * 0.38, w * 0.28, h * 0.14, 'rgba(244, 240, 232, 0.42)'],
        [w * 0.62, h * 0.34, w * 0.32, h * 0.15, 'rgba(247, 243, 236, 0.46)'],
        [w * 0.5, h * 0.52, w * 0.4, h * 0.14, 'rgba(236, 231, 222, 0.34)'],
        [w * 0.18, h * 0.58, w * 0.24, h * 0.12, 'rgba(226, 226, 232, 0.26)'],
        [w * 0.82, h * 0.56, w * 0.26, h * 0.12, 'rgba(226, 226, 232, 0.26)']
      ];

      ctx.globalCompositeOperation = 'screen';
      cloudShadows.forEach(([cx, cy, rx, ry, color]) => {
        const puff = ctx.createRadialGradient(cx, cy, 8, cx, cy, Math.max(rx, ry));
        puff.addColorStop(0, color);
        puff.addColorStop(0.55, color.replace(/0\.[0-9]+\)$/, '0.16)'));
        puff.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = puff;
        ctx.filter = 'blur(12px)';
        ctx.beginPath();
        ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.filter = 'none';
      ctx.globalCompositeOperation = 'source-over';

      // Edge feather
      const edgeX = side === 'left' ? w : 0;
      const edgeDir = side === 'left' ? w - w * 0.4 : w * 0.4;
      const edgeGrad = ctx.createLinearGradient(edgeX, 0, edgeDir, 0);
      edgeGrad.addColorStop(0, 'rgba(7, 9, 20, 0)');
      edgeGrad.addColorStop(0.5, 'rgba(7, 9, 20, 0.04)');
      edgeGrad.addColorStop(0.8, 'rgba(7, 9, 20, 0.14)');
      edgeGrad.addColorStop(1, 'rgba(7, 9, 20, 0.34)');
      ctx.fillStyle = edgeGrad;
      ctx.fillRect(0, 0, w, h);

      const topGrad = ctx.createLinearGradient(0, 0, 0, h);
      topGrad.addColorStop(0, 'rgba(7, 9, 20, 0.12)');
      topGrad.addColorStop(0.5, 'rgba(7, 9, 20, 0.05)');
      topGrad.addColorStop(1, 'rgba(7, 9, 20, 0.02)');
      ctx.fillStyle = topGrad;
      ctx.fillRect(0, 0, w, h);

      const botGrad = ctx.createLinearGradient(0, 0, 0, h);
      botGrad.addColorStop(0, 'rgba(3, 5, 14, 0.06)');
      botGrad.addColorStop(0.55, 'rgba(3, 5, 14, 0.12)');
      botGrad.addColorStop(1, 'rgba(3, 5, 14, 0.28)');
      ctx.fillStyle = botGrad;
      ctx.fillRect(0, 0, w, h);

      ctx.restore();
    }
  }

  /* ═══════════════════════════════════════════════════════════
     ANIMATION ENGINE
  ═══════════════════════════════════════════════════════════ */
  function easeInOutQuart(t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
  }

  function easeOutExpo(t) {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }

  function easeInExpo(t) {
    return t === 0 ? 0 : Math.pow(2, 10 * t - 10);
  }

  function lerp(a, b, t) { return a + (b - a) * t; }

  function runLowEndTransition(panelLeft, panelRight, grain, seam, done, options = {}) {
    const dur = '1.1s';
    const ease = 'cubic-bezier(0.76,0,0.24,1)';
    [panelLeft, panelRight].forEach(p => {
      p.style.transition = `transform ${dur} ${ease}, filter ${dur} ${ease}`;
    });
    panelLeft.style.transform = 'translateX(0) rotate(0deg)';
    panelLeft.style.filter = 'drop-shadow(0 35px 60px rgba(1, 5, 16, 0.34))';
    grain.style.opacity = '0.6';
    grain.style.transition = 'opacity .4s';
    setTimeout(() => { panelRight.style.transform = 'translateX(0) rotate(0deg)'; }, 220);
    setTimeout(() => {
      const outDur = '1s';
      [panelLeft, panelRight].forEach(p => {
        p.style.transition = `transform ${outDur} ${ease}, filter ${outDur} ${ease}`;
      });
      panelLeft.style.transform = 'translateX(-108%) rotate(-1deg)';
      panelRight.style.transform = 'translateX(108%) rotate(1deg)';
      grain.style.opacity = '0';
      setTimeout(done, 1100);
    }, options.holdDuration || 1600);
  }

  // IN ONLY: Close panels then navigate (no out phase)
  function runLowEndTransitionInOnly(panelLeft, panelRight, grain, seam, done) {
    const dur = '1.1s';
    const ease = 'cubic-bezier(0.76,0,0.24,1)';
    [panelLeft, panelRight].forEach(p => {
      p.style.transition = `transform ${dur} ${ease}, filter ${dur} ${ease}`;
    });
    panelLeft.style.transform = 'translateX(0) rotate(0deg)';
    panelLeft.style.filter = 'drop-shadow(0 35px 60px rgba(1, 5, 16, 0.34))';
    grain.style.opacity = '0.6';
    grain.style.transition = 'opacity .4s';
    setTimeout(() => { panelRight.style.transform = 'translateX(0) rotate(0deg)'; }, 220);
    // Navigate as soon as panels are fully closed (no hold, no out)
    setTimeout(done, 1200);
  }

  function runHighEndTransition(panelLeft, panelRight, grain, seam, done, options = {}) {
    const PHASE1_DURATION = 1200;
    const DELAY_RIGHT = 200;
    const HOLD_DURATION = options.holdDuration || 700;
    const PHASE2_DURATION = 1100;

    let startTime = null;
    let phase = options.startPhase || 'in';
    let phaseStart = null;

    // If starting from hold (page entry), set panels to fully extended immediately
    if (phase === 'hold') {
      panelLeft.style.transform = 'translateX(0) rotate(0deg)';
      panelRight.style.transform = 'translateX(0) rotate(0deg)';
      panelLeft.style.filter = 'drop-shadow(0 35px 60px rgba(1, 5, 16, 0.24))';
      panelRight.style.filter = 'drop-shadow(0 35px 60px rgba(1, 5, 16, 0.24))';
      grain.style.opacity = '0.7';
      seam.style.opacity = '0.55';
    }

    function tick(ts) {
      if (!startTime) startTime = ts;

      if (phase === 'in') {
        if (!phaseStart) phaseStart = ts;
        const t1 = Math.min((ts - phaseStart) / PHASE1_DURATION, 1);
        const tRight = Math.min(Math.max((ts - phaseStart - DELAY_RIGHT) / PHASE1_DURATION, 0), 1);

        const leftX = lerp(-100, 0, easeOutExpo(t1));
        const rightX = lerp(100, 0, easeOutExpo(tRight));
        const leftRot = lerp(-1.8, 0, easeInOutQuart(t1));
        const rightRot = lerp(1.8, 0, easeInOutQuart(tRight));

        panelLeft.style.transform = `translateX(${leftX}%) rotate(${leftRot}deg)`;
        panelRight.style.transform = `translateX(${rightX}%) rotate(${rightRot}deg)`;
        panelLeft.style.filter = `drop-shadow(0 35px 60px rgba(1, 5, 16, ${lerp(0.38, 0.24, t1)}))`;
        panelRight.style.filter = `drop-shadow(0 35px 60px rgba(1, 5, 16, ${lerp(0.38, 0.24, tRight)}))`;
        grain.style.opacity = String(lerp(0, 0.7, easeInOutQuart(t1)));
        seam.style.opacity = String(lerp(0, 0.55, easeInOutQuart(t1)));

        if (t1 >= 1 && tRight >= 1) { phase = 'hold'; phaseStart = ts; }

      } else if (phase === 'hold') {
        // Check if we should move to out phase
        const holdElapsed = ts - phaseStart;
        if (holdElapsed >= HOLD_DURATION) { phase = 'out'; phaseStart = ts; }

      } else if (phase === 'out') {
        const t = Math.min((ts - phaseStart) / PHASE2_DURATION, 1);

        const leftX = lerp(0, -105, easeInOutQuart(t));
        const rightX = lerp(0, 105, easeInOutQuart(t));
        const scaleL = lerp(1, 0.94, easeInExpo(t));
        const scaleR = lerp(1, 0.94, easeInExpo(t));
        const leftRot = lerp(0, -1.2, easeInOutQuart(t));
        const rightRot = lerp(0, 1.2, easeInOutQuart(t));

        panelLeft.style.transform = `translateX(${leftX}%) rotate(${leftRot}deg) scale(${scaleL})`;
        panelRight.style.transform = `translateX(${rightX}%) rotate(${rightRot}deg) scale(${scaleR})`;
        grain.style.opacity = String(lerp(0.7, 0, easeInOutQuart(t)));
        seam.style.opacity = String(lerp(0.55, 0, easeInOutQuart(t)));

        if (t >= 1) { done(); return; }
      }

      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  // IN ONLY: Close panels then navigate immediately (no hold, no out)
  function runHighEndTransitionInOnly(panelLeft, panelRight, grain, seam, done) {
    const PHASE1_DURATION = 1200;
    const DELAY_RIGHT = 200;

    let startTime = null;
    let phaseStart = null;

    function tick(ts) {
      if (!startTime) startTime = ts;

      if (!phaseStart) phaseStart = ts;
      const t1 = Math.min((ts - phaseStart) / PHASE1_DURATION, 1);
      const tRight = Math.min(Math.max((ts - phaseStart - DELAY_RIGHT) / PHASE1_DURATION, 0), 1);

      const leftX = lerp(-100, 0, easeOutExpo(t1));
      const rightX = lerp(100, 0, easeOutExpo(tRight));
      const leftRot = lerp(-1.8, 0, easeInOutQuart(t1));
      const rightRot = lerp(1.8, 0, easeInOutQuart(tRight));

      panelLeft.style.transform = `translateX(${leftX}%) rotate(${leftRot}deg)`;
      panelRight.style.transform = `translateX(${rightX}%) rotate(${rightRot}deg)`;
      panelLeft.style.filter = `drop-shadow(0 35px 60px rgba(1, 5, 16, ${lerp(0.38, 0.24, t1)}))`;
      panelRight.style.filter = `drop-shadow(0 35px 60px rgba(1, 5, 16, ${lerp(0.38, 0.24, tRight)}))`;
      grain.style.opacity = String(lerp(0, 0.7, easeInOutQuart(t1)));
      seam.style.opacity = String(lerp(0, 0.55, easeInOutQuart(t1)));

      // Navigate as soon as panels are fully closed
      if (t1 >= 1 && tRight >= 1) {
        done();
        return;
      }

      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  // OUT ONLY: Start from closed position and open panels (for page entry)
  function runHighEndTransitionOutOnly(panelLeft, panelRight, grain, seam, done) {
    const PHASE2_DURATION = 1100;

    let startTime = null;
    let phaseStart = null;

    function tick(ts) {
      if (!startTime) startTime = ts;

      if (!phaseStart) phaseStart = ts;
      const t = Math.min((ts - phaseStart) / PHASE2_DURATION, 1);

      const leftX = lerp(0, -105, easeInOutQuart(t));
      const rightX = lerp(0, 105, easeInOutQuart(t));
      const scaleL = lerp(1, 0.94, easeInExpo(t));
      const scaleR = lerp(1, 0.94, easeInExpo(t));
      const leftRot = lerp(0, -1.2, easeInOutQuart(t));
      const rightRot = lerp(0, 1.2, easeInOutQuart(t));

      panelLeft.style.transform = `translateX(${leftX}%) rotate(${leftRot}deg) scale(${scaleL})`;
      panelRight.style.transform = `translateX(${rightX}%) rotate(${rightRot}deg) scale(${scaleR})`;
      grain.style.opacity = String(lerp(0.7, 0, easeInOutQuart(t)));
      seam.style.opacity = String(lerp(0.55, 0, easeInOutQuart(t)));

      if (t >= 1) { done(); return; }

      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ═══════════════════════════════════════════════════════════
     OVERLAY CREATION
  ═══════════════════════════════════════════════════════════ */
  function createOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'cloud-transition-overlay';
    overlay.setAttribute('aria-hidden', 'true');

    const wrapper = document.createElement('div');
    wrapper.className = 'cloud-transition-wrapper';

    const panelLeft = document.createElement('div');
    panelLeft.className = 'cloud-panel cloud-panel--left';
    const canvasLeft = document.createElement('canvas');
    canvasLeft.className = 'cloud-panel__canvas';
    panelLeft.appendChild(canvasLeft);

    const panelRight = document.createElement('div');
    panelRight.className = 'cloud-panel cloud-panel--right';
    const canvasRight = document.createElement('canvas');
    canvasRight.className = 'cloud-panel__canvas';
    panelRight.appendChild(canvasRight);

    const seam = document.createElement('div');
    seam.className = 'cloud-transition-seam';

    const grain = document.createElement('div');
    grain.className = 'cloud-transition-grain';

    wrapper.appendChild(panelLeft);
    wrapper.appendChild(panelRight);
    wrapper.appendChild(seam);
    wrapper.appendChild(grain);
    overlay.appendChild(wrapper);

    return {
      overlay,
      panelLeft,
      panelRight,
      canvasLeft,
      canvasRight,
      seam,
      grain
    };
  }

  /* ═══════════════════════════════════════════════════════════
     TRANSITION CONTROLLER
  ═══════════════════════════════════════════════════════════ */
  const transition = {
    cloudImage: null,

    preloadCloudImage() {
      return new Promise((resolve) => {
        if (this.cloudImage && this.cloudImage.complete) {
          resolve(this.cloudImage);
          return;
        }

        const img = new Image();
        img.onload = () => {
          this.cloudImage = img;
          resolve(img);
        };
        img.onerror = () => {
          // Create procedural fallback
          const fc = document.createElement('canvas');
          fc.width = 1200;
          fc.height = 750;
          const fctx = fc.getContext('2d');
          const sky = fctx.createLinearGradient(0, 0, 0, 750);
          sky.addColorStop(0, '#1a3a6b');
          sky.addColorStop(0.4, '#3a7abf');
          sky.addColorStop(0.7, '#89b9e0');
          sky.addColorStop(1, '#c5d8ea');
          fctx.fillStyle = sky;
          fctx.fillRect(0, 0, 1200, 750);

          function puff(cx, cy, rx, ry, a) {
            const g = fctx.createRadialGradient(cx, cy - ry * 0.2, ry * 0.1, cx, cy, Math.max(rx, ry));
            g.addColorStop(0, `rgba(255,252,245,${a})`);
            g.addColorStop(0.5, `rgba(235,228,210,${a * 0.8})`);
            g.addColorStop(1, `rgba(200,220,240,0)`);
            fctx.fillStyle = g;
            fctx.beginPath();
            fctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
            fctx.fill();
          }

          [[600, 400, 200, 140, 0.97], [450, 450, 150, 110, 0.92], [750, 430, 160, 120, 0.9],
          [580, 290, 110, 80, 0.88], [670, 300, 100, 75, 0.85], [400, 480, 130, 95, 0.82],
          [820, 460, 140, 100, 0.8], [540, 500, 90, 65, 0.78], [700, 360, 80, 60, 0.75],
          [280, 510, 100, 75, 0.72], [950, 500, 110, 80, 0.7]
          ].forEach(([cx, cy, rx, ry, a]) => puff(cx, cy, rx, ry, a));

          const fi = new Image();
          fi.onload = () => {
            this.cloudImage = fi;
            resolve(fi);
          };
          fi.src = fc.toDataURL();
        };
        img.src = '/assets/cloud-asset.png';
      });
    },

    // Play exit transition - panels close, then navigate
    playExitTransition(href) {
      if (!href || state.isNavigating || state.isTransitioning) {
        return;
      }

      if (utils.prefersReducedMotion()) {
        state.isNavigating = true;
        window.location.href = href;
        return;
      }

      state.isNavigating = true;
      state.isTransitioning = true;
      styles.inject();

      const parts = createOverlay();
      document.body.appendChild(parts.overlay);
      document.documentElement.classList.add('cloud-transition-active');
      document.body.classList.add('cloud-transition-active');

      // Save transition state before navigating
      saveTransitionState(href);

      // Paint cloud panels
      this.preloadCloudImage().then((img) => {
        new CloudPanel(parts.canvasLeft, 'left', img);
        new CloudPanel(parts.canvasRight, 'right', img);

        const isLowEnd = navigator.hardwareConcurrency <= 2 ||
          (navigator.deviceMemory && navigator.deviceMemory <= 2) ||
          /Android.*Chrome\/[0-5]/.test(navigator.userAgent);
        const isMobile = window.innerWidth < 600;

        // Navigate immediately when panels reach fully closed position
        const done = () => {
          window.location.href = href;
        };

        // Only play IN animation (close panels), then navigate immediately
        // No hold - we want to navigate as soon as panels cover the screen
        if (isLowEnd || isMobile) {
          runLowEndTransitionInOnly(parts.panelLeft, parts.panelRight, parts.grain, parts.seam, done);
        } else {
          runHighEndTransitionInOnly(parts.panelLeft, parts.panelRight, parts.grain, parts.seam, done);
        }
      });
    },

    // Play entry transition when arriving at a new page
    playEntryTransition() {
      // Prevent double-play
      if (state.isTransitioning || state.entryTransitionPlayed) {
        document.body.style.visibility = '';
        return;
      }

      const savedState = getTransitionState();
      if (!savedState) {
        // No pending transition - ensure body is visible
        document.body.style.visibility = '';
        return;
      }

      if (utils.prefersReducedMotion()) {
        // Reduced motion - skip transition but show content
        document.body.style.visibility = '';
        return;
      }

      state.isTransitioning = true;
      state.entryTransitionPlayed = true;

      // Hide body immediately to prevent flash of content
      document.body.style.visibility = 'hidden';

      styles.inject();

      const parts = createOverlay();
      document.body.appendChild(parts.overlay);
      document.documentElement.classList.add('cloud-transition-active');
      document.body.classList.add('cloud-transition-active');

      // Make sure overlay is on top of everything
      parts.overlay.style.zIndex = '2147483647';

      // Remove the placeholder if it exists (from the synchronous HTML script)
      const placeholder = document.getElementById('cloud-placeholder');
      if (placeholder) placeholder.remove();

      this.preloadCloudImage().then((img) => {
        new CloudPanel(parts.canvasLeft, 'left', img);
        new CloudPanel(parts.canvasRight, 'right', img);

        const isLowEnd = navigator.hardwareConcurrency <= 2 ||
          (navigator.deviceMemory && navigator.deviceMemory <= 2) ||
          /Android.*Chrome\/[0-5]/.test(navigator.userAgent);
        const isMobile = window.innerWidth < 600;

        // Start with panels FULLY CLOSED (the position they were in when we left the previous page)
        // This creates the seamless "continuous" effect
        parts.panelLeft.style.transform = 'translateX(0) rotate(0deg)';
        parts.panelRight.style.transform = 'translateX(0) rotate(0deg)';
        parts.panelLeft.style.filter = 'drop-shadow(0 35px 60px rgba(1, 5, 16, 0.24))';
        parts.panelRight.style.filter = 'drop-shadow(0 35px 60px rgba(1, 5, 16, 0.24))';
        parts.grain.style.opacity = '0.7';
        parts.seam.style.opacity = '0.55';

        // Function to open panels (OUT animation only)
        const openPanels = () => {
          const cleanup = () => {
            parts.overlay.remove();
            document.documentElement.classList.remove('cloud-transition-active');
            document.body.classList.remove('cloud-transition-active');
            // Restore body visibility
            document.body.style.visibility = '';
            document.body.style.background = '';
            // Remove any flash prevention styles
            const immediateHide = document.getElementById('cloud-transition-immediate-hide');
            if (immediateHide) immediateHide.remove();
            // Remove the placeholder if it still exists
            const placeholder = document.getElementById('cloud-placeholder');
            if (placeholder) placeholder.remove();
            // Also remove document.write style if present (no ID)
            const allStyles = document.querySelectorAll('style');
            allStyles.forEach(s => {
              if (s.textContent && s.textContent.includes('visibility:hidden') && s.textContent.includes('background:#050914')) {
                s.remove();
              }
            });
            state.isTransitioning = false;
          };

          if (isLowEnd || isMobile) {
            // CSS-based OUT animation only
            const dur = '1.1s';
            const ease = 'cubic-bezier(0.76,0,0.24,1)';
            [parts.panelLeft, parts.panelRight].forEach(p => {
              p.style.transition = `transform ${dur} ${ease}, filter ${dur} ${ease}`;
            });
            parts.panelLeft.style.transform = 'translateX(-108%) rotate(-1deg)';
            parts.panelRight.style.transform = 'translateX(108%) rotate(1deg)';
            parts.grain.style.opacity = '0';
            parts.seam.style.opacity = '0';
            setTimeout(cleanup, 1200);
          } else {
            // JS-based OUT animation only - start from closed and open
            runHighEndTransitionOutOnly(parts.panelLeft, parts.panelRight, parts.grain, parts.seam, cleanup);
          }
        };

        // Wait for the page to fully load all assets before starting the out transition
        // This ensures a smooth reveal of the complete page
        const startOutTransition = () => {
          // Small buffer after load event for any post-render work
          setTimeout(openPanels, 50);
        };

        if (document.readyState === 'complete') {
          // Page already fully loaded
          startOutTransition();
        } else {
          // Wait for all assets to load
          window.addEventListener('load', startOutTransition, { once: true });
          // Fallback in case load event stalls (4 seconds max wait)
          setTimeout(startOutTransition, 4000);
        }
      });
    }
  };

  /* ═══════════════════════════════════════════════════════════
     NAVIGATION INTERCEPTION
  ═══════════════════════════════════════════════════════════ */
  const navigation = {
    shouldInterceptLink(anchor, event) {
      if (!anchor || state.isNavigating) {
        return false;
      }

      if (event.defaultPrevented) {
        return false;
      }

      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return false;
      }

      const hrefAttr = anchor.getAttribute('href');

      if (!hrefAttr || hrefAttr.startsWith('#') || hrefAttr.startsWith('mailto:') || hrefAttr.startsWith('tel:')) {
        return false;
      }

      if (anchor.hasAttribute('download') || anchor.target === '_blank' || anchor.getAttribute('rel') === 'external') {
        return false;
      }

      let url;
      try {
        url = new URL(anchor.href, window.location.href);
      } catch (err) {
        return false;
      }

      if (url.origin !== window.location.origin) {
        return false;
      }

      const current = utils.normalizePath(window.location.pathname);
      const next = utils.normalizePath(url.pathname);

      if (current === next && url.hash) {
        return false;
      }

      return true;
    },

    init() {
      // Preload cloud image on page load
      transition.preloadCloudImage();

      document.addEventListener('click', (event) => {
        const target = event.target;
        const anchor = target && target.closest ? target.closest('a[href]') : null;

        if (!this.shouldInterceptLink(anchor, event)) {
          return;
        }

        event.preventDefault();
        transition.playExitTransition(anchor.href);
      }, true);
    }
  };

  /* ═══════════════════════════════════════════════════════════
     INITIALIZATION
  ═══════════════════════════════════════════════════════════ */
  function init() {
    styles.inject();
    navigation.init();

    // Check if we need to play entry transition (came from another page with transition)
    // Delay slightly to ensure DOM is ready and any other scripts have initialized
    setTimeout(() => {
      transition.playEntryTransition();

      // Safety fallback: ensure body is visible after transition completes or times out
      setTimeout(() => {
        document.body.style.visibility = '';
        const immediateHide = document.getElementById('cloud-transition-immediate-hide');
        if (immediateHide) immediateHide.remove();
        const placeholder = document.getElementById('cloud-placeholder');
        if (placeholder) placeholder.remove();
        // Also remove document.write style if present
        const allStyles = document.querySelectorAll('style');
        allStyles.forEach(s => {
          if (s.textContent && s.textContent.includes('visibility:hidden') && s.textContent.includes('background:#050914')) {
            s.remove();
          }
        });
        document.documentElement.classList.remove('cloud-transition-active');
        document.body.classList.remove('cloud-transition-active');
      }, 3000);
    }, 50);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }

  // Expose API
  window.PersevTransitions = {
    init,
    playExitTransition: transition.playExitTransition.bind(transition),
    playEntryTransition: transition.playEntryTransition.bind(transition)
  };
})();
