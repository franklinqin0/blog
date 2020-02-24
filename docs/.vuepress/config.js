const themeConfig = require('./config/theme/')

module.exports = {
  title: "Franklin Qin",
  description: '哲人日已遠，典型在夙昔。風簷展書讀，古道照顏色',
  dest: 'docs/.vuepress/dist',
  GAID: 'UA-146843725-1',
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
    [
      'vuepress-plugin-comment',
      {
        choosen: 'gitalk', 
        options: {
          clientID: '60994aaadda1cb23b737',
          clientSecret: '17a720136175e289ac15e1bf613cf2887cdf1209',
          repo: "blog",
          owner: "franklinqin0",
          admin: ["franklinqin0"],
          id: "<%- frontmatter.title %>", // Ensure uniqueness and length less than 50
          distractionFreeMode: true, // Facebook-like distraction free mode
          labels: ["Comment"],
          title: "Comment | <%- frontmatter.title %>",
          body: "<%- frontmatter.title %>：<%- window.location.origin %><%- window.location.pathname %>"
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
    ]
  ]
}
