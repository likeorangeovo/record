# 常见算法实现

## KMP

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


## 排序算法
- 比较类排序
1. 插入排序(直接插入排序，希尔排序)
2. 选择排序(直接选择排序，堆排序)
3. 交换排序(冒泡排序，快速排序)
4. 归并排序(二路归并排序，多路归并排序)
- 非比较类排序
1. 计数排序
2. 基数排序(LSD，MSD)
## 插入排序

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

## 选择排序
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

## 交换排序

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

