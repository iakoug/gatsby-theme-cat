#!/bin/sh

if [ -f "$(pwd)/temporary.js" ]; then
  mv gatsby-config.js gatsby-config.dev.js
  mv temporary.js gatsby-config.js
fi

if [ ! "$1" ]; then
  npm publish
fi
