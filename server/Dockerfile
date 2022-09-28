FROM node:18-alpine3.15

RUN apt-get update \ && apt-get upgrade -y \ && apt-get install -y vim

WORKDIR /home/node/cokodocs

COPY package.json .
COPY yarn.lock .

RUN chown -R node:node .
USER node

RUN yarn install
RUN yarn cache clean
COPY --chown=node:node . .
