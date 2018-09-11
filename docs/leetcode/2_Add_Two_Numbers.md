# 2. Add Two Numbers

### Tags

1. Linked List
2. Math

>You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

>**Input:** `(2 -> 4 -> 3) + (5 -> 6 -> 4)`
>
>**Output:** `7 -> 0 -> 8`

### 题意：

有两个表示两个非负数字的链表。这些数字以相反的顺序存储，每个节点都包含一个数字。
相加两个数字，并将其作为链接列表返回。

### 分析：

根据上面题意所示，按照题目要求，直接相加即可，但是有几点还是需要注意一下：
1. 每个节点的进位问题 => 将进位的数字传给后位相加
2. 两个链表的状态情况得考虑完整 => 注意为空不为空的所有情况
3. 第三位出现进位情况 => 第三位超过10则新增一位，并添加进位的数值

### 思路：

按照上面的分析，我们来分解一下，简单理一下思路：
1. 新建一个ListNode作为根节点
2. 分成4种可能出现的情况：1、l1,l2都为空；2、l1,l2都不为空；3、l1不为空，l2为空；4、l2不为空l1为空。每种情况的相加进位
3. 如果最后一位再进位，节点再多添加一个
4. 返回根节点后一位的ListNode

### Js实现：

#### 方法 #1

#### 复杂度：

迭代写法，以节点个数为准，所以时间复杂度为O(n)，空间复杂度O(1)

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = function(l1, l2) {
  if (l1 === null && l2 === null) {
    return null;
  }
  //新建一个ListNode作为根节点
  let node = new ListNode(0);
  let point = node;
  let val = 0;
  //当l1和l2都不为空得时候，求得各个节点的值
  while (l1 !== null && l2 !== null) {
    let sum = val + l1.val + l2.val;
    point.next = new ListNode(sum % 10);
    val = Math.floor(sum / 10);
    l1 = l1.next;
    l2 = l2.next;
    point = point.next;
  }
  //当l1不为空，l2为空得时候
  while (l1 !== null) {
    let sum = val + l1.val;
    point.next = new ListNode(sum % 10);
    val = Math.floor(sum / 10);
    l1 = l1.next;
    point = point.next;
  }
  //当l2不为空，l1为空的时候
  while (l2 !== null) {
    let sum = val + l2.val;
    point.next = new ListNode(sum % 10);
    val = Math.floor(sum / 10);
    l2 = l2.next;
    point = point.next;
  }
  //最后一位如果进一位
  if (val !== 0) {
    point.next = new ListNode(val);
  }
  return node.next;
};
```

#### 方法 #2

#### 复杂度

循环迭代一次，所以时间复杂度 O(n)，空间复杂度 O(1)

```js
let addTwoNumbers = function(l1,l2) {
    let node = new ListNode(-1); // 头节点
    let carry = 0;
    let prev = node;
    for (let pa = l1, pb = l2;
         pa !== null || pb !== null;
         pa = pa === null ? null : pa.next,
         pb = pb === null ? null : pb.next,
         prev = prev.next) {
            let ai = pa === null ? 0 : pa.val;
            let bi = pb === null ? 0 : pb.val;
            let value = (ai + bi + carry) % 10;
            carry = Math.floor((ai + bi + carry) / 10);
            prev.next = new ListNode(value); // 尾插法
    }
    if (carry > 0) prev.next = new ListNode(carry);
    return node.next;
}

```

