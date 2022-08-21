(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{520:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("img",{staticClass:"medium-zoom",attrs:{src:"/algo/palindrome-linked-list.png",alt:"https://leetcode.com/problems/palindrome-linked-list"}}),s._v(" "),t("h2",{attrs:{id:"definition-for-singly-linked-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#definition-for-singly-linked-list"}},[s._v("#")]),s._v(" Definition for Singly-Linked List")]),s._v(" "),t("div",{staticClass:"language-py line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-py"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ListNode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("__init__")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" val"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" val\n        self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"solution"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solution"}},[s._v("#")]),s._v(" Solution")]),s._v(" "),t("p",[s._v("All solutions below take linear time.")]),s._v(" "),t("h3",{attrs:{id:"linear-space"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linear-space"}},[s._v("#")]),s._v(" Linear Space")]),s._v(" "),t("h4",{attrs:{id:"two-pointers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#two-pointers"}},[s._v("#")]),s._v(" Two Pointers")]),s._v(" "),t("div",{staticClass:"language-py line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-py"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("isPalindrome")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" head"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ListNode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bool")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    vals "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    curr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" head\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" curr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        vals"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("append"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("curr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        curr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" curr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" vals "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" vals"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h4",{attrs:{id:"recursion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#recursion"}},[s._v("#")]),s._v(" Recursion")]),s._v(" "),t("div",{staticClass:"language-py line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-py"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("isPalindrome")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" head"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ListNode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bool")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("front "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" head\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("check")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("curr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("head"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" curr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" check"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("curr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" curr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("front"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),s._v("\n            self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("front "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("front"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" check"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h2",{attrs:{id:"follow-up"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#follow-up"}},[s._v("#")]),s._v(" Follow Up")]),s._v(" "),t("div",{staticClass:"custom-block theorem"},[t("p",{staticClass:"title"}),t("p",[s._v("Could you do it in "),t("eq",[t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[t("semantics",[t("mrow",[t("mi",[s._v("O")]),t("mo",{attrs:{stretchy:"false"}},[s._v("(")]),t("mi",[s._v("n")]),t("mo",{attrs:{stretchy:"false"}},[s._v(")")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("O(n)")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[s._v("O")]),t("span",{staticClass:"mopen"},[s._v("(")]),t("span",{staticClass:"mord mathdefault"},[s._v("n")]),t("span",{staticClass:"mclose"},[s._v(")")])])])])]),s._v(" time and "),t("eq",[t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[t("semantics",[t("mrow",[t("mi",[s._v("O")]),t("mo",{attrs:{stretchy:"false"}},[s._v("(")]),t("mn",[s._v("1")]),t("mo",{attrs:{stretchy:"false"}},[s._v(")")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("O(1)")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[s._v("O")]),t("span",{staticClass:"mopen"},[s._v("(")]),t("span",{staticClass:"mord"},[s._v("1")]),t("span",{staticClass:"mclose"},[s._v(")")])])])])]),s._v(" space?")],1)]),t("h3",{attrs:{id:"constant-space"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#constant-space"}},[s._v("#")]),s._v(" Constant Space")]),s._v(" "),t("h4",{attrs:{id:"fast-and-slow-pointers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fast-and-slow-pointers"}},[s._v("#")]),s._v(" Fast and Slow Pointers")]),s._v(" "),t("p",[s._v("Need to reverse then 2nd half to save space. As good practice, should reverse it back before return.")]),s._v(" "),t("div",{staticClass:"language-py line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-py"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("isPalindrome")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" head"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ListNode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bool")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" head"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# find tail node of the 1st half")]),s._v("\n    fst_half_end "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("end_of_fst_half"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("head"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# reverse the 2nd half")]),s._v("\n    snd_half_start "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("reverse_list"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fst_half_end"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# check if palindrome")]),s._v("\n    res "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),s._v("\n    fst"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" snd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" head"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" snd_half_start\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" res "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("and")]),s._v(" snd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" fst"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" snd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("val"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            res "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),s._v("\n        fst"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" snd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" fst"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" snd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# restore linked list")]),s._v("\n    fst_half_end"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("reverse_list"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("snd_half_start"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" res\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("end_of_fst_half")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" head"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    fast "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" head\n    slow "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" head\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" fast"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("and")]),s._v(" fast"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        fast "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" fast"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v("\n        slow "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" slow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" slow\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("reverse_list")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" head"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    prev "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),s._v("\n    curr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" head\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" curr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        temp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" curr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v("\n        curr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" prev\n        prev "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" curr\n        curr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" temp\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" prev\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);