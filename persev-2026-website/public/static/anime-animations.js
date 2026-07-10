/**
 * Perseverantia Shared Animation Library
 * Built on anime.js v4
 * Features: stagger reveals, magnetic buttons, scroll-triggered animations,
 * floating orbs, text scrambles, page entrances, navbar timelines
 */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
  const lowCpu = (navigator.hardwareConcurrency || 4) <= 6;
  const lowMemory = typeof navigator.deviceMemory === 'number' && navigator.deviceMemory <= 4;
  const saveData = !!(navigator.connection && navigator.connection.saveData);
  const isLowPowerDevice = isCoarsePointer || lowCpu || lowMemory || saveData;

  window.PersevAnims = window.PersevAnims || {};
  const PA = window.PersevAnims;

  PA.reduced = prefersReducedMotion;
  PA.lowPower = isLowPowerDevice;

  /* ─── Wait for anime.js ─── */
  function waitForAnime(callback, attempts = 60) {
    if (typeof window.anime === 'function' || (window.anime && typeof window.anime.createTimeline === 'function')) {
      callback(window.anime);
      return;
    }
    if (attempts <= 0) {
      console.warn('[PersevAnims] anime.js not available');
      return;
    }
    setTimeout(() => waitForAnime(callback, attempts - 1), 100);
  }
  PA.waitForAnime = waitForAnime;

  /* ─── Utility: check reduced motion ─── */
  function guard(fn) {
    return function () {
      if (prefersReducedMotion) return;
      return fn.apply(this, arguments);
    };
  }
  PA.guard = guard;

  /* ─── 1. Page Entrance Timeline ─── */
  PA.pageEntrance = guard(function (elements, options) {
    const anime = window.anime;
    if (!anime) return;
    const opts = Object.assign({
      duration: 900,
      ease: 'out(4)',
      stagger: 80,
      y: [30, 0],
      opacity: [0, 1],
      scale: [0.96, 1]
    }, options || {});

    const targets = typeof elements === 'string'
      ? document.querySelectorAll(elements)
      : elements;
    if (!targets || !targets.length) return;

    anime({
      targets: targets,
      translateY: opts.y,
      opacity: opts.opacity,
      scale: opts.scale,
      duration: opts.duration,
      easing: opts.ease,
      delay: anime.stagger(opts.stagger),
      ...opts.extra
    });
  });

  /* ─── 2. Stagger Reveal for Children ─── */
  PA.staggerReveal = guard(function (parentSelector, childSelector, options) {
    const anime = window.anime;
    if (!anime) return;
    const parent = typeof parentSelector === 'string'
      ? document.querySelector(parentSelector)
      : parentSelector;
    if (!parent) return;
    const children = childSelector
      ? parent.querySelectorAll(childSelector)
      : parent.children;
    if (!children || !children.length) return;

    const opts = Object.assign({
      duration: 750,
      ease: 'out(3)',
      stagger: 60,
      y: [24, 0],
      opacity: [0, 1],
      scale: [0.98, 1]
    }, options || {});

    anime({
      targets: children,
      translateY: opts.y,
      opacity: opts.opacity,
      scale: opts.scale,
      duration: opts.duration,
      easing: opts.ease,
      delay: anime.stagger(opts.stagger),
      ...opts.extra
    });
  });

  /* ─── 3. Scroll-Triggered Reveal ─── */
  PA.scrollReveal = guard(function (selector, options) {
    const anime = window.anime;
    if (!anime) return;
    const opts = Object.assign({
      duration: 800,
      ease: 'out(3)',
      y: [36, 0],
      opacity: [0, 1],
      scale: [0.97, 1],
      threshold: 0.15,
      once: true
    }, options || {});

    const targets = document.querySelectorAll(selector);
    if (!targets.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          anime({
            targets: entry.target,
            translateY: opts.y,
            opacity: opts.opacity,
            scale: opts.scale,
            duration: opts.duration,
            easing: opts.ease,
            ...opts.extra
          });
          if (opts.once) observer.unobserve(entry.target);
        }
      });
    }, { threshold: opts.threshold, rootMargin: '0px 0px -8% 0px' });

    targets.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(' + opts.y[0] + 'px) scale(' + opts.scale[0] + ')';
      observer.observe(el);
    });
  });

  /* ─── 4. Magnetic Button Effect ─── */
  PA.magneticButton = guard(function (selector, options) {
    if (isCoarsePointer) return;
    const opts = Object.assign({ strength: 0.25, rotateStrength: 4 }, options || {});
    const buttons = document.querySelectorAll(selector);
    if (!buttons.length) return;

    buttons.forEach((btn) => {
      btn.style.transition = 'transform 0.18s cubic-bezier(0.22, 1, 0.36, 1)';
      btn.addEventListener('pointermove', (e) => {
        const rect = btn.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) * opts.strength;
        const dy = (e.clientY - cy) * opts.strength;
        const rotateX = -(e.clientY - cy) / rect.height * opts.rotateStrength;
        const rotateY = (e.clientX - cx) / rect.width * opts.rotateStrength;
        btn.style.transform = `translate(${dx}px, ${dy}px) perspective(400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
      btn.addEventListener('pointerleave', () => {
        btn.style.transform = '';
      });
    });
  });

  /* ─── 5. Text Character Stagger ─── */
  PA.textStagger = guard(function (selector, options) {
    const anime = window.anime;
    if (!anime) return;
    const opts = Object.assign({
      duration: 650,
      ease: 'out(3)',
      stagger: 25,
      y: [18, 0],
      opacity: [0, 1],
      rotateX: [45, 0],
      color: null
    }, options || {});

    const targets = document.querySelectorAll(selector);
    targets.forEach((el) => {
      const text = el.textContent;
      el.innerHTML = '';
      const chars = text.split('');
      chars.forEach((ch) => {
        const span = document.createElement('span');
        span.style.display = 'inline-block';
        span.style.willChange = 'transform, opacity';
        span.textContent = ch === ' ' ? '\u00A0' : ch;
        el.appendChild(span);
      });

      anime({
        targets: el.querySelectorAll('span'),
        translateY: opts.y,
        opacity: opts.opacity,
        rotateX: opts.rotateX,
        color: opts.color,
        duration: opts.duration,
        easing: opts.ease,
        delay: anime.stagger(opts.stagger)
      });
    });
  });

  /* ─── 6. Floating Orbs Background ─── */
  PA.floatingOrbs = guard(function (containerSelector, count, options) {
    const anime = window.anime;
    if (!anime) return;
    const opts = Object.assign({
      minSize: 60, maxSize: 220,
      colors: ['rgba(248,180,45,0.12)', 'rgba(67,233,255,0.12)', 'rgba(255,95,168,0.1)'],
      durationMin: 8000, durationMax: 18000
    }, options || {});

    const container = typeof containerSelector === 'string'
      ? document.querySelector(containerSelector)
      : containerSelector || document.body;
    if (!container) return;

    const orbs = [];
    for (let i = 0; i < count; i++) {
      const orb = document.createElement('div');
      const size = opts.minSize + Math.random() * (opts.maxSize - opts.minSize);
      orb.style.cssText = `
        position: fixed;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: ${opts.colors[i % opts.colors.length]};
        filter: blur(${size * 0.35}px);
        pointer-events: none;
        z-index: -1;
        left: ${Math.random() * 100}vw;
        top: ${Math.random() * 100}vh;
      `;
      container.appendChild(orb);
      orbs.push(orb);

      anime({
        targets: orb,
        translateX: () => anime.random(-120, 120),
        translateY: () => anime.random(-120, 120),
        scale: () => anime.random(0.7, 1.4),
        duration: anime.random(opts.durationMin, opts.durationMax),
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: true
      });
    }
    PA._orbs = orbs;
  });

  /* ─── 7. Navbar Entrance ─── */
  PA.navbarEntrance = guard(function (options) {
    const anime = window.anime;
    if (!anime) return;
    const opts = Object.assign({ delay: 200 }, options || {});

    const navInner = document.querySelector('.toormix-nav__inner');
    if (navInner) {
      anime({
        targets: navInner,
        translateY: [20, 0],
        opacity: [0, 1],
        scale: [0.96, 1],
        duration: 750,
        easing: 'out(4)',
        delay: opts.delay
      });
    }

    const links = document.querySelectorAll('.toormix-nav__link');
    if (links.length) {
      anime({
        targets: links,
        translateY: [12, 0],
        opacity: [0, 1],
        duration: 500,
        easing: 'out(3)',
        delay: anime.stagger(40, { start: opts.delay + 300 })
      });
    }
  });

  /* ─── 8. Menu Overlay Timeline ─── */
  PA.menuTimeline = function (isOpen) {
    const anime = window.anime;
    if (!anime || prefersReducedMotion) return;

    const rings = document.querySelectorAll('.toormix-ring');
    const items = document.querySelectorAll('.toormix-overlay__item');
    const backdrop = document.querySelector('.toormix-overlay__backdrop');

    if (isOpen) {
      if (backdrop) {
        anime({ targets: backdrop, opacity: [0, 1], duration: 400, easing: 'easeOutQuad' });
      }
      if (rings.length) {
        anime({
          targets: rings,
          scale: [0.85, 1],
          opacity: [0, 1],
          duration: 800,
          easing: 'out(3)',
          delay: anime.stagger(60)
        });
      }
      if (items.length) {
        anime({
          targets: items,
          translateY: [24, 0],
          opacity: [0, 1],
          duration: 600,
          easing: 'out(3)',
          delay: anime.stagger(60, { start: 200 })
        });
      }
    } else {
      if (items.length) {
        anime({
          targets: items,
          translateY: [0, 14],
          opacity: [1, 0],
          duration: 300,
          easing: 'in(2)',
          delay: anime.stagger(30)
        });
      }
      if (rings.length) {
        anime({
          targets: rings,
          scale: [1, 0.92],
          opacity: [1, 0],
          duration: 500,
          easing: 'in(2)',
          delay: anime.stagger(40, { start: 100 })
        });
      }
    }
  };

  /* ─── 9. Idle Glow Pulse ─── */
  PA.idlePulse = guard(function (selector, options) {
    const anime = window.anime;
    if (!anime) return;
    const opts = Object.assign({
      duration: 2200,
      scale: [1, 1.04],
      boxShadow: ['0 0 0px rgba(248,180,45,0)', '0 0 20px rgba(248,180,45,0.3)'],
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine'
    }, options || {});

    const targets = document.querySelectorAll(selector);
    if (!targets.length) return;

    anime({
      targets: targets,
      scale: opts.scale,
      boxShadow: opts.boxShadow,
      duration: opts.duration,
      easing: opts.easing,
      direction: opts.direction,
      loop: opts.loop
    });
  });

  /* ─── 10. Loading Screen Exit ─── */
  PA.loadingExit = guard(function (loaderSelector, options) {
    const anime = window.anime;
    if (!anime) return;
    const loader = typeof loaderSelector === 'string'
      ? document.querySelector(loaderSelector)
      : loaderSelector;
    if (!loader) return;
    const opts = Object.assign({
      duration: 700,
      scale: [1, 0.92],
      opacity: [1, 0],
      delay: 0
    }, options || {});

    anime({
      targets: loader,
      scale: opts.scale,
      opacity: opts.opacity,
      duration: opts.duration,
      easing: 'in(3)',
      delay: opts.delay,
      complete: () => {
        loader.style.display = 'none';
        if (opts.onComplete) opts.onComplete();
      }
    });
  });

  /* ─── 11. Modal Open / Close ─── */
  PA.modalOpen = guard(function (modalSelector, contentSelector) {
    const anime = window.anime;
    if (!anime) return;
    const modal = typeof modalSelector === 'string' ? document.querySelector(modalSelector) : modalSelector;
    const content = contentSelector ? (typeof contentSelector === 'string' ? document.querySelector(contentSelector) : contentSelector) : null;
    if (!modal) return;

    modal.style.display = 'flex';
    anime({
      targets: modal,
      opacity: [0, 1],
      duration: 300,
      easing: 'easeOutQuad'
    });
    if (content) {
      anime({
        targets: content,
        scale: [0.92, 1],
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 500,
        easing: 'out(4)',
        delay: 100
      });
    }
  });

  PA.modalClose = guard(function (modalSelector, contentSelector) {
    const anime = window.anime;
    if (!anime) return;
    const modal = typeof modalSelector === 'string' ? document.querySelector(modalSelector) : modalSelector;
    const content = contentSelector ? (typeof contentSelector === 'string' ? document.querySelector(contentSelector) : contentSelector) : null;
    if (!modal) return;

    if (content) {
      anime({
        targets: content,
        scale: [1, 0.94],
        translateY: [0, 16],
        opacity: [1, 0],
        duration: 280,
        easing: 'in(2)'
      });
    }
    anime({
      targets: modal,
      opacity: [1, 0],
      duration: 350,
      easing: 'easeInQuad',
      delay: 100,
      complete: () => { modal.style.display = 'none'; }
    });
  });

  /* ─── 12. Card Hover Tilt (3D) ─── */
  PA.cardTilt = guard(function (selector, options) {
    if (isCoarsePointer) return;
    const opts = Object.assign({ perspective: 600, maxRotate: 8, scale: 1.03 }, options || {});
    const cards = document.querySelectorAll(selector);
    if (!cards.length) return;

    cards.forEach((card) => {
      card.style.transformStyle = 'preserve-3d';
      card.style.transition = 'transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)';

      card.addEventListener('pointermove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const rx = (0.5 - y) * opts.maxRotate * 2;
        const ry = (x - 0.5) * opts.maxRotate * 2;
        card.style.transform = `perspective(${opts.perspective}px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${opts.scale})`;
      });
      card.addEventListener('pointerleave', () => {
        card.style.transform = '';
      });
    });
  });

  /* ─── 13. Ripple Effect ─── */
  PA.ripple = guard(function (selector, options) {
    const opts = Object.assign({ color: 'rgba(248,180,45,0.45)', duration: 600 }, options || {});
    const buttons = document.querySelectorAll(selector);
    buttons.forEach((btn) => {
      btn.style.position = 'relative';
      btn.style.overflow = 'hidden';
      btn.addEventListener('click', (e) => {
        const ripple = document.createElement('span');
        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.cssText = `
          position: absolute;
          border-radius: 50%;
          background: ${opts.color};
          width: ${size}px;
          height: ${size}px;
          left: ${e.clientX - rect.left - size / 2}px;
          top: ${e.clientY - rect.top - size / 2}px;
          pointer-events: none;
          transform: scale(0);
          opacity: 1;
        `;
        btn.appendChild(ripple);
        const anime = window.anime;
        if (anime) {
          anime({
            targets: ripple,
            scale: [0, 4],
            opacity: [1, 0],
            duration: opts.duration,
            easing: 'easeOutQuad',
            complete: () => ripple.remove()
          });
        } else {
          setTimeout(() => ripple.remove(), opts.duration);
        }
      });
    });
  });

  /* ─── 14. Auto-Init from data attributes ─── */
  PA.autoInit = guard(function () {
    /* data-animate="fadeInUp" */
    document.querySelectorAll('[data-animate]').forEach((el) => {
      const type = el.dataset.animate;
      const delay = parseInt(el.dataset.delay || '0', 10);
      const duration = parseInt(el.dataset.duration || '800', 10);
      const stagger = parseInt(el.dataset.stagger || '0', 10);

      if (type === 'fadeInUp') {
        PA.scrollReveal(el, { duration, delay, y: [24, 0] });
      } else if (type === 'fadeInScale') {
        PA.scrollReveal(el, { duration, delay, y: [16, 0], scale: [0.94, 1] });
      } else if (type === 'textStagger') {
        PA.textStagger(el, { duration, stagger: stagger || 25 });
      }
    });

    /* data-stagger-parent */
    document.querySelectorAll('[data-stagger-parent]').forEach((parent) => {
      const childSel = parent.dataset.staggerChildren || '> *';
      const stagger = parseInt(parent.dataset.staggerDelay || '60', 10);
      const duration = parseInt(parent.dataset.staggerDuration || '700', 10);
      PA.staggerReveal(parent, childSel, { duration, stagger });
    });

    /* data-magnetic */
    const magneticSelector = '[data-magnetic]';
    if (document.querySelector(magneticSelector)) {
      PA.magneticButton(magneticSelector);
    }

    /* data-tilt */
    const tiltSelector = '[data-tilt]';
    if (document.querySelector(tiltSelector)) {
      PA.cardTilt(tiltSelector);
    }

    /* data-ripple */
    const rippleSelector = '[data-ripple]';
    if (document.querySelector(rippleSelector)) {
      PA.ripple(rippleSelector);
    }

    /* data-idle-pulse */
    document.querySelectorAll('[data-idle-pulse]').forEach((el) => {
      PA.idlePulse(el, { duration: parseInt(el.dataset.idlePulse || '2200', 10) });
    });
  });

  /* ─── 15. Navbar menu hooks ─── */
  PA.hookNavbarMenu = function () {
    const menuOverlay = document.getElementById('persevMenuOverlay');
    if (!menuOverlay || menuOverlay.dataset.animeHooked === 'true') return;
    menuOverlay.dataset.animeHooked = 'true';

    const openBtns = document.querySelectorAll('.toormix-menu-open-btn');
    const closeBtn = document.getElementById('persevMenuClose');

    const openHandler = () => PA.menuTimeline(true);
    const closeHandler = () => PA.menuTimeline(false);

    openBtns.forEach((btn) => {
      btn.addEventListener('click', openHandler);
    });
    if (closeBtn) {
      closeBtn.addEventListener('click', closeHandler);
    }
  };

  /* ─── Auto-run autoInit when anime is ready ─── */
  waitForAnime(() => {
    PA.autoInit();
    PA.hookNavbarMenu();
  });

  /* Re-hook after navbar injection */
  const _observer = new MutationObserver(() => {
    if (document.querySelector('.toormix-menu-open-btn')) {
      PA.hookNavbarMenu();
    }
  });
  if (document.body) {
    _observer.observe(document.body, { childList: true, subtree: true });
  } else {
    window.addEventListener('DOMContentLoaded', () => {
      _observer.observe(document.body, { childList: true, subtree: true });
    });
  }
})();

