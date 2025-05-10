#!/bin/bash

ROOT=$(pwd)  # Use current directory

echo "Using ROOT: $ROOT"

echo "Creating folders..."
mkdir -vp "$ROOT/assets/css"
mkdir -vp "$ROOT/assets/js"
mkdir -vp "$ROOT/assets/images/placeholder"
mkdir -vp "$ROOT/examples/code-samples"

echo "Creating HTML files..."
for file in index.html data-sources.html data-engineering.html ai-components.html ai-applications.html architecture.html; do
    echo "Creating $file"
    touch "$ROOT/$file"
done

echo "Creating CSS and JS files..."
touch "$ROOT/assets/css/styles.css"
touch "$ROOT/assets/css/responsive.css"
touch "$ROOT/assets/js/main.js"
touch "$ROOT/assets/js/architecture.js"

echo "Creating README..."
touch "$ROOT/README.md"

echo "✅ All files and folders created successfully under: $ROOT"
