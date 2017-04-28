module.exports = function(grunt) {

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            options: {
                livereload: true,
                port: 80
            },

            html:{
                files: ['site/resources/views/**/*.php']
            },

            sass: {
                files: ['site/resources/assets/sass/**/*.scss'],   //Carpetas donde se buscaran cambios
                tasks: ['sass']
            },

            scripts: {
                files: ['site/resources/assets/js/**/*.js'],
                tasks: ['uglify']
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed',//Estilo de salida
                    noCache: true       //Crear cache
                },
                files: [{
                    expand: true,       //Busca en todas las carpetas
                    cwd:    'site/resources/assets/sass',     //Carpeta de origen
                    src:    ['*.scss'], //Que archivos buscara
                    dest:   'public_html/css',      //Carpeta de destino
                    ext:    '.min.css'  //Extension de salida del css
                }]
            }
        },

        penthouse: {
            extract : {
                outfile : 'site/resources/assets/sass/cssCritico.scss',
                css : 'public_html/css/estilos.min.css',
                url : 'http://isuzu.desarrollosmasclicks.com/',
                width : 1300,
                height : 900,
                skipErrors : true // this is the default
            },
        },

        uglify: {
            my_target: {
                files: {
                    'public_html/js/final.min.js': ['site/resources/assets/js/jquery-2.2.0.js',
                                                    'site/resources/assets/js/materialize/initial.js',
                                                    'site/resources/assets/js/materialize/jquery.easing.1.3.js',
                                                    'site/resources/assets/js/materialize/animation.js',
                                                    'site/resources/assets/js/materialize/velocity.min.js',
                                                    'site/resources/assets/js/materialize/hammer.min.js',
                                                    'site/resources/assets/js/materialize/jquery.hammer.js',
                                                    'site/resources/assets/js/materialize/global.js',
                                                    'site/resources/assets/js/materialize/sideNav.js',
                                                    'site/resources/assets/js/materialize/waves.js',
                                                    'site/resources/assets/js/materialize/buttons.js',
                                                    'site/resources/assets/js/materialize/dropdown.js',
                                                    'site/resources/assets/js/materialize/forms.js',
                                                    'site/resources/assets/js/materialize/collapsible.js',
                                                    'site/resources/assets/js/materialize/carousel.js',
                                                    'site/resources/assets/js/materialize/modal.js',
                                                    'site/resources/assets/js/plugins/owl.carousel.min.js',
                                                    'site/resources/assets/js/plugins/jquery.validate.js',
                                                    'site/resources/assets/js/plugins/jquery.mousewheel.js',
                                                    'site/resources/assets/js/plugins/jquery.mCustomScrollbar.js',
                                                    'site/resources/assets/js/plugins/thumbailGallery/jquery.jscrollpane.min.js',
                                                    'site/resources/assets/js/plugins/thumbailGallery/jquery.dop.ThumbnailGallery.js',
                                                    'site/resources/assets/js/plugins/TweenMax.min.js',
                                                    'site/resources/assets/js/plugins/ScrollMagic.min.js',
                                                    'site/resources/assets/js/plugins/animation.gsap.js',
                                                    'site/resources/assets/js/plugins/debug.addIndicators.min.js',
                                                    'site/resources/assets/js/plugins/frst-scale-effect.js',
                                                    'site/resources/assets/js/plugins/frst-timeline.js',
                                                    'site/resources/assets/js/plugins/jquery.overscroll.js',
                                                    'site/resources/assets/js/funciones.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-penthouse');

    grunt.registerTask('default', ['watch']);
};
