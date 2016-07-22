var gulp = require('gulp');

gulp.task('default', function() {
    console.log('hello world!');
});

gulp.task('example', function() {
    console.log('hello example');
});

gulp.task('example01', ['default', 'example'], function() {
    console.log('example01');
});
