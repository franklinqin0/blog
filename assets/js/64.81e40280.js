(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{576:function(t,e,v){"use strict";v.r(e);var s=v(2),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[t._v("Vue的设计思想")]),t._v(" "),v("ul",[v("li",[t._v("数据驱动应用")]),t._v(" "),v("li",[t._v("MVVM模式的践行者")])]),t._v(" "),v("p",[t._v("MVVM框架的三要素：响应式、模板引擎及其渲染")]),t._v(" "),v("ul",[v("li",[t._v("响应式：vue如何监听数据变化？")]),t._v(" "),v("li",[t._v("模版：vue的模版如何编写和解析？")]),t._v(" "),v("li",[t._v("渲染：vue如何将模板转换为html？")])]),t._v(" "),v("h2",{attrs:{id:"vue-模版-》渲染函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue-模版-》渲染函数"}},[t._v("#")]),t._v(" Vue 模版 -》渲染函数")]),t._v(" "),v("p",[t._v("Vue通过它的编译器将模板编译成渲染函数，在数据发生变化的时候再次执行渲染函数，通过对比两次执行结果得出要做的dom操作，模板中的神奇魔法得以实现")]),t._v(" "),v("h2",{attrs:{id:"列表渲染"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#列表渲染"}},[t._v("#")]),t._v(" 列表渲染")]),t._v(" "),v("p",[t._v("我们可以用 v-for 指令基于一个数组来渲染一个列表。 v-for 指令需要使用 item in items 形式的 特殊语法，其中 items 是源数据数组，而 item 则是被迭代的数组元素的别名。")]),t._v(" "),v("h2",{attrs:{id:"class与style绑定"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#class与style绑定"}},[t._v("#")]),t._v(" class与style绑定")]),t._v(" "),v("p",[t._v("操作元素的 class 列表和内联样式是数据绑定的一个常见需求。因为它们都是属性，所以我们可以用 vbind 处理它们：只需要通过表达式计算出字符串结果即可。不过，字符串拼接麻烦且易错。因此，在 将 v-bind 用于 class 和 style 时，Vue.js 做了专门的增强。"),v("strong",[t._v("表达式结果的类型除了字符串之外，还可以是对象或数组。")])]),t._v(" "),v("h2",{attrs:{id:"计算属性和监听器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#计算属性和监听器"}},[t._v("#")]),t._v(" 计算属性和监听器")]),t._v(" "),v("p",[t._v("模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。在模板中放入太多的逻辑会让模板过重且难以维护，此时就可以考虑计算属性和监听器。")]),t._v(" "),v("h2",{attrs:{id:"计算属性-vs-监听器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#计算属性-vs-监听器"}},[t._v("#")]),t._v(" 计算属性 vs 监听器")]),t._v(" "),v("ul",[v("li",[t._v("处理数据的场景不同，监听器适合一个数据影响多个数据，计算属性适合一个数据受多个数据影响")]),t._v(" "),v("li",[t._v("计算属性有缓存性，计算所得的值如果没有变化不会重复执行")]),t._v(" "),v("li",[t._v("监听器选项提供了更通用的方法，适合执行异步操作或较大开销操作的情况")])]),t._v(" "),v("h2",{attrs:{id:"created-vs-mounted"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#created-vs-mounted"}},[t._v("#")]),t._v(" created vs. mounted")]),t._v(" "),v("p",[t._v("component already instantiated, not mounted yet, DOM doesn't exist")]),t._v(" "),v("p",[t._v("// can visit DOM")]),t._v(" "),v("p",[t._v("三个阶段：初始化、更新、销毁")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("初始化：beforeCreate、created、beforeMount、mounted")])]),t._v(" "),v("li",[v("p",[t._v("更新：beforeUpdate、updated")])]),t._v(" "),v("li",[v("p",[t._v("销毁：beforeDestroy、destroyed")])]),t._v(" "),v("li",[v("p",[t._v("beforeCreate(){} // 执行时组件实例还未创建，通常用于插件开发中执行一些初始化任务")])]),t._v(" "),v("li",[v("p",[t._v("created(){} // 组件初始化完毕，各种数据可以使用，常用于异步数据获取")])]),t._v(" "),v("li",[v("p",[t._v("beforeMounted(){} // 未执行渲染、更新，dom未创建 mounted(){} // 初始化结束，dom已创建，可用于获取访问数据和dom元素")])]),t._v(" "),v("li",[v("p",[t._v("beforeUpdate(){} // 更新前，可用于获取更新前各种状态")])]),t._v(" "),v("li",[v("p",[t._v("updated(){} // 更新后，所有状态已是最新")])]),t._v(" "),v("li",[v("p",[t._v("beforeDestroy(){} // 销毁前，可用于一些定时器或订阅的取消")])]),t._v(" "),v("li",[v("p",[t._v("destroyed(){} // 组件已销毁，作用同上")])])]),t._v(" "),v("h1",{attrs:{id:"v-slot"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#v-slot"}},[t._v("#")]),t._v(" v-slot")]),t._v(" "),v("p",[t._v("@ v-on\n: v-bind")])])}),[],!1,null,null,null);e.default=a.exports}}]);