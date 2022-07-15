/*
 * @Author: wangkun
 * @Date: 2022-07-15 15:33:38
 * @LastEditTime: 2022-07-15 16:47:29
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
    { path: '', redirect: '/' },
    {
        path: '/',
        redirect: 'login',
        component: OuterLayout
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router