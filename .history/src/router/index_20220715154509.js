/*
 * @Author: wangkun
 * @Date: 2022-07-15 15:33:38
 * @LastEditTime: 2022-07-15 15:45:09
 * @LastEditors: wangkun
 * @Description: 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../components/Layout'

Vue.use(VueRouter)

const routes = [
    { path: '', redirect: '/' },
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: 'home',
                component: () => import('../views/Home/index')
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router