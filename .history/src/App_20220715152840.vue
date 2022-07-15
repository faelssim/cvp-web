<!--
 * @Author: wangkun
 * @Date: 2022-07-15 14:14:16
 * @LastEditTime: 2022-07-15 15:26:07
 * @LastEditors: wangkun
 * @Description:
-->
<template>
  <div id="app" class="web-app-container">
    <top-bar />
    <div class="web-app-main">
      <div class="web-app-menu">
        <div class="test"></div>
      </div>
    </div>
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
    flex: 0 1 90%;
    display: flex;
    overflow: hidden;
    .web-app-menu{
      width: 200px;
      height: 100%;
      background: #191970;
      overflow: hidden auto;
      .test{
        height: 1000px;
      }
    }
  }
}
</style>