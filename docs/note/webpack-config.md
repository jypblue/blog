---
title: Webpack构建前端工程项目
date: 2016-06-27 17:25:36
tags:
- gulp
- webpack

categories: tool

---


最近开始学习React/ReactNative，需要动手实践，按照官网提供的方式可以运行React的简单小例子，但是很不方便，就想可不可以使用工具搭建一个前端的React-ES6-Sass的开发环境方便开发运行，因此想到了现在很火的webpack。之前自己一直都用的是gulp来构建sass和es6，所以打算研究一下webpack，利用gulp和webpack结合起来，用来管理与打包。
先上项目地址：<a href="https://github.com/jypblue/webpack-scheme">https://github.com/jypblue/webpack-scheme</a>

<!-- more -->

### 一、项目准备
#### 1. webpack初认识
webpack自从出现就很火，因为他可以管理前端的各种资源，查看了一下它的官网，发现不太容易上手，所以就在网上找了两篇关于webpack的入门教程学习：

1. <a href="https://github.com/ruanyf/webpack-demos">https://github.com/ruanyf/webpack-demos</a>
2. <a href="https://github.com/petehunt/webpack-howto/blob/master/README-zh.md">https://github.com/petehunt/webpack-howto/blob/master/README-zh.md</a>

推荐先学习这两篇入门教程，做到可以入门使用webpack后，再去官网查看文档学习。

#### 2. koa学习
因为是需要搭建一个工程项目的开发环境，所以需要本地构建服务器，感谢node，让js的生态越来越好。现有的前端工具都是建立在node环境上。打算利用koa框架本地构建服务器，所以需要学习koa的使用，于是去koa官网学习了koa简单的基本用法，贴一下koa官网的地址<a href="http://koa.bootcss.com/#">koa中文网</a>;当然使用express框架也是ok的，只是觉得打算构建es6的开发环境，所以就打算使用面向未来的koa框架

#### 3. gulp
当然gulp的使用也得知道，因为需要用它来做任务管理，这里就不详细讲了，gulp官网已经讲得很好了，贴一下gulp官网地址：<a href="http://www.gulpjs.com.cn/">gulp中文网</a>

### 前端开发环境搭建

#### 1. 项目目录结构

```
├── gulpfile.js               # gulp任务配置
├── package.json              # 项目配置
├── README.md                 # 项目说明
├── server                    # 本地server
│   ├── app.js                # 本地server入口
│   ├── routes/               #	 后端路由文件夹
│   ├── mock                  # 后端模拟数据文件夹
│   └── views/                # 后端views文件夹
├── src                       # 源码目录
│   ├── XXX.html              # XXX入口文件
│   ├── css/                  # css文件夹
│   ├── fonts/                # 字体文件
│   ├── img/                  # 图片文件夹
│   ├── js                    # js&jsx文件夹
│   │   ├── XXX.js            # XXX页面入口js/jsx文件
│   │   ├── action/           # Action Creators文件夹：存放可以触发的action函数
│   │   ├── components/       # React展示组件文件夹
│   │   ├── constants/        # Action 大写字符串描述事件
│   │   ├── containers/       # 容器文件夹：存放容器组件
│   │   ├── reducers/         # reducers文件夹：存放action的处理器reducers
│   │   ├── store/            # store文件夹
│   │   └── utils/            # 前端路由文件夹
│   ├── scss/                 # scss文件夹
│   ├── libsPath.json         # 手动配置某些模块的路径，可以加快webpack的编译速度
├── webpack-build.config.js   # webpack基本配置
├── webpack.config.js         # 正式环境webpack配置入口
└── webpack-dev.config.js     # 开发环境webpack配置入口
```

目前server部分还没有添加，只是把目录建好了，后续会把server中充分利用koa框架的代码添加进去，包括连接mongodb等

#### 2. 本地开发环境搭建

