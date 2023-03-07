(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{240:function(t,_,v){t.exports=v.p+"assets/img/image-20220809223355017.98690b71.png"},276:function(t,_,v){t.exports=v.p+"assets/img/image-20230227173134193.84d92824.png"},277:function(t,_,v){t.exports=v.p+"assets/img/image-20230228170246729.cf059093.png"},278:function(t,_,v){t.exports=v.p+"assets/img/image-20230228170754640.97596277.png"},279:function(t,_,v){t.exports=v.p+"assets/img/image-20230302163716458.a34deb6b.png"},280:function(t,_,v){t.exports=v.p+"assets/img/tls_linked.98769f1b.png"},281:function(t,_,v){t.exports=v.p+"assets/img/image-20230302183703714.fc7f70a0.png"},305:function(t,_,v){"use strict";v.r(_);var s=v(14),a=Object(s.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"浏览器的组成"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的组成"}},[t._v("#")]),t._v(" 浏览器的组成")]),t._v(" "),_("p",[t._v("了解浏览器的运行，首先要先了解浏览器的组成。浏览器由"),_("code",[t._v("shell")]),t._v("(命令解析代理，简单来说就是"),_("code",[t._v("代理用户对内核的操作")]),t._v(")和浏览器"),_("code",[t._v("内核")]),t._v("组成。")]),t._v(" "),_("p",[t._v("shell 组成：")]),t._v(" "),_("ul",[_("li",[t._v("用户界面：除浏览器请求的页面以外，都属于用户界面。")]),t._v(" "),_("li",[t._v("网络：用于网络请求，包含多种文件传输协议，如HTTP、FTP等。")]),t._v(" "),_("li",[t._v("UI后端：用于绘制''对话框''等基本组件。")]),t._v(" "),_("li",[t._v("JS解释器：解释并执行网页中的javascript代码")]),t._v(" "),_("li",[t._v("XML解析器：将XML文档解析成文档对象模型(DOM)")]),t._v(" "),_("li",[t._v("数据存储：将浏览器数据存储在硬盘上")])]),t._v(" "),_("p",[t._v("内核组成：")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("浏览器引擎：为渲染引擎提供高级接口")])]),t._v(" "),_("li",[_("p",[t._v("渲染引擎：负责显示请求的内容。负责解析请求到的HTML、CSS 并将其显示")])])]),t._v(" "),_("h2",{attrs:{id:"浏览器的进程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的进程"}},[t._v("#")]),t._v(" 浏览器的进程")]),t._v(" "),_("p",[t._v("除了浏览器的组成，在谈到一段程序在计算机中的运行时，那必须提到"),_("code",[t._v("进程")]),t._v("和"),_("code",[t._v("线程")]),t._v("的概念")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("进程(资源分配的最小单位)")]),t._v("："),_("strong",[t._v("一个"),_("code",[t._v("执行中程序")]),t._v("的实例")])])]),t._v(" "),_("p",[t._v("早期"),_("code",[t._v("单道批操作系统")]),t._v("的计算机，仅执行一个程序，由其分配所有的系统资源，利用率非常低。后改进为"),_("code",[t._v("多道批操作系统")]),t._v("，可以在内存中同时加载多道程序并发执行，在某个程序需要等待资源时，CPU会去执行其他程序，但因为各个程序共享资源，导致经常出现资源冲突问题。因此提出了"),_("code",[t._v("进程")]),t._v("的概念，只有进程可以申请系统资源，进程间不会共享资源。系统通过PCB("),_("em",[t._v("process control block")]),t._v(")对进程进行管理和调度。")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("线程(CPU调度的最小单位)")]),t._v("：线程是进程中的一个实体")])]),t._v(" "),_("p",[t._v("因为进程的创建、销毁与切换存在着较大的时空开销，因此提出了"),_("code",[t._v("线程")]),t._v("来减少开销。同一进程间的线程共享进程的资源。因为线程是进程的的组成部分，所以线程的管理("),_("em",[t._v("通过线程控制块TCB")]),t._v(")可以有两种选择，一种是让进程自己管理线程("),_("strong",[t._v("用户态线程")]),t._v(")，另一种是通过操作系统管理线程("),_("strong",[t._v("内核态线程")]),t._v(")，但用于两种选择都有缺陷，现代操作系统选择将二者结合起来，"),_("code",[t._v("用户态的执行系统负责进程内部线程在非阻塞时的切换；内核态的操作系统负责阻塞线程的切换，即同时实现内核态和用户态线程管理。")]),t._v("当线程未阻塞时，由用户态对线程进行切换，当线程发生中断或异常时，切换到内核态执行中断处理。")]),t._v(" "),_("p",[t._v("浏览器常见的进程有以下几种：\n"),_("img",{attrs:{src:v(276),alt:"image-20230227173134193"}})]),t._v(" "),_("ul",[_("li",[t._v("Browser进程：浏览器的主进程，负责协调控制浏览器")]),t._v(" "),_("li",[t._v("GPU进程：用于3D绘制等")]),t._v(" "),_("li",[t._v("Network进程：负责发起接受网络请求")]),t._v(" "),_("li",[t._v("Storage进程：从原来的主进程中分离出来的缓存服务，主要负责提供浏览器本地存储等功能")]),t._v(" "),_("li",[t._v("渲染进程：负责控制显示tab标签页的内容")]),t._v(" "),_("li",[t._v("插件进程：使用插件时创建的进程")])]),t._v(" "),_("p",[t._v("其中渲染进程含有"),_("code",[t._v("5个主要线程")])]),t._v(" "),_("ul",[_("li",[t._v("GUI渲染线程：负责渲染页面、解析Html和Css、构建DOM树、CSSOM树、Render树、绘制页面、重绘重排")]),t._v(" "),_("li",[t._v("JS引擎线程：负责解析Javascript脚本，运行代码。"),_("strong",[t._v("与GUI渲染线程互斥")])]),t._v(" "),_("li",[t._v("定时器线程：setInterval和setTimeout，因为JS引擎是单线程，如果处于阻塞状态会影响定时器的准确性，计时完毕后，添加到事件队列中，等待JS引擎空闲后执行")]),t._v(" "),_("li",[t._v("异步http请求线程： 当XMLHttpRequest连接后，浏览器新开的一个线程，当检测到状态变化，将回调放入事件队列中，等待JS引擎执行。")]),t._v(" "),_("li",[t._v("事件触发线程：主要用来控制事件循环(event-loop)，将对应任务添加到事件触发线程中，在对应事件符合触发条件触发时，就把事件添加到待处理队列的队尾，等JS引擎处理")])]),t._v(" "),_("h2",{attrs:{id:"浏览器的网络请求"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的网络请求"}},[t._v("#")]),t._v(" 浏览器的网络请求")]),t._v(" "),_("p",[t._v("浏览器在输入网址到解析页面的过程中包含了一系列的网络请求")]),t._v(" "),_("p",[t._v("（1）"),_("strong",[t._v("解析URL：")]),t._v(" 首先对 URL 进行解析，定位资源路径。")]),t._v(" "),_("div",{staticClass:"language-js extra-class"},[_("pre",{pre:!0,attrs:{class:"language-js"}},[_("code",[_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//统一资源定位符(URL)的语法规则")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("scheme")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("host"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domain"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("port"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("path"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("filename\nscheme "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 定义因特网服务的类型。常见的协议有 http、https、ftp、file\nhost "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("定义域主机")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("http 的默认主机是 www"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndomain "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 定义因特网域名"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("比如 w3school"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cn\nport "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("定义主机上的端口号")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("http 的默认端口号是"),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\npath "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("定义服务器上的路径")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("如果省略，则文档必须位于网站的根目录中"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfilename "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 定义文档"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("资源的名称\n")])])]),_("p",[t._v("如果URL不合法，会将地址栏中的内容传递给搜索引擎。此外，浏览器会对其中的非法字符进行转译，如admin等")]),t._v(" "),_("p",[t._v("（2）"),_("strong",[t._v("缓存判断：")])]),t._v(" "),_("p",[t._v("从缓存位置来看，缓存分为四种，从上到下依次查看是否命中")]),t._v(" "),_("p",[_("strong",[t._v("Service Worker")]),t._v(" 是运行在浏览器背后的独立线程，一般用来实现缓存功能。传输协议必须为HTTPS")]),t._v(" "),_("p",[_("strong",[t._v("Memory Cache")]),t._v(" 内存缓存，一旦关闭 Tab 页面，缓存会被释放")]),t._v(" "),_("p",[_("strong",[t._v("Disk Cache")]),t._v(" 硬盘缓存，读取速度慢，容量和存储时效性高，大部分缓存都来自Disk Cache，在HTTP的协议头中设置")]),t._v(" "),_("p",[_("strong",[t._v("Push Cache")]),t._v(" 推送缓存，HTTP/2 中的内容，当以上三种缓存都没有命中时，才被使用。只在会话（Session）中存在，一旦会话结束就被释放")]),t._v(" "),_("p",[t._v("浏览器对于所请求资源的缓存处理主要包含以下三个策略："),_("strong",[t._v("存储策略、过期策略、协商策略")]),t._v("。其中，"),_("strong",[t._v("存储策略发生在收到请求响应后，用于决定是否缓存相应资源；过期策略发生在请求前，用于判断缓存是否过期；协商策略发生在请求中，用于判断缓存资源是否更新。")]),t._v(" 详见"),_("a",{attrs:{href:"https://www.jianshu.com/p/5b8d61afe52d?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器缓存策略"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("img",{attrs:{src:v(277),alt:"image-20230228170246729"}})]),t._v(" "),_("p",[t._v("在面对一个具体的http"),_("a",{attrs:{href:"https://www.cnblogs.com/xikui/p/16203648.html#_label3_0_0_0",target:"_blank",rel:"noopener noreferrer"}},[t._v("缓存需求"),_("OutboundLink")],1),t._v("时，决策流程图如下:")]),t._v(" "),_("p",[_("img",{attrs:{src:v(278),alt:"image-20230228170754640"}})]),t._v(" "),_("p",[t._v("1.资源内容是否可以复用，Cache-Control设置为no-store")]),t._v(" "),_("p",[t._v("2.是否每次都需要向服务器进行缓存有效确认，Cache-Control设置为no-cache")]),t._v(" "),_("p",[t._v("3.资源是否可以被代理服务器缓存，设置为 private or public")]),t._v(" "),_("p",[t._v("4.资源的过期时间，设置对应的 max-age值")]),t._v(" "),_("p",[t._v("5.配置协商缓存需要用到的 Etag、Last-Modified 等参数")]),t._v(" "),_("p",[t._v("（3）"),_("strong",[t._v("DNS解析："),_("strong",[t._v("判断本地是否有该域名的 IP 地址的缓存，有则使用，如果没有则向本地 DNS 服务器发起请求。本地 DNS 服务器检查是否存在缓存，没有则向根域名服务器发起请求，依次")]),t._v("递归")]),t._v("向高级域名服务器查询，最终获得域名的 IP 地址后，本地 DNS 服务器将该 IP 地址返回给用户。")]),t._v(" "),_("p",[t._v("（4）"),_("strong",[t._v("获取MAC地址：")]),t._v(" 获取到 IP 地址后，数据传输还需要目的主机 MAC 地址(用于数据链路层的通信)，获取MAC地址主要通过ARP协议(地址解析协议，ipv4网络层的必备协议，在ipv6中已经被替换为邻居发现协议NDP)，首先查看目标 IP 是否在自己的ARP表中，若不存在，则判断目标IP与自己是否在同一网段，若在同一网段，发送ARP广播报文，去请求解析出目标MAC地址，目标主机给出应答。否则，发送ARP广播报文，ARP包目标MAC地址是网关MAC地址，网关会给出应答。")]),t._v(" "),_("p",[t._v("（5）"),_("strong",[t._v("TCP三次握手：")]),t._v(" 下面是 TCP 建立连接的三次握手的过程")]),t._v(" "),_("p",[_("img",{attrs:{src:v(279),alt:"image-20230302163716458"}})]),t._v(" "),_("ol",[_("li",[_("p",[t._v("首先客户端向服务器发送一个 SYN 连接请求报文段和一个随机序号")])]),t._v(" "),_("li",[_("p",[t._v("服务端接收到请求后向服务器端发送一个报文段，确认连接请求，并向客户端发送另一个随机序号。")])]),t._v(" "),_("li",[_("p",[t._v("客户端接收服务器的确认应答后，进入连接建立的状态，同时向服务器也发送一个ACK 确认报文段，服务器端接收到确认后，也进入连接建立状态")])])]),t._v(" "),_("p",[_("strong",[t._v("ps：a(喂，听得到吗)，b(听到了，你听得到我吗)，a(听到了，我们开始聊天吧)")])]),t._v(" "),_("p",[t._v("（6）"),_("strong",[t._v("HTTPS握手：")]),t._v(" 如果使用 HTTPS 协议，在通信前还存在 "),_("a",{attrs:{href:"https://blog.csdn.net/weixin_50764555/article/details/128611062?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522167774628316800184137009%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=167774628316800184137009&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~baidu_landing_v2~default-3-128611062-null-null.142%5Ev73%5Einsert_down1,201%5Ev4%5Eadd_ask,239%5Ev2%5Einsert_chatgpt&utm_term=https%E6%8F%A1%E6%89%8B%E8%BF%87%E7%A8%8B&spm=1018.2226.3001.4187",target:"_blank",rel:"noopener noreferrer"}},[t._v("TLS 四次握手"),_("OutboundLink")],1),t._v("过程。")]),t._v(" "),_("p",[_("img",{attrs:{src:v(280),alt:"tls_linked"}})]),t._v(" "),_("ol",[_("li",[t._v("客户端告诉给服务端，加密协议版本，加密套件(如RSA)，和一个**"),_("code",[t._v("客户端随机数")]),t._v("**")]),t._v(" "),_("li",[t._v("服务端告诉客户端，一个**"),_("code",[t._v("服务器随机数")]),t._v("** + 服务器证书(CA) + 确定的加密协议版本")]),t._v(" "),_("li",[_("ul",[_("li",[t._v("客户端生成"),_("strong",[t._v("新随机数")]),t._v("，"),_("strong",[_("code",[t._v("pre_master_key")])]),t._v(" 。从服务器证书里取公钥，用公钥加密 "),_("strong",[_("code",[t._v("pre_master_key")])]),t._v("，发给服务器。")]),t._v(" "),_("li",[t._v("并使用个随机数进行计算得到一个"),_("strong",[t._v("会话秘钥")]),t._v("。并通知服务端，后续用这个会话秘钥进行对称加密通信。")]),t._v(" "),_("li",[t._v("客户端把迄今为止的通信数据内容生成一个摘要，用"),_("strong",[t._v("会话秘钥")]),t._v("加密，发给服务器做校验")])])]),t._v(" "),_("li",[_("ul",[_("li",[t._v("服务端拿到客户端传来的**"),_("code",[t._v("pre_master_key")]),_("strong",[t._v("，跟客户端一样，用这三个随机数同样获得一个")]),t._v('会话秘钥**。并告诉客户端，后续用这个"会话秘钥"进行加密通信。')]),t._v(" "),_("li",[t._v("服务端将迄今为止的通信数据内容生成一个摘要，用"),_("strong",[t._v("会话秘钥")]),t._v("加密一下，发给客户端做校验")])])])]),t._v(" "),_("p",[t._v("（7）"),_("strong",[t._v("返回数据：")]),t._v(" 页面请求发送到服务器端后，服务器端返回相关文件作为响应，浏览器接收到响应后，对相关文件进行解析")]),t._v(" "),_("p",[t._v("（8）"),_("strong",[t._v("页面渲染：")]),t._v(" 浏览器根据 html 文件构建 DOM 树，根据 css 文件构建 CSSOM 树，后根据 DOM 树和 CSSOM 树建立渲染树。后根据渲染树进行布局。布局完成后，使用 UI 接口对页面进行绘制。")]),t._v(" "),_("p",[t._v("（9）"),_("strong",[t._v("TCP四次挥手：")]),t._v(" 下面是 TCP 断开连接的四次挥手过程。")]),t._v(" "),_("p",[_("img",{attrs:{src:v(281),alt:"image-20230302183703714"}})]),t._v(" "),_("ol",[_("li",[t._v("客户端发出连接释放报文，并且停止发送数据。释放数据报文首部，FIN=1，seq=u")]),t._v(" "),_("li",[t._v("服务器端接收到连接释放报文后，发出确认报文，ACK=1，ack=u+1，seq=v")]),t._v(" "),_("li",[t._v("客户端收到确认请求后，"),_("strong",[t._v("客户端进入FIN-WAIT-2状态")]),t._v("，等待服务器发送连接释放报文，服务器将数据发送完毕后，向客户端发送连接释放报文，"),_("strong",[t._v("服务器进入LAST-ACK状态")]),t._v("，等待客户端的确认")]),t._v(" "),_("li",[t._v("客户端收到连接释放报文后，发出确认报文，ACK=1，ack=w+1，seq=u+1，后进入TIME-WAIT状态，但此时TCP连接还未终止，经过2MSL后，客户端进入CLOSED状态，服务器端收到确认报文后，进入CLOSED关闭状态")])]),t._v(" "),_("p",[_("strong",[t._v("ps：a(那我先走了)，b(好的，你走吧)，b(我也走了)，a(好的，拜拜)")])]),t._v(" "),_("h2",{attrs:{id:"浏览器的渲染过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的渲染过程"}},[t._v("#")]),t._v(" 浏览器的渲染过程")]),t._v(" "),_("p",[_("img",{attrs:{src:v(240),alt:"image-20220809223355017"}})]),t._v(" "),_("blockquote",[_("p",[t._v("Html解析，解析DOM树")])]),t._v(" "),_("p",[t._v("将原始字符转换成对应的节点对象，后将节点对象构建成树状结构")]),t._v(" "),_("blockquote",[_("p",[t._v("CSS解析，生成CSSOM树")])]),t._v(" "),_("blockquote",[_("p",[t._v("Render Tree")])]),t._v(" "),_("p",[t._v("将DOM树和CSSOM树结合形成渲染树")]),t._v(" "),_("blockquote",[_("p",[t._v("layout")])]),t._v(" "),_("p",[t._v("根据已知的节点和样式，计算节点在浏览器中的大小和位置")]),t._v(" "),_("p",[t._v("从渲染树根节点开始遍历，用盒子模型表示各节点之间的距离，确定其位置和大小")]),t._v(" "),_("blockquote",[_("p",[t._v("Paint")])]),t._v(" "),_("p",[t._v("将渲染树绘制")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("load和DomContentload事件")])])]),t._v(" "),_("p",[t._v("load：在所有资源加载完成后触发")]),t._v(" "),_("p",[t._v("domcontentload：在html被"),_("strong",[t._v("解析完成")]),t._v("(解析到html结束位置,async不计算在该时间内)后触发")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("js和css对渲染的影响")])])]),t._v(" "),_("p",[t._v("js会阻碍DOM树生成，阻碍图片，js，css等资源的加载")]),t._v(" "),_("p",[t._v("js异步加载方式如下：")]),t._v(" "),_("p",[t._v("defer：在文档加载完后执行，在domcontentload前")]),t._v(" "),_("p",[t._v("async：文档加载与执行和js加载与执行是并行执行的")]),t._v(" "),_("p",[t._v("css会阻塞CSSOM生成，阻碍页面渲染，阻碍js"),_("strong",[t._v("执行")])]),t._v(" "),_("h2",{attrs:{id:"浏览器的同源策略"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的同源策略"}},[t._v("#")]),t._v(" 浏览器的同源策略")]),t._v(" "),_("h2",{attrs:{id:"浏览器的安全"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的安全"}},[t._v("#")]),t._v(" 浏览器的安全")]),t._v(" "),_("h2",{attrs:{id:"浏览器的存储"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的存储"}},[t._v("#")]),t._v(" 浏览器的存储")]),t._v(" "),_("h2",{attrs:{id:"浏览器的垃圾回收机制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的垃圾回收机制"}},[t._v("#")]),t._v(" 浏览器的垃圾回收机制")]),t._v(" "),_("h2",{attrs:{id:"番外-抽象语法树的编译"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#番外-抽象语法树的编译"}},[t._v("#")]),t._v(" 番外：抽象语法树的编译")])])}),[],!1,null,null,null);_.default=a.exports}}]);