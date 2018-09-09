# H5开发遇到的一些坑

2014年毕业进携程工作后，一开始主要做PC端的前端工作，主要的坑都是IE以及火狐的，而2015年下半年开始负责移动前端工作后，发现出来的坑就层出不穷了。我就列一下这大半年做H5开发遇到的一些坑及对应的解决方案；至于过程就不细说了，主要是通过stackoverflow,知乎，segmentfault,quora,论坛，博客等地方查询到的解决方案。之后如有新的坑会继续追加进来。

<!-- more -->

## 安卓UC浏览器字体放大

**Q:** 安卓的UC浏览器会默认开启字体放大功能，具体来说就是当UC浏览器识别到你某个标签里面的文字过多的时候，它就会默认将它放大显示，这样就会带来一个问题就是你写的样式错乱了，显示不正常。

**S:** 在HTML中添加关闭这个功能的meta标签:

```html
<meta name="wap-font-scale" content="no">
```

## input有颜色线框

**Q:** 在Android机型中显示input框的时候，点击选择会有蓝色线框出现。

**S:** 设置css样式进行重置

```css
-webkit-tap-highlight-color:rgba(0,0,0,0);
```

## 页面高度渲染错误

**Q:** 这种情况最普遍的是做活动页面，需要微信微博分享的那种，因为在这些应用中都有各种导航条，占有一定的高度位置。导致你css设置的高度100%跟模拟器里面的不一致。

**S:** 所以我们需要重置修正它，通过javascript代码重置掉：

```js
document.documentElement.style.height = window.innerHeight + 'px';
```

## UC下flex布局行内元素不占位

**Q:** UC浏览器在利用flex布局亦或者横向占位的时候，如果你不显示设置display:block;以及宽度等属性时候，会与chrome等其它webkit浏览器显示效果不一致。

**S:** 如果使用行内标签那就块级话，宽度也显示写出来就可以解决了。

## flex布局内容不一致无法均分

**Q:** 在Android机浏览器下使用flex布局，flex item 等分布局的时候，某一列的数据内容过多的时候，会把它的宽度撑宽，无法做到等分布局。

**S:** 在flex item 代码中加一个width:1%，保证剩余空间相同.

```css
.flex-1{
-webkit-box-flex:1;
-webkit-flex:1;
-ms-flex:1;
flex:1;
width:1%;
}
```

## safari浏览器下input[type="password"]无法输入

**Q:** 在hybrid开发webview中，ios系统下input[password]输入框无法输入（但是键盘可以弹起,输入框无法聚焦）

**S:** 是css全局设定-webkit-user-select:none导致。所以在input和textarea标签重新设置该属性即可：

```css
input,textarea {
    -webkit-user-select: auto !important;
}
```

## safari浏览器开启无痕模式localstorage无法写入

**Q:** ios上safari开启隐身模式时，localStorage无法写入新的内容，并且会抛出异常导致js无法正常执行，最终页面无法正常加载.

**S:** 使用try catch捕获异常，并给出提示，指出问题

```js
if(window.localStorage){
    try{
        window.localStorage.setItem(username, username);
     }catch(e) {
        alert("您处于无痕浏览，无法为您保存");
      }
 }
```

## 微信、QQ浏览器下url会被拦截跳转

**Q:** 腾讯使用X5内核的产品（微信，QQ及QQ浏览器），H5页面url跳转，会被阻拦，无法正常跳转。

**S:** 在url后添加时间戳保证每次url都是不一样的，可以解决该问题。

```js
var timeparam = +new Date();
window.location.href = 'http://www.ctrip.com/?time='+timeparam
```
