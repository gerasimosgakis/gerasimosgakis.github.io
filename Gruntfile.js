module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        imagemin: {
          dynamic: {
              files: [{
                  expand: true,
                  cwd: 'images_src/',
                  src: ['**/*.{png,jpg,gif}'],
                  dest: 'images/'
              }]
          }
        },
        resize_crop: {
          image_group: {
            options: {
              format: "png",
              gravity: "center",
              height: 300,
              width: 350
            },
            files: {
                      'images_small': [
                        'images/*',
                      ],
            },
          },
          second_group: {
            options: {
              format: "png",
              gravity: "center",
              height: 500,
              width: 600
            },
            files: {
                      'images_medium': [
                        'images/*',
                      ],
            },
          },
        },

        /* Clear out the images directory if it exists */
        clean: {
          dev: {
            src: ['images', 'images_small', 'images_medium'],
          },
        },

    /* Generate the images directory if it is missing */
        mkdir: {
          dev: {
            options: {
              create: ['images', 'images_small', 'images_medium']
            },
          },
        },
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-resize-crop');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mkdir');
    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['clean', 'mkdir', 'imagemin', 'resize_crop']);

};
