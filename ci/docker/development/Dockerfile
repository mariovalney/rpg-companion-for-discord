FROM php:7.3-apache

ENV PATH $PATH:/var/www/html/vendor/bin
ENV COMPOSER_VERSION 1.7.2
ENV XDEBUG_VERSION 2.9.7

ARG USER_ID=1000
ARG GROUP_ID=1000

RUN apt-get update \
    && apt-get install -y git libpq-dev unzip xsltproc libzip-dev zip libpng-dev mariadb-client \
    && docker-php-ext-install -j$(nproc) gd pdo pdo_mysql zip \
    && pecl install xdebug-$XDEBUG_VERSION \
    && docker-php-ext-enable xdebug \
    && php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    && php -r "if (hash_file('SHA384', 'composer-setup.php') === '$(curl -sl https://composer.github.io/installer.sig)') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;" \
    && php composer-setup.php --install-dir=/bin --filename=composer --version="$COMPOSER_VERSION" \
    && php -r "unlink('composer-setup.php');" \
    && composer global require hirak/prestissimo \
    && a2enmod rewrite \
    && usermod -u $USER_ID www-data \
    && groupmod -g $GROUP_ID www-data \
    && find / -path /proc -prune -user 33 -exec chgrp -h www-data {} \; \
    && find / -path /proc -prune -group 33 -exec chown -h www-data {} \;

COPY php.ini /usr/local/etc/php/conf.d/curl.ini
COPY vhost.conf /etc/apache2/sites-available/000-default.conf
COPY xdebug.ini /usr/local/etc/php/conf.d/xdebug.ini

