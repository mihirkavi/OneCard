#!/bin/bash
set -e

echo "Building static export for GitHub Pages..."

if [ -d "app/api" ]; then
  echo "Temporarily moving app/api directory..."
  mv app/api app/_api_backup
fi

GITHUB_PAGES=true npx next build

if [ -d "app/_api_backup" ]; then
  echo "Restoring app/api directory..."
  mv app/_api_backup app/api
fi

echo "Static export complete! Output is in the 'out/' directory."
echo "Deploy the 'out/' folder to GitHub Pages."
