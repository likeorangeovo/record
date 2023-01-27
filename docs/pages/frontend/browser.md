# HTML总结

## H5语义化

用正确的标签做正确的事

常见语义化标签：

header，footer，aside，nav，main，section，article

优点：利于搜索引擎优化（SEO），代码结构清晰，利于开发维护，方便屏幕阅读器等设备解析

## H5新特性

- 音视频处理API(audio,video)

  src:地址；autoplay：自动播放；controls:显示控制条；loop:循环；muted：静音

```js
  <video src="" controls>XXXXX</video>
```

```javascript
  <audio src="" preload="auto" controls></audio>
```

- canvas / webGL

- 拖拽释放(Drag and drop) API

- history API

- 地理位置(Geolocation)API

- webSocket

- web存储 localStorage没有时间限制、SessionStorage针对 session 的数据存储

- 表单控件，calendar、date、time、email、url、search
- dom查询

```js
document.querySelector()
document.querySelectorAll()
```

- 

## DOCTYPE使用

标记语言的文档类型声明，浏览器应该以该文档类型解析文档 
浏览器渲染模式：

1. CSS1Compat：标准模式，以其支持的最高标准呈现页面
2. BackCompat：怪异模式，以向后兼容模式显示页面

## script中defer,async 的区别

无defer，async，浏览器立刻加载并执行js脚本
async：（文档加载与执行）与（js脚本加载与执行）并行进行 （**DomContentLoaded 事件只关注 HTML 是否被解析完，而不关注 async 脚本**）
defer：（文档加载与js加载）并行执行，js脚本在文档解析完成后执行（**在DOMContentloaded事件触发执行前**）

## 浏览器渲染过程

> HTml解析，生成DOM树

1. 字符编码：将原始字节转换成编码字符
2. 令牌化：根据html规范转换成令牌（例：body标签及标签中的字符串与属性）
3. 生成节点对象：令牌转换成其定义的节点对象
4. 构建DOM树：将节点对象构建成树状结构（DOM树）

> CSS解析，构建CSSOM树

1. 根据CSS关系，构建CSSOM树

> Render Tree

1. 将DOM树，CSSOM树结合构建渲染树

> Layout

1. 已知节点的内容与样式，计算节点在浏览器窗口的大小与位置
2. 从渲染树根节点遍历，用盒子模型表示各节点间的距离，以确定其位置与大小

> Paint

1. 浏览器发出Paint事件，将渲染树绘制成像素

> load与DomContentLoaded事件

1. load：在HTML所有相关资源被**加载完成**后触发
2. DomContentLoaded：在HTML文档被**解析完成**之后触发(DOM树构建末尾)

## js,css对浏览器渲染的影响

1. js会阻塞DOM解析，（图片，js，css）资源的加载；（阻塞DOM树生成）
2. css不会阻塞DOM解析及资源加载，会阻塞js的**执行**（阻塞CSSOM生成，页面渲染）
3. 现代浏览器会进行prefetch优化，提前下载html文档中引用的资源

![image-20220809223355017](./../../.vuepress/public/img/image-20220809223355017.png)

> 优化渲染流程（减少白屏时间）

1. 使用内联CSS JS，减少外链的下载
2. 使用async，defer
3. 使用CDN

> script,link,src,href

1. `<link href>`用于链接外部`css`样式表等其他相关外部资源`<script src>`标签用于引入js文件
2. href：HyperText Reference，在元素和引用资源间建立联系，并⾏下载资源，加载时不会停止对当前文档的处理（`a`，`link`）
3. src：source，指向外部资源的位置，资源会迁入到当前标签所在位置，会暂停其他资源的下载和处理，直到该资源加载、编译、执⾏完毕（`script`、`img`、`iframe`）
4. 补充：link和@import的区别，link是XHTML标签，除了加载CSS外，还可以定义RSS等其他事务；@import属于CSS范畴，只能加载CSS。
5. 1.url
   url（统一资源定位符）：是对可以从互联网上得到的资源的位置和访问方法的一种简洁的表示，是互联网上标准资源的地址。
   2.href
   href：Hypertext Reference的缩写。
   意思是超文本引用。
   3.rel
   rel：relationship的英文缩写·
   REL属性用于定义链接的文件和HTML文档之间的关系。
   4.src
   src可以是源文件（source）的简写，一般用作目录名称用于存放源代码。
   一般指的是引用外部文件的路径，像img标签中src表示图片或者js文件的路径。

## meta标签

由name,content 定义，用来描述文档属性

1.	charset(编码类型)
2.	keywords(关键词)
3.	description(页面描述)
4.	refresh(页面刷新、重定向)
5.	viewport(控制窗口的大小和比例)

## img 的srcset属性

根据屏幕密度的不同设置不同的图片

```html
<img src="image-128.png"
     srcset="image-128.png 128w, image-256.png 256w, image-512.png 512w"
     sizes="(max-width: 360px) 340px, 128px" />
```

## 块级元素，行内元素，void元素

- 行内元素有：a b span img input select strong；
- 块级元素有：div ul ol li dl dt dd h1 h2 h3 h4 h5 h6 p；
- `<br>、<hr>、<img>、<input>、<link>、<meta>`

## web worker

web worker 是运行在后台的 js，独立于其他脚本，不会影响页面的性能。 并且通过 postMessage 将结果回传到主线程。这样在进行复杂操作的时候，就不会阻塞主线程了。

## HTML5的离线储存

HTML5的离线存储是基于一个新建的 .appcache 文件的缓存机制(不是存储技术)，通过这个文件上的解析清单离线存储资源，这些资源就会像cookie一样被存储了下来。
（1）创建一个和 html 同名的 manifest 文件，然后在页面头部加入 manifest 属性：

```html
<html lang="en" manifest="index.manifest">
```

（2）在 cache.manifest 文件中编写需要离线存储的资源：

```
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

## 浏览器乱码原因

网页源码是gbk编码，内容是utf-8编码，反之亦然
网页源码为gbk，数据库存储数据编码为utf-8

## 渐进增强，优雅降级

- 渐进增强：针对低版本浏览器进行页面重构，保证基本功能，再针对高版本浏览器进行改进追加功能
- 优雅降级：一开始就构建完整功能，后对低版本浏览器进行兼容

## drag Api

dragstart：事件主体是被拖放元素，在开始拖放被拖放元素时触发。
darg：事件主体是被拖放元素，在正在拖放被拖放元素时触发。
dragenter：事件主体是目标元素，在被拖放元素进入某元素时触发。
dragover：事件主体是目标元素，在被拖放在某元素内移动时触发。
dragleave：事件主体是目标元素，在被拖放元素移出目标元素是触发。
drop：事件主体是目标元素，在目标元素完全接受被拖放元素时触发。
dragend：事件主体是被拖放元素，在整个拖放操作结束时触发。