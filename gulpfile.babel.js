import gulp from 'gulp';
import webserver from 'gulp-webserver';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import svgmin from 'gulp-svgmin';

function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}

const processors = [
    require('postcss-csso')
];

gulp.task('sass', () => {
    return gulp.src("src/css/sass/**/*.scss", { sourcemaps: true })
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("dist/css"));
});

gulp.task('browserify', () => {
    browserify('./src/js/main.js')
        .transform(babelify, {presets: ["es2017", "react"]})
        .bundle()
        .on('error', handleError)
        .pipe(source('main.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', () => {
    gulp.src('src/index.html').pipe(gulp.dest('dist'));
    gulp.src('src/css/fonts/*.*').pipe(gulp.dest('dist/css/fonts'));

    gulp.src('src/img/icons/*.*').pipe(gulp.dest('dist/img/icons'));
    gulp.src('src/img/bg/*.*').pipe(gulp.dest('dist/img/bg'));

    gulp.src('src/js/vendors/*.*').pipe(gulp.dest('dist/js'));

    gulp.src('src/img/svg/*.*')
        .pipe(svgmin())
        .pipe(gulp.dest('dist/img/svg'));
});


gulp.task('webserver', function() {
    gulp.src('dist')
        .pipe(webserver({
            port:'8081',
            livereload: true,
            open: true
        }));
});

gulp.task('default', ['browserify', 'copy', 'webserver', 'sass'], () => {
    return gulp.watch('src/**/*.*', ['browserify', 'copy', 'sass']);
});