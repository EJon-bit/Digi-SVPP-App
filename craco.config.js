const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

const CracoAntDesignPlugin = require("craco-antd");

process.env.BROWSER = "none"; 

module.exports = {
  plugins: [{ plugin: CracoAntDesignPlugin}]
 
};