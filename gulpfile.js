var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    postcss     = require('gulp-postcss'),
    sourcemaps  = require('gulp-sourcemaps'),
    browserify  = require('browserify'),
    reactify    = require('reactify'),
    source      = require('vinyl-source-stream'),
    browserSync = require('browser-sync').create(),
    uglify      = require('gulp-uglify'),
    svgmin      = require('gulp-svgmin');;

function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}

var processors = [
    require('postcss-csso')
];

gulp.task('sass', function() {
    return gulp.src("src/css/sass/**/*.scss", { sourcemaps: true })
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

gulp.task('browserify', function () {
    browserify('./src/js/main.js')
        .transform('reactify')
        .bundle()
        .on('error', handleError)
        .pipe(source('main.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function () {
    gulp.src('src/index.html')   .pipe(gulp.dest('dist'));
    gulp.src('src/css/fonts/*.*').pipe(gulp.dest('dist/css/fonts'));

    gulp.src('src/img/icons/*.*').pipe(gulp.dest('dist/img/icons'));
    gulp.src('src/img/bg/*.*')   .pipe(gulp.dest('dist/img/bg'));

    gulp.src('src/js/vendors/*.*').pipe(gulp.dest('dist/js'));

    gulp.src('src/img/svg/*.*')
        .pipe(svgmin())
        .pipe(gulp.dest('dist/img/svg'));
});

gulp.task('browser-sync', ['sass'], function() {
    browserSync.init({
        proxy: "http://localhost:8080/IconApp/dist/",
        //proxy: "http://localhost/icon-App1/dist/",
        browser: "chrome"
    });
});


gulp.task('default', ['browserify', 'copy', 'sass', 'browser-sync'], function () {
    return gulp.watch('src/**/*.*', ['browserify', 'copy', 'sass']);
});