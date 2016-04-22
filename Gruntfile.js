'use strict';

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    var appDir = "app/";
    var buildDir = "dist/";

    grunt.initConfig(
        {
            less: {
                production: {
                    options: {
                        paths: [appDir + "/assets/styles"],
                        compress: true
                    },
                    files: {
                        "app/assets/styles/style.css": appDir + "assets/styles/style.less"
                    }
                }
            },
            copy:{
                html: {
                    src: appDir + 'index.html', dest: buildDir + 'index.html'
                },
                assets: {
                    expand: true,
                    cwd: appDir + 'assets',
                    src: '**',
                    dest: buildDir + 'assets',
                },
                templates: {
                    expand: true,
                    cwd: appDir + 'templates',
                    src: '**',
                    dest: buildDir + 'templates',
                }
            },
            watch: {
                app: {
                    files: [appDir  + '**/*.html', appDir  + '**/*.js', appDir  + '**/*.css'],
                    tasks: ['build']
                },
                less: {
                    files: appDir + '**/*.less',
                    tasks: ['less']
                }
            },
            useminPrepare: {
                html: 'app/index.html',
                options: {
                    dest: 'dist'
                }
            },
            usemin:{
                html:['dist/index.html']
            }
        });


    grunt.registerTask('build', ['less', 'copy', 'min']);

    grunt.registerTask('min', [
        'useminPrepare',
        'concat:generated',
        'uglify:generated',
        'usemin'
    ]);

    grunt.registerTask('default', 'build');
};
