/*
 * @Author: wangkun
 * @Date: 2022-07-15 15:33:38
 * @LastEditTime: 2022-07-15 16:01:12
 * @LastEditors: wangkun
 * @Description: 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../components/Layout'
import { HIDDEN_BREADCRUMB } from './metaConfig'

Vue.use(VueRouter)

const routes = [
    { path: '', redirect: '/' },
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: 'home',
                component: () => import('../views/Home/index'),
                meta: {
                    [HIDDEN_BREADCRUMB]: false
                }
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router