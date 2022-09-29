# pull official base image
FROM node:18-alpine3.15

# install dependencies
RUN apt-get update \ && apt-get upgrade -y \ && apt-get install -y vim

# set working directory
WORKDIR /home/node/cokodocs

# copy package.json and package-lock.json to Docker environment
COPY package.json .
COPY package-lock.json .

RUN chown -R node:node .
USER node

# install all node packages
RUN npm install
RUN npm cache clean
COPY --chown=node:node . .
