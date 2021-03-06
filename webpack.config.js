const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const isDev = process.env.NODE_ENV === "development";

module.exports = {
  entry: {
    main: "./src/pages/main/main.js",
    about: "./src/pages/about/about.js",
    analytics: './src/pages/analytics/analytics.js',
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./scripts/[name].[chunkhash].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },

      {
        test: /\.css$/,
       
        use: [
          (isDev ? 'style-loader' : {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../'// проверить
          }
        }),
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
             
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.(png|jpg|jpe|gif|ico|svg)$/,
        use: [
          "file-loader?name=./images/[name].[ext]",
          {
            loader: "image-webpack-loader",
            options: {
              // esModule: false,
              // mazjpeg: {
              //   progressive: true,
              //   quality: 65,
              // },
              // optipng: {
              //   enabled: false,
              // },
              // pngquant: {
              //   quality: [0.65, 0.9],
              //   speed: 4,
              // },
              // gifsicle: {
              //   interlaced: false,
              // },
              // webp: {
              //   quality: 75,
              // },
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        loader: "file-loader",
        options: {
          name: "./fonts/[name].[ext]",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./styles/[name].[contenthash].css",
    
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require("cssnano"),
      cssProcessorPluginOptions: {
        preset: ["default"],
      },
      canPrint: true,
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: "./src/pages/main/main.html",
      chunks: ['main'],
      filename: "index.html",
     
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: "./src/pages/about/about.html",
      chunks: ['about'],
      filename: "about.html",
     
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: "./src/pages/analytics/analytics.html",
      chunks: ['analytics'],
      filename: "analytics.html",
     
    }),
    new WebpackMd5Hash(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};
