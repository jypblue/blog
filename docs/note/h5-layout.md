# 移动布局知识要点

## meta基础知识

H5页面窗口自动调整到设备宽度，并禁止用户缩放页面

``` html
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
```

删除苹果默认的工具栏和菜单栏

``` html
<meta name="apple-mobile-web-app-capable" content="yes" />
```

设置苹果工具栏颜色

``` html
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
```

忽略页面中的数字识别为电话，忽略email识别

```
<meta name="format-detection" content="telphone=no, email=no" />
```
##### 启用360浏览器的极速模式(webkit)

```
<meta name="renderer" content="webkit">
```
##### 避免IE使用兼容模式

```
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```
##### 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓

```
<meta name="HandheldFriendly" content="true">
```
##### 微软的老式浏览器

```
<meta name="MobileOptimized" content="320">
```
##### uc强制竖屏

```
<meta name="screen-orientation" content="portrait">
```
##### QQ强制竖屏

```
<meta name="x5-orientation" content="portrait">
```
##### UC强制全屏

```
<meta name="full-screen" content="yes">
```
##### QQ强制全屏

```
<meta name="x5-fullscreen" content="true">
```
##### UC应用模式

```
<meta name="browsermode" content="application">
```
##### UC关闭文字放大
```
<meta name="wap-font-scale" content="no">
```
##### QQ应用模式

```
<meta name="x5-page-mode" content="app">
```
##### windows phone 点击无高光

```
<meta name="msapplication-tap-highlight" content="no">
```

### 2.屏幕旋转样式及事件
#### 样式
这是匹配横屏的状态，横屏时的css代码:

```
@media screen and (orientation:landscape){
	.css{}
}
```

这是匹配竖屏的状态，竖屏时的css代码:

```
@media screen and (orientation:portrait){
	.css{}
}
```

#### 事件
##### window.orientation，取值：正负90表示横屏模式、0和180表现为竖屏模式；

```
window.onorientationchange = function(){
    switch(window.orientation){
        case -90:
        case 90:
        alert("横屏:" + window.orientation);
        case 0:
        case 180:
        alert("竖屏:" + window.orientation);
        break;
    }
}
```

### 3.总体布局方案
### px+百分比
这种布局方案之前比较多，设计稿设计的时候选择一个比较折中的尺寸，例如iPhone6，字体大小比iPhone5大一点，比iPhone6小一点，字体用px写死，宽度按百分比缩放，高度写死。这样的话就是大部分机型都可以看，但是问题是如果大屏手机看就会偏小，怎么解决了？就是再利用css属性

```
@media screen and (min-width:w) and (max-width:w)
```

再来给某些类做单独的适配。

### 淘宝方案：rem+media screen + viewport缩放js

##### viewport缩放js

```
var dpr,rem,scale;
var docEl = document.documentElement;
var fontEl = document.createElement('style');
var metaEl = document.querySelector('meta[name="viewport"]');
var uA = window.navigator.userAgent;
dpr = window.devicePixelRatio || 1;
scale = 1 / dpr;
//最大宽度是540px,
rem = (docEl.clientWidth > 540 ? 540 : docEl.clientWidth) * dpr * 0.625 / 10;
//设置viewport, 进行缩放，达到高清效果
metaEl.setAttribute('content','width=' + dpr*docEl.clientWidth + ',initial-scale=' + scale +',minimum-scale='+
scale + ',maximum-scale=' + scale + ',user-scalable=no');
//设置data-dpr属性，留作的css hack 之用
docEl.setAttribute('data-dpr',dpr);
docEl.setAttribute('style','font-size:'+rem+'px;');
//动态写入样式
docEl.firstElementChild.appendChild(fontEl);
//fontEl.innerHTML = 'html{font-size:'+rem+'px!important;}';
window.rem2px = function(v) {
v = parseFloat(v);
return v * rem;
}
window.px2rem = function(v) {
v = parseFloat(v);
return v / rem;
}
window.dpr = dpr;
window.rem = rem;
```

设置了rem以及viewport的缩放比例后，通过sass脚本编写适配dpr为1倍，2倍，3倍的css样式，布局用rem布局，字体用px，而不同宽度字体大小也是通过

