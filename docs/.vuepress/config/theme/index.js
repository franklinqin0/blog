const themeReco = require('./themeReco.js')
const nav = require('../nav/')

module.exports = Object.assign({}, themeReco, {
  nav,
  search: true,
  searchMaxSuggestions: 10,
  sidebar: 'auto',
})