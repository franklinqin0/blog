---
title: About This Blog
date: 9999-12-30
categories:
  - about
tags:
  - whoami
prev: about
next: about_algo
publish: false
---

In this blog I talk about how this blog was built, developed, and transformed to the current state.

<!-- more -->

## Why Not Social Networks

In recent years, people don't bother creating their personal websites but spend more time on Instagrm/WeChat/Twitter/Weibo.

The Internet is becoming more stupid and arousing. Sexy pictures and funny videos sell.

Why not just post WeChat moments and interact w/ friends thru like clicks? I once seriously doubt the value of creating this site. But I made up my mind to continue this site after reading [this popular essay](https://vanschneider.com/a-love-letter-to-personal-websites), and I quote:

::: theorem
It’s a place where we can express, on our terms, who we are and what we offer.
:::

So I own a small part of the Internet now :grin:

## Why Markdown

I love writing blogs in [Markdown](https://daringfireball.net/projects/markdown/syntax), b/c it's simple and down-to-earth, just like me.

## Built in Jekyll

In early 2018, I used Jekyll as the static site generator to construct a MVP.Gradually, I found it hard to extend, such as **multi-language support**, **table of contents on sidebar** and **dark mode**. It's not impossible to add an essential feature, but my hands would be quite dirty (see [Docker doc](https://github.com/docker/docker.github.io)). I had a list of stuff I want my blog to have but hard to achieve in reasonable amount of time if keep using Jekyll.

## Transformed to VuePress

In early 2020, while searching for alternatives, I was quite excited to discover [VuePress](https://vuepress.vuejs.org/), which is based on [Vue.js](https://vuejs.org/), a framework I've always been quite curious about, after having learned some [Angular.js](https://angular.io/) and [React.js](https://reactjs.org/). Using `VuePress`, bloggers can build a SPA (blazing fast when routing w/i the site) w/ **dynamic Vue components**, rather than a static site compiled by Jekyll.

My passion faded a bit when I found that `VuePress` is not as supportive for blog as for documentation, but I searched "VuePress blog theme" on GitHub and found the blog theme [_reco_](https://vuepress-theme-reco.recoluan.com/en). I marvelled at its simplicity and elegance. It has most features I need, if not more! So I spent a few days during 2020 Spring Festival to make some changes most in structure and few in blog posts to transport my old blogs from Jekyll to `vuepress-theme-reco`.

## Guildline

In case you don't get some abbreviation, please read [this glossary](glossary).

## Comments Always Welcomed

I might have expressed inappropriate words or incurred bad influence in this blog. After all, we should be responsible for what we say. If so, please inform me by comment/mail/etc. and I will fix it.

<!--
- cannot scroll to anchor
- code of multiple languages
-->
