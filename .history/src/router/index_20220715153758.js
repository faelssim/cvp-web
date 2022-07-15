/*
 * @Author: wangkun
 * @Date: 2022-07-15 15:33:38
 * @LastEditTime: 2022-07-15 15:37:58
 * @LastEditors: wangkun
 * @Description: 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

const routes = [
    { path: '', redirect: '/home' },
    { path: '/home', component: () => import('../views/Home/index'), meta: { title: '首页' } }
]