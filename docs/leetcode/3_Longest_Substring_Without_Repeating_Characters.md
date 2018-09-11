# 3. Longest Substring Without Repeating Characters

### Tags

1. String
2. Hash Table
3. Two Pointers

>Given a string, find the length of the **longest substring** without repeating characters.
>
>**Examples:**
>
>Given `"abcabcbb"`, the answer is `"abc"`, which the length is 3.
>
>Given `"bbbbb"`, the answer is `"b"`, with the length of 1.
>
>Given `"pwwkew"`, the answer is `"wke"`, with the length of 3. Note that the answer must be a substring, `"pwke"` is a subsequence and not a substring.

### 题意：

给定一个字符串，寻找字符串中不重复最长子串的长度

### 分析：

分析题目，抓住两个关键词：
1. 最长子串 =>寻找子串起点和终点位置
2. 不重复 =>循环比较字符是否重复

### 思路：

由此，第一个想法就是逐个字符比对，暴力搜索。但是如果完全循环的话，时间复杂度太高，将达到O(n<sup>3</sup>);肯定会出现Time Limit Exceeded。因此想到了做改良。思路如下：
1. 将字符串第i位与其之前的每位字符一一比较
2. 如果不相等，记录两者位置距离长度
3. 如果相等，退出，返回之前记录的距离长度
4. 注意一开始就重复的特殊情况‘aa’

### Js实现

方法1是自己的实现，后面几个方法都是谷歌后使用JavaScript实现的

#### 方法 #1 暴力搜索
#### 复杂度

 时间 <= O(n<sup>2</sup>) && >= O(n)

```js
let lengthOfLongestSubstring = function(s) {
  let index = 0;
  let maxstr = 0;
  let len = s.length;
  if (len === 0 || s === null) return 0;
  if (len === 1) return 1;
  for (let i = 1; i < len; i++) {
    for (let j = i - 1; j >= index; j--) {
      if (s[i] === s[j]) {
        index = j + 1;
        if (i == 1) {
          maxstr = 1;
        }
        break;
      } else {
        if (maxstr < i - j + 1)
          maxstr = i - j + 1;
      }
    }
  }
  return maxstr;
};
```

#### 方法 #2 滑动窗口
#### 复杂度
时间O(n)

```js
let lengthOfLongestSubstring = function(s) {
      let n = s.length;
      let set = new Set();
      let ans = 0, i = 0, j = 0;
      while (i < n && j < n) {
          // try to extend the range [i, j]
          if (!set.has(s.charAt(j))){
              set.add(s.charAt(j++));
              ans = Math.max(ans, j - i);
          }
          else {
              set.delete(s.charAt(i++));
          }
      }
      return ans;
  }
```

#### 方法 #3 扩展的ASCII码 Map存储
#### 复杂度
时间O(n)

```js
let lengthOfLongestSubstring = function(s) {
        let map = new Map(); // map from character's ASCII to its last occured index
        let ans = 0;
        let slow = 0;

        for(let i =0;i<256;i++) map.set(i,-1);

        for (let fast = 0; fast < s.length; fast++) {
            let ch = s.charAt(fast);
            if (map.get(ch) >= slow) {
                ans = Math.max(ans, fast - slow);
                slow = map.get(ch) + 1;
            }
            map.set(ch,fast);
        }

        return Math.max(ans, s.length - slow);
    }
```

#### 方法 #4 扩展的ASCII码 Table数组存储
#### 复杂度
时间O(n)

```js
let lengthOfLongestSubstring = function(s) {
    let start = 0; // current start point of substring without dup
    let maxlen = 0; // max length of substring found
    let table= new Array(256); // hash table for index of each char appeared
    for (let i = 0;i < 256;i++) table[i] = -1; // if char not present, index is -1
    let len = s.length;
    for (let i = 0;i < len;i++) {
        //console.log(table[s[i]]);
        if (table[s[i].codePointAt(0)] != -1) {
            while (start <= table[s[i].codePointAt(0)]) table[s[start++].codePointAt(0)] = -1;
        }
        if (i - start + 1 > maxlen) maxlen = i - start + 1;
        table[s[i].codePointAt(0)] = i;
    }
    return maxlen;
}
```

#### 方法 #5 滑动窗口 使用Map
#### 复杂度
时间O(n)

```js
let lengthOfLongestSubstring = function(s) {
        let n = s.length, ans = 0;
        let map = new Map(); // current index of character
        // try to extend the range [i, j]
        for (let j = 0, i = 0; j < n; j++) {
            if (map.has(s.charAt(j))) {
                i = Math.max(map.get(s.charAt(j)), i);
            }
            ans = Math.max(ans, j - i + 1);
            map.set(s.charAt(j), j + 1);
        }
        return ans;
    }

```

#### 方法 #6 ASCII 128
#### 复杂度
时间O(n)

```js
let lengthOfLongestSubstring = function( s) {
    let n = s.length, ans = 0;
    let index = new Array(128); // current index of character
    for(let i = 0; i < 128;i++) index[i] = -1;
    // try to extend the range [i, j]
    for (let j = 0, i = 0; j < n; j++) {
        i = Math.max(index[s.charAt(j).codePointAt(0)], i);
        ans = Math.max(ans, j - i + 1);
        index[s.charAt(j).codePointAt(0)] = j + 1;
    }
    return ans;
}
```




