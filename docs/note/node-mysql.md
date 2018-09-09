---
title: Node如何连接Mysql
date: 2016-03-12 16:15:51
tags:
- node
- mysql
categories: node

---
# Node如何连接Mysql

**1. 安装MySQL**

 首先去MySQL官网下载安装包<a href="http://dev.mysql.com/downloads/mysql/" target="_blank">http://dev.mysql.com/downloads/mysql/</a>，
 注意mac下安装dmg文件比较方便。

 点击安装之后测试一下安装是否成功，在shell终端中键入`mysql`命令看是否识别该命令，键入`mysqladmin --version`查看默认数据库版本信息。

 注：如有问题，请先查阅了MySQL数据库如何使用之后再来读本博客。

**2. 本地创建MySQL数据库**

1. 本地开启MySQL数据库：`mysql start`
2. 登录mysql命令行: `mysql -uroot -p`
3. 创建数据库nodejs: `CREATE DATABASE nodejs`
4. 查看数据库情况: `SHOW DATABASE`
5. 定义登录角色与密码:

``` sql
CRANT ALL ON nodejs.* to nodejs@'%' IDENTIFIED BY 'nodejs'

GRANT ALL ON nodejs.* to nodejs@localhost IDENTIFIED BY 'nodejs'
```

6. 重新登录MySQL: `mysql -unodejs -p`
7. 使用nodejs库：`USE nodejs`
8. 新创建一个user表:

``` sql
CREATE TABLE t_user(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(16) NOT NULL,
create_date TIMESTAMP NULL DEFAULT now()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE UNIQUE INDEX t_quiz_IDX_0 on t_user(name);
```

9. 查看user表:`SHOW TABLES`

**3. 安装mysql包**

1. 本地新建package文件: `npm init -y`
2. 下载mysql包: `npm install --save mysql`

**4. 编写连接测试文件**

1. 新建app.js: `touch app.js`
2. 书写连接代码:

```js
'use strict';
const mysql = require('mysql');
const async = require('async');
//连接musql数据库
const conn = mysql.createConnection({
  host: 'localhost', //hostname
  user: 'nodejs', //username
  password: 'nodejs', //pwd
  database: 'nodejs', //database name
  port: 3306
});
conn.connect();
//增删改查
const sqls = {
  'insertSQL': 'insert into t_user(name) values("conan"),("fens.me")',
  'selectSQL': 'select * from t_user limit 10',
  'deleteSQL': 'delete from t_user',
  'updateSQL': 'update t_user set name="conan update" where name="conan"'
}
const tasks = ['deleteSQL', 'insertSQL', 'selectSQL', 'updateSQL', 'selectSQL'];
async.eachSeries(tasks, (item, callback) => {
  console.log(item + '==>' + sqls[item]);
  conn.query(sqls[item], (err, res) => {
    console.log(res);
    callback(err, res);
  });
}, function(err) {
  console.log("err:" + err);
});
```

**5. 运行app.js**

`node app.js`查看结果，由此，我们发现nodejs已经连接上了MySQL数据
