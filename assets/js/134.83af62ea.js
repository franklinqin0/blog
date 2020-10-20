(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{643:function(a,t,s){"use strict";s.r(t);var e=s(2),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("This blog illustrates some notes on using my Mac (model was released in mid 2015, OS is Catalina 10.15).")]),a._v(" "),s("h2",{attrs:{id:"clean-unused-homebrew-dependencies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clean-unused-homebrew-dependencies"}},[a._v("#")]),a._v(" Clean Unused Homebrew Dependencies")]),a._v(" "),s("p",[a._v("Like "),s("code",[a._v("apt-get autoremove")]),a._v(" in Ubuntu, I have too many unused homebrew dependencies and want to clean them.")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("brew bundle dump "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" brew bundle --force cleanup\n")])])]),s("h2",{attrs:{id:"accented-chars-vs-key-repeat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#accented-chars-vs-key-repeat"}},[a._v("#")]),a._v(" Accented Chars vs. Key Repeat")]),a._v(" "),s("p",[a._v("Mac enables users to hold down a letter key and show accented or special chars.")]),a._v(" "),s("p",[a._v("To "),s("strong",[a._v("enable pop-up")]),a._v(" and disable key repeat, could set "),s("code",[a._v("ApplePressAndHoldEnabled")]),a._v(" to "),s("code",[a._v("true")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("defaults "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("write")]),a._v(" -g ApplePressAndHoldEnabled -bool "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n")])])]),s("p",[a._v("However, as I used "),s("code",[a._v("Vim")]),a._v("("),s("a",{attrs:{href:"vim_commands"}},[a._v("commands")]),a._v(" and "),s("a",{attrs:{href:"vim_customize"}},[a._v("config")]),a._v(") more and more, I see popping up the accented chars less useful.")]),a._v(" "),s("p",[a._v("To disable pop-up and "),s("strong",[a._v("enable key repeat")]),a._v(", could set "),s("code",[a._v("ApplePressAndHoldEnabled")]),a._v(" to "),s("code",[a._v("false")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("defaults "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("write")]),a._v(" -g ApplePressAndHoldEnabled -bool "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\n")])])]),s("h3",{attrs:{id:"german-key-combs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#german-key-combs"}},[a._v("#")]),a._v(" German Key Combs")]),a._v(" "),s("p",[a._v("Happy ending? Not yet! I recently started "),s("a",{attrs:{href:"goethe"}},[a._v("learning German")]),a._v(" and had to find some workaround to type chars and symbols such as "),s("code",[a._v("ä")]),a._v(", "),s("code",[a._v("ö")]),a._v(", "),s("code",[a._v("ü")]),a._v(", "),s("code",[a._v("ß")]),a._v(", "),s("code",[a._v("„")]),a._v(" and "),s("code",[a._v("”")]),a._v(".")]),a._v(" "),s("p",[a._v("These are the ways to type them on my mac:")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("ä")]),a._v(": "),s("code",[a._v("Option u")]),a._v(" + "),s("code",[a._v("a")])]),a._v(" "),s("li",[s("code",[a._v("ö")]),a._v(": "),s("code",[a._v("Option u")]),a._v(" + "),s("code",[a._v("o")])]),a._v(" "),s("li",[s("code",[a._v("ü")]),a._v(": "),s("code",[a._v("Option u")]),a._v(" + "),s("code",[a._v("u")])]),a._v(" "),s("li",[s("code",[a._v("ß")]),a._v(": "),s("code",[a._v("Option s")])])]),a._v(" "),s("p",[a._v("and the lower and upper quotes:")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("„")]),a._v(": "),s("code",[a._v("Option Shift w")])]),a._v(" "),s("li",[s("code",[a._v("”")]),a._v(": "),s("code",[a._v("Option Shift [")])])]),a._v(" "),s("p",[a._v("Note that I actually searched online and saw other key combs, but don't work.")]),a._v(" "),s("h3",{attrs:{id:"add-input-source"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-input-source"}},[a._v("#")]),a._v(" Add Input Source")]),a._v(" "),s("p",[a._v("Another way to guarantee typing the correct German chars, or any language's chars is to use the corresponding input source. This could be done on Mac by: "),s("code",[a._v("System Preferences")]),a._v(" "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mo",[a._v("→")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[a._v("\\rightarrow")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.36687em","vertical-align":"0em"}}),s("span",{staticClass:"mrel"},[a._v("→")])])])])]),a._v(" "),s("code",[a._v("Keyboard")]),a._v(" "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mo",[a._v("→")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[a._v("\\rightarrow")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.36687em","vertical-align":"0em"}}),s("span",{staticClass:"mrel"},[a._v("→")])])])])]),a._v(" "),s("code",[a._v("Input Souces")]),a._v(" "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mo",[a._v("→")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[a._v("\\rightarrow")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.36687em","vertical-align":"0em"}}),s("span",{staticClass:"mrel"},[a._v("→")])])])])]),a._v(" "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mo",[a._v("+")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[a._v("+")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.66666em","vertical-align":"-0.08333em"}}),s("span",{staticClass:"mord"},[a._v("+")])])])])]),a._v(" "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mo",[a._v("→")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[a._v("\\rightarrow")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.36687em","vertical-align":"0em"}}),s("span",{staticClass:"mrel"},[a._v("→")])])])])]),a._v(" {another language}.")],1),a._v(" "),s("h3",{attrs:{id:"further"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#further"}},[a._v("#")]),a._v(" Further")]),a._v(" "),s("p",[a._v("Please see this article for "),s("a",{attrs:{href:"https://ia.net/writer/support/mac/special-characters",target:"_blank",rel:"noopener noreferrer"}},[a._v("more details"),s("OutboundLink")],1),a._v(" on keyboard viewer, quotes, ellipsis, and IA writer.")]),a._v(" "),s("h2",{attrs:{id:"terminal-caveats"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#terminal-caveats"}},[a._v("#")]),a._v(" Terminal Caveats")]),a._v(" "),s("p",[a._v("Following are some common caveats for Unix terminal.")]),a._v(" "),s("h3",{attrs:{id:"change-root-password"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#change-root-password"}},[a._v("#")]),a._v(" Change Root Password")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("passwd")]),a._v(" root\n")])])]),s("h3",{attrs:{id:"terminal-proxy-w-socks5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#terminal-proxy-w-socks5"}},[a._v("#")]),a._v(" Terminal Proxy w/ Socks5")]),a._v(" "),s("p",[a._v("It's fairly easy to use a socks5 proxy in browser, but how to use it in terminal, especially when downloading from GitHub is super slow in China? From "),s("a",{attrs:{href:"https://www.jianshu.com/p/205aff65954a",target:"_blank",rel:"noopener noreferrer"}},[a._v("this article"),s("OutboundLink")],1),a._v(" I made the following terminal proxy settings.")]),a._v(" "),s("p",[a._v("In sock5 proxy app set:")]),a._v(" "),s("ul",[s("li",[a._v("Local Socks5 Listen Address "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mo",[a._v("→")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[a._v("\\rightarrow")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.36687em","vertical-align":"0em"}}),s("span",{staticClass:"mrel"},[a._v("→")])])])])]),a._v(" 127.0.0.1")],1),a._v(" "),s("li",[a._v("Local Socks5 Port "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mo",[a._v("→")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[a._v("\\rightarrow")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.36687em","vertical-align":"0em"}}),s("span",{staticClass:"mrel"},[a._v("→")])])])])]),a._v(" 1086")],1),a._v(" "),s("li",[a._v("Connection Timeout "),s("eq",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mo",[a._v("→")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[a._v("\\rightarrow")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.36687em","vertical-align":"0em"}}),s("span",{staticClass:"mrel"},[a._v("→")])])])])]),a._v(" 60")],1)]),a._v(" "),s("p",[a._v("Then in "),s("code",[a._v("sh")]),a._v(" config file ("),s("code",[a._v(".bashrc")]),a._v(" for "),s("code",[a._v("Bash")]),a._v("):")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# set/unset proxy in terminal")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("alias")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("setproxy")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"export ALL_PROXY=socks5://127.0.0.1:1086"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("alias")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("unsetproxy")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"set -e ALL_PROXY"')]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# set/unset proxy just for Git")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("alias")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("agent")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"git config --global http.proxy socks5://127.0.0.1:1086;git config --global https.proxy socks5://127.0.0.1:1086;git config --global http.sslVerify false"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("alias")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("unagent")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"git config --global --unset http.proxy;git config --global --unset https.proxy"')]),a._v("\n")])])]),s("h3",{attrs:{id:"disable-proxy-for-development-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#disable-proxy-for-development-server"}},[a._v("#")]),a._v(" Disable Proxy for Development Server")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("SET "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("NO_PROXY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("localhost\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" start "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# or `npm run start`")]),a._v("\n")])])]),s("h3",{attrs:{id:"fish"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fish"}},[a._v("#")]),a._v(" Fish")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# set path")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("newdir"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);