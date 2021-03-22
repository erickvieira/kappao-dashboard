const fs = require("fs");
const lessToJs = require("less-vars-to-js");

const { override, fixBabelImports, addLessLoader } = require("customize-cra");

const paletteLess = fs.readFileSync("./src/styles/variables.less", "utf8");
const variables = lessToJs(paletteLess);

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { ...variables },
  })
);
