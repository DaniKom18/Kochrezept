# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:latest as build

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm install

# Install Agnular
RUN npm install -g @angular/cli

# Generate the build of the application
RUN ng build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/kochrezept/browser /usr/share/nginx/html

COPY --from=build /usr/local/app/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80
