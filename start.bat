@echo off
title Blood Bank Management System - Startup
color 0C

echo.
echo  =========================================
echo   Blood Bank Management System - Windows
echo  =========================================
echo.

:: Check if Node is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo  [ERROR] Node.js not found. Please install from https://nodejs.org
    pause
    exit /b 1
)

:: Check if npm is installed
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo  [ERROR] npm not found. Please install Node.js from https://nodejs.org
    pause
    exit /b 1
)

echo  [1/4] Installing backend dependencies...
cd /d "%~dp0backend"
call npm install --silent
echo  [OK] Backend deps ready
echo.

echo  [2/4] Installing frontend dependencies...
cd /d "%~dp0frontend"
call npm install --silent
echo  [OK] Frontend deps ready
echo.

echo  [3/4] Seeding admin account...
cd /d "%~dp0backend"
call npm run seed
echo.

echo  [4/4] Starting servers...
echo.
echo   Backend  --^>  http://localhost:5000
echo   Frontend --^>  http://localhost:5173
echo.
echo  Both servers are starting in separate windows.
echo  Close those windows (or press Ctrl+C in them) to stop.
echo.

:: Start backend in a new window
start "BBMS - Backend" cmd /k "cd /d "%~dp0backend" && npm run dev"

:: Small delay so backend starts first
timeout /t 3 /nobreak >nul

:: Start frontend in a new window
start "BBMS - Frontend" cmd /k "cd /d "%~dp0frontend" && npm run dev"

:: Open browser after a short delay
timeout /t 4 /nobreak >nul
start http://localhost:5173

echo  Done! Browser opening at http://localhost:5173
echo  (Close the Backend and Frontend windows to stop the servers)
echo.
pause