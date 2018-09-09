# 如何在浏览器实现高斯模糊

::: tip 总结
高斯模糊效果我主要还是应用在移动端，所以只使用了css3的写法就基本可以实现毛玻璃的模糊效果，满足需求。
:::

## css实现高斯模糊

### css3 blur滤镜实现

css代码如下：

``` css
.blur{
-webkit-filter: blur(4px); /* Chrome, Opera */
-moz-filter: blur(4px);
-ms-filter: blur(4px);
filter: blur(4px);
}
```

但是仅这样做，在浏览器显示会出现白边的问题，如下图：

 ![blur1](http://7xrkii.com1.z0.glb.clouddn.com/blur1.png)

 所以需要在此基础上添加没有blur样式图片盖掉白边：

``` html
<img src="blur1"/>
<img src="blur1" class="blur"/>
```

这样显示就正常了：

 ![blur2](http://7xrkii.com1.z0.glb.clouddn.com/blur2.png)

 如果需要在PC端实现高斯模糊效果，则需要兼容IE及Firefox等浏览器，则只需添加IE filter滤镜和svg文件就好了：

``` css
.blur{
filter: url(blur.svg#blur);  /* FireFox, Chrome, Opera */
-webkit-filter: blur(10px); /* Chrome, Opera */
-moz-filter: blur(10px);
-ms-filter: blur(10px);
filter: blur(10px);
filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=10, MakeShadow=false); /* IE6~IE9 */
}
```

至此利用css实现了兼容性较好的高斯模糊效果。

::: warning 注意：
**android下UC浏览器不支持css3属性filter**
:::

## canvas实现高斯模糊

### 利用StackBlur.js库实现

该js库的demo地址：[StackBlurForCanvas](http://www.quasimondo.com/StackBlurForCanvas/StackBlurDemo.html)

该方法可以实现图片的高斯模糊效果，不依赖其他任何JS框架，一般用法如下：

``` css
stackBlurImage( sourceImageID, targetCanvasID, radius, blurAlphaChannel );
```

其中：

* sourceImageID表示要模糊的图片的id, 默认这个图片要隐藏；
* targetCanvasID表示要显示模糊图片的canvas元素的id;
* radius表示模糊的半径大小。不过，根据我的对比测试，radius好像与CSS中filter滤镜的模糊值不是1:1匹配的，反倒是有些类似2:1. 也就是这里的20px的半径模糊近似于CSS中blur滤镜值设置为10px;
* blurAlphaChannel为布尔属性，表示aplha透明通道是否要模糊，true表示要模糊。

CSS代码：

``` css
.blur {
    filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=10, MakeShadow=false); /* IE6~IE9 */
}
:root .blur {
    display: none; /* IE9+, Firefox, Chrome, Opera - hidden */
    filter: none; /* no IE9 */
}
```

HTML代码：

``` html
<img src="blur1.jpg" />
<img src="blur1.jpg" id="blur" class="blur" />
<canvas id="canvas" width="463" height="291"></canvas>
```

JS代码：

``` js
stackBlurImage( "blur", "canvas", 20, false );
```

以上在pc浏览器也实现了兼容性较好的高斯模糊效果。
