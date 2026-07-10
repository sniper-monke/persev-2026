(function () {
  if (document.querySelector('.toormix-nav')) {
    return;
  }

  const pathname = (window.location.pathname || '/').toLowerCase();

  const isActive = function (keys) {
    return keys.some(function (k) {
      return pathname === k;
    });
  };

  const regIconSvg = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>';

  const navMarkup = [
    '<nav class="toormix-nav" id="persevNav" aria-label="Primary">',
    '  <div class="toormix-nav__inner">',
    '    <div class="toormix-nav__menu">',
    '      <div class="toormix-nav__cluster toormix-nav__cluster--left">',
    '        <a class="toormix-nav__link ' + (isActive(['/', '/index.html']) ? 'is-active' : '') + '" href="/">Home</a>',
    '        <a class="toormix-nav__link ' + (isActive(['/events', '/events.html']) ? 'is-active' : '') + '" href="/events">Events</a>',
    '        <a class="toormix-nav__link ' + (isActive(['/links', '/links.html']) ? 'is-active' : '') + '" href="/links">Links</a>',
    '      </div>',
    '      <button class="toormix-nav__logo toormix-menu-open-btn" type="button" aria-expanded="false" aria-controls="persevMenuOverlay" aria-label="Open menu">',
    '        <img src="/assets/landing.png" alt="Perseverantia" />',
    '      </button>',
    '      <div class="toormix-nav__cluster toormix-nav__cluster--right">',
    '        <a class="toormix-nav__link ' + (isActive(['/leaderboard', '/leaderboard.html']) ? 'is-active' : '') + '" href="/leaderboard">Leaderboard</a>',
    '        <a class="toormix-nav__link ' + (isActive(['/organizing-committee', '/organizing-committee.html']) ? 'is-active' : '') + '" href="/organizing-committee">Organizing Committee</a>',
    '      </div>',
    '    </div>',
    '  </div>',
    '  <div class="toormix-nav__switch">',
    '    <button class="toormix-nav__switch-logo toormix-menu-open-btn" type="button" aria-expanded="false" aria-controls="persevMenuOverlay" aria-label="Open menu">',
    '      <img src="/assets/landing.png" alt="Perseverantia" />',
    '    </button>',
    '  </div>',
    '</nav>',
    '<div class="toormix-overlay" id="persevMenuOverlay" role="dialog" aria-modal="true" aria-hidden="true" aria-label="Site navigation">',
    '  <div class="toormix-overlay__backdrop"></div>',
    '  <div class="toormix-overlay__rings">',
    '    <div class="toormix-ring toormix-ring--1"></div>',
    '    <div class="toormix-ring toormix-ring--2"></div>',
    '    <div class="toormix-ring toormix-ring--3"></div>',
    '    <div class="toormix-ring toormix-ring--4"></div>',
    '    <div class="toormix-ring toormix-ring--5"></div>',
    '  </div>',
    '  <nav aria-label="Expanded site menu">',
    '    <ul class="toormix-overlay__menu">',
    '      <li><a class="toormix-overlay__item toormix-overlay__item--1" href="/leaderboard">Leaderboard</a></li>',
    '      <li><a class="toormix-overlay__item toormix-overlay__item--2" href="/events">Events</a></li>',
    '      <li><a class="toormix-overlay__item toormix-overlay__item--3" href="/organizing-committee">Organizing committee</a></li>',
    '      <li><a class="toormix-overlay__item toormix-overlay__item--4" href="/links">Links</a></li>',
    '      <li><a class="toormix-overlay__item toormix-overlay__item--5" href="/">Home</a></li>',
    '    </ul>',
    '  </nav>',
    '  <button class="toormix-overlay__close" id="persevMenuClose" type="button" aria-label="Close menu"></button>',
    '</div>'
  ].join('');

  document.body.insertAdjacentHTML('beforeend', navMarkup);

  const nav = document.getElementById('persevNav');
  const menuOverlay = document.getElementById('persevMenuOverlay');
  const openBtns = document.querySelectorAll('.toormix-menu-open-btn');
  const closeBtn = document.getElementById('persevMenuClose');
  const menuLinks = menuOverlay ? menuOverlay.querySelectorAll('.toormix-overlay__item') : [];

  if (!nav || !menuOverlay || !openBtns.length || !closeBtn) {
    return;
  }

  let switched = false;
  let menuOpen = false;
  let detachScrollListener = null;

  /* --- Elegant Anime.js Collapse/Expand --- */
let collapseAnimating = false;

const setSwitched = function (next) {
    if (next === switched || collapseAnimating) {
      return;
    }

    switched = next;

    /* Use anime.js for elegant collapse/expand if available */
    if (window.anime && typeof window.anime === 'function' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      collapseAnimating = true;
      nav.classList.add('has-anime-collapse');

      const navInner = nav.querySelector('.toormix-nav__inner');
      const navSwitch = nav.querySelector('.toormix-nav__switch');
      const regBtn = nav.querySelector('.persev-reg-btn');
      const anime = window.anime;

      if (switched) {
        /* COLLAPSE: full navbar -> logo only */
        const tl = anime.timeline({
          easing: 'easeOutExpo',
          duration: 500,
          complete: function() {
            nav.classList.add('is-switched');
            nav.classList.remove('has-anime-collapse');
            collapseAnimating = false;
          }
        });

        /* Step 1: links stagger out */
        const links = nav.querySelectorAll('.toormix-nav__link');
        if (links.length) {
          tl.add({
            targets: links,
            opacity: [1, 0],
            translateY: [0, -8],
            duration: 280,
            easing: 'easeInQuad',
            delay: anime.stagger(30)
          }, 0);
        }

        /* Step 2: menu container shrinks */
        if (navInner) {
          tl.add({
            targets: navInner,
            scale: [1, 0.88],
            opacity: [1, 0],
            translateY: [0, 10],
            duration: 380,
            easing: 'easeInOutCubic'
          }, 180);
        }

        /* Step 3: reg button shrinks and vanishes */
        if (regBtn) {
          tl.add({
            targets: regBtn,
            scale: [1, 0.5],
            opacity: [1, 0],
            duration: 320,
            easing: 'easeInBack'
          }, 200);
        }

        /* Step 4: switch logo pops in with elastic bounce */
        if (navSwitch) {
          tl.add({
            targets: navSwitch,
            opacity: [0, 1],
            translateY: [14, 0],
            scale: [0.6, 1],
            duration: 550,
            easing: 'spring(1, 90, 12, 0)'
          }, 340);
        }

        /* Step 5: logo idle subtle glow after collapse */
        const switchLogo = nav.querySelector('.toormix-nav__switch-logo');
        if (switchLogo) {
          tl.add({
            targets: switchLogo,
            boxShadow: [
              'inset 0 1px 0 rgba(255,255,255,0.48), 0 8px 24px rgba(149,89,7,0.36)',
              'inset 0 1px 0 rgba(255,255,255,0.48), 0 8px 32px rgba(248,180,45,0.45)'
            ],
            duration: 600,
            easing: 'easeInOutSine',
            direction: 'alternate',
            loop: 2
          }, 600);
        }

      } else {
        /* EXPAND: logo only -> full navbar */
        nav.classList.remove('is-switched');

        const tl = anime.timeline({
          easing: 'easeOutExpo',
          duration: 500,
          complete: function() {
            nav.classList.remove('has-anime-collapse');
            collapseAnimating = false;
          }
        });

        /* Step 1: switch logo fades out */
        if (navSwitch) {
          tl.add({
            targets: navSwitch,
            opacity: [1, 0],
            translateY: [0, 10],
            scale: [1, 0.8],
            duration: 300,
            easing: 'easeInQuad'
          }, 0);
        }

        /* Step 2: inner navbar fades in and grows */
        if (navInner) {
          tl.add({
            targets: navInner,
            opacity: [0, 1],
            scale: [0.88, 1],
            translateY: [10, 0],
            duration: 420,
            easing: 'easeOutCubic'
          }, 120);
        }

        /* Step 3: reg button pops back */
        if (regBtn) {
          tl.add({
            targets: regBtn,
            scale: [0.5, 1],
            opacity: [0, 1],
            duration: 380,
            easing: 'spring(1, 80, 12, 0)'
          }, 220);
        }

        /* Step 4: links stagger in */
        const links = nav.querySelectorAll('.toormix-nav__link');
        if (links.length) {
          tl.add({
            targets: links,
            opacity: [0, 1],
            translateY: [-6, 0],
            duration: 350,
            easing: 'easeOutQuad',
            delay: anime.stagger(40)
          }, 280);
        }
      }

    } else {
      /* Fallback: instant toggle when anime.js unavailable or reduced motion */
      nav.classList.toggle('is-switched', switched);
    }

    if (switched && menuOpen) {
      return;
    }

    if (!menuOpen) {
      openBtns.forEach(function (btn) {
        btn.setAttribute('aria-expanded', 'false');
      });
    }
  };

const backdrop = menuOverlay.querySelector('.toormix-overlay__backdrop');
    let lastFocus = null;

    const setSiblingsInert = function (locked) {
      Array.prototype.forEach.call(document.body.children, function (el) {
        if (el === nav || el === menuOverlay) {
          return;
        }
        if (locked) {
          el.setAttribute('inert', '');
        } else {
          el.removeAttribute('inert');
        }
      });
    };

const setMenuOpen = function (next) {
    if (next === menuOpen) {
      return;
    }

    menuOpen = next;
    menuOverlay.classList.toggle('is-open', menuOpen);
    menuOverlay.setAttribute('aria-hidden', menuOpen ? 'false' : 'true');
    openBtns.forEach(function (btn) {
      btn.setAttribute('aria-expanded', menuOpen ? 'true' : 'false');
    });
    setSiblingsInert(menuOpen);
    if (menuOpen) {
      lastFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      window.setTimeout(function () {
        closeBtn.focus();
      }, 0);
    } else if (lastFocus && typeof lastFocus.focus === 'function') {
      window.setTimeout(function () {
        lastFocus.focus();
      }, 0);
      lastFocus = null;
    }
  };

  openBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      setMenuOpen(true);
    });
  });

  closeBtn.addEventListener('click', function () {
    setMenuOpen(false);
  });

  if (backdrop) {
    backdrop.addEventListener('click', function () {
      setMenuOpen(false);
    });
  }

  menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      setMenuOpen(false);
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      setMenuOpen(false);
    }
  });

  const readScrollY = function (scrollTarget) {
    if (!scrollTarget) {
      return 0;
    }

    if (typeof scrollTarget.scrollY === 'number') {
      return scrollTarget.scrollY;
    }

    if (typeof scrollTarget.pageYOffset === 'number') {
      return scrollTarget.pageYOffset;
    }

    return scrollTarget.scrollTop || 0;
  };

  const bindScrollSource = function (scrollTarget) {
    if (!scrollTarget || typeof scrollTarget.addEventListener !== 'function') {
      return false;
    }

    const syncFromScroll = function () {
      /* ≤1190px: desktop text links are hidden; scroll-collapse only feels broken here */
      if (window.matchMedia('(max-width: 1190px)').matches) {
        setSwitched(false);
        return;
      }
      setSwitched(readScrollY(scrollTarget) > 24);
    };

    scrollTarget.addEventListener('scroll', syncFromScroll, { passive: true });
    syncFromScroll();
    detachScrollListener = function () {
      scrollTarget.removeEventListener('scroll', syncFromScroll);
    };
    return true;
  };

  const navScrollFrame = document.querySelector('[data-nav-scroll-frame]');

  if (navScrollFrame) {
    const attachFrameScroll = function () {
      if (detachScrollListener) {
        detachScrollListener();
        detachScrollListener = null;
      }

      try {
        if (!bindScrollSource(navScrollFrame.contentWindow)) {
          bindScrollSource(window);
        }
      } catch (_err) {
        bindScrollSource(window);
      }
    };

    navScrollFrame.addEventListener('load', attachFrameScroll);
    attachFrameScroll();
  } else {
    bindScrollSource(window);
  }

  /* Registration button animejs animation */
  (function () {
    const regBtn = document.querySelector('.persev-reg-btn');
    if (!regBtn) return;

    /* If anime.js is available, enhance with elastic animation */
    if (window.anime && typeof window.anime === 'function') {
      const btnText = regBtn.querySelector('.persev-reg-btn__text');
      const btnIcon = regBtn.querySelector('.persev-reg-btn__icon');
      let isExpanded = false;

      regBtn.addEventListener('mouseenter', function () {
        if (isExpanded) return;
        isExpanded = true;
        window.anime({
          targets: regBtn,
          width: [44, 220],
          duration: 650,
          easing: 'spring(1, 80, 12, 0)'
        });
        if (btnIcon) {
          window.anime({
            targets: btnIcon,
            opacity: [1, 0],
            scale: [1, 0.6],
            duration: 300,
            easing: 'easeOutQuad'
          });
        }
        if (btnText) {
          window.anime({
            targets: btnText,
            opacity: [0, 1],
            duration: 400,
            easing: 'easeOutQuad',
            delay: 120
          });
        }
      });

      regBtn.addEventListener('mouseleave', function () {
        if (!isExpanded) return;
        isExpanded = false;
        window.anime({
          targets: regBtn,
          width: [220, 44],
          duration: 500,
          easing: 'spring(1, 80, 12, 0)'
        });
        if (btnIcon) {
          window.anime({
            targets: btnIcon,
            opacity: [0, 1],
            scale: [0.6, 1],
            duration: 300,
            easing: 'easeOutQuad',
            delay: 100
          });
        }
        if (btnText) {
          window.anime({
            targets: btnText,
            opacity: [1, 0],
            duration: 250,
            easing: 'easeInQuad'
          });
        }
      });
    }
  })();

  /* ─── Enhanced Anime.js Menu Timeline ─── */
  (function () {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.anime || typeof window.anime !== 'function') return;
    const anime = window.anime;

    const menuOverlay = document.getElementById('persevMenuOverlay');
    const openBtns = document.querySelectorAll('.toormix-menu-open-btn');
    const closeBtn = document.getElementById('persevMenuClose');
    if (!menuOverlay || !openBtns.length || !closeBtn) return;
    if (menuOverlay.dataset.animeHooked === 'true') return;
    menuOverlay.dataset.animeHooked = 'true';

    const rings = menuOverlay.querySelectorAll('.toormix-ring');
    const items = menuOverlay.querySelectorAll('.toormix-overlay__item');
    const backdrop = menuOverlay.querySelector('.toormix-overlay__backdrop');

    /* Override setMenuOpen to use anime.js timelines */
    const _origOpen = openBtns[0].onclick;
    const _origClose = closeBtn.onclick;

    function animateMenuOpen() {
      menuOverlay.classList.add('is-open');
      if (backdrop) {
        anime({
          targets: backdrop,
          opacity: [0, 1],
          duration: 500,
          easing: 'easeOutQuad'
        });
      }
      if (rings.length) {
        anime({
          targets: rings,
          scale: [0.7, 1],
          opacity: [0, 1],
          rotate: ['-30deg', '360deg'],
          duration: 1200,
          easing: 'spring(1, 60, 12, 0)',
          delay: anime.stagger(80)
        });
      }
      if (items.length) {
        anime({
          targets: items,
          translateY: [36, 0],
          opacity: [0, 1],
          scale: [0.92, 1],
          duration: 650,
          easing: 'spring(1, 72, 10, 0)',
          delay: anime.stagger(90, { start: 300 })
        });
        items.forEach(function (item, i) {
          var dir = i % 2 === 0 ? -20 : 20;
          anime({
            targets: item,
            translateX: [dir, 0],
            duration: 650,
            easing: 'spring(1, 72, 10, 0)',
            delay: 300 + i * 90
          });
        });
      }
    }

    function animateMenuClose() {
      if (items.length) {
        anime({
          targets: items,
          translateY: [0, 20],
          opacity: [1, 0],
          scale: [1, 0.92],
          duration: 350,
          easing: 'in(3)',
          delay: anime.stagger(40),
          complete: function () {
            menuOverlay.classList.remove('is-open');
          }
        });
      } else {
        menuOverlay.classList.remove('is-open');
      }
      if (rings.length) {
        anime({
          targets: rings,
          scale: [1, 0.8],
          opacity: [1, 0],
          rotate: ['360deg', '-20deg'],
          duration: 600,
          easing: 'in(3)',
          delay: anime.stagger(50, { start: 80 })
        });
      }
    }

    openBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (!menuOverlay.classList.contains('is-open')) {
          animateMenuOpen();
        }
      });
    });

    closeBtn.addEventListener('click', function () {
      if (menuOverlay.classList.contains('is-open')) {
        animateMenuClose();
      }
    });

    menuOverlay.querySelectorAll('.toormix-overlay__item').forEach(function (link) {
      link.addEventListener('click', function () {
        animateMenuClose();
      });
    });

    /* Navbar entrance animation on injection */
    const navInner = document.querySelector('.toormix-nav__inner');
    if (navInner) {
      anime({
        targets: navInner,
        translateY: [20, 0],
        opacity: [0, 1],
        scale: [0.96, 1],
        duration: 750,
        easing: 'out(4)',
        delay: 300
      });
    }

    const navLinks = document.querySelectorAll('.toormix-nav__link');
    if (navLinks.length) {
      anime({
        targets: navLinks,
        translateY: [12, 0],
        opacity: [0, 1],
        duration: 500,
        easing: 'out(3)',
        delay: anime.stagger(40, { start: 500 })
      });
    }

    /* Logo idle pulse */
    const navLogo = document.querySelector('.toormix-nav__logo');
    if (navLogo) {
      anime({
        targets: navLogo,
        scale: [1, 1.04],
        duration: 2200,
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: true,
        delay: 1000
      });
    }
  })();

})();
