# base stage
# pull official base image
FROM node:18-alpine3.15 as base-stage

# set working directory
WORKDIR /app

# copied package.json and package-lock.json to Docker environment
COPY package*.json ./

# install all node packages
RUN npm install

# copies everything over to Docker environment
COPY . ./
RUN npm run build

#Stage 2
#######################################
# pull the official nginx1.23.1-alpine base image
FROM nginx:1.23.1-alpine

#copies React to the container directory
# Set working directory to nginx resources directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static resources
RUN rm -rf ./*

# Copies static resources from builder stage
COPY --from=base-stage /app/build .

# containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
