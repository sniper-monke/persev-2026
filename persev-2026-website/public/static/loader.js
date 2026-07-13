import { initParticles } from './particles.js';

const LOADER_QUOTES = [
  { text: 'Nothing ever really goes away--it just changes into something else. Something beautiful.', author: '\u2014 Sarah Ockler' },
  { text: 'A story only matters to the extent that the people in the story change.', author: '\u2014 Neil Gaiman' },
  { text: 'We are all butterflies. Earth is our chrysalis.', author: '\u2014 LeeAnn Taylor' },
  { text: 'Metamorphosis is the most profound of all acts.', author: '\u2014 Catherynne M. Valente' },
  { text: 'When, at last, I ceased to be myself, I came to be.', author: '\u2014 Kamand Kojouri' },
  { text: 'Even now, I still believe metamorphosis is the greatest beauty.', author: '\u2014 David Vann' },
  { text: 'A changed soul, a forgiven heart, a journey of transformation.', author: '\u2014 Chimnese Davids' },
  { text: 'You were made for metamorphosis.', author: '\u2014 Jeanette LeBlanc' },
  { text: 'It actually buries itself in darkness and grows those wings.', author: '\u2014 C. JoyBell C.' },
  { text: 'The books we need are of the kind that act upon us like a misfortune.', author: '\u2014 Franz Kafka' }
];

const BUTTERFLY_SWARM_COLORS = [
  ['#f7fbff', '#ffffff'],
  ['#e7f0ff', '#f8fbff'],
  ['#d8e6ff', '#eff6ff'],
  ['#c9dbff', '#e8f1ff']
];

const isMobileWebKit =
  /iP(hone|od|ad)/.test(navigator.userAgent) ||
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

const state = {
  active: false,
  mounted: false,
  quoteIndex: 0,
  quoteDeck: [],
  timers: [],
  settleTimer: 0,
  teardownTimer: 0
};

function shuffleQuotes() {
  const deck = LOADER_QUOTES.map((_, index) => index);

  for (let index = deck.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    const temp = deck[index];
    deck[index] = deck[swapIndex];
    deck[swapIndex] = temp;
  }

  state.quoteDeck = deck;
}

function nextQuoteIndex() {
  if (!state.quoteDeck.length) {
    shuffleQuotes();
  }

  return state.quoteDeck.shift();
}

