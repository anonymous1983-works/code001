var G = {
    host: "http://localhost:10000/",
    paths: {
        app: "app/",
        vender: "app/bower_components/",
        spec: "test/unit/",
        junit: "junit/xml/",
        src: {
            img: "assets/src/images/",
            js: "assets/src/javascript/",
            css: "assets/src/stylesheet/"
        },
        dev: {
            img: "assets/dev/src/images/",
            js: "assets/dev/src/javascript/",
            css: "assets/dev/src/stylesheet/"
        },
        prod: {
            img: "assets/images",
            js: "assets/dev/src/javascript/",
            css: "assets/dev/src/stylesheet/"
        }
    }
}

module.exports = function (grunt) {
    // Configuration de Grunt
    grunt.initConfig({
        // BOWER
        bower: {
            install: {
                options: {
                    //targetDir: './components',
                    //layout: 'byType',
                    //install: true,
                    //verbose: false,
                    //cleanTargetDir: false,
                    //cleanBowerDir: false,
                    //bowerOptions: {}
                }
            }
        },
        // LESS
        less: {
            dev: {
                options: {
                    banner: '/* \n  Generates stylesheet file \n  Date : <%= grunt.template.today("yyyy-mm-dd HH:MM") %> \n*/\n',
                    compress:false,
                    cleancss: false,
                    modifyVars: {
                        'base-img-url': '"' + G.host + G.paths.prod.img + '"',
                        bgColor: '#f00'
                    }
                },
                files: {
                    "digicode-war/src/main/webapp/app/assets/dist/dev/stylesheet/style.css": ["digicode-war/src/main/webapp/app/assets/src/stylesheet/style.less"]
                }
            },
            prod: {
                options: {
                    paths: ["assets/css"],
                    compress: true,
                    cleancss: true,
                    banner: '/* \n  Generates minified stylesheet file \n  Date : <%= grunt.template.today("yyyy-mm-dd HH:MM") %> \n*/\n'
                },
                files: {
                    "digicode-war/src/main/webapp/app/assets/dist/prod/stylesheet/style.min.css": ["digicode-war/src/main/webapp/app/assets/src/stylesheet/style.less"]
                }
            }
        },
        csscomb: {
            dynamic_mappings: {
                expand: true,
                cwd: 'digicode-war/src/main/webapp/app/assets/dist/dev/stylesheet/',
                src: ['*.css', '!*.resorted.css'],
                dest: 'digicode-war/src/main/webapp/app/assets/dist/dev/stylesheet/',
                ext: '.resorted.css'
            }
        },
        // JS :: minification and compression
        uglify: {
            devClientSide: {
                options: {
                    banner: '/* \n  Generates JavaScript file \n  Date : <%= grunt.template.today("yyyy-mm-dd HH:MM") %> \n*/\n',
                    beautify: true
                },
                files: [{
                    expand: true,
                    cwd: 'digicode-war/src/main/webapp/app/assets/src/javascript/client-side',
                    src: '**/*.js',
                    dest: 'digicode-war/src/main/webapp/app/assets/dist/dev/javascript/client-side'
                }]
                //files: {
                //    'app/assets/dist/dev/javascript/script.js': ['app/assets/src/javascript/client-side/script.js']
                //}
            },
            prod: {
                options: {
                    banner: '/* \n  Generates minified JavaScript file \n  Date : <%= grunt.template.today("yyyy-mm-dd HH:MM") %> \n*/\n'
                },
                files: {
                    'digicode-war/src/main/webapp/app/assets/dist/prod/javascript/script.min.js': 'digicode-war/src/main/webapp/app/assets/src/javascript/client-side/*.js'
                }
            }
        },
        // JASMINE :: Testing JavaScript Code
        //jasmine: {
        //  pivotal: {
        //    src: G.paths.dev.js+'**/*.js',
        //    options: {
        //      vendor: G.paths.vender+'angularjs/angular.min.js',
        //      specs: G.paths.spec+'/*Spec.js',
        //      junit: {
        //        path: G.paths.junit,
        //        dn: true, //in grunt-contrib-jasmine/tasks/jasmine.js var d = (options.junit.dn)? Date() + ' - ' : '';
        //        consolidate: true
        //      }
        //      //helpers: 'spec/*Helper.js'
        //    }
        //  }
        //},
        // WATCH
        watch: {
            options: {
                dateFormat: function (time) {
                    grunt.log.writeln('The watch finished in ' + time + 'ms at' + (new Date()).toString());
                    grunt.log.writeln('Waiting for more changes...');
                }
            },
            data: {
                files: ['digicode-war/src/main/webapp/app/assets/src/**/*.less', "digicode-war/src/main/webapp/app/assets/src/**/*.js"], // tous les fichiers Less and js
                tasks: ['app-build']
            }
        }
    })

    // Import package
    grunt.loadNpmTasks('grunt-bower-task')
    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-contrib-cssmin')
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-contrib-jasmine')
    grunt.loadNpmTasks('grunt-csscomb')

    // Définition des tâches Grunt
    grunt.registerTask('app-init', ['bower'])
    grunt.registerTask('app-dev', ['less:dev', 'uglify:devClientSide', 'csscomb:dynamic_mappings'])
    grunt.registerTask('app-prod', ['less:prod', 'uglify:prod'])
    grunt.registerTask('app-build', ['app-dev', 'app-prod'])
    grunt.registerTask('build', ['app-dev', 'app-prod'])

}

