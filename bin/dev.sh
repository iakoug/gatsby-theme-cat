#!/bin/sh

$filePath = "./temporary.js"

mv gatsby-config.js temporary.js
mv gatsby-config.dev.js gatsby-config.js

gatsby clean
gatsby develop