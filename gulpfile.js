import browserSync from 'browser-sync';
import gulp from 'gulp';
import html from './gulp/compileHtml.mjs';
import {deleteAsync} from 'del';

const browser = browserSync.create();
const refresh = (done) => {
  browser.reload();
  done();
}

const clean = () => deleteAsync('build');

const watch = () => {
  gulp.watch('source/pug/**/*.pug', gulp.series(html, refresh));
}

const server = (done) => {
  browser.init({
    server: {
      baseDir: 'build'
    },
    notify: false,
    open: true,
    cors: true,
    ui: false
  });
  watch();
}
const build = gulp.series(clean, html);
const start = gulp.series(build, server);
export {html, build, start};
