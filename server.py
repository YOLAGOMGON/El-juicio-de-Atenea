#!/usr/bin/env python3
"""
Servidor HTTP simple para ejecutar el proyecto Atenea
Solución al problema de CORS con módulos ES6
"""
import http.server
import socketserver
import os
import webbrowser

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Agregar headers CORS
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def log_message(self, format, *args):
        # Reducir el logging para que sea más limpio
        return

def main():
    # Cambiar al directorio del script
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        url = f"http://localhost:{PORT}/index.html"
        print("=" * 60)
        print(f"Servidor iniciado en http://localhost:{PORT}")
        print(f"Abre tu navegador en: {url}")
        print("=" * 60)
        print("Presiona Ctrl+C para detener el servidor")
        print("=" * 60)
        
        # Abrir el navegador automáticamente
        try:
            webbrowser.open(url)
        except:
            pass
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\nServidor detenido.")

if __name__ == "__main__":
    main()


