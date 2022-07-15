<!--
 * @Author: wangkun
 * @Date: 2022-07-15 15:42:22
 * @LastEditTime: 2022-07-15 16:08:45
 * @LastEditors: wangkun
 * @Description: 
-->
<template>
    <div class="web-app-layout">
        <breadcrumb v-if="!isHiddenBreadcrumb" />
        <div class="web-app-route">
            <div class="web-app-skeleton">
                
            </div>
        </div>
    </div>
</template>
<script>
import Breadcrumb from '../Breadcrumb'
export default {
    components: { Breadcrumb },
    data () {
        return {
            isHiddenBreadcrumb: false
        }
    },
    watch: {
        '$route': {
            handler: function (nv) {
                console.log(nv)
                this.isHiddenBreadcrumb = nv.meta.hiddenBreadcrumb === true
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
        padding: 30px;
    }
    .web-app-skeleton{
        width: 100%;
        height: auto;
        box-sizing: border-box;
        border-radius: 15px;
        box-shadow: 0 0 0 1px #e5e5e5;
    }
}
</style>