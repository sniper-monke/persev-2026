// Font Loading Optimization
// Loads fonts strategically to minimize layout shift and improve perceived performance

(function() {
  // Font loading strategy: avoid FOUT/FOIT
  const fontOptimization = {
    // Preload critical fonts
    preloadCritical() {
      if (!('fonts' in document)) {
        document.documentElement.classList.add('mestizo-loaded', 'fonts-loaded');
        return;
      }

      const timeout = function (ms) {
        return new Promise(function (resolve) {
          setTimeout(resolve, ms);
        });
      };

      const loadFont = function (name) {
        return new FontFaceObserver(name).load().catch(function () {});
      };

      loadFont('Mestizo').then(function () {
        document.documentElement.classList.add('mestizo-loaded');
      });

      /* Rajdhani/Orbitron are not on every page; never block on them */
      Promise.race([
        Promise.all([loadFont('Rajdhani'), loadFont('Orbitron')]),
        timeout(2800)
      ]).finally(function () {
        document.documentElement.classList.add('fonts-loaded');
      });
    },

    // Add font swap behavior
    addFontSwap() {
      const style = document.createElement('style');
      style.textContent = `
        @font-face {
          font-family: 'Mestizo';
          font-display: swap;
        }
        @font-face {
          font-family: 'Rajdhani';
          font-display: swap;
        }
        @font-face {
          font-family: 'Orbitron';
          font-display: swap;
        }
      `;
      document.head.appendChild(style);
    },

    // Reduce layout shift from font loading
    reduceLayoutShift() {
      const styles = document.createElement('style');
      styles.textContent = `
        body { font-display: swap; }
        h1, h2, h3, h4, h5, h6 { font-size-adjust: 0.5; }
      `;
      document.head.appendChild(styles);
    }
  };

  // Execute optimizations
  document.addEventListener('DOMContentLoaded', () => {
    fontOptimization.addFontSwap();
    fontOptimization.reduceLayoutShift();
  });

  // Defer non-critical font loading
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      fontOptimization.preloadCritical();
    });
  } else {
    setTimeout(() => {
      fontOptimization.preloadCritical();
    }, 2000);
  }
})();

// FontFaceObserver polyfill (lightweight version)
window.FontFaceObserver = window.FontFaceObserver || class FontFaceObserver {
  constructor(name) {
    this.name = name;
  }
  load() {
    return new Promise(resolve => {
      if (document.fonts && document.fonts.check) {
        const check = () => {
          if (document.fonts.check(`12px "${this.name}"`)) {
            resolve();
          } else {
            setTimeout(check, 100);
          }
        };
        check();
      } else {
        resolve(); // Fallback
      }
    });
  }
};
