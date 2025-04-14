import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AboutMeComponent from '@/views/AboutMeComponent.vue'
import EducationComponent from '@/views/EducationComponent.vue'
import WorkExperienceComponent from '@/views/WorkExperienceComponent.vue'
import SkillsComponent from '@/views/SkillsComponent.vue'
import ContactComponent from '@/views/ContactComponent.vue'
import HomeComponent from '@/views/HomeComponent.vue'
import ProjectComponent from '@/views/ProjectComponent.vue'
import ProjectDetailsComponent from '@/views/ProjectDetailsComponent.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeComponent
  },
  {
    path: '/about-me',
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
    name: 'workExperience',
    component: WorkExperienceComponent
  },
  {
    path: '/skills',
    name: 'skills',
    component: SkillsComponent
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectComponent
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactComponent
  },
  { 
    path: '/projects/:id', 
    name: 'ProjectDetail', 
    component: ProjectDetailsComponent, 
    props: true 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
