var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var del = require('del');
var runSequence = require('run-sequence');

/**
 * Compile vendor scripts
 */
gulp.task('vendor-scripts', function() {
    return gulp.src([
        './node_modules/jquery/dist/jquery.js',
        './node_modules/jquery-touchswipe/jquery.touchSwipe.js',
        './node_modules/underscore/underscore.js',
        './node_modules/backbone/backbone.js'
    ])
        .pipe(concat('vendor.js'))
        .pipe(rename('vendor.min.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('./dist/'))
});

/**
 * Compile JS files
 */
gulp.task('scripts', function() {
    return gulp.src([
        './globals/js/*.js',
        './components/common/**/*.js',
        './components/components/**/*.js',
        './components/app.js'
        ])
        .pipe(sourcemaps.init())
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/'))
        .pipe(rename('pwd.min.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('./dist/'))
});

/**
 * Compile CSS files
 */
gulp.task('sass', function () {
    return gulp.src([
        './globals/scss/*.scss',
        './components/common/**/*.scss',
        './components/components/**/*.scss'
    ])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('styles.css'))
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/'))
        .pipe(livereload())
});

/**
 * Watch for changes
 */
gulp.task('watch', function() {
    gulp.watch([
        './globals/scss/*.scss',
        './components/common/**/*.scss',
        './components/components/**/*.scss'
    ], ['sass']);

    gulp.watch(['./components/components/**/*.php'], ['php-template']);
    gulp.watch(['./data/*.json'], ['data']);

    gulp.watch([
        './globals/js/*.js',
        './components/app.js',
        './components/common/**/*.js',
        './components/components/**/*.js',
        './components/app.js'
    ], ['scripts']);
});

/**
 * Compile common PHP files
 */
gulp.task('php-common', function() {
    return gulp.src('./components/common/**/*.php')
        .pipe(gulp.dest('./dist'))
});

/**
 * Compile template PHP files
 */
gulp.task('php-template', function() {
    return gulp.src('./components/components/**/*.php')
        .pipe(concat('templates.php'))
        .pipe(gulp.dest('./dist'))
});

/**
 * Clear dist folder
 */
gulp.task('clean', function() {
    return del('./dist/*')
});

/**
 * Copy images into dist folder
 */
gulp.task('images', function() {
    return gulp.src('./globals/images/*')
        .pipe(gulp.dest('./dist/images'))
});

/**
 * Copy data files
 */
gulp.task('data', function() {
    return gulp.src('./data/*')
        .pipe(gulp.dest('./dist/data'))
});

gulp.task('config', function() {
    return gulp.src('dist/all.js')
});

gulp.task('default', function(callback) {
    runSequence('clean',
        ['images', 'data', 'vendor-scripts', 'scripts', 'sass', 'php-common', 'php-template', 'watch'],
        callback);
});