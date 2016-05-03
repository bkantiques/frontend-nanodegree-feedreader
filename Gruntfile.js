module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Broswer sync
        browserSync: {
            bsFiles: {
                src: [
                    'js/*',
                    'jasmine/spec/*'
                ]
            },
            options: {
                server: {
                    baseDir: './'
                }
            }
        }

    });

    require('load-grunt-tasks')(grunt);

};
