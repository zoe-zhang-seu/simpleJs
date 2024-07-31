# Docker Volumes for Auto-Reflecting Frontend Changes

## Overview

Docker volumes enable real-time updates of frontend HTML and JavaScript files without needing to rebuild or restart your Docker containers. This is achieved by mounting a local directory into a container.

## How Docker Volumes Work

1. **Mounting Local Files**: Volumes allow you to mount a directory from your local filesystem into a directory inside the container. This keeps your files in sync between the host machine and the container.

2. **Automatic Updates**: Changes made to files on your local machine are reflected inside the container immediately because the container uses the same files from the host.

## Example Configuration

### Docker Compose Configuration

Here’s how you can set up your `docker-compose.yml` file to use volumes:

```yaml
version: '3'
services:
  web:
    container_name: app
    ports:
      - "8080:80"
    build:
      context: ./app
      dockerfile: Dockerfile
    volumes:
      - ./app/public:/usr/local/apache2/htdocs
    depends_on:
      - server
  server:
    container_name: server
    build:
      context: ./server
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
  db:
    image: postgres:latest
    container_name: postgres_db
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: mydatabase
    ports:
      - "5432:5432"
```

* **`volumes`**: Maps the local directory `./app/public` to the container’s `/usr/local/apache2/htdocs`. This ensures that any changes to files in `./app/public` are instantly available in the container.



