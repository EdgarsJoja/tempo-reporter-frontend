#!/bin/bash

rm -rf /app-dir/node_modules

cp -r /app/build-dir/node_modules/ /app/app-dir/

exec npm run start-docker
