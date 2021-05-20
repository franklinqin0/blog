import { filterPosts, sortPostsByStickyAndDate } from './utils'

export default ({ Vue }) => {
  Vue.mixin({
    computed: {
      // 覆盖新逻辑，首页只出现有category的文档
      $recoPosts() {
        const {
          $categories: { list: articles },
        } = this

        let posts = articles.reduce((allData, currentData) => {
          return [...allData, ...currentData.pages]
        }, [])

        posts = filterPosts(posts, false)
        sortPostsByStickyAndDate(posts)

        return posts
      },
    },
  })
}
