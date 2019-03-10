const gulp      = require('gulp');
var postcss      = require('gulp-postcss');
const sourcemaps   = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const { series, parallel } = require('gulp');
const uglify = require ('gulp-uglify');


// gulp.task('autoprefixer', function () {
//     return gulp.src('./themes/hubkbs-theme/source/_css/*.css')
//     .pipe(sourcemaps.init())
//     .pipe(postcss([ autoprefixer() ]))
//     .pipe(sourcemaps.write('.'))
//     .pipe(gulp.dest('./themes/hubkbs-theme/source/css'));
// });

// gulp.task(['autoprefixer']);

function clean(cb) {
    // remove old files here

    cb();
}

function livereload(cb) {

    cb();
}

function isJavascript(file) {
    return file.extname =='.js';
}

function jsMinify(cb) {
    // include js and css files in a single pipeline
    //  gulp.src('./themes/hubkbs-theme/source/_js/*.js')
    // .pipe(uglify())
    // .pipe(gulp.dest('./themes/hubkbs-theme/source/js'))
    cb();
}

function cssMinify(cb) {
    cb();
}

function build(cb) {
    gulp.src('./themes/hubkbs-theme/source/_css/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./themes/hubkbs-theme/source/css'));
    cb();
}


exports.build = series(clean, parallel(build, cssMinify, jsMinify));

// exports.default = defaultTask