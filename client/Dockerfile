# base stage
# pull official base image
FROM node:18-alpine3.15 as base-stage

# set working directory
WORKDIR /home/cokodocs/app

# copied package.json and package-lock.json to Docker environment
COPY package.json ./
COPY package-lock.json ./

# install all node packages
RUN npm install

# build stage
FROM base-stage as build-stage

# copies everything over to Docker environment
COPY . ./
RUN npm build

# pull the official nginx1.23.1-alpine base image
FROM nginx:1.23.1-alpine as production-stage

# set working directory to nginx resources directory
WORKDIR /usr/share/nginx/html

# remove default nginx static resources
RUN rm -rf ./*

# copies static resources from build stage
COPY --from=build-stage /home/node/app/_build /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

# containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
