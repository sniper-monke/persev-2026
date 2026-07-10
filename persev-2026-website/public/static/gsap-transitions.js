/**
 * Shared page-transition system for the Perseverantia site.
 *
 * Internal module layout (single file):
 * - runtime: environment, guards, shared state
 * - routing: page keys, route profiles, page node lookup
 * - styles: one-time transition style injection
 * - overlay: particle DOM factory + mode choreography
 * - enter: per-page entrance choreography
 * - navigation: click interception and exit handoff
 */

(function () {
  'use strict';

  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  if (typeof window.gsap === 'undefined') {
    console.warn('GSAP not loaded, transitions disabled');
    return;
  }

  const gsap = window.gsap;

  if (window.ScrollTrigger) {
    gsap.registerPlugin(window.ScrollTrigger);
  }

  const CONFIG = {
    navFallbackMs: 3600,
    pageLoadDelayMs: 180
  };

  const PARTICLE_COUNTS = {
    stars: 12,
    clouds: 8,
    lines: 5,
    rings: 2,
    shards: 8
  };

  const PAGE_META = {
    index: {
      label: 'Home',
      overlay: 'sky',
      selectors: ['#root', '#vanta-clouds', '.toormix-nav'],
      accent: '#8fb7ff'
    },
    leaderboard: {
      label: 'Leaderboard',
      overlay: 'cosmos',
      selectors: ['.leaderboard-frame', 'iframe.leaderboard-frame', '.toormix-nav'],
      accent: '#d8ecff'
    },
    events: {
      label: 'Events',
      overlay: 'gallery',
      selectors: ['main', '#events-root', '.events-react-root', '.toormix-nav', 'footer'],
      accent: '#ffca68'
    },
    organizingCommittee: {
      label: 'Organizing Committee',
      overlay: 'assembly',
      selectors: ['main', '.presidents-container', '.department-section', '.toormix-nav', 'footer'],
      accent: '#f0c56d'
    },
    links: {
      label: 'Links',
      overlay: 'portal',
      selectors: ['main', '.link-button', '.toormix-nav', 'footer'],
      accent: '#ffd978'
    },
    locations: {
      label: 'Locations',
      overlay: 'signal',
      selectors: ['.locations-stage', '.coming-soon-container', '.toormix-nav'],
      accent: '#6fe4ff'
    }
  };

  const state = {
    isNavigating: false
  };

  const utils = {
    random(min, max) {
      return Math.random() * (max - min) + min;
    },
    prefersReducedMotion() {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    },
    normalizePath(pathname) {
      if (!pathname || pathname === '/') {
        return '/';
      }
      return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
    },
    uniqueNodes(nodes) {
      return Array.from(new Set(nodes.filter(Boolean)));
    }
  };

  const runtime = {
    applyStablePageBackground() {
      const stableBg = '#050914';

      if (document.documentElement) {
        document.documentElement.style.backgroundColor = stableBg;
      }

      if (document.body) {
        document.body.style.backgroundColor = stableBg;
      }
    },

    revealIndexBaseState() {
      const vantaContainer = document.getElementById('vanta-clouds');
      const vantaCanvas = document.querySelector('#vanta-clouds canvas');
      const root = document.getElementById('root');
      const nav = document.querySelector('.toormix-nav');

      if (vantaContainer) {
        vantaContainer.style.visibility = 'visible';
        vantaContainer.style.opacity = '1';
      }

      if (vantaCanvas) {
        vantaCanvas.style.visibility = 'visible';
        vantaCanvas.style.opacity = '1';
      }

      if (root) {
        root.style.visibility = 'visible';
        root.style.opacity = '1';
      }

      if (nav) {
        nav.style.visibility = 'visible';
        nav.style.opacity = '1';
      }
    },

    safeNavRevealFallback() {
      const nav = document.querySelector('.toormix-nav');
      if (!nav) {
        return;
      }

      window.setTimeout(function () {
        nav.style.visibility = 'visible';
        nav.style.opacity = '1';
      }, CONFIG.navFallbackMs);
    }
  };

  const routing = (function () {
    function resolveTransitionKey(pathname) {
      const path = utils.normalizePath((pathname || '').toLowerCase());

      if (path.includes('leaderboard')) return 'leaderboard';
      if (path.includes('events')) return 'events';
      if (path.includes('organizing-committee')) return 'organizingCommittee';
      if (path.includes('links')) return 'links';
      if (path.includes('locations')) return 'locations';
      if (path === '/' || path.endsWith('/index.html')) return 'index';

      return 'index';
    }

    function getPageElements(key) {
      const selectors = (PAGE_META[key] && PAGE_META[key].selectors) || ['main', 'body'];
      const nodes = selectors.flatMap(function (selector) {
        return Array.from(document.querySelectorAll(selector));
      });
      const unique = utils.uniqueNodes(nodes);

      return unique.length ? unique : [document.body];
    }

    function getRouteProfile(fromKey, toKey) {
      const routeKey = fromKey + '->' + toKey;
      const nextMeta = PAGE_META[toKey] || PAGE_META.index;

      const profiles = {
        'index->leaderboard': { mode: 'cosmos', moveY: -18, scale: 0.989, blur: 2.8, rotateY: -13, rotateX: 1.1, rotateZ: 0, staggerFrom: 'center', duration: 2.05 },
        'leaderboard->index': { mode: 'sky', moveY: 16, scale: 0.989, blur: 2.8, rotateY: 13, rotateX: -1.1, rotateZ: 0, staggerFrom: 'center', duration: 2.05 },
        'index->events': { mode: 'gallery', moveX: -22, moveY: 6, scale: 0.99, blur: 2.8, rotateY: -10, rotateZ: -0.4, staggerFrom: 'start', duration: 1.92 },
        'events->index': { mode: 'sky', moveX: 18, moveY: 10, scale: 0.991, blur: 2.8, rotateY: 10, rotateZ: 0.3, staggerFrom: 'end', duration: 1.88 },
        'index->links': { mode: 'portal', moveY: 10, scale: 0.987, blur: 3, rotateY: -11, rotateX: 1.4, rotateZ: 0, staggerFrom: 'center', duration: 2.08 },
        'links->index': { mode: 'sky', moveY: 12, scale: 0.989, blur: 2.8, rotateY: 11, rotateX: -1.1, rotateZ: 0, staggerFrom: 'center', duration: 1.92 },
        'index->organizingCommittee': { mode: 'assembly', moveX: 14, moveY: 10, scale: 0.99, blur: 2.8, rotateY: -9, rotateX: 1.6, rotateZ: 0.2, staggerFrom: 'edges', duration: 1.98 },
        'organizingCommittee->index': { mode: 'sky', moveY: 12, scale: 0.991, blur: 2.8, rotateY: 9, rotateX: -1.0, rotateZ: -0.2, staggerFrom: 'edges', duration: 1.92 },
        'index->locations': { mode: 'signal', moveY: 8, scale: 0.988, blur: 3, rotateY: -10, rotateZ: 0, staggerFrom: 'center', duration: 2.08 },
        'locations->index': { mode: 'sky', moveY: 12, scale: 0.991, blur: 2.8, rotateY: 10, rotateZ: 0, staggerFrom: 'center', duration: 1.92 },
        'events->leaderboard': { mode: 'cosmos', moveY: -14, scale: 0.989, blur: 2.8, rotateY: -11, rotateX: 1.2, rotateZ: -0.3, staggerFrom: 'start', duration: 1.98 },
        'leaderboard->events': { mode: 'gallery', moveX: -18, moveY: 4, scale: 0.99, blur: 2.8, rotateY: 11, rotateZ: -0.35, staggerFrom: 'end', duration: 1.95 },
        'events->links': { mode: 'portal', moveY: 8, scale: 0.987, blur: 3, rotateY: -10, rotateX: 1.2, rotateZ: 0, staggerFrom: 'center', duration: 2.02 },
        'links->events': { mode: 'gallery', moveX: 20, moveY: 8, scale: 0.99, blur: 2.8, rotateY: 10, rotateZ: 0.45, staggerFrom: 'start', duration: 1.95 },
        'links->organizingCommittee': { mode: 'assembly', moveX: 16, moveY: 10, scale: 0.99, blur: 2.8, rotateY: -9, rotateX: 1.4, rotateZ: 0.15, staggerFrom: 'edges', duration: 1.95 },
        'organizingCommittee->links': { mode: 'portal', moveY: 8, scale: 0.987, blur: 3, rotateY: 9, rotateX: -1.0, rotateZ: 0, staggerFrom: 'center', duration: 2.02 },
        'organizingCommittee->leaderboard': { mode: 'cosmos', moveY: -12, scale: 0.989, blur: 2.8, rotateY: -10, rotateX: 1.2, rotateZ: -0.2, staggerFrom: 'edges', duration: 1.98 },
        'leaderboard->organizingCommittee': { mode: 'assembly', moveX: 12, moveY: 8, scale: 0.99, blur: 2.8, rotateY: 10, rotateX: -1.0, rotateZ: 0.2, staggerFrom: 'edges', duration: 1.95 },
        'locations->links': { mode: 'portal', moveY: 8, scale: 0.987, blur: 3, rotateY: -10, rotateX: 1.0, rotateZ: 0, staggerFrom: 'center', duration: 2.02 },
        'links->locations': { mode: 'signal', moveY: 6, scale: 0.988, blur: 3, rotateY: 10, rotateZ: 0, staggerFrom: 'random', duration: 2.0 },
        'events->locations': { mode: 'signal', moveX: 14, moveY: 0, scale: 0.988, blur: 3, rotateY: -9, rotateZ: -0.25, staggerFrom: 'start', duration: 1.95 },
        'locations->events': { mode: 'gallery', moveX: -18, moveY: 6, scale: 0.99, blur: 2.8, rotateY: 9, rotateZ: -0.35, staggerFrom: 'end', duration: 1.95 }
      };

      return profiles[routeKey] || {
        mode: nextMeta.overlay,
        moveX: 0,
        moveY: fromKey === 'leaderboard' ? -10 : 10,
        scale: fromKey === 'leaderboard' ? 0.99 : 0.987,
        blur: 2.8,
        rotateY: fromKey === 'index' ? -10 : 10,
        rotateX: fromKey === 'links' ? 1.6 : 0.8,
        rotateZ: 0,
        staggerFrom: 'center',
        duration: 2.0
      };
    }

    return {
      resolveTransitionKey: resolveTransitionKey,
      getPageElements: getPageElements,
      getRouteProfile: getRouteProfile
    };
  })();

  const styles = (function () {
    const STYLE_ID = 'persev-transition-styles';

    function ensureOverlayStyles() {
      if (document.getElementById(STYLE_ID)) {
        return;
      }

      const style = document.createElement('style');
      style.id = STYLE_ID;
      style.textContent = [
        '.persev-transition-overlay{position:fixed;inset:0;overflow:hidden;pointer-events:none;z-index:2147483640;opacity:0;backdrop-filter:blur(6px) saturate(0.98);-webkit-backdrop-filter:blur(6px) saturate(0.98);perspective:1400px;transform-style:preserve-3d;}',
        '.persev-transition-overlay::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 50% 40%,rgba(248,180,45,0.04),transparent 35%),radial-gradient(circle at 50% 50%,rgba(143,183,255,0.03),transparent 65%),linear-gradient(180deg,rgba(2,4,10,0.08),rgba(2,4,10,0.62));mix-blend-mode:multiply;opacity:.82;pointer-events:none;}',
        '.persev-transition-shell,.persev-transition-stars,.persev-transition-clouds,.persev-transition-grid,.persev-transition-rings,.persev-transition-shards,.persev-transition-curtains,.persev-transition-grain,.persev-transition-seam{position:absolute;inset:0;will-change:transform,opacity;transform-style:preserve-3d;}',
        '.persev-transition-star,.persev-transition-cloud,.persev-transition-gridline,.persev-transition-ring,.persev-transition-shard{position:absolute;display:block;}',
        '.persev-transition-gridline{background:linear-gradient(90deg,transparent,rgba(248,180,45,0.08),rgba(111,177,255,0.1),transparent);transform-origin:center;opacity:0.12;}',
        '.persev-transition-ring{border-radius:999px;border:0.5px solid rgba(248,180,45,0.14);box-shadow:0 0 28px rgba(111,177,255,0.06), inset 0 0 20px rgba(248,180,45,0.02);}',
        '.persev-transition-curtains{z-index:2;pointer-events:none;overflow:hidden;}',
        '.persev-transition-curtain{position:absolute;top:0;bottom:0;width:62%;overflow:hidden;will-change:transform,opacity;filter:drop-shadow(0 22px 36px rgba(1,5,16,0.18));transform:translate3d(0,0,0);}',
        '.persev-transition-curtain--left{left:0;transform:translateX(-108%) rotate(-1deg);transform-origin:left center;}',
        '.persev-transition-curtain--right{right:0;transform:translateX(108%) rotate(1deg);transform-origin:right center;}',
        '.persev-transition-curtain::before,.persev-transition-curtain::after{content:"";position:absolute;inset:0;pointer-events:none;}',
        '.persev-transition-curtain::before{background:linear-gradient(180deg,rgba(255,255,255,0.28),transparent 18%,transparent 76%,rgba(6,8,22,0.12));mix-blend-mode:screen;opacity:.98;}',
        '.persev-transition-curtain::after{background:radial-gradient(circle at 18% 18%,rgba(255,255,255,0.28),transparent 16%),radial-gradient(circle at 42% 28%,rgba(248,243,235,0.34),transparent 22%),radial-gradient(circle at 72% 26%,rgba(236,231,224,0.22),transparent 18%),radial-gradient(circle at 50% 56%,rgba(229,224,216,0.12),transparent 30%),linear-gradient(90deg,rgba(7,9,20,0.08),transparent 14%,transparent 86%,rgba(7,9,20,0.04));opacity:0.58;}',
        '.persev-transition-curtain-surface{position:absolute;inset:-10%;background:radial-gradient(circle at 50% 42%,rgba(255,244,228,0.16),transparent 24%),radial-gradient(circle at 50% 64%,rgba(18,24,54,0.28),transparent 34%),radial-gradient(circle at 20% 24%,rgba(244,173,127,0.24),transparent 16%),radial-gradient(circle at 80% 24%,rgba(244,173,127,0.18),transparent 16%),linear-gradient(180deg,rgba(17,23,54,0.98) 0%,rgba(9,12,29,0.98) 52%,rgba(3,5,15,0.98) 100%);filter:blur(12px) saturate(1.06) brightness(1.08);}',
        '.persev-transition-seam{z-index:3;opacity:0;pointer-events:none;background:linear-gradient(90deg,transparent 0%,rgba(255,244,223,0.08) 48%,rgba(255,244,223,0.12) 50%,rgba(255,244,223,0.08) 52%,transparent 100%),radial-gradient(circle at 50% 50%,rgba(252,239,215,0.1),transparent 28%);mix-blend-mode:screen;filter:blur(16px);}',
        '.persev-transition-grain{z-index:3;opacity:0;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.12\'/%3E%3C/svg%3E");background-size:180px 180px;mix-blend-mode:soft-light;}',
        '.persev-transition-caption{display:none;}',
        '@media (max-width:700px){.persev-transition-curtain{width:60%;}.persev-transition-curtain--left{transform:translateX(-112%) rotate(-1deg);}.persev-transition-curtain--right{transform:translateX(112%) rotate(1deg);}}',
        'html.persev-transition-active,body.persev-transition-active{background:#050914 !important;}'
      ].join('');

      document.head.appendChild(style);
    }

    return {
      ensureOverlayStyles: ensureOverlayStyles
    };
  })();

  const overlay = (function () {
    function createOverlay(mode, accent, label) {
      const root = document.createElement('div');
      root.className = 'persev-transition-overlay';
      root.setAttribute('aria-hidden', 'true');

      const shell = document.createElement('div');
      shell.className = 'persev-transition-shell';

      const stars = document.createElement('div');
      stars.className = 'persev-transition-stars';

      const clouds = document.createElement('div');
      clouds.className = 'persev-transition-clouds';

      const lines = document.createElement('div');
      lines.className = 'persev-transition-grid';

      const rings = document.createElement('div');
      rings.className = 'persev-transition-rings';

      const shards = document.createElement('div');
      shards.className = 'persev-transition-shards';

      const curtains = document.createElement('div');
      curtains.className = 'persev-transition-curtains';

      const curtainLeft = document.createElement('div');
      curtainLeft.className = 'persev-transition-curtain percev-transition-curtain--left';

      const curtainLeftSurface = document.createElement('div');
      curtainLeftSurface.className = 'persev-transition-curtain-surface';
      curtainLeft.appendChild(curtainLeftSurface);

      const curtainRight = document.createElement('div');
      curtainRight.className = 'persev-transition-curtain percev-transition-curtain--right';

      const curtainRightSurface = document.createElement('div');
      curtainRightSurface.className = 'persev-transition-curtain-surface';
      curtainRight.appendChild(curtainRightSurface);

      curtains.appendChild(curtainLeft);
      curtains.appendChild(curtainRight);

      const seam = document.createElement('div');
      seam.className = 'persev-transition-seam';

      const grain = document.createElement('div');
      grain.className = 'persev-transition-grain';

      const caption = document.createElement('div');
      caption.className = 'persev-transition-caption';
      caption.textContent = label || '';

      const palette = {
        blue: accent || '#9ac4ff',
        gold: '#f8b42d'
      };

      for (let i = 0; i < PARTICLE_COUNTS.stars; i += 1) {
        const star = document.createElement('span');
        star.className = 'persev-transition-star';
        const size = utils.random(1.2, 2.8);
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = utils.random(2, 98) + '%';
        star.style.top = utils.random(2, 98) + '%';
        star.style.borderRadius = '999px';
        star.style.opacity = String(utils.random(0.4, 0.95));
        star.style.background = 'radial-gradient(circle,' + palette.blue + ',rgba(154,196,255,0))';
        stars.appendChild(star);
      }

      for (let i = 0; i < PARTICLE_COUNTS.clouds; i += 1) {
        const cloud = document.createElement('span');
        cloud.className = 'persev-transition-cloud';
        cloud.style.width = utils.random(16, 34) + 'vw';
        cloud.style.height = utils.random(10, 20) + 'vh';
        cloud.style.left = utils.random(-10, 90) + '%';
        cloud.style.top = utils.random(-12, 78) + '%';
        cloud.style.opacity = String(utils.random(0.08, 0.2));
        cloud.style.filter = 'blur(' + utils.random(24, 58).toFixed(1) + 'px)';
        cloud.style.background = 'radial-gradient(ellipse at center,rgba(154,196,255,0.34),rgba(154,196,255,0.08),transparent 70%)';
        clouds.appendChild(cloud);
      }

      for (let i = 0; i < PARTICLE_COUNTS.lines; i += 1) {
        const line = document.createElement('span');
        line.className = 'persev-transition-gridline';
        line.style.left = '0%';
        line.style.top = utils.random(6, 94) + '%';
        line.style.width = '100%';
        line.style.height = utils.random(1, 2.2).toFixed(1) + 'px';
        lines.appendChild(line);
      }

      for (let i = 0; i < PARTICLE_COUNTS.rings; i += 1) {
        const ring = document.createElement('span');
        ring.className = 'persev-transition-ring';
        const size = utils.random(16, 34);
        ring.style.width = size + 'vw';
        ring.style.height = size + 'vw';
        ring.style.left = utils.random(8, 78) + '%';
        ring.style.top = utils.random(8, 72) + '%';
        rings.appendChild(ring);
      }

      for (let i = 0; i < PARTICLE_COUNTS.shards; i += 1) {
        const shard = document.createElement('span');
        shard.className = 'persev-transition-shard';
        shard.style.left = utils.random(2, 98) + '%';
        shard.style.top = utils.random(2, 98) + '%';
        shard.style.width = utils.random(14, 36).toFixed(1) + 'px';
        shard.style.height = utils.random(1.4, 3.4).toFixed(1) + 'px';
        shard.style.opacity = String(utils.random(0.16, 0.42));
        shard.style.transform = 'rotate(' + utils.random(-40, 40).toFixed(1) + 'deg)';
        shard.style.filter = 'blur(0.6px)';
        shard.style.background = 'linear-gradient(90deg,rgba(248,180,45,0),rgba(248,180,45,0.46),rgba(143,183,255,0.42),rgba(143,183,255,0))';
        shards.appendChild(shard);
      }

      shell.appendChild(stars);
      shell.appendChild(clouds);
      shell.appendChild(lines);
      shell.appendChild(rings);
      shell.appendChild(shards);
      shell.appendChild(curtains);
      shell.appendChild(seam);
      shell.appendChild(grain);
      shell.appendChild(caption);
      root.appendChild(shell);

      if (mode === 'signal') {
        root.style.backdropFilter = 'blur(6px) saturate(1.03)';
        root.style.webkitBackdropFilter = 'blur(6px) saturate(1.03)';
      }

      return {
        overlayEl: root,
        stars: stars.children,
        clouds: clouds.children,
        lines: lines.children,
        rings: rings.children,
        shards: shards.children,
        curtainLeft: curtainLeft,
        curtainRight: curtainRight,
        seam: seam,
        grain: grain,
        caption: caption
      };
    }

    function animateForMode(tl, parts, mode, total, profile) {
      const stars = parts.stars;
      const clouds = parts.clouds;
      const lines = parts.lines;
      const rings = parts.rings;
      const shards = parts.shards;
      const curtainLeft = parts.curtainLeft;
      const curtainRight = parts.curtainRight;
      const seam = parts.seam;
      const grain = parts.grain;

      tl.fromTo(curtainLeft, {
        xPercent: -108,
        rotation: -1,
        opacity: 0.92
      }, {
        xPercent: -4,
        rotation: -0.35,
        opacity: 1,
        duration: total * 0.5,
        ease: 'power3.inOut'
      }, 0.02);

      tl.fromTo(curtainRight, {
        xPercent: 108,
        rotation: 1,
        opacity: 0.92
      }, {
        xPercent: 4,
        rotation: 0.35,
        opacity: 1,
        duration: total * 0.5,
        ease: 'power3.inOut'
      }, 0.02);

      tl.fromTo(seam, {
        opacity: 0
      }, {
        opacity: 1,
        duration: total * 0.22,
        ease: 'sine.out'
      }, total * 0.22);

      tl.fromTo(grain, {
        opacity: 0
      }, {
        opacity: 0.34,
        duration: total * 0.18,
        ease: 'sine.out'
      }, total * 0.1);

      tl.to([curtainLeft, curtainRight, seam, grain], {
        opacity: 0,
        duration: Math.max(0.4, total * 0.18),
        ease: 'power2.in'
      }, Math.max(0.82, total * 0.62));

      if (mode === 'cosmos') {
        tl.to(stars, {
          y: -window.innerHeight * 0.52,
          x: function () { return utils.random(-170, 170); },
          opacity: 0,
          duration: total * 0.86,
          stagger: { each: 0.005, from: 'random' },
          ease: 'power3.inOut'
        }, 0.02);

        tl.fromTo(rings, { scale: 0.42, opacity: 0.22 }, {
          scale: 2.35,
          opacity: 0,
          duration: total * 0.88,
          stagger: 0.13,
          ease: 'power3.out'
        }, 0.04);

        tl.to(lines, { opacity: 0, duration: total * 0.3, ease: 'power2.out' }, 0);
        return;
      }

      if (mode === 'portal') {
        tl.fromTo(rings, { scale: 0.08, opacity: 0.34 }, {
          scale: 2.64,
          opacity: 0,
          duration: total * 0.9,
          stagger: 0.11,
          ease: 'power3.out'
        }, 0.02);

        tl.to(clouds, {
          scale: 0.72,
          opacity: 0,
          duration: total * 0.68,
          stagger: { each: 0.018, from: 'center' },
          ease: 'power3.inOut'
        }, 0.06);

        tl.to(lines, {
          scaleX: 1.24,
          opacity: 0,
          duration: total * 0.64,
          stagger: { each: 0.014, from: 'center' },
          ease: 'power3.inOut'
        }, 0.08);
        return;
      }

      if (mode === 'gallery') {
        tl.to(shards, {
          y: window.innerHeight * 0.58,
          x: function () {
            return profile && profile.moveX ? profile.moveX * 1.22 : utils.random(-110, 110);
          },
          opacity: 0,
          duration: total * 0.76,
          stagger: { each: 0.012, from: 'random' },
          ease: 'power3.inOut'
        }, 0.04);

        tl.to(clouds, {
          x: function () {
            return profile && profile.moveX ? profile.moveX * 0.65 : utils.random(-36, 36);
          },
          opacity: 0,
          duration: total * 0.64,
          stagger: { each: 0.018, from: profile && profile.staggerFrom ? profile.staggerFrom : 'center' },
          ease: 'power3.inOut'
        }, 0.02);

        tl.to(lines, { opacity: 0, duration: total * 0.26, ease: 'power2.out' }, 0);
        return;
      }

      if (mode === 'assembly') {
        tl.fromTo(lines, { scaleX: 0.1, opacity: 0 }, {
          scaleX: 1.2,
          opacity: 0,
          duration: total * 0.74,
          stagger: { each: 0.022, from: 'center' },
          ease: 'power3.out'
        }, 0.02);

        tl.fromTo(rings, { scale: 0.65, opacity: 0.14 }, {
          scale: 1.46,
          opacity: 0,
          duration: total * 0.7,
          stagger: 0.11,
          ease: 'sine.out'
        }, 0.12);
        return;
      }

      if (mode === 'signal') {
        tl.to(lines, {
          xPercent: function () { return utils.random(-16, 16); },
          opacity: 0,
          duration: total * 0.68,
          stagger: { each: 0.013, from: 'random' },
          ease: 'power3.inOut'
        }, 0.02);

        tl.to(stars, {
          xPercent: function () { return utils.random(-20, 20); },
          opacity: 0,
          duration: total * 0.66,
          stagger: { each: 0.007, from: 'random' },
          ease: 'power2.inOut'
        }, 0.04);

        tl.fromTo(rings, { scale: 0.28, opacity: 0.16 }, {
          scale: 2.04,
          opacity: 0,
          duration: total * 0.78,
          stagger: 0.09,
          ease: 'sine.out'
        }, 0.06);
        return;
      }

      tl.to(clouds, {
        y: window.innerHeight * 0.5,
        opacity: 0,
        duration: total * 0.82,
        stagger: { each: 0.018, from: 'random' },
        ease: 'sine.inOut'
      }, 0);

      tl.to(shards, {
        y: window.innerHeight * 0.62,
        opacity: 0,
        duration: total * 0.74,
        stagger: { each: 0.009, from: 'random' },
        ease: 'power3.inOut'
      }, 0.04);

    }

    return {
      createOverlay: createOverlay,
      animateForMode: animateForMode
    };
  })();

  const enter = (function () {
    function animateIndex() {
      const vanta = document.getElementById('vanta-clouds');
      const root = document.getElementById('root');
      const nav = document.querySelector('.toormix-nav');

      if (vanta) {
        gsap.fromTo(vanta, {
          opacity: 0,
          scale: 1.2,
          y: -window.innerHeight * 0.14,
          rotationY: -9,
          filter: 'blur(18px) saturate(1.04)'
        }, {
          opacity: 1,
          scale: 1,
          y: 0,
          rotationY: 0,
          transformPerspective: 1400,
          filter: 'blur(0px) saturate(1)',
          duration: 3.1,
          ease: 'power3.out',
          delay: 0.06
        });
      }

      if (root) {
        gsap.fromTo(root, {
          opacity: 0,
          scale: 1.048,
          y: 42,
          rotationY: -9,
          filter: 'blur(14px)'
        }, {
          opacity: 1,
          scale: 1,
          y: 0,
          filter: 'blur(0px)',
          rotationY: 0,
          transformPerspective: 1400,
          duration: 2.5,
          ease: 'power3.out',
          delay: 0.46
        });
      }

      if (nav) {
        gsap.fromTo(nav, {
          opacity: 0,
          y: 19,
          rotationY: -7,
          filter: 'blur(9px)'
        }, {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          rotationY: 0,
          transformPerspective: 1400,
          duration: 1.85,
          ease: 'power3.out',
          delay: 1.12
        });
      }
    }

    function animateLeaderboard() {
      const frame = document.querySelector('.leaderboard-frame, iframe.leaderboard-frame');
      const nav = document.querySelector('.toormix-nav');

      if (frame) {
        gsap.fromTo(frame, {
          opacity: 0,
          y: 40,
          scale: 0.983,
          rotationY: -11,
          filter: 'blur(13px) saturate(0.9)'
        }, {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          rotationY: 0,
          transformPerspective: 1400,
          duration: 3.0,
          ease: 'power3.out',
          delay: 0.36
        });
      }

      if (nav) {
        gsap.fromTo(nav, {
          opacity: 0,
          y: -15,
          rotationY: 6,
          filter: 'blur(9px)'
        }, {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          rotationY: 0,
          transformPerspective: 1400,
          duration: 1.9,
          ease: 'power3.out',
          delay: 1.16
        });
      }
    }

    function animateGeneric(pageKey) {
      const targets = routing.getPageElements(pageKey);

      gsap.fromTo(targets, {
        opacity: 0,
        y: 18,
        scale: 1.01,
        filter: 'blur(8px)'
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1.25,
        ease: 'power3.out',
        stagger: { each: 0.03, from: 'center' },
        delay: 0.08
      });
    }

    function run() {
      if (utils.prefersReducedMotion()) {
        return;
      }

      const pageKey = routing.resolveTransitionKey(window.location.pathname);

      if (pageKey === 'index') {
        animateIndex();
        return;
      }

      if (pageKey === 'leaderboard') {
        animateLeaderboard();
        return;
      }

      animateGeneric(pageKey);
    }

    return {
      run: run,
      animateIndex: animateIndex,
      animateLeaderboard: animateLeaderboard,
      animateGeneric: animateGeneric
    };
  })();

  const transition = (function () {
    function playExitTransition(fromKey, toKey, href) {
      if (!href || state.isNavigating) {
        return;
      }

      if (utils.prefersReducedMotion()) {
        state.isNavigating = true;
        window.location.href = href;
        return;
      }

      state.isNavigating = true;
      runtime.applyStablePageBackground();
      styles.ensureOverlayStyles();

      const profile = routing.getRouteProfile(fromKey, toKey);
      const nextMeta = PAGE_META[toKey] || PAGE_META.index;
      const targets = routing.getPageElements(fromKey);
      const parts = overlay.createOverlay(profile.mode || nextMeta.overlay, nextMeta.accent, nextMeta.label);

      document.body.appendChild(parts.overlayEl);
      document.documentElement.classList.add('persev-transition-active');
      document.body.classList.add('persev-transition-active');

      const total = profile.duration || 2.0;
      const settleAt = Math.max(0.76, total * 0.52);

      const tl = gsap.timeline({
        defaults: { overwrite: 'auto' },
        onComplete: function () {
          window.location.href = href;
        }
      });

      tl.to(parts.overlayEl, { opacity: 1, duration: 0.48, ease: 'power3.out' }, 0);
      tl.fromTo(parts.caption, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.44, ease: 'power3.out' }, 0.06);
      tl.to(parts.caption, { opacity: 0, duration: 0.3, ease: 'power1.in' }, settleAt - 0.26);

      overlay.animateForMode(tl, parts, profile.mode || nextMeta.overlay, total, profile);

      tl.to(targets, {
        opacity: 0.64,
        scale: profile.scale,
        x: (profile.moveX || 0) + ((profile.rotateY || 0) * 1.5),
        y: profile.moveY || 0,
        z: -36,
        rotationY: profile.rotateY || 0,
        rotationX: profile.rotateX || 0,
        rotationZ: profile.rotateZ || 0,
        filter: 'blur(' + Math.max(3.2, profile.blur * 1.2) + 'px) saturate(0.91) brightness(0.91)',
        transformOrigin: (profile.rotateY || 0) >= 0 ? '100% 50%' : '0% 50%',
        transformPerspective: 1400,
        duration: total,
        stagger: {
          each: 0.01,
          from: profile.staggerFrom || 'center'
        },
        ease: 'power3.inOut'
      }, 0);

      tl.to(parts.overlayEl, {
        opacity: 0,
        duration: Math.max(0.58, total * 0.38),
        ease: 'power2.in'
      }, Math.max(0.82, total * 0.62));
    }

    return {
      playExitTransition: playExitTransition
    };
  })();

  const navigation = (function () {
    function shouldInterceptLink(anchor, event) {
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
    }

    function initLinkInterception() {
      document.addEventListener('click', function (event) {
        const target = event.target;
        const anchor = target && target.closest ? target.closest('a[href]') : null;

        if (!shouldInterceptLink(anchor, event)) {
          return;
        }

        event.preventDefault();

        const fromKey = routing.resolveTransitionKey(window.location.pathname);
        const toKey = routing.resolveTransitionKey(anchor.pathname);
        transition.playExitTransition(fromKey, toKey, anchor.href);
      }, true);
    }

    return {
      initLinkInterception: initLinkInterception
    };
  })();

  function init() {
    runtime.applyStablePageBackground();
    styles.ensureOverlayStyles();
    runtime.safeNavRevealFallback();
    navigation.initLinkInterception();

    window.setTimeout(enter.run, CONFIG.pageLoadDelayMs);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }

  window.PersevTransitions = {
    init: init,
    playExitTransition: transition.playExitTransition,
    resolveTransitionKey: routing.resolveTransitionKey,
    getRouteProfile: routing.getRouteProfile,
    revealIndexBaseState: runtime.revealIndexBaseState
  };
})();
