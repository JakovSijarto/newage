import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/pages/home.vue"
import About from "../components/pages/about.vue"
import Contact from "../components/pages/contact.vue"
import Resume from "../components/pages/resume.vue"
import NotFound from "../components/NotFound.vue"

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/resume',
        component: Resume
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes 
})

export default router 