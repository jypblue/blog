# 39. Combination Sum
### Tags
1. Array
2. Backtracking

>Given a set of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

>The same repeated number may be chosen from C unlimited number of times.
>
><strong>Note:</strong>
>* All numbers (including target) will be positive integers.
>* The solution set must not contain duplicate combinations.
>
>For example, given candidate set `[2, 3, 6, 7]` and target `7`,
>A solution set is:
>
```
[
  [7],
  [2, 2, 3]
]
```

### 题意：
给定一组候选数（C）和目标数（T），查找在C中的所有数的组合相加等于T。
相同的重复数可以从C无限次数选择。

### 分析：
本题跟题目1. Two Sum很相似，都是求出可以相加等于目标数，差异在于前者求位置坐标值，本题返回能组合的数字数组。所以，这个题目我们可以参考题目1. Two Sum的方式，通过目标值减去数组中小于它的值，直到可以刚好减完为止，然后，将期间的每个数值存储到数组中即可，区别在于本题需使用递归调用

### 思路：
根据上面的分析，基本有了一个大概的思路，具体到每一步，就是：
1. 将数组升序排序
2. 创建递归函数，目标值减去数组中的值，如果目标值还大于数组中的值，递归调用继续，如果等于就将这几个数字存入结果数组中
3. 直到满足条件的数字循环完毕，返回结果数组

### Js实现：
#### 复杂度
时间复杂度O(n<sup>2</sup>)

```js
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

let combinationSum = function(candidates, target) {
    if(candidates ===null || candidates.length ===0){
        return;
    }
    let result = [];
    let ans = new Array(target);
    candidates.sort(function(a,b){
        return a - b;
    });
    //console.log(candidates);
    fnResult(candidates,target,0,result,ans, 0);
    return result;
};

function fnResult(cans,target,pos,result,ans,num) {
     for( let i = pos;i <cans.length; i++){
           if( target === cans[i]){
                let aa = [];
                for( let ii = 0; ii<num; ii++) {
                    aa.push(ans[ii]);
                }
                aa.push(cans[i]);
                result.push(aa);
                return;
           }
           else if(target > cans[i]){
                ans[num] = cans[i];
                fnResult(cans,target-cans[i],i,result,ans,num+1);
              //  console.log(ans);
        }else
            return ;
       }
}
```










