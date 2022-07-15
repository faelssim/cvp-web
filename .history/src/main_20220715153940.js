/*
 * @Author: wangkun
 * @Date: 2022-07-15 14:14:16
 * @LastEditTime: 2022-07-15 15:39:39
 * @LastEditors: wangkun
 * @Description: 
 */
import Vue from 'vue'
import KuxUI from 'kux-ui'
import router from './router'
import App from './App.vue'

import './style/reset.css'
import './theme/theme.css'

Vue.use(KuxUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
