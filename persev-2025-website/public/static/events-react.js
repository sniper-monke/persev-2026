import React, { useEffect, useRef, useState } from 'https://esm.sh/react@18.3.1';
import { createRoot } from 'https://esm.sh/react-dom@18.3.1/client';
import { createPortal } from 'https://esm.sh/react-dom@18.3.1';
import htm from 'https://esm.sh/htm@3.1.1?deps=react@18.3.1';
import { createNoise3D } from 'https://esm.sh/simplex-noise@4.0.1';
import * as THREE from 'https://esm.sh/three@0.167.1';

// BUILD_TIMESTAMP: 2026-04-10T12:00:01Z
// Cache invalidation marker

const html = htm.bind(React.createElement);

const DEFAULT_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Events', href: '/events.html' },
  { label: 'Organizing Committee', href: '/organizing-committee.html' },
  { label: 'Leaderboard', href: '/leaderboard.html' },
  { label: 'Locations', href: '/locations.html' }
];

const FALLBACK_EVENTS = [
  {
    name: 'ADMETA',
    category: 'Literary',
    logo: '/assets/persevlogo.avif',
    eventHeadPhoto: '/assets/persevlogo.avif',
    longDesc: 'A debate event focused on clarity, perspective, and performance.',
    ropLink: '#'
  }
];

const DEFAULT_SITE = {
  title: 'Perseverantia',
  tagline: 'Events',
  description: 'Perseverantia 2025',
  links: DEFAULT_LINKS,
  events: FALLBACK_EVENTS
};

