/*
 * Copyright 2019 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const nodeExternals = require("webpack-node-externals");
const { merge } = require("webpack-merge");
const common = require("../../webpack.common.config");
const pfWebpackOptions = require("@kogito-tooling/patternfly-base/patternflyWebpackOptions");

module.exports = [
  merge(common, {
    entry: {
      "api/index": "./src/api/index.ts"
    },
    output: {
      libraryTarget: "umd",
      globalObject: "this"
    },
    externals: [nodeExternals({ modulesDir: "../../node_modules" })]
  }),
  merge(common, {
    entry: {
      "envelope/index": "./src/envelope/index.ts"
    },
    output: {
      libraryTarget: "commonjs2"
    },
    externals: [nodeExternals({ modulesDir: "../../node_modules" })],
    module: { rules: [...pfWebpackOptions.patternflyRules] }
  }),
  merge(common, {
    entry: {
      "embedded/index": "./src/embedded/index.ts"
    },
    output: {
      libraryTarget: "umd",
      globalObject: "this"
    },
    externals: [nodeExternals({ modulesDir: "../../node_modules" })],
    module: { rules: [...pfWebpackOptions.patternflyRules] }
  }),
  merge(common, {
    entry: {
      "channel/index": "./src/channel/index.ts"
    },
    output: {
      libraryTarget: "commonjs2"
    },
    externals: [nodeExternals({ modulesDir: "../../node_modules" })],
  })
];
