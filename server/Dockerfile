# pull official base image
FROM node:18-alpine3.15

# creating directories
RUN apk add --no-cache git python2 make g++

# set working directory
WORKDIR /home/node/cokodocs

# copy package.json and package-lock.json to Docker environment
COPY package.json .
COPY package-lock.json .

# update permissions.
RUN chown -R node:node .
USER node

# install all node packages
RUN npm install
COPY --chown=node:node . .

CMD [ "node", "index.js" ]