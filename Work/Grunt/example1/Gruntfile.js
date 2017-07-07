module.exports = function(grunt) {

   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      
      uglify: {
         options: {
           banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
           footer: '\n\n/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */',
           beautify: true
         },         
         files: {
            src: 'src/<%= pkg.name %>.js',
            dest: 'dest/<%= pkg.name %>.min.js'
         }         
      },

      jshint: {
        files: ['Gruntfile.js', 'src/*.js', 'dest/*.js'],
        options: {
          jshintrc: '.jshintrc'
        }
      },

      watch: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      }
   });

   // log something
   grunt.log.write('Hello world! executing Grunt.');

   // Load the plugin that provides the "uglify" task.
   grunt.loadNpmTasks('grunt-contrib-uglify');

   // jshint
   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-contrib-watch');

   grunt.registerTask('default', ['jshint']);

   // Custom tasks
   //grunt.registerTask('default', ['uglify']);

   //grunt.registerTask('default', 'Log some stuff.', function() {
   //  grunt.log.write('Logging some stuff...').ok();
   //});

};
