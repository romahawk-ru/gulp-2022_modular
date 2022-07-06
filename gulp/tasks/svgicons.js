export const svgicons = () => {
  return app.gulp.src(app.path.src.svg)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError(
        {
          title: "IMAGES",
          message: "Error: <%= error.message %>"
        })
    ))
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.gulp.dest(app.path.build.svg))
    .pipe(app.plugins.browsersync.stream());
}