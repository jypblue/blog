# 1. Two Sum

### Tags

1. Array
2. Hash Table

> Given an array of integers, return indices of the two numbers such that they add up to a specific target.
>
> You may assume that each input would have exactly one solution.
>
> **Example:**
```js
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```
>

### 题意：

给定一个数组和一个目标值，如果数组中的两个数字相加可以与目标值相等，则返回这两个数在该数组中的位置坐标。输出的要求：1、坐标较小的放在前面，较大的放在后面。2、这俩坐标不能为零。

### 分析：

根据题意，我们可以提取出以下三点关键信息：
1. 求出来的坐标值要按升序排列 => 做排序
2. 有且只有一组答案符合要求 => 找到符合条件的两个数存入，终止程序，返回答案即可。
3. 涉及到的数据都是键值对(key,value) => 数据类型Map

### 思路：

通过上面的分析，我们可以使用ES6的Map来存储nums，通过遍历数组获得n2 = target - nums[i],之后在map中查找n2这个值，如果Map中存在这个值,再比较i和idx的大小，按升序存入数组中，最后跳出返回数组即可。
总结步骤如下：
1. 将数组中的value 和 key 存储到一个Map中，value作为Map的key，key作为Map的value;
2. 新建一个空得result返回数组，循环目标数组，用目标值减去数组中得每一个值，在剩于的数值中如果能在Map中找到对应的值，则这两个数满足条件;
3. 比较两个数字的key值，按升序存入新建的result数组中.

### 复杂度：

循环一次，所以时间复杂度为O(n)

### Js实现：

``` js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return
 */
let twoSum = function(nums, target) {
    let result = [], n2 = null, idx = null;
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        map.set(nums[i],i);
    }
    for(let i = 0; i < nums.length - 1; i++) {
        n2 = target - nums[i];
        idx = map.get(n2);
        if(idx !== null && idx > i) {
            result[0] = i;
            result[1] = idx;
            break;
        }
    }
    return result;
};

```