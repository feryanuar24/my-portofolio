import ContactPage from '@/pages/ContactPage.vue'
import HelloPage from '@/pages/HelloPage.vue'
import HomePage from '@/pages/HomePage.vue'
import ProjectDetailPage from '@/pages/ProjectDetailPage.vue'
import ProjectsPage from '@/pages/ProjectsPage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import StackPage from '@/pages/StackPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/projects', name: 'Projects', component: ProjectsPage },
    { path: '/project/:id', name: 'ProjectDetail', component: ProjectDetailPage },
    { path: '/about', name: 'About', component: AboutPage },
    { path: '/stack', name: 'Stack', component: StackPage },
    { path: '/contact', name: 'Contact', component: ContactPage },
    { path: '/hello', name: 'Hello', component: HelloPage },
  ],
})

export default router
