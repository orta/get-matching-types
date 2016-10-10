#! /usr/bin/env node
// @flow

// You can't use async functions in the same file as this import
// it's a problem I hit with Danger-js and haven't grok'd yet.

import "babel-polyfill"
import Runner from "./reader"

let runner = new Runner("package.json")
runner.run()
