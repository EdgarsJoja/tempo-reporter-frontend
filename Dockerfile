FROM node:lts-alpine

# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#global-npm-dependencies
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
# optionally, to run npm global bin without specifying path
ENV PATH=$PATH:/home/node/.npm-global/bin

USER root

RUN mkdir -p app/build-dir
RUN mkdir -p app/app-dir

RUN chown -R node:node app

USER node

WORKDIR /app/build-dir

COPY package*.json ./

RUN npm install
RUN npm install -g @angular/cli

WORKDIR /app/app-dir

RUN ln -sfn /app/build-dir/node_modules node_modules

COPY . ./

EXPOSE 4200

CMD /bin/sh docker/entrypoint.sh
