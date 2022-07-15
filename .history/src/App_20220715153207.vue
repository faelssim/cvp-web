<!--
 * @Author: wangkun
 * @Date: 2022-07-15 14:14:16
 * @LastEditTime: 2022-07-15 15:31:24
 * @LastEditors: wangkun
 * @Description:
-->
<template>
  <div id="app" class="web-app-container">
    <top-bar />
    <div class="web-app-main">
      <div class="web-app-menu">
        <!-- // TODO: Menu Area -->
      </div>
      <div class="web-app-context">
        
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
.test{
        height: 1000px;
      }
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
      background: yellow;
      overflow: hidden;
    }
  }
}
</style>