# フロントエンドのDockerfile
FROM node:18-slim

# 作業ディレクトリの設定
WORKDIR /app

# インストール
RUN apt-get update \
    && apt-get install -y

# Vue CLIのインストール
RUN npm install -g @vue/cli
