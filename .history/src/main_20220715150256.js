/*
 * @Author: wangkun
 * @Date: 2022-07-15 14:14:16
 * @LastEditTime: 2022-07-15 15:02:56
 * @LastEditors: wangkun
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'

import './style/reset.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
