#!/bin/bash
# Mobile Optimization Testing Script
# Tests all aspects of mobile UI optimization

echo "🚀 Perseverantia Mobile Optimization Testing"
echo "============================================="
echo ""

# Test 1: Verify CSS files exist
echo "✓ Test 1: Checking CSS files..."
files_to_check=(
  "public/static/mobile-optimized.css"
  "public/static/critical-css.css"
)

for file in "${files_to_check[@]}"; do
  if [ -f "$file" ]; then
    size=$(wc -c < "$file")
    echo "  ✓ $file ($(($size / 1024))KB)"
  else
    echo "  ✗ $file MISSING"
  fi
done
echo ""

# Test 2: Verify JavaScript files exist
echo "✓ Test 2: Checking JavaScript files..."
js_files=(
  "public/sw.js"
  "public/static/web-vitals.js"
  "public/static/lazy-load-images.js"
  "public/static/font-optimize.js"
  "public/static/performance-optimize.js"
)

for file in "${js_files[@]}"; do
  if [ -f "$file" ]; then
    size=$(wc -c < "$file")
    echo "  ✓ $file ($(($size / 1024))KB)"
  else
    echo "  ✗ $file MISSING"
  fi
done
echo ""

# Test 3: Verify manifest
echo "✓ Test 3: Checking manifest.json..."
if [ -f "public/manifest.json" ]; then
  echo "  ✓ manifest.json exists"
else
  echo "  ✗ manifest.json MISSING"
fi
echo ""

# Test 4: Check HTML files have correct meta tags
echo "✓ Test 4: Checking HTML meta tags..."
html_files=("public/index.html" "public/events.html" "public/landing.html")

for file in "${html_files[@]}"; do
  if grep -q "viewport-fit=cover" "$file"; then
    echo "  ✓ $file has viewport-fit"
  else
    echo "  ✗ $file missing viewport-fit"
  fi
done
echo ""

# Test 5: Verify Service Worker
echo "✓ Test 5: Checking Service Worker..."
if grep -q "CACHE_NAME" "public/sw.js"; then
  echo "  ✓ Service Worker caching configured"
else
  echo "  ✗ Service Worker not properly configured"
fi
echo ""

# Test 6: HTTP responses
echo "✓ Test 6: Testing HTTP responses..."
echo "  Checking index.html..."
status=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/index.html)
if [ "$status" = "200" ]; then
  echo "    ✓ Status: $status"
else
  echo "    ✗ Status: $status"
fi

echo "  Checking manifest.json..."
status=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/manifest.json)
if [ "$status" = "200" ]; then
  echo "    ✓ Status: $status"
else
  echo "    ✗ Status: $status"
fi

echo "  Checking mobile-optimized.css..."
status=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/static/mobile-optimized.css)
if [ "$status" = "200" ]; then
  echo "    ✓ Status: $status"
else
  echo "    ✗ Status: $status"
fi
echo ""

# Test 7: File sizes
echo "✓ Test 7: Asset file sizes..."
for file in public/static/*.css public/static/*.js public/manifest.json public/sw.js; do
  if [ -f "$file" ]; then
    size=$(wc -c < "$file")
    if [ $size -gt 1048576 ]; then
      echo "  ⚠ $file is large: $(($size / 1024 / 1024))MB"
    else
      echo "  ✓ $file: $(($size / 1024))KB"
    fi
  fi
done
echo ""

# Test 8: Critical CSS inline check
echo "✓ Test 8: Checking critical CSS inline..."
if grep -q "critical-css" "public/index.html"; then
  echo "  ✓ Critical CSS reference found"
else
  echo "  ⚠ Critical CSS might not be inlined"
fi
echo ""

echo "============================================="
echo "✅ Testing Complete!"
echo ""
echo "Next steps:"
echo "1. Open http://localhost:3000 in browser"
echo "2. Test on mobile device"
echo "3. Run Lighthouse audit"
echo "4. Check Network tab for optimization"
