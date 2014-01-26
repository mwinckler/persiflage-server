#!/usr/bin/env bash

# nodejs
apt-get install -y python-software-properties python g++ make
add-apt-repository ppa:chris-lea/node.js
apt-get update
apt-get install -y nodejs

# A sensible editor
apt-get install -y vim