# #!/bin/bash

# echo "------------------Installing npm packages------------------"
# npm install

echo "------------------Installing 'gh-pages'------------------"
npm install --save-dev gh-pages

# Build the React app for production
echo "------------------Building the React app for production------------------"
npm run build

# Deploy the built app to GitHub Pages
echo "------------------Deploying the app to GitHub Pages------------------"
gh-pages -d build
