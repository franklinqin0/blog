(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{498:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("img",{staticClass:"medium-zoom",attrs:{src:"/algo/lru-cache.png",alt:"https://leetcode.com/problems/lru-cache"}}),s._v(" "),t("h2",{attrs:{id:"driver-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#driver-code"}},[s._v("#")]),s._v(" Driver Code")]),s._v(" "),t("div",{staticClass:"language-py line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-py"}},[t("code",[s._v("obj "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" LRUCache"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("capacity"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nparam_1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" obj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nobj"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("put"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"solution"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solution"}},[s._v("#")]),s._v(" Solution")]),s._v(" "),t("h3",{attrs:{id:"cheating-w-built-in-orderdict"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cheating-w-built-in-orderdict"}},[s._v("#")]),s._v(" Cheating w/ Built-in OrderDict")]),s._v(" "),t("div",{staticClass:"language-py line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-py"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LRUCache")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("collections"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("OrderedDict"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("__init__")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" capacity"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("super")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("__init__"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("capacity "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" capacity\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" key "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("move_to_end"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("put")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" key "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("move_to_end"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" value\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("len")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("capacity"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("popitem"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("last"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h3",{attrs:{id:"hashmap-doubly-linked-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hashmap-doubly-linked-list"}},[s._v("#")]),s._v(" HashMap & Doubly Linked List")]),s._v(" "),t("p",[t("code",[s._v("cache")]),s._v(" is a hashmap that stores keys, while "),t("code",[s._v("head")]),s._v(" and "),t("code",[s._v("tail")]),s._v(" define a doubly linked list that makes adding, moving, and removing nodes "),t("eq",[t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[t("semantics",[t("mrow",[t("mi",[s._v("O")]),t("mo",{attrs:{stretchy:"false"}},[s._v("(")]),t("mn",[s._v("1")]),t("mo",{attrs:{stretchy:"false"}},[s._v(")")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("O(1)")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[s._v("O")]),t("span",{staticClass:"mopen"},[s._v("(")]),t("span",{staticClass:"mord"},[s._v("1")]),t("span",{staticClass:"mclose"},[s._v(")")])])])])]),s._v(".")],1),s._v(" "),t("div",{staticClass:"custom-block theorem"},[t("p",{staticClass:"title"},[s._v("Complexity")]),t("p",[s._v("time: "),t("eq",[t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[t("semantics",[t("mrow",[t("mi",[s._v("O")]),t("mo",{attrs:{stretchy:"false"}},[s._v("(")]),t("mn",[s._v("1")]),t("mo",{attrs:{stretchy:"false"}},[s._v(")")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("O(1)")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[s._v("O")]),t("span",{staticClass:"mopen"},[s._v("(")]),t("span",{staticClass:"mord"},[s._v("1")]),t("span",{staticClass:"mclose"},[s._v(")")])])])])]),s._v(" (all operations)"),t("br"),s._v("\nspace: "),t("eq",[t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[t("semantics",[t("mrow",[t("mi",[s._v("O")]),t("mo",{attrs:{stretchy:"false"}},[s._v("(")]),t("mi",[s._v("n")]),t("mo",{attrs:{stretchy:"false"}},[s._v(")")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("O(n)")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[s._v("O")]),t("span",{staticClass:"mopen"},[s._v("(")]),t("span",{staticClass:"mord mathdefault"},[s._v("n")]),t("span",{staticClass:"mclose"},[s._v(")")])])])])])],1)]),t("div",{staticClass:"language-py line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-py"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DLinkedNode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("__init__")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("key "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" key\n        self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("value "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" value\n        self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prev "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),s._v("\n        self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LRUCache")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("__init__")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" capacity"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cache "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("dict")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# use dummy head and tail nodes")]),s._v("\n        self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("head "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" DLinkedNode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tail "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" DLinkedNode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("head"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tail\n        self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tail"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prev "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("head\n        self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("capacity "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" capacity\n        self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("size "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" key "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cache"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# if key exists, locate using HashMap, then move to head")]),s._v("\n        node "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cache"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("moveToHead"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("value\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("put")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" key "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cache"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# if key doesn't exist, create a new node")]),s._v("\n            node "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" DLinkedNode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# add to HashMap")]),s._v("\n            self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cache"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" node\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# add to head of DDL")]),s._v("\n            self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("addToHead"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("size "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("size "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("capacity"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# if exceeds capacity, delete tail node of DDL")]),s._v("\n                removed "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("removeTail"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# delete corresponding item in HashMap")]),s._v("\n                self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cache"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pop"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("removed"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("size "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# if `key` exists, locate using HashMap, modify `value` and move to `head`")]),s._v("\n            node "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cache"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("value "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" value\n            self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("moveToHead"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("addToHead")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prev "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("head\n        node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("head"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v("\n        self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("head"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prev "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" node\n        self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("head"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" node\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("removeNode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prev"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),s._v("\n        node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prev "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prev\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("moveToHead")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("removeNode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("addToHead"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("removeTail")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        node "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tail"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prev\n        self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("removeNode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" node\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);