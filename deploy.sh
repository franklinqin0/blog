#!/usr/bin/env sh

# abort on errors
set -e

# build
npm install && npm run build

# navigate into the build output directory
cd public

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:franklinqin0/franklinqin0.github.io.git master:gh-pages

cd -
