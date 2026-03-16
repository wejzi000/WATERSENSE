#!/usr/bin/env python3
"""
WaterSense - Simple HTTP Server
Démarrage rapide sans Node.js requis
"""

import http.server
import socketserver
import os
import webbrowser
from pathlib import Path

PORT = 3000
DIRECTORY = Path(__file__).parent / "public"

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(DIRECTORY), **kwargs)
    
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

def run_server():
    """Lance le serveur HTTP"""
    os.chdir(DIRECTORY)
    
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        url = f"http://localhost:{PORT}"
        print(f"""
╔════════════════════════════════════════════════════════════════╗
║           🚀 WaterSense - Server Started                       ║
╠════════════════════════════════════════════════════════════════╣
║                                                                ║
║  📍 Application URL: {url:<42} ║
║  📍 Dashboard URL:   {url}/dashboard.html{:<33} ║
║                                                                ║
║  💡 Ctrl+C to stop the server                                ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
        """)
        
        try:
            # Ouverture automatique du navigateur
            webbrowser.open(url)
            print("📱 Opening browser... Please wait!\n")
        except Exception as e:
            print(f"Could not open browser: {e}\n")
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\n✋ Server stopped.")
            httpd.server_close()

if __name__ == "__main__":
    run_server()
