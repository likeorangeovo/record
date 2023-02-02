(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{294:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"git-常用指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-常用指令"}},[t._v("#")]),t._v(" git 常用指令")]),t._v(" "),s("h2",{attrs:{id:"文件操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件操作"}},[t._v("#")]),t._v(" 文件操作")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("git init "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//初始化仓库 ")]),t._v("\ngit status "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//查看仓库状态")]),t._v("\ngit add file "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//添加文件到暂存区 .为添加当前目录下所有文件")]),t._v("\ngit commit "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"提交的备注"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//提交文件到仓库")]),t._v("\ngit diff file "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//查看文件变化")]),t._v("\n")])])]),s("h2",{attrs:{id:"版本控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#版本控制"}},[t._v("#")]),t._v(" 版本控制")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("git log "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//git提交日志")]),t._v("\ngit reset "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("hard "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("版本号")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("上个版本"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("上"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("个版本"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HEAD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//回滚版本")]),t._v("\n## "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("hard yy 会清空工作区"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("暂存区"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("以及yy后的提交 慎用\ngit reset "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mixed")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("默认"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" yy "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//回滚版本 工作区不受影响，暂存区，本地仓库区回滚到yy对应的commit-id上")]),t._v("\ngit reset "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("soft yy "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//回滚版本 工作区，暂存区不受影响，本地仓库区回滚到yy对应的commit-id上")]),t._v("\ngit reflog "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//查看历史日志")]),t._v("\ngit restore file "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//撤销文件的修改(在暂存区回归add前状态,不在暂存区的回到当前版本状态)")]),t._v("\ngit rm file "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//更新删除操作到暂存区")]),t._v("\n")])])]),s("h2",{attrs:{id:"分支控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分支控制"}},[t._v("#")]),t._v(" 分支控制")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("git branch "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//查看分支")]),t._v("\ngit branch dev "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建dev分支")]),t._v("\ngit checkout dev "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//切换到dev分支")]),t._v("\n## git checkout的作用是检出，如果是文件的话，会放弃对文件的缓存区操作\ngit checkout "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//使用暂存区文件覆盖工作区内容")]),t._v("\ngit checkout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("b dev "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建dev分支并自动切换")]),t._v("\ngit merge dev "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//将dev分支工作成果合并到当前分支")]),t._v("\n## 当分支出现修改冲突时无法合并，需要通过git status查看冲突并手动修改\ngit stash "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//暂存现场,去修改其他分支")]),t._v("\ngit stash list "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//查看暂存现场")]),t._v("\ngit stash pop "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//恢复内容同时删除stash内容")]),t._v("\ngit stash apply stash@"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//恢复指定的stash")]),t._v("\n")])])]),s("h2",{attrs:{id:"远程操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#远程操作"}},[t._v("#")]),t._v(" 远程操作")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("git remote add origin git@github"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("xx"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("xx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//本地仓库关联到远程仓库")]),t._v("\ngit remote "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("v "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//查看远程库信息")]),t._v("\ngit push "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("u origin master "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//推送到对应分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* \npush：将本地仓库与远程仓库合并\n-u：将本地仓库分支与远程仓库分支合并，将master的分支提交，可以在远程仓库上看到你在本地仓库的master中创建了多少分支，不加这个参数只将当前的master与远程的合并，没有分支的历史记录，也不能切换分支\norigin：远程仓库必须使用\nmaster：提交本地matser分支仓库 \n*/")]),t._v("\ngit push origin 分支名 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("force "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//强制推送会导致远程仓库被覆盖")]),t._v("\ngit branch "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("set"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("upstream"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("to"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("origin"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dev dev "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//追踪远程分支origin/dev到本地分支dev")]),t._v("\ngit pull "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//将本地代码更新至远程仓库最新代码版本")]),t._v("\n## 直接覆盖本地 慎用，用fetch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("merge替代\ngit fetch "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//拉取所有更新,不同步，需要通过merge同步")]),t._v("\n")])])]),s("h2",{attrs:{id:"git-报错解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-报错解决方案"}},[t._v("#")]),t._v(" git 报错解决方案")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Failed to connect to github.com port 443")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//用vpn代理(http协议)")]),t._v("\ngit config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("global http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("proxy "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7890")]),t._v("\ngit config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("global https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("proxy "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7890")]),t._v("\n##主机号为代理主机号，端口号为代理主机的监听"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IP")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//socks5协议(由代理软件决定)")]),t._v("\ngit config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("global http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("proxy socks5 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7890")]),t._v("\ngit config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("global https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("proxy socks5 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7890")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//查看代理命令")]),t._v("\ngit config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("global "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("proxy\ngit config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("global "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("proxy\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//取消代理命令")]),t._v("\ngit config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("global "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("unset http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("proxy\ngit config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("global "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("unset https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("proxy\n")])])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);