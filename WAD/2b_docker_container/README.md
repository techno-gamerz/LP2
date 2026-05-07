# WAD Assignment 2b - Docker Container Environment

## Aim
Create a Docker container environment.

## Run Commands

```bash
docker build -t wad-docker-app .
docker run -p 3000:3000 wad-docker-app
```

Open:

```text
http://localhost:3000
```

## Stop Container

```bash
docker ps
docker stop <container_id>
```

## Conclusion
A Node.js website was packaged and executed inside a Docker container.
