#!/bin/bash

npm init
node tasks/initProject.js
cp tasks/assets/.gitignore ./
cp tasks/assets/tsconfig.json ./
npm i
cp init.* tasks/assets/
rm init.*
git init
git add .
git commit -m "Initial commit."

