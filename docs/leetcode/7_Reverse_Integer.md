# 7. Reverse Integer
### Tags
1. String

>Reverse digits of an integer.

>**Example1:** x = 123, return 321
>
>**Example2:** x = -123, return -321

>**Have you thought about this?**
>
Here are some good questions to ask before coding. Bonus points for you if you have already thought through this!

>If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.

>Did you notice that the reversed integer might overflow? Assume the input is a 32-bit integer, then the reverse of 1000000003 overflows. How should you handle such cases?

>For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

### 题意：
求整数的反向数字

### 分析
题目很简单，就是数字每位的数字左右取反，值得注意的是题目加了边界值，提示中已经说了关键信息 `32-bit integer`，Max是2<sup>31</sup>.剩下的注意一下正负号即可。

### 思路：
1. 将数字取正，然后反向（具体方法见代码）
2. 判断正负，添加符号
3. 判断是否越界，按照提示越界就返回0

### Js实现：
#### 复杂度：
时间复杂度O(n)

```js
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let Max = 2147483648;
    let abs = Math.abs(x)
    let res = 0;
    while(abs!==0) {
        res = res*10+abs%10;
        abs = Math.floor(abs/10);
    }
    if(x < 0) {
        res = -res;
    }
    if(res > Max || res < -Max) {
        return 0;
    }

    return res;
};
```