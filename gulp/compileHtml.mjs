import gulp from 'gulp';
import pug from 'gulp-pug';
import htmlbeautify from 'gulp-html-beautify';

const compileHtml = () => gulp.src(['source/pug/pages/*.pug'])
  .pipe(pug())
  .pipe(htmlbeautify({
    'indent_size': 2,
    'preserve_newlines': true,
    'max_preserve_newlines': 0,
    'wrap_attributes': 'auto',
  }))
  .pipe(gulp.dest('build'));

export default compileHtml;
