---
title: Retina屏实现1像素
date: 2015-12-18 11:05:46
tags:
- css
categories: css

---
# Retina屏实现1像素

::: tip
实际运用中，我会用box-shadow实现矩形四边线框一像素，而用transform搭配before、after伪类的形式实现单独一边的一像素。目前来看，可以适用绝大部分业务场景。
:::

## transform:scale(0.5)

实现方式：

```css
height:1px;
-webkit-transform: scaleY(0.5);
-webkit-transform-origin:0 0;
overflow: hidden;
```

此方案配合:after和:before独立使用较多，比如画一个商品的边框四条线，容器的after和before可以画2条线，利用容器的父元素的after、before再画2条线。

```css
.after-scale{
  position: relative;
}
.after-scale:after{
  content:"";
  position: absolute;
  bottom:0px;
  left:0px;
  right:0px;
  border-bottom:1px solid #c8c7cc;
  -webkit-transform:scaleY(.5);
  -webkit-transform-origin:0 0;
}
```

四边1像素border

```css
.scale{
  position:relative;
}
.scale:before{
  content:"";
  position:absolute;
  top:0;
  left:0;
  width:200%;
  height:200%;
  border:1px solid #dadada;
  box-sizing:border-box;
  transform: scale(0.5);
    -webkit-transform: scale(0.5);
    transform-origin: 0 0;
    -webkit-transform-origin: 0 0;
}
```

## box-shadow

实现方式：

利用css 对阴影处理的方式实现0.5px的效果

1. 底部一条线

```css
-webkit-box-shadow:0 1px 1px -1px rgba(0, 0, 0, 0.5);
```

2. 顶部一条线

```css
box-shadow: 0 -1px 1px -1px rgba(0, 0, 0, 0.5);
```

基本所有场景都能满足，包含圆角的button，单条，多条线;但是颜色不好处理，黑色rgba(0,0,0,1)最浓的情况了。有的浏览器会有阴影出现，不好用。

## background-image

实现方式：

设置1px通过css 实现的image，50%有颜色，50%透明

```css
.border {
  background-image:linear-gradient(180deg, red, red 50%, transparent 50%),
  linear-gradient(270deg, red, red 50%, transparent 50%),
  linear-gradient(0deg, red, red 50%, transparent 50%),
  linear-gradient(90deg, red, red 50%, transparent 50%);
  background-size: 100% 1px,1px 100% ,100% 1px, 1px 100%;
  background-repeat: no-repeat;
  background-position: top, right top,  bottom, left top;
  padding: 10px;
  }
```

配合background-image,background-size,background-position可以实现单条、多条边框，边框的颜色随意设置;但如果有圆角的效果，很sorry圆角的地方没有线框的颜色，且要写的代码也不少。

## 图片

实现方式：

```css
.border-image{
  border-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAECAYAAABP2FU6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB5JREFUeNpiPnH8zH/G////MzAxAAHTyRNn/wMEGABpvQm9g9TJ1QAAAABJRU5ErkJggg==") 2 0 stretch;
  border-width: 0px 0px 1px;
}
```

可以通过修改图片来达到圆角的效果，但是由于图片的原因，压缩过后的图片边缘变模糊了（不放大的情况下不明显），需要引用图片或者base64，边框颜色修改起来不方便。

参考：<http://stackoverflow.com/questions/8640521/can-you-have-a-0-5px-border-on-a-retina-display/25910251#25910251>
