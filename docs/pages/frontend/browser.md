#  html

## 1-1 src 和 href 的区别

前者是将资源拼接到当前的标签位置，会暂停其他资源的下载

后者是建立与URL之间的链接通道，并行下载，不会停止对当前文档的处理

src常用于img等下载，href常用于link a 标签

## 1-2 html语义化

使文档结构显示的更加清晰，便于开发维护

便于盲人阅读器等设备进行处理

便于网页seo

常见标签， footer section article aside main header

##  1-3 html5更新

 语义化标签

媒体标签 audio video

dom操作 document.querySelecter document.queryallselecter

web存储 localstroge sessionstroge

## 1-4 行内元素 块级元素 空元素

行内元素：a，span，input，img，select，

块级元素：div，ul，li，ol，h， p

空元素：br，hr，link，meta

## 1-5 defer 和 async 的区别

无defer，async，浏览器立刻加载并执行js脚本

共同点：两者都是异步加载js文件

defer：在文档加载完后执行，在domcontentload前

async：文档加载与执行和js加载与执行是并行执行的

## 1-6 浏览器渲染

### 渲染流程

![image-20220809223355017](./../../.vuepress/public/img/image-20220809223355017.png)

> Html解析，解析DOM树

将原始字符转换成对应的节点对象，后将节点对象构建成树状结构

> CSS解析，生成CSSOM树

> Render Tree]

将DOM树和CSSOM树结合形成渲染树

> layout 

根据已知的节点和样式，计算节点在浏览器中的大小和位置

从渲染树根节点开始遍历，用盒子模型表示各节点之间的距离，确定其位置和大小

> Paint

将渲染树绘制

### load和DomContentload事件

load：在所有资源加载完成后触发

domcontentload：在html被**解析完成**后触发

### js和css对渲染的影响

js会阻碍DOM树生成，阻碍图片，js，css等资源的加载

css会阻塞CSSOM生成，阻碍页面渲染，阻碍js**执行**

## 2-1 DOCTYPE的作用

告诉浏览器用怎样的方式解析文档

标准模式：浏览器以支持的最高标准呈现页面

怪异模式：页面以向后兼容的方式呈现页面

## 2-2 常见的meta标签

由name和content属性定义

keyword页面关键词，页面描述description，charset编码类型

refresh页面重定向和刷新，viewport移动端适配

## 2-3 web-worker

运行在后台的js，独立与其他脚本，不影响页面的性能

使用方法

````js
//主线程
let worker = new worker('work.js')
//向worker发送信息
worker.onMessage('msg')
//关闭
worker.terminate()
//处理err事件
worker.onerror(function(event){
})
````
```js
//work.js 
//监听数据传输
onmessage = function(e){
	const res = e
	//postMessage前是需要通讯的window对象，接收参数第一个时传输的数据，第二个是目标窗口的源，设置为*则可以传给任意窗口
	postMessage('okk')
}
```

## 2-4 head标签的作用

描述了文档的各种属性和信息

引用样式表，脚本等，**title**为文章标题，唯一的必须元素

link，meta，script，style

## 2-5 Canvas和svg的区别

svg属于xml描述的2d图形语言

- 不依赖分辨率

- 适合有大量渲染区域的应用程序（谷歌地图）

- 复杂度高会减慢渲染速度

```html
<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
	<rect width="30" height="40" x="20" y="20"
    style="fill:rgb(0,0,255); stroke-width:1; stroke:rgb(0,0,0)" />
</svg>
```
canvas画布，逐像素渲染
- 依赖分辨率
- 适合图像密集型的游戏
- 可以以jpg，png格式保存对象
```html
<canvas id="tutorial" width="300" height="300"></canvas>
```
```js
function draw(){
    var canvas = document.getElementById('tutorial');
    if(!canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgb(200,0,0)";
      //绘制矩形
    ctx.fillRect (10, 10, 55, 50);
 
    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect (30, 30, 55, 50);
```

## 2-6 title h1 b strong i em 区别

语义不同，表现效果一致

## 3-1 渐进增强和优雅降级

渐进增强：

针对低版本浏览器进行页面重构，在保证基本功能的情况下，对高级浏览器追加效果

优雅降级：

直接构建完整的功能，在对低版本浏览器进行兼容

## 3-2 doctype和!doctype html 有何作用，严格混杂模式的区别

文档声明是告诉浏览器，当前html使用的版本，便于正确解析

严格模式，浏览器按照w3c标准解析文档

混杂模式：浏览器以向后兼容的方式解析文档

## 3-3 label 作用 如何使用

定义表单控件的关系，选择label标签时会自动定位到绑定的表单控件上

```html
<label for="mobile">Number:</label>
<input type="text" id="mobile"/>
<label>Date:<input type="text"/></label>
```

## 3-4 img srcest属性的作用

响应式页面根据屏幕密度的不同。设置不同的图片

```html
<img src="image-128.png"
     srcset="image-128.png 128w, image-256.png 256w, image-512.png 512w"
     sizes="(max-width: 360px) 340px, 128px" />
```

## 3-5 html 离线存储怎么用

在没有联网时，可以正常访问站点

基于一个新建的.appcache文件的缓存技术，将离线存储资源存储下来

使用方法：

```html
//创建一个和html同名的manifest文件，在页面头部加入manifest属性
<html lang="en" manifest="index.manifest">
//在index.manifest文件中编写需要理想存储的资源
CACHE MANIFEST
    #v0.11
    CACHE:
    js/app.js
    css/style.css
    NETWORK:
    resourse/logo.png
    FALLBACK:
    / /offline.html
```

更新缓存的方法：

更新manifest文件，通过js操作，清除浏览器缓存

离线存储的管理逻辑：

联网时，发现manifest属性，请求manifest文件，将文件内对应的资源进行存储。

若已经存储，则将新旧manifest文件对比，更新缓存

离线时：直接使用缓存中的资源