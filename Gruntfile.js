module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // concat all 

    concat: {
      options: {
        
      },
      dist: {
        src: ['less/*.less'],
        dest: 'deploy/deploy.less'
      }
      
    },

    // compile less to css

    less: {
      development: {
        files: [
           {
              expand: true,     // Enable dynamic expansion.
              cwd: 'src/less',      // Src matches are relative to this path.
              src: ['*.less'], // Actual pattern(s) to match.
              dest: './css',   // Destination path prefix.
              ext: '.css'   // Dest filepaths will have this extension.
           }
        ]
      }
    },


    // minify css files

    cssmin: {

      deploy_min: {
        options: {
          banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %> */',
          keepSpecialComments: 0,
          stripBanners: true
        },

        files: [
           {
              expand: true,     // Enable dynamic expansion.
              cwd: 'deploy/',      // Src matches are relative to this path.
              src: ['deploy.css'], // Actual pattern(s) to match.
              dest: 'build/',   // Destination path prefix.
              ext: '.min.css'   // Dest filepaths will have this extension.
           }
        ]
      }

    },



    // clean up deploy files and folders

    clean: {
      build: {
        src: ["deploy"]
      }
    },

    // compile jade to html

    jade: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: [
           {
              expand: true,     // Enable dynamic expansion.
              cwd: 'src/jade',      // Src matches are relative to this path.
              src: ['*.jade'], // Actual pattern(s) to match.
              dest: './',   // Destination path prefix.
              ext: '.html'   // Dest filepaths will have this extension.
           }
        ]
      }
    },


    // watch js and css for fire up automatically

    watch: {

      less: {
        files: 'src/less/*.less',
        tasks: ['less:development']
      },

      jade: {
        files: 'src/jade/*.jade',
        tasks: ['jade']
      }
    }


  });

  // Load the plugin
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jade');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'less', 'cssmin', 'clean']);
  grunt.registerTask('build_jade', ['jade'])

};