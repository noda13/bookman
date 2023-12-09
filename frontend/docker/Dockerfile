# フロントエンドのDockerfile
FROM node:18-slim

# 作業ディレクトリの設定
WORKDIR /app

# インストール
RUN apt-get update \
    && apt-get install -y

# アプリケーションのソースをコピー
COPY . .

# 依存関係のインストール
RUN npm install

# Vue CLIのインストール
RUN npm install -g @vue/cli

ENV HOST=0.0.0.0 PORT=3000

EXPOSE ${PORT}
CMD [ "node", "." ]