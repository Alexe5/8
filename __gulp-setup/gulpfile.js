var _project_src    = 'project.dev';  // определяем директорию проекта и название
var _project_url    = 'project.loc';  // определяем директорию проекта и название


var gulp       = require('gulp'), // Подключаем Gulp
	sass         = require('gulp-sass'),
	browserSync  = require('browser-sync'),
	concat       = require('gulp-concat'),
	uglify       = require('gulp-uglifyjs'),
	cssnano      = require('gulp-cssnano'),
	rename       = require('gulp-rename'),
	del          = require('del'),
	autoprefixer = require('gulp-autoprefixer');


var browserSync = require('browser-sync').create();
	gulp.task('browser-sync', function() {
		browserSync.init({
		//proxy: _project_url, // Директория для сервера (Proxy)
		server: {
			baseDir: _project_src // Директория для сервера
		},
		notify: false,
	});
});


gulp.task('sass', function(){
	return gulp.src( _project_src + '/web/css/_sass/**/*.sass')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)) // Преобразуем Sass в CSS (compressed - Сжимает, expanded - Не сжимает)
		.pipe(autoprefixer(['last 95 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
		.pipe(gulp.dest( _project_src + '/web/css'))
		.pipe(browserSync.reload({stream: true}))
	});



gulp.task('watch', ['browser-sync', 'sass'], function() {
	gulp.watch( _project_src + '/web/css/**/*.sass', ['sass']);
	gulp.watch( _project_src + '/web/js/**/*.js', browserSync.reload);
	gulp.watch( _project_src + '/**/*.html', browserSync.reload);
});


gulp.task('default', ['watch', 'gulp-setup']);
gulp.task('gulp-setup', function() {
	return gulp.src([
		'gulpfile.js', 
		'package.json',
		])

	.pipe(gulp.dest( _project_src + '/__gulp-setup')); // Выгружаем в папку app/css
});