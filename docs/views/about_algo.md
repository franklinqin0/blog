---
title: About Algo
date: 9999-12-29
categories:
 - about
tags:
 - whoami
sidebar: false
---

Recently, I spent 3 days to create the site to record [algorithm problems I've solved](https://alog.franklinqin0.me).

It may be slow in the eyes of most skilled developers, but it used to take me at least 3 weeks to push a small enhancement to production at GS. I've encountered many weird errors but also learned so much in the process!

## Hide My Secrets

I was worry about leaking my client ID and secret if I hard code them in [`config.js`]()


https://gist.github.com/derzorngottes/3b57edc1f996dddcab25

https://github.com/imsun/gitment#is-it-safe-to-make-my-client-secret-public
> Although GitHub does't recommend to hard code client secret in the frontend, you can still do that because GitHub will verify your callback URL. In theory, no one else can use your secret except your site.