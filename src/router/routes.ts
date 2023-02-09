import { RouteRecordRaw } from "vue-router";
import login from "../views/login.vue";
import p404 from "../views/404.vue";

export const Routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'login',
        component: login,
    },
    {
        // 找不到路由重定向到404页面
        path: "/:pathMatch(.*)",
        component: p404,
        meta: { title: '' },
    },
]

