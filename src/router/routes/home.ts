import { RouteRecordRaw } from "vue-router";

const Home = () => import('@/views/home-index/index.vue')

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