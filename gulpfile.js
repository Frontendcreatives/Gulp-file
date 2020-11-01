var gulp        = require("gulp");
var less        = require("gulp-less");
var imagemin    = require("gulp-imagemin");
var browserSync = require("browser-sync").create();
var reload      = browserSync.reload;
var watch       = require("gulp-watch");


//TASK MINIMIZING IMAGES

gulp.task("minify", () =>{
  return gulp.src('images/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('images/minify/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});


// TASK CONVERTING LESS TO CSS

gulp.task("lesscss", () =>{
   return gulp.src("styles/less/*.less")
        .pipe(less("style.css"))
        .pipe(gulp.dest("styles/css/"))
        .pipe(browserSync.reload({
      stream: true
    }))      
});


//TASK RELOAD BROWSER ON FILE CHANGES

gulp.task('browserSync', () =>{
   browserSync.init({
        server: {
        baseDir:  "./"
      },
    })


//TASK WATCH

  gulp.watch('styles/css/**/*.css').on("change", reload);
  gulp.watch("images/img/*").on("change", reload);
  gulp.watch('*.html').on("change", reload);
});





