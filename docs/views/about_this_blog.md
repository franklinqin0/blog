---
title: About This Blog
date: 9999-12-30
categories:
 - about
tags:
 - whoami
sidebar: false
---

In this blog I talk about how this blog was built, developed, and transformed to the state we now see today.

<!-- more -->

## Why Not Social Networks

In recent years, less and less people bother about creating their personal websites as more and more people pursue Instagrm pictures and Twitter/Weibo posts w/ less than 140 characters.

Simpler and easier, more dazzling and arousing, pictures and funny videos. They sell.

After my brother KV told me that Chinese interact their friends through WeChat moments w/ no more than 9 pictures and a like click, I once seriously doubt the value of creating this site. But I made up my mind to continue this site after reading [this popular essay](https://vanschneider.com/a-love-letter-to-personal-websites), and I quote:

> It’s a place where we can express, on our terms, who we are and what we offer.

So I own a small part of the Internet now :grin:

## Built in Jekyll

In early 2018, I used Jekyll as the static site generator to construct a MVP.Gradually, I found it hard to extend, such as **multi-language support**, **table of contents on sidebar** and **dark mode**. It's not impossible to add an essential feature, but I feel I have to get my hands quite dirty (see [Docker doc](https://github.com/docker/docker.github.io)). I had a list of stuff I want my blog to have but hard to achieve in reasonable amount of time if keep using Jekyll.

## Transformed to VuePress

In early 2020, while searching for alternatives, I was quite excited to discover [`*VuePress*`](https://vuepress.vuejs.org/), which is based on [`Vue.js`](https://vuejs.org/), a framework I've always been quite curious about, after having learned some [`Angular.js`](https://angular.io/) and [`React.js`](https://reactjs.org/). Using `VuePress`, bloggers can build a SPA (blazing fast w/i the site) w/ **dynamic Vue components**, rather than a static site compiled by Jekyll.

My passion faded a bit due to unfamiliarity about `Vue.js` and `VuePress`, until I searched "VuePress blog theme" on GitHub and found the theme [*reco*](https://vuepress-theme-reco.recoluan.com/en). I marvelled at its simplicity and elegance. IT HAS ALMOST ALL THE FEATURES I NEED, if not more! So I spent a few days to make some changes most in structure and few in blog posts to move my old blogs from Jekyll to `vuepress-theme-reco`.

## Guildline

In case you don't get some abbreviation, read [this blog](glossary).

## Comments Always Welcomed

I fear that I might have expressed inappropriate words in this blog and incurred bad influence. If so, please tell me by comment/mail/etc. and I will fix it.
