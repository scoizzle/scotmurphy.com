FROM nginx
RUN rm -r /usr/share/nginx/html
COPY src /usr/share/nginx/html