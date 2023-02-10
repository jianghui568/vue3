import { RouteRecordRaw } from "vue-router";
import Login from "../views/login.vue";
import p404 from "../views/404.vue";

export const Routes: Array<RouteRecordRaw> = [

    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: { title: '登录' }
    },
    {
        // 找不到路由重定向到404页面
        path: "/:pathMatch(.*)",
        // path: "/404",
        component: p404,
        meta: { title: '' },
    },
]

