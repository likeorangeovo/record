# css

## 单行 多行文本溢出

```css
//单行溢出
overflow:hidden;	//溢出隐藏
text-overflow:ellipsis //文本溢出用省略号表示
white-space:nowrap //规定文本不进行换行

//多行溢出
overflow:hidden
text-overflow:ellipsis
display:-webkit-box //作为弹性伸缩盒子的模型表示
-webkit-box-orient:vertical //伸缩盒子的子元素排列方式，从上到下垂直排列
-webkit-line-clamp;3 //显示的行数
```
## 两列布局

flex布局，左浮动右calc，左浮动右margin-left，左浮动右overflow(BFC的区域不会与float box重叠)

```html
<div class="container clearfix">
  <div class="left">定宽</div>
  <div class="right">自适应</div>
</div>
```
```css
body{
	margin:0
}
.container{
	height:400px
	background:#eebefa
}
.left{
	display:float //flex
	height:400px
	width:200px
	background-color:#f783ac
}
.right{
	width:calc(100% - 200px) // margin-left:200px // overflow:hidden
	//flex；1
	height:400px
	background-color；#c0b75
}
.clearfix:after{
	content:''
	display:block
	clear:both
}
···

```

## 三列布局

1.绝对定位，左右两栏绝对定位，中间设置margin

2.flex，左右固定大小，中间flex:1

3.浮动，左右固定大小设置浮动，中间设置margin(middle必须放在左右div后面，否则右边的div会掉下)

4.圣杯布局，父元素设置左右的padding，三列均设置浮动，middle设置为父元素宽度，并放在最前面。左右两个div被挤到下一行，两者使用margin负值将自身移到上一行，并使用相对定位，移动到两侧
```css
.outer {
  height: 100px;
  padding-left: 100px;
  padding-right: 200px;
}

.left {
  position: relative;
  left: -100px;

  float: left;
  margin-left: -100%;

  width: 100px;
  height: 100px;
  background: tomato;
}

.right {
  position: relative;
  left: 200px;

  float: right;
  margin-left: -200px;

  width: 200px;
  height: 100px;
  background: gold;
}

.center {
  float: left;

  width: 100%;
  height: 100px;
  background: lightgreen;
}
```
5.双飞翼布局，在middle外嵌套wrapper(设置浮动)，middle设置margin，两侧利用负边距提到上一层
```css
.outer {
  height: 100px;
}

.left {
  float: left;
  margin-left: -100%;

  width: 100px;
  height: 100px;
  background: tomato;
}

.right {
  float: left;
  margin-left: -200px;

  width: 200px;
  height: 100px;
  background: gold;
}

.wrapper {
  float: left;

  width: 100%;
  height: 100px;
  background: lightgreen;
}

.center {
  margin-left: 100px;
  margin-right: 200px;
  height: 100px;
}
```

## 水平垂直居中

1.利用绝对定位，将元素左上角通过top50，left50定位到页面中心，后通过transform调整元素中心点到页面中心

```css
.parent {    
	position: relative;
		} 
.child {    
	position: absolute;    
	left: 50%;    
	top: 50%;    
	transform: translate(-50%,-50%);
		}
```
2.利用绝对定位，设置四个方向都为0，将margin设为auto
```css
.parent {
    position: relative;
}
.child {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}
```

3.利用flex布局
```css
.parent {
    display: flex;
    justify-content:center;
    align-items:center;
}
```

## 如何清除浮动 清除浮动的方式

```css
,clear::after{
content:'';
display:block;
clear:both;
}
```
clear,元素盒子的边不能和`前面`浮动元素相邻
## BFC的理解，如何创建BFC
块级格式上下文，独立容器，内部元素和外部互不干扰
1.创建条件：
元素设置浮动：float，设置绝对定位：absolute，fixed，设置overflow：hidden，scroll，auto
display：inline-block，flex
2.特点

- 垂直方向上自上而下，和标准文档流一样
- BFC中上下相邻的两个容器的margin会重叠
- BFC计算高度时，需要计算浮动元素的高度
- BFC区域不会和浮动的容器发生重叠
- BFC内部元素不会影响到外面
- 每个元素的左margin值和容器的左border相邻
