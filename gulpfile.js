var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');

gulp.task('scripts', function() {
    return gulp.src([
        './globals/js/*.js',
        './components/common/**/*.js',
        './components/components/**/*.js'
        ])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/'))
        .pipe(rename('pwd.min.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('./dist/'))
});

gulp.task('vendor-scripts', function() {
    return gulp.src([
        './node_modules/jquery/dist/jquery.js',
        './node_modules/underscore/underscore.js',
        './node_modules/backbone/backbone.js'
    ])
        .pipe(concat('vendor.js'))
        .pipe(rename('vendor.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'))
});



gulp.task('sass', function () {
    return gulp.src([
        './globals/scss/*.scss',
        './components/components/**/*.scss'
    ])
        // .pipe(plumber())
        //.pipe(sourcemaps.init())
        .pipe(concat('styles.css'))
        .pipe(sass())
        // .pipe(autoprefixer({
        //     browsers: ['last 2 versions'],
        //     cascade: false
        // }))
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/'))
        // .pipe(livereload())
});


gulp.task('watch', function() {
    gulp.watch([
        './globals/globals/scss/*.scss',
        './components/components/**/*.scss'
    ], ['sass']);

    gulp.watch([
        './globals/js/*.js',
        './components/components/**/*.js'
    ], ['scripts']);
});

gulp.task('config', function() {
    return gulp.src('dist/all.js')
});

gulp.task('default', ['vendor-scripts', 'scripts', 'sass', 'watch']);