```
"use strict";
//加载node模块
let http = require('http');
let path = require('path');
let util = require('util');
//加载koa框架模块
let koa = require('koa');
let router = require('koa-router')();
let serve = require('koa-static');
let open = require('open');
//加载本地文件
let pkg = require('../package.json');
let env = process.argv[2] || process.env.NODE_ENV;
let dev = 'production' !== env;
let viewDir = debug ? 'src' : 'dist';
let staticDir = path.resolve(__dirname, '../' + (dev ? 'src' : 'dist'));
//加载routes
let routes = require('./routes/routes.js');
//初始化
let app = koa();
//基本设定
app.keys = [pkg.name, pkg.description];
app.proxy = true;
//使用路由
routes(router, app, staticDir);
app.use(router.routes());
app = http.createServer(app.callback());
app.listen(pkg.server.port, '127.0.0.1', () => {
  let url = util.format('http://%s:%d', 'localhost', pkg.server.port);
  console.log('Listening at %s', url);
  open(url);
});
```

运行node app.js 就启动了本地的webserver了，浏览器会自动新开一个页面list

#### 3. webpack资源管理

##### 资源获取
webpack中，可以把node_modules的路径添加到resolve search root 列表里面，这样就可以在项目中直接加载npm模块了

```
let nodeModPath = path.resolve(__dirname, './node_modules');
```

```
resolve: {
      root: [srcDir, nodeModPath],
      alias: pathMap,
      extensions: ['', '.js', '.jsx', '.css', '.scss', '.tpl', '.png', '.jpg', '.jpeg']
    },
```

这样在js文件中就可以利用ES6语法，查找到并加载模块引用进来

```
import React from 'react';
import {render} from 'react-dom';
```

##### 资源加载
webpack加载各种资源是通过不同的插件来实现的，通过简单的配置参数就能做到：

```
    module: {
      loaders: [
        //图片
        {
          test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg|jpe?g|png|gif|ico)$/,
          //url-loader图片小于10k自动转成dataUrl，
          //否则调用file-loader,参数直接传入
          loaders: [
            'url?limit=10000&name=img/[hash:8].[name].[ext]'
          ]
        },
        //字体
        {
          test: /\.((ttf|eot|woff|svg)(\?t=[0-9]\.[0-9]\.[0-9]))|(ttf|eot|woff|svg)\??.*$/,
          loader: 'url?limit=10000&name=fonts/[name].[ext]'
        },
        //模板
        {
          test: /\.(tpl|ejs)$/,
          loader: 'ejs'
        },
        //css
        {
          test: /\.css$/,
          loader: cssLoader
        },
        //sass
        {
          test: /\.(scss|sass)$/,
          loader: sassLoader
        },
        //less
        {
          test: /\.less$/,
          loeader: lessLoader
        },
        //jsx
        {
          test: /\.js[x]$/,
          loader: ['babel-loader'],
          query: {
            presets: ['es2015', 'react', 'stage-0']
          }
        }
      ]
    },
```

上面配置了img,confront,template,css,sass,less,jsx等资源类型，因此项目中也能直接利用ES6语法或者commonJS语法require各种资源。

```
//加载css资源
import '../fonts/iconfont.css';
require('../fonts/iconfont.css');
//加载图片
let d1 = require('../img/d1.jpg');
//加载js
import React from 'react';
require('react');
```

##### 资源打包
webpack有三个概念：模块（module）、入口文件（entry）、分块（chunk）

1. 模块（module）:各种资源，如js,css,img,iconfont,svg,scss,less
2. 入口（entry）:可以是一个或者多个资源合并，通过html的script标签引入
3. 分块（chunk）:被entry所依赖的额外的代码块，可以包含一个或者多个文件

我们通过path,glob模块，获取到文件夹下得所有开发js文件作为入口文件地址及名称

