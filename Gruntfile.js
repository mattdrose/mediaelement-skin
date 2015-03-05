'use strict';

module.exports = function (grunt) {
  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed MIT */\n',
    // Task configuration.
    webfont: {
      icons: {
        src: [
          'bower_components/gemini-icons/icomoon/play2.svg',
          'bower_components/gemini-icons/icomoon/spinner4.svg',
          'bower_components/gemini-icons/icomoon/play3.svg',
          'bower_components/gemini-icons/icomoon/stop2.svg',
          'bower_components/gemini-icons/icomoon/pause2.svg',
          'bower_components/gemini-icons/icomoon/volume-mute.svg',
          'bower_components/gemini-icons/icomoon/volume-medium.svg',
          'bower_components/gemini-icons/icomoon/settings.svg',
          'bower_components/gemini-icons/icomoon/contract.svg',
          'bower_components/gemini-icons/icomoon/expand.svg',
          'bower_components/gemini-icons/icomoon/redo.svg',
          'bower_components/gemini-icons/elusive/cc.svg',
          'bower_components/gemini-icons/elusive/screen.svg',
          'bower_components/gemini-icons/elusive/certificate.svg'
        ],
        dest: 'src/icons',
        destCss: 'src/icons',
        options: {
          engine: 'node',
          types: 'woff',
          embed: true,
          stylesheet: 'scss',
          font: 'mejs-icons',
          styles: 'font',
          htmlDemo: false,
          template: 'src/icons/tmpl.css'
        }
      }
    },
    compass: {
      options: {
        sassDir: './',
        cssDir: 'test/css'
      },
      dev: {
        options: {
          outputStyle: 'expanded',
          watch: true,
          poll: true
        }
      }
    }
  });

  // Default task.
  grunt.registerTask('default', ['compass:dev']);
  grunt.registerTask('font', ['webfont', 'compass:dev']);
};
