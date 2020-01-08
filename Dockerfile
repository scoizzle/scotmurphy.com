FROM nginx
RUN rm /etc/nginx/conf.d/default.conf

COPY ./nginx-conf/nginx.conf /etc/nginx/conf.d/webserver.conf
COPY ./src /usr/share/nginx/html