function ensureStyles() {
  if (document.getElementById('persev-loader-styles')) {
    return;
  }

  const style = document.createElement('style');
  style.id = 'persev-loader-styles';
  style.textContent = `
    html.loader-pending body {
      background: #04040e;
    }

    html.loader-pending body > :not(.persev-loader-root) {
      visibility: hidden !important;
    }

    body.loader-active {
      overflow: hidden;
      overscroll-behavior: none;
    }

    .persev-loader-root {
      position: fixed;
      inset: 0;
      z-index: 10001;
      background: #04040e;
      color: #eff3ff;
      opacity: 1;
      transition: opacity 500ms ease;
      overflow: hidden;
      isolation: isolate;
    }

    .persev-loader-root.is-fading-out {
      opacity: 0;
    }

    .persev-loader-particles {
      position: absolute;
      inset: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
      display: block;
      pointer-events: none;
      opacity: 1;
      transition: opacity 400ms ease;
    }

    .persev-loader-root::before {
      content: '';
      position: absolute;
      inset: 0;
      z-index: 0;
      pointer-events: none;
      background:
        radial-gradient(circle at 24% 20%, rgba(67, 119, 170, 0.13), transparent 32%),
        radial-gradient(circle at 76% 78%, rgba(112, 157, 197, 0.09), transparent 34%),
        #04040e;
    }

    .persev-loader-stage {
      position: absolute;
      inset: 0;
      z-index: 2;
      pointer-events: none;
    }

    .persev-loader-accent {
      position: absolute;
      width: 20px;
      height: 20px;
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 0;
    }

    .persev-loader-accent--tl {
      top: 12px;
      left: 12px;
      border-right: 0;
      border-bottom: 0;
    }

    .persev-loader-accent--br {
      right: 12px;
      bottom: 12px;
      border-left: 0;
      border-top: 0;
    }

    .persev-loader-motion {
      position: absolute;
      top: 50%;
      left: 50%;
      width: min(48vw, 460px);
      height: min(48vw, 460px);
      transform: translate(-50%, -50%);
      pointer-events: none;
      overflow: visible;
    }

    .persev-loader-motion::before {
      content: '';
      position: absolute;
      inset: 18%;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.14), transparent 68%);
      filter: blur(12px);
      opacity: 0.85;
    }

    .persev-loader-butterfly {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 74px;
      height: 74px;
      transform: translate(-50%, -50%);
      will-change: transform, opacity, filter;
      pointer-events: none;
      filter: drop-shadow(0 0 16px rgba(255, 255, 255, 0.34))
        drop-shadow(0 0 28px rgba(190, 210, 255, 0.2));
    }

    .persev-loader-butterfly svg {
      width: 100%;
      height: 100%;
      overflow: visible;
      display: block;
    }

    .persev-loader-butterfly .wing {
      transform-origin: center;
      animation: persev-loader-flap 2.6s ease-in-out infinite;
    }

    .persev-loader-butterfly .wing.right {
      animation-delay: 0.08s;
    }

    .persev-loader-butterfly .body {
      transform-origin: center;
    }

    @keyframes persev-loader-flap {
      0%,
      100% {
        transform: scaleX(1);
      }

      50% {
        transform: scaleX(0.74);
      }
    }

    .persev-loader-quote {
      position: absolute;
      right: 22px;
      bottom: 22px;
      z-index: 2;
      max-width: min(44vw, 360px);
      text-align: right;
    }

    .persev-loader-quote__text {
      margin: 0;
      font-family: Georgia, 'Times New Roman', serif;
      font-size: clamp(16px, 1.7vw, 23px);
      line-height: 1.45;
      font-style: italic;
      color: rgba(255, 255, 255, 0.94);
      opacity: 0;
      transform: translateY(8px);
      transition: opacity 680ms ease, transform 680ms ease;
    }

    .persev-loader-quote__author {
      margin-top: 8px;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 12px;
      letter-spacing: 0.1em;
      font-style: normal;
      color: rgba(255, 255, 255, 0.68);
      opacity: 0;
      transform: translateY(8px);
      transition: opacity 680ms ease 120ms, transform 680ms ease 120ms;
    }

    .persev-loader-quote[data-visible='true'] .persev-loader-quote__text {
      opacity: 1;
      transform: translateY(0);
    }

    .persev-loader-quote[data-visible='true'] .persev-loader-quote__author {
      opacity: 1;
      transform: translateY(0);
    }

    .persev-loader-quote[data-visible='false'] {
      --author-delay: 0ms;
    }
  `;
  document.head.appendChild(style);
}

function createLoaderDom() {
  const root = document.createElement('div');
  root.className = 'persev-loader-root';
  root.setAttribute('aria-hidden', 'true');

  const particles = document.createElement('canvas');
  particles.id = 'loader-particle-canvas';
  particles.className = 'persev-loader-particles';

  const stage = document.createElement('div');
  stage.className = 'persev-loader-stage';

  const accentTopLeft = document.createElement('div');
  accentTopLeft.className = 'persev-loader-accent persev-loader-accent--tl';

  const accentBottomRight = document.createElement('div');
  accentBottomRight.className = 'persev-loader-accent persev-loader-accent--br';

  const motion = document.createElement('div');
  motion.className = 'persev-loader-motion';

  const quote = document.createElement('div');
  quote.className = 'persev-loader-quote';
  quote.dataset.visible = 'false';

  const quoteText = document.createElement('p');
  quoteText.className = 'persev-loader-quote__text';

  const quoteAuthor = document.createElement('div');
  quoteAuthor.className = 'persev-loader-quote__author';

  quote.appendChild(quoteText);
  quote.appendChild(quoteAuthor);
  stage.appendChild(accentTopLeft);
  stage.appendChild(accentBottomRight);
  stage.appendChild(motion);
  stage.appendChild(quote);
  root.appendChild(particles);
  root.appendChild(stage);

  return { root, particles, motion, quote, quoteText, quoteAuthor };
}

