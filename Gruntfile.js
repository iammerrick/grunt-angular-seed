module.exports = function(grunt) {
  grunt.initConfig({
    connect: {
      test: {
        options: {
          port: 8000,
          base: '.'
        }
      },
      development: {
        options: {
          port: 8001,
          base: '.',
          keepalive: true
        }
      }
    },

    testacular: {
      unit: {
        configFile: 'config/testacular.conf.js',
        singleRun: true
      },
      e2e: {
        configFile: 'config/testacular-e2e.conf.js',
        singleRun: true
      }
    }
  });

  grunt.registerTask('test', ['connect:test', 'testacular']);

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('gruntacular');
}