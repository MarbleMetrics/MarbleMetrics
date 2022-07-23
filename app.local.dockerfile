FROM php:8.1-fpm

ENV APP_ENV=local

RUN apt-get update && apt-get install -y  \
    libmagickwand-dev \
    procps \
    nodejs \
    npm \
    libpq-dev \
    git \
    --no-install-recommends
    
RUN pecl install imagick \
    && docker-php-ext-enable imagick \
    && docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql \
    && docker-php-ext-install pdo pdo_pgsql pgsql

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN npm cache clean -f
RUN npm install -g n
RUN n stable

RUN ls /var/www/