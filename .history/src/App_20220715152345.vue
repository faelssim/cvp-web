<!--
 * @Author: wangkun
 * @Date: 2022-07-15 14:14:16
 * @LastEditTime: 2022-07-15 15:23:39
 * @LastEditors: wangkun
 * @Description:
-->
<template>
  <div id="app" class="web-app-container">
    <top-bar />
    <div class="web-app-main"></div>
  </div>
</template>

<script>
import TopBar from './components/TopBar'
export default {
  name: 'App',
  components: { TopBar}
}
</script>
<style lang="scss" scoped>
.web-app-container{
  width: 100vw;
  height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  .web-app-main{
    flex: 1 1 auto;
  }
}
</style>