# [grunt](https://github.com/gruntjs/grunt)-check-constants

> Find numbers that should be extracted to a declaration statement using [check-constants](https://github.com/pgilad/check-constants)

[![NPM Version](http://img.shields.io/npm/v/grunt-check-constants.svg?style=flat)](https://npmjs.org/package/grunt-check-constants)
[![NPM Downloads](http://img.shields.io/npm/dm/grunt-check-constants.svg?style=flat)](https://npmjs.org/package/grunt-check-constants)

*Issues with the output should be reported on the check-constants [issue tracker](https://github.com/pgilad/check-constants/issues).*

## Install

```sh
$ npm install --save-dev grunt-check-constants
```

## Usage

```js
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
    'checkConstants': {
        options: {} //add options to pass to check-constants
        validate: {
            src: ['./src/**/*.js']
        }
    }
});

grunt.registerTask('default', ['checkConstants']);
```

## Options

See the `check-constants` [Options](https://github.com/pgilad/check-constants#api)
except for `file` which is handled for you.

## License

MIT ©[Gilad Peleg](http://giladpeleg.com)
