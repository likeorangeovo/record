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
void selectSort(int num[], int n)
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
    selectSort(a, 7);
    for (int i = 0; i < 7; i++)
    {
        printf("%d", a[i]);
    }
}
```

## 快速排序

```cpp
#include <stdio.h>
#include <string>
using namespace std;
//单边搜索
int sidePartition(int num[], int low, int high)
{
    int pivot = num[low];
    int i = low;
    int j = low + 1;
    int temp;
    while (j <= high)
    {
        if(num[j] < pivot){
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
//双边搜索
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
        //int pivot = partition(num, low, high);
        quickSort(num, low, pivot - 1);
        quickSort(num, pivot + 1, high);
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

