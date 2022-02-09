#!/usr/bin/with-contenv bashio
set +u

export USERNAME=$(bashio::config 'username')
export PASSWORD=$(bashio::config 'password')
export ACCOUNT=$(bashio::config 'account')


npm run start

