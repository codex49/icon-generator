import gulp from 'gulp';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import browserify from 'browserify';
import reactify from 'reactify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import browserSync from 'browser-sync';
import uglify from 'gulp-uglify';
import svgmin from 'gulp-svgmin';

function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}

const processors = [
    require('postcss-csso')
];

gulp.task('sass', () => {
    return gulp.src("src/**/*.scss", { sourcemaps: true })
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.create().stream());
});

gulp.task('browserify', () => {
    browserify('./src/js/main.js')
        .transform(babelify, {presets: ["es2016", "react"]})
        .bundle()
        .on('error', handleError)
        .pipe(source('main.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', () => {
    gulp.src('src/index.html')   .pipe(gulp.dest('dist'));
    gulp.src('src/css/fonts/*.*').pipe(gulp.dest('dist/css/fonts'));

    gulp.src('src/img/icons/*.*').pipe(gulp.dest('dist/img/icons'));
    gulp.src('src/img/bg/*.*')   .pipe(gulp.dest('dist/img/bg'));

    gulp.src('src/js/vendors/*.*').pipe(gulp.dest('dist/js'));

    gulp.src('src/img/svg/*.*')
        .pipe(svgmin())
        .pipe(gulp.dest('dist/img/svg'));
});

gulp.task('browser-sync', ['sass'], () => {
    browserSync.init({
        proxy: "http://localhost/icon-generator/dist/",
        browser: "chrome"
    });
});


gulp.task('default', ['browserify', 'copy', 'sass', 'browser-sync'], () => {
    return gulp.watch('src/**/*.*', ['browserify', 'copy', 'sass']);
});