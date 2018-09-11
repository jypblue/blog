(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{219:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"_100-same-tree"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_100-same-tree","aria-hidden":"true"}},[s._v("#")]),s._v(" 100. Same Tree")]),s._v(" "),a("h3",{attrs:{id:"tags"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tags","aria-hidden":"true"}},[s._v("#")]),s._v(" Tags")]),s._v(" "),a("ol",[a("li",[s._v("Tree")]),s._v(" "),a("li",[s._v("Depth-first Search")])]),s._v(" "),a("blockquote",[a("p",[s._v("Given two binary trees, write a function to check if they are equal or not.")]),s._v(" "),a("p",[s._v("Two binary trees are considered equal if they are structurally identical and the nodes have the same value.")])]),s._v(" "),a("h3",{attrs:{id:"题意："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题意：","aria-hidden":"true"}},[s._v("#")]),s._v(" 题意：")]),s._v(" "),a("p",[s._v("给两棵树，写一个函数来判断这两棵树是否相同. 判定树是否相同的条件为这两棵树的结构相同，并且每个节点的值相同.")]),s._v(" "),a("h3",{attrs:{id:"分析："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分析：","aria-hidden":"true"}},[s._v("#")]),s._v(" 分析：")]),s._v(" "),a("p",[s._v("题目很简单，直接利用DFS遍历比较两棵树即可")]),s._v(" "),a("h3",{attrs:{id:"思路："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路：","aria-hidden":"true"}},[s._v("#")]),s._v(" 思路：")]),s._v(" "),a("ol",[a("li",[s._v("判断树是否为null")]),s._v(" "),a("li",[s._v("DFS判断val是否相等，左右节点是否一致")])]),s._v(" "),a("h3",{attrs:{id:"复杂度："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复杂度：","aria-hidden":"true"}},[s._v("#")]),s._v(" 复杂度：")]),s._v(" "),a("p",[s._v("时间复杂度O(n)")]),s._v(" "),a("h3",{attrs:{id:"js实现："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js实现：","aria-hidden":"true"}},[s._v("#")]),s._v(" Js实现：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("/**\n * @param {TreeNode} p\n * @param {TreeNode} q\n * @return {boolean}\n */")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),a("span",{attrs:{class:"token function-variable function"}},[s._v("isSameTree")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("function")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" q"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("if")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p "),a("span",{attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("&&")]),s._v(" q "),a("span",{attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("null")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{attrs:{class:"token boolean"}},[s._v("true")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("if")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p "),a("span",{attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("||")]),s._v(" q "),a("span",{attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("null")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{attrs:{class:"token boolean"}},[s._v("false")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),a("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" isLeftSame "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("isSameTree")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("left"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" q"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("left"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" isRightSame "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("isSameTree")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("right"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" q"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("right"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),a("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" p"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val"),a("span",{attrs:{class:"token operator"}},[s._v("==")]),s._v("q"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val "),a("span",{attrs:{class:"token operator"}},[s._v("&&")]),s._v(" isLeftSame "),a("span",{attrs:{class:"token operator"}},[s._v("&&")]),s._v(" isRightSame"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])])])}],!1,null,null,null);e.options.__file="100_Same_Tree.md";t.default=e.exports}}]);