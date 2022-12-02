module.exports = {
  title: "Franklin Qin",
  description: " ",
  dest: "docs/.vuepress/dist",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  theme: "reco",
  themeConfig: {
    // huawei: true,
    nav: [
      {
        text: "Blog",
        link: "/",
        icon: "reco-blog",
      },
      {
        text: "Algo",
        link: "/algo/",
        icon: "reco-api",
      },
      {
        text: "TimeLine",
        link: "/timeline/",
        icon: "reco-date",
      },
      {
        text: "More",
        icon: "reco-message",
        items: [
          {
            text: "Email",
            link: "mailto:1372978422@qq.com?subject=HAHA",
            icon: "reco-mail",
          },
          {
            text: "GitHub",
            link: "https://github.com/franklinqin0",
            icon: "reco-github",
          },
          {
            text: "LinkedIn",
            link: "https://www.linkedin.com/in/franklinqin0/",
            icon: "reco-linkedin",
          },
        ],
      },
    ],
    // "sidebar": "auto",
    sidebar: require("./sidebar"),
    activeHeaderLinks: false, // Default: true
    type: "blog",
    blogConfig: {
      // "category": {
      //   "location": 2,
      //   "text": "Category"
      // },
      tag: {
        location: 3,
        text: "Tag",
      },
    },
    friendLink: [],
    logo: "/favicon.ico",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "franklinqin0",
    authorAvatar: "/favicon.ico",
    record: "",
    startYear: "2020",
    // "noFoundPageByTencent": false
  },
  plugins: [
    "flowchart",
    [
      "sitemap",
      {
        hostname: "https://franklinqin0.me",
        exclude: ["/404.html"],
      },
    ],
    [
      "@vuepress/medium-zoom",
      {
        selector: "img.medium-zoom",
        // medium-zoom options here
        // See: https://github.com/francoischalifour/medium-zoom#options
        options: {
          margin: 16,
        },
      },
    ],
    [
      "@maginapp/vuepress-plugin-katex",
      {
        delimiters: "dollars",
      },
    ],
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-146843725-3",
      },
    ],
    ["@vuepress/last-updated", false],
    [require("./plugins/vuepress-plugin-mode")],
  ],
  markdown: {
    lineNumbers: true,
    extendMarkdown: (md) => {
      md.use(require("markdown-it-footnote"));
    },
  },
};