function preloadImage(url) {
  return new Promise((resolve) => {
    const image = new Image();
    image.decoding = 'async';
    image.loading = 'eager';
    image.onload = () => resolve(url);
    image.onerror = () => resolve(null);
    image.src = url;
  });
}

function candidateImageUrls(url) {
  if (!url || typeof url !== 'string') {
    return [];
  }

  const urls = [url];
  if (/\.(png|jpe?g|webp)(\?|$)/i.test(url)) {
    urls.push(url.replace(/\.(png|jpe?g|webp)(\?|$)/i, '.avif$2'));
  }
  return [...new Set(urls)];
}

async function preloadEventImages() {
  try {
    const response = await fetch('/config.json', { cache: 'force-cache' });
    if (!response.ok) {
      return;
    }

    const config = await response.json();
    const website = config.website || config || {};
    const events = Array.isArray(website.events) ? website.events : Array.isArray(config.events) ? config.events : [];
    const imageUrls = new Set();

    events.forEach((event) => {
      const baseUrl = event && (event.logo || event.eventHeadPhoto || event.image);
      candidateImageUrls(baseUrl).forEach((url) => imageUrls.add(url));
    });

    await Promise.all([...imageUrls].map((url) => preloadImage(url)));
  } catch (error) {
    void error;
  }
}

async function preloadAssets() {
  await preloadEventImages();
}

function startQuoteCycle(view) {
  const cycleMs = 5500;
  const fadeOutMs = 800;
  const initialDelayMs = 300;
  const visibleDurationMs = cycleMs - fadeOutMs;

  const showQuote = (index) => {
    if (!state.active) {
      return;
    }

    state.quoteIndex = index % LOADER_QUOTES.length;
    const quote = LOADER_QUOTES[state.quoteIndex];
    view.quoteText.textContent = quote.text;
    view.quoteAuthor.textContent = quote.author;
    view.quote.dataset.visible = 'true';

    const fadeTimer = window.setTimeout(() => {
      if (!state.active) {
        return;
      }

      view.quote.dataset.visible = 'false';

      const swapTimer = window.setTimeout(() => {
        showQuote(nextQuoteIndex());
      }, fadeOutMs);

      state.timers.push(swapTimer);
    }, visibleDurationMs);

    state.timers.push(fadeTimer);
  };

  shuffleQuotes();
  state.timers.push(window.setTimeout(() => showQuote(nextQuoteIndex()), initialDelayMs));
}

function butterflySVG(color, accent, id) {
  const safeId = String(id).replace(/[^a-zA-Z0-9_-]/g, '');
  return `
    <svg viewBox="-60 -60 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="${safeId}" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${color}" stop-opacity="0.96" />
          <stop offset="100%" stop-color="${color}" stop-opacity="0.56" />
        </linearGradient>
      </defs>
      <g class="wing left">
        <polygon points="-2,-8 -42,-40 -48,-10 -30,10 -5,5" fill="url(#${safeId})" stroke="${accent}" stroke-width="0.6" stroke-opacity="0.6" />
        <polygon points="-5,5 -30,10 -38,34 -12,28 -2,10" fill="${color}" fill-opacity="0.65" stroke="${accent}" stroke-width="0.5" stroke-opacity="0.5" />
        <polygon points="-2,-8 -42,-40 -20,-20 -5,-5" fill="${accent}" fill-opacity="0.15" stroke="${accent}" stroke-width="0.4" stroke-opacity="0.35" />
      </g>
      <g class="wing right">
        <polygon points="2,-8 42,-40 48,-10 30,10 5,5" fill="url(#${safeId})" stroke="${accent}" stroke-width="0.6" stroke-opacity="0.6" />
        <polygon points="5,5 30,10 38,34 12,28 2,10" fill="${color}" fill-opacity="0.65" stroke="${accent}" stroke-width="0.5" stroke-opacity="0.5" />
        <polygon points="2,-8 42,-40 20,-20 5,-5" fill="${accent}" fill-opacity="0.15" stroke="${accent}" stroke-width="0.4" stroke-opacity="0.35" />
      </g>
      <g class="body">
        <ellipse cx="0" cy="2" rx="6.5" ry="18" fill="#1e2740" fill-opacity="0.92" />
        <circle cx="0" cy="-20" r="4.2" fill="#2b3552" fill-opacity="0.96" />
        <path d="M -1 -19 C -12 -30, -16 -41, -10 -50" fill="none" stroke="${accent}" stroke-width="1.1" stroke-linecap="round" stroke-opacity="0.8" />
        <path d="M 1 -19 C 12 -30, 16 -41, 10 -50" fill="none" stroke="${accent}" stroke-width="1.1" stroke-linecap="round" stroke-opacity="0.8" />
      </g>
    </svg>
  `;
}

