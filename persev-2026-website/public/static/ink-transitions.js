(function () {
  'use strict';

  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  const isMobileWebKit =
    /iP(hone|od|ad)/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

  const NAV_KEY = 'persev_ink_navigation_pending';

  const state = {
    active: false,
    canvas: null,
    context: null,
    frameId: 0,
    fallbackTimer: 0,
    resizeHandler: null
  };

  const config = {
    outDuration: 420,
    inDuration: 420,
    background: '#111111',
    easing: createBezier(0.22, 1, 0.36, 1)
  };

  function createBezier(x1, y1, x2, y2) {
    const sampleCount = 11;
    const step = 1 / (sampleCount - 1);
    const sampleValues = new Float32Array(sampleCount);

    function calcBezier(t, a1, a2) {
      const c = 3 * a1;
      const b = 3 * (a2 - a1) - c;
      const a = 1 - c - b;
      return ((a * t + b) * t + c) * t;
    }

    function getSlope(t, a1, a2) {
      const c = 3 * a1;
      const b = 3 * (a2 - a1) - c;
      const a = 1 - c - b;
      return (3 * a * t + 2 * b) * t + c;
    }

    for (let index = 0; index < sampleCount; index += 1) {
      sampleValues[index] = calcBezier(index * step, x1, x2);
    }

    return function bezier(t) {
      if (t <= 0) return 0;
      if (t >= 1) return 1;

      let intervalStart = 0;
      let currentSample = 1;
      const lastSample = sampleCount - 1;

      for (; currentSample !== lastSample && sampleValues[currentSample] <= t; currentSample += 1) {
        intervalStart += step;
      }
      currentSample -= 1;

      const dist = (t - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
      let guess = intervalStart + dist * step;

      for (let iteration = 0; iteration < 4; iteration += 1) {
        const slope = getSlope(guess, x1, x2);
        if (slope === 0) {
          return calcBezier(guess, y1, y2);
        }
        const currentX = calcBezier(guess, x1, x2) - t;
        guess -= currentX / slope;
      }

      return calcBezier(guess, y1, y2);
    };
  }

  function ensureStyles() {
    if (document.getElementById('ink-transition-styles')) {
      return;
    }

    const style = document.createElement('style');
    style.id = 'ink-transition-styles';
    style.textContent = `
      html.ink-transition-active,
      body.ink-transition-active {
        overflow: hidden;
        overscroll-behavior: none;
        touch-action: none;
      }

      body.ink-transition-active {
        pointer-events: none;
      }

      #ink-transition-canvas {
        position: fixed;
        inset: 0;
        z-index: 10000;
        pointer-events: none;
        display: block;
        width: 100vw;
        height: 100vh;
      }
    `;
    document.head.appendChild(style);
  }

  function hasPendingEntry() {
    try {
      const raw = sessionStorage.getItem(NAV_KEY);
      if (!raw) {
        return false;
      }

      const data = JSON.parse(raw);
      if (!data || !data.timestamp || Date.now() - data.timestamp > 20000) {
        sessionStorage.removeItem(NAV_KEY);
        return false;
      }

      sessionStorage.removeItem(NAV_KEY);
      return true;
    } catch (error) {
      return false;
    }
  }

  function savePendingEntry(href) {
    try {
      sessionStorage.setItem(NAV_KEY, JSON.stringify({
        href,
        timestamp: Date.now()
      }));
    } catch (error) {
      void error;
    }
  }

  function shouldIntercept(anchor, event) {
    if (!anchor || state.active || isMobileWebKit) {
      return false;
    }

    if (event && (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)) {
      return false;
    }

    const hrefAttr = anchor.getAttribute('href') || '';
    if (!hrefAttr || hrefAttr.startsWith('#') || hrefAttr.startsWith('mailto:') || hrefAttr.startsWith('tel:')) {
      return false;
    }

    if (anchor.hasAttribute('download') || anchor.target === '_blank' || anchor.getAttribute('rel') === 'external') {
      return false;
    }

    let url;
    try {
      url = new URL(anchor.href, window.location.href);
    } catch (error) {
      return false;
    }

    if (url.origin !== window.location.origin) {
      return false;
    }

    const currentUrl = new URL(window.location.href);
    if (url.pathname === currentUrl.pathname && url.hash) {
      return false;
    }

    return true;
  }

  function createCanvas() {
    const canvas = document.createElement('canvas');
    canvas.id = 'ink-transition-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    document.body.appendChild(canvas);
    state.canvas = canvas;
    state.context = canvas.getContext('2d');
    resizeCanvas();
    state.resizeHandler = resizeCanvas;
    window.addEventListener('resize', state.resizeHandler, { passive: true });
    return canvas;
  }

  function resizeCanvas() {
    if (!state.canvas || !state.context) {
      return;
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    state.canvas.width = Math.ceil(window.innerWidth * dpr);
    state.canvas.height = Math.ceil(window.innerHeight * dpr);
    state.canvas.style.width = '100vw';
    state.canvas.style.height = '100vh';
    state.context.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function drawFade(progress) {
    const context = state.context;
    if (!context) {
      return;
    }

    const width = window.innerWidth;
    const height = window.innerHeight;
    const eased = config.easing(progress);

    context.clearRect(0, 0, width, height);
    context.globalAlpha = eased;
    context.fillStyle = config.background;
    context.fillRect(0, 0, width, height);
    context.globalAlpha = 1;
  }

  function teardown() {
    if (state.frameId) {
      window.cancelAnimationFrame(state.frameId);
    }
    window.clearTimeout(state.fallbackTimer);

    if (state.resizeHandler) {
      window.removeEventListener('resize', state.resizeHandler);
    }

    if (state.canvas && state.canvas.parentNode) {
      state.canvas.parentNode.removeChild(state.canvas);
    }

    state.active = false;
    state.canvas = null;
    state.context = null;
    state.frameId = 0;
    state.resizeHandler = null;
    document.documentElement.classList.remove('ink-transition-active');
    if (document.body) {
      document.body.classList.remove('ink-transition-active');
    }
  }

  function completeNavigation(href) {
    if (href) {
      window.location.href = href;
    }
  }

  function playExitTransition(href) {
    if (!href || state.active) {
      return;
    }

    if (isMobileWebKit || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      completeNavigation(href);
      return;
    }

    state.active = true;
    ensureStyles();
    document.documentElement.classList.add('ink-transition-active');
    document.body.classList.add('ink-transition-active');
    createCanvas();
    savePendingEntry(href);

    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min(1, (now - startTime) / config.outDuration);
      drawFade(progress, 'cover');

      if (progress < 1) {
        state.frameId = window.requestAnimationFrame(step);
        return;
      }

      completeNavigation(href);
    };

    state.frameId = window.requestAnimationFrame(step);
    state.fallbackTimer = window.setTimeout(() => completeNavigation(href), config.outDuration + 500);
  }

  function playEntryTransition() {
    if (state.active || isMobileWebKit || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    state.active = true;
    ensureStyles();
    document.documentElement.classList.add('ink-transition-active');
    if (document.body) {
      document.body.classList.add('ink-transition-active');
    }
    createCanvas();
    drawFade(1, 'reveal');

    const startTime = performance.now();

    const step = (now) => {
      const rawProgress = Math.min(1, (now - startTime) / config.inDuration);
      drawFade(1 - rawProgress, 'reveal');

      if (rawProgress < 1) {
        state.frameId = window.requestAnimationFrame(step);
        return;
      }

      teardown();
    };

    state.frameId = window.requestAnimationFrame(step);
    state.fallbackTimer = window.setTimeout(teardown, config.inDuration + 500);
  }

  function playEntryAfterLoaderIfNeeded() {
    if (!hasPendingEntry()) {
      return;
    }

    const run = () => window.setTimeout(playEntryTransition, 80);

    if (window.__PersevLoader && window.__PersevLoader.isActive && window.__PersevLoader.isActive()) {
      window.addEventListener('persev-loader-complete', run, { once: true });
    } else {
      run();
    }
  }

  function init() {
    document.addEventListener('click', (event) => {
      const target = event.target;
      const anchor = target && target.closest ? target.closest('a[href]') : null;

      if (!shouldIntercept(anchor, event)) {
        return;
      }

      event.preventDefault();
      playExitTransition(anchor.href);
    }, true);

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', playEntryAfterLoaderIfNeeded, { once: true });
    } else {
      playEntryAfterLoaderIfNeeded();
    }
  }

  window.PersevTransitions = {
    init,
    playExitTransition,
    playEntryTransition
  };

  init();
})();
