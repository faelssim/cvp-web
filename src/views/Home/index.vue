<!--
 * @Author: wangkun
 * @Date: 2022-07-15 15:37:17
 * @LastEditTime: 2022-07-19 08:33:02
 * @LastEditors: wangkun
 * @Description: 
-->
<template>
    <div>
        <kuxTable :columns="columns" :data="[]"></kuxTable>
    </div>
</template>
<script>
export default {
    data () {
        return {
            columns: [
                { label: 'No', prop: 'no' },
                { label: 'Name', prop: 'name' }
            ]
        }
    }
}
</script>