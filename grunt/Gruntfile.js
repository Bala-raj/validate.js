module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            options: {
                banner: '/*! \n <%= pkg.name %>  \n Version : <%=pkg.version%> \n Author : <%= pkg.author%> \n Published : <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: '<%= pkg.jssrc %>',
                dest: '<%= pkg.jsdist %>'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};
