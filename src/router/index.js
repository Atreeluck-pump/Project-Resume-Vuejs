import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Education from '../views/Education.vue'
import Experience from '../views/Experience.vue'
import Skill from '../views/Skill.vue'
import Ablility from '../views/Ability.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/education',
    name: 'Education',
    component: Education
  }, 
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  },
  {
    path: '/skill',
    name: 'Skill',
    component: Skill
  },
  {
    path: '/ability',
    name: 'Ablility',
    component: Ablility
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
