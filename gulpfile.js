var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    stylus = require('gulp-stylus'),
    source = require('./source.js').returnSource;


gulp.task('stylus', function () {
  return gulp.src('./public/styl/*.styl')
    .pipe(stylus({linenos: false}))
    .pipe(concatCss('styl.css'))
    .pipe(gulp.dest('./public/css/'));
});

gulp.task('css', function() {
    return gulp.src('./public/css/*.css')
        .pipe(concatCss('build.css'))
        .pipe(autoprefixer())
        .pipe(minifyCss())
        .pipe(rename('build.min.css'))
        .pipe(gulp.dest('./public/build'));
});

gulp.task('js', function() {
    return gulp.src(source())
        .pipe(concat('build.js'))
        .pipe(uglify())
        .pipe(rename('build.min.js'))
        .pipe(gulp.dest('./public/build'))
});

gulp.task('watch', function() {
    gulp.watch("./public/css/*.css", ['css']);
    gulp.watch("./public/styl/*.styl", ['stylus']);
    gulp.watch("./public/js/*.js", ['js']);
    gulp.watch("./public/js/_components/*.js", ['js']);
    gulp.watch("./public/js/lib/*.js", ['js']);
});

gulp.task('default', ['watch']);
