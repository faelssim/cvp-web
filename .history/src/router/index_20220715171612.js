/*
 * @Author: wangkun
 * @Date: 2022-07-15 15:33:38
 * @LastEditTime: 2022-07-15 17:16:11
 * @LastEditors: wangkun
 * @Description: 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import OuterLayout from '../components/Layout/outer'
import Layout from '../components/Layout'
import MicroApp from '../components/MicroApp'
import { HIDDEN_BREADCRUMB } from './metaConfig'

Vue.use(VueRouter)

const routes = [
    { path: '', redirect: '/login' },
    {
        path: '/login',
        component: () => import('../views/Login')
    },
    {
        path: '/main',
        component: OuterLayout,
        redirect: '/main/home',
        children: [
            { path: 'home', component: () => import('../views/Home/index') },
            {
                path: 'aws',
                component: Layout,
                children: [
                    { path: '*', component: MicroApp, meta: { title: 'MicroApp' } }
                ]
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router