const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sass = require("gulp-sass");
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');

const vendorLibsPath = './Scripts/vendor';

// polyfills
gulp.task('vendor:polyfills', function () {
    return gulp.src([
        'node_modules/core-js/client/shim.min.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/systemjs/dist/system.src.js'
    ])
        .pipe(uglify())
        .pipe(concat('polyfills.min.js'))
        .pipe(gulp.dest(vendorLibsPath));
});

// Third party libraries 
gulp.task('vendor:libs', function () {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.bundle.js',
    ])
        .pipe(uglify())
        .pipe(concat('libraries.min.js'))
        .pipe(gulp.dest(vendorLibsPath));
});

// gulp task to copy SCSS files to bootstrap folder
gulp.task("bootstrap-vendor:scss", function () {
    gulp.src([
        'node_modules/bootstrap/scss/**/*.scss'
    ])
        .pipe(gulp.dest("./Content/bootstrap"));
});

// converting bootstrap 4 & custom scss files to css
gulp.task("styles:css", function () {
    gulp.src('Content/scss/app.scss')
        .pipe(sass({ style: 'expanded' }))
        .pipe(autoprefixer({ browsers: ["last 3 version", "safari 5", "ie 8", "ie 9"], cascade: false }))
        .pipe(rename("bootstrap.css"))
        .pipe(gulp.dest("./Content/css"));
});
