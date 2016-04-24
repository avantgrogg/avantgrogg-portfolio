import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';

const dirs = {
    src: 'src',
    dest: 'public'
}
const sassPaths = {
  src: `${dirs.src}/styles/main.scss`,
  dest: `${dirs.dest}/stylesheets/`
};

function styles(){
    gulp.src('src/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/stylesheets/'));
}

export default styles;