FROM node:lts
MAINTAINER Jared Scott <jared.scott@variable.team>

RUN apt-get update \
    && apt-get install -y \
        git \
        build-essential \
    && apt-get clean


#RUN apk add --update \
#    git \
#    build-base \
#    cmake \
#    autoconf \
#    automake \
#    libjpeg-turbo-utils \
#    nasm \
#    util-linux \
#    && rm -rf /var/cache/apk/*

RUN mkdir /code

WORKDIR /code

COPY ./package.json /code/

#RUN npm install
RUN yarn cache clean && yarn install
