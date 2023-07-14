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
        path: "/components/:trackable",
        component: () => import("../views/component/Root.vue"),
        children: [
            {
                path: "",
                name: "component",
                component: () => import("../views/component/Home.vue")
            },
            {
                path: "details",
                component: () => import("../views/component/details/Details.vue"),
                children: [
                    {
                        path: "",
                        name: "component-details-general",
                        component: () => import("../views/component/details/General.vue")
                    },
                    {
                        path: "interfaces",
                        name: "component-details-interfaces",
                        component: () => import("../views/component/details/Interfaces.vue")
                    },
                    {
                        path: "labels",
                        name: "component-details-labels",
                        component: () => import("../views/component/details/Labels.vue")
                    }
                ]
            },
            {
                path: "issues",
                component: () => import("../views/RouterOnly.vue"),
                children: [
                    {
                        path: "",
                        name: "component-issues",
                        component: () => import("../views/issue/Issues.vue")
                    },
                    {
                        path: ":issue",
                        name: "component-issue",
                        component: () => import("../views/issue/Issue.vue")
                    }
                ]
            }
        ]
    },
    {
        path: "/projects/:trackable",
        component: () => import("../views/project/Root.vue"),
        children: [
            {
                path: "",
                name: "project",
                component: () => import("../views/project/Home.vue")
            },
            {
                path: "details",
                component: () => import("../views/project/Details.vue")
            },
            {
                path: "issues",
                name: "project-issues",
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
