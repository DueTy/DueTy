import vueRouter, { createWebHistory } from 'vue-router'
import routes from './routes'

export default vueRouter.createRouter({
  history: createWebHistory(),
  routes
})