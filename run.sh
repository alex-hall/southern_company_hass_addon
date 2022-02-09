#!/usr/bin/with-contenv bashio

export username=$(bashio::config 'username')
export password=$(bashio::config 'password')
export account=$(bashio::config 'account')


npm run start