```
@media screen and (min-width:480px) and (max-width:639px) {
    html {
        font-size: 15px
    }
}
@media screen and (min-width:640px) and (max-width:719px) {
    html {
        font-size: 20px
    }
}
@media screen and (min-width:720px) and (max-width:749px) {
    html {
        font-size: 22.5px
    }
}
@media screen and (min-width:750px) and (max-width:799px) {
    html {
        font-size: 23.5px
    }
}
@media screen and (min-width:800px) and (max-width:959px) {
    html {
        font-size: 25px
    }
}
@media screen and (min-width:960px) and (max-width:1079px) {
    html {
        font-size: 30px
    }
}
@media screen and (min-width:1080px) {
    html {
        font-size: 32px
    }
}
```

来实现适配;

### rem+js动态控制基准值
这种方式是在html加载样式之前，给html标签设置rem的基准值，通过不同宽度设置不同的基准值再用rem布局做到等比缩放布局的，一般以320px的宽度为最小宽度设置，至于这个基准值放大比例，可以按自己的需求来定。所有布局都用rem来布局，对于没有非矢量字体，以及对字体大小精细度要求没那么严格的项目来讲十分合适。相较前面而言简单很多。css适配代码也少写很多。
js脚本如下：

```
(function (root) {
	var docEl = document.documentElement,
	timer = null,
	width,last;
	function changeRem() {
		width = docEl.getBoundingClientRect().width;
		if(last === width) {return;}
		last = width;
		root.rem = width/20;
		docEl.style.fontSize = root.rem + 'px';
	}
	changeRem();
	root.addEventListener('resize',function() {
		clearTimeout(timer);
		timer = setTimeout(changeRem,200);
	});
	root.addEventListener('orientationchange',function() {
	clearTimeout(timer);
	timer = setTimeout(changeRem,200);
	});
})(window,undefined);
```


### 4.flex布局
##### flex布局目前可使用在移动中，并非所有的语法都全兼容

```
/* ============================================================
   flex：定义布局为盒模型
   flex-v：盒模型垂直布局
   flex-1：子元素占据剩余的空间
   flex-align-center：子元素垂直居中
   flex-pack-center：子元素水平居中
   flex-pack-justify：子元素两端对齐
   兼容性：ios 4+、android 2.3+、winphone8+
   ============================================================ */
.flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}
.flex-v{-webkit-box-orient:vertical;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}
.flex-1{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;}
.flex-align-center{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;}
.flex-pack-center{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}
.flex-pack-justify{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}
```

### 5.常见问题
##### 移动端touch事件(区分webkit 和 winphone)
当用户手指放在移动设备在屏幕上滑动会触发的touch事件

以下支持webkit

touchstart——当手指触碰屏幕时候发生。不管当前有多少只手指

touchmove——当手指在屏幕上滑动时连续触发。通常我们再滑屏页面，会调用event的preventDefault()可以阻止默认情况的发生：阻止页面滚动

touchend——当手指离开屏幕时触发

touchcancel——系统停止跟踪触摸时候会触发。例如在触摸过程中突然页面alert()一个提示框，此时会触发该事件，这个事件比较少用

以下支持winphone 8

MSPointerDown——当手指触碰屏幕时候发生。不管当前有多少只手指

MSPointerMove——当手指在屏幕上滑动时连续触发。通常我们再滑屏页面，会调用css的html{-ms-touch-action: none;}可以阻止默认情况的发生：阻止页面滚动

MSPointerUp——当手指离开屏幕时触发

##### 移动端click屏幕产生200-300 ms的延迟响应
移动设备上的web网页是有300ms延迟的，玩玩会造成按钮点击延迟甚至是点击失效。

以下是历史原因，来源其他人的分享：

2007年苹果发布首款iphone上IOS系统搭载的safari为了将适用于PC端上大屏幕的网页能比较好的展示在手机端上，使用了双击缩放(double tap to zoom)的方案，比如你在手机上用浏览器打开一个PC上的网页，你可能在看到页面内容虽然可以撑满整个屏幕，但是字体、图片都很小看不清，此时可以快速双击屏幕上的某一部分，你就能看清该部分放大后的内容，再次双击后能回到原始状态。

双击缩放是指用手指在屏幕上快速点击两次，iOS 自带的 Safari 浏览器会将网页缩放至原始比例。

