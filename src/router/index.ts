
import { createWebHistory, createRouter, Router, createWebHashHistory } from "vue-router";
import { Routes } from './routes'

const appRouter: Router = createRouter({
    history: createWebHistory(), // uri模式
    // history: createWebHashHistory(), // 锚点模式
    routes: Routes,
})

appRouter.beforeEach((to, from, next) => {
    console.log('from:', from, '; to:', to)
    next()
})

export default appRouter