# 排序算法

虽然一般的前端开发，实际工作中应用到算法的情况比较少，但是呢不管是前端还是后端都是程序员，都应该对常用算法，数据结构有一定的了解及掌握，知道如何应用到自身所擅长的语言中，下面我将介绍一下常用排序算法有关原理，以及在Javascript语言的具体实现。非我原创，只是整理一下。

首先列一下各种排序算法的时间复杂度，空间复杂度及稳定性：

| 排序算法 | 平均时间复杂度 | 最坏时间复杂度 | 空间复杂度 | 稳定性 |
| :----------: | :-----------: | :----------: | :----------: | :----------: |
| 冒泡排序 | O(n<sup>2</sup>) | O(n<sup>2</sup>) | O(1) | 稳定 |
| 选择排序 | O(n<sup>2</sup>) | O(n<sup>2</sup>) | O(1) | 不稳定 |
| 插入排序 | O(n<sup>2</sup>) | O(n<sup>2</sup>) | O(1) | 稳定 |
| 快速排序 | O(nlogn) | O(n<sup>2</sup>) | O(logn) | 不稳定 |
| 归并排序 | O(nlogn) |  O(nlogn) | O(1) | 稳定 |
| 堆排序  |  O(nlogn) |  O(nlogn) | O(1) | 不稳定 |
| 二叉树排序 | O(nlogn) | O(nlogn) | O(n) | 稳定 |
| 希尔排序 | O(nlogn) | O(n<sup>8</sup>)1 | O(1) | 不稳定 |
| 基数排序 | O(log<sub>R</sub><sup>B</sup>) | O(log<sub>R</sub><sup>B</sup>) | O(n) | 稳定 |
| 计数排序 | O(n+k) | O(n+k) | O(n+k) | 稳定 |

## 冒泡排序

- 算法原理

相邻的数据进行两两比较，较小的数放在前面，较大的数放在后面，循环一次下来，最小的数就在第一位了，第二次循环跑一次也一样，如此类推，直到所有的数据排序完成。

- 算法描述

1. 比较相邻的元素。如果第一个比第二个大，就交换它们两个；
2. 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；
3. 针对所有的元素重复以上的步骤，除了最后一个；
4. 重复步骤1~3，直到排序完成。

- Js代码实现

``` js
function bubbleSort(arr) {
    var l = arr.length,j;
    for(var i = 0 ; i < l ; i++){
        for(var j = 0;j < l-i ; j++){
            if(arr[j] < arr[j - i]) {
                arr[j] = [ arr[j-1] , arr[j-1] = arr[j] ][0];
            }
        }
    }
    return arr;
}
```

## 选择排序

- 算法原理

在未排序的数组中找到最小（大）的元素，放在排序数组的起始位置。然后，从剩余未排序的数中继续查找最小（大）的元素，放到已排序的数的末尾。以此类推，直到所有元素均排序完毕。

- 算法描述

