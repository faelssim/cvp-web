<!--
 * @Author: wangkun
 * @Date: 2022-07-15 15:37:17
 * @LastEditTime: 2022-07-15 16:26:21
 * @LastEditors: wangkun
 * @Description: 
-->
<template>
    <div>
        <KuxTable :columns="columns" :data="list"></KuxTable>
    </div>
</template>
<script>
export default {
    data () {
        return {
            columns: [
                { label: 'Name', prop: 'name' },
                { label: 'Age', prop: 'age' },
                { label: 'From', prop: 'from' }
            ],
            list: [
                { name: 'faelssim', age: 21, from: 'China' },
                { name: 'Rice920', age: 41, from: 'ShangXi' },
                { name: 'Buid', age: 12, from: 'AMS' }
            ]
        }
    }
}
</script>