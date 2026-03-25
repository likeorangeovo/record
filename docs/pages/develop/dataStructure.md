# 常见算法实现
## 常用算法

### KMP

```cpp
#include <stdio.h>
#include <string>
using namespace std;

void getNext(string subS,int next[]){
    next[1] = 0;
    int i = 1, j = 0;
    while (i < subS.length())
    {
        if(j == 0 || subS[i] == subS[j]){
            i++;
            j++;
            next[i] = j;
        }
        else
        {
            j = next[j];
        }      
    }
}

int kmp(string s, string subs, int next[]){
    int i=1, j=1;
    while (i<=s.length() && j<=subs.length())
    {
        if(j==0 || s[i]==subs[j]){
            i++;
            j++;
        }
        else{
            j = next[j];
        }
    }
    if(j>subs.length()){
        return i - subs.length();
    }
    else
    {
        return 0;
    }  
}

int main()
{
    string s = "aabcc";
    string s1 = "bcc";
    int a = s.length();
    int next[s.length()];
    getNext(s,next);
    int res = kmp(s,s1,next);
    printf("%d",res);
}
```


### 排序算法
- 比较类排序
1. 插入排序(直接插入排序，希尔排序)
2. 选择排序(直接选择排序，堆排序)
3. 交换排序(冒泡排序，快速排序)
4. 归并排序(二路归并排序，多路归并排序)
- 非比较类排序
1. 计数排序
2. 基数排序(LSD，MSD)
### 插入排序

```cpp
#include <stdio.h>
#include <string>
using namespace std;
void insertSort(int num[], int n)
{
    int i, j;
    int cur;
    for (i = 1; i < n; i++)
    {
        if (num[i] < num[i - 1])
        {
            cur = num[i];
            for (j = i - 1; num[j] > cur; j--)
            {
                num[j + 1] = num[j];
            }
            num[j + 1] = cur;
        }
    }
}
void shell(int nums[], int n)
{
    int i, j, cur;
    for (int dk = n / 2; dk >= 1; dk /= 2)
    {
        for (i = dk; i < n; i++)
        {
            if (nums[i] < nums[i - dk])
            {
                cur = nums[i];
                for (j = i - dk; j >= 0 && nums[j] > cur; j -= dk)
                {
                    nums[j + dk] = nums[j]
                }
                nums[j + dk] = cur;
            }
        }
    }
}
int main()
{
    int a[] = {3, 1, 2, 5, 4};
    insertSort(a, 5);
    for (int i = 0; i < 5; i++)
    {
        printf("%d", a[i]);
    }
}
```

### 选择排序
```cpp 
#include <stdio.h>
#include <string>
using namespace std;
void select(int *nums, int n)
{
    int i, j, min;
    for (i = 0; i < n; i++)
    {
        min = i;
        for (j = i + 1; j < n; j++)
        {
            if (nums[min] > nums[j])
            {
                min = j;
            }
        }
        if (min != i)
        {
            swap(nums[min], nums[i]);
        }
    }
}
int main()
{
    int a[] = {3, 6, 1, 4, 2, 2, 2};
    select(a, 7);
    for (int i = 0; i < 7; i++)
    {
        printf("%d", a[i]);
    }
}
```

### 交换排序

```cpp
#include <stdio.h>
#include <string>
using namespace std;
// 单边搜索
int sidePartition(int num[], int low, int high)
{
    int pivot = num[low];
    int i = low;
    int j = low + 1;
    int temp;
    while (j <= high)
    {
        if (num[j] < pivot)
        {
            i++;
            temp = num[j];
            num[j] = num[i];
            num[i] = temp;
        }
        j++;
    }
    temp = num[i];
    num[i] = num[low];
    num[low] = temp;
    return i;
}
// 双边搜索
int partition(int num[], int low, int high)
{
    int pivot = num[low];
    while (low < high)
    {
        while (low < high && num[high] >= pivot)
        {
            high--;
        }
        num[low] = num[high];
        while (low < high && num[low] <= pivot)
        {
            low++;
        }
        num[high] = num[low];
    }
    num[low] = pivot;
    return low;
}
void quickSort(int num[], int low, int high)
{
    if (low < high)
    {
        int pivot = sidePartition(num, low, high);
        // int pivot = partition(num, low, high);
        quickSort(num, low, pivot - 1);
        quickSort(num, pivot + 1, high);
    }
}
// quick plus
void quick_sort(int nums[], int left, int right)
{
    if (left >= right)
        return;
    int i = left - 1, j = right + 1, pivot = nums[(left + right) / 2];
    while (i < j)
    {
        do
            i++;
        while (nums[i] < pivot);
        do
            j--;
        while (nums[j] > pivot);
        if (i < j)
        {
            swap(nums[i], nums[j]);
        }
    }
    quick_sort(nums, left, j);
    quick_sort(nums, j + 1, right);
}
// 冒泡排序
void bubbleSort(int num[], int n)
{
    int i, j;
    for (i = 0; i < n - 1; i++)
    {
        for (j = i + 1; j < n; j++)
        {
            if (num[j] < num[i])
            {
                int temp = num[j];
                num[j] = num[i];
                num[i] = temp;
            }
        }
    }
}
int main()
{
    int a[] = {3, 6, 1, 4, 2, 2, 2};
    quickSort(a, 0, 6);
    for (int i = 0; i < 7; i++)
    {
        printf("%d", a[i]);
    }
}
```
## js常见算法
###  instanceof
判断构造函数的prototype是否出现在对象的原型链中

