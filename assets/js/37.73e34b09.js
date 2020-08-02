(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{550:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("This blog features some of the most commonly used algorithms.")]),t._v(" "),a("p",[t._v("Thanks to:")]),t._v(" "),a("ul",[a("li",[t._v("Walker M. White and Lillian Lee, teacher of CS1110: "),a("em",[t._v("Intro to Programming in Python")])]),t._v(" "),a("li",[t._v("David Gries, teacher of CS2110: "),a("em",[t._v("OOP in Java")])]),t._v(" "),a("li",[t._v("Michael Clarkson, teacher of CS3110: "),a("em",[t._v("FP in OCaml")])]),t._v(" "),a("li",[t._v("Eva Tardos, teacher of CS4820: "),a("em",[t._v("Intro to Algorithms")])])]),t._v(" "),a("p",[t._v("who taught me the core CS courses to help me write, categorize and understand the following algorithms.")]),t._v(" "),a("h2",{attrs:{id:"import-libraries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-libraries"}},[t._v("#")]),t._v(" Import Libraries")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" random\n")])])]),a("h2",{attrs:{id:"bfs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bfs"}},[t._v("#")]),t._v(" BFS")]),t._v(" "),a("h2",{attrs:{id:"dfs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dfs"}},[t._v("#")]),t._v(" DFS")]),t._v(" "),a("h3",{attrs:{id:"note"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#note"}},[t._v("#")]),t._v(" Note")]),t._v(" "),a("p",[t._v("Consider what happens to the root, leaf, and other nodes respectively. Define the entrance and exit clearly.")]),t._v(" "),a("h3",{attrs:{id:"why"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why"}},[t._v("#")]),t._v(" Why")]),t._v(" "),a("p",[t._v("Search for answers in a tree. Enumerate all the possibilities.")]),t._v(" "),a("h3",{attrs:{id:"shortcomings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shortcomings"}},[t._v("#")]),t._v(" Shortcomings")]),t._v(" "),a("p",[t._v("High time complexity(all nodes). Recursion can be hard to understand.")]),t._v(" "),a("h2",{attrs:{id:"input-size-runtime-algorithm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-size-runtime-algorithm"}},[t._v("#")]),t._v(" Input Size, Runtime, Algorithm")]),t._v(" "),a("p",[t._v("We could guess the types of algorithms from given input size.")]),t._v(" "),a("p",[t._v("A chip could run about "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mn",[t._v("1")]),a("msup",[a("mn",[t._v("0")]),a("mn",[t._v("9")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("10^9")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.8141079999999999em","vertical-align":"0em"}}),a("span",{staticClass:"mord"},[t._v("1")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("0")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.8141079999999999em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[t._v("9")])])])])])])])])])])])]),t._v(" operations in a second. Given input size, we could deduce the runtime, and thus the algorithm:")],1),t._v(" "),a("p",[a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("n")]),a("mo",[t._v("=")]),a("mn",[t._v("1")]),a("msup",[a("mn",[t._v("0")]),a("mn",[t._v("7")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n = 10^7")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"mord mathdefault"},[t._v("n")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.8141079999999999em","vertical-align":"0em"}}),a("span",{staticClass:"mord"},[t._v("1")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("0")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.8141079999999999em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[t._v("7")])])])])])])])])])])])]),t._v(" "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mo",[t._v("→")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\rightarrow")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.36687em","vertical-align":"0em"}}),a("span",{staticClass:"mrel"},[t._v("→")])])])])]),t._v(" "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("O")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("n")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(n)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathdefault"},[t._v("n")]),a("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v(" "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("n")]),a("mo",[t._v("=")]),a("mn",[t._v("1")]),a("msup",[a("mn",[t._v("0")]),a("mn",[t._v("4")])],1),a("mtext"),a("mn",[t._v("1")]),a("msup",[a("mn",[t._v("0")]),a("mn",[t._v("6")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n = 10^4~10^6")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"mord mathdefault"},[t._v("n")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.8141079999999999em","vertical-align":"0em"}}),a("span",{staticClass:"mord"},[t._v("1")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("0")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.8141079999999999em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[t._v("4")])])])])])])])]),a("span",{staticClass:"mspace nobreak"}),a("span",{staticClass:"mord"},[t._v("1")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("0")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.8141079999999999em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[t._v("6")])])])])])])])])])])])]),t._v(" "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mo",[t._v("→")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\rightarrow")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.36687em","vertical-align":"0em"}}),a("span",{staticClass:"mrel"},[t._v("→")])])])])]),t._v(" "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("O")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("n")]),a("mi",[t._v("log")]),a("mo",[t._v("⁡")]),a("mi",[t._v("n")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(n\\log n)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathdefault"},[t._v("n")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mop"},[t._v("lo"),a("span",{staticStyle:{"margin-right":"0.01389em"}},[t._v("g")])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord mathdefault"},[t._v("n")]),a("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v(" "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("n")]),a("mo",[t._v("=")]),a("mn",[t._v("1")]),a("msup",[a("mn",[t._v("0")]),a("mn",[t._v("3")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n = 10^3")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"mord mathdefault"},[t._v("n")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.8141079999999999em","vertical-align":"0em"}}),a("span",{staticClass:"mord"},[t._v("1")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("0")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.8141079999999999em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[t._v("3")])])])])])])])])])])])]),t._v(" "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mo",[t._v("→")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\rightarrow")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.36687em","vertical-align":"0em"}}),a("span",{staticClass:"mrel"},[t._v("→")])])])])]),t._v(" "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("O")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("msup",[a("mi",[t._v("n")]),a("mn",[t._v("2")])],1),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(n^2)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1.064108em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault"},[t._v("n")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.8141079999999999em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[t._v("2")])])])])])])])]),a("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v(" "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("n")]),a("mo",[t._v("<")]),a("mo",[t._v("=")]),a("mn",[t._v("20")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n <= 20")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.5782em","vertical-align":"-0.0391em"}}),a("span",{staticClass:"mord mathdefault"},[t._v("n")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("<")])]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.36687em","vertical-align":"0em"}}),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"mord"},[t._v("2")]),a("span",{staticClass:"mord"},[t._v("0")])])])])]),t._v(" "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mo",[t._v("→")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\rightarrow")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.36687em","vertical-align":"0em"}}),a("span",{staticClass:"mrel"},[t._v("→")])])])])]),t._v(" "),a("eq",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("O")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("msup",[a("mn",[t._v("2")]),a("mi",[t._v("n")])],1),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(2^n)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord"},[t._v("2")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.664392em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mathdefault mtight"},[t._v("n")])])])])])])])]),a("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v(" (DFS)")],1),t._v(" "),a("h2",{attrs:{id:"dutch-national-flag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dutch-national-flag"}},[t._v("#")]),t._v(" Dutch National Flag")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dnf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""Returns: Partition points for the Dutch National Flag\n\n    The Dutch National Flag algorithm arranges the elements of b[h..k]\n    so that negatives are first, then 0s, then positives. It returns a\n    tuple (i,j)  representing the two partition points.\n\n    Parameter b: The list to rearrange\n    Precondition: b is a mutable sequence (e.g. a list).\n\n    Parameter h: The starting point to sort\n    Precondition: h is an int and a valid position in b\n\n    Parameter k: The ending poing to sort\n    Precondition: k is an int and a valid position in b\n    """')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("assert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" `b`"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' is not a list'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("assert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" h "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" h "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" `h`"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' is not a valid position in the list'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("assert")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" `k`"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' is not a valid position in the list'")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Loop variables to satisfy the invariant")]),t._v("\n    t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" h\n    j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" k\n    i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# inv: b[h..t-1] < 0, b[t..i-1] unknown, b[i..j] = 0, and b[j+1..k] > 0")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            _swap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("elif")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            _swap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n            j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# post: b[h..i-1] < 0, b[i..j] = 0, and b[j+1..k] > 0")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Return dividers as a tuple")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h1",{attrs:{id:"note-this-uses-a-different-invariant-than-the-lab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#note-this-uses-a-different-invariant-than-the-lab"}},[t._v("#")]),t._v(" NOTE: This uses a DIFFERENT invariant than the lab")]),t._v(" "),a("p",[t._v('def partition(b, h, k):\n"""Returns: The new position of pivot in partitioned list b[h..k].')]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("The pivot is the initial value x = b[h].  This function rearranges the\nlist so that elements <= x are before the pivot and elements >= x are\nafter the pivot.\n\nParameter b: The list to rearrange\nPrecondition: b is a mutable sequence (e.g. a list).\n\nParameter h: The starting point to sort\nPrecondition: h is an int and a valid position in b\n\nParameter k: The ending poing to sort\nPrecondition: k is an int and a valid position in b\n\"\"\"\nassert type(b) == list, `b`+' is not a list'\nassert 0 <= h and h < len(b), `h`+' is not a valid position in the list'\nassert 0 <= k and k < len(b), `k`+' is not a valid position in the list'\n\n# position i is end of first paritition range\ni = h\n# position j is BEFORE beginning of second partition range\nj = k\n\n# Find the first element in the list.\nx = b[h]\n\n# invariant: b[h..i-1] < x, b[i] = x, b[i+1..j] unknown, and  b[j+1..k] >= x\nwhile i < j:\n    if b[i+1] >= x:\n        # Move this to the end of the block.\n        _swap(b,i+1,j)\n        j = j - 1\n    else:   # b[i+1] < x\n        _swap(b,i,i+1)\n        i = i + 1\n\n# post: b[h..i-1] < x, b[i] is x, and b[i+1..k] >= x\nreturn i\n")])])]),a("h1",{attrs:{id:"helper-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#helper-function"}},[t._v("#")]),t._v(" HELPER FUNCTION")]),t._v(" "),a("p",[t._v('def _swap(b, h, k):\n"""Procedure swaps b[h] and b[k]')]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('Parameter b: The list to rearrange\nPrecondition: b is a mutable sequence (e.g. a list).\n\nParameter h: The first position to swap\nPrecondition: h is an int and a valid position in b\n\nParameter k: The second position to swap\nPrecondition: k is an int and a valid position in b\n"""\n# We typically do not enforce preconditions on hidden helpers\ntemp = b[h]\nb[h] = b[k]\nb[k] = temp\n')])])]),a("h1",{attrs:{id:"linear-search"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linear-search"}},[t._v("#")]),t._v(" Linear search")]),t._v(" "),a("p",[t._v('def linear_search(b,c):\n"""Returns: index of first occurrence of c in b; -1 if not found.')]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('Parameter b: The sequence to search\nPrecondition: b is a sequence\n\nParameter c: The value to search for\nPrecondition: NONE (c can be any value)"""\n# Quick way to check if a sequence\nassert len(b) >= 0, `b`+\' is a not a sequence (list, string, or tuple)\'\n\n# Store in i the index of the first c in b[0..]\ni = 0\n\n# invariant: c is not in b[0..i-1]\nwhile i < len(b) and b[i] != c:\n    i = i + 1;\n\n# post: b[i] == c OR (i == len(b) and c is not in b[0..i-1])\nreturn i if i < len(b) else -1\n')])])]),a("h1",{attrs:{id:"binary-search"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#binary-search"}},[t._v("#")]),t._v(" Binary search")]),t._v(" "),a("p",[t._v('def binary_search(b,c):\n"""Returns: index of first occurrence of c in b; -1 if not found.')]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('Parameter b: The sequence to search\nPrecondition: b is a SORTED sequence\n\nParameter c: The value to search for\nPrecondition: NONE (c can be any value)"""\n# Quick way to check if a sequence; CANNOT easily check sorted\nassert len(b) >= 0, `b`+\' is a not a sequence (list, string, or tuple)\'\n\n# Store in i the value BEFORE beginning of range to search\ni = 0\n# Store in j the end of the range to search (element after)\nj = len(b)\n# The middle position of the range\nmid = (i+j)/2\n\n# invariant; b[0..i-1] < c, b[i..j-1] unknown, b[j..] >= c\nwhile j > i:\n    if b[mid] < c:\n        i = mid+1\n    else:     # b[mid] >= c\n        j = mid\n\n    # Compute a new middle.\n    mid = (i+j)/2\n\n# post: i == j and b[0..i-1] < c and b[j..] >= c\nreturn i if (i < len(b) and b[i] == c) else -1\n')])])]),a("p",[t._v('def isort(b):\n"""Insertion Sort: Sorts the array b in n^2 time')]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('Parameter b: The sequence to sort\nPrecondition: b is a mutable sequence (e.g. a list)."""\nassert type(b) == list, `b`+\' is not a list\'\n\n# Start from beginning of list\ni = 0\n\n# inv: b[0..i-1] sorted\nwhile i  < len(b):\n    _push_down(b,i)\n    i = i + 1\n\n# post: b[0..len(b)-1] sorted\n')])])]),a("h1",{attrs:{id:"helper-function-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#helper-function-2"}},[t._v("#")]),t._v(" HELPER FUNCTION")]),t._v(" "),a("p",[t._v('def _push_down(b, k):\n"""Moves the value at position k into its sorted position in b[0.k-1].')]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('Parameter b: The list to rearrange\nPrecondition: b is a list, with b[0..k-1] sorted\n\nParameter k: The position to push down into b[0..k-1]\nPrecondition: k is an int and a valid position in b"""\n# We typically do not enforce preconditions on hidden helpers\n\n# Start from position k\nj = k\n\n# inv: b[j..k] is sorted\nwhile j > 0:\n    if b[j-1] > b[j]:\n        _swap(b,j-1,j)\n    j = j - 1\n# post: b[0..k] is sorted\n')])])]),a("p",[t._v('def ssort(b):\n"""Selection Sort: Sorts the array b in n^2 time')]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('Parameter b: The sequence to sort\nPrecondition: b is a mutable sequence (e.g. a list)."""\nassert type(b) == list, `b`+\' is not a list\'\n\n# Start from beginning of list\ni = 0\n\n# inv: b[0..i-1] sorted\nwhile i < len(b):\n    index = _min_index(b,i);\n    _swap(b,i,index)\n    i = i+1\n# post: b[0..len(b)-1] sorted\n')])])]),a("h1",{attrs:{id:"helper-function-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#helper-function-3"}},[t._v("#")]),t._v(" HELPER FUNCTION")]),t._v(" "),a("p",[t._v('def _min_index(b, h):\n"""Returns: The index of the minimum value in b[h..]')]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('Parameter b: The sequence to search\nPrecondition: b is a mutable sequence (e.g. a list)."""\n# We typically do not enforce preconditions on hidden helpers\n\n# Start from position h\ni = h\nindex = h;\n\n# inv: index position of min in b[h..i-1]\nwhile i < len(b):\n    if b[i] < b[index]:\n        index = i\n    i = i+1\n\n# post: index position of min in b[h..len(b)-1]\nreturn index\n')])])]),a("p",[t._v('def qsort(b):\n"""Quick Sort: Sorts the array b in n log n average time')]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('Parameter b: The sequence to sort\nPrecondition: b is a mutable sequence (e.g. a list)."""\nassert type(b) == list, `b`+\' is not a list\'\n\n# Send everything to the recursive helper\n_qsort_helper(b,0,len(b)-1)\n')])])]),a("p",[t._v('def _qsort_helper(b, h, k):\n"""Quick Sort: Sorts the array b[h..k] in n log n average time')]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('Parameter b: The sequence to sort\nPrecondition: b is a mutable sequence (e.g. a list).\n\nParameter h: The starting point to sort\nPrecondition: h is an int and a valid position in b\n\nParameter k: The ending poing to sort\nPrecondition: k is an int and a valid position in b\n"""\n# We typically do not enforce preconditions on hidden helpers\nif k-h < 1:            # BASE CASE\n    return\n\n# RECURSIVE CASE\nj = partition(b, h, k)\n# b[h..j-1] <= b[j] <= b[j+1..k]\n# Sort b[h..j-1]  and  b[j+1..k]\n_qsort_helper(b, h, j-1)\n_qsort_helper(b, j+1, k)\n')])])]),a("p",[t._v('def roll(p):\n"""Returns: a random int in 0..len(p)-1; i returned with prob p[i].')]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('Parameter p: The die value distribution\nPrecondition: p a list of positive floats that sum to at least 1."""\n# Do not assert precondition; too complicated\n\nr = random.random()     # r in [0,1)\n# Think of interval [0,1] as divided into segments of size p[i]\n# Store into i the segment number in which r falls.\ni = 0\nsum_of = p[0]\nwhile r >= sum_of:\n    sum_of = sum_of + p[i+1]\n    i = i + 1\n\nreturn i\n')])])]),a("p",[t._v('def scramble(b):\n"""Scrambles the list to resort again')]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('Parameter b: The list to scramble\nPrecondition: b is a mutable sequence (e.g. a list)."""\nassert type(b) == list, `b`+\' is not a list\'\n\n# Start from the beginning\ni = 0\n\n# inv: b[0..i-1] is scrambled\n\nwhile i < len(b):\n    size = len(b)-i\n    pos  = int(random.random()*size)\n    _swap(b,i,i+pos)\n    i = i+1\n# post: b[0..len(b)] is scrambled\n')])])])])}),[],!1,null,null,null);s.default=e.exports}}]);