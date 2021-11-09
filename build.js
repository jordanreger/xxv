#!/usr/bin/env node
const { build } = require("estrella")
build({
  entry: "back/main.ts",
  run: ["deno", "run", "--allow-net=0.0.0.0:42069", "--allow-read", "--unstable", "back/main.ts"]
})

build({
  entry: "front/App.js",
  outfile: "build/App.js",
  bundle: true
})
