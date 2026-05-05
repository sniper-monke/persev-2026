# Mobile Optimization Testing Guide

## Quick Start

### 1. Start Development Server
```bash
cd persev-2025-website
npm start
# Server running on http://localhost:3000
```

### 2. Access in Browser
- **Desktop**: http://localhost:3000
- **Mobile View**: Press F12 → Click device toolbar
- **Direct Mobile**: Visit from mobile device at http://[YOUR_IP]:3000

## Testing Scenarios

### A. Mobile Viewport Testing (Chrome DevTools)

#### Step 1: Enable Mobile Emulation
1. Open http://localhost:3000 in Chrome
2. Press `F12` to open DevTools
3. Click device toolbar icon (looks like phone) or press `Ctrl+Shift+M`

#### Step 2: Test Different Devices
Test these viewport sizes:

**iPhones:**
- iPhone SE: 375×667
- iPhone 12/13: 390×844
- iPhone 14 Pro: 393×852

**Android:**
- Pixel 5: 393×851
- Galaxy S21: 360×800
- Galaxy S22 Ultra: 326×915

**Tablets:**
- iPad: 768×1024
- iPad Pro: 1024×1366

#### Step 3: Network Throttling
1. In DevTools, go to "Network" tab
2. Change throttle to "Slow 3G"
3. Reload page - observe load time
4. Check Service Worker cache hits
5. Verify images lazy load

#### Step 4: CPU Throttling
1. In DevTools, go to "Performance" tab
2. Click settings (gear icon)
3. Enable "4x slowdown"
4. Record performance - should stay 60fps

### B. Real Device Testing

#### iOS (iPhone/iPad)

**Setup:**
1. Connect iPhone to same WiFi as computer
2. Get computer IP: `ipconfig getifaddr en0` (Mac) or `ipconfig` (Windows)
3. Visit: `http://[COMPUTER_IP]:3000`

**Testing:**
1. ✅ Does it load without scrolling issues?
2. ✅ Are buttons touch-responsive?
3. ✅ Does responsive design adapt?
4. ✅ Does "Add to Home Screen" prompt appear?
5. ✅ Tap "Add to Home Screen" → Test PWA mode
6. ✅ Does it work offline after added?

**Browser Check:**
- Test in Safari
- Test in Chrome
- Test in Firefox

#### Android

**Setup:**
1. Enable Developer Options: Tap build number 7 times
2. Connect phone via USB
3. Run: `adb devices` (requires ADB installed)
4. Enable USB debugging
5. In Chrome: `chrome://inspect`
6. Navigate to `http://localhost:3000`

**Testing:**
1. ✅ Responsive layout on different screen sizes
2. ✅ Touch interactions smooth
3. ✅ Animations perform at 60fps
4. ✅ Images lazy load properly
5. ✅ PWA install banner appears
6. ✅ Service Worker active

### C. Performance Testing

#### Lighthouse Audit
```bash
# Run Lighthouse
cd persev-2025-website
bash run-lighthouse.sh

# Or manual:
lighthouse http://localhost:3000 --chrome-flags="--headless" --view
```

**Target Scores:**
- Performance: 90+
- Accessibility: 95+
- SEO: 95+
- Best Practices: 90+

#### Web Vitals Monitoring
1. Open DevTools Console
2. Check for Web Vitals data:
```javascript
// Should log metrics
console.table(sessionStorage.getItem('persev_vitals'))
```

#### Chrome DevTools Network
1. Open Network tab
2. Reload page
3. Check:
   - Total requests < 50
   - Total size < 2MB
   - CSS loaded first
   - Images lazy loaded
   - Cache working

### D. Feature Testing

#### Service Worker
1. DevTools → Application → Service Workers
2. Verify: "sw.js" shows as "Active"
3. Go offline (DevTools → Network → Offline)
4. Reload page - should see cached content
5. Go back online

#### PWA Installation
1. **Mobile (iOS):**
   - Tap share → Add to Home Screen
   - Check it launches fullscreen

2. **Mobile (Android):**
   - Menu → Install app
   - Check it appears in app drawer

3. **Desktop (Chrome):**
   - Click install icon in address bar
   - Check it launches as window app

#### Accessibility
1. Enable screen reader (VoiceOver on Mac/iOS)
2. Tab through page - all elements reachable
3. Check focus outlines visible
4. Test with high contrast mode on

