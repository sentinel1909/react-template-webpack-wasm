// Configuration file for Webpack

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },

  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.bundle.js",
    clean: true,
  },

  devServer: {
    port: 3000,
    static: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCSSExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: [MiniCSSExtractPlugin.loader, "css-loader"],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.mdx?$/,
        use: [
          {
            loader: "@mdx-js/loader",
            //** @type {imports("@mdx-js/loader").Options} */\
            options: {},
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new MiniCSSExtractPlugin(),
  ],
};
