import http.server
import socketserver
import os
from urllib.parse import unquote

PORT = 5000
HOST = "0.0.0.0"

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
    
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()
    
    def translate_path(self, path):
        path = unquote(path)
        
        if path == "/" or path == "/index.html":
            return os.path.join(os.getcwd(), "public", "index.html")
        
        decoded_path = path.lstrip("/")
        
        root_file = os.path.join(os.getcwd(), decoded_path)
        if os.path.exists(root_file):
            return root_file
        
        public_file = os.path.join(os.getcwd(), "public", decoded_path)
        if os.path.exists(public_file):
            return public_file
        
        return root_file

class ReusableTCPServer(socketserver.TCPServer):
    allow_reuse_address = True

with ReusableTCPServer((HOST, PORT), CustomHandler) as httpd:
    print(f"Serving at http://{HOST}:{PORT}")
    httpd.serve_forever()