function pickButterflyPalette(index) {
  return BUTTERFLY_SWARM_COLORS[index % BUTTERFLY_SWARM_COLORS.length];
}

function startButterflyLoop(view) {
  const motion = view.motion;
  const butterflies = new Set();
  const burstTimers = new Set();
  const maxButterflies = isMobileWebKit ? 10 : 18;
  const burstSize = isMobileWebKit ? 1 : 2;
  let timerId = 0;
  let butterflyId = 0;

  function removeButterfly(node) {
    butterflies.delete(node);
    node.remove();
  }

  function spawnButterfly() {
    if (!state.active || butterflies.size >= maxButterflies) {
      return;
    }

    const butterfly = document.createElement('div');
    butterfly.className = 'persev-loader-butterfly';

    const [color, accent] = pickButterflyPalette(butterflyId);
    butterfly.innerHTML = butterflySVG(color, accent, `persev-loader-bf-${butterflyId}`);

    const startX = (Math.random() - 0.5) * 120;
    const startY = 130 + Math.random() * 70;
    const driftX = (Math.random() - 0.5) * 220;
    const driftY = -220 - Math.random() * 140;
    const wobbleX = (Math.random() - 0.5) * 60;
    const wobbleY = (Math.random() - 0.5) * 40;
    const startScale = 0.12 + Math.random() * 0.22;
    const endScale = 0.72 + Math.random() * 0.48;
    const rotateStart = -40 + Math.random() * 80;
    const rotateEnd = rotateStart + (Math.random() > 0.5 ? 130 : -130);
    const duration = 3200 + Math.random() * 2200;

    butterfly.style.opacity = '0';
    butterfly.style.filter = `drop-shadow(0 0 14px rgba(255, 255, 255, ${0.28 + Math.random() * 0.18})) drop-shadow(0 0 26px rgba(190, 210, 255, 0.16))`;
    motion.appendChild(butterfly);
    butterflies.add(butterfly);
    butterflyId += 1;

    const animation = butterfly.animate([
      {
        opacity: 0,
        transform: `translate(calc(-50% + ${startX}px), calc(-50% + ${startY}px)) translate3d(0, 24px, 0) scale(${startScale}) rotate(${rotateStart}deg)`
      },
      {
        offset: 0.12,
        opacity: 1,
        transform: `translate(calc(-50% + ${startX + wobbleX}px), calc(-50% + ${startY + wobbleY}px)) translate3d(0, 0, 0) scale(${Math.max(0.52, endScale * 0.76)}) rotate(${rotateStart * 0.4}deg)`
      },
      {
        opacity: 0,
        transform: `translate(calc(-50% + ${startX + driftX}px), calc(-50% + ${startY + driftY}px)) translate3d(0, -36px, 0) scale(${endScale}) rotate(${rotateEnd}deg)`
      }
    ], {
      duration,
      easing: 'cubic-bezier(0.22, 0.82, 0.16, 1)',
      fill: 'forwards'
    });

    animation.onfinish = () => removeButterfly(butterfly);
    animation.oncancel = () => removeButterfly(butterfly);
  }

  function scheduleBurst() {
    if (!state.active) {
      return;
    }

    for (let count = 0; count < burstSize; count += 1) {
      const burstTimer = window.setTimeout(() => spawnButterfly(), count * 120);
      burstTimers.add(burstTimer);
      state.timers.push(burstTimer);
    }

    timerId = window.setTimeout(scheduleBurst, 220 + Math.random() * 220);
    state.timers.push(timerId);
  }

  scheduleBurst();

  return {
    stop() {
      window.clearTimeout(timerId);
      burstTimers.forEach((id) => window.clearTimeout(id));
      burstTimers.clear();
      butterflies.forEach((node) => node.remove());
      butterflies.clear();
    }
  };
}

