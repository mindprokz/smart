'use strict'

const gulp = require('gulp'),
	minifyCss = require('gulp-minify-css'),
	autoprefixer = require('gulp-autoprefixer'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-ruby-sass'),
	livereload = require('gulp-livereload'),
	rename = require('gulp-rename'),
    bs = require("browser-sync").create(),
    babel = require('gulp-babel'); 

gulp.task('Server Start', function(){
	bs.init({
	    server : './production/'
	})
	bs.watch('production/*.html').on('change', bs.reload);
	bs.watch('production/css/style.min.css').on('change', bs.reload);
	bs.watch('production/js/*.js').on('change', bs.reload);
});

// task for change html
gulp.task('html',function(){
	gulp.src('production/index.html');
});

gulp.task('sass', function () {
  return sass('production/css/sass/main.sass')
    .on('error', sass.logError)
    .pipe(autoprefixer('last 10 version'))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('production/css'));
});

// task for JS 
gulp.task('js', function() {
  return gulp.src('production/js/nav.js')
    .pipe(uglify())
    .pipe(rename('nav.min.js'))
    .pipe(gulp.dest('production/js/'));
});

gulp.task('ecma2015', function() {
  return gulp.src('production/js/controller.js')
    .pipe(babel({presets: ['es2015']}))
    .pipe(uglify())
    .pipe(rename('production/controller.min.js'))
    .pipe(gulp.dest('production/js/'));
});

// taks for watch change files
gulp.task('watch', function(){
	gulp.watch('production/css/sass/*.sass', ['sass']);
	gulp.watch('production/index.html', ['html']);
	gulp.watch('production/js/common.js', ['js']);
    gulp.watch('production/js/controller.js', ['ecma2015']);
});

// default task
gulp.task('default', ['html', 'sass', 'js', 'ecma2015', 'watch', 'Server Start']);