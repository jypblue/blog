# 4. Median of Two Sorted Arrays

### Tags

1. Binary Search
2. Array
3. Divide and Conquer

> There are two sorted arrays **nums1** and **nums2** of size m and n respectively.
>
Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

>**Example 1:**
>
```js
nums1 = [1, 3]
nums2 = [2]
The median is 2.0
```
>**Example 2:**
>
```js
nums1 = [1, 2]
nums2 = [3, 4]
The median is (2 + 3)/2 = 2.5
```

### 题意：
两个有序的数组 nums1 和 nums2，大小分别为 m 和 n。找出这两个有序数组的中位数，要求时间复杂度为O(log(m+n))。

### 分析：
可以看出，问题就是找数组的中位数。找中位数最直接的方式就是合并两个数组，然后找出中位数即可，但是要求时间复杂度为O(log(m+n))。所以需要考虑一下如何才能减少时间复杂度。通过谷歌，发现了大家普遍的做法是采用分治法。

### 思路：

分治法的思想是求两个有序数组的第k小数，而中位数就是第(m+n)/2小的数。

假设数组A和B的元素个数都大于k/2，我们比较 A[k/2−1] 和 B[k/2−1] 两个元素，这两个元素分别表示A的第 k/2 小的元素和B的第 k/2 小的元素。这两个元素比较共有三种情况：>、<和=。

1. 当A[k/2−1]<B[k/2−1] ，这表示A[0]~A[k/2−1]的元素都在A和B合并之后的前k小的元素中。换句话说，我们要在剩下的元素里找 k−k/2 小的元素。
2. 当A[k/2−1]>B[k/2−1]时存在类似的结论。
3. 当A[k/2−1]=B[k/2−1]时，我们已经找到了第k小的数，就是这个相等的元素。

然后我们可以采用递归的方式实现寻找第k小的数。另外还需要注意几个边界条件：
1. 如果 A 或者 B 为空，则直接返回B[k−1]或者A[k−1]
2. 如果k为1，我们只需要返回A[0]和B[0]中的较小值
3. 如果 A[k/2−1]=B[k/2−1]，返回其中一个

### Js实现

#### 方法 #1 分治法
#### 复杂度
时间O(log(m+n)) 空间O(1)

```js
let findMedianSortedArrays = function(nums1, nums2) {
  let m = nums1.length,
    n = nums2.length;
  let k = Math.floor((m + n) / 2);
  //偶数
  if ((m + n) % 2 === 0) {
    return (findKth(nums1, nums2, 0, 0, m, n, k) + findKth(nums1, nums2, 0, 0, m, n, k + 1)) / 2;
  } else {
    //奇数
    return findKth(nums1, nums2, 0, 0, m, n, k + 1);
  }
}

function findKth(arr1, arr2, start1, start2, len1, len2, k) {
  // 保证arr1是较短的数组
  if (len1 > len2) {
    return findKth(arr2, arr1, start2, start1, len2, len1, k);
  }
  if (len1 === 0) {
    return arr2[start2 + k - 1];
  }
  if (k === 1) {
    return Math.min(arr1[start1], arr2[start2]);
  }
  let p1 = Math.min(Math.floor(k / 2), len1);
  let p2 = k - p1;
  if (arr1[start1 + p1 - 1] < arr2[start2 + p2 - 1]) {
    return findKth(arr1, arr2, start1 + p1, start2, len1 - p1, len2, k - p1);
  } else if (arr1[start1 + p1 - 1] > arr2[start2 + p2 - 1]) {
    return findKth(arr1, arr2, start1, start2 + p2, len1, len2 - p2, k - p2);
  } else {
    return arr1[start1 + p1 - 1];
  }
}

```

#### 方法 #2
#### 复杂度
只循环一半，时间O(n)

```js
let findMedianSortedArrays = function(nums1, nums2) {
  let le = nums1.length + nums2.length;
  let l = Math.floor((le) / 2);
  let arr = new Array(l + 1);
  let j = 0, k = 0;
  for (let i = 0; i <= l; i++) {
    if (j >= nums1.length || k >= nums2.length) {
      if (j >= nums1.length) {
        arr[i] = nums2[k];
        k++;
      } else {
        arr[i] = nums1[j];
        j++;
      }
    } else {
      if (nums1[j] < nums2[k]) {
        arr[i] = nums1[j];
        j++;
      } else if (nums1[j] > nums2[k]) {
        arr[i] = nums2[k];
        k++;
      } else {
        arr[i] = nums2[k];
        if (i + 1 <= l) {
          i++;
          arr[i] = nums1[j];
          j++;
        }
        k++;
      }
    }
  }
  if (le % 2 === 0) {
    return (arr[l] + arr[l - 1]) / 2.0;
  } else {
    return arr[l];
  }
};
```

#### 方法 #3 暴力法
#### 复杂度
时间O(m+n)

虽然时间复杂度理论上不符合题目的要求，但实际上也能提交上去。当然暴力法消耗的时间确实要比前两种方法要多一些

```js
let findMedianSortedArrays = function(nums1, nums2) {
  let nums = [];
  let M = nums1.length;
  let N = nums2.length;
  let i = 0,
    j = 0;
  while (i < M && j < N) {
    if (nums1[i] < nums2[j]) {
      nums.push(nums1[i++]);
    } else {
      nums.push(nums2[j++]);
    }
  }

  while (i < M) {
    nums.push(nums1[i++]);
  }
  while (j < N) {
    nums.push(nums2[j++]);
  }
  if ((M + N) % 2 === 0) { // 偶数
    return (nums[Math.floor((M + N) / 2)] + nums[Math.floor((M + N) / 2 - 1)]) / 2.0;
  } else {
    return nums[Math.floor((M + N) / 2)];
  }
}
```












