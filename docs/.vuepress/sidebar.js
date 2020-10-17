const path = require("path");
// full absolute path for docs/
const docs = path.dirname(__dirname);
const utils = require(docs + '/.vuepress/utils/index.js');
const filehelper = require(docs + '/.vuepress/utils/file.js');
module.exports = {
  // '/': "auto",
  '/algo/': utils.genSidebar('', filehelper.getFileName(docs + "/algo/"), false)
};