function cleanupLoader(view, particleController, butterflyController) {
  if (!state.active) {
    return;
  }

  state.active = false;
  state.timers.forEach((timerId) => window.clearTimeout(timerId));
  state.timers = [];
  window.clearTimeout(state.settleTimer);
  window.clearTimeout(state.teardownTimer);

  if (butterflyController && typeof butterflyController.stop === 'function') {
    butterflyController.stop();
  }
  particleController.stop({ fadeOutMs: 400 });
  view.root.classList.add('is-fading-out');

  state.teardownTimer = window.setTimeout(() => {
    view.root.remove();
    document.documentElement.classList.remove('loader-pending');
    document.body.classList.remove('loader-active');
    document.body.style.visibility = '';
    window.dispatchEvent(new CustomEvent('persev-loader-complete'));
  }, 500);
}

async function initLoader() {
  if (state.mounted || typeof document === 'undefined' || typeof window === 'undefined') {
    return;
  }

  state.mounted = true;

  ensureStyles();

  document.documentElement.classList.add('loader-pending');
  document.body.classList.add('loader-active');

  const view = createLoaderDom();
  document.body.appendChild(view.root);
  const mountedAt = performance.now();

  let particleController, butterflyController;
  if (view) {
    particleController = initParticles(view.particles, 160, {
      hueMin: 190,
      hueMax: 240,
      satMin: 50,
      satMax: 65,
      litMin: 55,
      litMax: 70,
      rMin: 0.4,
      rMax: 2.4,
      speedMin: 0.004,
      speedMax: 0.012,
      opacityMin: 0.38,
      opacityMax: 0.9
    });

    state.active = true;
    if (isMobileWebKit) {
      view.particles.style.display = 'none';
    } else {
      particleController.start();
    }
    butterflyController = startButterflyLoop(view);
    startQuoteCycle(view);
  }

  const loadPromise = document.readyState === 'complete'
    ? Promise.resolve()
    : new Promise((resolve) => window.addEventListener('load', resolve, { once: true }));

  await Promise.all([preloadAssets(), loadPromise]);

  const isEventsPage = /events\.html$/.test(location.pathname) || location.pathname === '/events.html';

  const dismissLoader = () => {
    cleanupLoader(view, particleController, butterflyController);
  };

  const minVisibleMs = Math.max(3000, Number(window.__PERSEV_LOADER_MIN_MS || 0));
  const remainingVisibleMs = Math.max(0, minVisibleMs - (performance.now() - mountedAt));

  if (isEventsPage && !window.__PERSEV_CAROUSEL_READY) {
    const carouselTimeout = window.setTimeout(() => {
      state.settleTimer = window.setTimeout(dismissLoader, 300);
    }, 15000);

    const onReady = () => {
      window.clearTimeout(carouselTimeout);
      window.removeEventListener('persev-carousel-ready', onReady);
      const extraWait = Math.max(0, remainingVisibleMs - (performance.now() - mountedAt));
      state.settleTimer = window.setTimeout(dismissLoader, 300 + extraWait);
    };

    window.addEventListener('persev-carousel-ready', onReady, { once: true });

    state.timers.push(carouselTimeout);
  } else {
    state.settleTimer = window.setTimeout(dismissLoader, 300 + remainingVisibleMs);
  }
}

if (typeof window !== 'undefined') {
  window.__PersevLoader = {
    init: initLoader,
    isActive() {
      return state.active;
    }
  };

  initLoader().catch((error) => {
    void error;
    document.documentElement.classList.remove('loader-pending');
    document.body.classList.remove('loader-active');
    document.body.style.visibility = '';
  });
}