1. 获取类型的原型
2. 获取对象的原型
3. 循环判断1 2是否相等（直到对象的原型为null）

```js
function instanceof（left，right）{
  let proto = Object.getPrototype(left);//获取对象的原型
  let prototype = right.prototype;
  while（1）{
    if(!proto){
      return 0;
    }
    if(proto === prototype){
      return 1;
    }
    proto = Object.getPrototype(proto);
  }
}
```

### 手写new
1. 创建一个新的空对象
2. 设置原型，将对象的原型设置为函数的 prototype 对象
3. 函数的 this 指向这个对象，执行构造函数的代码
4. 判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。
```js
function myNew(){
	//1
	let newobj = null;
	let construct = Array.prototype.shift.call(arguments);
	if(typeof construct !== "function"){
		return false;
	}
	// 2
	newobj = Object.create(construct.prototype);
	// 3
	let res = construct.apply(newobj,arguments);
	
	let flag = res && (typeof res === "function" || typeof res === "Object")
	return flag ? res : newobj
}
myNew(构造函数，初始化参数)
```
###  手写promise.all

1. 接收一个 Promise 实例的数组作为参数

2. 返回一个新的 promise 对象，

3. 遍历传入的参数，用Promise.resolve()将参数"包一层"，使其变成一个promise对象

4. 参数所有回调成功才是成功，返回值数组与参数顺序一致

5. 参数数组其中一个失败，则触发失败状态，第一个触发失败的 Promise 错误信息作为 Promise.all 的错误信息。

```js
function promiseAll（promise）{
    if(!Array.isArray(promise)){
        return false;
    }
    let counter = 0;
    let res = [];
    for(let i=0; i<promise.length(); i++){
        Promise.resolve(promise[i]).then(value=>{
            counter++;
            res.push(value);
            if(counter == promise.length()){
                return resolve(res);
            }
        },error=>{
            return reject(error);
        })
    }
}

// test
let p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(1)
    }, 1000)
})
let p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(2)
    }, 2000)
})
let p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(3)
    }, 3000)
})
promiseAll([p3, p1, p2]).then(res => {
    console.log(res) // [3, 1, 2]
})
```

### 手写防抖

事件被触发n秒后调用，期间再次触发事件，计时器重置

```js
function debounce(fn,wait){
    let timer = null;
    return function(){
        let context = this;
        let args = arguments;
        if(timer){
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimerout(()=>{
            fn.apply(fn,args);
        },wait);
    }
}
```

### 手写节流

在一定时间内，无论多少次请求，都只请求一次

```js
function throttle(fn,delay){
    let current = Date.now();
    return function(){
        let context = this;
        let args = arguments;
        if(Date.now() - current > delay){
            current = Date.now();
            return fn.apply(context,args);
        }
    }
}
```

### 手写call

判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。

判断传入上下文对象是否存在，如果不存在，则设置为 window 。

处理传入的参数，截取第一个参数后的所有参数。

将函数作为上下文对象的一个属性。

使用上下文对象来调用这个方法，并保存返回结果。

删除刚才新增的属性。

返回结果。

```js
function,prototype.mycall(context){
    if(typeof this !== "function"){
        return false;
    }
    context = context || window;
    context.fn = this;
    
    let args = [...argments].splice(1);
    let res = context.fn(...args);
    delete context.fn;
    return res;
}
```

### 手写apply

