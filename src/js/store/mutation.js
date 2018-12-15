export default {
  setArticles (state, list) {
    state.articlesList = list
  },
  setTags(state, list) {
    state.tagList = list
  },
  setFilterTag(state, tag) {
    if (!state.filterTagList.some(item => item.name === tag.name)) {
      state.filterTagList.push(tag)
    }
  },
  removeFilterTag(state, tag) {
    if (tag) {
      state.filterTagList.splice(state.filterTagList.findIndex(item => item.name === tag.name), 1)
    } else {
      state.filterTagList = []
    }
  },
  setCategories(state, list) {
    state.categoryList = list
  },
}
