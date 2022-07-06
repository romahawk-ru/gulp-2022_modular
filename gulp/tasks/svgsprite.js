import svgSprite from "gulp-svg-sprite";

export const svgsprite = () => {
  return app.gulp.src(`${app.path.src.svgimg}`, {})
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError(
        {
          title: "SVG",
          message: "Error: <%= error.message %>"
        }
      ))
    )
    .pipe(svgSprite(
      {
        mode: 
        {
          stack:
          {
            sprite: `../sprite.svg`,
            // Создавать страницу с перечнем svg картинок
            example: true
          }
        },
      }
    ))
    .pipe(app.gulp.dest(`${app.path.build.svgimg}`))
}