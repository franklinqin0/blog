// 比对时间
export function compareDate(a, b) {
  const aDateNum = getTimeNum(a.frontmatter.date);
  const bDateNum = getTimeNum(b.frontmatter.date);
  if (aDateNum === 0 || bDateNum === 0) return 0;
  return bDateNum - aDateNum;
}

// 过滤博客数据
export function filterPosts(posts, isTimeline) {
  posts = posts.filter((item, index) => {
    const {
      title,
      frontmatter: { home, date, publish },
    } = item;
    // 过滤多个分类时产生的重复数据
    if (posts.indexOf(item) !== index) {
      return false;
    } else {
      const someConditions =
        home === true || title == undefined || publish === false;
      const boo =
        isTimeline === true
          ? !(someConditions || date === undefined)
          : !someConditions;
      return boo;
    }
  });
  return posts;
}

// 排序博客数据
export function sortPostsByStickyAndDate(posts) {
  posts.sort((prev, next) => {
    const prevSticky = prev.frontmatter.sticky;
    const nextSticky = next.frontmatter.sticky;
    if (prevSticky && nextSticky) {
      return prevSticky == nextSticky
        ? compareDate(prev, next)
        : prevSticky - nextSticky;
    } else if (prevSticky && !nextSticky) {
      return -1;
    } else if (!prevSticky && nextSticky) {
      return 1;
    }
    return compareDate(prev, next);
  });
}

export function sortPostsByDate(posts) {
  posts.sort((prev, next) => {
    return compareDate(prev, next);
  });
}

// 获取时间的数字类型
export function getTimeNum(date) {
  const dateNum = !date ? 0 : new Date(date).getTime();
  return dateNum;
}
