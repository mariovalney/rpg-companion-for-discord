FROM php:7.3-apache

ENV PATH $PATH:/var/www/html/vendor/bin

ARG USER_ID=1000
ARG GROUP_ID=1000

RUN apt-get update \
    && apt-get install -y git libpq-dev unzip xsltproc libzip-dev zip libpng-dev mariadb-client \
    && docker-php-ext-install -j$(nproc) gd pdo pdo_mysql zip opcache \
    && a2enmod rewrite \
    && usermod -u $USER_ID www-data \
    && groupmod -g $GROUP_ID www-data \
    && find / -path /proc -prune -user 33 -exec chgrp -h www-data {} \; \
    && find / -path /proc -prune -group 33 -exec chown -h www-data {} \;

RUN curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh \
    && bash nodesource_setup.sh \
    && apt-get install -y \
    nodejs \
    build-essential

COPY --chown=www-data:www-data . /var/www/html
COPY ci/docker/production/vhost.conf /etc/apache2/sites-available/000-default.conf

RUN npm ci && npm run production
