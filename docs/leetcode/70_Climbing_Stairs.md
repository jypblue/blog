# 70. Climbing Stairs
### Tags
1. Dynamic Programming

>You are climbing a stair case. It takes n steps to reach to the top.

>Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

### 题意：
你在爬楼梯。到达山顶需要N步。
每次你可以爬上1或2个步骤。你有多少种不同的方法可以爬到山顶？

### 分析：
题目意思很简单，就是求出1和2组合相加等于n的方法总数，这个其实跟斐波那契数列问题类似。因此，本题做法都大同小异，递归和动态规划都可以，只要找到其中的规律就可以了。

### 思路：
根据分析，我们可以很容易找到规律：f(n) = f(n - 1) + f(n - 2);
唯一的不同点在于采用什么方式来提升效率，节省空间了。

### 复杂度
时间复杂度O(n)

### Js实现
#### 方法 #1

```js
let climbStairs = function(n) {
  if (n < 4) return n;
  let a = 2, b = 3, c = 5;
  for (let i = 5; i <= n; i++)
  {
      a = c;
      c = b+c;
      b = a;
  }
  return c;
};
```

#### 方法 #2

```js
let climbStairs = function(n) {
  let f1 = 2;
  let f2 = 1;
  if(n == 1) {
      return f2;
  } else if(n == 2) {
      return f1;
  }
  let fn;
  for(let i = 3; i <= n; i++) {
      fn = f1 + f2;
      f2 = f1;
      f1 = fn;
  }
  return fn;
};
```

#### 方法 #3
```js
let climbStairs = function(n) {
  //动态规划
  let res = [];
  res[0] = 1;
  res[1] = 1;
  for (let i = 2; i <= n; i++)
  {
      res[i%3] = res[(i-1)%3] + res[(i-2)%3];
  }
  return res[n%3];
};
```