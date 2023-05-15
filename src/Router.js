import { createRouter, createWebHistory } from "vue-router";
import Home from './components/Home/Home.vue'
import About from './components/About/About.vue'
import Portfolio from './components/Portfolio/Portfolio.vue'
import Blogs from './components/Blogs/Blogs.vue'
import contact from './components/Contact/Contact.vue'
import page404 from './components/page404.vue'

import All from './components/Portfolio/All.vue'
import Logo from './components/Portfolio/Logo.vue'
import Video from './components/Portfolio/Video.vue'
import GraphicDesign from './components/Portfolio/Graphic Design.vue'
let routes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/portfolio/all",
        component: Portfolio,
        children: [
            { path: "/portfolio/all", component: All },
            { path: "/portfolio/logo", component: Logo },
            { path: "/portfolio/video", component: Video },
            { path: "/portfolio/graphicDesign", component: GraphicDesign },
        ]
    },
    { path: "/blogs", component: Blogs, },
    { path: "/contact", component: contact },
    { path: "/:path(.*)*", component: page404 },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;