var gulp = require('gulp')
,	concat = require('gulp-concat')
,	uglify = require('gulp-uglify')
,	template = require('gulp-template-compile')
,	minifyCSS = require('gulp-minify-css')
,	base64 = require('gulp-base64')
,	smoosher = require('gulp-smoosher')
,	htmlmin = require('gulp-htmlmin')

///////////////////////
/// Javascript task ///
///////////////////////
var javascript_globs = [
	'bower_components/jquery/jquery.js'
,	'bower_components/underscore/underscore.js'
,	'bower_components/backbone/backbone.js'
,	'bower_components/backbone.localStorage/backbone.localStorage.js'
,	'js/models/todo.js'
,	'dist/tmpl.js'
,	'js/collections/todos.js'
,	'js/views/todo-view.js'
,	'js/views/app-view.js'
,	'js/routers/router.js'
,	'js/app.js'
]

gulp.task('js', ['tmpl'], function()
{
	return gulp.src(javascript_globs)
		.pipe(concat('all.js'))
		.pipe(uglify())
		.pipe(gulp.dest("dist"))
})

gulp.task('tmpl', function()
{
	return gulp.src('templates/*.tmpl')
		.pipe(template())
		.pipe(concat('tmpl.js'))
		.pipe(gulp.dest("dist"))
})


////////////////
/// CSS task ///
////////////////
var css_globs = ['bower_components/todomvc-common/base.css']

gulp.task('css', function()
{
	return gulp.src(css_globs)
		.pipe(base64())
		.pipe(minifyCSS())
		.pipe(gulp.dest('dist'))
});


/////////////////
/// HTML task ///
/////////////////
var html_globs = ['index.html']
gulp.task('html', ['js', 'css'], function()
{
	return gulp.src(html_globs)
		.pipe(smoosher())
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('dist'))
});


gulp.task('default', function()
{
	console.log('It works')
})