const themeConfig = require('./config/theme/')

module.exports = {
  title: "Franklin Qin",
  description: '哲人日已遠，典型在夙昔。風簷展書讀，古道照顏色',
  dest: 'docs/.vuepress/dist',
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
    '@vuepress/medium-zoom', 'flowchart',
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