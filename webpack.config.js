const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    library: "ContextLib",
    libraryTarget: "umd",
    // The umd target generates invalid code for running inside a Node.js.
    // It generates 'window' as the global object.
    // Workaround:
    // https://webpack.js.org/configuration/output/#output-librarytarget
    // https://github.com/webpack/webpack/issues/6677
    globalObject: 'typeof self !== "undefined" ? self : this'
  },
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  externals: ["react", "react-dom"]
};
