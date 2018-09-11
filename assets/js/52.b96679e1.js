(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{166:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"_7-reverse-integer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-reverse-integer","aria-hidden":"true"}},[s._v("#")]),s._v(" 7. Reverse Integer")]),s._v(" "),a("h3",{attrs:{id:"tags"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tags","aria-hidden":"true"}},[s._v("#")]),s._v(" Tags")]),s._v(" "),a("ol",[a("li",[s._v("String")])]),s._v(" "),a("blockquote",[a("p",[s._v("Reverse digits of an integer.")])]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("Example1:")]),s._v(" x = 123, return 321")]),s._v(" "),a("p",[a("strong",[s._v("Example2:")]),s._v(" x = -123, return -321")])]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("Have you thought about this?")])])]),s._v(" "),a("p",[s._v("Here are some good questions to ask before coding. Bonus points for you if you have already thought through this!")]),s._v(" "),a("blockquote",[a("p",[s._v("If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.")])]),s._v(" "),a("blockquote",[a("p",[s._v("Did you notice that the reversed integer might overflow? Assume the input is a 32-bit integer, then the reverse of 1000000003 overflows. How should you handle such cases?")])]),s._v(" "),a("blockquote",[a("p",[s._v("For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.")])]),s._v(" "),a("h3",{attrs:{id:"题意："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题意：","aria-hidden":"true"}},[s._v("#")]),s._v(" 题意：")]),s._v(" "),a("p",[s._v("求整数的反向数字")]),s._v(" "),a("h3",{attrs:{id:"分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分析","aria-hidden":"true"}},[s._v("#")]),s._v(" 分析")]),s._v(" "),a("p",[s._v("题目很简单，就是数字每位的数字左右取反，值得注意的是题目加了边界值，提示中已经说了关键信息 "),a("code",[s._v("32-bit integer")]),s._v("，Max是2"),a("sup",[s._v("31")]),s._v(".剩下的注意一下正负号即可。")]),s._v(" "),a("h3",{attrs:{id:"思路："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路：","aria-hidden":"true"}},[s._v("#")]),s._v(" 思路：")]),s._v(" "),a("ol",[a("li",[s._v("将数字取正，然后反向（具体方法见代码）")]),s._v(" "),a("li",[s._v("判断正负，添加符号")]),s._v(" "),a("li",[s._v("判断是否越界，按照提示越界就返回0")])]),s._v(" "),a("h3",{attrs:{id:"js实现："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js实现：","aria-hidden":"true"}},[s._v("#")]),s._v(" Js实现：")]),s._v(" "),a("h4",{attrs:{id:"复杂度："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复杂度：","aria-hidden":"true"}},[s._v("#")]),s._v(" 复杂度：")]),s._v(" "),a("p",[s._v("时间复杂度O(n)")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("/**\n * @param {number} x\n * @return {number}\n */")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),a("span",{attrs:{class:"token function-variable function"}},[s._v("reverse")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("function")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" Max "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("2147483648")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" abs "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" Math"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("abs")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" res "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("0")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("while")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("abs"),a("span",{attrs:{class:"token operator"}},[s._v("!==")]),a("span",{attrs:{class:"token number"}},[s._v("0")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        res "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" res"),a("span",{attrs:{class:"token operator"}},[s._v("*")]),a("span",{attrs:{class:"token number"}},[s._v("10")]),a("span",{attrs:{class:"token operator"}},[s._v("+")]),s._v("abs"),a("span",{attrs:{class:"token operator"}},[s._v("%")]),a("span",{attrs:{class:"token number"}},[s._v("10")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        abs "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" Math"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("floor")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("abs"),a("span",{attrs:{class:"token operator"}},[s._v("/")]),a("span",{attrs:{class:"token number"}},[s._v("10")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("if")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x "),a("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("0")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        res "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("res"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("if")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res "),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" Max "),a("span",{attrs:{class:"token operator"}},[s._v("||")]),s._v(" res "),a("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("Max"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("0")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" res"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])])])}],!1,null,null,null);e.options.__file="7_Reverse_Integer.md";t.default=e.exports}}]);