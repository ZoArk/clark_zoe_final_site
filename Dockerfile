# Base image
FROM node:20-alpine as build

# Set working directory
WORKDIR /clark_zoe_final_site

# Copy project files
COPY . .

# Install dependencies
RUN yarn install

# Build app
RUN yarn build

# Use Nginx to serve
FROM nginx:alpine

# Copy build output to Nginx directory
COPY --from=build /clark_zoe_final_site/build /usr/share/nginx/html

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose desired port
EXPOSE 5575

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]
