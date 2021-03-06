module.exports = function(grunt) {
    grunt.initConfig({
        
        copy:{
            public: {
                expand: true,
                cwd: 'public',
                src: '**',
                dest: 'dist'
            }
        },
        
        clean: {
            dist: {
                src:'dist'
            }
        }
        
    });
    
    grunt.registerTask('dist', ['clean', 'copy']);
    grunt.registerTask('default', ['dist']);
    
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
}