FROM node:lts-alpine

# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#global-npm-dependencies
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
# optionally, to run npm global bin without specifying path
ENV PATH=$PATH:/home/node/.npm-global/bin

USER root

RUN mkdir -p /build-dir
WORKDIR /build-dir

COPY package*.json ./

RUN npm install
RUN npm install -g @angular/cli

RUN mkdir -p /app-dir
WORKDIR /app-dir

RUN ln -sfn /build-dir/node_modules node_modules

COPY . ./

EXPOSE 4200

CMD /bin/sh docker/entrypoint.sh
