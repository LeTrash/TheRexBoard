const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: [],

  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   transpileDependencies: true,
// });
