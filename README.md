# generator-frontendjetpack [![Build Status](https://secure.travis-ci.org/TheBlasfem/generator-frontendjetpack.png?branch=master)](https://travis-ci.org/TheBlasfem/generator-frontendjetpack)

> Yeoman Generator for a jetpack ready to launch you so high in frontend development. We love the Frontend workflow with [Grunt](http://gruntjs.com/), [Bower](http://bower.io/), using [Jade](http://jade-lang.com), [Sass](http://sass-lang.com/), [Bourbon](http://bourbon.io) and [Neat](http://neat.bourbon.io).


## Install

Install `generator-frontendjetpack`:
```
npm install -g generator-frontendjetpack
```

Make a new directory, and `cd` into it:
```
mkdir my-new-project && cd $_
```

Run
```
yo frontendjetpack
```

## Usage

Run `grunt` and start coding inside /development_files. Your browser will open in http://localhost:8000. Your files jade/sass will be compiled and the browser will refresh automatically with livereload. Also your js files have a minifier, and a concat for create one js file to the output. If there is code wrong in your js files, a notification of your SO will appear to warning you.

Run `grunt sprites` for create styles and a sprite file using all .pngs in images/sprites/

Run `grunt images` to optimize all your images in images/

Run `grunt test` for run your specs in /test folder