```
let entries = (() => {
  let jsDir = path.resolve(srcDir, 'js');
  let entryFiles = glob.sync(jsDir + '/*.{js,jsx}');
  let map = {};
  entryFiles.forEach((filePath) => {
    let filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'));
    map[filename] = filePath;
  });
  return map;
})();
```

另外，webpack也支持资源异步加载，通过require.ensure()
，将里面包裹的部分进行单独打包

```
require.ensure([], function(require) {
        var toast = require('./components/Slider');
        // todo ...
    });
```

##### 资源热替换

在webpack中，通过本地启动一个web-dev-server,来负责处理由webpack生成的静态资源请求，而webpack-dev-server是把所有资源存在内存中的。资源更新的时候chunk会改变，以此达到热替换。

webpack-dev-server集成到koa服务器中：

```
  // statement
  let webpackDevMiddleware = require('koa-webpack-dev-middleware');
  let webpack = require('webpack');
  let webpackConf = require('../webpack-dev.config.js');
  let compiler = webpack(webpackConf);
  //使用koa做服务器配置koa-webpack-dev-middleware
  app.use(webpackDevMiddleware(compiler, webpackConf.devServer));
  //配置webpack-hot-middleware实现hot module replace
  let hotMiddleware = require('webpack-hot-middleware')(compiler);
  //koa 对webpack-hot-middleware做适配
  app.use(function*(next) {
    yield hotMiddleware.bind(null, this.req, this.res);
    yield next;
  });
```

webpack中也做相应的配置：

```
    ((entry) => {
      for (let key of Object.keys(entry)) {
        // statement
        if (!Array.isArray(entry[key])) {
          entry[key] = Array.of(entry[key]);
        }
        entry[key].push('webpack-hot-middleware/client?reload=true');
      }
    })(config.entry);
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
```

##### 资源公用部分抽离
使用CommonsChunkPlugin插件将指定的chunks的公共模块提取合并在一起

```
    plugins: [
      // //可以自主添加提取公共部分，拆分包以免包过大
      // new CommonsChunkPlugin({
      // }),
      new CommonsChunkPlugin({
        name: 'common-slider',
        chunks: ['rSlider', 'todo']
      })
      ]
```


#### 4. gulp管理任务
我们通过webpack良好的构建了资源的引用打包工作，那么gulp就用来管理任务的执行，本地新建gulpfile.js文件，添加eslint语法检测的任务，webpack构建的任务，以及clean重新构建生成的任务

```
'use strict';
let gulp = require('gulp');
let webpack = require('webpack');
let gulputil = require('gulp-util');
// 加载webpack配置文件
let webpackconf = require('./webpack.config.js');
//js文件目录入口
let src = process.cwd() + '/src';
//文件发布版本
let dist = process.cwd() + '/dist';
//eslint check
gulp.task('lint', () => {
  let eslint = require('gulp-eslint');
  return gulp.src([
      '!' + src + '/js/lib/**/*.js',
      src + '/js/**/*.js'
    ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
//clean dist
gulp.task('clean', ['lint'], () => {
  let clean = require('gulp-clean');
  return gulp.src(dist, {
    read: true
  }).pipe(clean());
});
//run webpack
gulp.task('pack', ['clean'], (done) => {
  //开发版本webpackdevconf,生产版本webpackconf
  //生成release版本时检查是否使用sass因为sass-loader有问题，所以最好还是原生css用于生产
  webpack(webpackconf, (err, stats) => {
    if (err) {
      throw new gulputil.PluginError('webpack', err);
    }
    gulputil.log('[webpack]', stats.toString({
      colors: true
    }));
    done();
  })
})
gulp.task('default', ['pack']);
```

### 三、总结
由此，我们搭建好了React、Es6、Sass的开发环境，可以高效的制作前端原型，做到事半功倍的书写前端代码。同时也练习了node,es6等前端技术。后续还会完善koa部分，希望工具后面可以将koa工程项目完全集成起来，组合使用，src部分则添加redux+react结合使用的例子。














