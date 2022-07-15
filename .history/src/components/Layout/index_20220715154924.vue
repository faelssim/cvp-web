<!--
 * @Author: wangkun
 * @Date: 2022-07-15 15:42:22
 * @LastEditTime: 2022-07-15 15:49:24
 * @LastEditors: wangkun
 * @Description: 
-->
<template>
    <div class="web-app-layout">
        <breadcrumb />
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
}
</style>