### E. Responsive Design Testing

#### Breakpoints to Test
- `< 360px` - Very small phones
- `360-480px` - Small phones
- `480-768px` - Large phones & small tablets
- `768-1024px` - Tablets
- `> 1024px` - Desktops

#### Elements to Check at Each Size
- [ ] Navigation readable
- [ ] Images not distorted
- [ ] Text readable (16px minimum)
- [ ] Buttons touch-friendly (44x44px)
- [ ] No horizontal scroll
- [ ] Proper spacing (12px minimum)
- [ ] Forms usable

### F. Orientation Testing

#### Portrait
- Rotate phone portrait
- Check layout adapts
- No content cut off

#### Landscape
- Rotate phone landscape
- Check layout adapts
- Navigation still accessible
- Notches considered (notch-top/notch-left)

### G. Connection Speed Testing

#### Slow 3G
- DevTools → Network → Slow 3G
- Page should load in < 5 seconds
- Images load progressively
- No white flash

#### Offline
- DevTools → Network → Offline
- Page should show cached version
- Service Worker active

#### Fast 3G
- DevTools → Network → Fast 3G
- Page should load in < 3 seconds

### H. Animation Testing

#### Smooth Animations
1. DevTools → Performance → Record
2. Scroll page, interact with elements
3. Check FPS counter (should be 60fps)
4. Look for dropped frames

#### Reduced Motion
1. DevTools → Rendering → Emulate CSS media feature prefers-reduced-motion
2. Select "prefers-reduced-motion: reduce"
3. Animations should be disabled
4. Interactions still work

### I. Memory Testing

#### Memory Profiling
1. DevTools → Memory tab
2. Take heap snapshot
3. Interact with page
4. Take another snapshot
5. Compare - should be similar

#### Low Memory Devices
1. DevTools → Performance → CPU Throttle
2. Set to 4x or 6x slowdown
3. Should still be responsive

## Automated Testing

### Run All Tests
```bash
cd persev-2025-website
bash test-mobile-optimization.sh
```

### Individual Test Components
```bash
# Test file existence
test -f public/static/mobile-optimized.css && echo "✓ CSS exists"

# Test manifest
curl http://localhost:3000/manifest.json | head -5

# Test Service Worker
curl http://localhost:3000/sw.js | head -5

# Check files served
curl -I http://localhost:3000/static/mobile-optimized.css
```

## Debugging Issues

### White Screen of Death
```javascript
// Check console for errors
// Clear cache: DevTools → Application → Storage → Clear Site Data
// Hard refresh: Ctrl+Shift+R
```

### Service Worker Issues
```javascript
// Unregister all:
navigator.serviceWorker.getRegistrations().then(registrations => {
  registrations.forEach(r => r.unregister());
});

// Clear cache:
caches.keys().then(keys => keys.forEach(k => caches.delete(k)));
```

### Performance Issues
```javascript
// Check device capabilities:
window.MobileOptimization.logReport()

// Check network:
console.log(navigator.connection)

// Check memory:
console.log(performance.memory)
```

## Device Testing Checklist

### iOS ✓
- [ ] iPhone 13/14/15
- [ ] iPhone SE
- [ ] iPad
- [ ] Safari
- [ ] Chrome
- [ ] PWA mode

### Android ✓
- [ ] Flagship (S22/Pixel 7)
- [ ] Mid-range (A13/Pixel 6a)
- [ ] Budget (Redmi/Poco)
- [ ] Chrome
- [ ] Firefox
- [ ] PWA mode

### Desktop ✓
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### Responsive ✓
- [ ] Extra small (320px)
- [ ] Small (480px)
- [ ] Medium (768px)
- [ ] Large (1024px)
- [ ] Extra large (1920px)

## Success Criteria

All tests pass when:
- ✅ Page loads in < 3s (fast connection)
- ✅ Page loads in < 5s (3G connection)
- ✅ Lighthouse score > 90
- ✅ No console errors
- ✅ All interactions work on touch
- ✅ Animations smooth (60fps)
- ✅ Works offline
- ✅ PWA installs successfully
- ✅ Responsive at all breakpoints
- ✅ Accessible via keyboard

---

**Last Updated**: 2026-05-04
**Status**: Ready for Testing
