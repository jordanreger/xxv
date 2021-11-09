#!/usr/bin/env node
const { build } = require("estrella")
build({
  entry: "src/main.ts",
  run: ["deno", "run", "--allow-net=0.0.0.0:42069", "--allow-read", "--unstable", "src/main.ts"]
})
