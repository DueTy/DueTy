import { RouteRecordRaw } from 'vue-router'
import homeRoutes from './home'
import samples from './samples'


const routes: RouteRecordRaw[] = [
  ...homeRoutes,
  ...samples
]

export default routes