1. 初始状态：无序区为R[1..n]，有序区为空；
2. 第i趟排序(i=1,2,3…n-1)开始时，当前有序区和无序区分别为R[1..i-1]和R(i..n）。该趟排序从当前无序区中选出关键字最小的记录 R[k]，将它与无序区的第1个记录R交换，使R[1..i]和R[i+1..n)分别变为记录个数增加1个的新有序区和记录个数减少1个的新无序区；
3. n-1趟结束，数组有序化了。

- Js代码实现

``` js
function selectionSort(array) {
    var min;
    var l = array.length;//缓存长度
    for (var i = 0; i < l; i++) {//开始进行循环，一共循环l次，就可以找出l个元素了
        min = i;//假设第一个为最小元素
        for (var j = i + 1; j < l; j++) {//从第一个开始循环，遍历
            if (array[min] > array[j])//判断之后的是否比前面的小
                min = j;//更新“最小”的下标
        }
        if (min != i) {//这里因为是在同一个数组内进行操作，所以直接交换元素即可。比如数组第一项是i，那么我找出了最小元素为array[min],那么我就需要把这个min跟i交换。以此类推。
            array[i]= [array[min],array[min]=array[i]][0];//交换元素
        }
    }
    return array;
}
```

## 插入排序

- 算法原理

将数据分为两部分，有序部分与无序部分。一开始有序部分包含第一个元素，依次将无序部分的元素插入到有序部分，直到所有元素有序。

- 算法描述

1. 从第一个元素开始，该元素可以认为已经被排序；
2. 取出下一个元素，在已经排序的元素序列中从后向前扫描；
3. 如果该元素（已排序）大于新元素，将该元素移到下一位置；
4. 重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；
5. 将新元素插入到该位置后；
6. 重复步骤2~5。

- Js代码实现

``` js
function insertSort(arr) {
    var temp,inner;
    for(var outer = 1;outer<=arr.length - 1;outer++) {
        temp = arr[outer];
        inner = outer;
        while(inner > 0 && (arr[inner - 1 ] >= temp)) {
            arr[inner] = arr[inner - 1];
            --inner;
        }
        arr[inner] = temp;
    }
    return arr;
}
```

## 二分插入排序

- 算法原理

在直接插入排序的基础上进行小改动，与直接插入排序算法最大的区别在于查找插入位置时使用的是二分查找的方式，在速度上有一定提升。

- 算法描述

1.从第一个元素开始，该元素可以认为已经被排序；
2.取出下一个元素，在已经排序的元素序列中二分查找到第一个比它大的数的位置；
3.将新元素插入到该位置后；
4.重复上述两步。

- Js代码实现

``` js
function binaryInsertionSort(array) {
        for (var i = 1; i < array.length; i++) {
            var key = array[i], left = 0, right = i - 1;
            while (left <= right) {
                var middle = parseInt((left + right) / 2);
                if (key < array[middle]) {
                    right = middle - 1;
                } else {
                    left = middle + 1;
                }
            }
            for (var j = i - 1; j >= left; j--) {
                array[j + 1] = array[j];
            }
            array[left] = key;
        }
        return array;
}
```

## 快速排序

- 算法原理

快速排序使用分治法来把一个串（list）分为两个子串（sub-lists）。通过一次排序将要排序的数据分割成独立的两部分，其中一部分的所有数据都比另外一部分的所有数据要小，然后再按此方法对这两部分数据分别进行快速排序，整个排序递归进行。最后达到整个数据变成有序序列。

- 算法描述

1. 从数列中挑出一个元素，称为 “基准”（pivot）
2. 重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作
3. 递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序

- Js代码实现

``` js
//方法一
function quickSort(array, left, right) {
    if(array.length ==0) {
        return [];
    }
    if (left < right) {
        var x = array[right], i = left - 1, temp;
        for (var j = left; j <= right; j++) {
            if (array[j] <= x) {
                i++;
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
        quickSort(array, left, i - 1);
        quickSort(array, i + 1, right);
    };
}
//方法二
function quickSort(arr) {
    if(arr.length ==0) {
        return [];
    }
    var left =[];
    var right = [];
    var pivot = arr[0];
    for(var i = 1;i < arr.length;i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot,quickSort(right));
}
```

## 归并排序

- 算法原理

（假设序列共有n个元素）将序列每相邻两个数字进行归并操作（merge)，形成floor(n/2)个序列，排序后每个序列包含两个元素。将上述序列再次归并，形成floor(n/4)个序列，每个序列包含四个元素。重复以上步骤，直到所有元素排序完毕。

- 算法描述

1. 把长度为n的输入序列分成两个长度为n/2的子序列
2. 对这两个子序列分别采用归并排序
3. 将两个排序好的子序列合并成一个最终的排序序列

- Js代码实现

``` js
function mergeSort(array, p, r) {
    if (p < r) {
        var q = Math.floor((p + r) / 2);
        mergeSort(array, p, q);
        mergeSort(array, q + 1, r);
        merge(array, p, q, r);
    }
}
function merge(array, p, q, r) {
    var n1 = q - p + 1, n2 = r - q, left = [], right = [], m = n = 0;
    for (var i = 0; i < n1; i++) {
        left[i] = array[p + i];
    }
    for (var j = 0; j < n2; j++) {
        right[j] = array[q + 1 + j];
    }
    left[n1] = right[n2] = Number.MAX_VALUE;
    for (var k = p; k <= r; k++) {
        if (left[m] <= right[n]) {
            array[k] = left[m];
            m++;
        } else {
            array[k] = right[n];
            n++;
        }
    }
}
```

## 堆排序

- 算法原理

堆排序（Heapsort）是指利用堆这种数据结构所设计的一种排序算法。堆积是一个近似完全二叉树的结构，并同时满足堆积的性质：即子结点的键值或索引总是小于（或者大于）它的父节点。

- 算法描述

