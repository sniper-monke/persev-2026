// Mobile Viewport & Device Detection Script
// Comprehensive mobile optimization checks

(function() {
  const MobileOptimization = {
    // Device Detection
    detectDevice() {
      return {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        maxTouchPoints: navigator.maxTouchPoints || 0,
        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        isTablet: /iPad|Android(?!.*Mobile)|[^;]*;.*Android/.test(navigator.userAgent),
        isTouchDevice: () => {
          return (('ontouchstart' in window) ||
                  (navigator.maxTouchPoints > 0) ||
                  (navigator.msMaxTouchPoints > 0));
        }
      };
    },

    // Viewport Detection
    detectViewport() {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
        dpr: window.devicePixelRatio,
        orientation: window.innerHeight > window.innerWidth ? 'portrait' : 'landscape',
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        visualViewport: {
          width: window.visualViewport?.width || window.innerWidth,
          height: window.visualViewport?.height || window.innerHeight,
          scale: window.visualViewport?.scale || 1
        }
      };
    },

    // Performance Detection
    detectPerformance() {
      const perf = window.performance || window.webkitPerformance || {};
      const timing = perf.timing || {};

      return {
        navigationStart: timing.navigationStart || 0,
        responseTime: (timing.responseEnd - timing.responseStart) || 0,
        domLoadTime: (timing.domContentLoadedEventEnd - timing.navigationStart) || 0,
        pageLoadTime: (timing.loadEventEnd - timing.navigationStart) || 0,
        resourceCount: perf.getEntriesByType?.('resource')?.length || 0,
        memoryUsage: performance.memory ? {
          jsHeapSizeLimit: performance.memory.jsHeapSizeLimit,
          totalJSHeapSize: performance.memory.totalJSHeapSize,
          usedJSHeapSize: performance.memory.usedJSHeapSize,
          percentUsed: (performance.memory.usedJSHeapSize / performance.memory.jsHeapSizeLimit * 100).toFixed(2)
        } : null
      };
    },

    // Network Detection
    detectNetwork() {
      if (!('connection' in navigator)) return null;

      const conn = navigator.connection;
      return {
        effectiveType: conn.effectiveType,
        downlink: conn.downlink,
        rtt: conn.rtt,
        saveData: conn.saveData,
        type: conn.type
      };
    },

    // Storage Detection
    detectStorage() {
      return {
        localStorage: {
          available: (() => {
            try {
              const test = '__test__';
              localStorage.setItem(test, test);
              localStorage.removeItem(test);
              return true;
            } catch(e) {
              return false;
            }
          })(),
          quota: localStorage.length
        },
        sessionStorage: {
          available: (() => {
            try {
              const test = '__test__';
              sessionStorage.setItem(test, test);
              sessionStorage.removeItem(test);
              return true;
            } catch(e) {
              return false;
            }
          })(),
          quota: sessionStorage.length
        }
      };
    },

    // Feature Detection
    detectFeatures() {
      return {
        serviceWorker: 'serviceWorker' in navigator,
        webWorker: typeof Worker !== 'undefined',
        localStorage: typeof localStorage !== 'undefined',
        sessionStorage: typeof sessionStorage !== 'undefined',
        indexedDB: typeof indexedDB !== 'undefined',
        webGL: (() => {
          try {
            return !!document.createElement('canvas').getContext('webgl');
          } catch(e) {
            return false;
          }
        })(),
        accelerometer: 'Accelerometer' in window,
        gyroscope: 'Gyroscope' in window,
        userMedia: !!(navigator.mediaDevices?.getUserMedia),
        geolocation: 'geolocation' in navigator,
        notification: 'Notification' in window,
        vibration: 'vibrate' in navigator,
        badgeAPI: 'setAppBadge' in navigator
      };
    },

    // Accessibility Detection
    detectAccessibility() {
      return {
        prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
        prefersDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
        prefersLightMode: window.matchMedia('(prefers-color-scheme: light)').matches,
        prefersContrast: window.matchMedia('(prefers-contrast: more)').matches,
        prefersReducedData: window.matchMedia('(prefers-reduced-data: reduce)').matches,
        prefersHighContrast: window.matchMedia('(prefers-contrast: more)').matches
      };
    },

    // Generate Report
    generateReport() {
      return {
        timestamp: new Date().toISOString(),
        device: this.detectDevice(),
        viewport: this.detectViewport(),
        performance: this.detectPerformance(),
        network: this.detectNetwork(),
        storage: this.detectStorage(),
        features: this.detectFeatures(),
        accessibility: this.detectAccessibility()
      };
    },

    // Log to console
    logReport() {
      const report = this.generateReport();
      console.table(report);
      console.log('Full Report:', JSON.stringify(report, null, 2));
      return report;
    },

    // Send to server
    async sendReport() {
      const report = this.generateReport();
      try {
        await fetch('/api/device-report', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(report)
        });
      } catch(e) {
        console.warn('Could not send device report:', e);
      }
    }
  };

  // Auto-detect and log
  window.addEventListener('load', () => {
    window.MobileOptimization = MobileOptimization;

    // Log in dev mode
    if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
      MobileOptimization.logReport();
    }

    // Send report (optional)
    // MobileOptimization.sendReport();
  });
})();
