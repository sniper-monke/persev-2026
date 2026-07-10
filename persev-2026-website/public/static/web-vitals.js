// Web Vitals Tracking for Performance Monitoring
// Tracks LCP, FID, CLS for Perseverantia

(function() {
  if (!window.requestAnimationFrame) {
    return;
  }

  const vitals = {
    LCP: null,
    FID: null,
    CLS: null,
    TTFB: null,
  };

  // Track Largest Contentful Paint (LCP)
  if ('PerformanceObserver' in window) {
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        vitals.LCP = lastEntry.renderTime || lastEntry.loadTime;
        sendVital('LCP', vitals.LCP);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      console.warn('LCP observer not supported');
    }

    // Track First Input Delay (FID)
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!vitals.FID) {
            vitals.FID = entry.processingDuration;
            sendVital('FID', vitals.FID);
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      console.warn('FID observer not supported');
    }

    // Track Cumulative Layout Shift (CLS)
    try {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            vitals.CLS = clsValue;
            sendVital('CLS', vitals.CLS);
          }
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      console.warn('CLS observer not supported');
    }
  }

  // Track Time to First Byte (TTFB)
  window.addEventListener('load', function() {
    if (window.performance && window.performance.timing) {
      const navigationStart = window.performance.timing.navigationStart;
      const responseStart = window.performance.timing.responseStart;
      vitals.TTFB = responseStart - navigationStart;
      sendVital('TTFB', vitals.TTFB);
    }
  }, false);

  // Send vital data
  function sendVital(name, value) {
    if (navigator.sendBeacon) {
      const payload = JSON.stringify({ metric: name, value: value, timestamp: Date.now() });
      navigator.sendBeacon('/api/vitals', payload);
    }
  }

  // Store vitals in session storage
  window.addEventListener('beforeunload', function() {
    sessionStorage.setItem('persev_vitals', JSON.stringify(vitals));
  });

  // Log vitals to console in development
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.table(vitals);
  }
})();

// Performance.now() polyfill
if (!window.performance) {
  window.performance = {};
}
if (!window.performance.now) {
  let perfNow = Date.now();
  window.performance.now = function() {
    return Date.now() - perfNow;
  };
}
