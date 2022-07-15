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
        console.log(this.$route)
    }
}
</script>