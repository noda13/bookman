# バックエンドのDockerfile
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

# loopback CLIのインストール
RUN npm install -g @loopback/cli

ENV HOST=0.0.0.0 PORT=3001

EXPOSE ${PORT}
CMD [ "node", "." ]