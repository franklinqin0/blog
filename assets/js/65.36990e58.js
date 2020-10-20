(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{576:function(s,t,a){"use strict";a.r(t);var e=a(2),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("img",{staticClass:"medium-zoom",attrs:{src:"/algo/number-of-ways-to-stay-in-the-same-place-after-some-steps.png",alt:"https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps"}}),s._v(" "),a("h2",{attrs:{id:"solution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solution"}},[s._v("#")]),s._v(" Solution")]),s._v(" "),a("p",[s._v("First of all, that's a long title 😂")]),s._v(" "),a("p",[s._v("This problem is actually "),a("code",[s._v("hard")]),s._v(" if done in DP, but DFS is easier.")]),s._v(" "),a("h3",{attrs:{id:"dfs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dfs"}},[s._v("#")]),s._v(" DFS")]),s._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("fail on LeetCode")]),s._v(" "),a("p",[s._v("There is a "),a("a",{attrs:{href:"https://www.lintcode.com/problem/number-of-ways-to-stay-in-the-same-place-after-some-steps-i",target:"_blank",rel:"noopener noreferrer"}},[s._v("similar problem on LintCode"),a("OutboundLink")],1),s._v(" but would pass b/c the "),a("code",[s._v("steps")]),s._v(" is only upto "),a("code",[s._v("15")]),s._v(". However, on LeetCode, "),a("strong",[s._v("the DFS solution would fail")]),s._v(" as "),a("code",[s._v("steps")]),s._v(" is upto "),a("code",[s._v("500")]),s._v(".")])]),s._v(" "),a("p",[s._v("Base conditions for DFS recursion:")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("pos")]),s._v(" out of array, return "),a("code",[s._v("0")])]),s._v(" "),a("li",[a("code",[s._v("steps")]),s._v(" is 0 and return "),a("code",[s._v("pos==0")]),s._v(" (could further be simplified to: "),a("code",[s._v("if pos==steps: return 1")]),s._v(")")]),s._v(" "),a("li",[a("code",[s._v("pos>steps")]),s._v(", not enough steps to go back to starting point, return "),a("code",[s._v("0")]),s._v(" (this condition prunes some branches and would avoid TLS at input "),a("code",[s._v("steps=15")]),s._v(", "),a("code",[s._v("arrLen=8")]),s._v(")")])]),s._v(" "),a("p",[s._v("If we don't have the condition "),a("code",[s._v("if pos>steps")]),s._v(" to eliminate branches, would TLS on input "),a("code",[s._v("steps=15")]),s._v(", "),a("code",[s._v("arrLen=8")]),s._v(".")]),s._v(" "),a("p",[s._v("Complexity:")]),s._v(" "),a("ul",[a("li",[s._v("time: "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[s._v("O")]),a("mo",{attrs:{stretchy:"false"}},[s._v("(")]),a("msup",[a("mn",[s._v("3")]),a("mi",[s._v("n")])],1),a("mo",{attrs:{stretchy:"false"}},[s._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("O(3^n)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[s._v("O")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[s._v("3")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.664392em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mathdefault mtight"},[s._v("n")])])])])])])])]),a("span",{staticClass:"mclose"},[s._v(")")])])])])]),s._v(" where "),a("code",[s._v("n")]),s._v(" is "),a("code",[s._v("steps")])],1),s._v(" "),a("li",[s._v("space: "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[s._v("O")]),a("mo",{attrs:{stretchy:"false"}},[s._v("(")]),a("msup",[a("mn",[s._v("3")]),a("mi",[s._v("n")])],1),a("mo",{attrs:{stretchy:"false"}},[s._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("O(3^n)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[s._v("O")]),a("span",{staticClass:"mopen"},[s._v("(")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[s._v("3")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.664392em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mathdefault mtight"},[s._v("n")])])])])])])])]),a("span",{staticClass:"mclose"},[s._v(")")])])])])]),s._v(" (implicit stack space is the max width of tree)")],1)]),s._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("numWays")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" steps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" arrLen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    MOD "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dfs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("steps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" pos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" pos"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("or")]),s._v(" pos"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v("arrLen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" steps"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" pos"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# can't get back")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" pos"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("steps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dfs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("steps"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" pos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" dfs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("steps"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" pos"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" dfs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("steps"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" pos"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("MOD\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" dfs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("steps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("h3",{attrs:{id:"recursive-dp-cheating"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recursive-dp-cheating"}},[s._v("#")]),s._v(" Recursive DP - Cheating")]),s._v(" "),a("p",[s._v("Basically the same as "),a("a",{attrs:{href:"#dfs"}},[s._v("DFS")]),s._v(", but cache the calculated values using decorator "),a("code",[s._v("lru_cache")]),s._v(" in "),a("code",[s._v("functools")]),s._v(" to store some branches' result.")]),s._v(" "),a("p",[s._v("Import:")]),s._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" functools "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" lru_cache\n")])])]),a("p",[s._v("Use:")]),s._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@lru_cache")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dfs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("steps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" pos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# same as before")]),s._v("\n")])])]),a("h3",{attrs:{id:"recursive-dp-redo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recursive-dp-redo"}},[s._v("#")]),s._v(" Recursive DP (REDO)")]),s._v(" "),a("p",[s._v("C++\nhttps://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/discuss/436117/C%2B%2B-Recursive-DP-(Memoization)")]),s._v(" "),a("p",[s._v("Python\nhttps://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/discuss/436677/Python-DP")])])}),[],!1,null,null,null);t.default=n.exports}}]);