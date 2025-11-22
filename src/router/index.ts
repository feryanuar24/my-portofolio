import ContactPage from '@/pages/ContactPage.vue'
import HomePage from '@/pages/HomePage.vue'
import ProjectDetailPage from '@/pages/ProjectDetailPage.vue'
import ProjectsPage from '@/pages/ProjectsPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomePage },
    { path: '/projects', component: ProjectsPage },
    { path: '/project/:id', component: ProjectDetailPage },
    { path: '/contact', component: ContactPage },
  ],
})

export default router
