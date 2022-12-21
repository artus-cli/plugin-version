# @artus-cli/plugin-version

Built-in plugin for showing version info in artus-cli

[![NPM version](https://img.shields.io/npm/v/@artus-cli/plugin-version.svg?style=flat-square)](https://npmjs.org/package/@artus-cli/plugin-version)
[![NPM quality](https://img.shields.io/npms-io/final-score/@artus-cli/plugin-version.svg?style=flat-square)](https://npmjs.org/package/@artus-cli/plugin-version)
[![NPM download](https://img.shields.io/npm/dm/@artus-cli/plugin-version.svg?style=flat-square)](https://npmjs.org/package/@artus-cli/plugin-version)
[![Continuous Integration](https://github.com/artus-cli/plugin-version/actions/workflows/ci.yml/badge.svg)](https://github.com/artus-cli/plugin-version/actions/workflows/ci.yml)
[![Test coverage](https://img.shields.io/codecov/c/github/artus-cli/plugin-version.svg?style=flat-square)](https://codecov.io/gh/artus-cli/plugin-version)
[![Oss Insight Analytics](https://img.shields.io/badge/OssInsight-artus--cli%2Fartus--cli-blue.svg?style=flat-square)](https://ossinsight.io/analyze/artus-cli/plugin-version)

## Install

```sh
$ npm i @artus-cli/plugin-version
```

## Usage

```ts
// plugin.ts

export default {
  version: {
    enable: true,
    package: '@artus-cli/plugin-version'
  },
};
```

## Contributing

```sh
$ npm test
$ npm run cov
```
