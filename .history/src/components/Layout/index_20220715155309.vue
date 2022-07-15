<!--
 * @Author: wangkun
 * @Date: 2022-07-15 15:42:22
 * @LastEditTime: 2022-07-15 15:52:49
 * @LastEditors: wangkun
 * @Description: 
-->
<template>
    <div class="web-app-layout">
        <breadcrumb />
        <div class="web-app-route"></div>
    </div>
</template>
<script>
import Breadcrumb from '../Breadcrumb'
export default {
    components: { Breadcrumb }
}
</script>
<style lang="scss" scoped>
.web-app-layout{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .web-app-route{
        flex: 0 1 100%;
        background: red;
        overflow: hidden auto;
        box-sizing: border-box;
        padding: 20px;
    }
}
</style>