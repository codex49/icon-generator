import babelify from 'babelify';
import browserify from 'browserify';
import gulp from 'gulp';
import postcss from 'gulp-postcss';
import sass from 'gulp-sass';
import source from 'vinyl-source-stream';
import sourcemaps from 'gulp-sourcemaps';
import svgmin from 'gulp-svgmin';
import webserver from 'gulp-webserver';

function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}

gulp.task('sass', () => {
    const processors = [
        require('postcss-csso')
    ];

    return gulp.src("src/styles/**/*.scss", { sourcemaps: true })
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("dist/css"));
});

gulp.task('browserify', () => {
    browserify('./src/main')
        .transform(babelify, {presets: ["es2015", "react"]})
        .bundle()
        .on('error', handleError)
        .pipe(source('main.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', () => {
    gulp.src('src/public/index.html').pipe(gulp.dest('dist'));
    gulp.src('src/public/fonts/*.*').pipe(gulp.dest('dist/css/fonts'));

    gulp.src('src/public/img/icons/*.*').pipe(gulp.dest('dist/img/icons'));
    gulp.src('src/public/img/bg/*.*').pipe(gulp.dest('dist/img/bg'));

    // gulp.src('lib/vendors/*.*').pipe(gulp.dest('dist/js'));

    gulp.src('src/public/img/svg/*.*')
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
    return gulp.watch(
        ['src/**/*.*', 'lib/**/*.*'],
        ['browserify', 'copy', 'sass']
    );
});
