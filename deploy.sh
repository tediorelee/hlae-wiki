#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd .vuepress/dist

git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push -f https://FebQltwcIW:9335b52e82cece10aa0cd126e2917875de881211@e.coding.net/tediorelee/tediorelee.git master

# https://FebQltwcIW:9335b52e82cece10aa0cd126e2917875de881211@e.coding.net/tediorelee/tediorelee.git

git push

cd -