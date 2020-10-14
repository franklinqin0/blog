/**
 * get all file names under a directory
 */
const fs = require('fs');
// exclude the .DS_Store file on MacOS
var excludes = ['.DS_Store']

var filehelper = {
  getFileName: function (rpath) {
    let filenames = [];
    fs.readdirSync(rpath).forEach(file => {
      if (excludes.indexOf(file) < 0) {
        fullpath = rpath + "/" + file
        var fileinfo = fs.statSync(fullpath)
        if (fileinfo.isFile()) {
          if (file === 'README.md') {
            file = '';
          } else {
            file = file.replace('.md', '');
          }
          filenames.push(file);
        }
      }
    })
    filenames.sort();
    return filenames;
  }
}
module.exports = filehelper;