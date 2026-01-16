# OneCard Asset Gallery

## Overview
This project is a static asset gallery that displays design assets and business documents for the OneCard project. It serves images, PDFs, spreadsheets, and video files through a web interface.

## Project Architecture
- **server.py**: Python HTTP server that serves static files on port 5000
- **public/index.html**: Main HTML page with asset gallery interface
- **Root directory**: Contains all OneCard design assets (images, PDFs, documents)

## Running the Project
The project runs via a simple Python HTTP server:
```bash
python server.py
```

## Technical Details
- Server: Python's built-in http.server with custom handler
- Port: 5000 (bound to 0.0.0.0)
- Features: URL decoding for file names with spaces, cache control headers

## Asset Categories
- Images: PNG/JPEG files (logos, backgrounds, card designs)
- Documents: PDFs (pitch deck, business model, presentation)
- Spreadsheets: XLSX/XLS files (financial models, projections)
- Videos: MP4 files (meeting recordings)
