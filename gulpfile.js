var gulp = require('gulp')
,	concat = require('gulp-concat')
,	uglify = require('gulp-uglify')
,	template = require('gulp-template-compile')

///////////////////////
/// Javascript task ///
///////////////////////
var javascript_globs = [
	'bower_components/jquery/jquery.js'
,	'bower_components/underscore/underscore.js'
,	'bower_components/backbone/backbone.js'
,	'bower_components/backbone.localStorage/backbone.localStorage.js'
,	'js/models/todo.js'
,	'js/collections/todos.js'
,	'js/views/todo-view.js'
,	'js/views/app-view.js'
,	'js/routers/router.js'
,	'js/app.js'
]

gulp.task('js', function()
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



gulp.task('default', function()
{
	console.log('It works')
})