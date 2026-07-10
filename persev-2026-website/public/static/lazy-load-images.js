// Lazy Loading Images Optimization
// Progressive image loading with blur-up effect

(function() {
  if (!('IntersectionObserver' in window)) {
    // Fallback for older browsers
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
      img.src = img.dataset.src || img.src;
    });
    return;
  }

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.dataset.src || img.src;
        const srcset = img.dataset.srcset;

        img.onload = () => {
          img.classList.remove('lazy-load');
          img.classList.add('lazy-loaded');
        };

        if (srcset) {
          img.srcset = srcset;
        }
        img.src = src;

        // For low-end devices, unload large images
        if (navigator.deviceMemory && navigator.deviceMemory < 4) {
          img.loading = 'lazy';
        }

        imageObserver.unobserve(img);
      }
    });
  }, {
    rootMargin: '50px 0px',
    threshold: 0.01
  });

  // Optimize images on low-end devices
  const isLowEndDevice = () => {
    if (navigator.deviceMemory && navigator.deviceMemory < 4) return true;
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 2) return true;
    if ('connection' in navigator && navigator.connection.effectiveType) {
      return navigator.connection.effectiveType === '4g' || navigator.connection.effectiveType === '3g';
    }
    return false;
  };

  document.querySelectorAll('img').forEach(img => {
    // Skip very small images
    if (img.width < 10 || img.height < 10) return;

    // Add lazy loading
    if (!img.loading) {
      img.loading = 'lazy';
    }

    // Reduce image quality on low-end devices
    if (isLowEndDevice()) {
      img.style.filter = 'none';
      img.classList.add('low-end-device');
    }

    imageObserver.observe(img);
  });

  // Optimize background images
  document.querySelectorAll('[style*="background-image"]').forEach(el => {
    const bgImage = el.style.backgroundImage;
    if (bgImage && bgImage.includes('url')) {
      el.loading = 'lazy';
    }
  });

  // Handle image errors gracefully
  document.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
      e.target.src = '/assets/landing.png'; // Fallback image
      e.target.classList.add('image-error');
    }
  }, true);
})();

// Optimize SVG loading
(function() {
  const svgs = document.querySelectorAll('img[src$=".svg"]');
  svgs.forEach(svg => {
    // SVGs can be inline for better performance
    if (svg.dataset.inline === 'true') {
      fetch(svg.src)
        .then(res => res.text())
        .then(svg_text => {
          const container = document.createElement('div');
          container.innerHTML = svg_text;
          svg.parentNode.replaceChild(container, svg);
        })
        .catch(() => {}); // Keep fallback
    }
  });
})();
