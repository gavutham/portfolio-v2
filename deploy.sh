#!/usr/ben/env sh

#abort on errors
set -e

#build 
npm run build

#navigate into the build output directory
cd dist

#place .nojekyll to bypass Jekyll processing
echo > .nojekyll

#if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
echo 'www.gavutham.me' > CNAME

git init
git checkout -B main
git add -A
git commit -m "deploy"

#if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>.github.io.git main

#if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:gavutham/portfolio-v2.git main:gh-pages

cd -
