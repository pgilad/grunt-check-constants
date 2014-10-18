'use strict';
var checkConstants = require('check-constants');
var chalk = require('chalk');
var assign = require('lodash.assign');

module.exports = function (grunt) {
    grunt.registerMultiTask('checkConstants',
        'Find numbers that should be extracted as a declaration statement',
        function () {
            var options = this.options();

            if (this.filesSrc.length === 0) {
                grunt.log.writeln(chalk.magenta('Couldn\'t find any files to validate.'));
                return;
            }

            var totalErrors = 0;
            this.filesSrc.forEach(function (filepath) {
                var data = grunt.file.read(filepath);
                var params = assign(options, {
                    file: filepath
                });
                var results;
                try {
                    results = checkConstants.inspect(data, params);
                } catch (err) {
                    grunt.warn(err);
                    return;
                }

                // All is good
                if (!results.length) {
                    return;
                }

                checkConstants.log.reporters.table(results);
                totalErrors += results.length;
            });

            if (!totalErrors) {
                grunt.log.oklns('Found no constants that could be extracted.');
            } else {
                grunt.log.warn('Found ' + totalErrors + ' constants that could be extracted.');
            }
        });
};
