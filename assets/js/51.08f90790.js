(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{485:function(s,t,a){"use strict";a.r(t);var n=a(2),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("img",{staticClass:"medium-zoom",attrs:{src:"/algo/better-compression-of-string.png",alt:"https://leetcode.com/problems/better-compression-of-string"}}),s._v(" "),t("h2",{attrs:{id:"solution"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solution"}},[s._v("#")]),s._v(" Solution")]),s._v(" "),t("h3",{attrs:{id:"solution-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solution-1"}},[s._v("#")]),s._v(" Solution 1")]),s._v(" "),t("p",[s._v("This solution does not utilize the fact that count follows character.")]),s._v(" "),t("div",{staticClass:"language-py line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-py"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" collections "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" defaultdict\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("is_letter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" c "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("and")]),s._v(" c "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"z"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("is_digit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" c "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("and")]),s._v(" c "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"9"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("betterCompression")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" compressed"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""\n    :type compressed: str\n    :rtype: str\n    """')]),s._v("\n    curr_char "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# char")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("map")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" defaultdict"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    \n    i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("len")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("compressed"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        c "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" compressed"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("is_letter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            curr_char "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c\n            i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            cnt "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("len")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("compressed"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                c "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" compressed"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("is_digit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),s._v("\n                cnt "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cnt "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        \n            "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("map")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("curr_char"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" cnt\n\n    res "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" c "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("sorted")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("map")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("keys"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        res "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" c\n        res "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("map")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" res\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br")])]),t("h3",{attrs:{id:"solution-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solution-2"}},[s._v("#")]),s._v(" Solution 2")]),s._v(" "),t("p",[s._v("This solution takes into account the constraint that count follows character and is much simpler.")]),s._v(" "),t("div",{staticClass:"language-py line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-py"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" collections "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" defaultdict\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("betterCompression")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" compressed"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""\n    :type compressed: str\n    :rtype: str\n    """')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# curr_char = "" # char')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("map")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" defaultdict"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    n "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("len")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("compressed"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        c "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" compressed"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        start "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" start\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# get count")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("and")]),s._v(" compressed"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("isdigit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            i "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        cnt "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("compressed"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("start"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("map")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" cnt\n    \n    res "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("join"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("c"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("map")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" c "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("sorted")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("map")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" res\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);