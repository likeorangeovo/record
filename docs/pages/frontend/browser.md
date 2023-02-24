## 浏览器渲染

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

## web-worker

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

## html 离线存储怎么用

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

