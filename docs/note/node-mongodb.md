# Node如何连接Mongodb

今年初开始下定决心开始学习nodejs，之前断断续续看了一些node的api，但是一直没有一个总体的认识，于是买了书查看网上教程先跟着别人的教程跑通一个web站点以此作为对node总体的一个了解，记录的第一个简单知识点就是利用mongoose这个模块连接mongodb数据库。
<!-- more -->

1.安装mongodb

首先我们进入mongodb官网[mongodb](https://www.mongodb.org/downloads#production) 选择自己需要的版本下载，然后直接点击安装即可。亦或者我们直接通过Homebrew进行安装，直接打开shell终端,运行命令行

```brew install mongodb```

2.启动mongodb

安装完成后我们需要启动mongodb数据库才能进行连接。继续运行命令行

```mongod --config /usr/local/etc/mongod.conf```

3.连接mongodb

连接mongodb,直接shell终端输入

```mongo```

就进入mongodb操作界面，就可以使用mongodb语法增删修改数据库了。另外还有一个mongodb可视化管理工具Robomongo可以使用，跨平台的。用起来还是蛮方便的。

4.利用mongoose在node项目中操纵mongodb

首先我们需要下载mongoose模块，直接在你的项目文件夹下运行

```npm install mongoose --save-dev```

就安装好了。然后直接根据官网的demo代码来做

5.引入mongoose，连接mongodb

```js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
```

6.操作mongodb

mongoose的数据模型设计为Schema、Model、Documents三者。

- Schema 模式定义

```js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var blogSchema = new Schema({
  title:  String,
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});
```

- Model 编译模型

```js
var mongoose = require('mongoose');
var blogSchema = require('../schemas/blog');
var Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
```

- Documents 文档实例化

```js
var Blog = require('../models/blog);
var small = new Blog({ size: 'small' });
//保存
Blog.save(function (err) {
  if (err) return handleError(err);
  // saved!
})
// or 增
Blog.create({ size: 'small' }, function (err, small) {
  if (err) return handleError(err);
  // saved!
})
//查询
Blog.find({ size: 'small' }).where('createdDate').gt(oneYearAgo).exec(callback);
//删除
Blog.remove({ size: 'large' }, function (err) {
  if (err) return handleError(err);
  // removed!
});
```

我的理解就是Schema是组装，定义数据字段的，Model进行数据的编译转化，Documents进行数据的实例化，做到增删改查的操作。
