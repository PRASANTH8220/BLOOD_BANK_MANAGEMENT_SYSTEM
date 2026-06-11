#!/bin/bash

echo "🩸 Blood Bank Management System - Localhost Startup"
echo "===================================================="
echo ""

# Check MongoDB
if ! command -v mongod &> /dev/null; then
    echo "❌ MongoDB not found. Please install MongoDB Community first."
    echo "   https://www.mongodb.com/try/download/community"
    exit 1
fi

echo "📦 Installing backend dependencies..."
cd backend && npm install --silent
echo "✅ Backend deps ready"

echo ""
echo "📦 Installing frontend dependencies..."
cd ../frontend && npm install --silent
echo "✅ Frontend deps ready"

echo ""
echo "🌱 Seeding admin account..."
cd ../backend && npm run seed

echo ""
echo "🚀 Starting servers..."
echo "   Backend  → http://localhost:5000"
echo "   Frontend → http://localhost:5173"
echo ""
echo "Press Ctrl+C to stop both servers."
echo ""

# Start both servers
cd ../backend && npm run dev &
BACKEND_PID=$!

cd ../frontend && npm run dev &
FRONTEND_PID=$!

# Wait and cleanup on exit
trap "kill $BACKEND_PID $FRONTEND_PID 2>/dev/null; exit 0" INT TERM
wait
