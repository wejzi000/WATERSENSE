$nodeUrl = "https://nodejs.org/dist/v20.11.0/node-v20.11.0-win-x64.msi"
$outputPath = "$env:TEMP\node-installer.msi"

Write-Host "📥 Téléchargement de Node.js v20..."
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
Invoke-WebRequest -Uri $nodeUrl -OutFile $outputPath

Write-Host "⚙️ Installation de Node.js..."
Start-Process msiexec.exe -ArgumentList "/i `"$outputPath`" /quiet /norestart" -Wait

Write-Host "✅ Installation terminée!"
Write-Host "🔄 Relancez le terminal PowerShell pour appliquer les changements."
