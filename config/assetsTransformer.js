// This is a workaround to be able to test components when importing assets
// by replacing it by its name instead of the data.
const path = require('path');
/* eslint-disable */
module.exports = {
  process(src, filename, config, options) {
    return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';';
  },
};
