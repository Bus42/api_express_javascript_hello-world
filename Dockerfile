FROM node:16.13.1-buster-slim@sha256:0f5899ce17fba632bcbf2626164efe0fd2e4f354dc1d94eeb46d0af8b9cf268f AS core
RUN mkdir /app
RUN chown -R node:node /app
USER node
WORKDIR /app
COPY --chown=node:node package*.json ./
COPY --chown=node:node src /app/src
ENV NODE_ENV production
RUN npm ci --production

FROM gcr.io/distroless/nodejs:16@sha256:cd6d385ffb4be31e895ae6318197cf6441844876143156ee32191f3f369603dd
COPY --from=core /app /app
USER 1000
WORKDIR /app
CMD ["src/index.js"]
