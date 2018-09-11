# gulp实现资源压缩

gulp是构建在node环境上的，所以安装gulp之前首先是需要安装好node，安装node的话直接去官网下载自己需要的版本，点击安装即可。

1.全局安装gulp

``` md
npm install gulp -g
```

2.作为项目开发依赖中安装gulp

``` md
npm install gulp --save-dev
```

3.安装需要依赖的功能包模块

``` md
npm install gulp-minify-css --save-dev
npm install gulp-concat --save-dev
npm install gulp-uglify --save-dev
npm install gulp-rename --save-dev
npm install gulp-jshint --save-dev
```

4.新建gulpfile.js,编写压缩任务js代码

``` js
var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    jshint=require('gulp-jshint');
    //语法检查
    gulp.task('jshint', function () {
        return gulp.src('js/*.js')
            .pipe(jshint())
            .pipe(jshint.reporter('default'));
    });
    //压缩css
    gulp.task('minifycss', function() {
        return gulp.src('css/*.css')    //需要操作的文件
            .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
            .pipe(minifycss())   //执行压缩
            .pipe(gulp.dest('Css'));   //输出文件夹
    });
    //压缩，合并 js
    gulp.task('minifyjs', function() {
        return gulp.src('js/*.js')      //需要操作的文件
            .pipe(concat('main.js'))    //合并所有js到main.js
            .pipe(gulp.dest('js'))       //输出到文件夹
            .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
            .pipe(uglify())    //压缩
            .pipe(gulp.dest('Js'));  //输出
    });
　　//默认命令，在cmd中输入gulp后，执行的就是这个任务(压缩js需要在检查js之后操作)
    gulp.task('default',['jshint'],function() {
        gulp.start('minifycss','minifyjs');
　　});
```

5.cd 到指定的项目目录，运行gulp

``` md
gulp
```
