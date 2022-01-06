> The CLI Toolkit for Haluka

[![Node Version][node-image]][npm-url]
[![NPM Version][npm-image]][npm-url]
[![Dependencies][dependencies]][david-dm]
[![License: MIT][license-image]][license-link]


## Installation

To install Haluka CLI, use the following command:
```bash
$ npm install haluka-cli -g
```

## Node

Haluka CLI is supposed to run on platforms with `Node.js >=0.10.0`

## Usage

```bash
$ haluka [options] [command]
```

### Options

#### -V, --version
Output the version number

```bash
$ haluka -V
```

#### -h, --help
Output usage information

```bash
$ haluka -h
```
`-h` can also be used after the command name to know usage information on that command.
Example:
```bash
$ haluka create -h
```

## Commands

### create

`create` is used to initialize a new Haluka project in the current working directory. It clones the application from the application repository and creates sets up `.env` file and a custom `README.md` file.

Usage: `haluka create <project_name>`

Example:
```bash
$ haluka create myblog
```

### serve

`serve` is used fire up the HTTP server. This command triggers the `start` script in `package.json` by spawning `npm run start`.

Usage: `haluka serve`

Example:
```bash
$ haluka serve
```

### make

`make` is used to make Haluka components. This command comes with indicators separated by `:`.

Currently, there is only one command.

#### make:controller

This command creates a new base controller at controllers directory.

Usage: `haluka make:controller <controller_name>`

Example:
```bash
$ haluka make:controller home
```

### plug

`plug` is used to install and initialize a Haluka Package plugin. This command fetches the plugin in Haluka Package Manager and clones it into the packages directory and sets it up for use in the Haluka Application.

Usage: `haluka plug <plugin>`

Example:
```bash
$ haluka plug manager
```


[node-image]: https://img.shields.io/node/v/haluka-cli.svg?style=flat-square
[npm-image]: https://img.shields.io/npm/v/haluka-cli.svg?style=flat-square
[npm-url]: https://npmjs.org/package/haluka-cli
[dependencies]: https://david-dm.org/hacktivistic/haluka-cli/status.svg
[dev-dependencies]: https://david-dm.org/hacktivistic/haluka-cli/dev-status.svg
[david-dm]: https://david-dm.org/hacktivistic/haluka-cli
[david-dm-dev]: https://david-dm.org/hacktivistic/haluka-cli?type=dev
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-link]: https://opensource.org/licenses/MIT
