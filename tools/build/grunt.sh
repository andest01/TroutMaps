#!/bin/bash

# For building on a Linux/Mac environment
# This does not require installation of nodejs as a prerequisite

# Node and grunt paths
NODE=$(. which.sh bin/node)
NPM=$(. which.sh lib/node_modules/npm/bin/npm-cli.js)
GRUNT=node_modules/grunt-cli/bin/grunt

chmod 777 $NODE

# Install dependencies if needed
$NODE $NPM install

# Execute Grunt
$NODE $GRUNT $@