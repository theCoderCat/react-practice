// "use strict";
import babel from 'babel-core';
import gulp from 'gulp';
import connect from 'gulp-connect';
import open from 'gulp-open';

var config = {
	port: 65432,
	devBaseUrl: 'http://127.0.0.1',
	paths: {
		html: './src/*.html',
		dist: './dist'
	}
};

gulp.task('connect', () => {
	connect.server({
		root: 'dist',
		port: config.port,
		base: config.devBaseUrl,
		livereload: true
	});
});

gulp.task('open', ['connect'], () => {
	gulp.src('dist/index.html')
		.pipe(open({
			uri: config.devBaseUrl + ':' + config.port + '/'
		}));
});

gulp.task('html', () => {
	gulp.src(config.paths.html)
	.pipe(gulp.dest(config.paths.dist))
	.pipe(connect.reload());
});

gulp.task('default', ['html', 'open'], () => {

});