const THREE_EVENT_LINK = 'https://esm.sh/three@0.167.1?bundle';

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function normalizeAngle(angle) {
  return ((angle + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
}

function getOverlayCardStyle(index, activeIndex, total) {
  if (!total) {
    return {
      transform: 'translate3d(0px, 0px, 0px) scale(1)',
      opacity: 1,
      zIndex: 1
    };
  }

  let offset = index - activeIndex;
  const half = total / 2;
  if (offset > half) offset -= total;
  if (offset < -half) offset += total;

  const depth = Math.abs(offset);
  const x = offset * 172;
  const y = Math.sin(offset * 0.7) * 26;
  const z = -depth * 72;
  const rotate = offset * 12;
  const scale = offset === 0 ? 1.08 : Math.max(0.58, 0.96 - depth * 0.06);

  return {
    transform: `translate3d(${x}px, ${y}px, ${z}px) rotateY(${rotate}deg) scale(${scale})`,
    opacity: Math.max(0.22, 1 - depth * 0.1),
    zIndex: 200 - depth
  };
}

function getEventImage(event) {
  return event?.logo || event?.eventHeadPhoto || '/assets/persevlogo.avif';
}

function getEventMeta(event) {
  if (!event) return 'Perseverantia 2025';
  return event.category || event.type || event.shortDesc || 'Perseverantia 2025';
}

function getEventDescription(event) {
  if (!event) return '';
  return event.longDesc || event.description || event.shortDesc || '';
}

function getEventLink(event) {
  if (!event) return '#';
  return event.ropLink || event.link || '#';
}

async function loadSiteData() {
  try {
    const response = await fetch('/config.json', { cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const config = await response.json();
    const website = config.website || config || {};
    const navbar = website.navbar || {};
    const events = Array.isArray(website.events) ? website.events : Array.isArray(config.events) ? config.events : [];

    return {
      title: navbar.title || website.title || DEFAULT_SITE.title,
      tagline: website.tagline || 'Events',
      description: website.description || DEFAULT_SITE.description,
      events: events.length ? events : FALLBACK_EVENTS
    };
  } catch (error) {
    console.error('Failed to load /config.json, using fallback events data.', error);
    return DEFAULT_SITE;
  }
}

function useLoadingScreen(isLoading) {
  useEffect(() => {
    const loadingScreen = document.getElementById('loading-screen');
    if (!loadingScreen) return undefined;

    if (isLoading) {
      loadingScreen.style.display = 'flex';
      loadingScreen.style.pointerEvents = 'auto';
      loadingScreen.style.opacity = '1';
      return undefined;
    }

    loadingScreen.classList.add('fade-out');
    const timer = window.setTimeout(() => {
      loadingScreen.remove();
    }, 650);

    return () => window.clearTimeout(timer);
  }, [isLoading]);
}

function useAuroraBackground(canvasRef) {
  useEffect(() => {
    const visibleCanvas = canvasRef.current;
    if (!visibleCanvas) return undefined;

    const visibleContext = visibleCanvas.getContext('2d');
    if (!visibleContext) return undefined;

    const sourceCanvas = document.createElement('canvas');
    const sourceContext = sourceCanvas.getContext('2d');
    if (!sourceContext) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const noise3D = createNoise3D();
    const rayCount = 300;
    const rayPropCount = 8;
    const rayPropsLength = rayCount * rayPropCount;
    const baseLength = 150;
    const rangeLength = 150;
    const baseSpeed = 0.03;
    const rangeSpeed = 0.07;
    const baseWidth = 8;
    const rangeWidth = 16;
    const rangeHue = 165;
    const baseTTL = 40;
    const rangeTTL = 80;
    const noiseStrength = 80;
    const xOff = 0.0015;
    const yOff = 0.0015;
    const zOff = 0.0015;
    const backgroundColor = 'hsla(220,55%,8%,1)';

    let frameId = 0;
    let width = 0;
    let height = 0;
    let center = [0, 0];
    let tick = 0;
    let rayProps = new Float32Array(rayPropsLength);
    let baseHue = 45;

    const rand = function (value) {
      return value * Math.random();
    };

    const fadeInOut = function (value, maxValue) {
      const half = 0.5 * maxValue;
      return Math.abs((value + half) % maxValue - half) / half;
    };

    const drawRay = function (x, y1, y2, life, ttl, width, hue) {
      const gradient = sourceContext.createLinearGradient(x, y1, x, y2);
      gradient.addColorStop(0, `hsla(${hue},90%,55%,0)`);
      gradient.addColorStop(0.5, `hsla(${hue},90%,55%,${fadeInOut(life, ttl) * 0.5})`);
      gradient.addColorStop(1, `hsla(${hue},90%,55%,0)`);

      sourceContext.save();
      sourceContext.beginPath();
      sourceContext.strokeStyle = gradient;
      sourceContext.lineWidth = width;
      sourceContext.lineJoin = 'round';
      sourceContext.moveTo(x, y1);
      sourceContext.lineTo(x, y2);
      sourceContext.stroke();
      sourceContext.closePath();
      sourceContext.restore();
    };

    const checkBounds = function (x) {
      return x < 0 || x > sourceCanvas.width;
    };

    const initRay = function (index) {
      const x = rand(sourceCanvas.width);
      const y1 = center[1] + noiseStrength;
      const y2 = center[1] + noiseStrength - (baseLength + rand(rangeLength));
      const n = noise3D(x * xOff, y1 * yOff, tick * zOff) * noiseStrength;
      const life = 0;
      const ttl = baseTTL + rand(rangeTTL);
      const rayWidth = baseWidth + rand(rangeWidth);
      const speed = baseSpeed + rand(rangeSpeed) * (Math.random() > 0.5 ? 1 : -1);
      const hue = baseHue + rand(rangeHue);

      rayProps.set([x, y1 + n, y2 + n, life, ttl, rayWidth, speed, hue], index);
    };

    const initRays = function () {
      tick = 0;
      rayProps = new Float32Array(rayPropsLength);

      for (let index = 0; index < rayPropsLength; index += rayPropCount) {
        initRay(index);
      }
    };

    const updateRay = function (index) {
      const nextIndex = index + 1;
      const y2Index = index + 2;
      const lifeIndex = index + 3;
      const ttlIndex = index + 4;
      const widthIndex = index + 5;
      const speedIndex = index + 6;
      const hueIndex = index + 7;

      const x = rayProps[index];
      const y1 = rayProps[nextIndex];
      const y2 = rayProps[y2Index];
      const life = rayProps[lifeIndex];
      const ttl = rayProps[ttlIndex];
      const rayWidth = rayProps[widthIndex];
      const speed = rayProps[speedIndex];
      const hue = rayProps[hueIndex];

      drawRay(x, y1, y2, life, ttl, rayWidth, hue);

      rayProps[nextIndex] = y1 + speed;
      rayProps[y2Index] = y2 + speed;
      rayProps[lifeIndex] = life + 1;

      if (checkBounds(x) || life + 1 > ttl) {
        initRay(index);
      }
    };

    const updateRays = function () {
      for (let index = 0; index < rayPropsLength; index += rayPropCount) {
        updateRay(index);
      }
    };

    const resize = function () {
      width = window.innerWidth;
      height = window.innerHeight;

      visibleCanvas.width = width;
      visibleCanvas.height = height;
      visibleCanvas.style.width = '100%';
      visibleCanvas.style.height = '100%';

      sourceCanvas.width = width;
      sourceCanvas.height = height;

      center[0] = 0.5 * width;
      center[1] = 0.5 * height;
    };

    const render = function () {
      visibleContext.save();
      visibleContext.filter = 'blur(12px)';
      visibleContext.globalCompositeOperation = 'lighter';
      visibleContext.drawImage(sourceCanvas, 0, 0);
      visibleContext.restore();
    };

    const draw = function () {
      tick++;
      sourceContext.clearRect(0, 0, width, height);
      visibleContext.fillStyle = backgroundColor;
      visibleContext.fillRect(0, 0, width, height);

      const spaceGradient = visibleContext.createRadialGradient(width * 0.5, height * 0.3, 0, width * 0.5, height * 0.3, Math.max(width, height));
      spaceGradient.addColorStop(0, 'hsla(200, 60%, 20%, 0.2)');
      spaceGradient.addColorStop(0.6, 'hsla(220, 55%, 10%, 0)');
      spaceGradient.addColorStop(1, 'hsla(240, 50%, 5%, 0)');
      visibleContext.fillStyle = spaceGradient;
      visibleContext.fillRect(0, 0, width, height);

      updateRays();
      render();

      if (!reducedMotion) {
        frameId = window.requestAnimationFrame(draw);
      }
    };

    const start = function () {
      resize();
      initRays();

      if (reducedMotion) {
        draw();
        return;
      }

      frameId = window.requestAnimationFrame(draw);
    };

    start();
    window.addEventListener('resize', resize, { passive: true });

    return () => {
      window.removeEventListener('resize', resize);
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [canvasRef]);
}

function App() {
  const [siteData, setSiteData] = useState(DEFAULT_SITE);
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalEvent, setModalEvent] = useState(null);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const backgroundCanvasRef = useRef(null);
  const sceneHostRef = useRef(null);
  const sceneApiRef = useRef(null);

  useLoadingScreen(isLoading);
  useAuroraBackground(backgroundCanvasRef);

  useEffect(() => {
    let cancelled = false;

    loadSiteData().then((nextSiteData) => {
      if (cancelled) return;
      setSiteData(nextSiteData);
      setIsLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  const events = siteData.events || [];
  const activeEvent = events[activeIndex] || events[0] || null;

  useEffect(() => {
    if (activeIndex >= events.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, events.length]);

  const openActiveEvent = () => {
    if (activeEvent) {
      setModalEvent(activeEvent);
    }
  };

  return html`
    <div className="events-react-root">
      <canvas className="bg-decoration" ref=${backgroundCanvasRef} aria-hidden="true"></canvas>
      <${CarouselScene}
        events=${events}
        hostRef=${sceneHostRef}
        onActiveIndexChange=${setActiveIndex}
        onOpenEvent=${setModalEvent}
        onPausedChange=${setIsCarouselPaused}
        sceneApiRef=${sceneApiRef}
      />

      <div className="mx-auto px-4 sm:px-6 py-8 sm:py-10">

      <section className="selected-work fade-in-up" aria-labelledby="selected-events-title">
        <p className="section-eyebrow">${siteData.tagline || 'Events'}</p>

        <div className="active-showcase" aria-live="polite">
          <div className="active-showcase__count">
            ${String(activeIndex + 1).padStart(2, '0')} / ${String(Math.max(events.length, 1)).padStart(2, '0')}
          </div>
          <h1 className="active-showcase__title" id="selected-events-title">
            <span>${activeEvent ? activeEvent.name : 'Loading'}</span>
          </h1>
          <div className="active-showcase__meta">
            <span className="active-showcase__detail">${getEventMeta(activeEvent)}</span>
            <button className="active-showcase__cta" id="activeEventButton" type="button" onClick=${openActiveEvent}>
              View <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <div className="film-stage-wrap">
          <button
            className="film-nav-arrow film-nav-prev"
            id="filmNavPrev"
            type="button"
            aria-label="Previous event"
            onClick=${() => sceneApiRef.current?.step(-1)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div className="film-strip-shell cylinder-shell">
            <div className="cylinder-stage">
              <div className="cylinder-glow cylinder-glow-left"></div>
              <div className="cylinder-glow cylinder-glow-right"></div>
              <div className="cylinder-viewport">
                <div
                  className="react-carousel-host"
                  ref=${sceneHostRef}
                  aria-label="Events carousel"
                  role="img"
                  style=${{
                    width: '100%',
                    height: '100%',
                    minHeight: 'inherit',
                    touchAction: 'none',
                    cursor: 'grab'
                  }}
                ></div>

              </div>
            </div>
          </div>

          <button
            className="film-nav-arrow film-nav-next"
            id="filmNavNext"
            type="button"
            aria-label="Next event"
            onClick=${() => sceneApiRef.current?.step(1)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          <div className="film-pagination" aria-label="Event hint">
            <span className="carousel-hint">${isCarouselPaused ? 'Paused - click carousel to resume' : 'Drag to spin, click to pause'}</span>
          </div>
        </div>
      </section>

      ${modalEvent
        ? createPortal(
            html`
              <div
                id="modal"
                className="fixed inset-0 bg-[#08103280] flex items-center justify-center z-50 overflow-y-auto p-4"
                onClick=${(event) => {
                  if (event.target === event.currentTarget) setModalEvent(null);
                }}
              >
                <div className="bg-[#0C1542] border-4 border-[#BE8E30] rounded-xl relative flex flex-col lg:flex-row gap-6 sm:gap-8 shadow-2xl modal-content">
                  <button
                    id="closeModal"
                    className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-red-500 transition z-10"
                    aria-label="Close modal"
                    onClick=${() => setModalEvent(null)}
                  >
                    ×
                  </button>

                  <div className="flex-1 p-6 sm:p-8 pt-12 sm:pt-12">
                    <h2 className="text-2xl sm:text-4xl text-[#BE8E30] mb-4 sm:mb-6 leading-tight" id="modalTitle">
                      ${modalEvent.name}
                    </h2>
                    <p id="modalDesc" className="text-gray-300 text-base sm:text-lg leading-relaxed whitespace-pre-line mb-6">
                      ${getEventDescription(modalEvent)}
                    </p>
                    <a
                      id="ropLinkBtn"
                      href=${getEventLink(modalEvent)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block text-white bg-[#081032] py-2.5 px-6 sm:py-3 sm:px-8 rounded-full hover:shadow-xl hover:bg-[#BE8E30] hover:outline-[#081032] hover:text-black transition duration-300 outline outline-[4px] outline-[#BE8E30] outline-offset-2"
                    >
                      View ROP
                    </a>
                  </div>

                  <div className="flex-shrink-0 w-full lg:w-1/3 rounded-lg overflow-hidden shadow-lg p-6 lg:mt-0">
                    <div className="modal-event-head-wrapper">
                      <img
                        id="modalImage"
                        src=${getEventImage(modalEvent)}
                        alt=${`${modalEvent.name} logo`}
                        className="w-full h-full object-contain rounded-lg mb-4 sm:hidden lg:block"
                      />
                      <p id="eventHeadName" className="text-[#BE8E30] font-semibold text-lg text-center">
                        ${modalEvent.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            `,
            document.body
          )
        : null}
      </div>
    </div>
  `;
}

function CarouselScene({ events, hostRef, onActiveIndexChange, onOpenEvent, onPausedChange, sceneApiRef }) {
  useEffect(() => {
    const host = hostRef.current;
    if (!host || !events.length) return undefined;

    let disposed = false;
    let resizeObserver = null;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    if ('outputColorSpace' in renderer && THREE.SRGBColorSpace) {
      renderer.outputColorSpace = THREE.SRGBColorSpace;
    }
    renderer.domElement.className = 'react-carousel-canvas';
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.touchAction = 'none';
    host.replaceChildren(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 5000);
    camera.position.set(0, 64.8, 950);
    camera.lookAt(0, 0, 0);

    scene.add(new THREE.AmbientLight(0xffffff, 1.5));
    scene.add(new THREE.DirectionalLight(0xffffff, 1.2));

    const carousel = new THREE.Group();
    scene.add(carousel);

    const textureLoader = new THREE.TextureLoader();
    const cardGroups = [];
    const stepAngle = (Math.PI * 2) / events.length;
    const state = {
      rotation: 0,
      spinVelocity: 0,
      isPaused: false,
      dragging: false,
      pointerId: null,
      pointerX: 0,
      dragStartRotation: 0,
      activeIndex: 0,
      radius: 520,
      dragMomentum: 0
    };

    function getViewportMode() {
      const width = host.clientWidth || window.innerWidth || 1;
      if (width <= 520) return 'phone';
      if (width <= 920) return 'tablet';
      return 'desktop';
    }

    function getCarouselLayout(width, height) {
      const viewportMode = getViewportMode();
      const safeHeight = Math.max(1, height || window.innerHeight || 1);

      if (viewportMode === 'phone') {
        return {
          viewportMode,
          fov: 35,
          radius: clamp(width * 0.9, 330, 430),
          cameraY: safeHeight * 0.006,
          cameraZ: clamp(width * 2.05, 780, 1020),
          cardHeight: clamp(Math.min(width * 0.6, safeHeight * 0.25), 218, 260),
          baseScale: 0.34,
          activeScale: 0.68
        };
      }

      if (viewportMode === 'tablet') {
        return {
          viewportMode,
          fov: 31,
          radius: clamp(width * 0.54, 380, 560),
          cameraY: safeHeight * 0.01,
          cameraZ: clamp(width * 1.16, 860, 1160),
          cardHeight: clamp(width * 0.29, 224, 282),
          baseScale: 0.44,
          activeScale: 0.52
        };
      }

      return {
        viewportMode,
        fov: 27,
        radius: clamp(width * 0.47, 620, 1050),
        cameraY: safeHeight * 0.018,
        cameraZ: clamp(width * 0.9, 1080, 1540),
        cardHeight: clamp(width * 0.22, 310, 380),
        baseScale: 0.58,
        activeScale: 0.5
      };
    }

    function syncRadius() {
      const width = host.clientWidth || 1;
      const height = host.clientHeight || 1;
      const layout = getCarouselLayout(width, height);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.fov = layout.fov;
      camera.updateProjectionMatrix();
      state.radius = layout.radius;
      camera.position.set(0, layout.cameraY, layout.cameraZ);
      camera.lookAt(0, 0, 0);

      cardGroups.forEach((group, index) => {
        const localAngle = index * stepAngle;
        group.position.set(Math.sin(localAngle) * state.radius, 0, Math.cos(localAngle) * state.radius);
      });
    }

    function createFallbackTexture(label = 'Error') {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#333366';
        ctx.fillRect(0, 0, 256, 256);
        ctx.fillStyle = '#ffff00';
        ctx.font = '24px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(label, 128, 128);
      }
      return new THREE.CanvasTexture(canvas);
    }

    async function buildCard(event, index, hostWidth) {
      try {
        let texture;
        try {
          texture = await textureLoader.loadAsync(getEventImage(event));
        } catch (error) {
          console.error('Failed to load texture for event:', event?.name || 'unknown', error);
          texture = createFallbackTexture('Error');
        }

        const image = texture?.image;
        const width = image?.naturalWidth || image?.videoWidth || image?.width || 0;
        const height = image?.naturalHeight || image?.videoHeight || image?.height || 0;
        if (!texture || !image || width <= 0 || height <= 0) {
          console.warn('Texture image invalid, using fallback texture for event:', event?.name || 'unknown');
          texture = createFallbackTexture('Invalid');
        }

        try {
          texture.colorSpace = THREE.SRGBColorSpace || texture.colorSpace;
          texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
          texture.generateMipmaps = true;
          texture.minFilter = THREE.LinearMipmapLinearFilter;
          texture.magFilter = THREE.LinearFilter;
        } catch (texErr) {
          console.error('Error setting texture properties:', texErr);
        }

const imageMaterialFront = new THREE.MeshStandardMaterial({
  map: texture,
  transparent: true,
  side: THREE.DoubleSide,
  opacity: 0.98,
  emissive: new THREE.Color(0x404060),
          emissiveIntensity: 0.28,
          roughness: 0.7,
          metalness: 0.1
        });

        const layout = getCarouselLayout(hostWidth || host.clientWidth || 1, host.clientHeight || window.innerHeight || 1);
        const imageAspect = width > 0 && height > 0 ? width / height : 0.8;
        const cardHeight = layout.cardHeight;
        const cardWidth = cardHeight * clamp(imageAspect, 0.68, 0.92);

        const frontImage = new THREE.Mesh(
          new THREE.PlaneGeometry(cardWidth, cardHeight),
          imageMaterialFront
        );
        frontImage.position.z = 3.2;

        const card = new THREE.Group();
        card.add(frontImage);
        cardGroups.push(card);
        carousel.add(card);
      } catch (error) {
        console.error('Error in buildCard:', error);
      }
    }

    async function initScene() {
      try {
        if (!events || !Array.isArray(events) || events.length === 0) {
          console.warn('No events data available');
          syncRadius();
          animate();
          return;
        }

        const hostWidth = host.clientWidth || 1440;
        for (let index = 0; index < events.length; index += 1) {
          if (disposed) return;
          try {
            await buildCard(events[index], index, hostWidth);
          } catch (cardBuildErr) {
            console.error(`Failed to build card ${index}:`, cardBuildErr);
            // Continue with next card
          }
        }

        syncRadius();
        if (onActiveIndexChange && typeof onActiveIndexChange === 'function') {
          onActiveIndexChange(0);
        }
        animate();
      } catch (error) {
        console.error('Error initializing carousel:', error);
        // If init fails, try to at least start animating with empty scene
        try {
          syncRadius();
          animate();
        } catch (fallbackErr) {
          console.error('Even fallback animate failed:', fallbackErr);
        }
      }
    }

    const resizeHandler = () => syncRadius();
    resizeObserver = new ResizeObserver(resizeHandler);
    resizeObserver.observe(host);
    window.addEventListener('resize', resizeHandler);

    const pointerState = {
      startX: 0,
      lastX: 0,
      lastTime: 0,
      moved: false
    };

    function onPointerDown(event) {
      state.dragging = true;
      state.pointerId = event.pointerId;
      state.pointerX = event.clientX;
      state.dragStartRotation = state.rotation;
      state.dragMomentum = 0;
      pointerState.startX = event.clientX;
      pointerState.lastX = event.clientX;
      pointerState.lastTime = performance.now();
      pointerState.moved = false;
      renderer.domElement.setPointerCapture(event.pointerId);
    }

    function onPointerMove(event) {
      if (!state.dragging || event.pointerId !== state.pointerId) return;

      const now = performance.now();
      const elapsed = Math.max(1, now - pointerState.lastTime);
      const deltaX = event.clientX - pointerState.lastX;
      const dragDelta = event.clientX - pointerState.startX;
      if (Math.abs(dragDelta) > 4) pointerState.moved = true;

      state.rotation = state.dragStartRotation + (dragDelta * 0.0055);
      state.dragMomentum = (deltaX / elapsed) * 0.045;
      state.spinVelocity = state.dragMomentum || state.spinVelocity;
      if (pointerState.moved && state.isPaused) {
        state.isPaused = false;
        onPausedChange?.(false);
      }
      pointerState.lastX = event.clientX;
      pointerState.lastTime = now;
    }

    function onPointerUp(event) {
      if (event.pointerId !== state.pointerId) return;
      state.dragging = false;
      state.pointerId = null;
      state.spinVelocity = clamp(state.spinVelocity, -0.16, 0.16);

      // A click without drag toggles pause/resume.
      if (!pointerState.moved) {
        state.isPaused = !state.isPaused;
        onPausedChange?.(state.isPaused);
        if (state.isPaused) {
          state.spinVelocity = 0;
        } else {
          state.spinVelocity += -0.024;
        }
      }

      if (renderer.domElement.hasPointerCapture(event.pointerId)) {
        renderer.domElement.releasePointerCapture(event.pointerId);
      }
    }

    function onWheel(event) {
      const delta = Math.abs(event.deltaY) > Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
      if (Math.abs(delta) < 4) return;
      if (state.isPaused) {
        state.isPaused = false;
        onPausedChange?.(false);
      }
      state.spinVelocity += clamp(delta * 0.00004, -0.09, 0.09);
    }

    renderer.domElement.addEventListener('pointerdown', onPointerDown);
    renderer.domElement.addEventListener('pointermove', onPointerMove);
    renderer.domElement.addEventListener('pointerup', onPointerUp);
    renderer.domElement.addEventListener('pointercancel', onPointerUp);
    renderer.domElement.addEventListener('wheel', onWheel, { passive: true });

    sceneApiRef.current = {
      step(direction) {
        if (state.isPaused) {
          state.isPaused = false;
          onPausedChange?.(false);
        }
        state.spinVelocity += direction * 0.065;
      },
      openActive() {
        onOpenEvent(events[state.activeIndex] || null);
      },
      jumpTo(index) {
        state.rotation = -index * stepAngle;
        state.spinVelocity = 0;
      },
      togglePause() {
        state.isPaused = !state.isPaused;
        onPausedChange?.(state.isPaused);
      }
    };

    function animate() {
      try {
        if (disposed) return;

        if (!state || typeof state !== 'object') {
          console.error('animate: state is invalid', state);
          requestAnimationFrame(animate);
          return;
        }

        if (!state.dragging && !state.isPaused) {
          state.rotation += (-0.08 + (state.spinVelocity || 0)) * 0.016;
          state.spinVelocity = (state.spinVelocity || 0) * 0.92;
        }

        if (carousel) {
          carousel.rotation.y = state.rotation;
        }
      } catch (error) {
        console.error('Error in animate startup:', error);
      }

      let bestIndex = 0;
      let bestDepth = -Infinity;
      const time = (typeof performance !== 'undefined' && performance.now) ? performance.now() * 0.001 : 0;

      try {
        if (cardGroups && Array.isArray(cardGroups)) {
          cardGroups.forEach((cardGroup, index) => {
            try {
              if (!cardGroup || typeof cardGroup !== 'object') return;
              
              const angle = (index * stepAngle) + state.rotation;
              const depth = Math.cos(normalizeAngle(angle));
              const positiveDepth = Math.max(0, depth);
              const layout = getCarouselLayout(host.clientWidth || 1, host.clientHeight || 1);
              const selectionStrength = Math.pow(positiveDepth, layout.viewportMode === 'phone' ? 2.4 : 1.8);
              const bob = Math.sin((time * 1.12) + (index * 0.72)) * (2.4 + selectionStrength * 5.4);
              const tilt = Math.sin((time * 1.02) + (index * 0.65)) * 0.035;
              const scale = layout.baseScale + (selectionStrength * layout.activeScale);
              const opacity = clamp(0.06 + (selectionStrength * 0.94), 0.06, 1);

              if (cardGroup.position) cardGroup.position.y = bob;
              if (cardGroup.lookAt) {
                cardGroup.lookAt(camera.position);
                cardGroup.rotation.x += tilt;
              }
              if (cardGroup.scale && typeof cardGroup.scale.setScalar === 'function') {
                cardGroup.scale.setScalar(scale);
              }
              
              if (cardGroup.children && Array.isArray(cardGroup.children)) {
                cardGroup.children.forEach((mesh) => {
                  if (mesh && mesh.material && typeof opacity === 'number') {
                    mesh.material.opacity = opacity;
                  }
                });
              }

              if (depth > bestDepth) {
                bestDepth = depth;
                bestIndex = index;
              }
            } catch (cardError) {
              console.error(`Error processing card ${index}:`, cardError);
            }
          });
        }

        if (bestIndex !== state.activeIndex) {
          state.activeIndex = bestIndex;
          if (onActiveIndexChange && typeof onActiveIndexChange === 'function') {
            onActiveIndexChange(bestIndex);
          }
        }
      } catch (error) {
        console.error('Error in carousel animate loop:', error);
      }

      try {
        if (renderer) {
          renderer.render(scene, camera);
        }
      } catch (renderError) {
        console.error('Error rendering scene:', renderError);
      }
      
      requestAnimationFrame(animate);
    }

    initScene().catch((error) => {
      console.error('Failed to initialize events carousel scene.', error);
    });

    return () => {
      disposed = true;
      window.removeEventListener('resize', resizeHandler);
      if (resizeObserver) resizeObserver.disconnect();
      renderer.domElement.removeEventListener('pointerdown', onPointerDown);
      renderer.domElement.removeEventListener('pointermove', onPointerMove);
      renderer.domElement.removeEventListener('pointerup', onPointerUp);
      renderer.domElement.removeEventListener('pointercancel', onPointerUp);
      renderer.domElement.removeEventListener('wheel', onWheel);
      renderer.dispose();
      cardGroups.forEach((cardGroup) => {
        cardGroup.traverse((object) => {
          if (object.isMesh) {
            object.geometry.dispose();
            if (Array.isArray(object.material)) {
              object.material.forEach((material) => material.dispose());
            } else if (object.material) {
              object.material.dispose();
            }
          }
        });
      });
      sceneApiRef.current = null;
    };
  }, [events, hostRef, onActiveIndexChange, onOpenEvent, onPausedChange, sceneApiRef]);

  return null;
}

function Root() {
  const [siteData, setSiteData] = useState(DEFAULT_SITE);
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalEvent, setModalEvent] = useState(null);
  const hostRef = useRef(null);
  const sceneApiRef = useRef(null);

  useLoadingScreen(isLoading);

  useEffect(() => {
    let cancelled = false;
    loadSiteData().then((nextData) => {
      if (cancelled) return;
      setSiteData(nextData);
      setIsLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const events = siteData.events || [];
  const activeEvent = events[activeIndex] || events[0] || null;

  return html`
    <div className="events-react-root">
      <CarouselScene
        events=${events}
        hostRef=${hostRef}
        onActiveIndexChange=${setActiveIndex}
        onOpenEvent=${setModalEvent}
        sceneApiRef=${sceneApiRef}
      />

      <main className="mx-auto px-4 sm:px-6 py-8 sm:py-10">

        <section className="selected-work fade-in-up" aria-labelledby="selected-events-title">
          <p className="section-eyebrow">Events</p>

          <div className="active-showcase" aria-live="polite">
            <div className="active-showcase__count">
              ${String(activeIndex + 1).padStart(2, '0')} / ${String(Math.max(events.length, 1)).padStart(2, '0')}
            </div>
            <h1 className="active-showcase__title" id="selected-events-title">
              <span>${activeEvent ? activeEvent.name : 'Loading'}</span>
            </h1>
            <div className="active-showcase__meta">
              <span className="active-showcase__detail">${getEventMeta(activeEvent)}</span>
              <button className="active-showcase__cta" id="activeEventButton" type="button" onClick=${() => setModalEvent(activeEvent)}>
                View <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          <div className="film-stage-wrap">
            <button
              className="film-nav-arrow film-nav-prev"
              id="filmNavPrev"
              type="button"
              aria-label="Previous event"
              onClick=${() => sceneApiRef.current?.step(-1)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <div className="film-strip-shell cylinder-shell">
              <div className="cylinder-stage">
                <div className="cylinder-glow cylinder-glow-left"></div>
                <div className="cylinder-glow cylinder-glow-right"></div>

                <div className="cylinder-viewport">
                  <div
                    className="react-carousel-host"
                    ref=${hostRef}
                    aria-label="Events carousel"
                    role="img"
                    style=${{
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                      minHeight: 'inherit',
                      touchAction: 'none',
                      cursor: 'grab'
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <button
              className="film-nav-arrow film-nav-next"
              id="filmNavNext"
              type="button"
              aria-label="Next event"
              onClick=${() => sceneApiRef.current?.step(1)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            <div className="film-pagination" aria-label="Event hint">
              <span className="carousel-hint">Drag, scroll, or let it spin</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  `;
}

function mountApp() {
  const rootElement = document.getElementById('events-root');
  if (!rootElement) return;
  createRoot(rootElement).render(html`<${App} />`);
}

mountApp();
