---
title: About Algo
date: 2020-02-23
categories:
  - about
tags:
  - whoami
publish: false
---

Recently, I created the [algo site](/algo) to record algorithm problems I've solved.

<!-- more -->

I've encountered many weird errors but also learned so much in the process!

When I migrated my blog [from Jekyll to VuePress](about_this_blog.md#built-transformed), it also took me a few days to figure out how to use the [reco-theme][reco_theme], such as updating frontmatter w/ categories and adding a sidebar. When I created the algo site this time, reco-theme no longer applies b/c it's designed for blogs while I was creating a doc. This forced me to abandon laziness (temporarily :P) and start from scratch by following the [offical VuePress doc](https://vuepress.vuejs.org) step-by-step.

## Which Doc Tool to Use

These are what the doc tool should be:

1. simple to set up
2. clear doc on how to use
3. big enough community to answer my questions
4. good math support

Initially, I didn't want to choose VuePress for the algo site b/c I've alreay used it for the blog and wanted to try sth new.

I did a lot of research on quite a few alternatives before I made my mind to keep using VuePress and hone my skills in Vue!

### [VuePress](https://vuepress.vuejs.org/)

Though VuePress renders beautifully and elegantly, I can't say I don't have any grudge on it:

1. though `vuepress-plugin-mathjax` renders simple math expressions correctly, the [mathjax matrix issue](https://github.com/vuepress/vuepress-plugin-mathjax/issues/14) still hasn't been solved. So I switched to `@markspec/vuepress-plugin-katex` and it works like a charm
2. after `yarn dev`, it's nice that dev server automatically refresh and update the change, I still have to refresh after some changes

### [GitBook](https://www.gitbook.com)

I've seen nice sites built w/ GitBook, but as I the [why not section](https://vuepress.vuejs.org/guide/#gitbook) says, I also felt it's turning to [a commercial product](https://www.gitbook.com/pricing) nowadays. In terms of "slow development reload performance w/ a large amount of files", I can't speak of that per se. Anyway, I want to go for a free option.

### [Docusaurus](https://docusaurus.io)

This doc tool is closely associated w/ [React.js](https://reactjs.org) and used by many of React related projects for doc. I love React but not so much this tool.

### Other Options for Doc Tool

I didn't look too much into other options such as [Storybook](https://storybook.js.org) and [Docz](https://www.docz.site/) b/c the former looks too dazzling and the latter not appealing in style.

## Comment System

Gradually, I think having people from the globe discussing on a common topic is a cool idea rather than a distraction. I hope the comment system is simple, straightfoward, but has some authentication to prevent random chit-chat.

### Valine

I tried [Valine](https://valine.js.org/en) on this blog before b/c the [reco-theme][reco_theme] has a built-in plugin [@vuepress-reco/vuepress-plugin-comments](https://vuepress-theme-reco.recoluan.com/en/views/plugins/comments.html) for comments. The placeholders default to Chinese, though users could [choose English](https://valine.js.org/en/i18n.html). The main reason Valine didn't make me happy was b/c I had to go over the [extra steps](https://github.com/DesertsP/Valine-Admin) to **enable email notification** after a user responds. This took me half a day but still finally failed.

Also, Valine is developed by LeanCloud, who is a _freemium_ SaaS provider. Why do I need to watch for not being charged and going thru all the hassle to enable email responding system?

### [Gitalk](https://gitalk.github.io)

I knew Gitalk recently and thought it's a cool idea to associate commenting w/ [issues on GitHub](https://github.com/franklinqin0/blog/issues). However, it took me quite a while to enable it. I hope the following would make your life easier.

#### Steps

These are the steps to initiate Gitalk on this blog:

1. register an OAuth app on GitHub
   - callback url is the home url
   - one app for only one site/url/repo
2. add Gitalk according to your static site generator
   - for me, it's VuePress and I used [this plugin](https://github.com/dongyuanxin/vuepress-plugin-comment)
3. push & debug
   - coz it's hard to succeed in first trial
   - note that the home & callback url's are in prod, so dev server would redirect to prod url's

#### Caveats

There are a few caveats to watch for when using Gitalk (could see my [`config.js`][config_js]):

1. `id` should be unique and $<50$ chars
2. `title` field is better not changed; otherwise have to the old comments on the post is lost
3. better set `title` and `labels` distinct enough to not confuse _comment issues_ w/ _real issues_
4. YOU have to go to the post **in prod** to initiate comments just on that page

#### Hide Secrets, or Not

After I made Gitalk work on my site, I was worry about leaking my `client ID` and `secret` in hardcoded in [`config.js`][config_js] to the public if I hard code them in [`config.js`][config_js]. So I found `dotenv` introduced [here](https://gist.github.com/derzorngottes/3b57edc1f996dddcab25) to hide env vars, but then Gitalk on my site doesn't work anymore because Github servers don't have my local env vars in `.env`!

Further, I found the following in [Gitment README](https://github.com/imsun/gitment#is-it-safe-to-make-my-client-secret-public):

::: theorem
Although GitHub does't recommend to hard code client secret in the frontend, you can still do that because GitHub will verify your callback URL. In theory, no one else can use your secret except your site.
:::

Thus, at least in this case, hardcoding 2 env vars is alright, and I reverted back and uninstalled `dotenv`.

### Other Options for Comment Systems

[Gitment](https://imsun.github.io/gitment) is quite similar to [Gitalk](https://gitalk.github.io) but supports _likes_.

[Vssue](https://vssue.js.org) claims to work on more than GitHub but I haven't seen many usages.

<!-- ref links -->

[config_js]: https://github.com/franklinqin0/blog/blob/master/docs/.vuepress/config.js
[reco_theme]: vuepress-theme-reco.recoluan.com/en
