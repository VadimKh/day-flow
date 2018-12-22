fw
==

Daily flow helps you stay organized

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/fw.svg)](https://npmjs.org/package/fw)
[![CircleCI](https://circleci.com/gh/VadimKh/fw/tree/master.svg?style=shield)](https://circleci.com/gh/VadimKh/fw/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/fw.svg)](https://npmjs.org/package/fw)
[![License](https://img.shields.io/npm/l/fw.svg)](https://github.com/VadimKh/fw/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @cli-assistant/fw
$ fw COMMAND
running command...
$ fw (-v|--version|version)
@cli-assistant/fw/0.0.0 darwin-x64 node-v10.5.0
$ fw --help [COMMAND]
USAGE
  $ fw COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`fw help [COMMAND]`](#fw-help-command)
* [`fw init`](#fw-init)
* [`fw today [FILE]`](#fw-today-file)
* [`fw todo [FILE]`](#fw-todo-file)

## `fw help [COMMAND]`

display help for fw

```
USAGE
  $ fw help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.3/src/commands/help.ts)_

## `fw init`

Init is used to initialized app and all your plugins

```
USAGE
  $ fw init

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/init.ts](https://github.com/VadimKh/fw/blob/v0.0.0/src/commands/init.ts)_

## `fw today [FILE]`

describe the command here

```
USAGE
  $ fw today [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/today.ts](https://github.com/VadimKh/fw/blob/v0.0.0/src/commands/today.ts)_

## `fw todo [FILE]`

describe the command here

```
USAGE
  $ fw todo [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [@cli-assistant/fw-wunderlist](https://github.com/VadimKh/fw-wunderlist/blob/v0.0.0/src/commands/todo.ts)_
<!-- commandsstop -->
