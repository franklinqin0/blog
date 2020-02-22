---
title: About This Blog
date: 1970-01-02
categories:
 - about
tags:
 - whoami
sidebar: false
---

In this blog I talk about how this blog was built, developed, and transformed to the state we now see today.

<!-- more -->

## Built & Transformed

I was using Jekyll as site generator, but later on I found it hard to extend, such as multi-language support, table of contents on sidebar and dark mode. It's not impossible to add an essential feature, but I feel I have to get my hands quite dirty. I had a list of stuff I want my blog to have but improbable if keep using Jekyll.

Then I was quite excited to discover [`*VuePress*`](https://vuepress.vuejs.org/), which is based on [`Vue.js`](https://vuejs.org/), a framework I've always been quite curious about, after having learned some [`Angular.js`](https://angular.io/) and [`React.js`](https://reactjs.org/).

My passion faded a bit due to unfamiliarity about `Vue.js` and `VuePress`, until I searched "VuePress blog theme" on GitHub. I clicked on the 1st theme [*reco*](https://vuepress-theme-reco.recoluan.com/en/) and marvelled at its simplicity and elegance. I found it marvelously realistic (IDK, I'm BSing here) that IT HAS ALMOST ALL THE FEATURES I NEED, if not more! So I spent a few days to make some changes most in structure and few in blog posts to move my old blogs from Jekyll to `vuepress-theme-reco`.

Is that the end of the story? Far from it! If there are some projects that a serious developer should spent years maintaining on GitHub, if not decades, they should be:

- [`dotfiles`](https://github.com/franklinqin0/dotfiles/tree/master) -> every developer should have one's unique and ever-evolving needs
- [`blog`](https://github.com/franklinqin0/blog/tree/master) -> outlet of thoughts
- `X` -> one's expertise

I already have the former two, and am still finding the `X` project and trying to be a technical expert in a specific area rather than dilettante who scratches the surface of everything but actually knows nothing.

Following are the items I try to finish in the future. When I finish them, I will tick.

- [ ] change theme color to blue
- [ ] explore GitHub comments
- [ ] set up self-runner on *Aliyun* and corresponding *GitHub Action*
- [ ] set up RSS feed
- [ ] play songs at bottom left corner
[ ] multi-language support

Some apps I've always wanted to build:

- [ ] implement md <-> html converter in `sed` (Linux, sed)
- [ ] collaborative code editor built in `Vue` (Node, Docker)
- [ ] `LaTex` <-> picture converter on PC & mobile (ML, OCR)
- [ ] crawls news(hacker, blog, Ted) and show on webpage (ML, web crawler)

To fix:

= [ ] `\begin` not interpreted in vuepress-plugin-mathjax:

https://github.com/vuepress/vuepress-plugin-mathjax/blob/master/src/markdown.js