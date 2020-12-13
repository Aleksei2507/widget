const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";

const config = {
  mode: isProd ? "production" : "development",
  entry: {
    Widget: ["./src/widget.tsx"],
  },
  output: {
    filename: "[name].js",
    // publicPath = '/',
    path: resolve(__dirname, "dist"),
    library: "[name]",
    libraryTarget: "umd",
    libraryExport: "default",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    modules: ["node_modules", "src/assets"],
    alias: {
      react: "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css?$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader",
        ],
      },
      {
        test: /\.ttf$/,
        use: {
          loader: "url-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      hash: true,
      filename: "index.html",
      inject: true,
      excludeChunks: ["Widget"],
    }),
  ],
};

if (isProd) {
  config.optimization = {
    minimizer: [new TerserWebpackPlugin()],
  };
} else {
  config.devServer = {
    port: 9000,
    open: true,
    hot: true,
    compress: true,
    stats: "errors-only",
    overlay: true,
  };
}

module.exports = config;
