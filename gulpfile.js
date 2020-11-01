var gulp        = require("gulp");
var less        = require("gulp-less");
var imagemin    = require("gulp-imagemin");
var browserSync = require("browser-sync").create();
var reload      = browserSync.reload;
var watch       = require("gulp-watch");

// TASK WATCH AND RELOAD BROWSER FILE CHANGES

 gulp.task ("watchReload",["lesscss"], ["imgMini"], function(){
    
    browserSync.init({
       server: {
            baseDir: "./",
        }   
    }); 
    
  gulp.watch("./styles/less/**/*.less", ["lesscss"]);
  gulp.watch("./images/img/*.jpg", ["imgMini"]);
  gulp.watch("./styles/less/**/*.less").on("change", browserSync.reload);
  gulp.watch("./images/img/*.jpg").on("change", browserSync.reload);  
  gulp.watch("./*.html").on("change", browserSync.reload);
});

// TASK CONVERTING LESS TO CSS

gulp.task("lesscss", function(){
   return gulp.src("./styles/less/*.less")
        .pipe(less("style.css"))
        .pipe(gulp.dest("./styles/css/"))
        .pipe(browserSync.stream());
});



//TASK MINIMIZING IMAGES
  
gulp.task("imgMini",  function (){ 
    return gulp.src("./images/img/*.jpg")
    .pipe(imagemin())
    .pipe(gulp.dest("./images/minify/"))
    .pipe(browserSync.stream());
     
 });



//DEFAULT TASK

gulp.task("default", ["watchReload"]);





