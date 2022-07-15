<!--
 * @Author: wangkun
 * @Date: 2022-07-15 14:14:16
 * @LastEditTime: 2022-07-15 16:56:38
 * @LastEditors: wangkun
 * @Description:
-->
<template>
  <div class="web-app-container">
    <top-bar />
    <div class="web-app-main">
      <div class="web-app-menu">
        <!-- // TODO: Menu Area -->
      </div>
      <div class="web-app-context">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from '../TopBar'
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
    flex: 0 1 100%;
    display: flex;
    overflow: hidden;
    .web-app-menu{
      width: 200px;
      height: 100%;
      background: #e8e8e8;
      overflow: hidden auto;
    }
    .web-app-context{
      flex: 0 1 100%;
      height: 100%;
      overflow: hidden;
    }
  }
}
</style>