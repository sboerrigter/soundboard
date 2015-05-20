module.exports = function( grunt ) {

  grunt.initConfig( {

    pkg: grunt.file.readJSON( 'package.json' ),

    /**
     * Compile SASS to CSS 
     */ 
    sass: {
      dist: {
        options: {
          sourcemap: 'none'
        }
      },
      compile: {
        files: {
          'style.css': 'style.scss'
        }
      }
    },

    /**
     * Watch Sass
     */
    watch: {
      sass: {
        files: [ 'style.scss' ],
        tasks: [ 'sass' ],
        options: {
          sourcemap: 'none'
        }
      }
    }

  } );

  /**
   * Load tasks
   */
  grunt.loadNpmTasks( 'grunt-contrib-sass' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );

  /**
   * Run tasks
   */
  grunt.registerTask( 'default', [ 'sass', 'watch' ] );

};