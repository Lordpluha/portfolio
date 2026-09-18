# syntax=docker/dockerfile:1

# ---------------------------------------------------------------- build stage
FROM node:24-alpine AS build
WORKDIR /app

# Dependencies first, from the lockfile, so the layer caches across code edits.
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
# Served from the container root, so the base href stays "/" rather than the
# GitHub Pages sub-path. Prerenders every route to static HTML.
RUN npm run build

# ---------------------------------------------------------------- serve stage
FROM nginx:alpine AS runtime

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/portfolio-app/browser /usr/share/nginx/html

# Run the whole server as the unprivileged `nginx` user. Binding port 80 as a
# non-root process needs one capability on the binary, which is narrower than
# running the master process as root.
RUN apk add --no-cache libcap \
  && setcap 'cap_net_bind_service=+ep' /usr/sbin/nginx \
  && apk del libcap \
  && sed -i 's|^user .*|# master runs as nginx via USER below|' /etc/nginx/nginx.conf \
  && sed -i 's|/var/run/nginx.pid|/tmp/nginx.pid|' /etc/nginx/nginx.conf \
  && chown -R nginx:nginx /usr/share/nginx/html /var/cache/nginx \
  && touch /tmp/nginx.pid && chown nginx:nginx /tmp/nginx.pid

USER nginx
EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s \
  CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1

CMD ["nginx", "-g", "daemon off;"]