原因就出在浏览器需要如何判断快速点击上，当用户在屏幕上单击某一个元素时候，例如跳转链接<a href="#"></a>，此处浏览器会先捕获该次单击，但浏览器不能决定用户是单纯要点击链接还是要双击该部分区域进行缩放操作，所以，捕获第一次单击后，浏览器会先Hold一段时间t，如果在t时间区间里用户未进行下一次点击，则浏览器会做单击跳转链接的处理，如果t时间里用户进行了第二次单击操作，则浏览器会禁止跳转，转而进行对该部分区域页面的缩放操作。那么这个时间区间t有多少呢？在IOS safari下，大概为300毫秒。这就是延迟的由来。造成的后果用户纯粹单击页面，页面需要过一段时间才响应，给用户慢体验感觉，对于web开发者来说是，页面js捕获click事件的回调函数处理，需要300ms后才生效，也就间接导致影响其他业务逻辑的处理。

解决方案：

fastclick可以解决在手机上点击事件的300ms延迟
zepto的touch模块，tap事件也是为了解决在click的延迟问题

##### 触摸事件的响应顺序
1、ontouchstart
2、ontouchmove
3、ontouchend
4、onclick

解决300ms延迟的问题，也可以通过绑定ontouchstart事件，加快对事件的响应


##### 什么是Retina 显示屏，带来了什么问题
retina：一种具备超高像素密度的液晶屏，同样大小的屏幕上显示的像素点由1个变为多个，如在同样带下的屏幕上，苹果设备的retina显示屏中，像素点1个变为4个

在高清显示屏中的位图被放大，图片会变得模糊，因此移动端的视觉稿通常会设计为传统PC的2倍

那么，前端的应对方案是：

设计稿切出来的图片长宽保证为偶数，并使用backgroud-size把图片缩小为原来的1/2

//例如图片宽高为：200px*200px，那么写法如下

```
.css{width:100px;height:100px;background-size:100px 100px;}
```

其它元素的取值为原来的1/2，例如视觉稿40px的字体，使用样式的写法为20px

```
.css{font-size:20px}
```


##### Retina屏实现真·1像素的的方法：
###### 参考《Retina屏实现1像素》

##### ios系统中元素被触摸时产生的半透明灰色遮罩怎么去掉
ios用户点击一个链接，会出现一个半透明灰色遮罩, 如果想要禁用，可设置-webkit-tap-highlight-color的alpha值为0，也就是属性值的最后一位设置为0就可以去除半透明灰色遮罩

```
a,button,input,textarea{-webkit-tap-highlight-color: rgba(0,0,0,0;)}
```

部分android系统中元素被点击时产生的边框怎么去掉
android用户点击一个链接，会出现一个边框或者半透明灰色遮罩, 不同生产商定义出来额效果不一样，可设置-webkit-tap-highlight-color的alpha值为0去除部分机器自带的效果

```
a,button,input,textarea{
-webkit-tap-highlight-color: rgba(0,0,0,0;)
-webkit-user-modify:read-write-plaintext-only;
}
```
-webkit-user-modify有个副作用，就是输入法不再能够输入多个字符

另外，有些机型去除不了，如小米2

对于按钮类还有个办法，不使用a或者input标签，直接用div标签



##### winphone系统a、input标签被点击时产生的半透明灰色背景怎么去掉

```
<meta name="msapplication-tap-highlight" content="no">
```

##### webkit表单元素的默认外观怎么重置

```
.css{-webkit-appearance:none;}
```

##### webkit表单输入框placeholder的颜色值能改变么

```
input::-webkit-input-placeholder{color:#AAAAAA;}
input:focus::-webkit-input-placeholder{color:#EEEEEE;}
```

##### webkit表单输入框placeholder的文字能换行么
ios可以，android不行~

##### IE10（winphone8）表单元素默认外观如何重置
禁用 select 默认下拉箭头

::-ms-expand 适用于表单选择控件下拉箭头的修改，有多个属性值，设置它隐藏 (display:none) 并使用背景图片来修饰可得到我们想要的效果。

```
select::-ms-expand {
display: none;
}
```
禁用 radio 和 checkbox 默认样式

::-ms-check 适用于表单复选框或单选按钮默认图标的修改，同样有多个属性值，设置它隐藏 (display:none) 并使用背景图片来修饰可得到我们想要的效果。

```
input[type=radio]::-ms-check,input[type=checkbox]::-ms-check{
display: none;
}
```
禁用PC端表单输入框默认清除按钮

当表单文本输入框输入内容后会显示文本清除按钮，::-ms-clear 适用于该清除按钮的修改，同样设置使它隐藏 (display:none) 并使用背景图片来修饰可得到我们想要的效果。

