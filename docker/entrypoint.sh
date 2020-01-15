#!/bin/bash

cp -r /build-dir/node_modules/ /app-dir/

exec npm run start-docker
