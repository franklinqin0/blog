(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{673:function(t,e,a){"use strict";a.r(e);var l=a(2),i=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Some technical questions and answers.")]),t._v(" "),a("h2",{attrs:{id:"concurrency-and-parallelism"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concurrency-and-parallelism"}},[t._v("#")]),t._v(" Concurrency and Parallelism")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Parallel programming")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Execute programs faster on parallel hardware")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Concurrent programming")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Manage concurrent execution threads explicitly")])])])]),t._v(" "),a("p",[t._v("non-determinism = parallel processing + mutable state")]),t._v(" "),a("p",[t._v("to avoid mutable state, use functional programming!")]),t._v(" "),a("h2",{attrs:{id:"literals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#literals"}},[t._v("#")]),t._v(" Literals")]),t._v(" "),a("p",[t._v("a notation for representing a "),a("strong",[t._v("fixed value in source code")]),t._v(". Almost all programming languages have notations for atomic values such as "),a("em",[t._v("integers")]),t._v(", "),a("em",[t._v("floating-point numbers")]),t._v(", and "),a("em",[t._v("strings")]),t._v(", and usually for "),a("em",[t._v("booleans")]),t._v(" and "),a("em",[t._v("characters")]),t._v("; some also have notations for elements of enumerated types and compound values such as "),a("em",[t._v("arrays")]),t._v(", "),a("em",[t._v("records")]),t._v(", and "),a("em",[t._v("objects")]),t._v(". An "),a("em",[t._v("anonymous function")]),t._v(" is a literal for the "),a("em",[t._v("function type")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"macro-vs-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#macro-vs-function"}},[t._v("#")]),t._v(" Macro vs. Function")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("\\")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Macro")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Function")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Compilation")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("preprocessed function")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("compiled")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Type Checking")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("No")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Yes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Code Length")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("increases")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("unaffected")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Side Effects")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("can happen at later stages")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("none in any case")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Speed of Execution")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("faster")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Slower")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Name replaced by Value")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("before compilation")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("during function call")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Useful?")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("when small code is repeated many times")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("when large code is to be written")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Checks Compile-Time Errors")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("No")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Yes")])])])]),t._v(" "),a("p",[t._v("https://www.quickprogrammingtips.com/mongodb/mongodb-history.html")]),t._v(" "),a("h2",{attrs:{id:"discriminative-vs-generative-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#discriminative-vs-generative-model"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://stackoverflow.com/a/879591/6421652",target:"_blank",rel:"noopener noreferrer"}},[t._v("Discriminative vs. Generative Model"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("A discriminative model learns the conditional probability distribution "),a("code",[t._v("p(y | x)")]),t._v(", which is the natural distribution for classifying a given example "),a("code",[t._v("x")]),t._v(" into a class "),a("code",[t._v("y")]),t._v(". A generative model learns the joint probability distribution "),a("code",[t._v("p(x, y)")]),t._v(", which could be used to generate likely "),a("code",[t._v("(x, y)")]),t._v(" pairs.")])])}),[],!1,null,null,null);e.default=i.exports}}]);