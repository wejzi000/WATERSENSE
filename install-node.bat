@echo off
echo Telechargement de Node.js...
powershell -Command "Invoke-WebRequest -Uri 'https://nodejs.org/dist/v20.11.0/node-v20.11.0-win-x64.msi' -OutFile '%TEMP%\node.msi'"

if exist "%TEMP%\node.msi" (
    echo Installation de Node.js...
    msiexec /i "%TEMP%\node.msi" /quiet /norestart
    echo Installation en cours... Veuillez attendre.
    timeout /t 30
    echo Installation terminee. Veuillez relancer le terminal.
) else (
    echo Erreur: Le fichier n'a pas pu etre telecharge.
    echo Telechargez manuellement: https://nodejs.org/
)
pause
