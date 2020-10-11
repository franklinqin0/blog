---
title: Vue Notes
date: 2020-03-25
tags:
  - tech
publish: false
---

Vue 的设计思想

- 数据驱动应用
- MVVM 模式的践行者

MVVM 框架的三要素：响应式、模板引擎及其渲染

- 响应式：vue 如何监听数据变化？
- 模版：vue 的模版如何编写和解析？
- 渲染：vue 如何将模板转换为 html？

## Vue 模版 -》渲染函数

Vue 通过它的编译器将模板编译成渲染函数，在数据发生变化的时候再次执行渲染函数，通过对比两次执行结果得出要做的 dom 操作，模板中的神奇魔法得以实现

## 列表渲染

我们可以用 v-for 指令基于一个数组来渲染一个列表。 v-for 指令需要使用 item in items 形式的 特殊语法，其中 items 是源数据数组，而 item 则是被迭代的数组元素的别名。

## class 与 style 绑定

操作元素的 class 列表和内联样式是数据绑定的一个常见需求。因为它们都是属性，所以我们可以用 vbind 处理它们：只需要通过表达式计算出字符串结果即可。不过，字符串拼接麻烦且易错。因此，在 将 v-bind 用于 class 和 style 时，Vue.js 做了专门的增强。**表达式结果的类型除了字符串之外，还可以是对象或数组。**

## 计算属性和监听器

模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。在模板中放入太多的逻辑会让模板过重且难以维护，此时就可以考虑计算属性和监听器。

## 计算属性 vs 监听器

- 处理数据的场景不同，监听器适合一个数据影响多个数据，计算属性适合一个数据受多个数据影响
- 计算属性有缓存性，计算所得的值如果没有变化不会重复执行
- 监听器选项提供了更通用的方法，适合执行异步操作或较大开销操作的情况

## created vs. mounted

component already instantiated, not mounted yet, DOM doesn't exist

// can visit DOM

三个阶段：初始化、更新、销毁

- 初始化：beforeCreate、created、beforeMount、mounted
- 更新：beforeUpdate、updated
- 销毁：beforeDestroy、destroyed

- beforeCreate(){} // 执行时组件实例还未创建，通常用于插件开发中执行一些初始化任务
- created(){} // 组件初始化完毕，各种数据可以使用，常用于异步数据获取
- beforeMounted(){} // 未执行渲染、更新，dom 未创建 mounted(){} // 初始化结束，dom 已创建，可用于获取访问数据和 dom 元素
- beforeUpdate(){} // 更新前，可用于获取更新前各种状态
- updated(){} // 更新后，所有状态已是最新
- beforeDestroy(){} // 销毁前，可用于一些定时器或订阅的取消
- destroyed(){} // 组件已销毁，作用同上

# v-slot

@ v-on
: v-bind
