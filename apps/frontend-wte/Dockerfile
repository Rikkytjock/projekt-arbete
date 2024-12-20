FROM nginx:1.23.2-alpine AS nginx

WORKDIR /app

RUN addgroup --system frontend-wte && \
  adduser --system -G frontend-wte frontend-wte

COPY dist/apps/frontend-wte/browser /usr/share/nginx/html
COPY apps/frontend-wte/nginx-config.conf /etc/nginx/conf.d/default.conf

RUN chown -R frontend-wte:frontend-wte .