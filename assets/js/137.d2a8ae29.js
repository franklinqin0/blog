(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{547:function(s,t,a){"use strict";a.r(t);var e=a(2),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"problem"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#problem"}},[s._v("#")]),s._v(" Problem")]),s._v(" "),t("img",{staticClass:"medium-zoom",attrs:{src:"/algo/single-number-ii.png",alt:"https://www.lintcode.com/problem/single-number-ii"}}),s._v(" "),t("h2",{attrs:{id:"solution"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solution"}},[s._v("#")]),s._v(" Solution")]),s._v(" "),t("h3",{attrs:{id:"hashset"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hashset"}},[s._v("#")]),s._v(" HashSet")]),s._v(" "),t("p",[s._v("Convert an input array into HashSet and then to compare the tripled sum of the set with the array sum:")]),s._v(" "),t("p",[t("eq",[t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[t("semantics",[t("mrow",[t("mn",[s._v("3")]),t("mo",[s._v("×")]),t("mo",{attrs:{stretchy:"false"}},[s._v("(")]),t("mi",[s._v("a")]),t("mo",[s._v("+")]),t("mi",[s._v("b")]),t("mo",[s._v("+")]),t("mi",[s._v("c")]),t("mo",{attrs:{stretchy:"false"}},[s._v(")")]),t("mo",[s._v("−")]),t("mo",{attrs:{stretchy:"false"}},[s._v("(")]),t("mi",[s._v("a")]),t("mo",[s._v("+")]),t("mi",[s._v("a")]),t("mo",[s._v("+")]),t("mi",[s._v("a")]),t("mo",[s._v("+")]),t("mi",[s._v("b")]),t("mo",[s._v("+")]),t("mi",[s._v("b")]),t("mo",[s._v("+")]),t("mi",[s._v("b")]),t("mo",[s._v("+")]),t("mi",[s._v("c")]),t("mo",{attrs:{stretchy:"false"}},[s._v(")")]),t("mo",[s._v("=")]),t("mn",[s._v("2")]),t("mi",[s._v("c")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("3 \\times (a + b + c) - (a + a + a + b + b + b + c) = 2c")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.72777em","vertical-align":"-0.08333em"}}),t("span",{staticClass:"mord"},[s._v("3")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),t("span",{staticClass:"mbin"},[s._v("×")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mopen"},[s._v("(")]),t("span",{staticClass:"mord mathdefault"},[s._v("a")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),t("span",{staticClass:"mbin"},[s._v("+")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.77777em","vertical-align":"-0.08333em"}}),t("span",{staticClass:"mord mathdefault"},[s._v("b")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),t("span",{staticClass:"mbin"},[s._v("+")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mord mathdefault"},[s._v("c")]),t("span",{staticClass:"mclose"},[s._v(")")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),t("span",{staticClass:"mbin"},[s._v("−")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mopen"},[s._v("(")]),t("span",{staticClass:"mord mathdefault"},[s._v("a")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),t("span",{staticClass:"mbin"},[s._v("+")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.66666em","vertical-align":"-0.08333em"}}),t("span",{staticClass:"mord mathdefault"},[s._v("a")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),t("span",{staticClass:"mbin"},[s._v("+")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.66666em","vertical-align":"-0.08333em"}}),t("span",{staticClass:"mord mathdefault"},[s._v("a")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),t("span",{staticClass:"mbin"},[s._v("+")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.77777em","vertical-align":"-0.08333em"}}),t("span",{staticClass:"mord mathdefault"},[s._v("b")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),t("span",{staticClass:"mbin"},[s._v("+")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.77777em","vertical-align":"-0.08333em"}}),t("span",{staticClass:"mord mathdefault"},[s._v("b")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),t("span",{staticClass:"mbin"},[s._v("+")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.77777em","vertical-align":"-0.08333em"}}),t("span",{staticClass:"mord mathdefault"},[s._v("b")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),t("span",{staticClass:"mbin"},[s._v("+")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mord mathdefault"},[s._v("c")]),t("span",{staticClass:"mclose"},[s._v(")")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),t("span",{staticClass:"mrel"},[s._v("=")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),t("span",{staticClass:"mord"},[s._v("2")]),t("span",{staticClass:"mord mathdefault"},[s._v("c")])])])])])],1),s._v(" "),t("div",{staticClass:"custom-block theorem"},[t("p",{staticClass:"title"},[s._v("Complexity")]),t("p",[s._v("time: "),t("eq",[t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[t("semantics",[t("mrow",[t("mi",[s._v("O")]),t("mo",{attrs:{stretchy:"false"}},[s._v("(")]),t("mi",[s._v("n")]),t("mo",{attrs:{stretchy:"false"}},[s._v(")")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("O(n)")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[s._v("O")]),t("span",{staticClass:"mopen"},[s._v("(")]),t("span",{staticClass:"mord mathdefault"},[s._v("n")]),t("span",{staticClass:"mclose"},[s._v(")")])])])])]),t("br"),s._v("\nspace: "),t("eq",[t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[t("semantics",[t("mrow",[t("mi",[s._v("O")]),t("mo",{attrs:{stretchy:"false"}},[s._v("(")]),t("mi",[s._v("n")]),t("mo",{attrs:{stretchy:"false"}},[s._v(")")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("O(n)")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[s._v("O")]),t("span",{staticClass:"mopen"},[s._v("(")]),t("span",{staticClass:"mord mathdefault"},[s._v("n")]),t("span",{staticClass:"mclose"},[s._v(")")])])])])])],1)]),t("div",{staticClass:"language-py line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-py"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("singleNumber")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" nums"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("sum")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("sum")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"hashmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hashmap"}},[s._v("#")]),s._v(" HashMap")]),s._v(" "),t("div",{staticClass:"language-py line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-py"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" collections "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Counter\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("singleNumber")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" nums"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    hashmap "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Counter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" k "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" hashmap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("keys"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" hashmap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("k"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" k\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"follow-up"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#follow-up"}},[s._v("#")]),s._v(" Follow Up")]),s._v(" "),t("div",{staticClass:"custom-block theorem"},[t("p",{staticClass:"title"}),t("p",[s._v("Can you solve it using constant space?")])]),t("p",[s._v("We then have to use some clever bit manipulation methods. Both methods below take linear time and constant space.")]),s._v(" "),t("h3",{attrs:{id:"digital-logic"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#digital-logic"}},[s._v("#")]),s._v(" Digital Logic")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://medium.com/@lenchen/leetcode-137-single-number-ii-31af98b0f462",target:"_blank",rel:"noopener noreferrer"}},[s._v("A good explanation"),t("OutboundLink")],1),s._v(" on the following code using digital logic.")]),s._v(" "),t("div",{staticClass:"language-py line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-py"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("singleNumber")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" nums"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" List"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    seen_once "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" seen_twice "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" num "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" nums"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        seen_once "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),s._v("seen_twice "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("seen_once "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),s._v(" num"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        seen_twice "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),s._v("seen_once "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("seen_twice "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),s._v(" num"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" seen_once\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"count-occurrences"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#count-occurrences"}},[s._v("#")]),s._v(" Count Occurrences")]),s._v(" "),t("p",[s._v("If "),t("code",[s._v("x")]),s._v(" is the single number "),t("code",[s._v("res")]),s._v("ult to return, then the bits where "),t("code",[s._v("x")]),s._v(" are "),t("code",[s._v("1")]),s._v(" occur "),t("code",[s._v("3y+1")]),s._v(" times, where "),t("eq",[t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[t("semantics",[t("mrow",[t("mi",[s._v("y")]),t("mo",[s._v("≥")]),t("mn",[s._v("0")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("y \\ge 0")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.8304100000000001em","vertical-align":"-0.19444em"}}),t("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[s._v("y")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),t("span",{staticClass:"mrel"},[s._v("≥")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),t("span",{staticClass:"mord"},[s._v("0")])])])])]),s._v(". The same case happens for "),t("code",[s._v("0")]),s._v(" bits of "),t("code",[s._v("x")]),s._v(" but doesn't make a difference on "),t("code",[s._v("res")]),s._v(" so neglected.")],1),s._v(" "),t("p",[s._v("Note that the highlighted line is used in place of the line below for other languages, due to Python's unbound int.")]),s._v(" "),t("h4",{attrs:{id:"extension"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#extension"}},[s._v("#")]),s._v(" Extension")]),s._v(" "),t("p",[s._v("This method can take more than "),t("code",[s._v("3")]),s._v(" odd duplicates and return single number "),t("code",[s._v("res")]),s._v(".")]),s._v(" "),t("div",{staticClass:"language-py line-numbers-mode"},[t("div",{staticClass:"highlight-lines"},[t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("br"),t("br")]),t("pre",{pre:!0,attrs:{class:"language-py"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("singleNumber")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" nums"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" List"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    res "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("range")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        cnt "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" j "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("range")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("len")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nums"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" nums"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("j"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                cnt "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        res "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" res "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cnt "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# return res")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" res "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" res "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" nums "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" res "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v("\n")])]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);