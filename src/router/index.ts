
import { createWebHistory, createRouter, Router } from "vue-router";
import { Routes } from './routes'

export const appRouter: Router = createRouter({
    // history: createWebHistory(import.meta.env.BASE_URL), // uri模式
    history: createWebHistory(), // 锚点模式
    routes: Routes,
})

appRouter.beforeEach((from, to, next) => {
    console.log('from:', from)
    console.log('to:', to)
    next()
})
