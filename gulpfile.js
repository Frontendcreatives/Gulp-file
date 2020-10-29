var gulp        = require("gulp");
var less        = require("gulp-less");
var imagemin    = require("gulp-imagemin");
var browserSync = require("browser-sync").create();
var reload      = browserSync.reload;



//TASK MINIMIZING IMAGES
 
 function imgMini(){ 
    return gulp
    .src("./img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./images/minify/img"));
     
 }

gulp.task("imgMini", imgMini);
gulp.task("watch", ()=>{ 
gulp.watch("./images/img/*", imgMini);     
});



// TASK CONVERTING LESS TO CSS

gulp.task("lesscss", async function(){
    gulp.src("style/*.less")
        .pipe(less("style.css"))
        .pipe(gulp.dest("style/css/"));
});



// TASK RELOAD BROWSER FILE CHANGES


gulp.task("browser-sync", function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    
gulp.watch("./styles/less/**/*.less").on("change", browserSync.reload);
gulp.watch("./*.html").on("change", browserSync.reload);
gulp.watch("./scripts/*.js").on("change", browserSync.reload);     
});


//DEFAULT TASK

gulp.task("default", gulp.parallel("imgMini", "watch", "lesscss", "browser-sync"));


