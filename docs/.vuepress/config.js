module.exports = {
  title: "Leseratte",
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
            link:
              "mailto:1372978422@qq.com?subject=I read your blog and here is what I think",
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
    // lastUpdated: "xxx",
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
      "vuepress-plugin-comment",
      {
        choosen: "gitalk",
        options: {
          clientID: "60994aaadda1cb23b737",
          clientSecret: "17a720136175e289ac15e1bf613cf2887cdf1209",
          repo: "blog",
          owner: "franklinqin0",
          admin: ["franklinqin0"],
          id: "<%- frontmatter.title %>", // Ensure uniqueness and length less than 50
          distractionFreeMode: false, // Facebook-like distraction free mode
          labels: ["Comment"],
          title: "Comment | <%- frontmatter.title %>",
          body:
            "<%- frontmatter.title %>：<%- window.location.origin %><%- window.location.pathname %>",
        },
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
    // ["@vuepress/last-updated", false],
  ],
  markdown: {
    lineNumbers: false,
    extendMarkdown: (md) => {
      md.use(require("markdown-it-footnote"));
    },
  },
};
