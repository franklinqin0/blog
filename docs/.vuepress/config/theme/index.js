const themeReco = require('./themeReco.js')
const nav = require('../nav/')
const sidebar = require('../sidebar/')

module.exports = Object.assign({}, themeReco, {
  nav,
  sidebar,
  search: true,
  searchMaxSuggestions: 10,
  sidebar: 'auto',
})