(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{644:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("img",{staticClass:"medium-zoom",attrs:{src:"/algo/snakes-and-ladders.png",alt:"https://leetcode.com/problems/snakes-and-ladders"}}),t._v(" "),a("h2",{attrs:{id:"solution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solution"}},[t._v("#")]),t._v(" Solution")]),t._v(" "),a("p",[t._v("Let "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("n")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"mord mathdefault"},[t._v("n")])])])])]),t._v(" be the length of the square matrix "),a("code",[t._v("board")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"implicit-graph"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implicit-graph"}},[t._v("#")]),t._v(" Implicit Graph")]),t._v(" "),a("div",{staticClass:"custom-block theorem"},[a("p",{staticClass:"title"},[t._v("Complexity")]),a("p",[t._v("time: "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("O")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("msup",[a("mi",[t._v("n")]),a("mn",[t._v("2")])],1),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(n^2)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1.064108em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault"},[t._v("n")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.8141079999999999em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[t._v("2")])])])])])])])]),a("span",{staticClass:"mclose"},[t._v(")")])])])])]),a("br"),t._v("\nspace: "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("O")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("msup",[a("mi",[t._v("n")]),a("mn",[t._v("2")])],1),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(n^2)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1.064108em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault"},[t._v("n")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.8141079999999999em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[t._v("2")])])])])])])])]),a("span",{staticClass:"mclose"},[t._v(")")])])])])])],1)]),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("snakesAndLadders")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" board"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" List"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("List"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("board"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# flatten 2D board to 1D board_line")]),t._v("\n    board_line "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("reversed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            col_range "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            col_range "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("reversed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" col_range"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            board_line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("board"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    dist "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        dist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maxsize\n    queue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" queue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        head "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" queue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" head "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" dist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            npos "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("min")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("head "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# fly once if snake & ladder exist")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" board_line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("npos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                npos "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" board_line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("npos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# update dist & queue")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" npos "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" dist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("npos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" dist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                dist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("npos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("head"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n                queue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("npos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);