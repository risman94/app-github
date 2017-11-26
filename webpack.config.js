const path = require("path");

const DIST_DIR = path.resolve(__dirname, "public");
const SRC_DIR = path.resolve(__dirname, "src");

const config = {
  entry: SRC_DIR + "/index.js",
  output: {
    path: DIST_DIR + "/app",
    filename: "bundle.js",
    publicPath: "/app/"
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        include: SRC_DIR,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-2"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};

module.exports = config;
