# バックエンドのDockerfile
FROM node:18-slim

# 作業ディレクトリの設定
WORKDIR /app

# インストール
RUN apt-get update \
    && apt-get install -y

# loopback CLIのインストール
RUN npm install -g @loopback/cli


# # Check out https://hub.docker.com/_/node to select a new base image
# FROM node:18-slim

# # Set to a non-root built-in user `node`
# USER node

# # Create app directory (with user `node`)
# RUN mkdir -p /home/node/app

# WORKDIR /home/node/app

# # Change npm's default directory to another directory
# RUN mkdir ~/.npm-global
# RUN npm config set prefix '~/.npm-global'

# # Install app dependencies
# # A wildcard is used to ensure both package.json AND package-lock.json are copied
# # where available (npm@5+)
# COPY --chown=node package*.json ./

# RUN npm install -g @loopback/cli
# ENV PATH="/home/node/.npm-global/bin:${PATH}"

# RUN npm install

# # Bundle app source code
# COPY --chown=node . .

# RUN npm run build

# Bind to all network interfaces so that it can be mapped to the host OS
ENV HOST=0.0.0.0 PORT=3001

EXPOSE ${PORT}
CMD [ "node", "." ]