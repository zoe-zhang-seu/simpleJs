# FROM httpd:alpine
# COPY ./public/ /usr/local/apache2/htdocs/

# EXPOSE 80


# Base image for the server
FROM node:16

# Set the working directory for the server
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the server code
COPY . .

# Expose port for the server
EXPOSE 3000

# Start the server
CMD ["node", "index.js"]
