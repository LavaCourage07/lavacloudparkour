#!/bin/bash

echo "🚀 Starting LavaCloud Parkour Development Server..."
echo ""
echo "📍 Server will run at: http://localhost:8000"
echo ""
echo "🎮 Access your website:"
echo "   Homepage:     http://localhost:8000"
echo "   Game Page:    http://localhost:8000/game/snow-rider-3d.html"
echo "   Play Page:    http://localhost:8000/play/snow-rider-3d.html"
echo "   Guide Page:   http://localhost:8000/guide/snow-rider-3d.html"
echo "   Collection:   http://localhost:8000/collections/snow.html"
echo ""
echo "💡 Press Ctrl+C to stop the server"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Start Python HTTP server
python3 -m http.server 8000
