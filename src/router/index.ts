// Composables
import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: () => import("../views/home/Root.vue"),
        children: [
            {
                path: "",
                name: "home",
                component: () => import("../views/home/Home.vue")
            },
            {
                path: "components",
                component: () => import("../views/home/Components.vue")
            },
            {
                path: "projects",
                component: () => import("../views/home/Projects.vue")
            },
            {
                path: "imss",
                component: () => import("../views/home/IMSs.vue")
            }
        ]
    },
    {
        path: "/components/:component",
        component: () => import("../views/component/Root.vue"),
        children: [
            {
                path: "",
                name: "component",
                component: () => import("../views/component/Home.vue")
            },
            {
                path: "details",
                component: () => import("../views/component/Details.vue")
            },
            {
                path: "issues",
                name: "component-issues",
                component: () => import("../views/issue/Issues.vue")
            }
        ]
    },
    {
        path: "/test",
        name: "Test",
        component: () => import("../views/test/Test.vue")
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
