
const path = require("path");
module.exports = {
  configureWebpack: {
    devtool: "source-map"
  },
  chainWebpack: config => {
    config
      .entry("app")
      .clear()
      .add("./app/main.js")
      .end();
    config.resolve.alias
      .set("@", path.join(__dirname, "./app"))
  }
};