#!/bin/bash
# Compila la presentación para uso sin internet. Uso: bash compilar.sh
set -e; cd "$(dirname "$0")"; mkdir -p dist
npx esbuild src/main.js --bundle --format=iife --minify --target=es2020 --legal-comments=eof --outfile=dist/app.js
cp node_modules/reveal.js/dist/reveal.css dist/reveal.css
cp src/estilos.css dist/estilos.css
echo "Listo: abre index.html en Chrome, Edge o Firefox."
