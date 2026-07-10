const DEFAULT_OPTIONS = {
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
  opacityMin: 0.3,
  opacityMax: 0.8
};

function rand(min, max) {
  return min + Math.random() * (max - min);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export function initParticles(canvas, count, options = {}) {
  if (!canvas || typeof canvas.getContext !== 'function') {
    return {
      start() {},
      stop() {},
      resize() {}
    };
  }

  const settings = { ...DEFAULT_OPTIONS, ...options };
  const context = canvas.getContext('2d');
  const particles = [];
  const state = {
    running: false,
    frameId: 0,
    lastTime: 0,
    width: 0,
    height: 0,
    dpr: Math.min(window.devicePixelRatio || 1, 2)
  };

  function resize() {
    const previousWidth = state.width || window.innerWidth || 1;
    const previousHeight = state.height || window.innerHeight || 1;
    state.width = Math.max(1, window.innerWidth || 1);
    state.height = Math.max(1, window.innerHeight || 1);
    state.dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = Math.round(state.width * state.dpr);
    canvas.height = Math.round(state.height * state.dpr);
    canvas.style.width = state.width + 'px';
    canvas.style.height = state.height + 'px';
    context.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);

    if (particles.length > 0) {
      const sx = state.width / previousWidth;
      const sy = state.height / previousHeight;
      particles.forEach((particle) => {
        particle.x *= sx;
        particle.y *= sy;
      });
    }
  }

  function createParticle() {
    const radius = rand(settings.rMin, settings.rMax);
    const depth = clamp((radius - settings.rMin) / Math.max(0.001, settings.rMax - settings.rMin), 0, 1);
    const angle = rand(0, Math.PI * 2);
    const drift = rand(0.035, 0.15) * (0.35 + depth * 0.65);
    const opacityMin = settings.opacityMin + depth * 0.08;
    const opacityMax = settings.opacityMax + depth * 0.06;

    return {
      x: rand(0, state.width || window.innerWidth || 1),
      y: rand(0, state.height || window.innerHeight || 1),
      vx: Math.cos(angle) * drift,
      vy: Math.sin(angle) * drift,
      radius,
      hue: rand(settings.hueMin, settings.hueMax),
      sat: rand(settings.satMin, settings.satMax),
      lit: rand(settings.litMin, settings.litMax),
      personalSpeed: rand(settings.speedMin, settings.speedMax),
      personalOffset: rand(0, Math.PI * 2),
      opacityMin,
      opacityMax
    };
  }

  function seedParticles() {
    particles.length = 0;
    for (let index = 0; index < count; index += 1) {
      particles.push(createParticle());
    }
  }

  function wrapParticle(particle) {
    if (particle.x < -particle.radius) {
      particle.x = state.width + particle.radius;
    } else if (particle.x > state.width + particle.radius) {
      particle.x = -particle.radius;
    }

    if (particle.y < -particle.radius) {
      particle.y = state.height + particle.radius;
    } else if (particle.y > state.height + particle.radius) {
      particle.y = -particle.radius;
    }
  }

  function draw(now) {
    if (!state.running) {
      return;
    }

    const time = now || performance.now();
    const elapsed = state.lastTime ? Math.min(2.5, (time - state.lastTime) / 16.6667) : 1;
    state.lastTime = time;

    context.clearRect(0, 0, state.width, state.height);

    particles.forEach((particle) => {
      particle.x += particle.vx * elapsed;
      particle.y += particle.vy * elapsed;
      wrapParticle(particle);

      const breathe = (Math.sin((time * particle.personalSpeed) + particle.personalOffset) + 1) * 0.5;
      const opacity = clamp(
        particle.opacityMin + ((particle.opacityMax - particle.opacityMin) * breathe),
        settings.opacityMin,
        settings.opacityMax
      );

      context.beginPath();
      context.fillStyle = `hsla(${particle.hue}, ${particle.sat}%, ${particle.lit}%, ${opacity})`;
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      context.fill();
    });

    state.frameId = window.requestAnimationFrame(draw);
  }

  function start() {
    if (state.running) {
      return;
    }

    state.running = true;
    state.lastTime = 0;
    resize();
    seedParticles();
    canvas.style.opacity = '1';
    state.frameId = window.requestAnimationFrame(draw);
    window.addEventListener('resize', resize, { passive: true });
  }

  function stop({ fadeOutMs = 0 } = {}) {
    if (!state.running) {
      return;
    }

    state.running = false;
    window.cancelAnimationFrame(state.frameId);
    window.removeEventListener('resize', resize);

    if (fadeOutMs > 0) {
      canvas.style.transition = `opacity ${fadeOutMs}ms ease`;
      canvas.style.opacity = '0';
    }
  }

  canvas.style.pointerEvents = 'none';
  canvas.style.opacity = '1';

  return {
    start,
    stop,
    resize
  };
}