1. 将初始待排序关键字序列(R1,R2….Rn)构建成大顶堆，此堆为初始的无序区
2. 将堆顶元素R[1]与最后一个元素R[n]交换，此时得到新的无序区(R1,R2,……Rn-1)和新的有序区(Rn),且满足R[1,2…n-1]<=R[n]
3. 由于交换后新的堆顶R[1]可能违反堆的性质，因此需要对当前无序区(R1,R2,……Rn-1)调整为新堆，然后再次将R[1]与无序区最后一个元素交换，得到新的无序区(R1,R2….Rn-2)和新的有序区(Rn-1,Rn)。不断重复此过程直到有序区的元素个数为n-1，则整个排序过程完成

- Js代码实现

``` js
/*方法说明：堆排序
@param  array 待排序数组*/
function heapSort(array) {
    if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
        //建堆
        var heapSize = array.length, temp;
        for (var i = Math.floor(heapSize / 2); i >= 0; i--) {
            heapify(array, i, heapSize);
        }
        //堆排序
        for (var j = heapSize - 1; j >= 1; j--) {
            temp = array[0];
            array[0] = array[j];
            array[j] = temp;
            heapify(array, 0, --heapSize);
        }
    } else {
        return 'array is not an Array!';
    }
}
/*方法说明：维护堆的性质
@param  arr 数组
@param  x   数组下标
@param  len 堆大小*/
function heapify(arr, x, len) {
    if (Object.prototype.toString.call(arr).slice(8, -1) === 'Array' && typeof x === 'number') {
        var l = 2 * x, r = 2 * x + 1, largest = x, temp;
        if (l < len && arr[l] > arr[largest]) {
            largest = l;
        }
        if (r < len && arr[r] > arr[largest]) {
            largest = r;
        }
        if (largest != x) {
            temp = arr[x];
            arr[x] = arr[largest];
            arr[largest] = temp;
            heapify(arr, largest, len);
        }
    } else {
        return 'arr is not an Array or x is not a number!';
    }
}
```

## 二叉树排序

- 算法原理

- Js代码实现

``` js
function TreeSort()
{
  this.left=null;
  this.right=null;
  this.value=null;
}
TreeSort.prototype.add=function(value)
{
   if(value!=null && typeof value != 'undefined')
   {
       if(this.value==null)
       {
           this.value=value;
           return ;
       }
       var node=new TreeSort();
       node.value=value;
       if(this.value >= value)
       {
          if(this.left==null)
          {
             this.left=node;
          }
          else
          {
             this.left.add(value);
          }
       }
       else
       {
          if(this.right==null)
          {
             this.right=node;
          }
          else
          {
            this.right.add(value);
          }
       }
   }
}
TreeSort.prototype.print=function(data)
{
   if((typeof data == 'undefined') || !(data instanceof Array) )return;
   if(this.left!=null)
   {
     this.left.print(data);
   }
   data.push(this.value);
   if(this.right!=null)
   {
      this.right.print(data);
   }
}
Array.prototype.treeSort = function ()
{
    var root=new TreeSort();for (var i=0;i<this.length;i++)
    {
        root.add(this[i]);
    }
    this.length=0;
    root.print(this);
}
```

## 希尔排序

- 算法原理

希尔排序是按照不同步长对元素进行插入排序，当刚开始元素很无序的时候，步长最大，所以插入排序的元素个数很少，速度很快；当元素基本有序了，步长很小，插入排序对于有序的序列效率很高。所以，希尔排序的时间复杂度会比o(n^2)好一些。由于多次插入排序，我们知道一次插入排序是稳定的，不会改变相同元素的相对顺序，但在不同的插入排序过程中，相同的元素可能在各自的插入排序中移动，最后其稳定性就会被打乱，所以shell排序是不稳定的

- Js代码实现

``` js
//希尔排序
function shell(arr) {
    var gaps = [5,3,1];
    var gapLength = gaps.length;
    var length = arr.length;
    for( var x = 0; x < gapLength ; ++x ) {
        for ( var i = gaps[x]; i< length ;i++) {
            var temp = arr[i];
            for ( j = i ;j >= gaps[x] && arr[j-gaps[x]] > temp; j-=gaps[x]) {
                arr[j] = arr[j-gaps[x]];
            }
            arr[j] = temp ;
        }
    }
}
```

## 基数排序

- 算法原理

