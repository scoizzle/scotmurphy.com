FROM nginx:mainline-alpine
RUN rm -r /usr/share/nginx/html
COPY src /usr/share/nginx/html