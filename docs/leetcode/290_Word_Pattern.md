# 290. Word Pattern
### Tags
1. Hash Table

>Given a pattern and a string str, find if str follows the same pattern.
>
>Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.
>
<strong>Examples:</strong>
```
pattern = "abba", str = "dog cat cat dog" should return true.
pattern = "abba", str = "dog cat cat fish" should return false.
pattern = "aaaa", str = "dog cat cat dog" should return false.
pattern = "abba", str = "dog dog dog dog" should return false.
```
><strong>Notes:</strong>
>
>You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.


### 题意：
给定一个模式和一个字符串，如果发现字符串遵循相同的模式，返回true,不相同则返回false。

### 分析：
比较模式是否匹配，个人想到的方法很简单，就是给字符串和模式都做一个编号，相同的编号就一致，不相同的就不一致，以此来判断。

### 思路：
1. 新建两个Map，一个存储模式字符串，一个存储空格字符串，
2. 比较每个字符串对应的编号是否一致，一致就返回true,不一致就返回false

### Js实现：

#### 方法 #1
#### 复杂度：
时间复杂度O(n)
```js
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
let wordPattern = function(pattern, str) {
    let strArr = str.split(" ");
    let mapPattern = new Map();
    let mapStr = new Map();

    if(strArr.length !== pattern.length){
        return false;
    }

    for(let i = 0; i < strArr.length; i++) {
      mapPattern.set(pattern.charAt(i),i);
      mapStr.set(strArr[i],i);
    }
    //第一种解法108-120ms
    for(let i = 0; i < strArr.length; i++) {
        if(mapStr.get(strArr[i]) !== mapPattern.get(pattern.charAt(i))) {
          return false;
        }
    }
    return true;
};

```

#### 方法 #2

方法#2和#1 基本一致，就是出现在判断的地方不一样。
```js
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
let wordPattern = function(pattern, str) {
    let strArr = str.split(" ");
    let mapPattern = new Map();
    let mapStr = new Map();

    if(strArr.length !== pattern.length){
        return false;
    }

    for(let i = 0; i < strArr.length; i++) {
      mapPattern.set(pattern.charAt(i),i);
      mapStr.set(strArr[i],i);
      //第二种解法128ms;
       if(mapStr.get(strArr[i]) !== mapPattern.get(pattern.charAt(i)) || mapStr.size !== mapPattern.size) {
           return false;
         }
    }
    return true;
};

```

#### 方法 #3

```js
//第三种解法168ms
 var wordPattern = function(pattern, str) {
     var strArr = str.split(' ');
     var obj = {};
     if(strArr.length !== pattern.length) return false;

     for(var i = 0; i < pattern.length; i++) {
         var s = pattern[i];
         s = '1_' + s;

         if(!obj[s] && !obj[strArr[i]]) {
             obj[s] = strArr[i];
             obj[strArr[i]] = s;
         } else {
             if(obj[s] !== strArr[i]) return false;
         }
     }
     return true;
 }

```






