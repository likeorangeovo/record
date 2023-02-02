# git 常用指令
## 文件操作

~~~js
git init //初始化仓库 
git status //查看仓库状态
git add file //添加文件到暂存区 .为添加当前目录下所有文件
git commit -m "提交的备注" //提交文件到仓库
git diff file //查看文件变化
~~~

## 版本控制

~~~js
git log //git提交日志
git reset --hard 版本号(上个版本HEAD^,上100个版本HEAD^100) //回滚版本
## --hard yy 会清空工作区,暂存区,以及yy后的提交 慎用
git reset --mixed(默认) yy //回滚版本 工作区不受影响，暂存区，本地仓库区回滚到yy对应的commit-id上
git reset --soft(默认) yy //回滚版本 工作区，暂存区不受影响，本地仓库区回滚到yy对应的commit-id上
git reflog //查看历史日志
git restore file //撤销文件的修改(在暂存区回归add前状态,不在暂存区的回到当前版本状态)
git rm file //更新删除操作到暂存区
~~~

## 分支控制

~~~js
git branch //查看分支
git branch dev //创建dev分支
git checkout dev //切换到dev分支
## git checkout的作用是检出，如果是文件的话，会放弃对文件的缓存区操作
git checkout . //使用暂存区文件覆盖工作区内容
git checkout -b dev //创建dev分支并自动切换
git merge dev //将dev分支工作成果合并到当前分支
## 当分支出现修改冲突时无法合并，需要通过git status查看冲突并手动修改
git stash //暂存现场,去修改其他分支
git stash list //查看暂存现场
git stash pop //恢复内容同时删除stash内容
git stash apply stash@{0} //恢复指定的stash
~~~

## 远程操作

~~~js
git remote add origin git@github.com:xx/xx.git //本地仓库关联到远程仓库
git remote -v //查看远程库信息
git push -u origin master //推送到对应分支
/* 
push：将本地仓库与远程仓库合并
-u：将本地仓库分支与远程仓库分支合并，将master的分支提交，可以在远程仓库上看到你在本地仓库的master中创建了多少分支，不加这个参数只将当前的master与远程的合并，没有分支的历史记录，也不能切换分支
origin：远程仓库必须使用
master：提交本地matser分支仓库 
*/
git push origin 分支名 --force //强制推送会导致远程仓库被覆盖
git branch --set-upstream-to=origin/dev dev //追踪远程分支origin/dev到本地分支dev
git pull //将本地代码更新至远程仓库最新代码版本
## 直接覆盖本地 慎用，用fetch+merge替代
git fetch //拉取所有更新,不同步，需要通过merge同步
~~~

## git 报错解决方案

1. Failed to connect to github.com port 443

   ~~~js
   //用vpn代理(http协议)
   git config --global http.proxy 127.0.0.1:7890
   git config --global https.proxy 127.0.0.1:7890
   ##主机号为代理主机号，端口号为代理主机的监听IP
   //socks5协议(由代理软件决定)
   git config --global http.proxy socks5 127.0.0.1:7890
   git config --global https.proxy socks5 127.0.0.1:7890
   //查看代理命令
   git config --global --get http.proxy
   git config --global --get https.proxy
   //取消代理命令
   git config --global --unset http.proxy
   git config --global --unset https.proxy
   ~~~

   