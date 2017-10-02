#!/bin/bash  
# Purpose of this script is to clean arise database and load a snapshot to it

if [ -z "$1" ]
  then
    echo "One required argument missing: path to folder with arise core app.js"
    exit 1
fi

if [ ! -f blockchain_explorer.db.gz ]; then
  wget https://downloads.arise.io/arise-explorer/dev/blockchain_explorer.db.gz
fi

pwd=`pwd`
cp test/config_arise.json $1/config.json
cd $1
pm2 stop app.js
dropdb arise_test
createdb arise_test
gunzip -fcq "$pwd/blockchain_explorer.db.gz" | psql -d arise_test
cp test/genesisBlock.json ./
pm2 start app.js
sleep 5
cd -

