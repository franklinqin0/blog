(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{558:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("img",{staticClass:"medium-zoom",attrs:{src:"/algo/merge-two-sorted-lists.png",alt:"https://leetcode.com/problems/merge-two-sorted-lists"}}),t._v(" "),s("h2",{attrs:{id:"solution"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#solution"}},[t._v("#")]),t._v(" Solution")]),t._v(" "),s("p",[t._v("Let "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("n")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("n")])])])])]),t._v(" be the length of "),s("code",[t._v("l1")]),t._v(" and "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("m")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("m")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("m")])])])])]),t._v(" be the length of "),s("code",[t._v("l2")]),t._v(".")],1),t._v(" "),s("h3",{attrs:{id:"vanilla-iteration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vanilla-iteration"}},[t._v("#")]),t._v(" Vanilla Iteration")]),t._v(" "),s("p",[t._v("Do all the appending in while loop, and return "),s("code",[t._v("dummy.next")]),t._v(" at the end.")]),t._v(" "),s("div",{staticClass:"custom-block theorem"},[s("p",{staticClass:"title"},[t._v("Complexity")]),s("p",[t._v("time: "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("O")]),s("mo",{attrs:{stretchy:"false"}},[t._v("(")]),s("mi",[t._v("n")]),s("mo",[t._v("+")]),s("mi",[t._v("m")]),s("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(n + m)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathdefault"},[t._v("n")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),s("span",{staticClass:"mbin"},[t._v("+")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("m")]),s("span",{staticClass:"mclose"},[t._v(")")])])])])]),s("br"),t._v("\nspace: "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("O")]),s("mo",{attrs:{stretchy:"false"}},[t._v("(")]),s("mn",[t._v("1")]),s("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(1)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord"},[t._v("1")]),s("span",{staticClass:"mclose"},[t._v(")")])])])])])],1)]),s("div",{staticClass:"language-py line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mergeTwoLists")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" l1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ListNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" l2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ListNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ListNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    dummy "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ListNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    curr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dummy\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" l1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("or")]),t._v(" l2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" l1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            curr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l2\n            l2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" l2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            curr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l1\n            l1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" l1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" l2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            curr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l1\n            l1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            curr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l2\n            l2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n        curr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" curr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" dummy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br")])]),s("h3",{attrs:{id:"improved-iteration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#improved-iteration"}},[t._v("#")]),t._v(" Improved Iteration")]),t._v(" "),s("p",[t._v("Once either "),s("code",[t._v("l1")]),t._v(" or "),s("code",[t._v("l2")]),t._v(" is "),s("code",[t._v("None")]),t._v(", exit while loop, append the nonempty list and return "),s("code",[t._v("dummy.next")]),t._v(".")]),t._v(" "),s("div",{staticClass:"custom-block theorem"},[s("p",{staticClass:"title"},[t._v("Complexity")]),s("p",[t._v("time: "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("O")]),s("mo",{attrs:{stretchy:"false"}},[t._v("(")]),s("mi",[t._v("n")]),s("mo",[t._v("+")]),s("mi",[t._v("m")]),s("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(n + m)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathdefault"},[t._v("n")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),s("span",{staticClass:"mbin"},[t._v("+")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("m")]),s("span",{staticClass:"mclose"},[t._v(")")])])])])]),s("br"),t._v("\nspace: "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("O")]),s("mo",{attrs:{stretchy:"false"}},[t._v("(")]),s("mn",[t._v("1")]),s("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(1)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord"},[t._v("1")]),s("span",{staticClass:"mclose"},[t._v(")")])])])])])],1)]),s("div",{staticClass:"language-py line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mergeTwoLists")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" l1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ListNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" l2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ListNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ListNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    dummy "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ListNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    curr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dummy\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" l1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" l2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" l1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" l2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            curr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l1\n            l1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            curr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l2\n            l2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n        curr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" curr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# exactly 1 of l1 and l2 is not None now")]),t._v("\n    curr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" l1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" l1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" l2\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" dummy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br")])]),s("h3",{attrs:{id:"recursion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#recursion"}},[t._v("#")]),t._v(" Recursion")]),t._v(" "),s("p",[t._v("If either "),s("code",[t._v("l1")]),t._v(" or "),s("code",[t._v("l2")]),t._v(" is initially "),s("code",[t._v("None")]),t._v(", can simply return the nonempty list."),s("br"),t._v("\nElse, determine which of "),s("code",[t._v("l1")]),t._v(" and "),s("code",[t._v("l2")]),t._v(" has a smaller head, and recursively set the "),s("code",[t._v("next")]),t._v(" value for that head to the next merge result.")]),t._v(" "),s("p",[t._v("The recursion will eventually terminate b/c each time the input is smaller and end at base case of 1 of 2 lists being "),s("code",[t._v("None")]),t._v(".")]),t._v(" "),s("div",{staticClass:"custom-block theorem"},[s("p",{staticClass:"title"},[t._v("Complexity")]),s("p",[t._v("time: "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("O")]),s("mo",{attrs:{stretchy:"false"}},[t._v("(")]),s("mi",[t._v("n")]),s("mo",[t._v("+")]),s("mi",[t._v("m")]),s("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(n + m)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathdefault"},[t._v("n")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),s("span",{staticClass:"mbin"},[t._v("+")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("m")]),s("span",{staticClass:"mclose"},[t._v(")")])])])])]),s("br"),t._v("\nspace: "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("O")]),s("mo",{attrs:{stretchy:"false"}},[t._v("(")]),s("mi",[t._v("n")]),s("mo",[t._v("+")]),s("mi",[t._v("m")]),s("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(n + m)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathdefault"},[t._v("n")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),s("span",{staticClass:"mbin"},[t._v("+")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathdefault"},[t._v("m")]),s("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v(" (due to implicit stack space)")],1)]),s("div",{staticClass:"language-py line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mergeTwoLists")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" l1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ListNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" l2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ListNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ListNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" l1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" l2\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" l2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" l1\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" l1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" l2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        l1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mergeTwoLists"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" l2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" l1\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        l2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mergeTwoLists"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" l2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" l2\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);