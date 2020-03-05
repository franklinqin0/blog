const themeConfig = require('./config/theme/')

module.exports = {
  title: "Franklin Qin",
  description: 'Just do it!',
  dest: 'docs/.vuepress/dist',
  noFoundPageByTencent: false,
  editLinks: true,
  editLinkText: 'Improve this page on GitHub!',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig,
  markdown: {
    lineNumbers: true
  },
  plugins: [
    'flowchart',
    [
      'sitemap',
      {
        hostname: 'https://franklinqin0.me'
      }
    ],
    // [
    //   'vuepress-plugin-comment',
    //   {
    //     choosen: 'gitalk', 
    //     options: {
    //       clientID: '60994aaadda1cb23b737',
    //       clientSecret: '17a720136175e289ac15e1bf613cf2887cdf1209',
    //       repo: "blog",
    //       owner: "franklinqin0",
    //       admin: ["franklinqin0"],
    //       id: "<%- frontmatter.title %>", // Ensure uniqueness and length less than 50
    //       distractionFreeMode: true, // Facebook-like distraction free mode
    //       labels: ["Comment"],
    //       title: "Comment | <%- frontmatter.title %>",
    //       body: "<%- frontmatter.title %>：<%- window.location.origin %><%- window.location.pathname %>"
    //     }
    //   }
    // ],
    [
      'vuepress-plugin-mygitalk', {
        // 是否启用(关闭请设置为false)(default: true)
        enable: true,
        // 是否开启首页评论(default: true)
        home: false,
        // Gitalk配置
        gitalk: {
          // GitHub Application Client ID.
          clientID: '60994aaadda1cb23b737',
          // GitHub Application Client Secret.
          clientSecret: '17a720136175e289ac15e1bf613cf2887cdf1209',
          // GitHub repository. 存储评论的 repo
          repo: 'blog',
          // GitHub repository 所有者，可以是个人或者组织。
          owner: 'franklinqin0',
          // GitHub repository 的所有者和合作者 (对这个 repository 有写权限的用户)。(不配置默认是owner配置)
          admin: ['franklinqin0'],
          // 设置语言(default: zh-CN)
          language: 'zh-CN',
        }
      }
    ],
    [
      '@vuepress/medium-zoom',
      {
        selector: 'img.medium-zoom',
        // medium-zoom options here
        // See: https://github.com/francoischalifour/medium-zoom#options
        options: {
          margin: 16
        }
      }
    ],
    [
      'vuepress-plugin-mathjax',
      {
        target: 'svg',
        macros: {
          '*': '\\times',
          '\\N': '\\mathbb{N}',
          '\\Z': '\\mathbb{Z}',
          '\\Q': '\\mathbb{Q}',
        },
      },
    ],
    [
      '@vuepress-reco/vuepress-plugin-rss',
      {
      site_url: 'https://franklinqin0.me',
      count: 20
      }
    ],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-146843725-3'
      }
    ],
    ['container', {
      type: 'danger',
      defaultTitle: {
        '/': 'WARNING',
        '/zh/': '警告'
      }
    }],
    ['container', {
      type: 'right',
      defaultTitle: ''
    }],
    ['container', {
      type: 'theorem',
      before: info => `<div class="custom-block theorem"><p class="title">${info}</p>`,
      after: '</div>',
    }],
    ['container', {
      type: 'details',
      before: info => `<details class="custom-block details">${info ? `<summary>${info}</summary>` : ''}\n`,
      after: () => '</details>\n',
      defaultTitle: {
        '/': 'See More',
        '/zh/': '更多'
      }
    }]
  ]
}
