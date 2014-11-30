/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('frontendjetpack:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'bower.json',
      'package.json',
      "gruntfile.js",
      "karma.conf.js",
      '.editorconfig',
      '.jshintrc',
      "development_files/index.jade",
      "development_files/script1.js",
      "development_files/script2.js",
      "development_files/style.scss",
      "test/spec.js"
    ]);
  });
});
