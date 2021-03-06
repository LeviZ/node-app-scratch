module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'public/stylesheets/style.css': 'sass/style.scss'
        },
        options: {
          sourceMap: true,
          includePaths: [
            './bower_components/big-red-button'
          ]
        }
      }
    },
    watch: {
      source: {
        files: ['sass/**/*.scss', 'sass/*/*.sass', 'views/**/*.jade'],
        tasks: ['sass'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['sass']);
};
