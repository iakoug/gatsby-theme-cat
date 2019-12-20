#!/bin/sh

$filePath = "./temporary.js"

if [ ! -x "$filePath"]; then
mv gatsby-config.js temporary.js
mv gatsby-config.dev.js gatsby-config.js
fi

gatsby clean
gatsby develop