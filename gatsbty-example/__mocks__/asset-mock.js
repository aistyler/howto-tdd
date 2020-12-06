
const path = require('path');

/**
 * Transform
 * returns the basename of a file (such that require('logo.jpg'); returns 'logo').
 */
module.exports = {
  process(src, filename, config, option) {
    return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';';
  },
};

// module.exports = "test-file-stub";
