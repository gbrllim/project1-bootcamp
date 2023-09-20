const path = require("path");

module.exports = {
  // ...other webpack config options...

  resolve: {
    fallback: {
      fs: false, // or 'fs': false if needed
      path: false, // or 'path': false if needed
    },
  },
};
