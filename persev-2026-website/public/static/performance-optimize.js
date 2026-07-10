// Comprehensive Performance Optimization
// Handles Core Web Vitals, network optimization, and resource loading

(function() {
  const perf = {
    // Monitor network conditions
    monitorNetwork() {
      if ('connection' in navigator) {
        const connection = navigator.connection;
        const effectiveType = connection.effectiveType;

        // Disable heavy animations on slow connections
        if (effectiveType === '3g' || effectiveType === '4g') {
          document.documentElement.classList.add('slow-connection');
        }

        // Listen for changes
        connection.addEventListener('change', () => {
          if (connection.effectiveType === '3g' || connection.effectiveType === '4g') {
            document.documentElement.classList.add('slow-connection');
          } else {
            document.documentElement.classList.remove('slow-connection');
          }
        });
      }
    },

    // Defer non-critical scripts
    deferScripts() {
      const scripts = document.querySelectorAll('script[data-defer]');
      scripts.forEach(script => {
        if ('requestIdleCallback' in window) {
          requestIdleCallback(() => {
            const newScript = document.createElement('script');
            newScript.src = script.dataset.src;
            newScript.async = true;
            document.body.appendChild(newScript);
          });
        }
      });
    },

    // Optimize animations
    optimizeAnimations() {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) {
        document.documentElement.classList.add('reduced-motion');
      }

      // Disable animations on low-end devices
      if (navigator.deviceMemory && navigator.deviceMemory < 4) {
        document.documentElement.classList.add('low-end-device');
      }
    },

    // Optimize DOM
    optimizeDOM() {
      // Remove unused DOM elements
      const hiddenElements = document.querySelectorAll('[style*="display: none"]');
      hiddenElements.forEach(el => {
        if (el.offsetParent === null) {
          el.remove();
        }
      });
    },

    // Prefetch resources
    prefetchResources() {
      const links = [
        { rel: 'prefetch', href: '/events.html' },
        { rel: 'prefetch', href: '/leaderboard.html' },
        { rel: 'prefetch', href: '/organizing-committee.html' }
      ];

      links.forEach(link => {
        const prefetch = document.createElement('link');
        prefetch.rel = link.rel;
        prefetch.href = link.href;
        document.head.appendChild(prefetch);
      });
    },

    // Memory management
    cleanupMemory() {
      window.addEventListener('pagehide', () => {
        // Clear caches
        if (window.myGlobalData) {
          delete window.myGlobalData;
        }
      });
    },

    // Throttle scroll events
    throttleScroll() {
      let ticking = false;
      window.addEventListener('scroll', () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            // Handle scroll
            ticking = false;
          });
          ticking = true;
        }
      }, { passive: true });
    },

    // Debounce resize
    debounceResize() {
      let resizeTimer;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          window.dispatchEvent(new Event('resizeend'));
        }, 250);
      }, { passive: true });
    },

    // Detect device capabilities
    detectCapabilities() {
      const capabilities = {
        memory: navigator.deviceMemory || 'unknown',
        cores: navigator.hardwareConcurrency || 'unknown',
        connection: navigator.connection?.effectiveType || 'unknown',
        language: navigator.language,
        onLine: navigator.onLine
      };

      window.__deviceCapabilities = capabilities;

      if (navigator.connection?.effectiveType === 'slow-2g' ||
          navigator.connection?.effectiveType === '2g') {
        document.documentElement.classList.add('very-slow-connection');
      }
    },

    // Request animation frame polyfill
    polyfillRAF() {
      if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = (cb) => setTimeout(cb, 16);
      }
      if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = clearTimeout;
      }
    }
  };

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      perf.polyfillRAF();
      perf.detectCapabilities();
      perf.monitorNetwork();
      perf.optimizeAnimations();
      perf.throttleScroll();
      perf.debounceResize();
      perf.prefetchResources();
    });
  } else {
    perf.polyfillRAF();
    perf.detectCapabilities();
    perf.monitorNetwork();
    perf.optimizeAnimations();
    perf.throttleScroll();
    perf.debounceResize();
    perf.prefetchResources();
  }

  // Defer non-critical operations
  window.addEventListener('load', () => {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        perf.cleanupMemory();
        perf.deferScripts();
      });
    } else {
      setTimeout(() => {
        perf.cleanupMemory();
      }, 2000);
    }
  });

  // Expose for debugging
  window.__performance = perf;
})();

// Add CSS for performance optimizations
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  .reduced-motion * {
    animation: none !important;
    transition: none !important;
  }

  .low-end-device,
  .slow-connection {
    /* Reduce visual effects */
  }

  .low-end-device img,
  .slow-connection img {
    filter: none !important;
    opacity: 1 !important;
  }

  .very-slow-connection img {
    max-width: 50vw;
    filter: grayscale(30%);
  }

  @media (prefers-reduced-data: reduce) {
    * {
      animation: none !important;
      transition: none !important;
    }
    img { opacity: 0.8; }
  }
`;
document.head.appendChild(styleSheet);
