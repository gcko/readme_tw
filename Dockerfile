FROM mhart/alpine-node:10
MAINTAINER Jared Scott <jared@variable.team>

RUN apk add --update \
    git \
    util-linux \
    && rm -rf /var/cache/apk/*

RUN mkdir /code

WORKDIR /code

COPY . /code/

RUN npm install
