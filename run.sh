#!/usr/bin/with-contenv bashio

export USERNAME=$(bashio::config 'username')
export PASSWORD=$(bashio::config 'password')


npm run start

