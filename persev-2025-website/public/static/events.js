const loadingScreen = document.getElementById('loading-screen');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const ropLinkBtn = document.getElementById('ropLinkBtn');
const modalImage = document.getElementById('modalImage');
const eventHeadName = document.getElementById('eventHeadName');
const closeModal = document.getElementById('closeModal');

const activeEventButton = document.getElementById('activeEventButton');
const activeEventMeta = document.getElementById('activeEventMeta');
const activeEventCount = document.getElementById('activeEventCount');
const activeEventTitle = document.getElementById('activeEventTitle');
const activeShowcase = document.querySelector('.active-showcase');
const paginationContainer = document.getElementById('filmPagination');

function isObject(variable) {
  return typeof variable === 'object' && variable !== null && !Array.isArray(variable);
}

function getEventExcerpt(event) {
  const candidate = (event.shortDesc || event.oneLiner || event.longDesc || '').replace(/\s+/g, ' ').trim();
  if (!candidate) return 'Open the active frame to view the full event brief.';
  if (candidate.length <= 220) return candidate;
  return `${candidate.slice(0, 217).trim()}...`;
}

function getEventMeta(event) {
  if (event.eventHeadName && event.eventHeadName.trim()) {
    return event.eventHeadName.trim();
  }
  if (event.category && event.category.trim()) {
    return event.category.trim();
  }
  return 'Perseverantia 2026';
}

function updateActiveEventUI(events, index) {
  const event = events[index];
  if (!event) return;

  const total = String(events.length).padStart(2, '0');
  const current = String(index + 1).padStart(2, '0');

  if (activeShowcase) {
    activeShowcase.classList.remove('is-updating');
    requestAnimationFrame(() => activeShowcase.classList.add('is-updating'));
  }

  activeEventCount.textContent = `${current} / ${total}`;
  activeEventTitle.textContent = event.name;
  activeEventMeta.textContent = getEventMeta(event);
  activeEventButton.setAttribute('aria-label', `View details for ${event.name}`);
}

function openModal(event) {
  if (!isObject(event)) return;

  modalTitle.textContent = event.name;
  modalDesc.textContent = event.longDesc || getEventExcerpt(event);

  if (event.eventHeadPhoto) {
    modalImage.src = event.eventHeadPhoto;
    modalImage.classList.remove('hidden');
  } else {
    modalImage.classList.add('hidden');
  }

  eventHeadName.textContent = event.eventHeadName || '';

  if (event.ropLink && event.ropLink.trim() !== '') {
    ropLinkBtn.href = event.ropLink;
    ropLinkBtn.classList.remove('hidden');
  } else {
    ropLinkBtn.classList.add('hidden');
  }

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModalView() {
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

function populateNavigation(navbar) {
  const desktopNav = document.getElementById('desktop-nav');
  const mobileMenu = document.getElementById('mobile-menu');

  desktopNav.innerHTML = '';
  mobileMenu.innerHTML = '';

  const baseLinks = [{name: 'Home', linkto: '/'}].concat(navbar.links || []);

  baseLinks.forEach((link) => {
    const desktopLink = document.createElement('a');
    desktopLink.href = link.linkto;
    desktopLink.textContent = link.name;
    desktopLink.className = 'hover:text-blue-200';
    desktopNav.appendChild(desktopLink);

    const mobileLink = document.createElement('a');
    mobileLink.href = link.linkto;
    mobileLink.textContent = link.name;
    mobileLink.className = 'block py-2 text-lg hover:text-blue-200';
    mobileMenu.appendChild(mobileLink);
  });

  document.getElementById('nav-title').textContent = navbar.title || 'Perseverantia';
}

function buildEventCard(event, index) {
  const accentPalette = [
    'rgba(215, 173, 44, 0.16)',
    'rgba(85, 124, 10, 0.14)',
    'rgba(255, 255, 255, 0.08)'
  ];

  const card = document.createElement('button');
  card.type = 'button';
  card.className = 'event-card cursor-pointer';
  card.dataset.index = String(index);
  card.style.setProperty('--event-accent', accentPalette[index % accentPalette.length]);
  card.innerHTML = `
    <div class="event-card-3d">
      <div class="event-card-inner event-card-face event-card-face-front">
        <div class="event-card-frame">
          <img src="${event.logo}" alt="${event.name} logo" loading="lazy" decoding="async" />
        </div>
        <div class="event-card-body">
          <p class="event-card-name">${event.name}</p>
          <p class="event-card-category">${getEventMeta(event)}</p>
        </div>
      </div>
      <div class="event-card-inner event-card-face event-card-face-back" aria-hidden="true">
        <div class="event-card-frame">
          <img src="${event.logo}" alt="" loading="lazy" decoding="async" />
        </div>
        <div class="event-card-body">
          <p class="event-card-name">${event.name}</p>
          <p class="event-card-category">${getEventMeta(event)}</p>
        </div>
      </div>
    </div>
  `;
  return card;
}

async function initializePage() {
  loadingScreen.style.opacity = '1';
  loadingScreen.style.pointerEvents = 'auto';
  loadingScreen.style.display = 'flex';

  try {
    const res = await fetch('config.json');
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const config = await res.json();
    const website = config.website || {};
    const navbar = website.navbar || {};
    const events = website.events || [];

    populateNavigation(navbar);

    const imagePromises = [];
    events.forEach((event) => {
      [event.eventHeadPhoto, event.logo].filter(Boolean).forEach((src) => {
        imagePromises.push(new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.onerror = () => reject(new Error(`Failed to load ${src}`));
          img.src = src;
        }));
      });
    });

    Promise.allSettled(imagePromises).then((results) => {
      console.log(`Preloaded ${results.filter((result) => result.status === 'fulfilled').length}/${results.length} images`);
    });

    const grid = document.getElementById('eventsGrid');
    grid.innerHTML = '';
    events.forEach((event, index) => {
      grid.appendChild(buildEventCard(event, index));
    });

    updateActiveEventUI(events, 0);
    initializeFilmCylinder(grid, events);

    setTimeout(() => {
      loadingScreen.classList.add('fade-out');
      setTimeout(() => loadingScreen.remove(), 600);
      initializeEnhancedAnimations();
    }, 1000);
  } catch (err) {
    console.error('Failed to load /config.json or populate content:', err);
    populateNavigation({
      title: 'Perseverantia',
      links: [
        {name: 'Events', linkto: '/events.html'},
        {name: 'Organizing Committee', linkto: '/organizing-committee.html'}
      ]
    });

    setTimeout(() => {
      loadingScreen.classList.add('fade-out');
      setTimeout(() => loadingScreen.remove(), 600);
    }, 1000);
  }
}

