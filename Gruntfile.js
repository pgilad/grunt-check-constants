'use strict';
module.exports = function (grunt) {
    grunt.initConfig({
        'checkConstants': {
            compile: {
                src: ['test/fixtures/basic.js']
            }
        }
    });

    grunt.loadTasks('tasks');

    grunt.registerTask('default', ['checkConstants']);
};
