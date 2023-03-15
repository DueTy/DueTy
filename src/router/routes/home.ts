import { RouteRecordRaw } from "vue-router";

const Home = () => import('@/views/Home.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
    meta: {
      title: '首页'
    }
  }
]

export default routes