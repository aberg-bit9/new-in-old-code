module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 1337,
          base: 'src',
          livereload: true
        }
      }
    },
    watch: {
      source: {
        files: ['src/index.html', 'src/scripts/**/*.js', 'src/scripts/**/*.css'],
        options: {
          livereload: true
        },
      },
      react:{
        files:['v2/src/**/*.js'],
        tasks:['shell:webpackdev', 'copy:dev']
      }
    },
    shell: {
      webpackdev: {
        command: './v2/node_modules/.bin/webpack --config ./v2/webpack.config.js --context ./v2 --output-path ./v2/build'
      },
      webpackproduction: {
        command: './v2/node_modules/.bin/webpack --config ./v2/webpack.config.js --context ./v2 --output-path ./v2/build -p'
      }
    },
    copy: {
      dev: {
        expand: true,
        cwd: 'v2/build', 
        src: ['*.js', '*.css'],
        dest: 'src/'
      },
      build: {
        expand: true,
        cwd: 'v2/build', 
        src: ['*.js', '*.css'],
        dest: 'build/'
      }
    },
    useminPrepare: {
      html: 'src/index.html',
      options: {
        dest: 'build'
      }
    },
    usemin: {
      html: 'build/index.html'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-usemin');

  grunt.registerTask('default', [ 
    'connect:server',
    'watch'
  ]);

  grunt.registerTask('build', [
    'useminPrepare',
    'concat:generated',
    'cssmin:generated',
    'uglify:generated',
    'usemin',
    'shell:webpackproduction',
    'copy:build'
  ]);

}