```
input[type=text]::-ms-clear,input[type=tel]::-ms-clear,input[type=number]::-ms-clear{
display: none;
}
```

##### 禁止ios长按时不触发系统的菜单，禁止ios&android长按时下载图片

```
.css{-webkit-touch-callout: none}
```

##### 禁止ios和android用户选中文字

```
.css{-webkit-user-select:none}
```

##### 打电话发短信的怎么实现
打电话

```
<a href="tel:0755-10086">打电话给:0755-10086</a>
```

发短信，winphone系统无效

```
<a href="sms:10086">发短信给: 10086</a>
```

##### audio元素和video元素在ios和andriod中无法自动播放
应对方案：触屏即播

```
$('html').one('touchstart',function(){
    audio.play()
})
```

##### 摇一摇功能
HTML5 deviceMotion：封装了运动传感器数据的事件，可以获取手机运动状态下的运动加速度等数据。


##### 微信浏览器用户调整字体大小后页面矬了，怎么阻止用户调整
原因

android侧是复写了layoutinflater 对textview做了统一处理
ios侧是修改了body.style.webkitTextSizeAdjust值
普通解决方案：

android暂无方案
ios使用-webkit-text-size-adjust禁止调整字体大小

```
body{-webkit-text-size-adjust: 100%!important;}
```

最好的解决方案：

整个页面用rem或者百分比布局

##### 消除transition闪屏
网络都是这么写的，但我并没有测试出来

```
.css{
//设置内嵌的元素在 3D 空间如何呈现：保留 3D
-webkit-transform-style: preserve-3d;
//（设置进行转换的元素的背面在面对用户时是否可见：隐藏）
-webkit-backface-visibility: hidden;
}
```
开启硬件加速
解决页面闪白
保证动画流畅

```
.css {
   -webkit-transform: translate3d(0, 0, 0);
   -moz-transform: translate3d(0, 0, 0);
   -ms-transform: translate3d(0, 0, 0);
   transform: translate3d(0, 0, 0);
}
```


##### 取消input在ios下，输入的时候英文首字母的默认大写
```
<input autocapitalize="off" autocorrect="off" />
```

##### android 上去掉语音输入按钮
```
input::-webkit-input-speech-button {display: none}
```

##### android 2.3 bug
@-webkit-keyframes 需要以0%开始100%结束，0%的百分号不能去掉
after和before伪类无法使用动画
border-radius不支持%单位
translate百分比的写法和scale在一起会导致失效，例如-webkit-transform: translate(-50%,-50%) scale(-0.5, 1)

##### android 4.x bug
三星 Galaxy S4中自带浏览器不支持border-radius缩写
同时设置border-radius和背景色的时候，背景色会溢出到圆角以外部分
部分手机(如三星)，a链接支持鼠标:visited事件，也就是说链接访问后文字变为紫色


设计高性能CSS3动画的几个要素
尽可能地使用合成属性transform和opacity来设计CSS3动画，不使用position的left和top来定位
利用translate3D开启GPU加速


##### fixed bug
ios下fixed元素容易定位出错，软键盘弹出时，影响fixed元素定位
android下fixed表现要比iOS更好，软键盘弹出时，不会影响fixed元素定位
ios4下不支持position:fixed
解决方案

可用isroll.js，暂无完美方案

##### iOS localstorage本地存储大小不能超过5MB


### 6.常用的移动端框架
##### zepto.js
语法与jquery几乎一样，会jquery基本会zepto~

最新版本已经更新到1.16

官网：<http://zeptojs.com/>

中文(非官网)：<http://www.css88.com/doc/zeptojs_api/>

##### 常使用的扩展模块：

浏览器检测：<https://github.com/madrobby/zepto/blob/master/src/detect.js>

tap事件：<https://github.com/madrobby/zepto/blob/master/src/touch.js>

##### iscroll.js
解决页面不支持弹性滚动，不支持fixed引起的问题~

实现下拉刷新，滑屏，缩放等功能~

最新版本已经更新到5.0

官网：<http://cubiq.org/iscroll-5>

##### underscore.js
笔者没用过，不过听说好用，推荐给大家~

该库提供了一整套函数式编程的实用功能，但是没有扩展任何JavaScript内置对象。

最新版本已经更新到1.8.2

官网：<http://underscorejs.org/>

##### 滑屏框架
适合上下滑屏、左右滑屏等滑屏切换页面的效果

slip.js

iSlider.js

fullpage.js































