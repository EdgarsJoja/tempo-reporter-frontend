#!/bin/bash

rm -rf /app-dir/node_modules

npm ci

exec npm run start-docker
