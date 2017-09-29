FROM ahumaro/grav-php-nginx

WORKDIR /usr/share/nginx/html/

# Copy local repo data
RUN rm -fR user/
RUN mkdir user/
COPY user/ user/

# Fix permissions
RUN chmod +x bin/*
RUN chown -R www-data:www-data *
