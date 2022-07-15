<!--
 * @Author: wangkun
 * @Date: 2022-07-15 15:42:22
 * @LastEditTime: 2022-07-15 15:57:37
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
    components: { Breadcrumb },
    data () {
        return {
            isShowBreadcrumb: false
        }
    },
    watch: {
        '$route': {
            handler: function (nv) {
                console.log(nv)
                this.isShowBreadcrumb = nv.meta.hiddenBreadcrumb !== false
            },
            immediate: true
        }
    }
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
        overflow: hidden auto;
        box-sizing: border-box;
        padding: 20px;
    }
}
</style>