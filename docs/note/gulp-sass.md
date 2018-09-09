
# Gulp实现配置Es6及sass环境

之前已经讲过如何全局安装gulp，以及如何在开发项目中安装gulp依赖，那么这篇作为上篇的补充，说一下利用gulp-babel及gulp-sass包配置Es6及Sass转Es5及css的任务环境。

<!-- more -->

1.安装所需gulp插件

到指定的目录下执行

``` md
npm init
```

这个时候会生成一个叫package.json的文件，然后执行

``` md
npm install gulp --save-dev
```

会在package.json 里生成devDependencies对象，这个里面讲放入你所依赖的gulp插件,然后添加所需的各个插件。

以下就是一个pageage.json的例子

``` json
{
  "name": "gulp-es6",
  "version": "1.0.0",
  "license": "ISC",
  "devDependencies": {
    "gulp": "3.x.x",
    "gulp-sass": "*",
    "gulp-if": "*",
    "gulp-plumber": "^0.6.5",
    "del": "^0.1.3",
    "colors": "^0.6.2",
    "gulp-shell": "*",
    "gulp-livereload": "*",
    "gulp-babel": "*"
  }
}

```

我们在执行一次以下命令，我们所需要的插件就会加载下来

``` bash
npm install
```

接下来我们还需要新建一个js文件 gulpfile.js
最前面是加载gulp的插件，加载好插件之后，我们需要gulp帮我们执行任务.

``` js
require('colors');
var del = require('del');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var plumber = require('gulp-plumber');
var path = require('path');
var shell = require('gulp-shell')
var pkg = require(path.join(process.cwd(), 'package.json'));
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var babel = require('gulp-babel');

var isBuild = true;

function err(error) {
  console.error('[ERROR]'.red + error.message);
  this.emit('end');
}

// 判断文件类型
var ifsass = function(file) {
  var extname = path.extname(file.path);
  return extname === '.scss' ? true : false;
};

ifJSX = function(file) {
  var extName = path.extname(file.path);
  return extName === '.jsx' ? true : false;
}

gulp.task('sass', function() {
  gulp.src('./**/*.scss')
    .pipe(plumber())
    .pipe(gulpif(ifsass, sass()))
    .pipe(plumber.stop())
    .pipe(gulp.dest('./'));
});

gulp.task('jsx', function() {
  return gulp.src(['./**/*.jsx'])
    .pipe(plumber(err))
    .pipe(gulpif(ifJSX, babel({
      presets: ['es2015']
    })))
    .pipe(plumber.stop())
    .pipe(gulp.dest('./'));
});

gulp.task('code', function() {
  return gulp.src(['./src/**/*.js', './**/*.css', './**/*.html'])
    .pipe(plumber(err))
    .pipe(livereload());
});

gulp.task('default', ['css', 'js', 'sass']);

//监听
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(['./src/**/*.js', './**/*.css', './**/*.html'], ['code']);
  gulp.watch(['./**/*.scss'], ['sass']);
  gulp.watch(['./**/*.jsx'], ['jsx']);
});

```

2.gulp的api只有简单的几个

- task方法

task方法是用于定义一个具体任务的方法。如果需要执行任务，在终端执行gulp task-name。

`gulp.task(name[, deps], fn)`

第一个参数是任务的名字。

第二个参数是array类型，指在跑当前任务时，对其它任务的依赖。也就是要执行当前任务，会先执行这些依赖的任务。

`gulp.task('demo', ['demo1', 'demo2'], function(){ });`

这是在执行demo任务时，会先同时执行demo1 和 demo2任务

第三个参数是函数,指运行任务时，要执行的具体操作的内容.

- src方法

src方法是指定源文件的输入路径，pipe有点像是封闭的“流水线”，某个产品经过上一个工序处理后，就转入下一个工序去处理，直到完成。也就是将上一步的输出转化下一步的输入的中间者
`gulp.src(globs[, options])`

第一个参数是string或者array,指定源文件的路径，可以是单个路径，也可以是个路径数组。

1. `app.js`　　　　指定具体文件
2. `js/*`　　　　　匹配 js 目录下所有的文件，不包括子文件夹
3. `js/*.js`　　　 匹配 js 目录下所有的扩展名为 .js 的文件，不包括子文件夹
4. `js/*/*.js`　　匹配 js 目录下第一层子文件夹里的扩展名为 .js 的文件
5. `js/**/*.js`　 匹配 js 目录下所有文件夹层次下扩展名为 .js 的文件
6. `!js/try.js`　 不包括 try.js 文件，在前五条文件匹配模式前加!，就忽略掉相应的文件

下面这个任务中,代表js目录下的所有js文件,但是不包括index.js这个文件

``` js
/**
 * 注册一个任务
 */
gulp.task('concat', function() {
  gulp.src(['./js/**/*.js', '!js/index.js'])
    .pipe(uglify())
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest('./build'));
});

```

- dest方法

dest方法是指定被处理完的文件的输出路径,像上面那样操作的话,最后文件的输出路径是build目录

`gulp.dest(path[, options])`
`path` String 或 Function，指定输出文件的文件夹路径，可以是字符串，也可以是一个返回文件夹路径的函数。
`options` Object类型,两个属性 `cwd` `mode`
`options.cwd` 类型：String，默认：`process.cwd()`  设置输出文件夹路径的相对路径，默认为当前脚本的工作目录的路径。　
`options.mode` 类型：String，默认：0777 设置被创建文件夹的权限。

- watch方法

watch方法是用于监听文件变化，文件一修改就会执行指定的任务。
`gulp.watch(glob [, opts], tasks) or gulp.watch(glob [, opts, cb])`
`glob`: `String` 或 `Array`，指定源文件的路径，可以是单个路径，也可以是个路径数组。路径匹配和上述`gulp.src()`方法路径匹配的模式一样
`opts` `Object`类型,4个属性 `cwd` `mode` `debounceDelay` `interval`
`tasks` 类型：`Array`，监听到文件变化后，要被执行的任务的名字组成的数组.
`cd` 类型：`Function`，回调函数。
