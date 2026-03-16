@echo off
REM WaterSense - Quick Start
REM Ouvre directement l'application dans le navigateur

echo.
echo ╔════════════════════════════════════════════════════════════════╗
echo ║           ▌W▌A▌T▌E▌R▌S▌E▌N▌S▌E▌ - QUICK START                  ║
echo ╚════════════════════════════════════════════════════════════════╝
echo.

REM Get the directory where the batch file is located
set SCRIPT_DIR=%~dp0

REM Navigate to the public folder
cd /d "%SCRIPT_DIR%public"

echo 📁 Opening WaterSense application from:
echo    %SCRIPT_DIR%public
echo.

REM Open the main page
echo 🌐 Opening site marketing and dashboard...
echo.

start index.html

timeout /t 3

echo ✅ Application launched!
echo.
echo Available pages:
echo  • http://localhost:3000 (if using local server)
echo  • index.html - Site marketing
echo  • dashboard.html - Dashboard agriculteur
echo.
echo.
pause
