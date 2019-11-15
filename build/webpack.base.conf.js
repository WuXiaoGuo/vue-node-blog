"use strict";
const path = require("path");
const utils = require("./utils");
const isAdmin = process.env.NODE_ENV_TYPE === 'admin'

const config = isAdmin ? require("../config").admin : require('../config').client;
const vueLoaderConfig = require("./vue-loader.conf");

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

module.exports = {
  // context webpack使用的根目录，
  context: path.resolve(__dirname, "../"),
  // entry 表示入口，webpack执行构建的第一步从Entry开始
  entry: {
    app: isAdmin ? resolve("/src/admin/main.js") : resolve("/src/client/main.js")
  },
  // output 如何输出结果：在webpack经过一系列处理后，如何输出最终想要的代码
  output: {
    // path 输出文件存放的目录，
    path: config.build.assetsRoot,
    // filename 输出文件的名称
    filename: "[name].js",
    // publicPath 发布到线上的所有资源的url前缀
    publicPath:
      process.env.NODE_ENV === "production"
        ? config.build.assetsPublicPath
        : config.dev.assetsPublicPath
  },
  // resolve 配置寻找模块的规则
  resolve: {
    // extensions 模块的后缀名
    extensions: [".js", ".vue", ".json"],
    // alias 模块别名配置，用于映射模块
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": isAdmin ? resolve("src/admin") : resolve("src/client"),
      'assets': isAdmin ? resolve("src/admin/assets") : resolve("src/client/assets")
    }
  },
  // module 配置模块相关
  module: {
    // rules 配置loader
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [
          resolve("src"),
          resolve("test"),
          resolve("node_modules/webpack-dev-server/client")
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("img/[name].[hash:7].[ext]")
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("media/[name].[hash:7].[ext]")
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("fonts/[name].[hash:7].[ext]")
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: "empty",
    fs: "empty",
    net: "empty",
    tls: "empty",
    child_process: "empty"
  }
};
