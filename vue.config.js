const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');
const globalVariables = require('./src/shared/data/variables');

const processVariables = () => {
  let obj = {};

  Object.keys(globalVariables).forEach((el) => {
    if (
      Object.keys(process.env)
        .map((el) => el)
        .includes(el)
    ) {
      obj[el] = `"${process.env[el]}"`;
    }
  });

  return obj;
};

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [new webpack.DefinePlugin(processVariables())],
  },
});
