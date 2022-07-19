/*
 * @Author: wangkun
 * @Date: 2022-07-15 14:14:16
 * @LastEditTime: 2022-07-19 10:45:04
 * @LastEditors: wangkun
 * @Description: 
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  css: {
    loaderOptions: {
        less: {
            lessOptions:{
                javascriptEnabled: true
            }
        }
    }
  }
})