document.addEventListener('DOMContentLoaded', initializePage);

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!toggleBtn || !mobileMenu) return;

  let menuOpen = false;
  toggleBtn.addEventListener('click', () => {
    menuOpen = !menuOpen;
    if (menuOpen) {
      mobileMenu.classList.remove('hidden');
      void mobileMenu.offsetWidth;
      mobileMenu.classList.remove('opacity-0', 'scale-y-90', '-translate-y-4');
      mobileMenu.classList.add('opacity-100', 'scale-y-100', 'translate-y-0');
      return;
    }

    mobileMenu.classList.remove('opacity-100', 'scale-y-100', 'translate-y-0');
    mobileMenu.classList.add('opacity-0', 'scale-y-90', '-translate-y-4');
    setTimeout(() => {
      if (!menuOpen) mobileMenu.classList.add('hidden');
    }, 500);
  });
});

function initializeFilmCylinder(grid, events) {
  const viewport = document.querySelector('.cylinder-viewport');
  const stage = document.querySelector('.cylinder-stage');
  if (!grid || !viewport || !stage || !events.length) return;

  // Move the entire carousel wrapper upward so the whole carousel shifts up by 100px
  const filmStageWrap = document.querySelector('.film-stage-wrap');
  if (filmStageWrap) {
    filmStageWrap.style.transform = 'translateY(-100px)';
    filmStageWrap.style.transition = 'transform 280ms ease';
  }

  const seedCards = Array.from(grid.querySelectorAll('.event-card'));
  if (!seedCards.length) return;

  const cards = seedCards;
  const prevBtn = document.getElementById('filmNavPrev');
  const nextBtn = document.getElementById('filmNavNext');
  const root = document.documentElement;

  const state = {
    rotation: 0,
    targetRotation: 0,
    dragVelocity: 0,
    autoSpinSpeed: -0.011,
    wheelLockUntil: 0,
    isPointerDown: false,
    pointerId: null,
    lastPointerX: 0,
    lastPointerTs: 0,
    startRotation: 0,
    movedDistance: 0,
    rafId: null,
    lastTs: 0,
    activeIndex: 0,
    radius: 0,
    isRunning: false
  };

  const startAnimation = () => {
    if (state.isRunning) return;
    state.lastTs = 0;
    state.isRunning = true;
    state.rafId = requestAnimationFrame(animate);
  };

  const stopAnimation = () => {
    if (state.rafId) cancelAnimationFrame(state.rafId);
    state.rafId = null;
    state.isRunning = false;
  };

  const mod = (value, range) => ((value % range) + range) % range;
  const normalizeAngle = (value) => ((value + 180) % 360 + 360) % 360 - 180;

  const chooseEquivalentRotation = (current, target) => {
    const candidates = [target - 360, target, target + 360];
    return candidates.reduce((best, candidate) => (
      Math.abs(candidate - current) < Math.abs(best - current) ? candidate : best
    ), candidates[0]);
  };

  const measureCarousel = () => {
    const stageWidth = stage.getBoundingClientRect().width || viewport.clientWidth || window.innerWidth;
    state.radius = Math.max(320, Math.min(1020, stageWidth * (window.matchMedia('(max-width: 767px)').matches ? 0.39 : 0.455)));
    grid.style.setProperty('--carousel-radius', `${state.radius}px`);
    grid.style.setProperty('--carousel-card-width', `${Math.max(88, Math.min(156, stageWidth * 0.112))}px`);
    grid.style.setProperty('--carousel-card-height', `${Math.max(122, Math.min(214, stageWidth * 0.158))}px`);
  };

  const snapToIndex = (targetIndex) => {
    const targetRotation = -targetIndex * (360 / events.length);
    state.targetRotation = chooseEquivalentRotation(state.rotation, targetRotation);
  };

  const updateActiveIndex = () => {
    let bestIndex = 0;
    let bestDepth = -Infinity;

    cards.forEach((card, index) => {
      const step = 360 / events.length;
      const angle = (index * step) + state.rotation;
      const depth = Math.cos((normalizeAngle(angle) * Math.PI) / 180);
      if (depth > bestDepth) {
        bestDepth = depth;
        bestIndex = index;
      }
    });

    if (bestIndex !== state.activeIndex) {
      state.activeIndex = bestIndex;
      updateActiveEventUI(events, bestIndex);
    }
  };

  const applyTransforms = (now = performance.now()) => {
    if (!cards.length) return;

    const step = 360 / events.length;
    const elapsed = now * 0.001;
    updateActiveIndex();

    root.style.setProperty('--carousel-rotation', `${state.rotation.toFixed(3)}deg`);
    root.style.setProperty('--selection-glow', (0.72 + Math.max(0, Math.cos((normalizeAngle(state.rotation) * Math.PI) / 180)) * 0.18).toFixed(3));

    cards.forEach((card, index) => {
      const angle = (index * step) + state.rotation;
      const normalized = normalizeAngle(angle);
      const depth = Math.cos((normalized * Math.PI) / 180);
      const positiveDepth = Math.max(0, depth);
      const mirroredDepth = Math.max(0, -depth);
      const scale = 0.76 + (positiveDepth * 0.28) + (mirroredDepth * 0.14);
      const opacity = 0.68 + (positiveDepth * 0.32);
      const bobY = Math.sin((elapsed * 1.8) + (index * 0.72)) * (7 + positiveDepth * 7);
      const tiltX = Math.sin((elapsed * 1.25) + (index * 0.65)) * 2.2;

      // raise carousel vertically: shift centering from -50% to -60% and apply a fixed upward offset
      const verticalOffset = 100; // pixels to lift whole carousel (positive = up)
      card.style.transform = `translate(-50%, -60%) rotateY(${angle}deg) translateZ(var(--carousel-radius)) translateY(${(bobY - verticalOffset).toFixed(2)}px) rotateX(${tiltX.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
      card.style.opacity = opacity.toFixed(3);
      card.style.zIndex = String(100 + Math.round((depth + 1) * 100));
      card.classList.toggle('is-active-frame', index === state.activeIndex);
      card.classList.toggle('is-back-facing', depth < -0.12);
    });
  };

  const animate = (timestamp) => {
    state.isRunning = true;
    if (!state.lastTs) state.lastTs = timestamp;
    const frameDelta = Math.min(64, Math.max(1, timestamp - state.lastTs));
    state.lastTs = timestamp;

    if (!state.isPointerDown) {
      state.targetRotation += state.autoSpinSpeed * (frameDelta / 16.6667);
    }

    if (!state.isPointerDown) {
      const delta = state.targetRotation - state.rotation;
      const damping = 1 - Math.exp(-frameDelta / 105);
      state.rotation += delta * damping;

      if (Math.abs(delta) < 0.03 && Math.abs(state.autoSpinSpeed) < 0.0001) {
        state.rotation = state.targetRotation;
        applyTransforms(timestamp);
        stopAnimation();
        return;
      }
    }

    applyTransforms(timestamp);
    state.rafId = requestAnimationFrame(animate);
  };

  const onPointerDown = (event) => {
    state.isPointerDown = true;
    state.pointerId = event.pointerId;
    state.lastPointerX = event.clientX;
    state.lastPointerTs = performance.now();
    state.dragVelocity = 0;
    state.movedDistance = 0;
    state.startRotation = state.rotation;
    viewport.setPointerCapture(event.pointerId);
    startAnimation();
  };

  const onPointerMove = (event) => {
    if (!state.isPointerDown || event.pointerId !== state.pointerId) return;

    const now = performance.now();
    const elapsed = Math.max(1, now - state.lastPointerTs);
    const deltaX = event.clientX - state.lastPointerX;
    state.movedDistance += Math.abs(deltaX);
    state.rotation = state.startRotation + (deltaX * 0.22);
    state.targetRotation = state.rotation;
    const velocity = deltaX / elapsed;
    state.dragVelocity = (state.dragVelocity * 0.7) + (velocity * 0.3);
    state.lastPointerX = event.clientX;
    state.lastPointerTs = now;
    applyTransforms(now);
  };

  const onPointerUp = (event) => {
    if (event.pointerId !== state.pointerId) return;
    state.isPointerDown = false;
    viewport.releasePointerCapture(event.pointerId);
    state.pointerId = null;
    state.rotation += state.dragVelocity * 24;
    state.targetRotation = state.rotation;
    snapToIndex(mod(Math.round(-state.rotation / (360 / events.length)), events.length));
    startAnimation();
  };

  viewport.addEventListener('pointerdown', onPointerDown);
  viewport.addEventListener('pointermove', onPointerMove);
  viewport.addEventListener('pointerup', onPointerUp);
  viewport.addEventListener('pointercancel', onPointerUp);

  viewport.addEventListener('wheel', (event) => {
    const now = performance.now();
    if (now < state.wheelLockUntil) return;
    const delta = Math.abs(event.deltaY) > Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
    if (Math.abs(delta) < 10) return;
    snapToIndex(mod(state.activeIndex + (delta > 0 ? 1 : -1), events.length));
    state.wheelLockUntil = now + 180;
    startAnimation();
  }, {passive: true});

  cards.forEach((card) => {
    card.addEventListener('click', (event) => {
      if (state.movedDistance > 10) return;
      const mappedIndex = Number.parseInt(card.dataset.index || '0', 10);
      if (!Number.isFinite(mappedIndex) || !events[mappedIndex]) return;

      if (mappedIndex !== state.activeIndex) {
        snapToIndex(mappedIndex);
        startAnimation();
        return;
      }

      openModal(events[mappedIndex]);
      event.stopPropagation();
    });
  });

  if (paginationContainer) {
    paginationContainer.innerHTML = '<span class="carousel-hint">Drag or scroll to rotate</span>';
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      snapToIndex(mod(state.activeIndex - 1, events.length));
      startAnimation();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      snapToIndex(mod(state.activeIndex + 1, events.length));
      startAnimation();
    });
  }

  if (activeEventButton) {
    activeEventButton.addEventListener('click', () => {
      if (events[state.activeIndex]) {
        openModal(events[state.activeIndex]);
      }
    });
  }

  window.addEventListener('resize', () => {
    measureCarousel();
    applyTransforms();
  });

  window.addEventListener('keydown', (event) => {
    if (!modal.classList.contains('hidden')) return;

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      snapToIndex(mod(state.activeIndex + 1, events.length));
      startAnimation();
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      snapToIndex(mod(state.activeIndex - 1, events.length));
      startAnimation();
    }
  });

  measureCarousel();
  state.targetRotation = state.rotation;
  applyTransforms();
  startAnimation();

  // Skip global smooth-scroll RAF on this animation-heavy page to keep card motion responsive.
}

closeModal.onclick = () => closeModalView();

modal.addEventListener('click', (event) => {
  if (event.target === modal) closeModalView();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModalView();
  }
});

function initializeEnhancedAnimations() {
  const root = document.documentElement;
  let pointerFrame = 0;
  window.addEventListener('pointermove', (event) => {
    if (pointerFrame) return;
    pointerFrame = requestAnimationFrame(() => {
      pointerFrame = 0;
      root.style.setProperty('--mouse-x', `${event.clientX}px`);
      root.style.setProperty('--mouse-y', `${event.clientY}px`);
    });
  }, {passive: true});

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, {threshold: 0.1, rootMargin: '0px 0px -50px 0px'});

  document.querySelectorAll('.fade-in-up').forEach((element) => {
    element.style.animationPlayState = 'paused';
    observer.observe(element);
  });
}
