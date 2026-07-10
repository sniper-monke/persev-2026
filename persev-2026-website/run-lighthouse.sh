#!/bin/bash
# Lighthouse Performance Audit Script
# Tests Perseverantia mobile optimization

echo "🔍 Running Lighthouse Performance Audit"
echo "========================================"
echo ""

# Check if lighthouse is installed
if ! command -v lighthouse &> /dev/null; then
    echo "⚠️  Lighthouse not found. Installing globally..."
    npm install -g lighthouse
fi

# URLs to test
URLS=(
  "http://localhost:3000/"
  "http://localhost:3000/events.html"
  "http://localhost:3000/leaderboard.html"
)

# Run audits
for url in "${URLS[@]}"; do
    echo "📊 Testing: $url"
    echo ""

    lighthouse "$url" \
      --chrome-flags="--headless --no-sandbox" \
      --output=json \
      --output=html \
      --output-path="./lighthouse-${url##*/}.report" \
      --view=false

    echo ""
    echo "---"
    echo ""
done

echo "✅ Lighthouse audits complete!"
echo ""
echo "Reports generated:"
ls -1 lighthouse-*.report 2>/dev/null || echo "No reports found"
