const path = require("path");

module.exports = {
  entry: { main: "./src/index.js", vendor: "./src/vendor.js" },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      // {
      //   test: /\.(svg|png|jpe?g|gif)$/i,
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       esModule: false,
      //       name: "[name].[contenthash].[ext]",
      //       outputPath: "imgs",
      //     },
      //   },
      // },
    ],
  },
};
