const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      // '/api': {
      //   target: "http://39.98.123.211:8510",
      //   pathRewrite: { '^/api': '' },
      // },
      '/acl': {
        target: 'http://39.98.123.211:8170/',
        pathRewrite: { '^/acl': '' }
      },
      '/product': {
        target: 'http://39.98.123.211:8510',
        pathRewrite: { '^/product': '' }
      }
    },
  },
});
