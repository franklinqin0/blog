module.exports = {
  type: 'blog',
  // 博客设置
  blogConfig: {
    category: {
      location: 2, // 在导航栏菜单中所占的位置，默认2
      text: 'Category' // 默认 “分类”
    },
    tag: {
      location: 3, // 在导航栏菜单中所占的位置，默认3
      text: 'Tag' // 默认 “标签”
    }
  },
  // 最后更新时间
  lastUpdated: 'Last Updated', // string | boolean
  // 作者
  author: 'franklinqin0',
  // 备案号
  record: '',
  // 项目开始时间
  // startYear: '2018',
  // valineConfig: {
  //   appId: 'uBOFiIcFPdMloVyGcBcw4I4o-gzGzoHsz',
  //   appKey: 'XCHtYdkmozGx9g1UqOrggXnK',
  //   placeholder: '😋😆😎',
  //   notify: true,
  //   recordIP: true
  // },
  friendLink: [
    {
      title: '午后南杂',
      desc: 'Enjoy when you can, and endure when you must.',
      email: '1156743527@qq.com',
      link: 'https://www.recoluan.com'
    },
    {
      title: 'Ein Verne',
      desc: 'My 1st blog friend',
      email: 'einverne@gmail.com',
      link: 'https://blog.einverne.info'
    },
  ]
}