基数排序是按照低位先排序，然后收集；再按照高位排序，然后再收集；依次类推，直到最高位。有时候有些属性是有优先级顺序的，先按低优先级排序，再按高优先级排序，最后的次序就是高优先级高的在前，高优先级相同的低优先级高的在前。基数排序基于分别排序，分别收集，所以其是稳定的排序算法。

- Js代码实现

``` js
// 获得每位的数字
function RadixLSDSort (arr, digit) {
    const radix = 10;   // 基数,以10进制来进行排序
    var i = 0,
        j = 0,
        count = Array(radix), // 0~9的桶
        end = arr.length,
        bucket = Array(end);
    // 利用LSD,也就是次位优先
    for (var d = 1; d <= digit; d++) {
        for (i = 0; i < radix; i++) {
            count[i] = 0;
        }
        // 向各个桶中添加元素,并统计出每个桶中装的个数
        for (i = 0; i < end; i++) {
            j = getDigit(arr[i], d);
            count[j]++;
        }
        // count的越往后值最大,最大值为arr.length
        // count数组的值为,该位数值为该索引的数字总数
        for (i = 1; i < radix; i++) {
            count[i] = count[i] + count[i - 1];
        }
        // 按照桶的顺序将导入temp中
        for (i = end - 1; i >= 0; i--) {
            j = getDigit(arr[i], d);
            bucket[count[j] - 1] = arr[i];
            count[j]--;
        }
        // 将已经根据相应位数排好的序列导回arr中
        for (i = 0; i < end; i++) {
            arr[i] = bucket[i];
        }
    }
}
```

## 计数排序

- 算法原理

计数排序使用一个额外的数组C，其中第i个元素是待排序数组A中值等于i的元素的个数。然后根据数组C来将A中的元素排到正确的位置。它只能对整数进行排序。

- 算法描述

1. 找出待排序的数组中最大和最小的元素；
2. 统计数组中每个值为i的元素出现的次数，存入数组C的第i项；
3. 对所有的计数累加（从C中的第一个元素开始，每一项和前一项相加）；
4. 反向填充目标数组：将每个元素i放在新数组的第C(i)项，每放一个元素就将C(i)减去1

- Js代码实现

``` js
function countingSort(array) {
    var len = array.length, B = [], C = [], min = max = array[0];
    for (var i = 0; i < len; i++) {
        min = min <= array[i] ? min : array[i];
        max = max >= array[i] ? max : array[i];
        C[array[i]] = C[array[i]] ? C[array[i]] + 1 : 1;
    }
    for (var j = min; j < max; j++) {
        C[j + 1] = (C[j + 1] || 0) + (C[j] || 0);
    }
    for (var k = len - 1; k >=0; k--) {
        B[C[array[k]] - 1] = array[k];
        C[array[k]]--;
    }
    return B;
}
```

## 桶排序

- 算法原理

假设输入数据服从均匀分布，将数据分到有限数量的桶里，每个桶再分别排序（有可能再使用别的排序算法或是以递归方式继续使用桶排序进行排序）。

- 算法描述

1. 设置一个定量的数组当作空桶；
2. 遍历输入数据，并且把数据一个一个放到对应的桶里去；
3. 对每个不是空的桶进行排序；
4. 从不是空的桶里把排好序的数据拼接起来。

- Js代码实现

``` js
/*方法说明：桶排序
@param  array 数组
@param  num   桶的数量*/
function bucketSort(array, num) {
    if (array.length <= 1) {
        return array;
    }
    var len = array.length, buckets = [], result = [], min = max = array[0], regex = '/^[1-9]+[0-9]*$/', space, n = 0;
    num = num || ((num > 1 && regex.test(num)) ? num : 10);
    for (var i = 1; i < len; i++) {
        min = min <= array[i] ? min : array[i];
        max = max >= array[i] ? max : array[i];
    }
    space = (max - min + 1) / num;
    for (var j = 0; j < len; j++) {
        var index = Math.floor((array[j] - min) / space);
        if (buckets[index]) {   //  非空桶，插入排序
            var k = buckets[index].length - 1;
            while (k >= 0 && buckets[index][k] > array[j]) {
                buckets[index][k + 1] = buckets[index][k];
                k--;
            }
            buckets[index][k + 1] = array[j];
        } else {    //空桶，初始化
            buckets[index] = [];
            buckets[index].push(array[j]);
        }
    }
    while (n < num) {
        result = result.concat(buckets[n]);
        n++;
    }
    return result;
}
```