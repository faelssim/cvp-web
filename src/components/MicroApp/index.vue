<!--
 * @Author: wangkun
 * @Date: 2022-07-15 16:29:10
 * @LastEditTime: 2022-07-15 17:38:27
 * @LastEditors: wangkun
 * @Description: 
-->
<template>
    <div id="micro-app"></div>
</template>
<script>
import { loadMicroApp } from 'qiankun'
export default {
    mounted () {
        loadMicroApp({
            name: 'PermissionManage',
            entry: 'http://192.168.0.106:8081', // 本机运行子项目的地址
            container: '#micro-app',
            props: {
                base: '/main/permission'
            }
        })
    }
}
</script>