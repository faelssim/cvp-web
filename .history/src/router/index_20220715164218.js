/*
 * @Author: wangkun
 * @Date: 2022-07-15 15:33:38
 * @LastEditTime: 2022-07-15 16:42:18
 * @LastEditors: wangkun
 * @Description: 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../components/Layout'
import MicroApp from '../components/MicroApp'
import { HIDDEN_BREADCRUMB } from './metaConfig'

Vue.use(VueRouter)

const routes = [
    { path: '', redirect: '/login' },
    {
        path: '/login',
        component: () => import('../views/Login/index')
    },
    {
        path: '/',
        redirect: 'home',
        component: Layout,
        children: [
            {
                path: 'home',
                component: () => import('../views/Home/index'),
                meta: { title: '首页' }
            },
            {
                path: '*',
                component: MicroApp,
                meta: { title: 'MicroApp' }
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router