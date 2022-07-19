<!--
 * @Author: wangkun
 * @Date: 2022-07-15 15:42:22
 * @LastEditTime: 2022-07-15 16:22:14
 * @LastEditors: wangkun
 * @Description: 
-->
<template>
    <div class="web-app-layout">
        <breadcrumb v-if="!isHiddenBreadcrumb" />
        <div class="web-app-route">
            <div class="web-app-skeleton" :data-title="viewTitle">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import { HIDDEN_BREADCRUMB } from '../../router/metaConfig'
import Breadcrumb from '../Breadcrumb'
export default {
    components: { Breadcrumb },
    data () {
        return {
            isHiddenBreadcrumb: false,
            viewTitle: ''
        }
    },
    watch: {
        '$route': {
            handler: function ({ meta, matched }) {
                this.viewTitle = '页面标题'
                this.isHiddenBreadcrumb = meta[HIDDEN_BREADCRUMB] === true
            },
            immediate: true
        }
    }
}
</script>
<style lang="less" scoped>
.web-app-layout{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    --title-height: 70px;
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
        padding: calc(var(--title-height) + 30px) 30px 30px;
        border-radius: 15px;
        box-shadow: 0 0 0 1px #e5e5e5;
        overflow: hidden;
        position: relative;
        &:before{
            content: attr(data-title);
            position: absolute;
            height: var(--title-height);
            line-height: var(--title-height);
            top: 0;
            left: 0;
            right: 0;
            background: #f9f9f9;
            box-sizing: border-box;
            padding: 0 20px;
            font-size: 16px;
            font-weight: bold;
        }
    }
}
</style>