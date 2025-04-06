import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AboutMeComponent from '@/views/AboutMeComponent.vue'
import EducationComponent from '@/views/EducationComponent.vue'
import WorkExperienceComponent from '@/views/WorkExperienceComponent.vue'
import SkillsComponent from '@/views/SkillsComponent.vue'
import ContactComponent from '@/views/ContactComponent.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'about-me',
    component: AboutMeComponent
  },
  {
    path: '/education',
    name: 'education',
    component: EducationComponent
  },
  {
    path: '/work-experience',
    name: 'WorkExperience',
    component: WorkExperienceComponent
  },
  {
    path: '/skills',
    name: 'Skills',
    component: SkillsComponent
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
