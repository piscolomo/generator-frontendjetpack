'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var FrontendjetpackGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    this.log(yosay(
      'Thanks to use Frontend Jetpack generator, you really rock!'
    ));
    /*
    var prompts = [{
      name: 'appName',
      message: 'What is your app\'s name ?',
      default: "frontend-jetpack"
    }];

    this.prompt(prompts, function (props) {
      this.appName = props.appName;

      done();
    }.bind(this));*/
    done();
  },

  writing: {
    app: function () {
      this.dest.mkdir('development_files');
      this.dest.mkdir('css');
      this.dest.mkdir('js');
      this.dest.mkdir('test');

      this.src.copy('_package.json', 'package.json');
      this.src.copy('_bower.json', 'bower.json');
      this.src.copy('_gruntfile.js', 'gruntfile.js');
      this.src.copy('_karma.conf.js', 'karma.conf.js');
      this.src.copy('development_files/_index.jade', 'development_files/index.jade');
      this.src.copy('development_files/_script1.js', 'development_files/script1.js');
      this.src.copy('development_files/_script2.js', 'development_files/script2.js');
      this.src.copy('development_files/_style.scss', 'development_files/style.scss');
      this.src.copy('test/_spec.js', 'test/spec.js');
    },

    projectfiles: function () {
      this.src.copy('editorconfig', '.editorconfig');
      this.src.copy('jshintrc', '.jshintrc');
    }
  },

  end: function () {
    this.installDependencies();
  }
});

module.exports = FrontendjetpackGenerator;
