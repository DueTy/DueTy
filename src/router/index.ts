import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import beforeEach from './before-each'

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(beforeEach)

export default router